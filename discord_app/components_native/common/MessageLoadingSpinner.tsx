// === Module 9706: MessageLoadingSpinner ===

// Module 9706 (MessageLoadingSpinner)
import nativeDefault from "native" /* 576 */;
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 5796 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const PlatformUtils = fn(1364);
let result = null;
if (!PlatformUtils.isAndroid()) {
  result = fn(17).requireNativeComponent("DCDMessageLoadingSpinner");
}
const size = fn(2);
const result1 = size.fileFinishedImporting("components_native/common/MessageLoadingSpinner.tsx");

export default function MessageLoadingSpinner(color) {
  color = color.color;
  if (color == null) {
    color = obj.useToken(nativeDefault.colors.BACKGROUND_BRAND);
  }
  if (null != result) {
    const obj2 = {};
    const merged = Object.assign(color);
    obj2.color = color;
    let tmp8 = <tmp3 />;
  } else {
    const obj3 = { animating: color.animate };
    const merged1 = Object.assign(color);
    tmp8 = jsx(ActivityIndicator_ActivityIndicator.ActivityIndicator, { animating: color.animate });
  }
  return tmp8;
};