// === Module 14988: ? ===

// Module 14988
import _mod14980 from "module_14980" /* 14980 */;


export default (str, arg1) => {
  str = str.trim();
  const tmpResult = _mod14980(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};