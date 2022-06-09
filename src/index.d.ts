export abstract class HttpErrorAbstract extends Error {
  
  statusCode:number;
  message:string;
  code:number;
  previous:Error;
  
  constructor(
    message: string, 
    code?: number,
    previous?: Error
  );
}

export class HttpError extends HttpErrorAbstract  {

  constructor(
    statusCode: number, 
    message: string, 
    code?: number, 
    previous?: Error
  );
}

export class HttpInternalServerError extends HttpErrorAbstract {}
export class HttpUnauthorizedError extends HttpErrorAbstract {}
export class HttpPaymentRequiredError extends HttpErrorAbstract {}
export class HttpForbiddenError extends HttpErrorAbstract {}
export class HttpNotFoundError extends HttpErrorAbstract {}
export class HttpMethodNotAllowedError extends HttpErrorAbstract {}
export class HttpNotAcceptableError extends HttpErrorAbstract {}
