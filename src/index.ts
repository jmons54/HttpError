export abstract class HttpErrorAbstract implements Error {

  public name = "HttpError"
  
  public abstract statusCode:number;
  
  constructor(
    public message: string = "", 
    public code?: number, 
    public previous?: Error
  ) {}
}

export class HttpError extends HttpErrorAbstract  {

  constructor(
    public statusCode: number, 
    public message: string = "", 
    public code?: number, 
    public previous?: Error
  ) {
    super(message, code, previous)
  }
}

export class HttpInternalServerError extends HttpErrorAbstract {
  statusCode = 500
}

export class HttpUnauthorizedError extends HttpErrorAbstract {
  statusCode = 401
}

export class HttpPaymentRequiredError extends HttpErrorAbstract {
  statusCode = 402
}

export class HttpForbiddenError extends HttpErrorAbstract {
  statusCode = 403
}

export class HttpNotFoundError extends HttpErrorAbstract {
  statusCode = 404
}

export class HttpMethodNotAllowedError extends HttpErrorAbstract {
  statusCode = 405
}

export class HttpNotAcceptableError extends HttpErrorAbstract {
  statusCode = 406
}
