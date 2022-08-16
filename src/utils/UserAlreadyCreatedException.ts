import { BaseHTTPException } from './BaseHTTPException'

class UserAlreadyCreatedException extends BaseHTTPException {
  constructor (statusCode: number, message: string) {
    super(statusCode, message)
  }
}

export { UserAlreadyCreatedException }
