// _runtime/metro/16060__.js
import _mod16043 from "16043__.js";

export default (arg0, arg1, arg2) => {
  const obj = new _mod16043(arg0, arg2);
  const tmp = new _mod16043(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
