class BaseHTTPException extends Error {
  statusCode: number

  constructor (statusCode: number, message: string) {
    super()
    this.statusCode = statusCode
    this.message = message
    this.name = message
  }
}

export { BaseHTTPException }
