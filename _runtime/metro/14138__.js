// === Module 14138: ? ===

// Module 14138
import _mod14121 from "module_14121" /* 14121 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod14121(arg0, arg2);
  const tmp = new _mod14121(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};