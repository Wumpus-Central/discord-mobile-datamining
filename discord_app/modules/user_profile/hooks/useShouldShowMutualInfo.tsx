// discord_app/modules/user_profile/hooks/useShouldShowMutualInfo.tsx
import mergeGuildAvatar from "mergeGuildAvatar";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";
import { useIsUserProfileObfuscated } from "useIsUserProfileObfuscated.tsx";

const require = arg1;
const result = require("useIsUserProfileObfuscated").fileFinishedImporting("modules/user_profile/hooks/useShouldShowMutualInfo.tsx");

export default function useShouldShowMutualInfo(id) {
  const items = [mergeGuildAvatar];
  const stateFromStores = initialize /* initialize */.useStateFromStores(items, () => currentUser.getCurrentUser());
  id = undefined;
  const obj = initialize /* initialize */;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const tmp2 = useIsUserProfileObfuscated(id);
  return id !== id.id && !useIsUserProfileObfuscated(id);
};