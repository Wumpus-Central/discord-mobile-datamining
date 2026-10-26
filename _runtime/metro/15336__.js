// _runtime/metro/15336__.js
import _mod15319 from "15319__.js";

export default (arg0, arg1, arg2) => {
  const obj = new _mod15319(arg0, arg2);
  const tmp = new _mod15319(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
