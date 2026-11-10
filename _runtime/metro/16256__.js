// _runtime/metro/16256__.js
import _mod16239 from "16239__.js";

export default (arg0, arg1, arg2) => {
  const obj = new _mod16239(arg0, arg2);
  const tmp = new _mod16239(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
