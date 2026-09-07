// _runtime/metro/14036__.js
import _mod14019 from "14019__.js";

export default (arg0, arg1, arg2) => {
  const obj = new _mod14019(arg0, arg2);
  const tmp = new _mod14019(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
