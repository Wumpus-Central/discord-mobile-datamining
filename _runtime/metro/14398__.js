// _runtime/metro/14398__.js
import _mod14381 from "14381__.js";

export default (arg0, arg1, arg2) => {
  const obj = new _mod14381(arg0, arg2);
  const tmp = new _mod14381(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
