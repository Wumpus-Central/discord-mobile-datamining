// === Module 15291: SettingsAppearanceMessagesHeaderItem ===

// Module 15291 (SettingsAppearanceMessagesHeaderItem)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { messagesHeaderContainer: null };
createStyles = { flexDirection: "row", gap: nativeDefault.space.PX_12, alignItems: "center", marginHorizontal: nativeDefault.space.PX_24 };
createStyles.messagesHeaderContainer = createStyles;
let closure_4 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/appearance/native/components/SettingsAppearanceMessagesHeaderItem.tsx");

export default function MessagesHeaderItem(animatedStyles) {
  let obj = { style: closure_4().messagesHeaderContainer, children: null };
  obj = { animated: true, style: animatedStyles.animatedStyles.textNormal, variant: "text-lg/bold", children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t.OIgYlQ);
  obj.children = jsx(Text_Text.Text, { animated: true, style: animatedStyles.animatedStyles.textNormal, variant: "text-lg/bold", children: null });
  return <View animated style={animatedStyles.animatedStyles.textNormal} variant="text-lg/bold">{null}</View>;
};