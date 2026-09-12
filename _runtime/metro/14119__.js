// _runtime/metro/14119__.js
import _mod14102 from "14102__.js";

export default (arg0, arg1, arg2) => {
  const obj = new _mod14102(arg0, arg2);
  const tmp = new _mod14102(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
