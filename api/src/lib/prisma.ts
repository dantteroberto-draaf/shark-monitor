import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';

// Cria o pool de conexão usando a URL do seu .env
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// Passa o pool para o adaptador do Prisma
const adapter = new PrismaPg(pool);

// Inicializa o cliente do Prisma com o adaptador configurado
const prisma = new PrismaClient({ adapter });

export { prisma };