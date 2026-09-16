// === Module 15403: SettingsAppearanceMessagesHeaderItem ===

// Module 15403 (SettingsAppearanceMessagesHeaderItem)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4634 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4638);
let obj2 = { messagesHeaderContainer: { flexDirection: "row", gap: nativeDefault.space.PX_12, alignItems: "center", marginHorizontal: nativeDefault.space.PX_24 } };
let closure_4 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/appearance/native/components/SettingsAppearanceMessagesHeaderItem.tsx");

export default function MessagesHeaderItem(animatedStyles) {
  const obj = { style: closure_4().messagesHeaderContainer, children: null };
  const obj2 = { animated: true, style: animatedStyles.animatedStyles.textNormal, variant: "text-lg/bold", children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.OIgYlQ);
  obj.children = jsx(Text_Text.Text, { animated: true, style: animatedStyles.animatedStyles.textNormal, variant: "text-lg/bold", children: null });
  return <View style={closure_4().messagesHeaderContainer}>{null}</View>;
};