// _runtime/metro/14120__.js
import _mod14103 from "14103__.js";

export default (arg0, arg1, arg2) => {
  const obj = new _mod14103(arg0, arg2);
  const tmp = new _mod14103(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
