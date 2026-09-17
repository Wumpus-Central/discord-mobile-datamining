// _runtime/metro/14146__.js
import _mod14129 from "14129__.js";

export default (arg0, arg1, arg2) => {
  const obj = new _mod14129(arg0, arg2);
  const tmp = new _mod14129(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
