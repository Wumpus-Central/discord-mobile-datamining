// === Module 15461: ? ===

// Module 15461
import _mod15453 from "module_15453" /* 15453 */;


export default (version, pre, major2, major2, major22) => {
  let tmp = major22;
  let tmp2 = major2;
  if (typeof major2 === "string") {
    tmp = major2;
    tmp2 = major2;
  }
  try {
    if (version instanceof _mod15453) {
      version = version.version;
    }
    const tmp72 = new _mod15453(version, tmp3);
    return tmp72.inc(pre, tmp2, tmp).version;
  } catch (err) {
    return null;
  }
};