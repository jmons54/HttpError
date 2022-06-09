"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpNotAcceptableError = exports.HttpMethodNotAllowedError = exports.HttpNotFoundError = exports.HttpForbiddenError = exports.HttpPaymentRequiredError = exports.HttpUnauthorizedError = exports.HttpInternalServerError = exports.HttpError = exports.HttpErrorAbstract = void 0;
class HttpErrorAbstract {
    constructor(message = "", code, previous) {
        this.message = message;
        this.code = code;
        this.previous = previous;
        this.name = "HttpError";
    }
}
exports.HttpErrorAbstract = HttpErrorAbstract;
class HttpError extends HttpErrorAbstract {
    constructor(statusCode, message = "", code, previous) {
        super(message, code, previous);
        this.statusCode = statusCode;
        this.message = message;
        this.code = code;
        this.previous = previous;
    }
}
exports.HttpError = HttpError;
class HttpInternalServerError extends HttpErrorAbstract {
    constructor() {
        super(...arguments);
        this.statusCode = 500;
    }
}
exports.HttpInternalServerError = HttpInternalServerError;
class HttpUnauthorizedError extends HttpErrorAbstract {
    constructor() {
        super(...arguments);
        this.statusCode = 401;
    }
}
exports.HttpUnauthorizedError = HttpUnauthorizedError;
class HttpPaymentRequiredError extends HttpErrorAbstract {
    constructor() {
        super(...arguments);
        this.statusCode = 402;
    }
}
exports.HttpPaymentRequiredError = HttpPaymentRequiredError;
class HttpForbiddenError extends HttpErrorAbstract {
    constructor() {
        super(...arguments);
        this.statusCode = 403;
    }
}
exports.HttpForbiddenError = HttpForbiddenError;
class HttpNotFoundError extends HttpErrorAbstract {
    constructor() {
        super(...arguments);
        this.statusCode = 404;
    }
}
exports.HttpNotFoundError = HttpNotFoundError;
class HttpMethodNotAllowedError extends HttpErrorAbstract {
    constructor() {
        super(...arguments);
        this.statusCode = 405;
    }
}
exports.HttpMethodNotAllowedError = HttpMethodNotAllowedError;
class HttpNotAcceptableError extends HttpErrorAbstract {
    constructor() {
        super(...arguments);
        this.statusCode = 406;
    }
}
exports.HttpNotAcceptableError = HttpNotAcceptableError;
