import { io } from '../../config/express';

/**
 * NOTICE
 * Notice that in case of errors happening while accessing the data,
 * we simply call the next middleware with the corresponding error
 * as parameter (next(e))
 */

/**
 * Send the received data
 * @return {Object} the saved data's datas.
 */
function send(req, res, next) {

  let savedData = {
    headers: req.headers,
    payload: req.body
  };

  io.emit('data', savedData);

  return res.json(savedData);
}

/**
 * Export
 */
export default { send };
