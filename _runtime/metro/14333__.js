// === Module 14333: ? ===

// Module 14333
import _mod14325 from "module_14325" /* 14325 */;


export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod14325(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};