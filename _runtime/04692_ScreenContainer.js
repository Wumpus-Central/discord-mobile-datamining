// === Module 4692: ScreenContainer ===

// Module 4692 (ScreenContainer)
import noopDefault from "noop" /* 19 */;
import isNativePlatformSupported from "isNativePlatformSupported" /* 4673 */;
import __INTERNAL_VIEW_CONFIGDefault from "__INTERNAL_VIEW_CONFIG" /* 4693 */;
import closure_4 from "_objectWithoutProperties" /* 109 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
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