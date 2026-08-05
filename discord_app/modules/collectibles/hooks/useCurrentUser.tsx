// discord_app/modules/collectibles/hooks/useCurrentUser.tsx
import mergeGuildAvatar from "mergeGuildAvatar";
import { 00038__ } from "../../../../_runtime/metro/00038__.js";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
const result = require("module_38").fileFinishedImporting("modules/collectibles/hooks/useCurrentUser.tsx");

export const useCurrentUser = function useCurrentUser() {
  const items = [mergeGuildAvatar];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  00038__(null != stateFromStores, "user has to be signed in before accessing shop");
  return stateFromStores;
};
export const useCurrentUserIfAvailable = function useCurrentUserIfAvailable() {
  const items = [mergeGuildAvatar];
  return initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
};