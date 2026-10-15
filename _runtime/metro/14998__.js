// === Module 14998: ? ===

// Module 14998
import _mod14981 from "module_14981" /* 14981 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod14981(arg0, arg2);
  const tmp = new _mod14981(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};