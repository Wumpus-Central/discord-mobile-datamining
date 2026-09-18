// === Module 14232: ? ===

// Module 14232
import _mod14224 from "module_14224" /* 14224 */;


export default (version, pre, major2, major2, major22) => {
  let tmp = major22;
  let tmp2 = major2;
  if (typeof major2 === "string") {
    tmp = major2;
    tmp2 = major2;
  }
  try {
    if (version instanceof _mod14224) {
      version = version.version;
    }
    const tmp72 = new _mod14224(version, tmp3);
    return tmp72.inc(pre, tmp2, tmp).version;
  } catch (err) {
    return null;
  }
};