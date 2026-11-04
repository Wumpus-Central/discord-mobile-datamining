// _runtime/metro/16162__.js
import _mod16145 from "16145__.js";

export default (arg0, arg1, arg2) => {
  const obj = new _mod16145(arg0, arg2);
  const tmp = new _mod16145(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
