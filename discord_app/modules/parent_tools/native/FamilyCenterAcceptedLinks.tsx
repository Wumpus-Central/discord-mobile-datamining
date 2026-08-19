// === Module 14272: FamilyCenterAcceptedLinkRow ===

// Module 14272 (FamilyCenterAcceptedLinkRow)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import messagesProxyDefault from "messagesProxy" /* 2335 */;
import Text from "Text" /* 4734 */;
import _modDef5260 from "module_5260" /* 5260 */;
import useUserIdsForLinkStatus from "useUserIdsForLinkStatus" /* 7621 */;
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup" /* 7622 */;
import useAgeSpecificText from "useAgeSpecificText" /* 11107 */;
import FamilyCenterEmptyDefault from "FamilyCenterEmpty" /* 14273 */;
import FamilyCenterLinkRowDefault from "FamilyCenterLinkRow" /* 14275 */;
import registerAssetDefault from "registerAsset" /* 14280 */;
import { View } from "get ActivityIndicator" /* 17 */;
import items from "items" /* 5297 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";
import createCacheKey from "createCacheKey" /* 4661 */;

require = fn;
function FamilyCenterAcceptedLinkRow(otherUser) {
  let str = otherUser.otherUser;
  let tmp4Result = null;
  if (undefined !== str) {
    let obj = { otherUser: null, actions: null };
    obj[0] = str;
    const intl = str(1236).intl;
    str = undefined;
    if (str != null) {
      str = str.toString();
    }
    obj = { name: null };
    obj[0] = str;
    obj[1] = intl.formatToPlainString(messagesProxyDefault.T7DUoU, obj);
    obj[2] = function onPress() {
      const obj = { otherUser: str };
      obj.pushLazy(str(dependencyMap[17])(dependencyMap[16], dependencyMap.paths), obj);
    };
    obj[3] = tmp.actionButton;
    obj1 = { size: null, disableColor: true, source: null };
    obj1[0] = str(1297).Icon.Sizes.SMALL;
    obj1[2] = registerAssetDefault;
    obj[4] = callback(str(1297).Icon, obj1);
    obj[1] = callback(str(5433).PressableOpacity, obj);
    tmp4Result = callback(FamilyCenterLinkRowDefault, obj);
  }
  return tmp4Result;
}
noopAll;
({ MAX_PARENT_TO_TEEN_ACTIVE_CONNECTIONS: c4, MAX_TEEN_TO_PARENT_ACTIVE_CONNECTIONS: c5 } = items);
({ jsx: closure_6, jsxs: error } = jsxProd);
let createCacheKey = { display: "flex", justifyContent: "center", backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, borderRadius: ThemesDefault.radii.md };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { padding: 20, alignSelf: "center" };
createCacheKey[3] = { marginBottom: 10 };
let closure_8 = createCacheKey.createStyles(createCacheKey);
let obj1 = { actionButton: { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, tintColor: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT, borderRadius: ThemesDefault.radii.round, alignItems: "center", justifyContent: "center", height: 32, width: 32 } };
let closure_9 = createCacheKey.createStyles(obj1);
const result = require("obj132").fileFinishedImporting("modules/parent_tools/native/FamilyCenterAcceptedLinks.tsx");

export default function FamilyCenterAcceptedLinks() {
  const tmp = callback2();
  let obj = useUserIdsForLinkStatus;
  const activeLinkUsers = obj.useActiveLinkUsers();
  { count: activeLinkUsers.length, max: useIsInAdultAgeGroupDefault() ? closure_4 : closure_5 };
  const tmp4 = useIsInAdultAgeGroupDefault();
  const intl = getSystemLocale.intl;
  const tmp5Result = useAgeSpecificText;
  const intl2 = getSystemLocale.intl;
  obj = { style: tmp.container, children: null };
  const ageSpecificText = tmp5Result.useAgeSpecificText(intl.formatToPlainString(messagesProxyDefault["+tnO34"], obj), intl2.formatToPlainString(messagesProxyDefault["pu6/U0"], obj));
  const items = [callback(Text.Text, { style: tmp.header, variant: "eyebrow", color: "text-default", children: ageSpecificText }), ];
  const obj2 = { style: tmp.content, children: null };
  if (0 === activeLinkUsers.length) {
    const obj3 = { style: null, children: null };
    obj3[0] = tmp.empty;
    const obj4 = { text: null };
    const intl3 = getSystemLocale.intl;
    obj4[0] = intl3.string(messagesProxyDefault.C4ScLD);
    obj3[1] = callback(FamilyCenterEmptyDefault, obj4);
    let mapped = callback(View, obj3);
    const tmp2Result = FamilyCenterEmptyDefault;
  } else {
    mapped = activeLinkUsers.map((item, index) => callback(closure_10, { otherUser: item }, "accepted-" + item.id));
  }
  obj2[1] = mapped;
  items[1] = callback(View, obj2);
  obj[1] = items;
  return callback2(View, obj);
};