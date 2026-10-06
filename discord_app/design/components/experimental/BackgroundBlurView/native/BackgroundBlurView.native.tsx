// === Module 8611: BackgroundBlurView ===

// Module 8611 (BackgroundBlurView)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import BackgroundBlurFill from "BackgroundBlurFill" /* 8612 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let closure_2 = ["children", "style", "blurTheme", "pressed", "android_blurTargetViewNativeId"];
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({ container: { position: "relative", overflow: "hidden" } });
const forwardRefResult = react.forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, ref) => {
  let android_blurTargetViewNativeId;
  let blurTheme;
  let children;
  let items;
  let pressed;
  let style;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(20);
  if (cResult[0] !== arg0) {
    ({ children, style, blurTheme, pressed, android_blurTargetViewNativeId } = arg0);
    const tmp12 = _objectWithoutProperties(arg0, closure_2);
    cResult[0] = arg0;
    cResult[1] = android_blurTargetViewNativeId;
    cResult[2] = blurTheme;
    cResult[3] = children;
    cResult[4] = pressed;
    cResult[5] = style;
    cResult[6] = tmp12;
    tmp9 = tmp12;
    tmp8 = style;
    tmp7 = pressed;
    tmp6 = children;
    tmp5 = blurTheme;
    tmp4 = android_blurTargetViewNativeId;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
    tmp9 = cResult[6];
  }
  const tmp13 = closure_7();
  if (cResult[7] === tmp8) {
    let tmp14;
    let tmp18;
    if (cResult[8] === tmp13.container) {
      tmp14 = cResult[9];
    }
    if (cResult[10] === tmp4) {
      if (cResult[11] === tmp5) {
        let tmp15;
        if (cResult[12] === tmp7) {
          tmp15 = cResult[13];
        }
        if (cResult[14] === tmp6) {
          if (cResult[15] === ref) {
            if (cResult[16] === tmp14) {
              if (cResult[17] === tmp15) {
                let tmp21;
                if (cResult[18] === tmp9) {
                  tmp21 = cResult[19];
                }
                return tmp21;
              }
            }
          }
        }
        const obj2 = { style: tmp14, ref, children: items };
        const merged = Object.assign(tmp9);
        items = [tmp15, tmp6];
        const tmp27 = metroRequire(View, obj2);
        cResult[14] = tmp6;
        cResult[15] = ref;
        cResult[16] = tmp14;
        cResult[17] = tmp15;
        cResult[18] = tmp9;
        cResult[19] = tmp27;
        tmp21 = tmp27;
      }
    }
    if (null != tmp7) {
      const obj3 = { blurTheme: tmp5, pressed: tmp7, android_blurTargetViewNativeId: tmp4 };
      tmp18 = hasOwnProperty(BackgroundBlurFill.BackgroundBlurFillWithPress, obj3);
    } else {
      const obj4 = { blurTheme: tmp5, android_blurTargetViewNativeId: tmp4 };
      tmp18 = hasOwnProperty(BackgroundBlurFill.BackgroundBlurFill, obj4);
    }
    cResult[10] = tmp4;
    cResult[11] = tmp5;
    cResult[12] = tmp7;
    cResult[13] = tmp18;
    tmp15 = tmp18;
  }
  const items1 = [tmp13.container, tmp8];
  cResult[7] = tmp8;
  cResult[8] = tmp13.container;
  cResult[9] = items1;
  tmp14 = items1;
}) : ((arg0, ref) => {
  let android_blurTargetViewNativeId;
  let blurTheme;
  let children;
  let items;
  let items1;
  let pressed;
  let style;
  let tmp9;
  ({ blurTheme, pressed, android_blurTargetViewNativeId } = arg0);
  ({ children, style } = arg0);
  const merged = Object.assign(arg0, Object.assign({ children: 0, style: 0, blurTheme: 0, pressed: 0, android_blurTargetViewNativeId: 0 }));
  const obj = { style: items, ref, children: items1 };
  const tmp2 = closure_7();
  const merged1 = Object.assign(merged);
  items = [tmp2.container, style];
  if (null != pressed) {
    const obj2 = { blurTheme, pressed, android_blurTargetViewNativeId };
    tmp9 = hasOwnProperty(BackgroundBlurFill.BackgroundBlurFillWithPress, obj2);
  } else {
    const obj3 = { blurTheme, android_blurTargetViewNativeId };
    tmp9 = hasOwnProperty(BackgroundBlurFill.BackgroundBlurFill, obj3);
  }
  items1 = [tmp9, children];
  return metroRequire(View, obj);
}));
const result = size.fileFinishedImporting("design/components/experimental/BackgroundBlurView/native/BackgroundBlurView.native.tsx");

export const BackgroundBlurView = forwardRefResult;