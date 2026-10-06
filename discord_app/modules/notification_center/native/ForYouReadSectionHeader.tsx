// === Module 16415: ForYouReadSectionHeader ===

// Module 16415 (ForYouReadSectionHeader)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4892 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let c2;
let obj2;
({ View: c2, StyleSheet } = react_native);
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { container: obj2, textHeader: { color: nativeDefault.colors.TEXT_SUBTLE, marginTop: 20 } };
obj2 = { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, marginVertical: 8, paddingHorizontal: 24 };
createStyles = createStyles.createStyles;
({ color: nativeDefault.colors.TEXT_SUBTLE, marginTop: 20 });
let closure_4 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let container;
  let first;
  let textHeader;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(6);
  const tmp4 = closure_4();
  ({ container, textHeader } = tmp4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl2.intl;
    const stringResult = intl.string(intl2.t.hftC1K);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.textHeader) {
    const tmp9 = jsx(Text_Text.Text, { style: textHeader, variant: "text-sm/semibold", children: first });
    cResult[1] = tmp4.textHeader;
    cResult[2] = tmp9;
    tmp7 = tmp9;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === tmp4.container) {
    let tmp10;
    if (cResult[4] === tmp7) {
      tmp10 = cResult[5];
    }
    return tmp10;
  }
  const tmp11 = <React2 style={container}>{tmp7}</React2>;
  cResult[3] = tmp4.container;
  cResult[4] = tmp7;
  cResult[5] = tmp11;
  tmp10 = tmp11;
}) : (() => {
  let intl;
  const tmp = closure_4();
  ({ style: tmp.textHeader, variant: "text-sm/semibold", children: intl.string(intl2.t.hftC1K) });
  const Text = Text_Text.Text;
  intl = intl2.intl;
  return <React2 style={tmp.container}>{null}</React2>;
});
const result = size.fileFinishedImporting("modules/notification_center/native/ForYouReadSectionHeader.tsx");

export const ForYouReadSectionHeader = tmp5;