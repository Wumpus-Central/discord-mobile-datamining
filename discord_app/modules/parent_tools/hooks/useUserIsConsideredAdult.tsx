// discord_app/modules/parent_tools/hooks/useUserIsConsideredAdult.tsx
import mergeGuildAvatar from "mergeGuildAvatar";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useUserIsConsideredAdult.tsx");

export default function useUserIsConsideredAdult() {
  const items = [mergeGuildAvatar];
  return initialize /* initialize */.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let nsfwAllowed;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return nsfwAllowed;
  });
};