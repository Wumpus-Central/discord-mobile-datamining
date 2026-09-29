// _runtime/metro/13745__.js
import _mod13728 from "13728__.js";

export default (arg0, arg1, arg2) => {
  const obj = new _mod13728(arg0, arg2);
  const tmp = new _mod13728(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
