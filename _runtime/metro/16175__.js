// _runtime/metro/16175__.js
import _mod16158 from "16158__.js";

export default (arg0, arg1, arg2) => {
  const obj = new _mod16158(arg0, arg2);
  const tmp = new _mod16158(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
