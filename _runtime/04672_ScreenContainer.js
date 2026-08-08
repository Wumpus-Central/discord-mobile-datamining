// _runtime/04672_ScreenContainer.js
import _objectWithoutProperties from "_objectWithoutProperties";
import get_ActivityIndicator from "get ActivityIndicator";
import "noop";
import { jsx } from "jsxProd";
import { isNativePlatformSupported } from "04653_isNativePlatformSupported.js";
import { __INTERNAL_VIEW_CONFIG } from "metro/04673___INTERNAL_VIEW_CONFIG.js";

let Platform;
let c5;
const require = arg1;
let closure_3 = ["enabled", "hasTwoStates"];
({ Platform, View: c5 } = get_ActivityIndicator);

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
        return jsx(__INTERNAL_VIEW_CONFIG, {});
      } else {
        obj = {};
        const merged1 = Object.assign(tmp3);
        return jsx(__INTERNAL_VIEW_CONFIG, {});
      }
    }
  }
  const merged2 = Object.assign(tmp3);
  return <closure_5 />;
};