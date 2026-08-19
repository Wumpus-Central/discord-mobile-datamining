// === Module 9632: SelectedUserField ===

// Module 9632 (SelectedUserField)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Button from "Button" /* 1297 */;
import nameFromUserDefault from "nameFromUser" /* 4219 */;
import Text from "Text" /* 4734 */;
import CircleXIcon from "CircleXIcon" /* 7341 */;
import useInputStyles from "useInputStyles" /* 7345 */;
import MagnifyingGlassIcon from "MagnifyingGlassIcon" /* 7351 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
noopAll;
({ Pressable: c3, View: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
const createCacheKey = { marginHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexDirection: "row", overflow: "hidden", alignItems: "center", display: "flex" };
createCacheKey[2] = { flexDirection: "row", alignItems: "center", flex: 1, paddingHorizontal: ThemesDefault.space.PX_16, paddingVertical: 6 };
createCacheKey[3] = { paddingRight: 0 };
createCacheKey[4] = { marginRight: ThemesDefault.space.PX_8 };
createCacheKey[5] = { flexDirection: "row", alignItems: "center", backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: ThemesDefault.radii.lg, paddingVertical: 6, paddingHorizontal: 6 };
createCacheKey[6] = { marginLeft: 6 };
createCacheKey[7] = { alignItems: "center", justifyContent: "center", minWidth: 44, minHeight: 44, paddingRight: ThemesDefault.space.PX_16, paddingLeft: ThemesDefault.space.PX_8 };
let closure_7 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/checkout/native/gifting/SelectedUserField.tsx");

export default function SelectedUserField(onPress) {
  ({ selectedUser, setSelectedUser: require } = onPress);
  const tmp = callback();
  let obj = { style: tmp.content, children: null };
  const items = [tmp.opener, ];
  let openerWithClearButton = null != selectedUser;
  if (openerWithClearButton) {
    openerWithClearButton = tmp.openerWithClearButton;
  }
  obj = { style: items, onPress: onPress.onPress, accessibilityRole: "button", accessibilityLabel: null, children: null };
  items[1] = openerWithClearButton;
  if (null != selectedUser) {
    const intl3 = getSystemLocale.intl;
    let obj3 = nameFromUserDefault;
    const _HermesInternal2 = HermesInternal;
    let combined = "" + intl3.string(getSystemLocale.t.xFn72s) + ", " + obj3.getName(selectedUser);
    const stringResult = intl3.string(getSystemLocale.t.xFn72s);
  } else {
    const intl = getSystemLocale.intl;
    const intl2 = getSystemLocale.intl;
    const _HermesInternal = HermesInternal;
    combined = "" + intl.string(getSystemLocale.t.xFn72s) + ", " + intl2.string(getSystemLocale.t.R0vK0N);
    const stringResult1 = intl.string(getSystemLocale.t.xFn72s);
  }
  obj[3] = combined;
  const items1 = [callback(MagnifyingGlassIcon.MagnifyingGlassIcon, { style: tmp.searchIcon, size: "xs", color: "interactive-text-default" }), ];
  if (null != selectedUser) {
    const obj2 = { style: null, children: null };
    obj2[0] = tmp.userPill;
    obj3 = { user: null, guildId: "Array", size: null };
    obj3[0] = selectedUser;
    obj3[2] = Button.AvatarSizes.XSMALL_20;
    const items2 = [callback(Button.Avatar, obj3), ];
    const obj4 = { variant: "text-md/medium", style: null, children: null };
    obj4[1] = tmp.userPillText;
    obj4[2] = nameFromUserDefault.getName(selectedUser);
    items2[1] = callback(Text.Text, obj4);
    obj2[1] = items2;
    let tmp2Result = callback2(closure_4, obj2);
  } else {
    const obj5 = { variant: "text-sm/semibold", color: "text-subtle", style: null, children: null };
    obj5[2] = tmp.userPillText;
    const intl4 = getSystemLocale.intl;
    obj5[3] = intl4.string(getSystemLocale.t.R0vK0N);
    tmp2Result = callback(Text.Text, obj5);
  }
  items1[1] = tmp2Result;
  obj[4] = items1;
  const items3 = [callback2(closure_3, obj), ];
  tmp2Result = null;
  if (null != selectedUser) {
    const obj6 = { style: null, onPress: null, accessibilityRole: "button", accessibilityLabel: null, children: null };
    obj6[0] = tmp.clearButton;
    obj6[1] = function onPress() {
      return callback(undefined);
    };
    const intl5 = getSystemLocale.intl;
    const obj7 = { text: null };
    obj7[0] = nameFromUserDefault.getName(selectedUser);
    obj6[3] = intl5.formatToPlainString(getSystemLocale.t["0Vb9FQ"], obj7);
    obj6[4] = callback(CircleXIcon.CircleXIcon, { size: "xs" });
    tmp2Result = callback(closure_3, obj6);
  }
  items3[1] = tmp2Result;
  obj[1] = items3;
  obj[1] = callback(useInputStyles.InputFieldContainer, { children: callback2(closure_4, obj) });
  return callback(closure_4, obj);
};