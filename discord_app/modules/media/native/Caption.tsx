// === Module 10382: Caption ===

// Module 10382 (Caption)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import native from "native" /* 1188 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ColorUtils_mod from "ColorUtils" /* 4727 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ColorUtils;
let obj2;
let rect;
const View = react_native.View;
const Fonts = Constants.Fonts;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { captionText: obj2, labelContainer: rect };
obj2 = { fontFamily: Fonts.PRIMARY_BOLD, color: nativeDefault.colors.WHITE, fontSize: 12 };
createStyles = createStyles.createStyles;
rect = { backgroundColor: ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.PRIMARY_700, 0.5), borderRadius: nativeDefault.radii.xs, paddingHorizontal: 8, paddingVertical: 2, position: "absolute", right: 6, bottom: 6 };
ColorUtils = ColorUtils_mod;
let closure_4 = createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let label;
  let style;
  let textStyle;
  const obj = react;
  const cResult = obj.c(12);
  ({ label, style, textStyle } = arg0);
  const tmp4 = closure_4();
  if (cResult[0] === style) {
    let tmp5;
    if (cResult[1] === tmp4.labelContainer) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === tmp4.captionText) {
      let tmp6;
      if (cResult[4] === textStyle) {
        tmp6 = cResult[5];
      }
      if (cResult[6] === label) {
        let tmp7;
        if (cResult[7] === tmp6) {
          tmp7 = cResult[8];
        }
        if (cResult[9] === tmp5) {
          let tmp10;
          if (cResult[10] === tmp7) {
            tmp10 = cResult[11];
          }
          return tmp10;
        }
        const tmp13 = <View style={tmp5}>{tmp7}</View>;
        cResult[9] = tmp5;
        cResult[10] = tmp7;
        cResult[11] = tmp13;
        tmp10 = tmp13;
      }
      const tmp9 = jsx(native.LegacyText, { style: tmp6, children: label });
      cResult[6] = label;
      cResult[7] = tmp6;
      cResult[8] = tmp9;
      tmp7 = tmp9;
    }
    const items = [tmp4.captionText, textStyle];
    cResult[3] = tmp4.captionText;
    cResult[4] = textStyle;
    cResult[5] = items;
    tmp6 = items;
  }
  const items1 = [tmp4.labelContainer, style];
  cResult[0] = style;
  cResult[1] = tmp4.labelContainer;
  cResult[2] = items1;
  tmp5 = items1;
}) : ((arg0) => {
  let label;
  let style;
  let textStyle;
  ({ label, style, textStyle } = arg0);
  const tmp = closure_4();
  const items = [tmp.labelContainer, style];
  const items1 = [tmp.captionText, textStyle];
  return <View style={items}>{null}</View>;
});
const result = size.fileFinishedImporting("modules/media/native/Caption.tsx");

export const Caption = tmp3;