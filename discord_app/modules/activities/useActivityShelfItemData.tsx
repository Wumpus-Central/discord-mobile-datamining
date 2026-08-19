// === Module 16359: useActivityShelfItemData ===

// Module 16359 (useActivityShelfItemData)
import useActivityShelfItemsDefault from "useActivityShelfItems" /* 11212 */;
import noop from "noop" /* 19 */;

const result = require("obj132").fileFinishedImporting("modules/activities/useActivityShelfItemData.tsx");

export const useActivityShelfItemData = function useActivityShelfItemData(guild_id1, applicationId) {
  importDefault = applicationId;
  const tmp = useActivityShelfItemsDefault({ guildId: guild_id1 });
  dependencyMap = tmp;
  const items = [tmp, applicationId];
  return React.useMemo(() => {
    let found = closure_1.find((item, index) => item.application.id === closure_0);
    if (found == null) {
      found = null;
    }
    return found;
  }, items);
};