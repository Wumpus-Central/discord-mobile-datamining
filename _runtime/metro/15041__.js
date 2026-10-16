// _runtime/metro/15041__.js
import _mod15024 from "15024__.js";

export default (arg0, arg1, arg2) => {
  const obj = new _mod15024(arg0, arg2);
  const tmp = new _mod15024(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
