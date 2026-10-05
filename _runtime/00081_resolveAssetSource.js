// _runtime/00081_resolveAssetSource.js
import _modDef82 from "metro/00082__.js";
import AssetRegistry from "00084_AssetRegistry.js";
import _mod85 from "metro/00085__.js";
import pickScale from "00086_pickScale.js";

let c4, first, scriptURL;

function resolveAssetSource(value2) {
  function getDevServerURL() {
    let tmp = first;
    if (undefined === first) {
      if (null == scriptURL) {
        const obj = _modDef82;
        scriptURL = obj.getConstants().scriptURL;
      }
      let match;
      if (str != null) {
        match = str.match(/^https?:\/\/.*?\//);
      }
      first = null;
      if (match) {
        first = match[0];
      }
      tmp = first;
    }
    return tmp;
  }
  function getScriptURL() {
    let tmp = c4;
    if (undefined === c4) {
      let tmp5;
      if (null == scriptURL) {
        const obj = _modDef82;
        scriptURL = obj.getConstants().scriptURL;
      }
      let text = str;
      if (null == str) {
        tmp5 = text;
      } else {
        tmp5 = null;
        if (!str.startsWith("assets://")) {
          const substr = str.substring(0, str.lastIndexOf("/") + 1);
          text = substr;
          if (!substr.includes("://")) {
            text = `file://${obj2}`;
          }
        }
      }
      c4 = tmp5;
      tmp = tmp5;
    }
    return tmp;
  }
  if (null != value2) {
    if (typeof value2 !== "object") {
      const obj3 = AssetRegistry;
      const assetByID = obj3.getAssetByID(value2);
      if (assetByID) {
        const _default = _mod85.default;
        let tmp = getDevServerURL();
        const self = this;
        const self2 = this;
        const _default1 = new _default(tmp, getScriptURL(), assetByID);
        if (items) {
          for (const item10021 of items) {
            let item10021Result = item10021(_default1);
            if (null != item10021Result) {
              obj2.return();
              return item10021Result;
            }
          }
        }
        return _default1.defaultAsset();
      } else {
        return null;
      }
    }
  }
  return value2;
}
let items = [];
resolveAssetSource.pickScale = pickScale.pickScale;
resolveAssetSource.setCustomSourceTransformer = function setCustomSourceTransformer(arg0) {
  items = [arg0];
};
resolveAssetSource.addCustomSourceTransformer = function addCustomSourceTransformer(arg0) {
  items.push(arg0);
};

export default resolveAssetSource;
