// discord_app/modules/action_sheet/native/components/ContextMenuSubmenuActionSheetHeader.tsx
import util from "../../../../intl/index.native.tsx";
import ActionSheetHeaderPressableText from "../../../../design/components/Sheet/native/ActionSheetHeaderPressableText.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_4 = createStyles.createStyles({
  headerContainer: { paddingVertical: 12, paddingHorizontal: 16, alignItems: "flex-start" },
});
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/action_sheet/native/components/ContextMenuSubmenuActionSheetHeader.tsx",
);

export default function ContextMenuSubmenuActionSheetHeader(onBack) {
  let fn = onBack.onBack;
  let obj = { style: closure_4().headerContainer, children: null };
  obj = { label: null, onPress: null };
  const intl = util.intl;
  obj.label = intl.string(util.t["13/7kX"]);
  if (fn == null) {
    fn = () => {};
  }
  obj.onPress = fn;
  obj.children = jsx(ActionSheetHeaderPressableText.ActionSheetHeaderPressableText, { label: null, onPress: null });
  return <View label={null} onPress={null} />;
}
