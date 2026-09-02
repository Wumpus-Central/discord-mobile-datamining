// discord_app/modules/checkout/native/gifting/SelectedUserField.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import nameFromUserDefault from "../../../../utils/UserUtils.tsx";
import useInputStyles from "../../../../design/components/Input/native/InputFieldContainer.native.tsx";
import MagnifyingGlassIcon from "../../../../design/components/Icon/native/redesign/generated/MagnifyingGlassIcon.tsx";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
({ Pressable: c3, View: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = {
  container: null,
  content: null,
  opener: null,
  openerWithClearButton: null,
  searchIcon: null,
  userPill: null,
  userPillText: null,
  clearButton: null,
};
createCacheKey = { marginHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexDirection: "row", overflow: "hidden", alignItems: "center", display: "flex" };
createCacheKey[2] = {
  flexDirection: "row",
  alignItems: "center",
  flex: 1,
  paddingHorizontal: ThemesDefault.space.PX_16,
  paddingVertical: 6,
};
createCacheKey[3] = { paddingRight: 0 };
const obj1 = {
  flexDirection: "row",
  alignItems: "center",
  flex: 1,
  paddingHorizontal: ThemesDefault.space.PX_16,
  paddingVertical: 6,
};
createCacheKey[4] = { marginRight: ThemesDefault.space.PX_8 };
let obj2 = { marginRight: ThemesDefault.space.PX_8 };
createCacheKey[5] = {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: ThemesDefault.radii.lg,
  paddingVertical: 6,
  paddingHorizontal: 6,
};
createCacheKey[6] = { marginLeft: 6 };
let obj3 = {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: ThemesDefault.radii.lg,
  paddingVertical: 6,
  paddingHorizontal: 6,
};
createCacheKey[7] = {
  alignItems: "center",
  justifyContent: "center",
  minWidth: 44,
  minHeight: 44,
  paddingRight: ThemesDefault.space.PX_16,
  paddingLeft: ThemesDefault.space.PX_8,
};
let closure_7 = createCacheKey.createStyles(createCacheKey);
let obj4 = {
  alignItems: "center",
  justifyContent: "center",
  minWidth: 44,
  minHeight: 44,
  paddingRight: ThemesDefault.space.PX_16,
  paddingLeft: ThemesDefault.space.PX_8,
};
const result = require("set").fileFinishedImporting("modules/checkout/native/gifting/SelectedUserField.tsx");

export default function SelectedUserField(onPress) {
  ({ selectedUser, setSelectedUser: require } = onPress);
  const tmp = callback();
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
    const intl3 = tmp4(1233).intl;
    let obj3 = nameFromUserDefault;
    const _HermesInternal2 = HermesInternal;
    let combined = "" + intl3.string(tmp4(1233).t.xFn72s) + ", " + obj3.getName(selectedUser);
    const stringResult = intl3.string(tmp4(1233).t.xFn72s);
  } else {
    const intl = tmp4(1233).intl;
    const intl2 = tmp4(1233).intl;
    const _HermesInternal = HermesInternal;
    combined = "" + intl.string(tmp4(1233).t.xFn72s) + ", " + intl2.string(tmp4(1233).t.R0vK0N);
    const stringResult1 = intl.string(tmp4(1233).t.xFn72s);
  }
  obj[3] = combined;
  const items1 = [
    closure_5(MagnifyingGlassIcon.MagnifyingGlassIcon, {
      style: tmp.searchIcon,
      size: "xs",
      color: "interactive-text-default",
    }),
  ];
  if (null != selectedUser) {
    const obj2 = { style: null, children: null };
    obj2[0] = tmp.userPill;
    obj3 = { user: null, guildId: "Array", size: true };
    obj3[0] = selectedUser;
    obj3[2] = tmp4(1296).AvatarSizes.XSMALL_20;
    const items2 = [tmp2(tmp4(1296).Avatar, obj3)];
    const obj4 = { variant: "text-md/medium", style: null, children: null };
    obj4[1] = tmp.userPillText;
    obj4[2] = nameFromUserDefault.getName(selectedUser);
    items2[1] = tmp2(tmp4(4474).Text, obj4);
    obj2[1] = items2;
    let tmp2Result = tmp6(tmp3, obj2);
    const obj10 = nameFromUserDefault;
  } else {
    const obj5 = { variant: "text-sm/semibold", color: "text-subtle", style: null, children: null };
    obj5[2] = tmp.userPillText;
    const intl4 = tmp4(1233).intl;
    obj5[3] = intl4.string(tmp4(1233).t.R0vK0N);
    tmp2Result = tmp2(tmp4(4474).Text, obj5);
  }
  items1[1] = tmp2Result;
  obj[4] = items1;
  const items3 = [closure_6(closure_3, obj)];
  tmp2Result = null;
  if (null != selectedUser) {
    const obj6 = { style: null, onPress: null, accessibilityRole: "button", accessibilityLabel: null, children: null };
    obj6[0] = tmp.clearButton;
    obj6[1] = function onPress() {
      return callback(undefined);
    };
    const intl5 = tmp4(1233).intl;
    const obj7 = { text: null };
    obj7[0] = nameFromUserDefault.getName(selectedUser);
    obj6[3] = intl5.formatToPlainString(tmp4(1233).t["0Vb9FQ"], obj7);
    obj6[4] = tmp2(tmp4(6234).CircleXIcon, { size: "xs" });
    tmp2Result = tmp2(tmp7, obj6);
    const obj13 = nameFromUserDefault;
  }
  items3[1] = tmp2Result;
  obj[1] = items3;
  obj[1] = closure_5(useInputStyles.InputFieldContainer, { children: closure_6(closure_4, obj) });
  return closure_5(closure_4, obj);
}
