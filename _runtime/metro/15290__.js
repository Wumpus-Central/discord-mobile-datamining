// _runtime/metro/15290__.js
import _mod15273 from "15273__.js";

export default (arg0, arg1, arg2) => {
  const obj = new _mod15273(arg0, arg2);
  const tmp = new _mod15273(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
