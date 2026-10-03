// === Module 8682: UserProfileApplicationWidgetSkeletons ===

// Module 8682 (UserProfileApplicationWidgetSkeletons)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 4886 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let obj2 = { skeleton: { borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL } };
let closure_4 = createStyles.createStyles(obj2);
fn(558);
let c5 = 0.46;
const obj3 = { borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
const ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((style) => {
  const cResult = c.c(3);
  style = style.style;
  const tmp2 = closure_4();
  if (cResult[0] === style) {
    if (cResult[1] === tmp2.skeleton) {
      let tmp3 = cResult[2];
    }
    return tmp3;
  }
  const obj2 = { style: null };
  const items = [tmp2.skeleton, style];
  obj2.style = items;
  const tmp4 = <View style={null} />;
  cResult[0] = style;
  cResult[1] = tmp2.skeleton;
  cResult[2] = tmp4;
  tmp3 = tmp4;
}) : ((style) => {
  const obj = { style: null };
  const items = [closure_4().skeleton, style.style];
  obj.style = items;
  return <View style={null} />;
});
let size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileApplicationWidgetSkeletons.tsx");

export const ImageSkeleton = tmp3;
export const APPROX_CHAR_WIDTH_RATIO = 0.46;
export const TextSkeleton = ReactCompilerGating.isReactCompilerEnabled() ? ((widthChars) => {
  const cResult = c.c(6);
  widthChars = widthChars.widthChars;
  let num = 15;
  if (undefined !== widthChars) {
    num = widthChars;
  }
  const tmp4 = closure_4();
  const tmp5 = Text_Text.TextStyleSheet[widthChars.variant];
  const result = tmp5.fontSize * c5 * num;
  const result1 = 0.8 * tmp5.lineHeight;
  if (cResult[0] === result) {
    if (cResult[1] === result1) {
      let tmp8 = cResult[2];
    }
    if (cResult[3] === tmp4.skeleton) {
      if (cResult[4] === tmp8) {
        let tmp9 = cResult[5];
      }
      return tmp9;
    }
    const obj2 = { style: null };
    const items = [tmp4.skeleton, tmp8];
    obj2.style = items;
    const tmp12 = <View style={null} />;
    cResult[3] = tmp4.skeleton;
    cResult[4] = tmp8;
    cResult[5] = tmp12;
    tmp9 = tmp12;
  }
  const size = { width: result, height: result1 };
  cResult[0] = result;
  cResult[1] = result1;
  cResult[2] = size;
  tmp8 = size;
}) : ((widthChars) => {
  let num = widthChars.widthChars;
  if (num === undefined) {
    num = 15;
  }
  const tmp2 = Text_Text.TextStyleSheet[widthChars.variant];
  const obj = { style: null };
  const items = [closure_4().skeleton, ];
  const size = { width: tmp2.fontSize * c5 * num, height: 0.8 * tmp2.lineHeight };
  items[1] = size;
  obj.style = items;
  return <View style={null} />;
});