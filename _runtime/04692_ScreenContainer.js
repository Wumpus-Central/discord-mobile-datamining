// _runtime/04692_ScreenContainer.js
import noopDefault from "00019_noop.js";
import isNativePlatformSupported from "04673_isNativePlatformSupported.js";
import __INTERNAL_VIEW_CONFIGDefault from "metro/04693___INTERNAL_VIEW_CONFIG.js";
import _objectWithoutProperties from "metro/00109__objectWithoutProperties.js";
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";
import { jsx } from "react/00021_jsxProd.js";

require = fn;
let closure_3 = ["enabled", "hasTwoStates"];
({ Platform, View: c5 } = get_ActivityIndicator);
noopDefault;

export default function ScreenContainer(enabled) {
  enabled = enabled.enabled;
  if (undefined === enabled) {
    let obj = isNativePlatformSupported;
    enabled = obj.screensEnabled();
  }
  const tmp3 = callback(enabled, closure_3);
  if (enabled) {
    if (isNativePlatformSupported.isNativePlatformSupported) {
      if (enabled.hasTwoStates) {
        obj = {};
        const merged = Object.assign(tmp3);
        return jsx(__INTERNAL_VIEW_CONFIGDefault, {});
      } else {
        obj = {};
        const merged1 = Object.assign(tmp3);
        return jsx(__INTERNAL_VIEW_CONFIGDefault, {});
      }
    }
  }
  const merged2 = Object.assign(tmp3);
  return <closure_5 />;
};