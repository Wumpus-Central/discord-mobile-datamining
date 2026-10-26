// _runtime/metro/15335__.js
import _mod15318 from "15318__.js";

export default (arg0, arg1, arg2) => {
  const obj = new _mod15318(arg0, arg2);
  const tmp = new _mod15318(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
