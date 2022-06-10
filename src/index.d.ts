interface HttpErrorBase {
  statusCode:number;
  message?:string;
  code?:number;
  previous?:Error;
}

interface HttpErrorConstructor extends HttpErrorBase {
  (
    statusCode: number, 
    message?: string, 
    code?: number, 
    previous?: Error
  );
}

interface HttpErrorCustomConstructor extends HttpErrorBase {
  (
    message?: string, 
    code?: number, 
    previous?: Error
  );
}

export declare const HttpError:HttpErrorConstructor;
export declare const HttpInternalServerError:HttpErrorCustomConstructor;
export declare const HttpUnauthorizedError:HttpErrorCustomConstructor;
export declare const HttpPaymentRequiredError:HttpErrorCustomConstructor;
export declare const HttpForbiddenError:HttpErrorCustomConstructor;
export declare const HttpNotFoundError:HttpErrorCustomConstructor;
export declare const HttpMethodNotAllowedError:HttpErrorCustomConstructor;
export declare const HttpNotAcceptableError:HttpErrorCustomConstructor;
