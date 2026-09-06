// discord_app/modules/collectibles/hooks/useCurrentUser.tsx
import _modDef38 from "../../../../_runtime/metro/00038__.js";
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/hooks/useCurrentUser.tsx");

export const useCurrentUser = function useCurrentUser() {
  const items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  _modDef38(null != stateFromStores, "user has to be signed in before accessing shop");
  return stateFromStores;
};
export const useCurrentUserIfAvailable = function useCurrentUserIfAvailable() {
  const items = [UserStore];
  return initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
};
