// _runtime/metro/15470__.js
import _mod15453 from "15453__.js";

export default (arg0, arg1, arg2) => {
  const obj = new _mod15453(arg0, arg2);
  const tmp = new _mod15453(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
