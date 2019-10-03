const httpStatus = require("http-status");
const {
  verifyToken
} = require("../process-request-microservices/auth.process");

const {
  createNote,
  changeNote,
  getNote
} = require("../call-microservices/notes.microservice");
const { omit } = require("lodash");

/**
 * Get note list
 * @public
 */
exports.list = async (req, res, next) => {
  try {
    const data = await verifyToken(req.body);
    const { response } = data;
    if (data) {
      if (data.error == undefined) {
        if (response.sessions) {
          console.log("1");
          res.json({
            body: response,
            token: response.data
          });
        } else {
          let creatNote = await getNote(req.body, "POST");
          console.log("2");
          res.json({
            body: creatNote,
            token: response.data
          });
        }
      } else {
        console.log("3");
        res.json({ body: data });
      }
    } else {
      console.log("4");
      res.json({ body: data });
    }
  } catch (error) {
    next(error);
  }
};

/**
 * Create new user
 * @public
 */
exports.create = async (req, res, next) => {
  try {
    const data = await verifyToken(req.body);
    const { response } = data;
    if (data) {
      if (data.error == undefined) {
        if (response.sessions) {
          console.log("1");
          res.json({
            body: response,
            token: response.data
          });
        } else {
          let creatNote = await createNote(req.body, "POST");
          console.log("2");
          res.json({
            body: creatNote,
            token: response.data
          });
        }
      } else {
        console.log("3");
        res.json({ body: data });
      }
    } else {
      console.log("4");
      res.json({ body: data });
    }
  } catch (error) {
    next(error);
  }
};

/**
 * Update existing note
 * @public
 */
exports.update = async (req, res, next) => {
  try {
    const data = await verifyToken(req.body);
    const { response } = data;
    if (data) {
      if (data.error == undefined) {
        if (response.sessions) {
          console.log("1");
          res.json({
            body: response,
            token: response.data
          });
        } else {
          let creatNote = await changeNote(req.body, "POST");
          console.log("2");
          res.json({
            body: creatNote,
            token: response.data
          });
        }
      } else {
        console.log("3");
        res.json({ body: data });
      }
    } else {
      console.log("4");
      res.json({ body: data });
    }
  } catch (error) {
    next(error);
  }
};

/**
 * Delete user
 * @public
 */
exports.remove = async (req, res, next) => {
  try {
    let deleteNote = await handlerNote(req.body, "DELETE");
    res.json(deleteNote);
  } catch (error) {
    next(error);
  }
};
