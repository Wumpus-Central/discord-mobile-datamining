// === Module 14625: UserProfileAvatarDecorationEditButton ===

// Module 14625 (UserProfileAvatarDecorationEditButton)
import nativeDefault from "native" /* 576 */;
import avatar_decorations_AvatarDecorationUtils from "avatar_decorations/AvatarDecorationUtils" /* 8157 */;
import noop from "module_19" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const COLLECTIBLES_PREVIEW_SIZE = fn(7208).COLLECTIBLES_PREVIEW_SIZE;
const NOOP = fn(1085).NOOP;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { previewContainer: null, noneIcon: null };
let size = { position: "relative", height: COLLECTIBLES_PREVIEW_SIZE, width: COLLECTIBLES_PREVIEW_SIZE, justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: nativeDefault.radii.xs, overflow: "hidden" };
createStyles.previewContainer = size;
createStyles = { tintColor: nativeDefault.colors.TEXT_SUBTLE };
createStyles.noneIcon = createStyles;
let closure_10 = createStyles.createStyles(createStyles);
size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileAvatarDecorationEditButton.tsx");

export default function UserProfileAvatarDecorationEditButton(user) {
  user = user.user;
  const guildId = user.guildId;
  ({ pendingAvatarDecoration, isTryItOut } = user);
  let userAvatarDecoration;
  const tmp = closure_10();
  noop = tmp2;
  let obj = user(isTryItOut[8]);
  const items = [GuildMemberStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let member = null;
    if (closure_3) {
      member = GuildMemberStore.getMember(guildId, user.id);
    }
    return member;
  });
  let obj1 = user(isTryItOut[10]);
  obj = { pendingValue: pendingAvatarDecoration, userValue: user.avatarDecoration, guildValue: null, guildId: null };
  let avatarDecoration;
  if (stateFromStores != null) {
    avatarDecoration = stateFromStores.avatarDecoration;
  }
  obj.guildValue = avatarDecoration;
  obj.guildId = guildId;
  const tmp7Result = guildId(isTryItOut[9])(obj1.getProfilePreviewValue(obj));
  let tmp3Result = tmp3(tmp4[11]);
  let skuId;
  if (tmp7Result != null) {
    skuId = tmp7Result.skuId;
  }
  const fetchCollectiblesProduct = tmp3Result.useFetchCollectiblesProduct(skuId);
  ({ product, isFetching } = fetchCollectiblesProduct);
  tmp3Result = tmp3(tmp4[10]);
  userAvatarDecoration = tmp3Result.useUserAvatarDecoration({ user, guildId });
  if (undefined !== pendingAvatarDecoration) {
    userAvatarDecoration = pendingAvatarDecoration;
  }
  const items1 = [user, guildId, userAvatarDecoration, isTryItOut];
  let name;
  const callback = noop.useCallback(() => {
    const obj = { user, guildId, currentAvatarDecoration: userAvatarDecoration, isTryItOut };
    const result = obj.openAvatarDecorationActionSheet(obj);
  }, items1);
  if (product != null) {
    name = product.name;
  }
  if (name == null) {
    const intl = tmp3(tmp4[13]).intl;
    name = intl.string(tmp3(tmp4[13]).t.PoWNfe);
  }
  let formatToPlainStringResult = name;
  if (null != guildId) {
    formatToPlainStringResult = name;
    if (null == userAvatarDecoration) {
      const intl2 = tmp3(tmp4[13]).intl;
      obj = { label: name };
      formatToPlainStringResult = intl2.formatToPlainString(tmp3(tmp4[13]).t.ep5D4i, obj);
    }
  }
  if (isFetching) {
    obj1 = { label: null, buttonText: null, onPress: null, leading: null, loading: true, disabled: true, hideArrow: true };
    const intl4 = tmp3(tmp4[13]).intl;
    obj1.label = intl4.string(tmp3(tmp4[13]).t["7v0T9P"]);
    const intl5 = tmp3(tmp4[13]).intl;
    obj1.buttonText = intl5.string(tmp3(tmp4[13]).t.MKDeyL);
    obj1.onPress = NOOP;
    obj1.leading = tmp16(userAvatarDecoration, { animating: true, size: "large" });
    let obj2 = obj1;
  } else {
    obj2 = { label: null, buttonText: null, accessibilityValue: null, onPress: null, leading: null };
    const intl3 = tmp3(tmp4[13]).intl;
    obj2.label = intl3.string(tmp3(tmp4[13]).t["7v0T9P"]);
    obj2.buttonText = formatToPlainStringResult;
    const obj3 = { text: formatToPlainStringResult };
    obj2.accessibilityValue = obj3;
    obj2.onPress = callback;
    if (null != product) {
      const obj4 = { style: tmp.previewContainer, children: null };
      const obj5 = { avatarDecoration: tmp7Result, size: COLLECTIBLES_PREVIEW_SIZE - 2 * tmp6(tmp4[7]).space.PX_4, animate: false };
      obj4.children = tmp16(tmp6(tmp4[15]), obj5);
      let tmp16Result = tmp16(closure_5, obj4);
      const tmp6Result = tmp6(tmp4[15]);
    } else {
      const obj6 = { source: tmp6(tmp4[17]), style: tmp.noneIcon };
      tmp16Result = tmp16(tmp3(tmp4[16]).Icon, obj6);
    }
    obj2.leading = tmp16Result;
  }
  return jsx(user(isTryItOut[14]).UserProfileEditFormButton, obj2);
};