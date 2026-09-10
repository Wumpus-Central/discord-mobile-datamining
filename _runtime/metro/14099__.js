// === Module 14099: ? ===

// Module 14099
import _mod14091 from "module_14091" /* 14091 */;


export default (version, pre, major2, major2, major22) => {
  let tmp = major22;
  let tmp2 = major2;
  if (typeof major2 === "string") {
    tmp = major2;
    tmp2 = major2;
  }
  try {
    let tmp7 = _mod14091;
    if (version instanceof _mod14091) {
      version = version.version;
    }
    tmp7 = new tmp7(version, tmp3);
    return tmp7.inc(pre, tmp2, tmp).version;
  } catch (err) {
    return null;
  }
};