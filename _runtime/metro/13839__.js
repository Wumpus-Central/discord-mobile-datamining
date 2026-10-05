// === Module 13839: ? ===

// Module 13839
import _mod13831 from "module_13831" /* 13831 */;


export default function(version, pre, major2, major22, major222) {
  let tmp = major22;
  let tmp2 = major2;
  if (typeof major2 === "string") {
    tmp = major2;
    tmp2 = major2;
  }
  try {
    const tmp7 = _mod13831;
    if (version instanceof _mod13831) {
      version = version.version;
    }
    const self = this;
    const self2 = this;
    const tmp72 = new tmp7(version, major2);
    return tmp72.inc(pre, tmp2, tmp).version;
  } catch (err) {
    return null;
  }
};