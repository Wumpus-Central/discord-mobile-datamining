// _runtime/metro/15521__.js
import _mod15504 from "15504__.js";

export default (arg0, arg1, arg2) => {
  const obj = new _mod15504(arg0, arg2);
  const tmp = new _mod15504(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
