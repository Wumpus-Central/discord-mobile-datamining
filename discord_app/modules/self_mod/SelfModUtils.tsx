// === Module 6102: isCurrentUserTeen ===

// Module 6102 (isCurrentUserTeen)
import closure_0 from "mergeGuildAvatar" /* 1923 */;

const result = require("set").fileFinishedImporting("modules/self_mod/SelfModUtils.tsx");

export const isCurrentUserTeen = function isCurrentUserTeen() {
  currentUser = currentUser.getCurrentUser();
  let nsfwAllowed;
  if (currentUser != null) {
    nsfwAllowed = currentUser.nsfwAllowed;
  }
  return false === nsfwAllowed;
};