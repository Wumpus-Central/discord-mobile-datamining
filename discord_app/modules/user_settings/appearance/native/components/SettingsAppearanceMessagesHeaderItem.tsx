// === Module 15111: SettingsAppearanceMessagesHeaderItem ===

// Module 15111 (SettingsAppearanceMessagesHeaderItem)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 4886 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let obj2 = { messagesHeaderContainer: { flexDirection: "row", gap: nativeDefault.space.PX_12, alignItems: "center", marginHorizontal: nativeDefault.space.PX_24 } };
let closure_4 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const obj3 = { flexDirection: "row", gap: nativeDefault.space.PX_12, alignItems: "center", marginHorizontal: nativeDefault.space.PX_24 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/appearance/native/components/SettingsAppearanceMessagesHeaderItem.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((animatedStyles) => {
  const cResult = c.c(6);
  animatedStyles = animatedStyles.animatedStyles;
  const tmp4 = closure_4();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.OIgYlQ);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== animatedStyles.textNormal) {
    const obj2 = { animated: true, style: animatedStyles.textNormal, variant: "text-lg/bold", children: first };
    const tmp9 = jsx(Text_Text.Text, { animated: true, style: animatedStyles.textNormal, variant: "text-lg/bold", children: first });
    cResult[1] = animatedStyles.textNormal;
    cResult[2] = tmp9;
    let tmp7 = tmp9;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === tmp4.messagesHeaderContainer) {
    if (cResult[4] === tmp7) {
      let tmp10 = cResult[5];
    }
    return tmp10;
  }
  const tmp11 = <View style={tmp4.messagesHeaderContainer}>{tmp7}</View>;
  cResult[3] = tmp4.messagesHeaderContainer;
  cResult[4] = tmp7;
  cResult[5] = tmp11;
  tmp10 = tmp11;
}) : ((animatedStyles) => {
  const obj = { style: closure_4().messagesHeaderContainer, children: null };
  const obj2 = { animated: true, style: animatedStyles.animatedStyles.textNormal, variant: "text-lg/bold", children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.OIgYlQ);
  obj.children = jsx(Text_Text.Text, { animated: true, style: animatedStyles.animatedStyles.textNormal, variant: "text-lg/bold", children: null });
  return <View style={closure_4().messagesHeaderContainer}>{null}</View>;
});