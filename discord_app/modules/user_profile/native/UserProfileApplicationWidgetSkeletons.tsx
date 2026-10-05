// === Module 8682: UserProfileApplicationWidgetSkeletons ===

// Module 8682 (UserProfileApplicationWidgetSkeletons)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 4886 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let style, widthChars;

let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { skeleton: obj2 };
obj2 = { borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
let closure_4 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let c5 = 0.46;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((style) => {
  const obj = react2;
  const cResult = obj.c(3);
  style = style.style;
  const tmp2 = closure_4();
  if (cResult[0] === style) {
    let tmp3;
    if (cResult[1] === tmp2.skeleton) {
      tmp3 = cResult[2];
    }
    return tmp3;
  }
  const items = [tmp2.skeleton, style];
  const tmp4 = <View style={items} />;
  cResult[0] = style;
  cResult[1] = tmp2.skeleton;
  cResult[2] = tmp4;
  tmp3 = tmp4;
}) : ((style) => {
  style = style.style;
  const items = [closure_4().skeleton, style];
  return <View style={items} />;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((widthChars) => {
  const obj = react2;
  const cResult = obj.c(6);
  widthChars = widthChars.widthChars;
  let num = 15;
  const variant = widthChars.variant;
  if (undefined !== widthChars) {
    num = widthChars;
  }
  const tmp4 = closure_4();
  const tmp5 = Text_Text.TextStyleSheet[variant];
  const result = tmp5.fontSize * c5 * num;
  const result1 = 0.8 * tmp5.lineHeight;
  if (cResult[0] === result) {
    let tmp8;
    if (cResult[1] === result1) {
      tmp8 = cResult[2];
    }
    if (cResult[3] === tmp4.skeleton) {
      let tmp9;
      if (cResult[4] === tmp8) {
        tmp9 = cResult[5];
      }
      return tmp9;
    }
    const items = [tmp4.skeleton, tmp8];
    const tmp12 = <View style={items} />;
    cResult[3] = tmp4.skeleton;
    cResult[4] = tmp8;
    cResult[5] = tmp12;
    tmp9 = tmp12;
  }
  size = { width: result, height: result1 };
  cResult[0] = result;
  cResult[1] = result1;
  cResult[2] = size;
  tmp8 = size;
}) : ((widthChars) => {
  let num = widthChars.widthChars;
  const variant = widthChars.variant;
  if (num === undefined) {
    num = 15;
  }
  const tmp = closure_4();
  const tmp2 = Text_Text.TextStyleSheet[variant];
  const items = [tmp.skeleton, ];
  size = { width: tmp2.fontSize * c5 * num, height: 0.8 * tmp2.lineHeight };
  items[1] = size;
  return <View style={items} />;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileApplicationWidgetSkeletons.tsx");

export const ImageSkeleton = tmp3;
export const APPROX_CHAR_WIDTH_RATIO = 0.46;
export const TextSkeleton = tmp4;