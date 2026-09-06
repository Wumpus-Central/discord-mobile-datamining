// === Module 12038: useActivityApplications ===

// Module 12038 (useActivityApplications)
import EmbeddedActivitiesActionCreators from "EmbeddedActivitiesActionCreators" /* 9504 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/onboarding/hooks/useActivityApplications.tsx");

export const useActivityApplications = function useActivityApplications(guildId) {
  guildId = guildId.guildId;
  const fetchesShelf = guildId.fetchesShelf;
  const items = [fetchesShelf, guildId];
  const mapped = fetchesShelf(12039)({ guildId }).map((application) => application.application);
  const effect = noop.useEffect(() => {
    if (fetchesShelf) {
      const obj = { guildId };
      const shelf = obj.fetchShelf(obj);
    }
  }, items);
  return mapped;
};