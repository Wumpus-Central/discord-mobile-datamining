// === Module 5005: isCurrentUserTeen ===

// Module 5005 (isCurrentUserTeen)
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;

const result = require("obj132").fileFinishedImporting("modules/self_mod/SelfModUtils.tsx");

export const isCurrentUserTeen = function isCurrentUserTeen() {
  currentUser = currentUser.getCurrentUser();
  let nsfwAllowed;
  if (currentUser != null) {
    nsfwAllowed = currentUser.nsfwAllowed;
  }
  return false === nsfwAllowed;
};