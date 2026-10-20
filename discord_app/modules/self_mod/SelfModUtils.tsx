// === Module 7337: SelfModUtils ===

// Module 7337 (SelfModUtils)
import UserStore from "UserStore" /* 1392 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/self_mod/SelfModUtils.tsx");

export const isCurrentUserTeen = function isCurrentUserTeen() {
  const currentUser = UserStore.getCurrentUser();
  let nsfwAllowed;
  if (currentUser != null) {
    nsfwAllowed = currentUser.nsfwAllowed;
  }
  return false === nsfwAllowed;
};