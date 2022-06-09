import {
  HttpErrorAbstract,
  HttpError,
  HttpInternalServerError,
  HttpUnauthorizedError,
  HttpPaymentRequiredError,
  HttpForbiddenError,
  HttpNotFoundError ,
  HttpMethodNotAllowedError,
  HttpNotAcceptableError
} from '../src/index'

test('HttpError', () => {
  const error = new HttpError(414, "Test error", 1234, new Error)
  expect(error).toBeInstanceOf(HttpErrorAbstract)
  expect(error.statusCode).toBe(414)
  expect(error.message).toBe("Test error")
  expect(error.code).toBe(1234)
  expect(error.previous).toBeInstanceOf(Error)
})

test('HttpInternalServerError', () => {
  const error = new HttpInternalServerError
  expect(error.statusCode).toBe(500)
})

test('HttpUnauthorizedError', () => {
  const error = new HttpUnauthorizedError
  expect(error.statusCode).toBe(401)
})

test('HttpPaymentRequiredError', () => {
  const error = new HttpPaymentRequiredError
  expect(error.statusCode).toBe(402)
})

test('HttpForbiddenError', () => {
  const error = new HttpForbiddenError
  expect(error.statusCode).toBe(403)
})

test('HttpNotFoundError', () => {
  const error = new HttpNotFoundError
  expect(error.statusCode).toBe(404)
})

test('HttpMethodNotAllowedError', () => {
  const error = new HttpMethodNotAllowedError
  expect(error.statusCode).toBe(405)
})

test('HttpNotAcceptableError', () => {
  const error = new HttpNotAcceptableError
  expect(error.statusCode).toBe(406)
})
