// _runtime/metro/16417__.js
import _mod16400 from "16400__.js";

export default (arg0, arg1, arg2) => {
  const obj = new _mod16400(arg0, arg2);
  const tmp = new _mod16400(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
