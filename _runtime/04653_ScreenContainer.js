// _runtime/04653_ScreenContainer.js
import _objectWithoutProperties from "_objectWithoutProperties";
import get_ActivityIndicator from "get ActivityIndicator";
import "noop";
import { jsx } from "jsxProd";

let Platform;
let c5;
const require = arg1;
let closure_3 = ["enabled", "hasTwoStates"];
({ Platform, View: c5 } = get_ActivityIndicator);

export default function ScreenContainer(enabled) {
  enabled = enabled.enabled;
  if (undefined === enabled) {
    let obj = require("04634_isNativePlatformSupported.js") /* isNativePlatformSupported */;
    enabled = obj.screensEnabled();
  }
  const tmp3 = callback(enabled, closure_3);
  if (enabled) {
    if (require("04634_isNativePlatformSupported.js") /* isNativePlatformSupported */.isNativePlatformSupported) {
      if (enabled.hasTwoStates) {
        obj = {};
        const merged = Object.assign(tmp3);
        return jsx(require("metro/04654___INTERNAL_VIEW_CONFIG.js"), {});
      } else {
        obj = {};
        const merged1 = Object.assign(tmp3);
        return jsx(require("metro/04654___INTERNAL_VIEW_CONFIG.js"), {});
      }
    }
  }
  const merged2 = Object.assign(tmp3);
  return <closure_5 />;
};