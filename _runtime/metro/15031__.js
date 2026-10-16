// === Module 15031: ? ===

// Module 15031
import _mod15023 from "module_15023" /* 15023 */;


export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod15023(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};