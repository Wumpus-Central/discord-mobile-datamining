const require = arg1;
const dependencyMap = arg6;
arg5.encodeUTF8 = function encodeUTF8(json) {
  const sentryCarrier = require(1005) /* getSentryCarrier */.getSentryCarrier();
  if (!sentryCarrier.encodePolyfill) {
    const encodePolyfill = require(1006) /* globalEncodeFactory */.useEncodePolyfill();
    const tmpResult = require(1006) /* globalEncodeFactory */;
  }
  return sentryCarrier.encodePolyfill(json);
};