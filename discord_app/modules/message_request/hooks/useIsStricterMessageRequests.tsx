// === Module 11550: set ===

// Module 11550 (set)
import set from "set";

let set = new Set(["GB"]);
const result = set.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  return require(11527) /* set */.useIsTeenInCountrySet(set);
};