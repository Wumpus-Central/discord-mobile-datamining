// _runtime/04323_baseAssign.js

export default function baseAssign(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = require(4315) /* copyObject */(arg1, require(616) /* keys */(arg1), arg0);
    const tmp5 = require(4315) /* copyObject */;
  }
  return tmp;
};