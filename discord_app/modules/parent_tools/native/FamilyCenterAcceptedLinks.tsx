import "registerAsset";
import { View } from "asyncRequireImpl";
import items from "items";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";

let c4;
let c5;
let closure_6;
let error;
const require = arg1;
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
    obj = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
    obj = { name: null };
    obj[0] = str;
    obj[1] = intl.formatToPlainString(importDefault(2225).T7DUoU, obj);
    obj[2] = function onPress() {
      let obj = outer1_1(outer1_2[15]);
      obj = { otherUser: str };
      obj.pushLazy(str(outer1_2[17])(outer1_2[16], outer1_2.paths), obj);
    };
    obj[3] = tmp.actionButton;
    const obj1 = { size: null, disableColor: true, source: null };
    obj1[0] = str(1297).Icon.Sizes.SMALL;
    obj1[2] = importDefault(13973);
    obj[4] = closure_6(str(1297).Icon, obj1);
    obj[1] = closure_6(str(4721).PressableOpacity, obj);
    tmp4Result = tmp4(importDefault(13968), obj);
    const tmp5 = importDefault;
    const tmp7 = importDefault(13968);
  }
  return tmp4Result;
}
({ MAX_PARENT_TO_TEEN_ACTIVE_CONNECTIONS: c4, MAX_TEEN_TO_PARENT_ACTIVE_CONNECTIONS: c5 } = items);
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { container: { marginTop: 24 }, content: null, empty: null, header: null };
createCacheKey = { display: "flex", justifyContent: "center", backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, borderRadius: require("Themes").radii.md };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { padding: 20, alignSelf: "center" };
createCacheKey[3] = { marginBottom: 10 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { actionButton: null };
obj1[0] = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, tintColor: require("Themes").colors.INTERACTIVE_TEXT_DEFAULT, borderRadius: require("Themes").radii.round, alignItems: "center", justifyContent: "center", height: 32, width: 32 };
let closure_9 = createCacheKey.createStyles(obj1);
let obj2 = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, tintColor: require("Themes").colors.INTERACTIVE_TEXT_DEFAULT, borderRadius: require("Themes").radii.round, alignItems: "center", justifyContent: "center", height: 32, width: 32 };
const result = require("items").fileFinishedImporting("modules/parent_tools/native/FamilyCenterAcceptedLinks.tsx");

export default function FamilyCenterAcceptedLinks() {
  const tmp = createCacheKey();
  let obj = require(6258) /* useUserIdsForLinkStatus */;
  const activeLinkUsers = obj.useActiveLinkUsers();
  obj = { count: activeLinkUsers.length, max: importDefault(6259)() ? closure_4 : closure_5 };
  const tmp4 = importDefault(6259)();
  const intl = tmp5(1236).intl;
  const tmp5Result = require(11127) /* useAgeSpecificText */;
  const intl2 = tmp5(1236).intl;
  obj = { style: tmp.container, children: null };
  const ageSpecificText = tmp5Result.useAgeSpecificText(intl.formatToPlainString(importDefault(2225)["+tnO34"], obj), intl2.formatToPlainString(tmp2(2225)["pu6/U0"], obj));
  const items = [callback(require(4189) /* Text */.Text, { style: tmp.header, variant: "eyebrow", color: "text-default", children: ageSpecificText }), ];
  const obj2 = { style: tmp.content, children: null };
  if (0 === activeLinkUsers.length) {
    const obj3 = { style: null, children: null };
    obj3[0] = tmp.empty;
    const obj4 = { text: null };
    const intl3 = tmp5(1236).intl;
    obj4[0] = intl3.string(tmp2(2225).C4ScLD);
    obj3[1] = tmp10(tmp2(13966), obj4);
    let mapped = tmp10(tmp9, obj3);
    const tmp2Result = tmp2(13966);
  } else {
    mapped = activeLinkUsers.map((id) => callback(closure_10, { otherUser: id }, "accepted-" + id.id));
  }
  obj2[1] = mapped;
  items[1] = callback(View, obj2);
  obj[1] = items;
  return closure_7(View, obj);
};