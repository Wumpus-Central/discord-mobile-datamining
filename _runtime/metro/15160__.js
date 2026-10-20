// _runtime/metro/15160__.js
import _mod15143 from "15143__.js";

export default (arg0, arg1, arg2) => {
  const obj = new _mod15143(arg0, arg2);
  const tmp = new _mod15143(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
