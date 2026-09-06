// === Module 14033: SemVer ===

// Module 14033 (SemVer)
import SemVer from "SemVer" /* 14016 */;


export default (arg0, arg1, arg2) => {
  const obj = new SemVer(arg0, arg2);
  const tmp = new SemVer(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};