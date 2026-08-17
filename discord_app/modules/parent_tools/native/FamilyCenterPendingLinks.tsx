// discord_app/modules/parent_tools/native/FamilyCenterPendingLinks.tsx
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import messagesProxyDefault from "messagesProxy" /* 2335 */;
import Text from "Text" /* 4734 */;
import useUserIdsForLinkStatus from "useUserIdsForLinkStatus" /* 7621 */;
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup" /* 7622 */;
import useAgeSpecificText from "useAgeSpecificText" /* 11107 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { UserLinkStatus } from "items" /* 5297 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = arg1;
function FamilyCenterPendingLinkRow(otherUser) {
  let str = otherUser.otherUser;
  const tmp = callback4();
  str(7621);
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
      obj[1] = intl3.formatToPlainString(tmp2(2335).oUpA6X, obj);
      obj[2] = function onPress() {
        let obj = closure_1_1(closure_1_2[13]);
        obj = { otherUser: str };
        obj.pushLazy(str(closure_1_2[15])(closure_1_2[20], closure_1_2.paths), obj);
      };
      obj[3] = tmp.actionButton;
      obj1 = { size: null, disableColor: true, source: null };
      obj1[0] = tmp5(1297).Icon.Sizes.SMALL;
      obj1[2] = tmp2(14280);
      obj[4] = closure_5(tmp5(1297).Icon, obj1);
      let tmp8Result = tmp17(tmp5(5433).PressableOpacity, obj);
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
        obj[1] = intl.formatToPlainString(tmp2(2335).jc1Ip7, obj2);
        obj[2] = function onPress() {
          let obj = closure_1_1(closure_1_2[13]);
          obj = { otherUser: str };
          obj.pushLazy(str(closure_1_2[15])(closure_1_2[14], closure_1_2.paths), obj);
        };
        const items = [, ];
        ({ actionButton: arr[0], actionButtonFirst: arr[1] } = tmp);
        obj[3] = items;
        const obj3 = { size: null, disableColor: true, source: null };
        obj3[0] = tmp5(1297).Icon.Sizes.SMALL;
        obj3[2] = tmp2(8764);
        obj[4] = closure_5(tmp5(1297).Icon, obj3);
        tmp12Result = tmp12(tmp5(5433).PressableOpacity, obj);
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
      obj5[1] = intl2.formatToPlainString(tmp2(2335)["4GtllP"], obj6);
      obj5[2] = function onPress() {
        let obj = closure_1_1(closure_1_2[13]);
        obj = { otherUser: str };
        obj.pushLazy(str(closure_1_2[15])(closure_1_2[18], closure_1_2.paths), obj);
      };
      obj5[3] = tmp.actionButton;
      const obj7 = { size: null, disableColor: true, source: null };
      obj7[0] = tmp5(1297).Icon.Sizes.SMALL;
      obj7[2] = tmp2(14280);
      obj5[4] = tmp14(tmp5(1297).Icon, obj7);
      items1[1] = tmp14(tmp5(5433).PressableOpacity, obj5);
      obj4[0] = items1;
      tmp8Result = closure_6(closure_7, obj4);
      const tmp8 = closure_6;
      const tmp9 = closure_7;
    }
    const obj8 = { otherUser: null, actions: null };
    obj8[0] = str;
    obj8[1] = tmp8Result;
    return tmp14(tmp2(14275), obj8);
  }
  tmp4 = useIsInAdultAgeGroupDefault();
}
noopAll;
({ jsx: c5, jsxs: closure_6, Fragment: error } = jsxProd);
createCacheKey = { container: { marginTop: 24 }, content: null, header: null };
createCacheKey = { display: "flex", justifyContent: "center", backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, borderRadius: ThemesDefault.radii.md };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { marginBottom: 10 };
let closure_8 = createCacheKey.createStyles(createCacheKey);
let obj1 = { actionButton: { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, tintColor: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT, borderRadius: ThemesDefault.radii.round, alignItems: "center", justifyContent: "center", height: 32, width: 32 }, actionButtonFirst: null };
createCacheKey = { marginRight: ThemesDefault.space.PX_8 };
obj1[1] = createCacheKey;
let closure_9 = createCacheKey.createStyles(obj1);
let obj2 = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, tintColor: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT, borderRadius: ThemesDefault.radii.round, alignItems: "center", justifyContent: "center", height: 32, width: 32 };
const result = require("set").fileFinishedImporting("modules/parent_tools/native/FamilyCenterPendingLinks.tsx");

export default function FamilyCenterPendingLinks() {
  const tmp = callback3();
  let obj = useUserIdsForLinkStatus;
  const usersForLinkStatus = obj.useUsersForLinkStatus(UserLinkStatus.PENDING);
  useAgeSpecificText;
  const intl = getSystemLocale.intl;
  obj = { count: usersForLinkStatus.length };
  intl.formatToPlainString(messagesProxyDefault.IkAgkG, obj);
  const intl2 = getSystemLocale.intl;
  let tmp7 = null;
  if (0 !== usersForLinkStatus.length) {
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj1 = { style: null, variant: "eyebrow", color: "text-default", children: null };
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