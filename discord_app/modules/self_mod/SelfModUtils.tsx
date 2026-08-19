// discord_app/modules/self_mod/SelfModUtils.tsx
import mergeGuildAvatar from "../../stores/UserStore.tsx";

const result = require("obj132").fileFinishedImporting("modules/self_mod/SelfModUtils.tsx");

export const isCurrentUserTeen = function isCurrentUserTeen() {
  currentUser = currentUser.getCurrentUser();
  let nsfwAllowed;
  if (currentUser != null) {
    nsfwAllowed = currentUser.nsfwAllowed;
  }
  return false === nsfwAllowed;
};