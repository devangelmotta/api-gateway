const Joi = require("joi");

module.exports = {
  // GET /v1/notes
  listNotes: {
    query: {
      page: Joi.number().min(1),
      perPage: Joi.number()
        .min(1)
        .max(100),
      text: Joi.string()
    }
  },

  // POST /v1/notes
  createNote: {
    body: {
      text: Joi.string().required(),
      ip: Joi.string().required(),
      fingerprint: Joi.object().required()
    }
  },

  // PUT /v1/notes/:noteId
  replaceNote: {
    body: {
      text: Joi.string()
    }
  },

  // PATCH /v1/notes/:noteId
  updateNote: {
    body: {
      text: Joi.string(),
      id: Joi.string()
    }
  },

  deleteNote: {
    body: {
      id: Joi.string()
    }
  }
};
