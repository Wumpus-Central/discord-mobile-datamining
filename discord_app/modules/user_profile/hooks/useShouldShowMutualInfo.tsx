// discord_app/modules/user_profile/hooks/useShouldShowMutualInfo.tsx
import mergeGuildAvatar from "mergeGuildAvatar";

const require = arg1;
const result = require("useIsUserProfileObfuscated").fileFinishedImporting("modules/user_profile/hooks/useShouldShowMutualInfo.tsx");

export default function useShouldShowMutualInfo(id) {
  const items = [mergeGuildAvatar];
  const stateFromStores = require("../../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items, () => currentUser.getCurrentUser());
  id = undefined;
  const obj = require("../../../../discord_common/js/packages/flux/index.tsx") /* initialize */;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const tmp2 = require("useIsUserProfileObfuscated.tsx")(id);
  return id !== id.id && !require("useIsUserProfileObfuscated.tsx")(id);
};