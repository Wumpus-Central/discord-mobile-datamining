// === Module 14116: ? ===

// Module 14116
import _mod14108 from "module_14108" /* 14108 */;


export default (version, pre, major2, major2, major22) => {
  let tmp = major22;
  let tmp2 = major2;
  if (typeof major2 === "string") {
    tmp = major2;
    tmp2 = major2;
  }
  try {
    if (version instanceof _mod14108) {
      version = version.version;
    }
    const tmp72 = new _mod14108(version, tmp3);
    return tmp72.inc(pre, tmp2, tmp).version;
  } catch (err) {
    return null;
  }
};