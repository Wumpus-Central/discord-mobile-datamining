// === Module 16060: ? ===

// Module 16060
import _mod16043 from "module_16043" /* 16043 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod16043(arg0, arg2);
  const tmp = new _mod16043(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};