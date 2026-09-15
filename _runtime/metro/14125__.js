// _runtime/metro/14125__.js
import _mod14108 from "14108__.js";

export default (arg0, arg1, arg2) => {
  const obj = new _mod14108(arg0, arg2);
  const tmp = new _mod14108(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
