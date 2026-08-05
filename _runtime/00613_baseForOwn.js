// _runtime/00613_baseForOwn.js

export default function baseForOwn(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = require("00614_createBaseFor.js") /* createBaseFor */(arg0, arg1, require("00616_keys.js") /* keys */);
    const tmp5 = require("00614_createBaseFor.js") /* createBaseFor */;
  }
  return tmp;
};