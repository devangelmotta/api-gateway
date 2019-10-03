const request = require("./request");
const { auth } = require("./endpoints");

async function validateLogin(data) {
  const { ip, fingerprint, token, refreshToken } = data;
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      ip,
      fingerprint,
      token,
      refreshToken
    })
  };
  let authResponse = await request(auth.login, options);
  return authResponse;
}

module.exports = {
  validateLogin
};
