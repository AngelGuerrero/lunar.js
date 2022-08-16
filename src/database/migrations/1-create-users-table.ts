import { Blueprint } from '../../core/Blueprint'

class Migration {
  blueprint: Blueprint

  constructor () {
    this.blueprint = new Blueprint()
  }

  up () {
    this.blueprint.table('users', (blueprint: Blueprint) => {
      blueprint.column('id', 'INTEGER', { primaryKey: true, autoIncrement: true })
      blueprint.column('name', 'TEXT')
      blueprint.column('email', 'TEXT')
      blueprint.column('active', 'INTEGER')
    })

    return this.blueprint.createTable()
  }

  down () {
    return this.blueprint.dropTable('users')
  }
}

export { Migration }
