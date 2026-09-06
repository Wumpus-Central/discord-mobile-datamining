// discord_app/modules/game_profile/hooks/useShouldOpenGameProfileModal.tsx
import _modDef38 from "../../../../_runtime/metro/00038__.js";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import FlagUtilsAll from "../../../../discord_common/js/shared/utils/FlagUtils.tsx";
import utils from "../../content_classification/utils.tsx";
import GameFlags from "../../../../discord_common/js/shared/shared-constants/GameFlags.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import GameStore from "../../games/GameStore.tsx";

require = fn;
const AnalyticEvents = fn(1074).AnalyticEvents;
const RejectionReason = { NoMatch: "no match", NSFW: "nsfw", Disabled: "profile disabled", Obscured: "obscured" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/hooks/useShouldOpenGameProfileModal.tsx");

export default function useShouldOpenGameProfileModal(applicationId) {
  let str = applicationId.applicationId;
  if (str === undefined) {
    str = "";
  }
  const source = applicationId.source;
  ({ trackEntryPointImpression, gameId } = applicationId);
  if (trackEntryPointImpression === undefined) {
    trackEntryPointImpression = true;
  }
  let gameRecord;
  let isLoading;
  importAll = isLoading.useRef(false);
  gameId = trackEntryPointImpression(gameRecord[7])({ applicationId: str, gameId });
  gameRecord = gameId.gameRecord;
  isLoading = gameId.isLoading;
  let shouldOpenGameProfile = null != gameRecord;
  if (shouldOpenGameProfile) {
    shouldOpenGameProfile = !require("FlagUtils").hasFlag(
      gameRecord.gameFlags,
      source(tmp[5]).GameFlags.GAME_PROFILE_DISABLED,
    );
    const obj2 = require("FlagUtils");
  }
  let items = [gameRecord, shouldOpenGameProfile, isLoading, source, trackEntryPointImpression];
  const effect = isLoading.useEffect(() => {
    let current = ref.current;
    if (!current) {
      current = !trackEntryPointImpression;
    }
    if (!current) {
      current = isLoading;
    }
    if (!current) {
      current = null == gameRecord;
    }
    if (!current) {
      let track = importDefault;
      let GAME_PROFILE_ENTRY_POINT_AVAILABLE = dependencyMap;
      _modDef38(null != source, "Cannot track a Game Profile Entry Point Impressions without a source.");
      let flag = shouldOpenGameProfile;
      if (null == gameRecord) {
        const items = [obj.NoMatch];
        let tmp11 = items;
      } else {
        const items1 = [];
        if (obj3.hasFlag(gameRecord.gameFlags, GameFlags.GameFlags.GAME_PROFILE_DISABLED)) {
          items1.push(obj.Disabled);
        }
        obj3 = FlagUtilsAll;
        tmp11 = items1;
        if (tmp19Result.isAgeRestrictedContentClassification(gameRecord.contentClassification)) {
          items1.push(obj.NSFW);
          tmp11 = items1;
        }
        tmp19Result = utils;
      }
      track = track(1242).track;
      GAME_PROFILE_ENTRY_POINT_AVAILABLE = AnalyticEvents.GAME_PROFILE_ENTRY_POINT_AVAILABLE;
      obj = { game_profile_available: flag, application_id: gameRecord.id, rejection_reason: tmp11, source };
      track(GAME_PROFILE_ENTRY_POINT_AVAILABLE, obj);
      flag = true;
      ref.current = true;
      const trackResult = track(1242);
    }
  }, items);
  return { shouldOpenGameProfile, gameId: gameId.gameId };
}
export { RejectionReason };
export const trackEntryPoint = function trackEntryPoint(game_profile_available, id) {
  if (items === undefined) {
    items = [];
  }
  const obj = { game_profile_available, application_id: id, rejection_reason: items, source: CallTile };
  obj.track(AnalyticEvents.GAME_PROFILE_ENTRY_POINT_AVAILABLE, obj);
};
export const gameIsAcceptable = function gameIsAcceptable(gameFlags) {
  if (null == gameFlags) {
    const items = [obj.NoMatch];
    let arr = items;
  } else {
    const items1 = [];
    if (obj2.hasFlag(gameFlags.gameFlags, GameFlags.GameFlags.GAME_PROFILE_DISABLED)) {
      arr = items1.push(obj.Disabled);
    }
    obj2 = FlagUtilsAll;
    arr = items1;
    if (tmp8Result.isAgeRestrictedContentClassification(gameFlags.contentClassification)) {
      items1.push(obj.NSFW);
      arr = items1;
    }
    tmp8Result = utils;
  }
  return 0 === arr.length;
};
export const gameIdIsAcceptable = function gameIdIsAcceptable(gameId) {
  const game = GameStore.getGame(gameId);
  if (null == game) {
    const items = [obj.NoMatch];
    let arr = items;
  } else {
    const items1 = [];
    if (obj2.hasFlag(game.gameFlags, GameFlags.GameFlags.GAME_PROFILE_DISABLED)) {
      arr = items1.push(obj.Disabled);
    }
    obj2 = FlagUtilsAll;
    arr = items1;
    if (tmp9Result.isAgeRestrictedContentClassification(game.contentClassification)) {
      items1.push(obj.NSFW);
      arr = items1;
    }
    tmp9Result = utils;
  }
  return 0 === arr.length;
};
