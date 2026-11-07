// _runtime/metro/16219__.js
import _mod16202 from "16202__.js";

export default (arg0, arg1, arg2) => {
  const obj = new _mod16202(arg0, arg2);
  const tmp = new _mod16202(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
