// discord_app/modules/user_profile/native/openUserProfileAvatarMediaViewer.tsx
import Constants from "../../../Constants.tsx";
import openMediaModal from "../../media_viewer/native/components/openMediaModal.tsx";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

const AVATAR_MAX_SIZE = Constants.AVATAR_MAX_SIZE;
let size = size_mod;
const result = size.fileFinishedImporting("modules/user_profile/native/openUserProfileAvatarMediaViewer.tsx");

export default function openUserProfileAvatarMediaViewer(user) {
  let guildId;
  let items;
  let originViewOrOriginLayout;
  user = user.user;
  const useReducedMotion = AccessibilityStore.useReducedMotion;
  let animate = !useReducedMotion;
  ({ guildId, originViewOrOriginLayout } = user);
  const getAvatarURL = user.getAvatarURL;
  if (!useReducedMotion) {
    animate = user.animate;
  }
  const avatarURL = getAvatarURL(guildId, AVATAR_MAX_SIZE, animate);
  if (typeof avatarURL === "string") {
    size = { uri: avatarURL, mediaIndex: 0, height: AVATAR_MAX_SIZE, width: AVATAR_MAX_SIZE, accessoryType: "embed" };
    const obj2 = {
      initialSources: items,
      originViewOrOriginLayout,
      analyticsSource: "user_profile_avatar",
      openAs: "action-sheet",
      shareable: false,
      disableDownload: true,
      disableMediaOverlayButton: true,
      disableMediaOverlayFooter: true,
    };
    items = [size];
    const obj = openMediaModal;
    obj.openMediaModal(obj2);
  }
}
