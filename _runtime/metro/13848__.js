// _runtime/metro/13848__.js
import _mod13831 from "13831__.js";

export default (arg0, arg1, arg2) => {
  const obj = new _mod13831(arg0, arg2);
  const tmp = new _mod13831(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
