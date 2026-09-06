// === Module 8260: openUserProfileAvatarMediaViewer ===

// Module 8260 (openUserProfileAvatarMediaViewer)
import _openMediaModal from "_openMediaModal" /* 8261 */;
import closure_2 from "maybeApplyNoTextColorForLightCustomTheme" /* 4552 */;
import { AVATAR_MAX_SIZE } from "ME" /* 1074 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/user_profile/native/openUserProfileAvatarMediaViewer.tsx");

export default function openUserProfileAvatarMediaViewer(user) {
  user = user.user;
  useReducedMotion = useReducedMotion.useReducedMotion;
  let animate = !useReducedMotion;
  ({ guildId, originViewOrOriginLayout } = user);
  if (!useReducedMotion) {
    animate = user.animate;
  }
  const avatarURL = user.getAvatarURL(guildId, tmp, animate);
  if (typeof avatarURL === "string") {
    let obj = _openMediaModal;
    obj = { initialSources: null, originViewOrOriginLayout: null, analyticsSource: "user_profile_avatar", openAs: "action-sheet", shareable: false, disableDownload: true, disableMediaOverlayButton: true, disableMediaOverlayFooter: true };
    obj = { uri: null, mediaIndex: 0, height: null, width: null, accessoryType: "embed" };
    obj[0] = avatarURL;
    obj[2] = tmp;
    obj[3] = tmp;
    const items = [obj];
    obj[0] = items;
    obj[1] = originViewOrOriginLayout;
    obj.openMediaModal(obj);
  }
};