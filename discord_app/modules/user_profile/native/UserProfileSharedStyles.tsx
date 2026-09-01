// === Module 8530: useSharedStyles ===

// Module 8530 (useSharedStyles)
import set from "set" /* 2 */;
import ThemesDefault from "Themes" /* 712 */;
import ARBITRARY_LARGE_OFFSET from "ARBITRARY_LARGE_OFFSET" /* 6001 */;
import createCacheKey from "createCacheKey" /* 4478 */;

({ AVATAR_CONTAINER_SIZE: obj1, AVATAR_CUSTOM_STATUS_GAP: c3, AVATAR_PADDING: c4, CARD_PADDING: c5, PROFILE_CONTENT_BOTTOM_PADDING: closure_6, PROFILE_SIDE_PADDING: error, PROFILE_TOP_LAYER_Z_INDEX: closure_8 } = ARBITRARY_LARGE_OFFSET);
let closure_9 = createCacheKey.createStyles(() => {
  obj = { avatarPosition: obj, avatarBackground: obj, avatar: obj1, profileContentWrapper: obj2, profileContent: obj3, customStatusBubble: obj4, customStatusBubbleInset: obj5, emojiOnlyCustomStatusBubble: { marginBottom: 4 }, primaryInfo: { rowGap: 12, paddingBottom: 12 }, primaryButtons: { paddingVertical: 12 }, bannerButtons: obj6, bannerButtonsWithPrivateBanner: { top: 54 }, profileTablist: null, cards: null, card: null };
  obj = { position: "absolute", top: -closure_2 / 2, left: closure_7 - closure_4 };
  obj = { width: closure_2, height: closure_2, borderRadius: closure_2, padding: closure_4, zIndex: 0 };
  obj[12] = { paddingHorizontal: closure_7, marginBottom: ThemesDefault.space.PX_16 };
  obj[13] = { rowGap: 16 };
  obj1 = { margin: closure_4, zIndex: 1 };
  obj2 = { flexGrow: 1, paddingBottom: closure_6, overflow: "visible" };
  obj3 = { paddingHorizontal: closure_7 };
  obj4 = { marginTop: 6, marginBottom: 12, marginLeft: closure_2 - closure_4 + closure_3 };
  obj5 = { marginLeft: closure_7 + closure_2 - closure_4 + closure_3, marginRight: closure_7 };
  obj6 = { flexDirection: "row", position: "absolute", top: 16, right: 16, gap: 8, zIndex: closure_8 };
  const obj7 = { paddingHorizontal: closure_7, marginBottom: ThemesDefault.space.PX_16 };
  obj[14] = { borderRadius: ThemesDefault.radii.md, padding: closure_5, borderWidth: 1, borderColor: ThemesDefault.colors.BORDER_MUTED };
  return obj;
});
const result = set.fileFinishedImporting("modules/user_profile/native/UserProfileSharedStyles.tsx");

export default function useSharedStyles() {
  return callback();
};
export const useUserProfileCardRadius = function useUserProfileCardRadius() {
  return ThemesDefault.radii.md;
};