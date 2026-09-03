// === Module 4828: getEvalledConstructor ===

// Module 4828 (getEvalledConstructor)
import getEvalledConstructor from "getEvalledConstructor" /* 537 */;
import isPrimitive from "isPrimitive" /* 4776 */;

let closure_2 = getEvalledConstructor("%Object.isExtensible%", true);

export default getEvalledConstructor("%Object.preventExtensions%", true) ? (function IsExtensible(arg0) {
  const tmp = isPrimitive(arg0);
  let tmp2 = !tmp;
  if (!tmp) {
    tmp2 = callback(arg0);
  }
  return tmp2;
}) : (function IsExtensible(arg0) {
  return !isPrimitive(arg0);
});