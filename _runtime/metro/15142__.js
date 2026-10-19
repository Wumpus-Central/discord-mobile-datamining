// _runtime/metro/15142__.js
import _mod15125 from "15125__.js";

export default (arg0, arg1, arg2) => {
  const obj = new _mod15125(arg0, arg2);
  const tmp = new _mod15125(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
