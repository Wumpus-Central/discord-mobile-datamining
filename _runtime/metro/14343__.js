// _runtime/metro/14343__.js
import _mod14326 from "14326__.js";

export default (arg0, arg1, arg2) => {
  const obj = new _mod14326(arg0, arg2);
  const tmp = new _mod14326(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
