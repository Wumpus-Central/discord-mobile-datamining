// _runtime/04409_baseAssignIn.js

export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = require("04406_copyObject.js") /* copyObject */(arg1, require("04410_keysIn.js") /* keysIn */(arg1), arg0);
    const tmp5 = require("04406_copyObject.js") /* copyObject */;
  }
  return tmp;
};