// _runtime/04409_baseAssignIn.js
import { copyObject } from "04406_copyObject.js";
import { keysIn } from "04410_keysIn.js";

export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = copyObject /* copyObject */(arg1, keysIn /* keysIn */(arg1), arg0);
    const tmp5 = copyObject /* copyObject */;
  }
  return tmp;
};