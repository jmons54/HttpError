class HttpErrorBase extends Error {

  public name = "HttpError";
  
  constructor(
    public statusCode:number,
    public message: string = "", 
    public code?: number, 
    public previous?: Error
  ) {
    super(message);
  }
}
 
export function HttpError(...args:any[]) {
  const error = new HttpErrorBase(
    args[0],
    args[1], 
    args[2],
    args[3]
  );
  return error;
}

export function HttpUnauthorizedError(...args:any[]) {
  return HttpError(401, ...args);
}

export function HttpPaymentRequiredError(...args:any[]) {
  return HttpError(402, ...args);
}

export function HttpForbiddenError(...args:any[]) {
  return HttpError(403, ...args);
}

export function HttpNotFoundError(...args:any[]) {
  return HttpError(404, ...args);
}

export function HttpMethodNotAllowedError(...args:any[]) {
  return HttpError(405, ...args);
}

export function HttpNotAcceptableError(...args:any[]) {
  return HttpError(406, ...args);
}

export function HttpInternalServerError(...args:any[]) {
  return HttpError(500, ...args);
}
