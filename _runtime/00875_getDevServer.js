// _runtime/00875_getDevServer.js
import _modDef82 from "metro/00082__.js";

let first, str2;

export default function getDevServer() {
  let str = first;
  if (undefined === first) {
    const obj = _modDef82;
    str2 = obj.getConstants().scriptURL;
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
}
