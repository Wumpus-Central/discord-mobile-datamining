// discord_app/modules/activities/utils/isInviteActive.tsx
import SnowflakeUtilsDefault from "../../../utils/SnowflakeUtils.tsx";
import DurationsDefault from "../../../utils/Durations.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = 2 * DurationsDefault.Millis.HOUR;
let c2 = result;
const result1 = size.fileFinishedImporting("modules/activities/utils/isInviteActive.tsx");

export default function isInviteActive(party, activity, arg2) {
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
    const obj = SnowflakeUtilsDefault;
    const sum = obj.extractTimestamp(activity.id) + c2;
    let tmp10 = null != party.application_id;
    const tmp9 = sum < Date.now();
    if (tmp10) {
      tmp10 = party.application_id !== arg2;
    }
    return !tmp2 && !tmp9 && !tmp10;
  }
}
export const EMBED_LIFETIME = result;
