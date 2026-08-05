// _runtime/04414_baseAssign.js

export default function baseAssign(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = require("04406_copyObject.js") /* copyObject */(arg1, require("00616_keys.js") /* keys */(arg1), arg0);
    const tmp5 = require("04406_copyObject.js") /* copyObject */;
  }
  return tmp;
};