// === Module 11970: ContextMenuSubmenuActionSheetHeader ===

// Module 11970 (ContextMenuSubmenuActionSheetHeader)
import util from "util" /* 1115 */;
import ActionSheetHeaderPressableText from "ActionSheetHeaderPressableText" /* 9963 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4722);
let closure_4 = createStyles.createStyles({ headerContainer: { paddingVertical: 12, paddingHorizontal: 16, alignItems: "flex-start" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/action_sheet/native/components/ContextMenuSubmenuActionSheetHeader.tsx");

export default function ContextMenuSubmenuActionSheetHeader(onBack) {
  let fn = onBack.onBack;
  const obj = { style: closure_4().headerContainer, children: null };
  const obj2 = { label: null, onPress: null };
  const intl = util.intl;
  obj2.label = intl.string(util.t["13/7kX"]);
  if (fn == null) {
    fn = () => {

    };
  }
  obj2.onPress = fn;
  obj.children = jsx(ActionSheetHeaderPressableText.ActionSheetHeaderPressableText, { label: null, onPress: null });
  return <View style={closure_4().headerContainer}>{null}</View>;
};