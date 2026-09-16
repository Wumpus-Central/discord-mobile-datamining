// _runtime/metro/14138__.js
import _mod14121 from "14121__.js";

export default (arg0, arg1, arg2) => {
  const obj = new _mod14121(arg0, arg2);
  const tmp = new _mod14121(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
