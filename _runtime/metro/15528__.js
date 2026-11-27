// === Module 15528: ? ===

// Module 15528
import _mod15511 from "module_15511" /* 15511 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod15511(arg0, arg2);
  const tmp = new _mod15511(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};