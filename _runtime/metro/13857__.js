// === Module 13857: ? ===

// Module 13857
import _mod13849 from "module_13849" /* 13849 */;


export default (version, pre, major2, major2, major22) => {
  let tmp = major22;
  let tmp2 = major2;
  if (typeof major2 === "string") {
    tmp = major2;
    tmp2 = major2;
  }
  try {
    if (version instanceof _mod13849) {
      version = version.version;
    }
    const tmp72 = new _mod13849(version, tmp3);
    return tmp72.inc(pre, tmp2, tmp).version;
  } catch (err) {
    return null;
  }
};