// discord_app/modules/message_request/hooks/useIsStricterMessageRequests.tsx
import RegionalTeenUtils from "../../regional_feature_config/RegionalTeenUtils.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const set = new Set(["GB"]);
const result = size.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  return RegionalTeenUtils.useIsTeenInCountrySet(set);
}
