// _runtime/metro/15348__.js
import _mod15331 from "15331__.js";

export default (arg0, arg1, arg2) => {
  const obj = new _mod15331(arg0, arg2);
  const tmp = new _mod15331(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
