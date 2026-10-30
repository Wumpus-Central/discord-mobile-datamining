// === Module 15863: ? ===

// Module 15863
import _mod15855 from "module_15855" /* 15855 */;


export default (version, pre, major2, major2, major22) => {
  let tmp = major22;
  let tmp2 = major2;
  if (typeof major2 === "string") {
    tmp = major2;
    tmp2 = major2;
  }
  try {
    if (version instanceof _mod15855) {
      version = version.version;
    }
    const tmp72 = new _mod15855(version, tmp3);
    return tmp72.inc(pre, tmp2, tmp).version;
  } catch (err) {
    return null;
  }
};