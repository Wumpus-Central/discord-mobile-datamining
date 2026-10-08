// === Module 8526: BackgroundBlurView ===

// Module 8526 (BackgroundBlurView)
import c from "c" /* 576 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

const BackgroundBlurFill = BackgroundBlurFillWithPress(8527);
require = fn;
let closure_2 = ["children", "style", "blurTheme", "pressed", "android_blurTargetViewNativeId", "ref"];
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5090);
let closure_7 = createStyles.createStyles({ container: { position: "relative", overflow: "hidden" } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/experimental/BackgroundBlurView/native/BackgroundBlurView.native.tsx");

export const BackgroundBlurView = ReactCompilerGating.isReactCompilerEnabled() ? (function BackgroundBlurViewComponent(arg0) {
  let BackgroundBlurFillWithPress = require;
  let obj = dependencyMap;
  const cResult = c.c(21);
  if (cResult[0] !== arg0) {
    ({ children, style, blurTheme, pressed, android_blurTargetViewNativeId, ref } = arg0);
    const tmp11 = _objectWithoutProperties(arg0, closure_2);
    cResult[0] = arg0;
    cResult[1] = android_blurTargetViewNativeId;
    cResult[2] = blurTheme;
    cResult[3] = children;
    cResult[4] = pressed;
    cResult[5] = ref;
    cResult[6] = style;
    cResult[7] = tmp11;
    let tmp8 = tmp11;
    let tmp7 = style;
    let tmp6 = ref;
    let tmp5 = pressed;
    let tmp4 = children;
    let tmp3 = blurTheme;
    let tmp2 = android_blurTargetViewNativeId;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
    tmp4 = cResult[3];
    tmp5 = cResult[4];
    tmp6 = cResult[5];
    tmp7 = cResult[6];
    tmp8 = cResult[7];
  }
  const tmp12 = closure_7();
  if (cResult[8] === tmp7) {
    if (cResult[9] === tmp12.container) {
      let tmp13 = cResult[10];
    }
    if (cResult[11] === tmp2) {
      if (cResult[12] === tmp3) {
        if (cResult[13] === tmp5) {
          if (cResult[15] === tmp4) {
            if (cResult[16] === tmp6) {
              if (cResult[17] === tmp13) {
                if (cResult[18] === tmp14) {
                  if (cResult[19] === tmp8) {
                    let tmp20 = cResult[20];
                  }
                  return tmp20;
                }
              }
            }
          }
          const obj3 = {};
          const merged = Object.assign(tmp8);
          obj3.style = tmp13;
          obj3.ref = tmp6;
          const items = [cResult[14], tmp4];
          obj3.children = items;
          const tmp26 = timestampProducer(View, obj3);
          cResult[15] = tmp4;
          cResult[16] = tmp6;
          cResult[17] = tmp13;
          cResult[18] = cResult[14];
          cResult[19] = tmp8;
          cResult[20] = tmp26;
          tmp20 = tmp26;
        }
      }
    }
    if (null != tmp5) {
      BackgroundBlurFillWithPress = BackgroundBlurFill.BackgroundBlurFillWithPress;
      obj = { blurTheme: tmp3, pressed: tmp5, android_blurTargetViewNativeId: tmp2 };
      let tmp17 = hasOwnProperty(BackgroundBlurFillWithPress, obj);
    } else {
      const obj4 = { blurTheme: tmp3, android_blurTargetViewNativeId: tmp2 };
      tmp17 = hasOwnProperty(BackgroundBlurFill.BackgroundBlurFill, obj4);
    }
    cResult[11] = tmp2;
    cResult[12] = tmp3;
    cResult[13] = tmp5;
    cResult[14] = tmp17;
  }
  const items1 = [tmp12.container, tmp7];
  cResult[8] = tmp7;
  cResult[9] = tmp12.container;
  cResult[10] = items1;
  tmp13 = items1;
}) : (function BackgroundBlurViewComponent(arg0) {
  ({ blurTheme, pressed, android_blurTargetViewNativeId } = arg0);
  ({ children, style, ref } = arg0);
  const merged = Object.assign(arg0, Object.assign({ children: 0, style: 0, blurTheme: 0, pressed: 0, android_blurTargetViewNativeId: 0, ref: 0 }));
  const obj = {};
  const merged1 = Object.assign(merged);
  const items = [closure_7().container, style];
  obj.style = items;
  obj.ref = ref;
  if (null != pressed) {
    const obj2 = { blurTheme, pressed, android_blurTargetViewNativeId };
    let tmp9 = hasOwnProperty(BackgroundBlurFill.BackgroundBlurFillWithPress, obj2);
  } else {
    const obj3 = { blurTheme, android_blurTargetViewNativeId };
    tmp9 = hasOwnProperty(BackgroundBlurFill.BackgroundBlurFill, obj3);
  }
  const items1 = [tmp9, children];
  obj.children = items1;
  return timestampProducer(View, obj);
});