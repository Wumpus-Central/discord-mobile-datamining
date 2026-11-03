// === Module 16051: ? ===

// Module 16051
import _mod16043 from "module_16043" /* 16043 */;


export default (version, pre, major2, major2, major22) => {
  let tmp = major22;
  let tmp2 = major2;
  if (typeof major2 === "string") {
    tmp = major2;
    tmp2 = major2;
  }
  try {
    if (version instanceof _mod16043) {
      version = version.version;
    }
    const tmp72 = new _mod16043(version, tmp3);
    return tmp72.inc(pre, tmp2, tmp).version;
  } catch (err) {
    return null;
  }
};