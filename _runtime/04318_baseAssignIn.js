// === Module 4318: baseAssignIn ===

// Module 4318 (baseAssignIn)

export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = require(4315) /* copyObject */(arg1, require(4319) /* keysIn */(arg1), arg0);
    const tmp5 = require(4315) /* copyObject */;
  }
  return tmp;
};