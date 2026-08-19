// === Module 14046: COLLECTIBLES_PREVIEW_SIZE ===

// Module 14046 (COLLECTIBLES_PREVIEW_SIZE)
import ThemesDefault from "Themes" /* 712 */;
import noop from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import trackCommunicationDisabled from "trackCommunicationDisabled" /* 1990 */;
import { COLLECTIBLES_PREVIEW_SIZE } from "ARBITRARY_LARGE_OFFSET" /* 7186 */;
import { NOOP } from "sum" /* 505 */;
import { jsx } from "jsxProd" /* 21 */;
import "createCacheKey";

const require = fn;
({ ActivityIndicator: c4, View: c5 } = get_ActivityIndicator);
const createCacheKey = { position: "relative", height: COLLECTIBLES_PREVIEW_SIZE, width: COLLECTIBLES_PREVIEW_SIZE, justifyContent: "center", alignItems: "center", backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: ThemesDefault.radii.xs, overflow: "hidden" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { tintColor: ThemesDefault.colors.TEXT_SUBTLE };
let closure_10 = createCacheKey.createStyles(createCacheKey);
let result = require("obj132").fileFinishedImporting("modules/user_profile/native/UserProfileAvatarDecorationEditButton.tsx");

export default function UserProfileAvatarDecorationEditButton(user) {
  user = user.user;
  const guildId = user.guildId;
  ({ pendingAvatarDecoration, isTryItOut } = user);
  let userAvatarDecoration;
  const tmp = callback();
  const React = tmp2;
  let obj = user(isTryItOut[8]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let member = null;
    if (closure_3) {
      member = closure_1_6.getMember(guildId, user.id);
    }
    return member;
  });
  obj1 = user(isTryItOut[10]);
  obj = { pendingValue: pendingAvatarDecoration, userValue: user.avatarDecoration, guildValue: null, guildId: null };
  let avatarDecoration;
  if (stateFromStores != null) {
    avatarDecoration = stateFromStores.avatarDecoration;
  }
  obj[2] = avatarDecoration;
  obj[3] = guildId;
  const tmp7Result = guildId(isTryItOut[9])(obj1.getProfilePreviewValue(obj));
  let tmp3Result = tmp3(isTryItOut[11]);
  let skuId;
  if (tmp7Result != null) {
    skuId = tmp7Result.skuId;
  }
  const fetchCollectiblesProduct = tmp3Result.useFetchCollectiblesProduct(skuId);
  ({ product, isFetching } = fetchCollectiblesProduct);
  tmp3Result = tmp3(isTryItOut[10]);
  userAvatarDecoration = tmp3Result.useUserAvatarDecoration({ user, guildId });
  if (undefined !== pendingAvatarDecoration) {
    userAvatarDecoration = pendingAvatarDecoration;
  }
  const items1 = [user, guildId, userAvatarDecoration, isTryItOut];
  let name;
  callback = React.useCallback(() => {
    user(isTryItOut[12]);
    const obj = { user, guildId, currentAvatarDecoration: userAvatarDecoration, isTryItOut };
    const result = obj.openAvatarDecorationActionSheet(obj);
  }, items1);
  if (product != null) {
    name = product.name;
  }
  if (name == null) {
    const intl = tmp3(isTryItOut[13]).intl;
    name = intl.string(tmp3(isTryItOut[13]).t.PoWNfe);
  }
  let formatToPlainStringResult = name;
  if (null != guildId) {
    formatToPlainStringResult = name;
    if (null == userAvatarDecoration) {
      const intl2 = tmp3(isTryItOut[13]).intl;
      obj = { label: null };
      obj[0] = name;
      formatToPlainStringResult = intl2.formatToPlainString(tmp3(isTryItOut[13]).t.ep5D4i, obj);
    }
  }
  if (isFetching) {
    obj1 = { label: null, buttonText: null, onPress: null, leading: null, loading: true, disabled: true, hideArrow: true };
    const intl4 = tmp3(isTryItOut[13]).intl;
    obj1[0] = intl4.string(tmp3(isTryItOut[13]).t["7v0T9P"]);
    const intl5 = tmp3(isTryItOut[13]).intl;
    obj1[1] = intl5.string(tmp3(isTryItOut[13]).t.MKDeyL);
    obj1[2] = NOOP;
    obj1[3] = <userAvatarDecoration animating size="large" />;
    let obj2 = obj1;
  } else {
    obj2 = { label: null, buttonText: null, accessibilityValue: null, onPress: null, leading: null };
    const intl3 = tmp3(isTryItOut[13]).intl;
    obj2[0] = intl3.string(tmp3(isTryItOut[13]).t["7v0T9P"]);
    obj2[1] = formatToPlainStringResult;
    const obj3 = { text: null };
    obj3[0] = formatToPlainStringResult;
    obj2[2] = obj3;
    obj2[3] = callback;
    if (null != product) {
      const obj4 = { style: null, children: null };
      obj4[0] = tmp.previewContainer;
      const obj5 = { avatarDecoration: null, size: null, animate: false };
      obj5[0] = tmp7Result;
      obj5[1] = COLLECTIBLES_PREVIEW_SIZE - 2 * tmp6(isTryItOut[7]).space.PX_4;
      obj4[1] = jsx(tmp6(isTryItOut[15]), { avatarDecoration: null, size: null, animate: false });
      let tmp16Result = <closure_5 style={null}>{null}</closure_5>;
      const tmp6Result = tmp6(isTryItOut[15]);
    } else {
      const obj6 = { source: null, style: null };
      obj6[0] = tmp6(isTryItOut[17]);
      obj6[1] = tmp.noneIcon;
      tmp16Result = jsx(tmp3(isTryItOut[16]).Icon, { source: null, style: null });
    }
    obj2[4] = tmp16Result;
  }
  return jsx(user(isTryItOut[14]).UserProfileEditFormButton, obj2);
};