// discord_app/modules/activities/utils/isInviteActive.tsx
const result = 2 * require("set").Millis.HOUR;
const result1 = require("set").fileFinishedImporting("modules/activities/utils/isInviteActive.tsx");

export default function isInviteActive(party, activity) {
  if (null == party) {
    return false;
  } else {
    let party_id = null;
    if (null != activity.activity) {
      party_id = activity.activity.party_id;
    }
    let tmp2 = null != party_id;
    if (tmp2) {
      party = party.party;
      let id;
      if (party != null) {
        id = party.id;
      }
      tmp2 = id !== party_id;
    }
    const _Date = Date;
    const sum = require("../../../utils/SnowflakeUtils.tsx").extractTimestamp(activity.id) + closure_2;
    let tmp10 = null != party.application_id;
    const obj = require("../../../utils/SnowflakeUtils.tsx");
    if (tmp10) {
      tmp10 = party.application_id !== arg2;
    }
    let tmp12 = !tmp2;
    if (!tmp2) {
      tmp12 = !tmp9;
    }
    if (tmp12) {
      tmp12 = !tmp10;
    }
    return tmp12;
  }
};
export const EMBED_LIFETIME = result;