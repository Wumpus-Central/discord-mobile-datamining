// discord_app/modules/game_community_upsell/native/MobileGameCommunitiesManager.tsx
import LocalAppDetectionTypes from "../../local_app_detection/LocalAppDetectionTypes.tsx";
import GameCommunityUpsellExperiment from "GameCommunityUpsellExperiment.tsx";
import GameCommunityConfig from "GameCommunityConfig.tsx";
import MobileGameCommunitiesActionCreatorsAll from "MobileGameCommunitiesActionCreators.tsx";
import LocalAppDetectionStore from "../../local_app_detection/native/LocalAppDetectionStore.tsx";
import MobileGameCommunitiesStore from "MobileGameCommunitiesStore.tsx";
import AutomaticLifecycleManager from "../../../lib/AutomaticLifecycleManager.tsx";

require = fn;
let closure_5 = fn(16265).MAX_DISPLAYED_UPSELL_GUILDS;
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
      },
    };
    return applyArgumentsResult;
  }
}
const prototype = MobileGameCommunitiesManager.prototype;
prototype["_fetchGameCommunities"] = function _fetchGameCommunities(result) {
  const gameIdsForDetectedGames = GameCommunityConfig.getGameIdsForDetectedGames(result);
  const timestamp = Date.now();
  const diff = timestamp - MobileGameCommunitiesStore.getLastFetchedAt();
  if (diff >= 86400000) {
    const dismissedGuildIds = MobileGameCommunitiesStore.getDismissedGuildIds();
    const _Array = Array;
    const mobileGameCommunities = MobileGameCommunitiesActionCreatorsAll.fetchMobileGameCommunities(
      gameIdsForDetectedGames,
      Array.from(dismissedGuildIds),
      closure_5,
    );
  }
};
prototype["handlePostConnectionOpen"] = function handlePostConnectionOpen() {
  const GameCommunityAddServerEntryExperiment = GameCommunityUpsellExperiment.GameCommunityAddServerEntryExperiment;
  if (GameCommunityAddServerEntryExperiment.getConfig({ location: "MobileGameCommunitiesManager" }).enabled) {
    if (0 === MobileGameCommunitiesStore.getLastFetchedAt()) {
      const _Object = Object;
      const values = Object.values(LocalAppDetectionStore.getUserAgnosticState().apps);
      if (
        values.some((lastScannedAt) => {
          lastScannedAt = undefined;
          if (lastScannedAt != null) {
            lastScannedAt = lastScannedAt.lastScannedAt;
          }
          return null != lastScannedAt;
        })
      ) {
        const obj = {};
        const ALL_DETECTABLE_APP_NAMES = LocalAppDetectionTypes.ALL_DETECTABLE_APP_NAMES;
        for (const item10021 of ALL_DETECTABLE_APP_NAMES) {
          obj[item10021] = LocalAppDetectionStore.isAppInstalled(item10021);
          continue;
        }
        const self = this;
        const result = this._fetchGameCommunities(obj);
      }
    }
  }
};
prototype["handleLocalAppDetectionComplete"] = function handleLocalAppDetectionComplete(result) {
  const GameCommunityAddServerEntryExperiment = GameCommunityUpsellExperiment.GameCommunityAddServerEntryExperiment;
  if (GameCommunityAddServerEntryExperiment.getConfig({ location: "MobileGameCommunitiesManager" }).enabled) {
    const self = this;
    result = this._fetchGameCommunities(result.result);
  }
};
const mobileGameCommunitiesManager = new MobileGameCommunitiesManager();
const size = fn(2);
let result = size.fileFinishedImporting("modules/game_community_upsell/native/MobileGameCommunitiesManager.tsx");

export default mobileGameCommunitiesManager;
