// === Module 16162: ? ===

// Module 16162
import _mod16154 from "module_16154" /* 16154 */;


export default (version, pre, major2, major2, major22) => {
  let tmp = major22;
  let tmp2 = major2;
  if (typeof major2 === "string") {
    tmp = major2;
    tmp2 = major2;
  }
  try {
    if (version instanceof _mod16154) {
      version = version.version;
    }
    const tmp72 = new _mod16154(version, tmp3);
    return tmp72.inc(pre, tmp2, tmp).version;
  } catch (err) {
    return null;
  }
};