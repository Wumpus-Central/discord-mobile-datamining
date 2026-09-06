// discord_app/modules/user_profile/hooks/useShouldShowMutualInfo.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import useIsUserProfileObfuscatedDefault from "useIsUserProfileObfuscated.tsx";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/hooks/useShouldShowMutualInfo.tsx");

export default function useShouldShowMutualInfo(id) {
  const items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  id = undefined;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const tmp2 = useIsUserProfileObfuscatedDefault(id);
  return id !== id.id && !useIsUserProfileObfuscatedDefault(id);
}
