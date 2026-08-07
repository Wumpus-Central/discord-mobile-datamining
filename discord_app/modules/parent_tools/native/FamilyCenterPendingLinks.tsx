// discord_app/modules/parent_tools/native/FamilyCenterPendingLinks.tsx
import "registerAsset";
import { View } from "registerAsset";
import { UserLinkStatus } from "items";
import jsxProd from "FamilyCenterLinkRow";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";
import { Text } from "../../../design/components/Text/native/Text.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { messagesProxy } from "../FamilyCenter.messages.js";
import { useAgeSpecificText } from "../hooks/useAgeSpecificText.tsx";
import { useIsInAdultAgeGroup } from "../hooks/useIsInAdultAgeGroup.tsx";
import { useUserIdsForLinkStatus } from "../hooks/useUserLinks.tsx";

let c5;
let closure_6;
let error;
const require = arg1;
function FamilyCenterPendingLinkRow(otherUser) {
  let str = otherUser.otherUser;
  const tmp = callback3();
  str(7277);
  if (undefined === str) {
    return null;
  } else {
    if (tmp4) {
      const intl3 = tmp5(1236).intl;
      str = undefined;
      if (str != null) {
        str = str.toString();
      }
      let obj = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
      obj = { name: null };
      obj[0] = str;
      obj[1] = intl3.formatToPlainString(tmp2(2284).oUpA6X, obj);
      obj[2] = function onPress() {
        let obj = outer1_1(outer1_2[13]);
        obj = { otherUser: str };
        obj.pushLazy(str(outer1_2[15])(outer1_2[20], outer1_2.paths), obj);
      };
      obj[3] = tmp.actionButton;
      const obj1 = { size: null, disableColor: true, source: null };
      obj1[0] = tmp5(1297).Icon.Sizes.SMALL;
      obj1[2] = tmp2(14098);
      obj[4] = closure_5(tmp5(1297).Icon, obj1);
      let tmp8Result = tmp17(tmp5(4844).PressableOpacity, obj);
      let tmp14 = tmp17;
    } else {
      let tmp12Result = null;
      if (!tmp7) {
        const intl = tmp5(1236).intl;
        let str1;
        if (str != null) {
          str1 = str.toString();
        }
        obj = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
        const obj2 = { name: null };
        obj2[0] = str1;
        obj[1] = intl.formatToPlainString(tmp2(2284).jc1Ip7, obj2);
        obj[2] = function onPress() {
          let obj = outer1_1(outer1_2[13]);
          obj = { otherUser: str };
          obj.pushLazy(str(outer1_2[15])(outer1_2[14], outer1_2.paths), obj);
        };
        const items = [, ];
        ({ actionButton: arr[0], actionButtonFirst: arr[1] } = tmp);
        obj[3] = items;
        const obj3 = { size: null, disableColor: true, source: null };
        obj3[0] = tmp5(1297).Icon.Sizes.SMALL;
        obj3[2] = tmp2(9811);
        obj[4] = closure_5(tmp5(1297).Icon, obj3);
        tmp12Result = tmp12(tmp5(4844).PressableOpacity, obj);
      }
      const items1 = [tmp12Result, ];
      tmp14 = closure_5;
      const intl2 = tmp5(1236).intl;
      let str2;
      if (str != null) {
        str2 = str.toString();
      }
      const obj4 = { children: null };
      const obj5 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
      const obj6 = { name: null };
      obj6[0] = str2;
      obj5[1] = intl2.formatToPlainString(tmp2(2284)["4GtllP"], obj6);
      obj5[2] = function onPress() {
        let obj = outer1_1(outer1_2[13]);
        obj = { otherUser: str };
        obj.pushLazy(str(outer1_2[15])(outer1_2[18], outer1_2.paths), obj);
      };
      obj5[3] = tmp.actionButton;
      const obj7 = { size: null, disableColor: true, source: null };
      obj7[0] = tmp5(1297).Icon.Sizes.SMALL;
      obj7[2] = tmp2(14098);
      obj5[4] = tmp14(tmp5(1297).Icon, obj7);
      items1[1] = tmp14(tmp5(4844).PressableOpacity, obj5);
      obj4[0] = items1;
      tmp8Result = closure_6(closure_7, obj4);
      const tmp8 = closure_6;
      const tmp9 = closure_7;
    }
    const obj8 = { otherUser: null, actions: null };
    obj8[0] = str;
    obj8[1] = tmp8Result;
    return tmp14(tmp2(14093), obj8);
  }
  tmp4 = useIsInAdultAgeGroup();
}
({ jsx: c5, jsxs: closure_6, Fragment: error } = jsxProd);
createCacheKey = { container: { marginTop: 24 }, content: null, header: null };
createCacheKey = { display: "flex", justifyContent: "center", backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, borderRadius: require("Themes").radii.md };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { marginBottom: 10 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { actionButton: null, actionButtonFirst: null };
obj1[0] = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, tintColor: require("Themes").colors.INTERACTIVE_TEXT_DEFAULT, borderRadius: require("Themes").radii.round, alignItems: "center", justifyContent: "center", height: 32, width: 32 };
createCacheKey = { marginRight: require("Themes").space.PX_8 };
obj1[1] = createCacheKey;
let closure_9 = createCacheKey.createStyles(obj1);
let obj2 = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, tintColor: require("Themes").colors.INTERACTIVE_TEXT_DEFAULT, borderRadius: require("Themes").radii.round, alignItems: "center", justifyContent: "center", height: 32, width: 32 };
const result = require("items").fileFinishedImporting("modules/parent_tools/native/FamilyCenterPendingLinks.tsx");

export default function FamilyCenterPendingLinks() {
  const tmp = createCacheKey();
  let obj = useUserIdsForLinkStatus;
  const usersForLinkStatus = obj.useUsersForLinkStatus(UserLinkStatus.PENDING);
  useAgeSpecificText;
  const intl = getSystemLocale.intl;
  obj = { count: usersForLinkStatus.length };
  intl.formatToPlainString(messagesProxy.IkAgkG, obj);
  const intl2 = getSystemLocale.intl;
  let tmp7 = null;
  if (0 !== usersForLinkStatus.length) {
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    const obj1 = { style: null, variant: "eyebrow", color: "text-default", children: null };
    obj1[0] = tmp.header;
    obj1[3] = tmp6;
    const items = [callback(Text.Text, obj1), ];
    const obj2 = { style: null, children: null };
    obj2[0] = tmp.content;
    obj2[1] = usersForLinkStatus.map((id) => callback(closure_10, { otherUser: id }, "pending-" + id.id));
    items[1] = callback(View, obj2);
    obj[1] = items;
    tmp7 = callback2(View, obj);
  }
  return tmp7;
};