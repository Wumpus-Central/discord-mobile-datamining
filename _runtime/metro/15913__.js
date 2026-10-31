// _runtime/metro/15913__.js
import _mod15896 from "15896__.js";

export default (arg0, arg1, arg2) => {
  const obj = new _mod15896(arg0, arg2);
  const tmp = new _mod15896(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
