-- CreateTable
CREATE TABLE "sensores" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "localizacao" TEXT NOT NULL,
    "bateria" INTEGER NOT NULL DEFAULT 100,
    "status_alerta" BOOLEAN NOT NULL DEFAULT false,
    "ultima_leitura" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "sensores_pkey" PRIMARY KEY ("id")
);
