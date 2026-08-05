// _runtime/13038_SemVer.js
import { SemVer } from "13021_SemVer.js";

export default (arg0, arg1, arg2) => {
  const obj = new SemVer /* SemVer */(arg0, arg2);
  const tmp = new SemVer /* SemVer */(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};