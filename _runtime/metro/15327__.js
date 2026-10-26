// === Module 15327: ? ===

// Module 15327
import _mod15319 from "module_15319" /* 15319 */;


export default (version, pre, major2, major2, major22) => {
  let tmp = major22;
  let tmp2 = major2;
  if (typeof major2 === "string") {
    tmp = major2;
    tmp2 = major2;
  }
  try {
    if (version instanceof _mod15319) {
      version = version.version;
    }
    const tmp72 = new _mod15319(version, tmp3);
    return tmp72.inc(pre, tmp2, tmp).version;
  } catch (err) {
    return null;
  }
};