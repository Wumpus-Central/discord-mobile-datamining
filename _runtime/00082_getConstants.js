// _runtime/00082_getConstants.js
import getConstantsDefault from "00083_getConstants.js";

for (const key10016 in require("getConstants")) {
  let tmp2 = key10016;
  arg5[key10016] = require("getConstants")[key10016];
  continue;
}

export default getConstantsDefault;