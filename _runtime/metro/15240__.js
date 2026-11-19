// _runtime/metro/15240__.js
import _mod15223 from "15223__.js";

export default (arg0, arg1, arg2) => {
  const obj = new _mod15223(arg0, arg2);
  const tmp = new _mod15223(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
