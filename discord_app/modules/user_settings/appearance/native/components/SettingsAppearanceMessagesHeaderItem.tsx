// === Module 15111: SettingsAppearanceMessagesHeaderItem ===

// Module 15111 (SettingsAppearanceMessagesHeaderItem)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4886 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let animatedStyles;

let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { messagesHeaderContainer: obj2 };
obj2 = { flexDirection: "row", gap: nativeDefault.space.PX_12, alignItems: "center", marginHorizontal: nativeDefault.space.PX_24 };
let closure_4 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((animatedStyles) => {
  let first;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(6);
  animatedStyles = animatedStyles.animatedStyles;
  const tmp4 = closure_4();
  const messagesHeaderContainer = tmp4.messagesHeaderContainer;
  const textNormal = animatedStyles.textNormal;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl2.intl;
    const stringResult = intl.string(intl2.t.OIgYlQ);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== animatedStyles.textNormal) {
    const tmp9 = jsx(Text_Text.Text, { animated: true, style: textNormal, variant: "text-lg/bold", children: first });
    cResult[1] = animatedStyles.textNormal;
    cResult[2] = tmp9;
    tmp7 = tmp9;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === tmp4.messagesHeaderContainer) {
    let tmp10;
    if (cResult[4] === tmp7) {
      tmp10 = cResult[5];
    }
    return tmp10;
  }
  const tmp11 = <View style={messagesHeaderContainer}>{tmp7}</View>;
  cResult[3] = tmp4.messagesHeaderContainer;
  cResult[4] = tmp7;
  cResult[5] = tmp11;
  tmp10 = tmp11;
}) : ((animatedStyles) => {
  let intl;
  animatedStyles = animatedStyles.animatedStyles;
  ({ animated: true, style: animatedStyles.textNormal, variant: "text-lg/bold", children: intl.string(intl2.t.OIgYlQ) });
  const Text = Text_Text.Text;
  intl = intl2.intl;
  return <View style={closure_4().messagesHeaderContainer}>{null}</View>;
});
const result = size.fileFinishedImporting("modules/user_settings/appearance/native/components/SettingsAppearanceMessagesHeaderItem.tsx");

export default tmp3;