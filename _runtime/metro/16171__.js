// _runtime/metro/16171__.js
import _mod16154 from "16154__.js";

export default (arg0, arg1, arg2) => {
  const obj = new _mod16154(arg0, arg2);
  const tmp = new _mod16154(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
