// === Module 15244: ? ===

// Module 15244
import _mod15236 from "module_15236" /* 15236 */;


export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod15236(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};