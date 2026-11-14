// === Module 16526: ? ===

// Module 16526
import _mod16518 from "module_16518" /* 16518 */;


export default (version, pre, major2, major2, major22) => {
  let tmp = major22;
  let tmp2 = major2;
  if (typeof major2 === "string") {
    tmp = major2;
    tmp2 = major2;
  }
  try {
    if (version instanceof _mod16518) {
      version = version.version;
    }
    const tmp72 = new _mod16518(version, tmp3);
    return tmp72.inc(pre, tmp2, tmp).version;
  } catch (err) {
    return null;
  }
};