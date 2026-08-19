// discord_app/modules/main_tabs_v2/native/utils/useTabSelectedGuildId.tsx
import defaultAreStatesEqual from "../../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import handleConnectionOpen from "../../../../stores/SelectedGuildStore.tsx";
import insertUnsortedGuilds from "../../../../stores/SortedGuildStore.tsx";

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