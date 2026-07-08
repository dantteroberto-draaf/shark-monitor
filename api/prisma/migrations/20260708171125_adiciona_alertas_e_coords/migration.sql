-- CreateTable
CREATE TABLE "alertas" (
    "id" TEXT NOT NULL,
    "sensorId" TEXT NOT NULL,
    "nivel" TEXT NOT NULL,
    "confirmado" BOOLEAN NOT NULL DEFAULT false,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "alertas_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "alertas" ADD CONSTRAINT "alertas_sensorId_fkey" FOREIGN KEY ("sensorId") REFERENCES "sensores"("id") ON DELETE CASCADE ON UPDATE CASCADE;
