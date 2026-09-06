// === Module 8260: openUserProfileAvatarMediaViewer ===

// Module 8260 (openUserProfileAvatarMediaViewer)
import openMediaModal from "openMediaModal" /* 8261 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;

require = fn;
const AVATAR_MAX_SIZE = fn(1074).AVATAR_MAX_SIZE;
let size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/openUserProfileAvatarMediaViewer.tsx");

export default function openUserProfileAvatarMediaViewer(user) {
  user = user.user;
  const useReducedMotion = AccessibilityStore.useReducedMotion;
  let animate = !useReducedMotion;
  ({ guildId, originViewOrOriginLayout } = user);
  if (!useReducedMotion) {
    animate = user.animate;
  }
  const avatarURL = user.getAvatarURL(guildId, AVATAR_MAX_SIZE, animate);
  if (typeof avatarURL === "string") {
    const obj = { initialSources: null, originViewOrOriginLayout: null, analyticsSource: "user_profile_avatar", openAs: "action-sheet", shareable: false, disableDownload: true, disableMediaOverlayButton: true, disableMediaOverlayFooter: true };
    const size = { uri: avatarURL, mediaIndex: 0, height: AVATAR_MAX_SIZE, width: AVATAR_MAX_SIZE, accessoryType: "embed" };
    const items = [size];
    obj.initialSources = items;
    obj.originViewOrOriginLayout = originViewOrOriginLayout;
    obj.openMediaModal(obj);
  }
};