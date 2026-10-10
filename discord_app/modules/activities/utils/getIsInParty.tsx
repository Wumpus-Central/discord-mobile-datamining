// === Module 10794: getIsInParty ===

// Module 10794 (getIsInParty)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/getIsInParty.tsx");

export const getIsInParty = function getIsInParty(tmp9Result, activity) {
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
    if (tmp9Result != null) {
      const party2 = tmp9Result.party;
      if (party2 != null) {
        id1 = party2.id;
      }
    }
    tmp2 = null != id1 && tmp9Result.party.id === activity.party.id;
    const tmp5 = null != id1 && tmp9Result.party.id === activity.party.id;
  }
  return tmp2;
};