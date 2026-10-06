// === Module 5755: ScreenContainer ===

// Module 5755 (ScreenContainer)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 5738 */;
import react_nativeDefault from "react-native" /* 5756 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react_native2 from "react-native" /* 17 */;
import react from "react" /* 19 */;

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
};