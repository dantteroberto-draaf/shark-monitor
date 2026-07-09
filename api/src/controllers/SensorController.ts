import type { Request, Response } from 'express';
import { prisma } from '../lib/prisma.js';
import type { Sensor } from '@prisma/client';
import { json } from 'node:stream/consumers';

export default class SensorController {
    // view all sensors
    async getAllSensores(req: Request, res: Response) {
        try {
            const sensores = await prisma.sensor.findMany();
            
            return res.status(200).json(sensores);

        } catch(error) {
            return res.status(500).json({error: "Falha ao listar sensores."});
        }
    }

    // register a new sensor to the database
    async createSensor(req: Request, res: Response) {
        try {
            const dadosSensor = req.body;
            const newSensor = await prisma.sensor.create({data: dadosSensor });

            return res.status(201).json(newSensor);

        } catch (error) {
            return res.status(500).json({error: "Falha ao registrar novo sensor."})
        }
    }

    // update informations from a sensor
    async updateSensor(req: Request, res: Response) {
        try {
            const dadosUpdate = req.body;
            const idSensor = String(req.params.id);
            const updatedSensor = await prisma.sensor.update({where: { id: idSensor }, data: dadosUpdate});
            return res.status(200).json(updatedSensor);
        } catch (error) {
            return res.status(500).json({error: "Falha ao atualizar sensor."})            
        }
    }

    // delete a sensor from the database
    async deleteSensor(req: Request, res: Response) {
        try {
            const idSensor = String(req.params.id);
            const deletedSensor = await prisma.sensor.delete({where: {id: idSensor}});
            return res.status(200).json(deletedSensor);
        } catch (error) {
            return res.status(500).json({error: "Falha ao remover sensor."})
        }
    }
}