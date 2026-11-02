// _runtime/metro/15917__.js
import _mod15900 from "15900__.js";

export default (arg0, arg1, arg2) => {
  const obj = new _mod15900(arg0, arg2);
  const tmp = new _mod15900(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
