"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpInternalServerError = exports.HttpNotAcceptableError = exports.HttpMethodNotAllowedError = exports.HttpNotFoundError = exports.HttpForbiddenError = exports.HttpPaymentRequiredError = exports.HttpUnauthorizedError = exports.HttpError = void 0;
class HttpErrorBase extends Error {
    constructor(statusCode, message = "", code, previous) {
        super(message);
        this.statusCode = statusCode;
        this.message = message;
        this.code = code;
        this.previous = previous;
        this.name = "HttpError";
    }
}
function HttpError(...args) {
    const error = new HttpErrorBase(args[0], args[1], args[2], args[3]);
    return error;
}
exports.HttpError = HttpError;
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
function HttpInternalServerError(...args) {
    return HttpError(500, ...args);
}
exports.HttpInternalServerError = HttpInternalServerError;
