// discord_app/modules/collectibles/hooks/useCurrentUser.tsx
import _modDef38 from "../../../../_runtime/metro/00038__.js";
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import mergeGuildAvatar from "../../../stores/UserStore.tsx";

require = fn;
const result = require("obj132").fileFinishedImporting("modules/collectibles/hooks/useCurrentUser.tsx");

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