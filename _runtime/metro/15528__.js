// _runtime/metro/15528__.js
import _mod15511 from "15511__.js";

export default (arg0, arg1, arg2) => {
  const obj = new _mod15511(arg0, arg2);
  const tmp = new _mod15511(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
