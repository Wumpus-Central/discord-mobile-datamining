// discord_app/modules/main_tabs_v2/native/utils/useTabSelectedGuildId.tsx
import useStateFromStores from "../../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import SelectedGuildStore from "../../../../stores/SelectedGuildStore.tsx";
import SortedGuildStore from "../../../../stores/SortedGuildStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/utils/useTabSelectedGuildId.tsx");

export default function useTabSelectedGuildId() {
  const items = [SelectedGuildStore, SortedGuildStore];
  return useStateFromStores.useStateFromStores(items, () => {
    let guildId = SelectedGuildStore.getGuildId();
    const lastSelectedGuildId = SelectedGuildStore.getLastSelectedGuildId();
    if (guildId == null) {
      guildId = lastSelectedGuildId;
    }
    if (guildId == null) {
      guildId = flattenedGuildIds.getFlattenedGuildIds()[0];
    }
    return guildId;
  });
}
