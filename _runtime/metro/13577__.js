// _runtime/metro/13577__.js
import _mod13560 from "13560__.js";

export default (arg0, arg1, arg2) => {
  const obj = new _mod13560(arg0, arg2);
  const tmp = new _mod13560(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
