// discord_app/modules/user_profile/native/openUserProfileAvatarMediaViewer.tsx
import _openMediaModal from "../../media_viewer/native/components/openMediaModal.tsx";
import maybeApplyNoTextColorForLightCustomTheme from "../../a11y/AccessibilityStore.tsx";
import { AVATAR_MAX_SIZE } from "../../../Constants.tsx";

require = fn;
const result = require("obj132").fileFinishedImporting("modules/user_profile/native/openUserProfileAvatarMediaViewer.tsx");

export default function openUserProfileAvatarMediaViewer(user) {
  user = user.user;
  useReducedMotion = useReducedMotion.useReducedMotion;
  let animate = !useReducedMotion;
  ({ guildId, originViewOrOriginLayout } = user);
  if (!useReducedMotion) {
    animate = user.animate;
  }
  const avatarURL = user.getAvatarURL(guildId, AVATAR_MAX_SIZE, animate);
  if (typeof avatarURL === "string") {
    const obj = { uri: null, mediaIndex: 0, height: null, width: null, accessoryType: "embed" };
    obj[0] = avatarURL;
    obj[2] = AVATAR_MAX_SIZE;
    obj[3] = AVATAR_MAX_SIZE;
    const items = [obj];
    obj[0] = items;
    obj[1] = originViewOrOriginLayout;
    obj.openMediaModal(obj);
  }
};