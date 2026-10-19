// _runtime/metro/15114__.js
import _mod15097 from "15097__.js";

export default (arg0, arg1, arg2) => {
  const obj = new _mod15097(arg0, arg2);
  const tmp = new _mod15097(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
