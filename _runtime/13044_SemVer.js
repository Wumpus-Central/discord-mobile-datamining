// _runtime/13044_SemVer.js
import { SemVer } from "13030_SemVer.js";

export default (arg0, arg1, arg2) => {
  const obj = new SemVer(arg0, arg2);
  return obj.compare(new SemVer(arg1, arg2));
};