// === Module 10919: hasPartySize ===

// Module 10919 (hasPartySize)
import obj132 from "obj132" /* 2 */;

const result = obj132.fileFinishedImporting("modules/activities/utils/hasPartySize.tsx");

export const hasPartySize = function hasPartySize(partySize) {
  return partySize.partySize > -1 && partySize.maxPartySize > -1;
};