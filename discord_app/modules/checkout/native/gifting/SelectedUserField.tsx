// discord_app/modules/checkout/native/gifting/SelectedUserField.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import UserUtilsDefault from "../../../../utils/UserUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import CircleXIcon from "../../../../design/components/Icon/native/redesign/generated/CircleXIcon.tsx";
import InputFieldContainer from "../../../../design/components/Input/native/InputFieldContainer.native.tsx";
import MagnifyingGlassIcon from "../../../../design/components/Icon/native/redesign/generated/MagnifyingGlassIcon.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4722);
let obj2 = {
  container: { marginHorizontal: nativeDefault.space.PX_16 },
  content: { flexDirection: "row", overflow: "hidden", alignItems: "center", display: "flex" },
  opener: null,
  openerWithClearButton: null,
  searchIcon: null,
  userPill: null,
  userPillText: null,
  clearButton: null,
};
let obj3 = { marginHorizontal: nativeDefault.space.PX_16 };
obj2.opener = {
  flexDirection: "row",
  alignItems: "center",
  flex: 1,
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingVertical: 6,
};
obj2.openerWithClearButton = { paddingRight: 0 };
let obj4 = {
  flexDirection: "row",
  alignItems: "center",
  flex: 1,
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingVertical: 6,
};
obj2.searchIcon = { marginRight: nativeDefault.space.PX_8 };
const obj5 = { marginRight: nativeDefault.space.PX_8 };
obj2.userPill = {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.lg,
  paddingVertical: 6,
  paddingHorizontal: 6,
};
obj2.userPillText = { marginLeft: 6 };
let obj6 = {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.lg,
  paddingVertical: 6,
  paddingHorizontal: 6,
};
obj2.clearButton = {
  alignItems: "center",
  justifyContent: "center",
  minWidth: 44,
  minHeight: 44,
  paddingRight: nativeDefault.space.PX_16,
  paddingLeft: nativeDefault.space.PX_8,
};
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkout/native/gifting/SelectedUserField.tsx");

export default function SelectedUserField(onPress) {
  ({ selectedUser, setSelectedUser: require } = onPress);
  const tmp = closure_7();
  const obj = { style: tmp.container, children: null };
  const obj2 = { style: tmp.content, children: null };
  const items = [tmp.opener];
  let openerWithClearButton = null != selectedUser;
  if (openerWithClearButton) {
    openerWithClearButton = tmp.openerWithClearButton;
  }
  const obj3 = {
    style: items,
    onPress: onPress.onPress,
    accessibilityRole: "button",
    accessibilityLabel: null,
    children: null,
  };
  items[1] = openerWithClearButton;
  if (null != selectedUser) {
    const intl3 = util.intl;
    const stringResult = intl3.string(util.t.xFn72s);
    const _HermesInternal2 = HermesInternal;
    let combined = "" + stringResult + ", " + UserUtilsDefault.getName(selectedUser);
  } else {
    const intl = util.intl;
    const intl2 = util.intl;
    const _HermesInternal = HermesInternal;
    combined = "" + intl.string(util.t.xFn72s) + ", " + intl2.string(util.t.R0vK0N);
    const stringResult1 = intl.string(util.t.xFn72s);
  }
  obj3.accessibilityLabel = combined;
  const items1 = [
    hasOwnProperty(MagnifyingGlassIcon.MagnifyingGlassIcon, {
      style: tmp.searchIcon,
      size: "xs",
      color: "interactive-text-default",
    }),
  ];
  if (null != selectedUser) {
    const obj6 = { style: tmp.userPill, children: null };
    const obj7 = { user: selectedUser, guildId: "Array", size: native.AvatarSizes.XSMALL_20 };
    const items2 = [hasOwnProperty(native.Avatar, obj7)];
    const obj8 = {
      variant: "text-md/medium",
      style: tmp.userPillText,
      children: UserUtilsDefault.getName(selectedUser),
    };
    items2[1] = hasOwnProperty(Text_Text.Text, obj8);
    obj6.children = items2;
    let tmp2Result1 = timestampProducer(React4, obj6);
  } else {
    const obj9 = { variant: "text-sm/semibold", color: "text-subtle", style: tmp.userPillText, children: null };
    const intl4 = util.intl;
    obj9.children = intl4.string(util.t.R0vK0N);
    tmp2Result1 = hasOwnProperty(Text_Text.Text, obj9);
  }
  items1[1] = tmp2Result1;
  obj3.children = items1;
  const items3 = [timestampProducer(React3, obj3)];
  let tmp2Result = null;
  if (null != selectedUser) {
    const obj11 = {
      style: tmp.clearButton,
      onPress() {
        return require(undefined);
      },
      accessibilityRole: "button",
      accessibilityLabel: null,
      children: null,
    };
    const intl5 = util.intl;
    const obj12 = { text: UserUtilsDefault.getName(selectedUser) };
    obj11.accessibilityLabel = intl5.formatToPlainString(util.t["0Vb9FQ"], obj12);
    obj11.children = hasOwnProperty(CircleXIcon.CircleXIcon, { size: "xs" });
    tmp2Result = hasOwnProperty(React3, obj11);
  }
  items3[1] = tmp2Result;
  obj2.children = items3;
  obj.children = hasOwnProperty(InputFieldContainer.InputFieldContainer, { children: timestampProducer(React4, obj2) });
  return hasOwnProperty(React4, obj);
}
