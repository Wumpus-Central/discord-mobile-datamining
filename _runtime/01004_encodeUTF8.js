// _runtime/01004_encodeUTF8.js
const require = arg1;
const dependencyMap = arg6;
arg5.encodeUTF8 = function encodeUTF8(json) {
  const sentryCarrier = require("01005_getSentryCarrier.js") /* getSentryCarrier */.getSentryCarrier();
  if (!sentryCarrier.encodePolyfill) {
    const encodePolyfill = require("01006_globalEncodeFactory.js") /* globalEncodeFactory */.useEncodePolyfill();
    const tmpResult = require("01006_globalEncodeFactory.js") /* globalEncodeFactory */;
  }
  return sentryCarrier.encodePolyfill(json);
};