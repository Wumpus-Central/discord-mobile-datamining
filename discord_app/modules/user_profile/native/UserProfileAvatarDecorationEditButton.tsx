// === Module 14183: UserProfileAvatarDecorationEditButton ===

// Module 14183 (UserProfileAvatarDecorationEditButton)
import nativeDefault from "native" /* 576 */;
import avatar_decorations_AvatarDecorationUtils from "avatar_decorations/AvatarDecorationUtils" /* 7602 */;
import noop from "module_19" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const COLLECTIBLES_PREVIEW_SIZE = fn(6629).COLLECTIBLES_PREVIEW_SIZE;
const NOOP = fn(1085).NOOP;
const jsx = fn(21).jsx;
const createStyles = fn(4836);
let obj2 = { previewContainer: null, noneIcon: null };
let size = { position: "relative", height: COLLECTIBLES_PREVIEW_SIZE, width: COLLECTIBLES_PREVIEW_SIZE, justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: nativeDefault.radii.xs, overflow: "hidden" };
obj2.previewContainer = size;
obj2.noneIcon = { tintColor: nativeDefault.colors.TEXT_SUBTLE };
let closure_10 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileAvatarDecorationEditButton.tsx");

export default function UserProfileAvatarDecorationEditButton(user) {
  user = user.user;
  const guildId = user.guildId;
  ({ pendingAvatarDecoration, isTryItOut } = user);
  let userAvatarDecoration;
  const tmp = closure_10();
  noop = tmp2;
  const items = [GuildMemberStore];
  const stateFromStores = user(isTryItOut[8]).useStateFromStores(items, () => {
    let member = null;
    if (closure_3) {
      member = GuildMemberStore.getMember(guildId, user.id);
    }
    return member;
  });
  const obj = user(isTryItOut[8]);
  const tmp7 = guildId(isTryItOut[9]);
  const obj3 = { pendingValue: pendingAvatarDecoration, userValue: user.avatarDecoration, guildValue: null, guildId: null };
  let avatarDecoration;
  if (stateFromStores != null) {
    avatarDecoration = stateFromStores.avatarDecoration;
  }
  obj3.guildValue = avatarDecoration;
  obj3.guildId = guildId;
  const tmp7Result = tmp7(user(isTryItOut[10]).getProfilePreviewValue(obj3));
  const obj2 = user(isTryItOut[10]);
  let skuId;
  if (tmp7Result != null) {
    skuId = tmp7Result.skuId;
  }
  const fetchCollectiblesProduct = user(isTryItOut[11]).useFetchCollectiblesProduct(skuId);
  ({ product, isFetching } = fetchCollectiblesProduct);
  const tmp3Result = user(isTryItOut[11]);
  userAvatarDecoration = user(isTryItOut[10]).useUserAvatarDecoration({ user, guildId });
  if (undefined !== pendingAvatarDecoration) {
    userAvatarDecoration = pendingAvatarDecoration;
  }
  const items1 = [user, guildId, userAvatarDecoration, isTryItOut];
  let name;
  const callback = noop.useCallback(() => {
    const result = avatar_decorations_AvatarDecorationUtils.openAvatarDecorationActionSheet({ user, guildId, currentAvatarDecoration: userAvatarDecoration, isTryItOut });
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
      const obj4 = { label: name };
      formatToPlainStringResult = intl2.formatToPlainString(tmp3(isTryItOut[13]).t.ep5D4i, obj4);
    }
  }
  if (isFetching) {
    const obj5 = { label: null, buttonText: null, onPress: null, leading: null, loading: true, disabled: true, hideArrow: true };
    const intl4 = tmp3(isTryItOut[13]).intl;
    obj5.label = intl4.string(tmp3(isTryItOut[13]).t["7v0T9P"]);
    const intl5 = tmp3(isTryItOut[13]).intl;
    obj5.buttonText = intl5.string(tmp3(isTryItOut[13]).t.MKDeyL);
    obj5.onPress = NOOP;
    obj5.leading = <userAvatarDecoration animating size="large" />;
    let obj6 = obj5;
  } else {
    obj6 = { label: null, buttonText: null, accessibilityValue: null, onPress: null, leading: null };
    const intl3 = tmp3(isTryItOut[13]).intl;
    obj6.label = intl3.string(tmp3(isTryItOut[13]).t["7v0T9P"]);
    obj6.buttonText = formatToPlainStringResult;
    const obj7 = { text: formatToPlainStringResult };
    obj6.accessibilityValue = obj7;
    obj6.onPress = callback;
    if (null != product) {
      const obj8 = { style: tmp.previewContainer, children: null };
      const obj9 = { avatarDecoration: tmp7Result, size: COLLECTIBLES_PREVIEW_SIZE - 2 * tmp6(isTryItOut[7]).space.PX_4, animate: false };
      obj8.children = jsx(tmp6(isTryItOut[15]), { avatarDecoration: tmp7Result, size: COLLECTIBLES_PREVIEW_SIZE - 2 * tmp6(isTryItOut[7]).space.PX_4, animate: false });
      let tmp16Result = <closure_5 style={tmp.previewContainer}>{null}</closure_5>;
      const tmp6Result = tmp6(isTryItOut[15]);
    } else {
      const obj10 = { source: tmp6(isTryItOut[17]), style: tmp.noneIcon };
      tmp16Result = jsx(tmp3(isTryItOut[16]).Icon, { source: tmp6(isTryItOut[17]), style: tmp.noneIcon });
    }
    obj6.leading = tmp16Result;
  }
  return jsx(user(isTryItOut[14]).UserProfileEditFormButton, obj6);
};