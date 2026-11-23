// _runtime/metro/15327__.js
import _mod15310 from "15310__.js";

export default (arg0, arg1, arg2) => {
  const obj = new _mod15310(arg0, arg2);
  const tmp = new _mod15310(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
