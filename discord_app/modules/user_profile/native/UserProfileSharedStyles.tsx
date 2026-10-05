// === Module 7913: UserProfileSharedStyles ===

// Module 7913 (UserProfileSharedStyles)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 6707 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
({ AVATAR_CONTAINER_SIZE: c2, AVATAR_CUSTOM_STATUS_GAP: c3, AVATAR_PADDING: closure_4, CARD_PADDING: hasOwnProperty, PROFILE_CONTENT_BOTTOM_PADDING: metroRequire, PROFILE_SIDE_PADDING: metroImportDefault, PROFILE_TOP_LAYER_Z_INDEX: metroImportAll } = Constants);
let closure_9 = createStyles.createStyles(() => {
  let obj2;
  let obj3;
  let rect;
  let rect1;
  const obj = { avatarPosition: rect, avatarBackground: { width: borderRadius, height: borderRadius, borderRadius, padding: margin, zIndex: 0 }, avatar: { margin, zIndex: 1 }, profileContentWrapper: obj2, profileContent: { paddingHorizontal }, customStatusBubble: obj3, customStatusBubbleInset: { marginLeft: paddingHorizontal + borderRadius - margin + _false, marginRight: paddingHorizontal }, emojiOnlyCustomStatusBubble: { marginBottom: 4 }, primaryInfo: { rowGap: 12, paddingBottom: 12 }, primaryButtons: { paddingVertical: 12 }, bannerButtons: rect1, bannerButtonsWithPrivateBanner: { top: 54 }, profileTablist: { paddingHorizontal, marginBottom: nativeDefault.space.PX_16 }, cards: { rowGap: 16 }, card: { borderRadius: nativeDefault.radii.md, padding: hasOwnProperty, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED } };
  rect = { position: "absolute", top: -borderRadius / 2, left: paddingHorizontal - margin };
  rect1 = { flexDirection: "row", position: "absolute", top: 16, right: 16, gap: 8, zIndex: metroImportAll };
  obj2 = { flexGrow: 1, paddingBottom: metroRequire, overflow: "visible" };
  obj3 = { marginTop: 6, marginBottom: 12, marginLeft: borderRadius - margin + _false };
  ({ paddingHorizontal, marginBottom: nativeDefault.space.PX_16 });
  ({ borderRadius: nativeDefault.radii.md, padding: hasOwnProperty, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED });
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/user_profile/native/UserProfileSharedStyles.tsx");

export default () => closure_9();
export const useUserProfileCardRadius = function useUserProfileCardRadius() {
  return nativeDefault.radii.md;
};