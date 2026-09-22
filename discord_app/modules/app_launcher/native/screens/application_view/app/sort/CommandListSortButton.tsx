// discord_app/modules/app_launcher/native/screens/application_view/app/sort/CommandListSortButton.tsx
import nativeDefault from "../../../../../../../../discord_common/js/packages/tokens/native.tsx";
import asyncRequireImpl from "../../../../../../../../_runtime/01980_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import noop from "../../../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const CommandListSortOrder = fn(12392).CommandListSortOrder;
const ANDROID_FOREGROUND_RIPPLE = fn(1181).ANDROID_FOREGROUND_RIPPLE;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4757);
let obj2 = { container: { overflow: "hidden", borderRadius: nativeDefault.radii.xxl }, button: null };
const obj3 = { overflow: "hidden", borderRadius: nativeDefault.radii.xxl };
obj2.button = {
  gap: 4,
  flexDirection: "row",
  alignItems: "center",
  paddingHorizontal: 12,
  paddingVertical: 4,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
};
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/app_launcher/native/screens/application_view/app/sort/CommandListSortButton.tsx",
);

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
      ActionSheetActionCreatorsDefault.openLazy(
        asyncRequireImpl(12407, dependencyMap.paths),
        "CommandListSortActionSheet",
        {
          sortOrder,
          onSortOptionPress,
          onClose() {
            onSortOptionPress(closure_1_2[9]).hideActionSheet("CommandListSortActionSheet");
          },
        },
      );
    },
    children: null,
  };
  const obj2 = { style: tmp.button, children: null };
  const items = [
    closure_6(sortOrder(4753).Text, { variant: "text-sm/medium", color: "text-default", children: stringResult }),
    closure_6(sortOrder(11424).ChevronSmallDownIcon, { size: "xs", color: onSortOptionPress(576).colors.TEXT_DEFAULT }),
  ];
  obj2.children = items;
  obj.children = closure_7(View, obj2);
  return closure_6(sortOrder(5341).PressableOpacity, obj);
}
