// === Module 16376: ForYouRecentActivitySectionHeader ===

// Module 16376 (ForYouRecentActivitySectionHeader)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4886 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { container: obj2, textHeader: { marginTop: nativeDefault.space.PX_8 } };
obj2 = { marginTop: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_24 };
createStyles = createStyles.createStyles;
({ marginTop: nativeDefault.space.PX_8 });
let closure_4 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
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
    const stringResult = intl.string(intl2.t.yM9Krm);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.textHeader) {
    const tmp9 = jsx(Text_Text.Text, { style: textHeader, color: "text-muted", variant: "text-sm/semibold", accessibilityRole: "header", children: first });
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
  const tmp11 = <View style={container}>{tmp7}</View>;
  cResult[3] = tmp4.container;
  cResult[4] = tmp7;
  cResult[5] = tmp11;
  tmp10 = tmp11;
}) : (() => {
  let intl;
  const tmp = closure_4();
  ({ style: tmp.textHeader, color: "text-muted", variant: "text-sm/semibold", accessibilityRole: "header", children: intl.string(intl2.t.yM9Krm) });
  const Text = Text_Text.Text;
  intl = intl2.intl;
  return <View style={tmp.container}>{null}</View>;
});
const result = size.fileFinishedImporting("modules/notification_center/native/ForYouRecentActivitySectionHeader.tsx");

export const ForYouRecentActivitySectionHeader = tmp4;