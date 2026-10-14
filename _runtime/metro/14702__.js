// _runtime/metro/14702__.js
import _mod14685 from "14685__.js";

export default (arg0, arg1, arg2) => {
  const obj = new _mod14685(arg0, arg2);
  const tmp = new _mod14685(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
