// discord_app/modules/message_request/hooks/useIsStricterMessageRequests.tsx
import set from "set";

let set = new Set(["GB"]);
const result = set.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  return require("../../regional_feature_config/RegionalTeenUtils.tsx") /* set */.useIsTeenInCountrySet(set);
};