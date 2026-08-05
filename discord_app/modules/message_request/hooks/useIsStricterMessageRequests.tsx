// discord_app/modules/message_request/hooks/useIsStricterMessageRequests.tsx
import set from "set";
import { set } from "../../regional_feature_config/RegionalTeenUtils.tsx";

let set = new Set(["GB"]);
const result = set.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  return set /* set */.useIsTeenInCountrySet(set);
};