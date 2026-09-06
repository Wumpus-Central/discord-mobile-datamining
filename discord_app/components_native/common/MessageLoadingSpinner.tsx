// === Module 9613: MessageLoadingSpinner ===

// Module 9613 (MessageLoadingSpinner)
import nativeDefault from "native" /* 576 */;
import useToken from "useToken" /* 4262 */;
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 5577 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const PlatformUtils = fn(1115);
let result = null;
if (!PlatformUtils.isAndroid()) {
  result = fn(17).requireNativeComponent("DCDMessageLoadingSpinner");
}
const size = fn(2);
const result1 = size.fileFinishedImporting("components_native/common/MessageLoadingSpinner.tsx");

export default function MessageLoadingSpinner(color) {
  let obj = useToken;
  color = color.color;
  if (color == null) {
    color = obj.useToken(nativeDefault.colors.BACKGROUND_BRAND);
  }
  if (null != result) {
    obj = {};
    const merged = Object.assign(color);
    obj.color = color;
    let tmp8 = <tmp3 />;
  } else {
    obj = { animating: color.animate };
    const merged1 = Object.assign(color);
    tmp8 = jsx(ActivityIndicator_ActivityIndicator.ActivityIndicator, { animating: color.animate });
  }
  return tmp8;
};