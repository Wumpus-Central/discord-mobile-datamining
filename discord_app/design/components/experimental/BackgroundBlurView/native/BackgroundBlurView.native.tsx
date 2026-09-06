// === Module 8596: BackgroundBlurView ===

// Module 8596 (BackgroundBlurView)
import BackgroundBlurFill from "BackgroundBlurFill" /* 8597 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4560);
let closure_5 = createStyles.createStyles({ container: { position: "relative", overflow: "hidden" } });
const size = fn(2);
const result = size.fileFinishedImporting("design/components/experimental/BackgroundBlurView/native/BackgroundBlurView.native.tsx");

export const BackgroundBlurView = noop.forwardRef(function BackgroundBlurViewComponent(arg0, ref) {
  ({ blurTheme, pressed, android_blurTargetViewNativeId } = arg0);
  ({ children, style } = arg0);
  const merged = Object.assign(arg0, Object.assign({ children: 0, style: 0, blurTheme: 0, pressed: 0, android_blurTargetViewNativeId: 0 }));
  let obj = {};
  const merged1 = Object.assign(merged);
  const items = [closure_5().container, style];
  obj.style = items;
  obj.ref = ref;
  if (null != pressed) {
    obj = { blurTheme, pressed, android_blurTargetViewNativeId };
    let tmp9 = React3(BackgroundBlurFill.BackgroundBlurFillWithPress, obj);
  } else {
    obj = { blurTheme, android_blurTargetViewNativeId };
    tmp9 = React3(BackgroundBlurFill.BackgroundBlurFill, obj);
  }
  const items1 = [tmp9, children];
  obj.children = items1;
  return React4(View, obj);
});