// === Module 13757: SemVer ===

// Module 13757 (SemVer)
import SemVer from "SemVer" /* 13743 */;


export default (arg0, arg1, arg2) => {
  const obj = new SemVer(arg0, arg2);
  return obj.compare(new SemVer(arg1, arg2));
};