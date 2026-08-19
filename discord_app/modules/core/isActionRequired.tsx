// === Module 1387: isActionRequired ===

// Module 1387 (isActionRequired)
import handleUpdateUser from "handleUpdateUser" /* 1384 */;
import handleRequiredAction from "handleRequiredAction" /* 1385 */;

const result = require("obj132").fileFinishedImporting("modules/core/isActionRequired.tsx");

export default function isActionRequired() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = closure_0;
  }
  let obj2 = arg1;
  if (arg1 === undefined) {
    obj2 = closure_1;
  }
  let tmp = null != obj2.getAction();
  if (!tmp) {
    const _Object = Object;
    tmp = Object.keys(obj.getState()).length > 0;
  }
  return tmp;
};