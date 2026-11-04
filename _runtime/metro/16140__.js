// === Module 16140: ? ===

// Module 16140
import _mod16132 from "module_16132" /* 16132 */;


export default (version, pre, major2, major2, major22) => {
  let tmp = major22;
  let tmp2 = major2;
  if (typeof major2 === "string") {
    tmp = major2;
    tmp2 = major2;
  }
  try {
    if (version instanceof _mod16132) {
      version = version.version;
    }
    const tmp72 = new _mod16132(version, tmp3);
    return tmp72.inc(pre, tmp2, tmp).version;
  } catch (err) {
    return null;
  }
};