// === Module 864: ? ===

// Module 864
import _modDef82 from "module_82" /* 82 */;

importDefault = arg2;
const dependencyMap = arg6;

export default function getDevServer() {
  let str = first;
  if (undefined === first) {
    str2 = _modDef82.getConstants().scriptURL;
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
  return { url: str, fullBundleUrl: str2, bundleLoadedFromServer: null !== first };
};