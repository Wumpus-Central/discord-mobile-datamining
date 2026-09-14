// discord_app/modules/user_profile/native/UserProfileSharedStyles.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "Constants.tsx";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../_runtime/metro/00002__.js";

({
  AVATAR_CONTAINER_SIZE: c2,
  AVATAR_CUSTOM_STATUS_GAP: c3,
  AVATAR_PADDING: closure_4,
  CARD_PADDING: hasOwnProperty,
  PROFILE_CONTENT_BOTTOM_PADDING: metroRequire,
  PROFILE_SIDE_PADDING: closure_7,
  PROFILE_TOP_LAYER_Z_INDEX: closure_8,
} = Constants);
let closure_9 = createStyles.createStyles(() => {
  const obj = {
    avatarPosition: null,
    avatarBackground: { width: borderRadius, height: borderRadius, borderRadius, padding: margin, zIndex: 0 },
    avatar: { margin, zIndex: 1 },
    profileContentWrapper: { flexGrow: 1, paddingBottom, overflow: "visible" },
    profileContent: { paddingHorizontal },
    customStatusBubble: { marginTop: 6, marginBottom: 12, marginLeft: borderRadius - margin + React3 },
    customStatusBubbleInset: {
      marginLeft: paddingHorizontal + borderRadius - margin + React3,
      marginRight: paddingHorizontal,
    },
    emojiOnlyCustomStatusBubble: { marginBottom: 4 },
    primaryInfo: { rowGap: 12, paddingBottom: 12 },
    primaryButtons: { paddingVertical: 12 },
    bannerButtons: null,
    bannerButtonsWithPrivateBanner: { top: 54 },
    profileTablist: { paddingHorizontal, marginBottom: nativeDefault.space.PX_16 },
    cards: { rowGap: 16 },
    card: null,
  };
  const rect = { position: "absolute", top: -borderRadius / 2, left: paddingHorizontal - margin };
  obj.avatarPosition = rect;
  const rect1 = { flexDirection: "row", position: "absolute", top: 16, right: 16, gap: 8, zIndex };
  obj.bannerButtons = rect1;
  const obj2 = { flexGrow: 1, paddingBottom, overflow: "visible" };
  const obj3 = { marginTop: 6, marginBottom: 12, marginLeft: borderRadius - margin + React3 };
  const obj4 = { paddingHorizontal, marginBottom: nativeDefault.space.PX_16 };
  obj.card = {
    borderRadius: nativeDefault.radii.md,
    padding,
    borderWidth: 1,
    borderColor: nativeDefault.colors.BORDER_MUTED,
  };
  return obj;
});
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileSharedStyles.tsx");

export default function useSharedStyles() {
  return closure_9();
}
export const useUserProfileCardRadius = function useUserProfileCardRadius() {
  return nativeDefault.radii.md;
};
