// discord_app/modules/message_request/hooks/useIsStricterMessageRequests.tsx
import set from "set";

let set = new Set(["GB"]);
const result = set.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  return require(11700) /* set */.useIsTeenInCountrySet(set);
};