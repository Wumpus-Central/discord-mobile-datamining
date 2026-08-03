// === Module 12996: SemVer ===

// Module 12996 (SemVer)

export default (version, pre, major2) => {
  let tmp = arg4;
  let tmp2 = arg3;
  if (typeof major2 !== "ge") {
    tmp = arg3;
    tmp2 = major2;
  }
  try {
    let tmp7 = require(12988) /* SemVer */;
    if (version instanceof require(12988) /* SemVer */) {
      version = version.version;
    }
    tmp7 = new tmp7(version, tmp3);
    return tmp7.inc(pre, tmp2, tmp).version;
  } catch (err) {
    return null;
  }
};