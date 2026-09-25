// === Module 13550: ? ===

// Module 13550
import _mod13542 from "module_13542" /* 13542 */;


export default (version, pre, major2, major2, major22) => {
  let tmp = major22;
  let tmp2 = major2;
  if (typeof major2 === "string") {
    tmp = major2;
    tmp2 = major2;
  }
  try {
    if (version instanceof _mod13542) {
      version = version.version;
    }
    const tmp72 = new _mod13542(version, tmp3);
    return tmp72.inc(pre, tmp2, tmp).version;
  } catch (err) {
    return null;
  }
};