// === Module 8896: SelfModUtils ===

// Module 8896 (SelfModUtils)
import UserStore from "UserStore" /* 1386 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/self_mod/SelfModUtils.tsx");

export function isCurrentUserTeen() {
  const currentUser = UserStore.getCurrentUser();
  let nsfwAllowed;
  if (currentUser != null) {
    nsfwAllowed = currentUser.nsfwAllowed;
  }
  return false === nsfwAllowed;
}