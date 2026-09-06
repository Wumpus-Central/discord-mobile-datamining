// === Module 17143: useActivityShelfItemData ===

// Module 17143 (useActivityShelfItemData)
import useActivityShelfItemsDefault from "useActivityShelfItems" /* 12039 */;
import noop from "module_19" /* 19 */;

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