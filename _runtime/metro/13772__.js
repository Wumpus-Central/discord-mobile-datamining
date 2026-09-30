// _runtime/metro/13772__.js
import _mod13755 from "13755__.js";

export default (arg0, arg1, arg2) => {
  const obj = new _mod13755(arg0, arg2);
  const tmp = new _mod13755(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
