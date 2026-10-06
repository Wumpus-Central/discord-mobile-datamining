// === Module 16142: ServerPreviewPill ===

// Module 16142 (ServerPreviewPill)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4892 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { pill: obj2, text: { color: nativeDefault.colors.BLACK, textTransform: "uppercase", letterSpacing: 0.5 } };
obj2 = { paddingHorizontal: 10, paddingVertical: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.WHITE };
createStyles = createStyles.createStyles;
({ color: nativeDefault.colors.BLACK, textTransform: "uppercase", letterSpacing: 0.5 });
let closure_4 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let pill;
  let text;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(6);
  const tmp4 = closure_4();
  ({ pill, text } = tmp4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl2.intl;
    const stringResult = intl.string(intl2.t.KNhFgD);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.text) {
    const tmp9 = jsx(Text_Text.Text, { variant: "text-xs/bold", style: text, children: first });
    cResult[1] = tmp4.text;
    cResult[2] = tmp9;
    tmp7 = tmp9;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === tmp4.pill) {
    let tmp10;
    if (cResult[4] === tmp7) {
      tmp10 = cResult[5];
    }
    return tmp10;
  }
  const tmp11 = <View style={pill} accessibilityRole="text">{tmp7}</View>;
  cResult[3] = tmp4.pill;
  cResult[4] = tmp7;
  cResult[5] = tmp11;
  tmp10 = tmp11;
}) : (() => {
  let intl;
  const tmp = closure_4();
  ({ variant: "text-xs/bold", style: tmp.text, children: intl.string(intl2.t.KNhFgD) });
  const Text = Text_Text.Text;
  intl = intl2.intl;
  return <View style={tmp.pill} accessibilityRole="text">{null}</View>;
});
const result = size.fileFinishedImporting("modules/lurker_mode/native/ServerPreviewPill.tsx");

export default tmp4;