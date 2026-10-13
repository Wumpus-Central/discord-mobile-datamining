// _runtime/metro/14664__.js
import _mod14647 from "14647__.js";

export default (arg0, arg1, arg2) => {
  const obj = new _mod14647(arg0, arg2);
  const tmp = new _mod14647(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
