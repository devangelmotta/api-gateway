const url_base_auth = "http://localhost:3002/v1";
const url_base_notes = "http://localhost:3004";
const auth = {
  login: `${url_base_auth}/auth/login/`
};

const notes = {
  getall: `${url_base_notes}/v1/notes/all`,
  create: `${url_base_notes}/v1/notes/`,
  update: `${url_base_notes}/v1/notes/`,
  delete: `${url_base_notes}/v1/notes/`
};

module.exports = {
  auth,
  notes
};
