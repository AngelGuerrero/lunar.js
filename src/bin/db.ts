const path = require('path')
const glob = require('glob')
const Blueprint = require('../core/Blueprint')

const migrationsPath = path.join(__dirname, '../database/migrations')
const files = glob.sync(`${migrationsPath}/*.ts`)

const seedersPath = path.join(__dirname, '../database/seeders')
const seedersFiles = glob.sync(`${seedersPath}/*.seeders.ts`)

const onRequireFile = (file: any) => new Promise((resolve, reject) => resolve(require(file)))

const reverseMigrations = async () => {
  console.log('Running reverse migrations')

  files.forEach((file: any) => {
    onRequireFile(file).then((result: any) => {
      const M = result.Migration

      const migration = new M()

      migration
        .down()
        .then(() => console.log('ok'))
        .catch((err: any) => console.log('err :>> ', err))
    })
  })
}

const migrate = async () => {
  console.log('Running migrations')

  files.forEach((file: any) => {
    onRequireFile(file).then((result: any) => {
      const M = result.Migration

      const migration = new M()

      migration.up().then(() => {
        console.log(`Migration ${file} executed`)
      })
    })
  })
}

const seed = async () => {
  console.log('Running seeders')

  seedersFiles.forEach((file: any) => {
    onRequireFile(file).then((result: any) => {
      const seeder = result.seeder

      seeder()
    })
  })
}

module.exports.migrate = migrate
module.exports.seed = seed
module.exports.reverseMigrations = reverseMigrations
