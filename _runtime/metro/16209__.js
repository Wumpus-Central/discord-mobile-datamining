// === Module 16209: ? ===

// Module 16209
import _mod16201 from "module_16201" /* 16201 */;


export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod16201(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};