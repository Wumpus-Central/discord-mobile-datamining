// _runtime/metro/15254__.js
import _mod15237 from "15237__.js";

export default (arg0, arg1, arg2) => {
  const obj = new _mod15237(arg0, arg2);
  const tmp = new _mod15237(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
