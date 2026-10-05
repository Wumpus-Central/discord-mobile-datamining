// === Module 9113: MessageLoadingSpinner ===

// Module 9113 (MessageLoadingSpinner)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useToken2 from "useToken" /* 4580 */;
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 5968 */;
import react from "react" /* 19 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let color;

const requireNativeComponent = react_native.requireNativeComponent;
const jsx = Fragment.jsx;
let result = null;
if (!PlatformUtils.isAndroid()) {
  result = requireNativeComponent("DCDMessageLoadingSpinner");
}
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((color) => {
  let tmp11;
  const obj = react2;
  const cResult = obj.c(3);
  const useToken = useToken2.useToken;
  color = color.color;
  useToken2;
  if (color == null) {
    color = useToken(nativeDefault.colors.BACKGROUND_BRAND);
  }
  if (cResult[0] === color) {
    let tmp5;
    if (cResult[1] === color) {
      tmp5 = cResult[2];
    }
    return tmp5;
  }
  if (null != result) {
    const merged = Object.assign(color);
    tmp11 = <tmp6 color={color} />;
  } else {
    const ActivityIndicator = ActivityIndicator_ActivityIndicator.ActivityIndicator;
    const merged1 = Object.assign(color);
    tmp11 = <ActivityIndicator animating={color.animate} />;
  }
  cResult[0] = color;
  cResult[1] = color;
  cResult[2] = tmp11;
  tmp5 = tmp11;
}) : ((color) => {
  let tmp9;
  const useToken = useToken2.useToken;
  color = color.color;
  useToken2;
  if (color == null) {
    color = useToken(nativeDefault.colors.BACKGROUND_BRAND);
  }
  if (null != result) {
    const merged = Object.assign(color);
    tmp9 = <tmp4 color={color} />;
  } else {
    const ActivityIndicator = ActivityIndicator_ActivityIndicator.ActivityIndicator;
    const merged1 = Object.assign(color);
    tmp9 = <ActivityIndicator animating={color.animate} />;
  }
  return tmp9;
});
const result1 = size.fileFinishedImporting("components_native/common/MessageLoadingSpinner.tsx");

export default tmp4;