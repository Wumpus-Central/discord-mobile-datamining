// === Module 241: __fetchSegment ===

// Module 241 (__fetchSegment)
const require = arg1;
const dependencyMap = arg6;
arg0.__fetchSegment = function __fetchSegment(arg0, arg1, arg2) {
  const _require = arg2;
  const segment = _require(242).default.fetchSegment(arg0, arg1, (message) => {
    if (message) {
      const _Error = Error;
      const error = new Error(message.message);
      error.code = message.code;
      callback(error);
    } else {
      callback(null);
    }
  });
};