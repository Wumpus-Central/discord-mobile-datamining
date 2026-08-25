// === Module 11317: getIsInParty ===

// Module 11317 (getIsInParty)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/activities/utils/getIsInParty.tsx");

export const getIsInParty = function getIsInParty(tmp8Result, activity) {
  let id;
  if (activity != null) {
    const party = activity.party;
    if (party != null) {
      id = party.id;
    }
  }
  let tmp2 = null != id;
  if (tmp2) {
    let id1;
    if (tmp8Result != null) {
      const party2 = tmp8Result.party;
      if (party2 != null) {
        id1 = party2.id;
      }
    }
    tmp2 = null != id1 && tmp8Result.party.id === activity.party.id;
    const tmp5 = null != id1 && tmp8Result.party.id === activity.party.id;
  }
  return tmp2;
};