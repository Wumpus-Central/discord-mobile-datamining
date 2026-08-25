// === Module 12476: useShouldShowMutualInfo ===

// Module 12476 (useShouldShowMutualInfo)
import initialize from "initialize" /* 589 */;
import useIsUserProfileObfuscatedDefault from "useIsUserProfileObfuscated" /* 12477 */;
import closure_3 from "mergeGuildAvatar" /* 1922 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/user_profile/hooks/useShouldShowMutualInfo.tsx");

export default function useShouldShowMutualInfo(id) {
  const items = [closure_3];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  id = undefined;
  const obj = initialize;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const tmp2 = useIsUserProfileObfuscatedDefault(id);
  return id !== id.id && !useIsUserProfileObfuscatedDefault(id);
};