// === Module 4990: ScreenContainer ===

// Module 4990 (ScreenContainer)
import _mod4973 from "module_4973" /* 4973 */;
import _modDef4991 from "module_4991" /* 4991 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = ["enabled", "hasTwoStates"];
get_ActivityIndicator = fn(17);
({ Platform, View: hasOwnProperty } = get_ActivityIndicator);
const jsx = fn(21).jsx;

export default function ScreenContainer(enabled) {
  enabled = enabled.enabled;
  if (undefined === enabled) {
    let obj = _mod4973;
    enabled = obj.screensEnabled();
  }
  const tmp3 = _objectWithoutProperties(enabled, closure_3);
  if (enabled) {
    if (_mod4973.isNativePlatformSupported) {
      if (enabled.hasTwoStates) {
        obj = {};
        const merged = Object.assign(tmp3);
        return jsx(_modDef4991, {});
      } else {
        obj = {};
        const merged1 = Object.assign(tmp3);
        return jsx(_modDef4991, {});
      }
    }
  }
  const merged2 = Object.assign(tmp3);
  return <hasOwnProperty />;
};