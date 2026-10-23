// _runtime/05935_ScreenContainer.js
import _mod5918 from "metro/05918__.js";
import _modDef5936 from "metro/05936__.js";
import _objectWithoutProperties from "metro/00109__objectWithoutProperties.js";
import noop from "metro/00019__.js";

require = fn;
let closure_3 = ["enabled", "hasTwoStates"];
get_ActivityIndicator = fn(17);
({ Platform, View: hasOwnProperty } = get_ActivityIndicator);
const jsx = fn(21).jsx;

export default function ScreenContainer(enabled) {
  enabled = enabled.enabled;
  if (undefined === enabled) {
    enabled = _mod5918.screensEnabled();
  }
  const tmp3 = _objectWithoutProperties(enabled, closure_3);
  if (enabled) {
    if (_mod5918.isNativePlatformSupported) {
      if (enabled.hasTwoStates) {
        const obj2 = {};
        const merged = Object.assign(tmp3);
        return jsx(_modDef5936, {});
      } else {
        const obj3 = {};
        const merged1 = Object.assign(tmp3);
        return jsx(_modDef5936, {});
      }
    }
  }
  const merged2 = Object.assign(tmp3);
  return <hasOwnProperty />;
}
