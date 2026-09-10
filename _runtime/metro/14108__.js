// _runtime/metro/14108__.js
import _mod14091 from "14091__.js";

export default (arg0, arg1, arg2) => {
  const obj = new _mod14091(arg0, arg2);
  const tmp = new _mod14091(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
