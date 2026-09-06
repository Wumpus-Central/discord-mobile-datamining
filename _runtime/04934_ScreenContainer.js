// _runtime/04934_ScreenContainer.js
import _mod4915 from "metro/04915__.js";
import _modDef4935 from "metro/04935__.js";
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
    let obj = _mod4915;
    enabled = obj.screensEnabled();
  }
  const tmp3 = _objectWithoutProperties(enabled, closure_3);
  if (enabled) {
    if (_mod4915.isNativePlatformSupported) {
      if (enabled.hasTwoStates) {
        obj = {};
        const merged = Object.assign(tmp3);
        return jsx(_modDef4935, {});
      } else {
        obj = {};
        const merged1 = Object.assign(tmp3);
        return jsx(_modDef4935, {});
      }
    }
  }
  const merged2 = Object.assign(tmp3);
  return <hasOwnProperty />;
}
