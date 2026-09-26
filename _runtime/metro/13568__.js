// === Module 13568: ? ===

// Module 13568
import _mod13560 from "module_13560" /* 13560 */;


export default (version, pre, major2, major2, major22) => {
  let tmp = major22;
  let tmp2 = major2;
  if (typeof major2 === "string") {
    tmp = major2;
    tmp2 = major2;
  }
  try {
    if (version instanceof _mod13560) {
      version = version.version;
    }
    const tmp72 = new _mod13560(version, tmp3);
    return tmp72.inc(pre, tmp2, tmp).version;
  } catch (err) {
    return null;
  }
};