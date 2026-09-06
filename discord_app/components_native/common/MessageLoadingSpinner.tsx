// discord_app/components_native/common/MessageLoadingSpinner.tsx
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../design/tokens/native/useToken.tsx";
import ActivityIndicator_ActivityIndicator from "../../design/components/ActivityIndicator/native/ActivityIndicator.native.tsx";
import noop from "../../../_runtime/metro/00019__.js";

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
}
