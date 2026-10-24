// === Module 15321: ? ===

// Module 15321
import _mod15313 from "module_15313" /* 15313 */;


export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod15313(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};