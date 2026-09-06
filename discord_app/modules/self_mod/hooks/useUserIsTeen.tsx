// discord_app/modules/self_mod/hooks/useUserIsTeen.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/self_mod/hooks/useUserIsTeen.tsx");

export const useUserIsTeen = function useUserIsTeen() {
  const items = [UserStore];
  return (
    false ===
    initialize.useStateFromStores(items, () => {
      currentUser = currentUser.getCurrentUser();
      let nsfwAllowed;
      if (currentUser != null) {
        nsfwAllowed = currentUser.nsfwAllowed;
      }
      return nsfwAllowed;
    })
  );
};
