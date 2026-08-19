// discord_app/modules/user_profile/utils/getActivityPlatform.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import ME from "../../../Constants.tsx";
import parseProviderRouteHeadlessSessionIdDefault from "parseProviderRouteHeadlessSessionId.tsx";

const PlatformTypes = ME.PlatformTypes;
const items = [, , , ];
({ LEAGUE_OF_LEGENDS: arr[0], ROBLOX: arr[1], TWITCH: arr[2], YOUTUBE: arr[3] } = PlatformTypes);
const set = new Set(items);
const result = obj132.fileFinishedImporting("modules/user_profile/utils/getActivityPlatform.tsx");

export default function getActivityPlatform(session_id) {
  importDefault = session_id;
  const tmp3 = parseProviderRouteHeadlessSessionIdDefault(session_id.session_id);
  if (null != tmp3) {
    return tmp3;
  } else if (tmp(7261)(session_id)) {
    let tmpResult = tmp(5097);
    return tmpResult.get(PlatformTypes.SPOTIFY);
  } else if (tmp(9051)(session_id)) {
    tmpResult = tmp(5097);
    return tmpResult.get(PlatformTypes.CRUNCHYROLL);
  } else if (tmp(12099)(session_id)) {
    return tmp(5097).get(PlatformTypes.XBOX);
  } else if (tmp(12100)(session_id)) {
    return tmp(5097).get(PlatformTypes.PLAYSTATION);
  } else {
    if (!tmp(12114)(session_id)) {
      if (!tmp(12115)(session_id)) {
        const found = tmp(5097).find((item, index) => item.name === session_id.name);
        let tmp5 = null;
        if (null != found) {
          tmp5 = null;
          if (set.has(found.type)) {
            tmp5 = found;
          }
        }
        return tmp5;
      }
    }
    return tmp(5097).get(PlatformTypes.META_QUEST_OR_HORIZON);
  }
};