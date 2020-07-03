import { Request, Response, json } from 'express';
import { Client } from '@hubspot/api-client';
import { config } from './config';

export async function contacts(request: Request, response: Response) {

    const hubspotClient = new Client({ apiKey: config.api_key })

    const allContacts = await hubspotClient.crm.contacts.getAll();

    return response.json(allContacts);
}