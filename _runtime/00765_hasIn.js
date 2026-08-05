// _runtime/00765_hasIn.js

export default function hasIn(arg0, arg1) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = require("00766_hasPath.js") /* hasPath */(arg0, arg1, require("00767_baseHasIn.js") /* baseHasIn */);
    const tmp5 = require("00766_hasPath.js") /* hasPath */;
  }
  return tmp;
};