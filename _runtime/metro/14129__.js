// === Module 14129: ? ===

// Module 14129
import _mod14121 from "module_14121" /* 14121 */;


export default (version, pre, major2, major2, major22) => {
  let tmp = major22;
  let tmp2 = major2;
  if (typeof major2 === "string") {
    tmp = major2;
    tmp2 = major2;
  }
  try {
    if (version instanceof _mod14121) {
      version = version.version;
    }
    const tmp72 = new _mod14121(version, tmp3);
    return tmp72.inc(pre, tmp2, tmp).version;
  } catch (err) {
    return null;
  }
};