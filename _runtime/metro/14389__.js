// === Module 14389: ? ===

// Module 14389
import _mod14372 from "module_14372" /* 14372 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod14372(arg0, arg2);
  const tmp = new _mod14372(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};