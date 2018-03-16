/**
 * 401 - Unauthorized
 * Similar to 403 Forbidden, but specifically for use when authentication is
 * required and has failed or has not yet been provided.
 */
export class Unauthorized extends Error {
  constructor(message, errorCode) {
    super();
    this.name = 'Unauthorized';
    this.error = true;
    this.message = message || 'Unauthorized Request';
    this.status = 401;
    this.errorCode = errorCode || 401;
  }
}

/**
 * 403 - Forbidden
 * The request was valid, but the server is refusing action.
 * The user might not have the necessary permissions for a resource,
 * or may need an account of some sort.
 */
export class Forbidden extends Error {
  constructor(message, errorCode) {
    super();
    this.name = 'Forbidden';
    this.error = true;
    this.message = message || 'Forbidden';
    this.status = 403;
    this.errorCode = errorCode || 403;
  }
}

/**
 * 404 - Not Found
 * The requested resource could not be found but may be available in the future.
 * Subsequent requests by the client are permissible.
 */
export class NotFound extends Error {
  constructor(message, errorCode) {
    super();
    this.name = 'Not Found';
    this.error = true;
    this.message = message || "The requested resource couldn't be found";
    this.status = 404;
    this.errorCode = errorCode || 404;
  }
}
