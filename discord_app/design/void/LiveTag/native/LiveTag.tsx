// === Module 13955: LiveTag ===

// Module 13955 (LiveTag)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4892 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4896 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let num;
let obj2;
let obj3;
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { tag: obj2, tagText: obj3 };
obj2 = { paddingHorizontal: 6, paddingVertical: 2, borderRadius: nativeDefault.radii.round, overflow: "hidden", justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BADGE_NOTIFICATION_BACKGROUND };
createStyles = createStyles.createStyles;
obj3 = { textAlign: "center", color: nativeDefault.unsafe_rawColors.WHITE, marginTop: num };
num = 0;
if (PlatformUtils.isAndroid()) {
  num = -2;
}
let closure_4 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let allowFontScaling;
  let style;
  let textStyle;
  const obj = react2;
  const cResult = obj.c(13);
  ({ style, textStyle, allowFontScaling } = arg0);
  const tmp4 = closure_4();
  if (cResult[0] === style) {
    let tmp5;
    if (cResult[1] === tmp4.tag) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === tmp4.tagText) {
      let tmp6;
      let tmp8;
      if (cResult[4] === textStyle) {
        tmp6 = cResult[5];
      }
      const _Symbol = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl2.intl;
        const str2 = intl.string(intl2.t.dI3q4h);
        const formatted = str2.toUpperCase();
        cResult[6] = formatted;
        tmp8 = formatted;
      } else {
        tmp8 = cResult[6];
      }
      if (cResult[7] === allowFontScaling) {
        let tmp10;
        if (cResult[8] === tmp6) {
          tmp10 = cResult[9];
        }
        if (cResult[10] === tmp5) {
          let tmp13;
          if (cResult[11] === tmp10) {
            tmp13 = cResult[12];
          }
          return tmp13;
        }
        const tmp16 = <View style={tmp5}>{tmp10}</View>;
        cResult[10] = tmp5;
        cResult[11] = tmp10;
        cResult[12] = tmp16;
        tmp13 = tmp16;
      }
      const tmp12 = jsx(Text_Text.Text, { variant: "text-xs/bold", style: tmp6, lineClamp: 1, allowFontScaling, children: tmp8 });
      cResult[7] = allowFontScaling;
      cResult[8] = tmp6;
      cResult[9] = tmp12;
      tmp10 = tmp12;
    }
    const items = [tmp4.tagText, textStyle];
    cResult[3] = tmp4.tagText;
    cResult[4] = textStyle;
    cResult[5] = items;
    tmp6 = items;
  }
  const items1 = [tmp4.tag, style];
  cResult[0] = style;
  cResult[1] = tmp4.tag;
  cResult[2] = items1;
  tmp5 = items1;
}) : ((arg0) => {
  let allowFontScaling;
  let items1;
  let str;
  let style;
  let textStyle;
  ({ style, textStyle, allowFontScaling } = arg0);
  const tmp = closure_4();
  const items = [tmp.tag, style];
  ({ variant: "text-xs/bold", style: items1, lineClamp: 1, allowFontScaling, children: str.toUpperCase() });
  items1 = [tmp.tagText, textStyle];
  const Text = Text_Text.Text;
  const intl = intl2.intl;
  str = intl.string(intl2.t.dI3q4h);
  return <View style={items}>{null}</View>;
});
const result = size.fileFinishedImporting("design/void/LiveTag/native/LiveTag.tsx");

export default tmp4;