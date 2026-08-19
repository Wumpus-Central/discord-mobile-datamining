// === Module 4275: prototype ===

// Module 4275 (prototype)
import setDefault from "set" /* 4061 */;

setDefault;
const prototype = function StripeError(error) {
  error = error.error;
  if (null != error.param) {
    const obj = {};
    ({ param, message } = error);
    const items = [message];
    obj[param] = items;
    obj[0] = obj;
    tmp = new tmp(obj, message, param, items);
    // ThrowIfThisInitialized (0x7c)
  } else {
    tmp = new tmp(error.message, tmp3, tmp2, error);
    // ThrowIfThisInitialized (0x7c)
  }
  return tmp;
}.prototype;
class prototype extends tmp2 {
}
const result = require("obj132").fileFinishedImporting("errors/StripeError.tsx");

export default prototype;