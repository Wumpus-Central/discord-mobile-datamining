// === Module 12583: useActivityApplications ===

// Module 12583 (useActivityApplications)
import fetchShelf from "fetchShelf" /* 11918 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/onboarding/hooks/useActivityApplications.tsx");

export function useActivityApplications(guildId) {
  guildId = guildId.guildId;
  const fetchesShelf = guildId.fetchesShelf;
  items = [fetchesShelf, guildId];
  const mapped = fetchesShelf(12584)({ guildId }).map((application) => application.application);
  const effect = noop.useEffect(() => {
    if (fetchesShelf) {
      const obj2 = { guildId };
      const shelf = fetchShelf.fetchShelf(obj2);
    }
  }, items);
  return mapped;
}