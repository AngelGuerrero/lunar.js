import { Blueprint } from '../core/Blueprint'

class BaseController {
  db: Blueprint

  constructor () {
    this.db = new Blueprint()
  }
}

export { BaseController }
