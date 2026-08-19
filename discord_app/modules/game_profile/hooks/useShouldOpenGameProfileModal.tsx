// discord_app/modules/game_profile/hooks/useShouldOpenGameProfileModal.tsx
import hasFlagAll from "../../../../discord_common/js/shared/utils/FlagUtils.tsx";
import isAgeRestrictedContentClassification from "../../content_classification/utils.tsx";
import GameFlags from "../../../../discord_common/js/shared/shared-constants/GameFlags.tsx";
import noop from "../../../../_runtime/00019_noop.js";
import handleLoadMessages from "../../games/GameStore.tsx";
import { AnalyticEvents } from "../../../Constants.tsx";

require = fn;
let closure_7 = { NoMatch: "no match", NSFW: "nsfw", Disabled: "profile disabled" };
const result = require("obj132").fileFinishedImporting("modules/game_profile/hooks/useShouldOpenGameProfileModal.tsx");

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
    shouldOpenGameProfile = !importAll(tmp[4]).hasFlag(gameRecord.gameFlags, source(tmp[5]).GameFlags.GAME_PROFILE_DISABLED);
    const obj2 = importAll(tmp[4]);
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
      let track = trackEntryPointImpression;
      let GAME_PROFILE_ENTRY_POINT_AVAILABLE = gameRecord;
      trackEntryPointImpression(gameRecord[8])(null != source, "Cannot track a Game Profile Entry Point Impressions without a source.");
      let flag = shouldOpenGameProfile;
      if (null == gameRecord) {
        const items = [closure_1_7.NoMatch];
        let tmp11 = items;
      } else {
        const items1 = [];
        if (obj3.hasFlag(gameRecord.gameFlags, source(GAME_PROFILE_ENTRY_POINT_AVAILABLE[5]).GameFlags.GAME_PROFILE_DISABLED)) {
          items1.push(closure_1_7.Disabled);
        }
        obj3 = ref(GAME_PROFILE_ENTRY_POINT_AVAILABLE[4]);
        tmp11 = items1;
        if (tmp19Result.isAgeRestrictedContentClassification(gameRecord.contentClassification)) {
          items1.push(closure_1_7.NSFW);
          tmp11 = items1;
        }
        tmp19Result = source(GAME_PROFILE_ENTRY_POINT_AVAILABLE[6]);
      }
      track = track(GAME_PROFILE_ENTRY_POINT_AVAILABLE[3]).track;
      GAME_PROFILE_ENTRY_POINT_AVAILABLE = AnalyticEvents.GAME_PROFILE_ENTRY_POINT_AVAILABLE;
      const obj = { game_profile_available: null, application_id: null, rejection_reason: null, source: null };
      obj[0] = flag;
      obj[1] = gameRecord.id;
      obj[2] = tmp11;
      obj[3] = source;
      track(GAME_PROFILE_ENTRY_POINT_AVAILABLE, obj);
      flag = true;
      ref.current = true;
      const trackResult = track(GAME_PROFILE_ENTRY_POINT_AVAILABLE[3]);
    }
  }, items);
  return { shouldOpenGameProfile, gameId: gameId.gameId };
};
export const gameIsAcceptable = function gameIsAcceptable(gameFlags) {
  if (null == gameFlags) {
    const items = [closure_7.NoMatch];
    let arr = items;
  } else {
    const items1 = [];
    if (obj2.hasFlag(gameFlags.gameFlags, GameFlags.GameFlags.GAME_PROFILE_DISABLED)) {
      arr = items1.push(closure_7.Disabled);
    }
    obj2 = hasFlagAll;
    arr = items1;
    if (tmp8Result.isAgeRestrictedContentClassification(gameFlags.contentClassification)) {
      items1.push(closure_7.NSFW);
      arr = items1;
    }
    tmp8Result = isAgeRestrictedContentClassification;
  }
  return 0 === arr.length;
};
export const gameIdIsAcceptable = function gameIdIsAcceptable(closure_0) {
  game = game.getGame(closure_0);
  if (null == game) {
    const items = [closure_7.NoMatch];
    let arr = items;
  } else {
    const items1 = [];
    if (obj2.hasFlag(game.gameFlags, GameFlags.GameFlags.GAME_PROFILE_DISABLED)) {
      arr = items1.push(closure_7.Disabled);
    }
    obj2 = hasFlagAll;
    arr = items1;
    if (tmp9Result.isAgeRestrictedContentClassification(game.contentClassification)) {
      items1.push(closure_7.NSFW);
      arr = items1;
    }
    tmp9Result = isAgeRestrictedContentClassification;
  }
  return 0 === arr.length;
};