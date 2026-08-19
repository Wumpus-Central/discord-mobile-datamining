// discord_app/modules/parent_tools/hooks/useUserIsConsideredAdult.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import mergeGuildAvatar from "../../../stores/UserStore.tsx";

require = fn;
const result = require("obj132").fileFinishedImporting("modules/parent_tools/hooks/useUserIsConsideredAdult.tsx");

export default function useUserIsConsideredAdult() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let nsfwAllowed;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return nsfwAllowed;
  });
};