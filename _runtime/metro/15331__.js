// _runtime/metro/15331__.js
import _mod15314 from "15314__.js";

export default (arg0, arg1, arg2) => {
  const obj = new _mod15314(arg0, arg2);
  const tmp = new _mod15314(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
