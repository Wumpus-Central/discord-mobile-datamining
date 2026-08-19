// === Module 11211: useActivityApplications ===

// Module 11211 (useActivityApplications)
import noop from "noop" /* 19 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/app_launcher/native/onboarding/hooks/useActivityApplications.tsx");

export const useActivityApplications = function useActivityApplications(guildId) {
  guildId = guildId.guildId;
  const fetchesShelf = guildId.fetchesShelf;
  const items = [fetchesShelf, guildId];
  const mapped = fetchesShelf(11212)({ guildId }).map((item, index) => item.application);
  const effect = React.useEffect(() => {
    if (fetchesShelf) {
      guildId(dependencyMap[2]);
      const obj = { guildId: null };
      obj[0] = guildId;
      const shelf = obj.fetchShelf(obj);
    }
  }, items);
  return mapped;
};