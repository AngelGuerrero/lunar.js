import { Blueprint } from '../../core/Blueprint'
import { faker } from '@faker-js/faker'
import _ from 'lodash'

const limit = 10

function seeder () {
  console.log(`Running seeder with limit ${limit}`)

  const db = new Blueprint()

  for (let it = 0; it <= limit; it++) {
    db.sql(`INSERT INTO users (name, email, active) VALUES (?, ?, ?)`, [
      faker.name.findName(),
      faker.internet.email(),
      _.sample(['true', 'false']) === 'true'
    ]).catch(err => {
      console.log('err :>> ', err)
    })
  }
}

module.exports.seeder = seeder
