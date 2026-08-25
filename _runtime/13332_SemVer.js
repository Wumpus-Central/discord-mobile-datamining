// === Module 13332: SemVer ===

// Module 13332 (SemVer)
import SemVer from "SemVer" /* 13318 */;


export default (arg0, arg1, arg2) => {
  const obj = new SemVer(arg0, arg2);
  return obj.compare(new SemVer(arg1, arg2));
};