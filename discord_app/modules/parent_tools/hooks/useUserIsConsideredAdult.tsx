// === Module 11673: useUserIsConsideredAdult ===

// Module 11673 (useUserIsConsideredAdult)
import initialize from "initialize" /* 586 */;
import closure_2 from "mergeGuildAvatar" /* 1921 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useUserIsConsideredAdult.tsx");

export default function useUserIsConsideredAdult() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let nsfwAllowed;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return nsfwAllowed;
  });
};