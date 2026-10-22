// _runtime/metro/15277__.js
import _mod15260 from "15260__.js";

export default (arg0, arg1, arg2) => {
  const obj = new _mod15260(arg0, arg2);
  const tmp = new _mod15260(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
