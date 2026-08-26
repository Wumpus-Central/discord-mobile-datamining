// === Module 12569: PlatformTypes ===

// Module 12569 (PlatformTypes)
import ME from "ME" /* 676 */;
import parseProviderRouteHeadlessSessionIdDefault from "parseProviderRouteHeadlessSessionId" /* 12568 */;
import set from "set" /* 2 */;

const PlatformTypes = ME.PlatformTypes;
const items = [, , , ];
({ LEAGUE_OF_LEGENDS: arr[0], ROBLOX: arr[1], TWITCH: arr[2], YOUTUBE: arr[3] } = PlatformTypes);
let set = new Set(items);
const result = set.fileFinishedImporting("modules/user_profile/utils/getActivityPlatform.tsx");

export default function getActivityPlatform(session_id) {
  importDefault = session_id;
  const tmp3 = parseProviderRouteHeadlessSessionIdDefault(session_id.session_id);
  if (null != tmp3) {
    return tmp3;
  } else if (tmp(9871)(session_id)) {
    let tmpResult = tmp(5174);
    return tmpResult.get(PlatformTypes.SPOTIFY);
  } else if (tmp(9122)(session_id)) {
    tmpResult = tmp(5174);
    return tmpResult.get(PlatformTypes.CRUNCHYROLL);
  } else if (tmp(12555)(session_id)) {
    return tmp(5174).get(PlatformTypes.XBOX);
  } else if (tmp(12556)(session_id)) {
    return tmp(5174).get(PlatformTypes.PLAYSTATION);
  } else {
    if (!tmp(12570)(session_id)) {
      if (!tmp(12571)(session_id)) {
        const found = tmp(5174).find((name) => name.name === session_id.name);
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
    return tmp(5174).get(PlatformTypes.META_QUEST_OR_HORIZON);
  }
};