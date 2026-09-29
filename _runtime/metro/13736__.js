// === Module 13736: ? ===

// Module 13736
import _mod13728 from "module_13728" /* 13728 */;


export default (version, pre, major2, major2, major22) => {
  let tmp = major22;
  let tmp2 = major2;
  if (typeof major2 === "string") {
    tmp = major2;
    tmp2 = major2;
  }
  try {
    if (version instanceof _mod13728) {
      version = version.version;
    }
    const tmp72 = new _mod13728(version, tmp3);
    return tmp72.inc(pre, tmp2, tmp).version;
  } catch (err) {
    return null;
  }
};