// === Module 81: resolveAssetSource ===

// Module 81 (resolveAssetSource)
import _modDef82 from "module_82" /* 82 */;
import _mod84 from "module_84" /* 84 */;
import pickScale from "pickScale" /* 86 */;

function resolveAssetSource(source) {
  if (null != source) {
    if (typeof source !== "object") {
      const assetByID = _mod84.getAssetByID(source);
      if (assetByID) {
        const _default = new tmp12(85).default((function getDevServerURL() {
          let tmp = first;
          if (undefined === first) {
            if (null == scriptURL) {
              scriptURL = _modDef82.getConstants().scriptURL;
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
        })(), (function getScriptURL() {
          let tmp = c4;
          if (undefined === c4) {
            if (null == scriptURL) {
              scriptURL = _modDef82.getConstants().scriptURL;
            }
            let text = str;
            if (null == str) {
              let tmp5 = text;
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
        })(), assetByID);
        if (items) {
          for (const item10021 of tmp6) {
            let item10021Result = item10021(_default);
            if (null != item10021Result) {
              obj2.return();
              return item10021Result;
            }
          }
        }
        return _default.defaultAsset();
      } else {
        return null;
      }
      tmp12 = require;
    }
  }
  return source;
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