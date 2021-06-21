import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

export default async function openDB(){
  return await open({ filename :'./mydb.sqlite', driver: sqlite3.cached.Database});
}