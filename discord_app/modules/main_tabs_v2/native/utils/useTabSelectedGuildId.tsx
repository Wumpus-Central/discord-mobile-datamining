// discord_app/modules/main_tabs_v2/native/utils/useTabSelectedGuildId.tsx
import handleConnectionOpen from "handleConnectionOpen";
import insertUnsortedGuilds from "insertUnsortedGuilds";
import { defaultAreStatesEqual } from "../../../../../discord_common/js/packages/flux/useStateFromStores.tsx";

const require = arg1;
const result = require("defaultAreStatesEqual").fileFinishedImporting("modules/main_tabs_v2/native/utils/useTabSelectedGuildId.tsx");

export default function useTabSelectedGuildId() {
  const items = [handleConnectionOpen, insertUnsortedGuilds];
  return defaultAreStatesEqual /* defaultAreStatesEqual */.useStateFromStores(items, () => {
    let guildId = store.getGuildId();
    const lastSelectedGuildId = store.getLastSelectedGuildId();
    if (guildId == null) {
      guildId = lastSelectedGuildId;
    }
    if (guildId == null) {
      guildId = flattenedGuildIds.getFlattenedGuildIds()[0];
    }
    return guildId;
  });
};