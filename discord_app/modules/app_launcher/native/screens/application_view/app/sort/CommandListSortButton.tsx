// discord_app/modules/app_launcher/native/screens/application_view/app/sort/CommandListSortButton.tsx
import nativeDefault from "../../../../../../../../discord_common/js/packages/tokens/native.tsx";
import asyncRequireImpl from "../../../../../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import noop from "../../../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const CommandListSortOrder = fn(12135).CommandListSortOrder;
const ANDROID_FOREGROUND_RIPPLE = fn(1182).ANDROID_FOREGROUND_RIPPLE;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = { container: null, button: null };
createStyles = { overflow: "hidden", borderRadius: nativeDefault.radii.xxl };
createStyles.container = createStyles;
createStyles.button = {
  gap: 4,
  flexDirection: "row",
  alignItems: "center",
  paddingHorizontal: 12,
  paddingVertical: 4,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
};
let closure_8 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/app_launcher/native/screens/application_view/app/sort/CommandListSortButton.tsx",
);

export default function CommandListSortButton(sortOrder) {
  sortOrder = sortOrder.sortOrder;
  const onSortOptionPress = sortOrder.onSortOptionPress;
  const tmp = closure_8();
  if (CommandListSortOrder.POPULAR === sortOrder) {
    const intl2 = sortOrder(1114).intl;
    let stringResult = intl2.string(sortOrder(1114).t.SzxiqK);
  } else if (tmp2.ALPHABETICAL === sortOrder) {
    const intl = sortOrder(1114).intl;
    stringResult = intl.string(sortOrder(1114).t.m8xsti);
  }
  let obj = {
    accessibilityRole: "button",
    androidRippleConfig: ANDROID_FOREGROUND_RIPPLE,
    activeOpacity: 0.8,
    style: tmp.container,
    onPress() {
      const obj = {
        sortOrder,
        onSortOptionPress,
        onClose() {
          onSortOptionPress(closure_1_2[9]).hideActionSheet("CommandListSortActionSheet");
        },
      };
      obj.openLazy(asyncRequireImpl(12150, dependencyMap.paths), "CommandListSortActionSheet", obj);
    },
    children: null,
  };
  obj = { style: tmp.button, children: null };
  const items = [
    closure_6(sortOrder(4556).Text, { variant: "text-sm/medium", color: "text-default", children: stringResult }),
  ];
  obj = { size: "xs", color: onSortOptionPress(576).colors.TEXT_DEFAULT };
  items[1] = closure_6(sortOrder(11153).ChevronSmallDownIcon, obj);
  obj.children = items;
  obj.children = closure_7(View, obj);
  return closure_6(sortOrder(5123).PressableOpacity, obj);
}
