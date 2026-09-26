// === Module 5244: ScreenContainer ===

// Module 5244 (ScreenContainer)
import _mod5227 from "module_5227" /* 5227 */;
import _modDef5245 from "module_5245" /* 5245 */;
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
    enabled = _mod5227.screensEnabled();
  }
  const tmp3 = _objectWithoutProperties(enabled, closure_3);
  if (enabled) {
    if (_mod5227.isNativePlatformSupported) {
      if (enabled.hasTwoStates) {
        const obj2 = {};
        const merged = Object.assign(tmp3);
        return jsx(_modDef5245, {});
      } else {
        const obj3 = {};
        const merged1 = Object.assign(tmp3);
        return jsx(_modDef5245, {});
      }
    }
  }
  const merged2 = Object.assign(tmp3);
  return <hasOwnProperty />;
};