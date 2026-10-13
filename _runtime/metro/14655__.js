// === Module 14655: ? ===

// Module 14655
import _mod14647 from "module_14647" /* 14647 */;


export default (version, pre, major2, major2, major22) => {
  let tmp = major22;
  let tmp2 = major2;
  if (typeof major2 === "string") {
    tmp = major2;
    tmp2 = major2;
  }
  try {
    if (version instanceof _mod14647) {
      version = version.version;
    }
    const tmp72 = new _mod14647(version, tmp3);
    return tmp72.inc(pre, tmp2, tmp).version;
  } catch (err) {
    return null;
  }
};