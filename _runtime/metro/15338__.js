// === Module 15338: ? ===

// Module 15338
import _mod15330 from "module_15330" /* 15330 */;


export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod15330(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};