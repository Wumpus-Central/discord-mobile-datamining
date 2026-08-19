// === Module 8087: BackgroundBlurView ===

// Module 8087 (BackgroundBlurView)
import BlurTheme from "BlurTheme" /* 8088 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;
import importAllResult from "noop" /* 19 */;

require = fn;
({ jsx: c3, jsxs: c4 } = jsxProd);
let closure_5 = createCacheKey.createStyles({ container: { position: "relative", overflow: "hidden" } });
const forwardRefResult = importAllResult.forwardRef(function BackgroundBlurViewComponent(arg0, ref) {
  ({ blurTheme, pressed, android_blurTargetViewNativeId } = arg0);
  ({ children, style } = arg0);
  const merged = Object.assign(arg0, Object.create(null));
  let obj = {};
  const merged1 = Object.assign(merged);
  const items = [callback2().container, style];
  obj.style = items;
  obj.ref = ref;
  if (null != pressed) {
    obj = { blurTheme: null, pressed: null, android_blurTargetViewNativeId: null };
    obj[0] = blurTheme;
    obj[1] = pressed;
    obj[2] = android_blurTargetViewNativeId;
    let tmp9 = callback(BlurTheme.BackgroundBlurFillWithPress, obj);
  } else {
    obj = { blurTheme: null, android_blurTargetViewNativeId: null };
    obj[0] = blurTheme;
    obj[1] = android_blurTargetViewNativeId;
    tmp9 = callback(BlurTheme.BackgroundBlurFill, obj);
  }
  const items1 = [tmp9, children];
  obj.children = items1;
  return callback(View, obj);
});
const result = require("obj132").fileFinishedImporting("design/components/experimental/BackgroundBlurView/native/BackgroundBlurView.native.tsx");

export const BackgroundBlurView = forwardRefResult;