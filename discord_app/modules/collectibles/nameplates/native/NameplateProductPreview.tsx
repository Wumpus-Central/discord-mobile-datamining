import Button from "Button";
import { View } from "AVERAGE_FONT_WIDTH_RATIO";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import jsxProd from "TableRowInner";
import createCacheKey from "createCacheKey";

let closure_6;
let error;
const require = arg1;
function NameplateUser(arg0) {
  let previewAvatarDecoration;
  let previewNameplate;
  let currentUser;
  let importDefault;
  let stateFromStores;
  ({ previewNameplate, previewAvatarDecoration } = arg0);
  let obj = currentUser(stateFromStores[11]);
  currentUser = obj.useCurrentUser();
  let obj1 = currentUser(stateFromStores[13]);
  obj = { pendingValue: previewAvatarDecoration, userValue: null };
  let avatarDecoration;
  if (currentUser != null) {
    avatarDecoration = currentUser.avatarDecoration;
  }
  obj[1] = avatarDecoration;
  const tmp5Result = importDefault(stateFromStores[12])(obj1.getProfilePreviewValue(obj));
  importDefault = tmp5Result;
  const tmp5 = importDefault(stateFromStores[12]);
  const items = [maybeApplyNoTextColorForLightCustomTheme];
  stateFromStores = currentUser(stateFromStores[14]).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let tmp4Result = tmp4(tmp2[15]);
  const name = tmp4Result.getName(currentUser);
  obj = { userId: currentUser.id };
  let label = name;
  if (null != importDefault(stateFromStores[16])(obj)) {
    obj1 = { userId: null, userName: null, effectDisplayType: null, lineClamp: 1, variant: "text-md/semibold" };
    obj1[0] = currentUser.id;
    obj1[1] = name;
    tmp4Result = tmp4(tmp2[17]);
    obj1[2] = tmp(tmp2[18]).EffectDisplayType.STATIC;
    label = callback(tmp4Result, obj1);
  }
  const items1 = [currentUser, tmp5Result, stateFromStores];
  const icon = React.useMemo(() => {
    const obj = { user: currentUser, guildId: "a", size: true, avatarDecoration: true, animate: "FRAME", autoStatusCutout: null, "aria-hidden": null };
    obj[2] = currentUser(stateFromStores[19]).AvatarSizes.NORMAL;
    obj[3] = c1;
    obj[4] = !stateFromStores;
    return outer1_6(currentUser(stateFromStores[19]).Avatar, obj);
  }, items1);
  return callback(currentUser(stateFromStores[20]).UserNameplateRow, { nameplate, icon, label, isPreviewRow: true });
}
function PlaceholderUser(end) {
  let start;
  let user;
  ({ user, start } = end);
  if (start === undefined) {
    start = false;
  }
  let flag = end.end;
  if (flag === undefined) {
    flag = false;
  }
  let obj = { icon: null, label: null, start: null, end: null };
  obj = { source: obj, size: null, "aria-hidden": true };
  obj = { uri: user.avatarSrc };
  obj[1] = require(1297) /* Button */.AvatarSizes.NORMAL;
  obj[0] = callback(require(1297) /* Button */.Avatar, obj);
  obj[1] = user.name;
  obj[2] = start;
  obj[3] = flag;
  return callback(require(5286) /* TableRowInner */.TableRow, obj);
}
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { container: { position: "relative", flex: 1, justifyContent: "center", overflow: "hidden" }, memberListContainer: null, memberListTitle: null, memberListGradient: null };
createCacheKey = { paddingHorizontal: require("Themes").space.PX_16 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { paddingVertical: require("Themes").space.PX_8 };
let obj1 = { paddingVertical: require("Themes").space.PX_8 };
createCacheKey[3] = { position: "absolute", right: 0, left: 0, top: 0, bottom: 0, color: require("Themes").colors.MOBILE_ACTIONSHEET_BACKGROUND };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj2 = { position: "absolute", right: 0, left: 0, top: 0, bottom: 0, color: require("Themes").colors.MOBILE_ACTIONSHEET_BACKGROUND };
const result = require("maybeApplyNoTextColorForLightCustomTheme").fileFinishedImporting("modules/collectibles/nameplates/native/NameplateProductPreview.tsx");

export default function NameplateProductPreview(product) {
  let firstAvatarDecoration;
  let firstNameplate;
  const tmp = createCacheKey();
  let obj = require(8382) /* firstAvatarDecoration */;
  const shopProductItems = obj.useShopProductItems(product.product);
  ({ firstNameplate, firstAvatarDecoration } = shopProductItems);
  let obj1 = require(1898) /* getNameplateData */;
  const nameplateData = obj1.getNameplateData(firstNameplate);
  let obj2 = require(1898) /* getNameplateData */;
  const nameplateSampleUsers = obj2.getNameplateSampleUsers();
  let tmp7 = null;
  if (null != nameplateData) {
    obj = { style: null, pointerEvents: "box-none", accessibilityLabel: null, accessibilityRole: "image", accessible: true, children: null };
    obj[0] = tmp.container;
    const intl = tmp2(1236).intl;
    obj = { a11y_text: null };
    obj[0] = nameplateData.imgAlt;
    obj[2] = intl.formatToPlainString(tmp2(1236).t.YJig7C, obj);
    obj1 = { style: null, children: null };
    obj1[0] = tmp.memberListContainer;
    obj2 = { user: null, end: true };
    obj2[0] = nameplateSampleUsers.mallow;
    const items = [callback(PlaceholderUser, obj2), , , , , , ];
    const obj3 = { maxFontSizeMultiplier: 2, variant: "text-sm/semibold", accessibilityRole: "header", color: "interactive-text-default", style: null, children: null };
    obj3[4] = tmp.memberListTitle;
    const intl2 = tmp2(1236).intl;
    const items1 = [intl2.string(tmp2(1236).t["yzW/fZ"]), " \u2014 3"];
    obj3[5] = items1;
    items[1] = callback2(tmp2(4251).Text, obj3);
    const obj4 = { user: null, start: true };
    obj4[0] = nameplateSampleUsers.phibi;
    items[2] = callback(PlaceholderUser, obj4);
    const obj5 = { previewNameplate: null, previewAvatarDecoration: null };
    obj5[0] = nameplateData;
    obj5[1] = firstAvatarDecoration;
    items[3] = callback(NameplateUser, obj5);
    const obj6 = { user: null, end: true };
    obj6[0] = nameplateSampleUsers.locke;
    items[4] = callback(PlaceholderUser, obj6);
    const obj7 = { maxFontSizeMultiplier: 2, variant: "text-sm/semibold", accessibilityRole: "header", color: "interactive-text-default", style: null, children: null };
    obj7[4] = tmp.memberListTitle;
    const intl3 = tmp2(1236).intl;
    const items2 = [intl3.string(tmp2(1236).t["NG43/6"]), " \u2014 12"];
    obj7[5] = items2;
    items[5] = callback2(tmp2(4251).Text, obj7);
    const obj8 = { user: null, start: true };
    obj8[0] = nameplateSampleUsers.boom;
    items[6] = callback(PlaceholderUser, obj8);
    obj1[1] = items;
    const items3 = [callback2(View, obj1), , ];
    const obj9 = { style: null, start: null, end: null, colors: null };
    obj9[0] = tmp.memberListGradient;
    obj9[1] = { x: 0, y: 0 };
    obj9[2] = { x: 0, y: 0.4 };
    const items4 = [tmp.memberListGradient.color, ];
    const _HermesInternal = HermesInternal;
    items4[1] = "" + tmp.memberListGradient.color + "00";
    obj9[3] = items4;
    items3[1] = callback(importDefault(4677), obj9);
    const obj10 = { style: null, start: null, end: null, colors: null };
    obj10[0] = tmp.memberListGradient;
    obj10[1] = { x: 0, y: 0.6 };
    obj10[2] = { x: 0, y: 1 };
    const _HermesInternal2 = HermesInternal;
    const tmp14 = importDefault(4677);
    const items5 = ["" + tmp.memberListGradient.color + "00", tmp.memberListGradient.color];
    obj10[3] = items5;
    items3[2] = callback(importDefault(4677), obj10);
    obj[5] = items3;
    tmp7 = callback2(View, obj);
    const tmp16 = importDefault(4677);
  }
  return tmp7;
};