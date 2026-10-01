// === Module 5428: ScreenContainer ===

// Module 5428 (ScreenContainer)
import _mod5411 from "module_5411" /* 5411 */;
import _modDef5429 from "module_5429" /* 5429 */;
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
    enabled = _mod5411.screensEnabled();
  }
  const tmp3 = _objectWithoutProperties(enabled, closure_3);
  if (enabled) {
    if (_mod5411.isNativePlatformSupported) {
      if (enabled.hasTwoStates) {
        const obj2 = {};
        const merged = Object.assign(tmp3);
        return jsx(_modDef5429, {});
      } else {
        const obj3 = {};
        const merged1 = Object.assign(tmp3);
        return jsx(_modDef5429, {});
      }
    }
  }
  const merged2 = Object.assign(tmp3);
  return <hasOwnProperty />;
};