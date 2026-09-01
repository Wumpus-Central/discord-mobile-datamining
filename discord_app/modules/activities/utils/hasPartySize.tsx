// discord_app/modules/activities/utils/hasPartySize.tsx
import set from "../../../../_runtime/00002_set.js";

const result = set.fileFinishedImporting("modules/activities/utils/hasPartySize.tsx");

export const hasPartySize = function hasPartySize(partySize) {
  return partySize.partySize > -1 && partySize.maxPartySize > -1;
};
