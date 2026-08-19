// discord_app/modules/message_request/hooks/useIsStricterMessageRequests.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import set2 from "../../regional_feature_config/RegionalTeenUtils.tsx";

const set = new Set(["GB"]);
const result = obj132.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  return set2.useIsTeenInCountrySet(set);
};