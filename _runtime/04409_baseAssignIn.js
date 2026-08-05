// _runtime/04409_baseAssignIn.js

export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = require(4406) /* copyObject */(arg1, require(4410) /* keysIn */(arg1), arg0);
    const tmp5 = require(4406) /* copyObject */;
  }
  return tmp;
};