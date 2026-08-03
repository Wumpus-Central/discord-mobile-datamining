// === Module 4565: getEvalledConstructor ===

// Module 4565 (getEvalledConstructor)
let closure_2 = require("getEvalledConstructor")("%Object.isExtensible%", true);

export default require("getEvalledConstructor")("%Object.preventExtensions%", true) ? (function IsExtensible(arg0) {
  const tmp = require(4513) /* isPrimitive */(arg0);
  let tmp2 = !tmp;
  if (!tmp) {
    tmp2 = callback(arg0);
  }
  return tmp2;
}) : (function IsExtensible(arg0) {
  return !require(4513) /* isPrimitive */(arg0);
});