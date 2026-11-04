// _runtime/metro/16149__.js
import _mod16132 from "16132__.js";

export default (arg0, arg1, arg2) => {
  const obj = new _mod16132(arg0, arg2);
  const tmp = new _mod16132(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
