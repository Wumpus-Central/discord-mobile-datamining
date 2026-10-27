// _runtime/metro/15372__.js
import _mod15355 from "15355__.js";

export default (arg0, arg1, arg2) => {
  const obj = new _mod15355(arg0, arg2);
  const tmp = new _mod15355(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
