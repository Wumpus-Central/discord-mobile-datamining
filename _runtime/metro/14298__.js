// === Module 14298: ? ===

// Module 14298
import _mod14290 from "module_14290" /* 14290 */;


export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod14290(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};