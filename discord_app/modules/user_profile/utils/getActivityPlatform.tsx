// discord_app/modules/user_profile/utils/getActivityPlatform.tsx
import Constants from "../../../Constants.tsx";
import PlatformsDefault from "../../../lib/Platforms.tsx";
import isCrunchyrollActivityDefault from "../../activities/utils/isCrunchyrollActivity.tsx";
import isListeningOnSpotifyDefault from "../../activities/utils/isListeningOnSpotify.tsx";
import isOnXboxDefault from "../../activities/utils/isOnXbox.tsx";
import isOnPlayStationDefault from "../../activities/utils/isOnPlayStation.tsx";
import parseProviderRouteHeadlessSessionIdDefault from "parseProviderRouteHeadlessSessionId.tsx";
import isOnMetaQuestDefault from "../../activities/utils/isOnMetaQuest.tsx";
import isOnMetaHorizonDefault from "../../activities/utils/isOnMetaHorizon.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const PlatformTypes = Constants.PlatformTypes;
const items = [, , ,];
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
}
