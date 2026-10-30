// === Module 8360: useUserIsTeen ===

// Module 8360 (useUserIsTeen)
import initialize from "initialize" /* 504 */;
import UserStore from "UserStore" /* 1384 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/self_mod/hooks/useUserIsTeen.tsx");

export function useUserIsTeen() {
  const items = [UserStore];
  return false === initialize.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let nsfwAllowed;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return nsfwAllowed;
  });
}