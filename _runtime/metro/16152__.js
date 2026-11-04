// === Module 16152: ? ===

// Module 16152
import _mod16144 from "module_16144" /* 16144 */;


export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod16144(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};