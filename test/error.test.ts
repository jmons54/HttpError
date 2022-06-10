import {
  HttpError,
  HttpUnauthorizedError,
  HttpPaymentRequiredError,
  HttpForbiddenError,
  HttpNotFoundError,
  HttpMethodNotAllowedError,
  HttpNotAcceptableError,
} from '../src/index'

test('HttpError', () => {
  const error = HttpError(414, "URI Too Long", 1234, new Error);
  expect(error).toBeInstanceOf(Error);
  expect(error.statusCode).toBe(414);
  expect(error.message).toBe("URI Too Long");
  expect(error.code).toBe(1234);
  expect(error.previous).toBeInstanceOf(Error);
});

test('HttpError only StatusCode', () => {
  const error = HttpError(414);
  expect(error.statusCode).toBe(414);
  expect(error.message).toBe("");
  expect(error.code).toBeUndefined();
  expect(error.previous).toBeUndefined();
});


test('HttpUnauthorizedError', () => {
  const error = HttpUnauthorizedError("Unauthorized");
  expect(error.statusCode).toBe(401);
  expect(error.message).toBe("Unauthorized");
});

test('HttpPaymentRequiredError', () => {
  const error = HttpPaymentRequiredError();
  expect(error.statusCode).toBe(402);
});

test('HttpForbiddenError', () => {
  const error = HttpForbiddenError();
  expect(error.statusCode).toBe(403);
});

test('HttpNotFoundError', () => {
  const error = HttpNotFoundError();
  expect(error.statusCode).toBe(404);
});

test('HttpMethodNotAllowedError', () => {
  const error = HttpMethodNotAllowedError();
  expect(error.statusCode).toBe(405);
});

test('HttpNotAcceptableError', () => {
  const error = HttpNotAcceptableError();
  expect(error.statusCode).toBe(406);
});
