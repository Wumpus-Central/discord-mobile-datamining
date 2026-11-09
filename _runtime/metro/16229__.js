// _runtime/metro/16229__.js
import _mod16212 from "16212__.js";

export default (arg0, arg1, arg2) => {
  const obj = new _mod16212(arg0, arg2);
  const tmp = new _mod16212(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
