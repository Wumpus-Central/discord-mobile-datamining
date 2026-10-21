// _runtime/metro/15233__.js
import _mod15216 from "15216__.js";

export default (arg0, arg1, arg2) => {
  const obj = new _mod15216(arg0, arg2);
  const tmp = new _mod15216(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
