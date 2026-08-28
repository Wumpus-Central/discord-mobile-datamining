// === Module 8712: useUserIsTeen ===

// Module 8712 (useUserIsTeen)
import initialize from "initialize" /* 589 */;
import closure_2 from "mergeGuildAvatar" /* 1923 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/self_mod/hooks/useUserIsTeen.tsx");

export const useUserIsTeen = function useUserIsTeen() {
  const items = [closure_2];
  return false === initialize.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let nsfwAllowed;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return nsfwAllowed;
  });
};