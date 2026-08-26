// === Module 16571: useActivityShelfItemData ===

// Module 16571 (useActivityShelfItemData)
import useActivityShelfItemsDefault from "useActivityShelfItems" /* 11695 */;
import closure_2 from "noop" /* 19 */;

const result = require("set").fileFinishedImporting("modules/activities/useActivityShelfItemData.tsx");

export const useActivityShelfItemData = function useActivityShelfItemData(guild_id1, applicationId) {
  importDefault = applicationId;
  const tmp = useActivityShelfItemsDefault({ guildId: guild_id1 });
  dependencyMap = tmp;
  const items = [tmp, applicationId];
  return React.useMemo(() => {
    let found = closure_1.find((application) => application.application.id === closure_0);
    if (found == null) {
      found = null;
    }
    return found;
  }, items);
};