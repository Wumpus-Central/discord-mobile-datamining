// === Module 9244: useShouldShowMutualInfo ===

// Module 9244 (useShouldShowMutualInfo)
import initialize from "initialize" /* 586 */;
import useIsUserProfileObfuscatedDefault from "useIsUserProfileObfuscated" /* 9245 */;
import closure_3 from "mergeGuildAvatar" /* 1921 */;

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