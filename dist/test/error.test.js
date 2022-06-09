"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../src/index");
test('HttpError', () => {
    const error = new index_1.HttpError(414, "Test error", 1234, new Error);
    expect(error).toBeInstanceOf(index_1.HttpErrorAbstract);
    expect(error.statusCode).toBe(414);
    expect(error.message).toBe("Test error");
    expect(error.code).toBe(1234);
    expect(error.previous).toBeInstanceOf(Error);
});
test('HttpInternalServerError', () => {
    const error = new index_1.HttpInternalServerError;
    expect(error.statusCode).toBe(500);
});
test('HttpUnauthorizedError', () => {
    const error = new index_1.HttpUnauthorizedError;
    expect(error.statusCode).toBe(401);
});
test('HttpPaymentRequiredError', () => {
    const error = new index_1.HttpPaymentRequiredError;
    expect(error.statusCode).toBe(402);
});
test('HttpForbiddenError', () => {
    const error = new index_1.HttpForbiddenError;
    expect(error.statusCode).toBe(403);
});
test('HttpNotFoundError', () => {
    const error = new index_1.HttpNotFoundError;
    expect(error.statusCode).toBe(404);
});
test('HttpMethodNotAllowedError', () => {
    const error = new index_1.HttpMethodNotAllowedError;
    expect(error.statusCode).toBe(405);
});
test('HttpNotAcceptableError', () => {
    const error = new index_1.HttpNotAcceptableError;
    expect(error.statusCode).toBe(406);
});
