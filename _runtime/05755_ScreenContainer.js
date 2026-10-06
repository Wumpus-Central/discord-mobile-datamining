// _runtime/05755_ScreenContainer.js
import Fragment from "react/00021_Fragment.js";
import react_native from "05738_react-native.js";
import react_nativeDefault from "05756_react-native.js";
import _objectWithoutProperties from "metro/00109__objectWithoutProperties.js";
import react_native2 from "00017_react-native.js";
import react from "00019_react.js";

let Platform;
let hasOwnProperty;
let closure_3 = ["enabled", "hasTwoStates"];
({ Platform, View: hasOwnProperty } = react_native2);
const jsx = Fragment.jsx;

export default function ScreenContainer(enabled) {
  enabled = enabled.enabled;
  if (undefined === enabled) {
    const obj = react_native;
    enabled = obj.screensEnabled();
  }
  const hasTwoStates = enabled.hasTwoStates;
  const tmp3 = _objectWithoutProperties(enabled, closure_3);
  if (enabled) {
    if (react_native.isNativePlatformSupported) {
      if (hasTwoStates) {
        react_nativeDefault;
        const merged = Object.assign(tmp3);
        return <tmp14 />;
      } else {
        react_nativeDefault;
        const merged1 = Object.assign(tmp3);
        return <tmp9 />;
      }
    }
  }
  const merged2 = Object.assign(tmp3);
  return <hasOwnProperty />;
}
