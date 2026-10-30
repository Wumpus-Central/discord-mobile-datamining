// === Module 8172: BackgroundBlurView ===

// Module 8172 (BackgroundBlurView)
import BackgroundBlurFill from "BackgroundBlurFill" /* 8173 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(5009);
let closure_5 = createStyles.createStyles({ container: { position: "relative", overflow: "hidden" } });
const size = fn(2);
const result = size.fileFinishedImporting("design/components/experimental/BackgroundBlurView/native/BackgroundBlurView.native.tsx");

export const BackgroundBlurView = function BackgroundBlurViewComponent(arg0) {
  ({ blurTheme, pressed, android_blurTargetViewNativeId } = arg0);
  ({ children, style, ref } = arg0);
  const merged = Object.assign(arg0, Object.assign({ children: 0, style: 0, blurTheme: 0, pressed: 0, android_blurTargetViewNativeId: 0, ref: 0 }));
  const obj = {};
  const merged1 = Object.assign(merged);
  const items = [closure_5().container, style];
  obj.style = items;
  obj.ref = ref;
  if (null != pressed) {
    const obj2 = { blurTheme, pressed, android_blurTargetViewNativeId };
    let tmp9 = React3(BackgroundBlurFill.BackgroundBlurFillWithPress, obj2);
  } else {
    const obj3 = { blurTheme, android_blurTargetViewNativeId };
    tmp9 = React3(BackgroundBlurFill.BackgroundBlurFill, obj3);
  }
  const items1 = [tmp9, children];
  obj.children = items1;
  return React4(View, obj);
};