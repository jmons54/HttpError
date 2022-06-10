"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpNotAcceptableError = exports.HttpMethodNotAllowedError = exports.HttpNotFoundError = exports.HttpForbiddenError = exports.HttpPaymentRequiredError = exports.HttpUnauthorizedError = exports.HttpInternalServerError = exports.HttpError = void 0;
class HttpErrorBase extends Error {
    constructor(message = "", code, previous) {
        super(message);
        this.message = message;
        this.code = code;
        this.previous = previous;
        this.name = "HttpError";
        this.statusCode = 500;
    }
}
function HttpError(...args) {
    const error = new HttpErrorBase(args[1], args[2], args[3]);
    error.statusCode = args[0];
    return error;
}
exports.HttpError = HttpError;
function HttpInternalServerError(...args) {
    return HttpError(401, ...args);
}
exports.HttpInternalServerError = HttpInternalServerError;
function HttpUnauthorizedError(...args) {
    return HttpError(401, ...args);
}
exports.HttpUnauthorizedError = HttpUnauthorizedError;
function HttpPaymentRequiredError(...args) {
    return HttpError(402, ...args);
}
exports.HttpPaymentRequiredError = HttpPaymentRequiredError;
function HttpForbiddenError(...args) {
    return HttpError(403, ...args);
}
exports.HttpForbiddenError = HttpForbiddenError;
function HttpNotFoundError(...args) {
    return HttpError(404, ...args);
}
exports.HttpNotFoundError = HttpNotFoundError;
function HttpMethodNotAllowedError(...args) {
    return HttpError(405, ...args);
}
exports.HttpMethodNotAllowedError = HttpMethodNotAllowedError;
function HttpNotAcceptableError(...args) {
    return HttpError(406, ...args);
}
exports.HttpNotAcceptableError = HttpNotAcceptableError;
