-- CreateTable
CREATE TABLE "Bom" (
    "id" TEXT NOT NULL,
    "tool" TEXT NOT NULL,
    "format" TEXT NOT NULL,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "Bom_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Metadata" (
    "bomref" TEXT NOT NULL,
    "purl" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "version" TEXT NOT NULL,
    "cpe" TEXT NOT NULL,

    CONSTRAINT "Metadata_pkey" PRIMARY KEY ("bomref","purl")
);

-- CreateTable
CREATE TABLE "Vulnerability" (
    "vulns_id" TEXT NOT NULL,
    "score" TEXT NOT NULL,
    "severity" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Component" (
    "bomref" TEXT NOT NULL,
    "purl" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "version" TEXT NOT NULL,
    "vulns_id" TEXT NOT NULL,
    "fixed_version" TEXT NOT NULL,
    "id" TEXT NOT NULL,

    CONSTRAINT "Component_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Metadata_purl_key" ON "Metadata"("purl");

-- CreateIndex
CREATE UNIQUE INDEX "Vulnerability_vulns_id_key" ON "Vulnerability"("vulns_id");

-- CreateIndex
CREATE UNIQUE INDEX "Component_purl_key" ON "Component"("purl");

-- AddForeignKey
ALTER TABLE "Component" ADD CONSTRAINT "Component_bomref_purl_fkey" FOREIGN KEY ("bomref", "purl") REFERENCES "Metadata"("bomref", "purl") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Component" ADD CONSTRAINT "Component_vulns_id_fkey" FOREIGN KEY ("vulns_id") REFERENCES "Vulnerability"("vulns_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Component" ADD CONSTRAINT "Component_id_fkey" FOREIGN KEY ("id") REFERENCES "Bom"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
