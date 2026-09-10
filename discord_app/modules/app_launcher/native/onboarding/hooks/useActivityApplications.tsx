// === Module 12108: useActivityApplications ===

// Module 12108 (useActivityApplications)
import EmbeddedActivitiesActionCreators from "EmbeddedActivitiesActionCreators" /* 9574 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/onboarding/hooks/useActivityApplications.tsx");

export const useActivityApplications = function useActivityApplications(guildId) {
  guildId = guildId.guildId;
  const fetchesShelf = guildId.fetchesShelf;
  const items = [fetchesShelf, guildId];
  const mapped = fetchesShelf(12109)({ guildId }).map((application) => application.application);
  const effect = noop.useEffect(() => {
    if (fetchesShelf) {
      const obj = { guildId };
      const shelf = obj.fetchShelf(obj);
    }
  }, items);
  return mapped;
};