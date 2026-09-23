// _runtime/metro/14389__.js
import _mod14372 from "14372__.js";

export default (arg0, arg1, arg2) => {
  const obj = new _mod14372(arg0, arg2);
  const tmp = new _mod14372(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
