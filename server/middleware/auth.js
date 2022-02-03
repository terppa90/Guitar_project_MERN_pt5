import jwt from 'jsonwebtoken';

const secret = 'test';
// next means "do something and move to the next thing"
const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const isCustomAuth = token.length < 500;
    // if token is less than 500 it is our own, if more its google auth
    let decodedData;

    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, secret);
      // ?. = Optional chaining
      req.userId = decodedData?.id;
    }
    // google
    else {
      decodedData = jwt.decode(token);

      req.userId = decodedData?.sub;
    }

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;
