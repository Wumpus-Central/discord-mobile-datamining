// _runtime/metro/05543__.js
import noopAll from "../00019_noop.js";
import { UIManager } from "../00017_get_ActivityIndicator.js";
import { jsx } from "../react/00021_jsxProd.js";

noopAll;
try {
  let closure_0 = require("_isNativeReflectConstruct").default;
  let closure_2 = null != UIManager.getViewManagerConfig("RNCMaskedView");
  exports.MaskedView = function MaskedView(children) {
    children = children.children;
    const merged = Object.assign(children, Object.create(null));
    let tmp2 = children;
    if (closure_2) {
      tmp2 = children;
      if (closure_0) {
        const obj = {};
        const merged1 = Object.assign(merged);
        obj.children = children;
        tmp2 = <tmp3 />;
      }
    }
    return tmp2;
  };
} catch (err) {}
