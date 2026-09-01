// _runtime/04827_getEvalledConstructor.js
import getEvalledConstructor from "00540_getEvalledConstructor.js";
import isPrimitive from "04775_isPrimitive.js";

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