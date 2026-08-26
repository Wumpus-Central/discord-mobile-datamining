// _runtime/13408_SemVer.js
import SemVer from "13391_SemVer.js";


export default (arg0, arg1, arg2) => {
  const obj = new SemVer(arg0, arg2);
  const tmp = new SemVer(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};