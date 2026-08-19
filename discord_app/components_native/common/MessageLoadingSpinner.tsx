// discord_app/components_native/common/MessageLoadingSpinner.tsx
import noopAll from "../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import map from "../../design/tokens/native/useToken.tsx";
import ActivityIndicator from "../../design/components/ActivityIndicator/native/ActivityIndicator.native.tsx";
import { jsx } from "../../../_runtime/react/00021_jsxProd.js";
import obj132 from "../../utils/PlatformUtils.tsx";

require = fn;
noopAll;
let result = null;
if (!obj132.isAndroid()) {
  result = require("get ActivityIndicator").requireNativeComponent("DCDMessageLoadingSpinner");
}
let c4 = result;
const result1 = obj132.fileFinishedImporting("components_native/common/MessageLoadingSpinner.tsx");

export default function MessageLoadingSpinner(color) {
  let obj = map;
  color = color.color;
  if (color == null) {
    color = obj.useToken(ThemesDefault.colors.BACKGROUND_BRAND);
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