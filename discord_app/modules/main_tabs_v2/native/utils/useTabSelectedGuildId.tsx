// === Module 14068: useTabSelectedGuildId ===

// Module 14068 (useTabSelectedGuildId)
import defaultAreStatesEqual from "defaultAreStatesEqual" /* 647 */;
import closure_2 from "handleConnectionOpen" /* 4197 */;
import closure_3 from "insertUnsortedGuilds" /* 5078 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/utils/useTabSelectedGuildId.tsx");

export default function useTabSelectedGuildId() {
  const items = [closure_2, closure_3];
  return defaultAreStatesEqual.useStateFromStores(items, () => {
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