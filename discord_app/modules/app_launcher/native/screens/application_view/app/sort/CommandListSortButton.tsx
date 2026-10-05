// discord_app/modules/app_launcher/native/screens/application_view/app/sort/CommandListSortButton.tsx
import react_native from "../../../../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../../../../discord_common/js/packages/tokens/native.tsx";
import FormConstants from "../../../../../../../design/void/Form/native/FormConstants.tsx";
import asyncRequire from "../../../../../../../../_runtime/01987_asyncRequire.js";
import ActionSheetActionCreatorsDefault from "../../../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import AppLauncherConstants from "../../../../../AppLauncherConstants.tsx";
import react from "../../../../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../../../../_runtime/metro/00002__.js";

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
const CommandListSortOrder = AppLauncherConstants.CommandListSortOrder;
const ANDROID_FOREGROUND_RIPPLE = FormConstants.ANDROID_FOREGROUND_RIPPLE;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, button: obj3 };
obj2 = { overflow: "hidden", borderRadius: nativeDefault.radii.xxl };
createStyles = createStyles.createStyles;
obj3 = {
  gap: 4,
  flexDirection: "row",
  alignItems: "center",
  paddingHorizontal: 12,
  paddingVertical: 4,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
};
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting(
  "modules/app_launcher/native/screens/application_view/app/sort/CommandListSortButton.tsx",
);

export default function CommandListSortButton(sortOrder) {
  let items;
  let obj2;
  let stringResult;
  sortOrder = sortOrder.sortOrder;
  const onSortOptionPress = sortOrder.onSortOptionPress;
  const tmp = closure_8();
  if (CommandListSortOrder.POPULAR === sortOrder) {
    const intl2 = sortOrder(1126).intl;
    stringResult = intl2.string(sortOrder(1126).t.SzxiqK);
  } else if (tmp2.ALPHABETICAL === sortOrder) {
    const intl = sortOrder(1126).intl;
    stringResult = intl.string(sortOrder(1126).t.m8xsti);
  }
  let obj = {
    accessibilityRole: "button",
    androidRippleConfig: ANDROID_FOREGROUND_RIPPLE,
    activeOpacity: 0.8,
    style: tmp.container,
    onPress() {
      let obj = ActionSheetActionCreatorsDefault;
      const obj2 = {
        sortOrder,
        onSortOptionPress,
        onClose() {
          const obj = onSortOptionPress(closure_1_2[9]);
          obj.hideActionSheet("CommandListSortActionSheet");
        },
      };
      obj.openLazy(asyncRequire(11774, dependencyMap.paths), "CommandListSortActionSheet", obj2);
    },
    children: closure_7(View, obj2),
  };
  obj2 = { style: tmp.button, children: items };
  const PressableOpacity = sortOrder(5909).PressableOpacity;
  items = [
    closure_6(sortOrder(4886).Text, { variant: "text-sm/medium", color: "text-default", children: stringResult }),
  ];
  const obj3 = { size: "xs", color: onSortOptionPress(587).colors.TEXT_DEFAULT };
  const ChevronSmallDownIcon = sortOrder(10844).ChevronSmallDownIcon;
  items[1] = closure_6(ChevronSmallDownIcon, obj3);
  return closure_6(PressableOpacity, obj);
}
