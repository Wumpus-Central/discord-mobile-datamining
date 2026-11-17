// _runtime/metro/16571__.js
import _mod16554 from "16554__.js";

export default (arg0, arg1, arg2) => {
  const obj = new _mod16554(arg0, arg2);
  const tmp = new _mod16554(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
