import { BaseController } from './BaseController'
import { IUser } from '../interfaces/IUser'
import _ from 'lodash'

class UsersController extends BaseController {
  constructor () {
    super()
    console.log('UsersController created')
  }

  async index (req: any, res: any): Promise<IUser[]> {
    let users: IUser[] = []

    try {
      users = await this.db.all('users')
    } catch (error) {
      res.status(500).json({ error })
    }

    return res.status(200).json(users)
  }
}

module.exports = UsersController
