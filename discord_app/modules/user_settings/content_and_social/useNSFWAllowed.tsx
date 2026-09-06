// discord_app/modules/user_settings/content_and_social/useNSFWAllowed.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/content_and_social/useNSFWAllowed.tsx");

export const useNSFWAllowed = function useNSFWAllowed() {
  const items = [UserStore];
  return initialize.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let nsfwAllowed;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    if (nsfwAllowed == null) {
      nsfwAllowed = null;
    }
    return nsfwAllowed;
  });
};
