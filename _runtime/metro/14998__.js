// _runtime/metro/14998__.js
import _mod14981 from "14981__.js";

export default (arg0, arg1, arg2) => {
  const obj = new _mod14981(arg0, arg2);
  const tmp = new _mod14981(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
