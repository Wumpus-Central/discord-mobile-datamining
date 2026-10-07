// === Module 13856: ? ===

// Module 13856
import _mod13848 from "module_13848" /* 13848 */;


export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod13848(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};