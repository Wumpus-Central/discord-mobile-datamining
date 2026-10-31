// === Module 8749: useCurrentUser ===

// Module 8749 (useCurrentUser)
import _modDef38 from "module_38" /* 38 */;
import initialize from "initialize" /* 504 */;
import UserStore from "UserStore" /* 1383 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/hooks/useCurrentUser.tsx");

export function useCurrentUser() {
  const items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  _modDef38(null != stateFromStores, "user has to be signed in before accessing shop");
  return stateFromStores;
}
export function useCurrentUserIfAvailable() {
  const items = [UserStore];
  return initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
}