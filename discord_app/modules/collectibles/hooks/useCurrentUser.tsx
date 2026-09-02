// === Module 8906: useCurrentUser ===

// Module 8906 (useCurrentUser)
import _modDef38 from "module_38" /* 38 */;
import initialize from "initialize" /* 586 */;
import closure_3 from "mergeGuildAvatar" /* 1921 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/collectibles/hooks/useCurrentUser.tsx");

export const useCurrentUser = function useCurrentUser() {
  const items = [closure_3];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  _modDef38(null != stateFromStores, "user has to be signed in before accessing shop");
  return stateFromStores;
};
export const useCurrentUserIfAvailable = function useCurrentUserIfAvailable() {
  const items = [closure_3];
  return initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
};