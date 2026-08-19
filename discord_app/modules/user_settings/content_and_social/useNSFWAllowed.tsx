// discord_app/modules/user_settings/content_and_social/useNSFWAllowed.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import mergeGuildAvatar from "../../../stores/UserStore.tsx";

require = fn;
const result = require("obj132").fileFinishedImporting("modules/user_settings/content_and_social/useNSFWAllowed.tsx");

export const useNSFWAllowed = function useNSFWAllowed() {
  const items = [closure_2];
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