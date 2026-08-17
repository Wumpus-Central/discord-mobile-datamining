// discord_app/modules/message_request/hooks/useIsStricterMessageRequests.tsx
import set2 from "../../regional_feature_config/RegionalTeenUtils.tsx";
import set from "../../../../_runtime/00002_set.js";

let set = new Set(["GB"]);
const result = set.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  return set2.useIsTeenInCountrySet(set);
};