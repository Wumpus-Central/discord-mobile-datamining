// discord_app/modules/collectibles/hooks/useCurrentUser.tsx
import mergeGuildAvatar from "mergeGuildAvatar";

const require = arg1;
const result = require("module_38").fileFinishedImporting("modules/collectibles/hooks/useCurrentUser.tsx");

export const useCurrentUser = function useCurrentUser() {
  const items = [mergeGuildAvatar];
  const stateFromStores = require("../../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items, () => currentUser.getCurrentUser());
  require("../../../../_runtime/metro/00038__.js")(null != stateFromStores, "user has to be signed in before accessing shop");
  return stateFromStores;
};
export const useCurrentUserIfAvailable = function useCurrentUserIfAvailable() {
  const items = [mergeGuildAvatar];
  return require("../../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items, () => currentUser.getCurrentUser());
};