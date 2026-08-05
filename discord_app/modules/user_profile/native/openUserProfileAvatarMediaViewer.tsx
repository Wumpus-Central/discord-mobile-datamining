// discord_app/modules/user_profile/native/openUserProfileAvatarMediaViewer.tsx
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import { AVATAR_MAX_SIZE } from "ME";
import { _openMediaModal } from "../../media_viewer/native/components/openMediaModal.tsx";

const require = arg1;
const result = require("_openMediaModal").fileFinishedImporting("modules/user_profile/native/openUserProfileAvatarMediaViewer.tsx");

export default function openUserProfileAvatarMediaViewer(user) {
  let guildId;
  let originViewOrOriginLayout;
  user = user.user;
  useReducedMotion = useReducedMotion.useReducedMotion;
  let animate = !useReducedMotion;
  ({ guildId, originViewOrOriginLayout } = user);
  if (!useReducedMotion) {
    animate = user.animate;
  }
  const avatarURL = user.getAvatarURL(guildId, tmp, animate);
  if (typeof avatarURL === "string") {
    let obj = _openMediaModal /* _openMediaModal */;
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