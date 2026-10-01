// _runtime/metro/13780__.js
import _mod13763 from "13763__.js";

export default (arg0, arg1, arg2) => {
  const obj = new _mod13763(arg0, arg2);
  const tmp = new _mod13763(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
