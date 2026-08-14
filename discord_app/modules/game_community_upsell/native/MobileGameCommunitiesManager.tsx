// discord_app/modules/game_community_upsell/native/MobileGameCommunitiesManager.tsx
import initialize from "initialize";
import set from "set";
import { MAX_DISPLAYED_UPSELL_GUILDS as closure_5 } from "MAX_DISPLAYED_UPSELL_GUILDS";
import "initialize";
import { DetectableAppNames } from "../../local_app_detection/LocalAppDetectionTypes.tsx";
import { DETECTABLE_GAME_TO_APPLICATION_ID_MAP } from "GameCommunityConfig.tsx";
import { GAME_COMMUNITY_ADD_SERVER_ENTRY_EXPERIMENT } from "GameCommunityUpsellExperiment.tsx";

let require = arg1;
class MobileGameCommunitiesManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.actions = {
      LOCAL_APP_DETECTION_COMPLETE(arg0) {
            return applyArgumentsResult.handleLocalAppDetectionComplete(arg0);
          },
      POST_CONNECTION_OPEN() {
            return applyArgumentsResult.handlePostConnectionOpen();
          }
    };
    return applyArgumentsResult;
  }
}
const prototype = MobileGameCommunitiesManager.prototype;
prototype["_fetchGameCommunities"] = function _fetchGameCommunities(result) {
  const gameIdsForDetectedGames = DETECTABLE_GAME_TO_APPLICATION_ID_MAP.getGameIdsForDetectedGames(result);
  const timestamp = Date.now();
  const diff = timestamp - store.getLastFetchedAt();
  if (diff >= 86400000) {
    const dismissedGuildIds = store.getDismissedGuildIds();
    const _Array = Array;
    const mobileGameCommunities = importAll(15479).fetchMobileGameCommunities(gameIdsForDetectedGames, Array.from(dismissedGuildIds), closure_5);
    const obj3 = importAll(15479);
  }
};
prototype["handlePostConnectionOpen"] = function handlePostConnectionOpen() {
  const GameCommunityAddServerEntryExperiment = GAME_COMMUNITY_ADD_SERVER_ENTRY_EXPERIMENT.GameCommunityAddServerEntryExperiment;
  if (GameCommunityAddServerEntryExperiment.getConfig({ location: "MobileGameCommunitiesManager" }).enabled) {
    if (0 === store.getLastFetchedAt()) {
      const _Object = Object;
      const values = Object.values(initialize.getUserAgnosticState().apps);
      if (values.some((lastScannedAt) => {
        lastScannedAt = undefined;
        if (lastScannedAt != null) {
          lastScannedAt = lastScannedAt.lastScannedAt;
        }
        return null != lastScannedAt;
      })) {
        const obj = {};
        const ALL_DETECTABLE_APP_NAMES = DetectableAppNames.ALL_DETECTABLE_APP_NAMES;
        for (const item10021 of ALL_DETECTABLE_APP_NAMES) {
          let tmp6 = initialize;
          obj[item10021] = initialize.isAppInstalled(item10021);
          continue;
        }
        const self = this;
        const result = this._fetchGameCommunities(obj);
      }
    }
  }
};
prototype["handleLocalAppDetectionComplete"] = function handleLocalAppDetectionComplete(result) {
  const GameCommunityAddServerEntryExperiment = GAME_COMMUNITY_ADD_SERVER_ENTRY_EXPERIMENT.GameCommunityAddServerEntryExperiment;
  if (GameCommunityAddServerEntryExperiment.getConfig({ location: "MobileGameCommunitiesManager" }).enabled) {
    const self = this;
    result = this._fetchGameCommunities(result.result);
  }
};
const mobileGameCommunitiesManager = new MobileGameCommunitiesManager();
let result = require("MAX_DISPLAYED_UPSELL_GUILDS").fileFinishedImporting("modules/game_community_upsell/native/MobileGameCommunitiesManager.tsx");

export default mobileGameCommunitiesManager;