// === Module 8241: UserProfileSharedStyles ===

// Module 8241 (UserProfileSharedStyles)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 7208 */;
import createStyles from "createStyles" /* 4560 */;
import size from "module_2" /* 2 */;

({ AVATAR_CONTAINER_SIZE: c2, AVATAR_CUSTOM_STATUS_GAP: c3, AVATAR_PADDING: closure_4, CARD_PADDING: hasOwnProperty, PROFILE_CONTENT_BOTTOM_PADDING: metroRequire, PROFILE_SIDE_PADDING: closure_7, PROFILE_TOP_LAYER_Z_INDEX: closure_8 } = Constants);
let closure_9 = createStyles.createStyles(() => {
  let obj = { avatarPosition: null, avatarBackground: { width: borderRadius, height: borderRadius, borderRadius, padding: margin, zIndex: 0 }, avatar: { margin, zIndex: 1 }, profileContentWrapper: null, profileContent: null, customStatusBubble: null, customStatusBubbleInset: null, emojiOnlyCustomStatusBubble: { marginBottom: 4 }, primaryInfo: { rowGap: 12, paddingBottom: 12 }, primaryButtons: { paddingVertical: 12 }, bannerButtons: null, bannerButtonsWithPrivateBanner: { top: 54 }, profileTablist: null, cards: null, card: null };
  const rect = { position: "absolute", top: -borderRadius / 2, left: paddingHorizontal - margin };
  obj.avatarPosition = rect;
  obj = { flexGrow: 1, paddingBottom, overflow: "visible" };
  obj.profileContentWrapper = obj;
  obj.profileContent = { paddingHorizontal };
  obj = { marginTop: 6, marginBottom: 12, marginLeft: borderRadius - margin + React3 };
  obj.customStatusBubble = obj;
  obj.customStatusBubbleInset = { marginLeft: paddingHorizontal + borderRadius - margin + React3, marginRight: paddingHorizontal };
  const rect1 = { flexDirection: "row", position: "absolute", top: 16, right: 16, gap: 8, zIndex };
  obj.bannerButtons = rect1;
  obj.profileTablist = { paddingHorizontal, marginBottom: nativeDefault.space.PX_16 };
  obj.cards = { rowGap: 16 };
  const obj1 = { paddingHorizontal, marginBottom: nativeDefault.space.PX_16 };
  obj.card = { borderRadius: nativeDefault.radii.md, padding, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED };
  return obj;
});
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileSharedStyles.tsx");

export default function useSharedStyles() {
  return closure_9();
};
export const useUserProfileCardRadius = function useUserProfileCardRadius() {
  return nativeDefault.radii.md;
};