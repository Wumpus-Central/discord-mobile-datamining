// _runtime/00999_getDevServer.js
import getConstantsDefault from "00082_getConstants.js";

importDefault = arg2;
const dependencyMap = arg6;
arg5.default = function getDevServer() {
  let str = first;
  if (undefined === first) {
    let obj = getConstantsDefault;
    let str2 = obj.getConstants().scriptURL;
    const match = str2.match(/^https?:\/\/.*?\//);
    first = null;
    if (match) {
      first = match[0];
    }
    let tmp5 = null;
    if (match) {
      tmp5 = str2;
    }
    str2 = tmp5;
    str = first;
  }
  if (str == null) {
    str = "http://localhost:8081/";
  }
  obj = { url: str, fullBundleUrl: str2, bundleLoadedFromServer: null !== first };
  return obj;
};