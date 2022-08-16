const sqlite3 = require('sqlite3')
const path = require('path')

class Blueprint {
  db: any = null

  //
  tableName: string = ''
  //
  columns: string[] = []

  constructor () {
    const dbPath = path.join(__dirname, '../database/database.sqlite')

    this.db = new sqlite3.Database(dbPath, (error: any) => {
      if (error) {
        console.error(error)
      }
    })
  }

  sql (sql: string, params: any[] = []): Promise<any> {
    return new Promise((resolve, reject) => {
      this.db.run(sql, params, (error: any, rows: any) => {
        if (error) {
          reject(error)
        }

        console.log('Executed SQL')
        resolve(rows)
      })
    })
  }

  dml (sql: string, params: any[] = []): Promise<any> {
    return new Promise((resolve, reject) => {
      this.db.all(sql, params, (error: any, rows: any) => {
        if (error) {
          reject(error)
        }

        console.log('Executed DML')
        resolve(rows)
      })
    })
  }

  table (table: string, callback: Function) {
    this.tableName = table

    if (callback) {
      callback(this)
    }
  }

  column (name: string, type: string, options: any = {}) {
    this.columns.push(
      `${name} ${type} ${options.primaryKey ? 'PRIMARY KEY' : ''} ${
        options.autoIncrement ? 'AUTOINCREMENT' : ''
      }`
    )
  }

  createTable (): Promise<any> {
    const sql = `CREATE TABLE IF NOT EXISTS ${this.tableName} (${this.columns.join(', ')})`
    return this.sql(sql)
  }

  dropTable (table: string): Promise<any> {
    const sql = `DROP TABLE IF EXISTS ${table}`
    return this.sql(sql)
  }

  all (table: string): Promise<any> {
    const sql = `SELECT * FROM ${table}`
    return this.dml(sql)
  }
}

export { Blueprint }
