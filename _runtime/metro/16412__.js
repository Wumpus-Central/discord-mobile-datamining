// _runtime/metro/16412__.js
import _mod16395 from "16395__.js";

export default (arg0, arg1, arg2) => {
  const obj = new _mod16395(arg0, arg2);
  const tmp = new _mod16395(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
