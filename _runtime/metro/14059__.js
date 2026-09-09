// _runtime/metro/14059__.js
import _mod14042 from "14042__.js";

export default (arg0, arg1, arg2) => {
  const obj = new _mod14042(arg0, arg2);
  const tmp = new _mod14042(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
