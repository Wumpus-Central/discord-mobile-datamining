// === Module 13131: SemVer ===

// Module 13131 (SemVer)
import SemVer from "SemVer" /* 13123 */;


export default (version, pre, major2, major2, major22) => {
  let tmp = major22;
  let tmp2 = major2;
  if (typeof major2 === "string") {
    tmp = major2;
    tmp2 = major2;
  }
  try {
    let tmp7 = SemVer;
    if (version instanceof SemVer) {
      version = version.version;
    }
    tmp7 = new tmp7(version, tmp3);
    return tmp7.inc(pre, tmp2, tmp).version;
  } catch (err) {
    return null;
  }
};