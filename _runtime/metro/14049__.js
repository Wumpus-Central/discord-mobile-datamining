// === Module 14049: ? ===

// Module 14049
import _mod14041 from "module_14041" /* 14041 */;


export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod14041(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};