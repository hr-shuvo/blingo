import 'dotenv/config'

import { neon } from '@neondatabase/serverless'
import * as schema from '../db/schema'
const { drizzle } = require('drizzle-orm/neon-http')

const sql = neon(process.env.DATABASE_URL!)

const db = drizzle(sql, {schema})





const main = async () =>{
    try{
        console.log("Seeding database")

        await db.delete(schema.courses)
        await db.delete(schema.userProgress)


        await db.insert(schema.courses).values([
            {
                title:'Spanish',
                imageSrc:'/es.svg'
            },
            {
                title:'Italian',
                imageSrc:'/it.svg'
            },
            {
                title:'French',
                imageSrc:'/fr.svg'
            },
            {
                title:'Croatian',
                imageSrc:'/hr.svg'
            },
        ])


        console.log('Seeding finished')
    }
    catch(error){
        console.error(error)
        throw new Error('Failed to seed the database')
    }

}

main();