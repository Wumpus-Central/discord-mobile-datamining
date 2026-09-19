// _runtime/metro/14296__.js
import _mod14279 from "14279__.js";

export default (arg0, arg1, arg2) => {
  const obj = new _mod14279(arg0, arg2);
  const tmp = new _mod14279(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
