// === Module 11057: useUserIsConsideredAdult ===

// Module 11057 (useUserIsConsideredAdult)
import initialize from "initialize" /* 589 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/parent_tools/hooks/useUserIsConsideredAdult.tsx");

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