// === Module 16165: ? ===

// Module 16165
import _mod16157 from "module_16157" /* 16157 */;


export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod16157(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};