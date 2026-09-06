// discord_app/modules/collectibles/nameplates/native/NameplateProductPreview.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import utils from "../utils.tsx";
import LinearGradientDefault from "../../../../../_runtime/04987_LinearGradient.js";
import TableRow from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import useShopProductItems from "../../hooks/useShopProductItems.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

require = fn;
function NameplateUser(arg0) {
  let currentUser;
  importDefault = undefined;
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
  obj.userValue = avatarDecoration;
  const tmp5Result = require("useAvatarDecorationIfNotExpired")(obj1.getProfilePreviewValue(obj));
  importDefault = tmp5Result;
  const tmp5 = require("useAvatarDecorationIfNotExpired");
  const items = [AccessibilityStore];
  stateFromStores = currentUser(stateFromStores[14]).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let tmp4Result = tmp4(tmp2[15]);
  const name = tmp4Result.getName(currentUser);
  obj = { userId: currentUser.id };
  let label = name;
  if (null != require("useDisplayNameStyles")(obj)) {
    obj1 = {
      userId: currentUser.id,
      userName: name,
      effectDisplayType: null,
      lineClamp: 1,
      variant: "text-md/semibold",
    };
    tmp4Result = tmp4(tmp2[17]);
    obj1.effectDisplayType = tmp(tmp2[18]).EffectDisplayType.STATIC;
    label = closure_6(tmp4Result, obj1);
  }
  const items1 = [currentUser, tmp5Result, stateFromStores];
  const icon = noop.useMemo(() => {
    const obj = {
      user: currentUser,
      guildId: "a",
      size: native.AvatarSizes.NORMAL,
      avatarDecoration,
      animate: !stateFromStores,
      autoStatusCutout: null,
      "aria-hidden": true,
    };
    return timestampProducer(native.Avatar, obj);
  }, items1);
  return closure_6(currentUser(stateFromStores[20]).UserNameplateRow, { nameplate, icon, label, isPreviewRow: true });
}
function PlaceholderUser(end) {
  ({ user, start } = end);
  if (start === undefined) {
    start = false;
  }
  let flag = end.end;
  if (flag === undefined) {
    flag = false;
  }
  let obj = { icon: null, label: null, start: null, end: null };
  obj = { source: { uri: user.avatarSrc }, size: native.AvatarSizes.NORMAL, "aria-hidden": true };
  obj.icon = timestampProducer(native.Avatar, obj);
  obj.label = user.name;
  obj.start = start;
  obj.end = flag;
  return timestampProducer(TableRow.TableRow, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = {
  container: { position: "relative", flex: 1, justifyContent: "center", overflow: "hidden" },
  memberListContainer: null,
  memberListTitle: null,
  memberListGradient: null,
};
createStyles = { paddingHorizontal: nativeDefault.space.PX_16 };
createStyles.memberListContainer = createStyles;
createStyles.memberListTitle = { paddingVertical: nativeDefault.space.PX_8 };
const rect = {
  position: "absolute",
  right: 0,
  left: 0,
  top: 0,
  bottom: 0,
  color: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND,
};
createStyles.memberListGradient = rect;
let closure_8 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/nameplates/native/NameplateProductPreview.tsx");

export default function NameplateProductPreview(product) {
  const tmp = closure_8();
  let obj = useShopProductItems;
  const shopProductItems = obj.useShopProductItems(product.product);
  ({ firstNameplate, firstAvatarDecoration } = shopProductItems);
  let obj1 = utils;
  const nameplateData = obj1.getNameplateData(firstNameplate);
  let obj2 = utils;
  const nameplateSampleUsers = obj2.getNameplateSampleUsers();
  let tmp7 = null;
  if (null != nameplateData) {
    obj = {
      style: tmp.container,
      pointerEvents: "box-none",
      accessibilityLabel: null,
      accessibilityRole: "image",
      accessible: true,
      children: null,
    };
    const intl = tmp2(1114).intl;
    obj = { a11y_text: nameplateData.imgAlt };
    obj.accessibilityLabel = intl.formatToPlainString(tmp2(1114).t.YJig7C, obj);
    obj1 = { style: tmp.memberListContainer, children: null };
    obj2 = { user: nameplateSampleUsers.mallow, end: true };
    const items = [timestampProducer(PlaceholderUser, obj2), , , , , ,];
    const obj3 = {
      maxFontSizeMultiplier: 2,
      variant: "text-sm/semibold",
      accessibilityRole: "header",
      color: "interactive-text-default",
      style: tmp.memberListTitle,
      children: null,
    };
    const intl2 = tmp2(1114).intl;
    const items1 = [intl2.string(tmp2(1114).t["yzW/fZ"]), " \u2014 3"];
    obj3.children = items1;
    items[1] = React5(tmp2(4556).Text, obj3);
    const obj4 = { user: nameplateSampleUsers.phibi, start: true };
    items[2] = timestampProducer(PlaceholderUser, obj4);
    const obj5 = { previewNameplate: nameplateData, previewAvatarDecoration: firstAvatarDecoration };
    items[3] = timestampProducer(NameplateUser, obj5);
    const obj6 = { user: nameplateSampleUsers.locke, end: true };
    items[4] = timestampProducer(PlaceholderUser, obj6);
    const obj7 = {
      maxFontSizeMultiplier: 2,
      variant: "text-sm/semibold",
      accessibilityRole: "header",
      color: "interactive-text-default",
      style: tmp.memberListTitle,
      children: null,
    };
    const intl3 = tmp2(1114).intl;
    const items2 = [intl3.string(tmp2(1114).t["NG43/6"]), " \u2014 12"];
    obj7.children = items2;
    items[5] = React5(tmp2(4556).Text, obj7);
    const obj8 = { user: nameplateSampleUsers.boom, start: true };
    items[6] = timestampProducer(PlaceholderUser, obj8);
    obj1.children = items;
    const items3 = [React5(View, obj1), ,];
    const obj9 = { style: tmp.memberListGradient, start: { x: 0, y: 0 }, end: { x: 0, y: 0.4 }, colors: null };
    const items4 = [tmp.memberListGradient.color];
    const _HermesInternal = HermesInternal;
    items4[1] = "" + tmp.memberListGradient.color + "00";
    obj9.colors = items4;
    items3[1] = timestampProducer(LinearGradientDefault, obj9);
    const obj10 = { style: tmp.memberListGradient, start: { x: 0, y: 0.6 }, end: { x: 0, y: 1 }, colors: null };
    const _HermesInternal2 = HermesInternal;
    const items5 = ["" + tmp.memberListGradient.color + "00", tmp.memberListGradient.color];
    obj10.colors = items5;
    items3[2] = timestampProducer(LinearGradientDefault, obj10);
    obj.children = items3;
    tmp7 = React5(View, obj);
  }
  return tmp7;
}
