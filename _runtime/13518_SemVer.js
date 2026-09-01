// === Module 13518: SemVer ===

// Module 13518 (SemVer)
import SemVer from "SemVer" /* 13504 */;


export default (arg0, arg1, arg2) => {
  const obj = new SemVer(arg0, arg2);
  return obj.compare(new SemVer(arg1, arg2));
};