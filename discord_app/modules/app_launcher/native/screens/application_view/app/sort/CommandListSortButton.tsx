// === Module 12291: CommandListSortButton ===

// Module 12291 (CommandListSortButton)
import nativeDefault from "native" /* 576 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4605 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const CommandListSortOrder = fn(12277).CommandListSortOrder;
const ANDROID_FOREGROUND_RIPPLE = fn(1181).ANDROID_FOREGROUND_RIPPLE;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4638);
let obj2 = { container: { overflow: "hidden", borderRadius: nativeDefault.radii.xxl }, button: null };
const obj3 = { overflow: "hidden", borderRadius: nativeDefault.radii.xxl };
obj2.button = { gap: 4, flexDirection: "row", alignItems: "center", paddingHorizontal: 12, paddingVertical: 4, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/application_view/app/sort/CommandListSortButton.tsx");

export default function CommandListSortButton(sortOrder) {
  sortOrder = sortOrder.sortOrder;
  const onSortOptionPress = sortOrder.onSortOptionPress;
  const tmp = closure_8();
  if (CommandListSortOrder.POPULAR === sortOrder) {
    const intl2 = sortOrder(1115).intl;
    let stringResult = intl2.string(sortOrder(1115).t.SzxiqK);
  } else if (tmp2.ALPHABETICAL === sortOrder) {
    const intl = sortOrder(1115).intl;
    stringResult = intl.string(sortOrder(1115).t.m8xsti);
  }
  const obj = {
    accessibilityRole: "button",
    androidRippleConfig: ANDROID_FOREGROUND_RIPPLE,
    activeOpacity: 0.8,
    style: tmp.container,
    onPress() {
      ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12292, dependencyMap.paths), "CommandListSortActionSheet", {
        sortOrder,
        onSortOptionPress,
        onClose() {
          onSortOptionPress(closure_1_2[9]).hideActionSheet("CommandListSortActionSheet");
        }
      });
    },
    children: null
  };
  const obj2 = { style: tmp.button, children: null };
  const items = [closure_6(sortOrder(4634).Text, { variant: "text-sm/medium", color: "text-default", children: stringResult }), closure_6(sortOrder(11306).ChevronSmallDownIcon, { size: "xs", color: onSortOptionPress(576).colors.TEXT_DEFAULT })];
  obj2.children = items;
  obj.children = closure_7(View, obj2);
  return closure_6(sortOrder(5208).PressableOpacity, obj);
};