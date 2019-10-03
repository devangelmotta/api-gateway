const express = require("express");
const validate = require("express-validation");
const controller = require("../../process-request-microservices/notes.process");
const {
  listNotes,
  createNote,
  updateNote,
  deleteNote
} = require("../../../validations/note.validation");

const router = express.Router();

router
  .route("/get-all")
  /**
   * @api {post} gateway/notes/get-all List notes
   * @apiDescription Get a list of s
   * @apiVersion 1.0.0
   * @apiName ListNotes
   * @apiGroup Note

   *
   *
   * @apiParam  {Number{1-}}         [page=1]     List page
   * @apiParam  {Number{1-100}}      [perPage=1]  Notes per page
   * @apiParam  {String}             [text]       Note's body

   *
   * @apiSuccess {Object[]} notes List of notes.
   *
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
  .post(validate(listNotes), controller.list);

router
  .route("/create")
  /**
   * @api {post} gateway/notes/create Create Note
   * @apiDescription Create a new note
   * @apiVersion 1.0.0
   * @apiName CreateNote
   * @apiGroup Note
   *
   *
   * @apiParam  {String}             text     Note's email
 
   *
   * @apiSuccess (Created 201) {String}  id         Note's id
   * @apiSuccess (Created 201) {String}  text       Note's name
   * @apiSuccess (Created 201) {Date}    createdAt  Timestamp
   *
   * @apiError (Bad Request 400)   ValidationError  Some parameters may contain invalid values
   * @apiError (Unauthorized 401)  Unauthorized     Only authenticated notes can create the data
   * @apiError (Forbidden 403)     Forbidden        Only admins can create the data
   */
  .post(validate(createNote), controller.create);

router
  .route("/update")
  /**
   * @api {post} gateway/notes/update Update Note
   * @apiDescription Update some fields of a note document
   * @apiVersion 1.0.0
   * @apiName UpdateNote
   * @apiGroup Note
   * @apiPermission note
   *
   * @apiHeader {String} Authorization   Note's access token
   *
   * @apiParam  {String}             text     Note's body
   *
   * @apiSuccess {String}  id         Note's id
   * @apiSuccess {String}  text       Note's name
   * @apiSuccess {Date}    createdAt  Timestamp
   *
   * @apiError (Bad Request 400)  ValidationError  Some parameters may contain invalid values
   * @apiError (Unauthorized 401) Unauthorized Only authenticated notes can modify the data
   * @apiError (Forbidden 403)    Forbidden    Only note with same id or admins can modify the data
   * @apiError (Not Found 404)    NotFound     note does not exist
   */
  .post(validate(updateNote), controller.update);

router
  .route("/delete")
  /**
   * @api {post} gateway/notes/delete Delete Note
   * @apiDescription Delete a note
   * @apiVersion 1.0.0
   * @apiName DeleteNote
   * @apiGroup Note
   * @apiPermission user
   *
   *
   * @apiSuccess (No Content 204)  Successfully deleted
   *
   * @apiError (Unauthorized 401) Unauthorized  Unauthorized access
   * @apiError (Forbidden 403)    Forbidden     Only note with same id or admins can delete the data
   * @apiError (Not Found 404)    NotFound      Note does not exist
   */
  .post(validate(deleteNote), controller.remove);

module.exports = router;
