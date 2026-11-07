// === Module 8439: useUserIsTeen ===

// Module 8439 (useUserIsTeen)
import initialize from "initialize" /* 504 */;
import UserStore from "UserStore" /* 1385 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/self_mod/hooks/useUserIsTeen.tsx");

export function useUserIsTeen() {
  items = [UserStore];
  return false === initialize.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let nsfwAllowed;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return nsfwAllowed;
  });
}