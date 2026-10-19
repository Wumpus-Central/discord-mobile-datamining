// === Module 14104: getActivityPlatform ===

// Module 14104 (getActivityPlatform)
import Constants from "Constants" /* 1087 */;
import PlatformsDefault from "Platforms" /* 6456 */;
import isCrunchyrollActivityDefault from "isCrunchyrollActivity" /* 8752 */;
import isListeningOnSpotifyDefault from "isListeningOnSpotify" /* 10569 */;
import isOnXboxDefault from "isOnXbox" /* 14090 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 14091 */;
import parseProviderRouteHeadlessSessionIdDefault from "parseProviderRouteHeadlessSessionId" /* 14103 */;
import isOnMetaQuestDefault from "isOnMetaQuest" /* 14105 */;
import isOnMetaHorizonDefault from "isOnMetaHorizon" /* 14106 */;
import size from "module_2" /* 2 */;

const PlatformTypes = Constants.PlatformTypes;
const items = [, , , ];
({ LEAGUE_OF_LEGENDS: arr[0], ROBLOX: arr[1], TWITCH: arr[2], YOUTUBE: arr[3] } = PlatformTypes);
const set = new Set(items);
const result = size.fileFinishedImporting("modules/user_profile/utils/getActivityPlatform.tsx");

export default function getActivityPlatform(session_id) {
  const tmp3 = parseProviderRouteHeadlessSessionIdDefault(session_id.session_id);
  if (null != tmp3) {
    return tmp3;
  } else if (isListeningOnSpotifyDefault(session_id)) {
    return PlatformsDefault.get(PlatformTypes.SPOTIFY);
  } else if (isCrunchyrollActivityDefault(session_id)) {
    return PlatformsDefault.get(PlatformTypes.CRUNCHYROLL);
  } else if (isOnXboxDefault(session_id)) {
    return PlatformsDefault.get(PlatformTypes.XBOX);
  } else if (isOnPlayStationDefault(session_id)) {
    return PlatformsDefault.get(PlatformTypes.PLAYSTATION);
  } else {
    if (!isOnMetaQuestDefault(session_id)) {
      if (!isOnMetaHorizonDefault(session_id)) {
        const found = PlatformsDefault.find((name) => name.name === session_id.name);
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
    return PlatformsDefault.get(PlatformTypes.META_QUEST_OR_HORIZON);
  }
};