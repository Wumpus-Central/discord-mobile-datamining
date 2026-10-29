// _runtime/metro/15833__.js
import _mod15816 from "15816__.js";

export default (arg0, arg1, arg2) => {
  const obj = new _mod15816(arg0, arg2);
  const tmp = new _mod15816(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
