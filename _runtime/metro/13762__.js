// === Module 13762: ? ===

// Module 13762
import _mod13754 from "module_13754" /* 13754 */;


export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod13754(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};