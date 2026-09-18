// discord_app/modules/collectibles/nameplates/native/NameplateProductPreview.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import utils from "../utils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import LinearGradientDefault from "../../../../../_runtime/05156_LinearGradient.js";
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
  currentUser = currentUser(stateFromStores[11]).useCurrentUser();
  let obj = currentUser(stateFromStores[11]);
  const tmp5 = require("useAvatarDecorationIfNotExpired");
  const obj3 = { pendingValue: previewAvatarDecoration, userValue: null };
  let avatarDecoration;
  if (currentUser != null) {
    avatarDecoration = currentUser.avatarDecoration;
  }
  obj3.userValue = avatarDecoration;
  const tmp5Result = tmp5(currentUser(stateFromStores[13]).getProfilePreviewValue(obj3));
  importDefault = tmp5Result;
  const obj2 = currentUser(stateFromStores[13]);
  const items = [AccessibilityStore];
  stateFromStores = currentUser(stateFromStores[14]).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmpResult = currentUser(stateFromStores[14]);
  const name = require("UserUtils").getName(currentUser);
  let label = name;
  if (null != require("useDisplayNameStyles")(obj4)) {
    const obj5 = {
      userId: currentUser.id,
      userName: name,
      effectDisplayType: tmp(tmp2[18]).EffectDisplayType.STATIC,
      lineClamp: 1,
      variant: "text-md/semibold",
    };
    label = closure_6(tmp4(tmp2[17]), obj5);
    const tmp4Result2 = tmp4(tmp2[17]);
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
      "aria-hidden": "Array",
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
  const obj = {
    icon: timestampProducer(native.Avatar, {
      source: { uri: user.avatarSrc },
      size: native.AvatarSizes.NORMAL,
      "aria-hidden": true,
    }),
    label: user.name,
    start,
    end: flag,
  };
  return timestampProducer(TableRow.TableRow, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4722);
let obj2 = {
  container: { position: "relative", flex: 1, justifyContent: "center", overflow: "hidden" },
  memberListContainer: { paddingHorizontal: nativeDefault.space.PX_16 },
  memberListTitle: null,
  memberListGradient: null,
};
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj2.memberListTitle = { paddingVertical: nativeDefault.space.PX_8 };
const rect = {
  position: "absolute",
  right: 0,
  left: 0,
  top: 0,
  bottom: 0,
  color: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND,
};
obj2.memberListGradient = rect;
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/nameplates/native/NameplateProductPreview.tsx");

export default function NameplateProductPreview(product) {
  const tmp = closure_8();
  const shopProductItems = useShopProductItems.useShopProductItems(product.product);
  ({ firstNameplate, firstAvatarDecoration } = shopProductItems);
  const nameplateData = utils.getNameplateData(firstNameplate);
  const nameplateSampleUsers = utils.getNameplateSampleUsers();
  let tmp7 = null;
  if (null != nameplateData) {
    const obj4 = {
      style: tmp.container,
      pointerEvents: "box-none",
      accessibilityLabel: null,
      accessibilityRole: "image",
      accessible: true,
      children: null,
    };
    const intl = util.intl;
    const obj5 = { a11y_text: nameplateData.imgAlt };
    obj4.accessibilityLabel = intl.formatToPlainString(util.t.YJig7C, obj5);
    const obj6 = { style: tmp.memberListContainer, children: null };
    const obj7 = { user: nameplateSampleUsers.mallow, end: true };
    const items = [timestampProducer(PlaceholderUser, obj7), , , , , ,];
    const obj8 = {
      maxFontSizeMultiplier: 2,
      variant: "text-sm/semibold",
      accessibilityRole: "header",
      color: "interactive-text-default",
      style: tmp.memberListTitle,
      children: null,
    };
    const intl2 = util.intl;
    const items1 = [intl2.string(util.t["yzW/fZ"]), " \u2014 3"];
    obj8.children = items1;
    items[1] = React5(Text_Text.Text, obj8);
    const obj9 = { user: nameplateSampleUsers.phibi, start: true };
    items[2] = timestampProducer(PlaceholderUser, obj9);
    const obj10 = { previewNameplate: nameplateData, previewAvatarDecoration: firstAvatarDecoration };
    items[3] = timestampProducer(NameplateUser, obj10);
    const obj11 = { user: nameplateSampleUsers.locke, end: true };
    items[4] = timestampProducer(PlaceholderUser, obj11);
    const obj12 = {
      maxFontSizeMultiplier: 2,
      variant: "text-sm/semibold",
      accessibilityRole: "header",
      color: "interactive-text-default",
      style: tmp.memberListTitle,
      children: null,
    };
    const intl3 = util.intl;
    const items2 = [intl3.string(util.t["NG43/6"]), " \u2014 12"];
    obj12.children = items2;
    items[5] = React5(Text_Text.Text, obj12);
    const obj13 = { user: nameplateSampleUsers.boom, start: true };
    items[6] = timestampProducer(PlaceholderUser, obj13);
    obj6.children = items;
    const items3 = [React5(View, obj6), ,];
    const obj14 = { style: tmp.memberListGradient, start: { x: 0, y: 0 }, end: { x: 0, y: 0.4 }, colors: null };
    const items4 = [tmp.memberListGradient.color];
    const _HermesInternal = HermesInternal;
    items4[1] = "" + tmp.memberListGradient.color + "00";
    obj14.colors = items4;
    items3[1] = timestampProducer(LinearGradientDefault, obj14);
    const obj15 = { style: tmp.memberListGradient, start: { x: 0, y: 0.6 }, end: { x: 0, y: 1 }, colors: null };
    const _HermesInternal2 = HermesInternal;
    const items5 = ["" + tmp.memberListGradient.color + "00", tmp.memberListGradient.color];
    obj15.colors = items5;
    items3[2] = timestampProducer(LinearGradientDefault, obj15);
    obj4.children = items3;
    tmp7 = React5(View, obj4);
  }
  return tmp7;
}
