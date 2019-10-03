const request = require("./request");
const { notes } = require("./endpoints");

async function createNote(data, actionMethod) {
  const { ip, fingerprint, text } = data;

  let options = {
    method: actionMethod,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      ip,
      fingerprint,
      text
    })
  };
  let responseNote = await request(notes.create, options);
  return responseNote;
}

async function getNote(data, actionMethod) {
  const { ip, fingerprint, text, id } = data;
  let options = {
    method: actionMethod,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      ip,
      fingerprint,
      text
    })
  };
  let responseNote = await request(notes.getall, options);
  return responseNote;
}

async function changeNote(data, actionMethod) {
  const { ip, fingerprint, text, id } = data;
  let URL = `${notes.update}${id}`;
  let options = {
    method: actionMethod,
    headers: {
      "Content-Type": "application/json"
    },
    body:
      actionMethod == "DELETE"
        ? null
        : JSON.stringify({
            ip,
            fingerprint,
            text
          })
  };
  let responseNote = await request(URL, options);
  return responseNote;
}

module.exports = {
  createNote,
  changeNote,
  getNote
};
