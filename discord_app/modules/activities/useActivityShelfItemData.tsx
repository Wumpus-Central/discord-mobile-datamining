// discord_app/modules/activities/useActivityShelfItemData.tsx
import useActivityShelfItemsDefault from "useActivityShelfItems.tsx";
import noop from "../../../_runtime/metro/00019__.js";

const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/useActivityShelfItemData.tsx");

export const useActivityShelfItemData = function useActivityShelfItemData(guild_id1, applicationId) {
  closure_0 = applicationId;
  const tmp = useActivityShelfItemsDefault({ guildId: guild_id1 });
  closure_1 = tmp;
  const items = [tmp, applicationId];
  return noop.useMemo(() => {
    let found = closure_1.find((application) => application.application.id === applicationId);
    if (found == null) {
      found = null;
    }
    return found;
  }, items);
};
