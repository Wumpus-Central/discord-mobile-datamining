// === Module 13016: getActivityPlatform ===

// Module 13016 (getActivityPlatform)
import Constants from "Constants" /* 1074 */;
import PlatformsDefault from "Platforms" /* 5283 */;
import isCrunchyrollActivityDefault from "isCrunchyrollActivity" /* 8344 */;
import isListeningOnSpotifyDefault from "isListeningOnSpotify" /* 10891 */;
import isOnXboxDefault from "isOnXbox" /* 13002 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 13003 */;
import parseProviderRouteHeadlessSessionIdDefault from "parseProviderRouteHeadlessSessionId" /* 13015 */;
import isOnMetaQuestDefault from "isOnMetaQuest" /* 13017 */;
import isOnMetaHorizonDefault from "isOnMetaHorizon" /* 13018 */;
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
    let tmpResult = PlatformsDefault;
    return tmpResult.get(PlatformTypes.SPOTIFY);
  } else if (isCrunchyrollActivityDefault(session_id)) {
    tmpResult = PlatformsDefault;
    return tmpResult.get(PlatformTypes.CRUNCHYROLL);
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