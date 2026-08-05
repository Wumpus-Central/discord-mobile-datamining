// discord_app/components_native/common/MessageLoadingSpinner.tsx
import "noop";
import { jsx } from "jsxProd";
import set from "set";
import set from "jsxProd";
import { Themes } from "../../../discord_common/js/packages/tokens/native.tsx";
import { ActivityIndicator } from "../../design/components/ActivityIndicator/native/ActivityIndicator.native.tsx";
import { map } from "../../design/tokens/native/useToken.tsx";

const require = arg1;
let result = null;
if (!set.isAndroid()) {
  result = require("get ActivityIndicator").requireNativeComponent("DCDMessageLoadingSpinner");
}
let c4 = result;
const result1 = set.fileFinishedImporting("components_native/common/MessageLoadingSpinner.tsx");

export default function MessageLoadingSpinner(color) {
  let obj = map;
  color = color.color;
  if (color == null) {
    color = obj.useToken(Themes.colors.BACKGROUND_BRAND);
  }
  if (null != closure_4) {
    obj = {};
    const merged = Object.assign(color);
    obj.color = color;
    let tmp8 = <tmp3 />;
  } else {
    obj = { animating: null };
    obj[0] = color.animate;
    const merged1 = Object.assign(color);
    tmp8 = jsx(ActivityIndicator.ActivityIndicator, { animating: null });
  }
  return tmp8;
};