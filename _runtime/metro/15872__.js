// _runtime/metro/15872__.js
import _mod15855 from "15855__.js";

export default (arg0, arg1, arg2) => {
  const obj = new _mod15855(arg0, arg2);
  const tmp = new _mod15855(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
