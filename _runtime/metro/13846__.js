// _runtime/metro/13846__.js
import _mod13829 from "13829__.js";

export default (arg0, arg1, arg2) => {
  const obj = new _mod13829(arg0, arg2);
  const tmp = new _mod13829(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
