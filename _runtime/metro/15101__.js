// === Module 15101: ? ===

// Module 15101
import _mod15093 from "module_15093" /* 15093 */;


export default (version, pre, major2, major2, major22) => {
  let tmp = major22;
  let tmp2 = major2;
  if (typeof major2 === "string") {
    tmp = major2;
    tmp2 = major2;
  }
  try {
    if (version instanceof _mod15093) {
      version = version.version;
    }
    const tmp72 = new _mod15093(version, tmp3);
    return tmp72.inc(pre, tmp2, tmp).version;
  } catch (err) {
    return null;
  }
};