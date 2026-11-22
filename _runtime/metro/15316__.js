// === Module 15316: ? ===

// Module 15316
import _mod15308 from "module_15308" /* 15308 */;


export default (version, pre, major2, major2, major22) => {
  let tmp = major22;
  let tmp2 = major2;
  if (typeof major2 === "string") {
    tmp = major2;
    tmp2 = major2;
  }
  try {
    if (version instanceof _mod15308) {
      version = version.version;
    }
    const tmp72 = new _mod15308(version, tmp3);
    return tmp72.inc(pre, tmp2, tmp).version;
  } catch (err) {
    return null;
  }
};