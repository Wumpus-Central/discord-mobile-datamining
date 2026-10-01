// === Module 13776: prerelease ===

// Module 13776 (prerelease)
import _mod13762 from "module_13762" /* 13762 */;


export default (arg0, arg1) => {
  const tmp = _mod13762(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};