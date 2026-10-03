// === Module 13836: ? ===

// Module 13836
import _mod13828 from "module_13828" /* 13828 */;


export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod13828(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};