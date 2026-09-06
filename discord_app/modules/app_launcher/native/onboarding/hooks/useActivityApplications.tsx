// discord_app/modules/app_launcher/native/onboarding/hooks/useActivityApplications.tsx
import EmbeddedActivitiesActionCreators from "../../../../activities/EmbeddedActivitiesActionCreators.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

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
