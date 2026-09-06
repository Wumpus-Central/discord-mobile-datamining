// _runtime/metro/14033__.js
import _mod14016 from "14016__.js";

export default (arg0, arg1, arg2) => {
  const obj = new _mod14016(arg0, arg2);
  const tmp = new _mod14016(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
