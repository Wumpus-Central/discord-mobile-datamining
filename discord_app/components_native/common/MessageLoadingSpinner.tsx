// === Module 12453: result ===

// Module 12453 (result)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import map from "map" /* 4097 */;
import ActivityIndicator from "ActivityIndicator" /* 5446 */;
import { jsx } from "jsxProd" /* 21 */;
import obj132 from "obj132" /* 500 */;

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