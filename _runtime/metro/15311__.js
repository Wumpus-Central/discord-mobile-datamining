// _runtime/metro/15311__.js
import _mod15294 from "15294__.js";

export default (arg0, arg1, arg2) => {
  const obj = new _mod15294(arg0, arg2);
  const tmp = new _mod15294(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
