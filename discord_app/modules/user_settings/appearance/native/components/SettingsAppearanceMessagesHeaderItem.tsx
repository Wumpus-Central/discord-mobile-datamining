// discord_app/modules/user_settings/appearance/native/components/SettingsAppearanceMessagesHeaderItem.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4827);
let obj2 = {
  messagesHeaderContainer: {
    flexDirection: "row",
    gap: nativeDefault.space.PX_12,
    alignItems: "center",
    marginHorizontal: nativeDefault.space.PX_24,
  },
};
let closure_4 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/appearance/native/components/SettingsAppearanceMessagesHeaderItem.tsx",
);

export default function MessagesHeaderItem(animatedStyles) {
  const obj = { style: closure_4().messagesHeaderContainer, children: null };
  const obj2 = {
    animated: true,
    style: animatedStyles.animatedStyles.textNormal,
    variant: "text-lg/bold",
    children: null,
  };
  const intl = util.intl;
  obj2.children = intl.string(util.t.OIgYlQ);
  obj.children = jsx(Text_Text.Text, {
    animated: true,
    style: animatedStyles.animatedStyles.textNormal,
    variant: "text-lg/bold",
    children: null,
  });
  return <View style={closure_4().messagesHeaderContainer}>{null}</View>;
}
