// discord_app/modules/checkout/native/gifting/SelectedUserField.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import UserUtilsDefault from "../../../../utils/UserUtils.tsx";
import InputFieldContainer from "../../../../design/components/Input/native/InputFieldContainer.native.tsx";
import MagnifyingGlassIcon from "../../../../design/components/Icon/native/redesign/generated/MagnifyingGlassIcon.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = {
  container: null,
  content: null,
  opener: null,
  openerWithClearButton: null,
  searchIcon: null,
  userPill: null,
  userPillText: null,
  clearButton: null,
};
createStyles = { marginHorizontal: nativeDefault.space.PX_16 };
createStyles.container = createStyles;
createStyles.content = { flexDirection: "row", overflow: "hidden", alignItems: "center", display: "flex" };
createStyles.opener = {
  flexDirection: "row",
  alignItems: "center",
  flex: 1,
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingVertical: 6,
};
createStyles.openerWithClearButton = { paddingRight: 0 };
const obj1 = {
  flexDirection: "row",
  alignItems: "center",
  flex: 1,
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingVertical: 6,
};
createStyles.searchIcon = { marginRight: nativeDefault.space.PX_8 };
let obj2 = { marginRight: nativeDefault.space.PX_8 };
createStyles.userPill = {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.lg,
  paddingVertical: 6,
  paddingHorizontal: 6,
};
createStyles.userPillText = { marginLeft: 6 };
let obj3 = {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.lg,
  paddingVertical: 6,
  paddingHorizontal: 6,
};
createStyles.clearButton = {
  alignItems: "center",
  justifyContent: "center",
  minWidth: 44,
  minHeight: 44,
  paddingRight: nativeDefault.space.PX_16,
  paddingLeft: nativeDefault.space.PX_8,
};
let closure_7 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkout/native/gifting/SelectedUserField.tsx");

export default function SelectedUserField(onPress) {
  ({ selectedUser, setSelectedUser: require } = onPress);
  const tmp = closure_7();
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.content, children: null };
  const items = [tmp.opener];
  let openerWithClearButton = null != selectedUser;
  if (openerWithClearButton) {
    openerWithClearButton = tmp.openerWithClearButton;
  }
  obj = {
    style: items,
    onPress: onPress.onPress,
    accessibilityRole: "button",
    accessibilityLabel: null,
    children: null,
  };
  items[1] = openerWithClearButton;
  if (null != selectedUser) {
    const intl3 = tmp4(1114).intl;
    let obj3 = UserUtilsDefault;
    const _HermesInternal2 = HermesInternal;
    let combined = "" + intl3.string(tmp4(1114).t.xFn72s) + ", " + obj3.getName(selectedUser);
    const stringResult = intl3.string(tmp4(1114).t.xFn72s);
  } else {
    const intl = tmp4(1114).intl;
    const intl2 = tmp4(1114).intl;
    const _HermesInternal = HermesInternal;
    combined = "" + intl.string(tmp4(1114).t.xFn72s) + ", " + intl2.string(tmp4(1114).t.R0vK0N);
    const stringResult1 = intl.string(tmp4(1114).t.xFn72s);
  }
  obj.accessibilityLabel = combined;
  const items1 = [
    hasOwnProperty(MagnifyingGlassIcon.MagnifyingGlassIcon, {
      style: tmp.searchIcon,
      size: "xs",
      color: "interactive-text-default",
    }),
  ];
  if (null != selectedUser) {
    const obj2 = { style: tmp.userPill, children: null };
    obj3 = { user: selectedUser, guildId: "Array", size: tmp4(1178).AvatarSizes.XSMALL_20 };
    const items2 = [tmp2(tmp4(1178).Avatar, obj3)];
    const obj4 = {
      variant: "text-md/medium",
      style: tmp.userPillText,
      children: UserUtilsDefault.getName(selectedUser),
    };
    items2[1] = tmp2(tmp4(4556).Text, obj4);
    obj2.children = items2;
    let tmp2Result = tmp6(tmp3, obj2);
  } else {
    const obj5 = { variant: "text-sm/semibold", color: "text-subtle", style: tmp.userPillText, children: null };
    const intl4 = tmp4(1114).intl;
    obj5.children = intl4.string(tmp4(1114).t.R0vK0N);
    tmp2Result = tmp2(tmp4(4556).Text, obj5);
  }
  items1[1] = tmp2Result;
  obj.children = items1;
  const items3 = [timestampProducer(React3, obj)];
  tmp2Result = null;
  if (null != selectedUser) {
    const obj6 = {
      style: tmp.clearButton,
      onPress() {
        return require(undefined);
      },
      accessibilityRole: "button",
      accessibilityLabel: null,
      children: null,
    };
    const intl5 = tmp4(1114).intl;
    const obj7 = { text: UserUtilsDefault.getName(selectedUser) };
    obj6.accessibilityLabel = intl5.formatToPlainString(tmp4(1114).t["0Vb9FQ"], obj7);
    obj6.children = tmp2(tmp4(6616).CircleXIcon, { size: "xs" });
    tmp2Result = tmp2(tmp7, obj6);
  }
  items3[1] = tmp2Result;
  obj.children = items3;
  obj.children = hasOwnProperty(InputFieldContainer.InputFieldContainer, { children: timestampProducer(React4, obj) });
  return hasOwnProperty(React4, obj);
}
