// _runtime/metro/15598__.js
import _mod15581 from "15581__.js";

export default (arg0, arg1, arg2) => {
  const obj = new _mod15581(arg0, arg2);
  const tmp = new _mod15581(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
