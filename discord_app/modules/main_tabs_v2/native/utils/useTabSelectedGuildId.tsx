// === Module 14068: useTabSelectedGuildId ===

// Module 14068 (useTabSelectedGuildId)
import defaultAreStatesEqual from "defaultAreStatesEqual" /* 647 */;
import handleConnectionOpen from "handleConnectionOpen" /* 4197 */;
import insertUnsortedGuilds from "insertUnsortedGuilds" /* 5078 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/main_tabs_v2/native/utils/useTabSelectedGuildId.tsx");

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