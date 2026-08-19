// discord_app/modules/activities/utils/hasPartySize.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";

const result = obj132.fileFinishedImporting("modules/activities/utils/hasPartySize.tsx");

export const hasPartySize = function hasPartySize(partySize) {
  return partySize.partySize > -1 && partySize.maxPartySize > -1;
};