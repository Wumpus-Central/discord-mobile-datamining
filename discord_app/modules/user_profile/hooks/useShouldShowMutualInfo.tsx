// discord_app/modules/user_profile/hooks/useShouldShowMutualInfo.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import useIsUserProfileObfuscatedDefault from "useIsUserProfileObfuscated.tsx";
import closure_3 from "../../../stores/UserStore.tsx";

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
}
