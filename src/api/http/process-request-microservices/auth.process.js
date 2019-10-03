const { validateLogin } = require("../call-microservices/auth.microservice");
/**
 * Returns jwt token if valid object params is provided
 * @public
 */

exports.verifyToken = async (data) => {
  try {
    const auth = await validateLogin(data);
    const { response } = auth;

    if (!response.invalidToken)
      return {
        access: true,
        response
      };

    if (response.sessions)
      return {
        access: false,
        response
      };
    else
      return {
        access: false,
        response
      };
  } catch (error) {
    return {
      access: false,
      sessiones: false,
      token: false,
      error
    };
  }
};
