// discord_app/modules/game_profile/hooks/useShouldOpenGameProfileModal.tsx
import noop from "noop";
import handleLoadMessages from "handleLoadMessages";
import { AnalyticEvents } from "ME";
import { GameFlags } from "../../../../discord_common/js/shared/shared-constants/GameFlags.tsx";
import { isAgeRestrictedContentClassification } from "../../content_classification/utils.tsx";

const require = arg1;
let closure_7 = { NoMatch: "no match", NSFW: "nsfw", Disabled: "profile disabled" };
const result = require("ME").fileFinishedImporting("modules/game_profile/hooks/useShouldOpenGameProfileModal.tsx");

export default function useShouldOpenGameProfileModal(applicationId) {
  let gameId;
  let trackEntryPointImpression;
  let str = applicationId.applicationId;
  if (str === undefined) {
    str = "";
  }
  const source = applicationId.source;
  ({ trackEntryPointImpression, gameId } = applicationId);
  if (trackEntryPointImpression === undefined) {
    trackEntryPointImpression = true;
  }
  let importAll;
  let gameRecord;
  let isLoading;
  let shouldOpenGameProfile;
  importAll = isLoading.useRef(false);
  gameId = trackEntryPointImpression(gameRecord[7])({ applicationId: str, gameId });
  gameRecord = gameId.gameRecord;
  isLoading = gameId.isLoading;
  if (null == gameRecord) {
    let items = [closure_7.NoMatch];
    let arr = items;
  } else {
    let items1 = [];
    if (obj3.hasFlag(gameRecord.gameFlags, source(tmp[5]).GameFlags.GAME_PROFILE_DISABLED)) {
      arr = items1.push(closure_7.Disabled);
    }
    obj3 = importAll(tmp[4]);
    const tmp11 = source;
    arr = items1;
    if (tmp11Result.isAgeRestrictedContentClassification(gameRecord.contentClassification)) {
      arr = items1.push(closure_7.NSFW);
      arr = items1;
    }
    tmp11Result = source(tmp[6]);
  }
  shouldOpenGameProfile = 0 === arr.length;
  const items2 = [gameRecord, shouldOpenGameProfile, isLoading, source, trackEntryPointImpression];
  const effect = isLoading.useEffect(() => {
    if (!ref.current) {
      if (trackEntryPointImpression) {
        if (!isLoading) {
          let trackResult = gameRecord;
          if (null != gameRecord) {
            let track = trackEntryPointImpression;
            let GAME_PROFILE_ENTRY_POINT_AVAILABLE = gameRecord;
            trackEntryPointImpression(gameRecord[8])(null != source, "Cannot track a Game Profile Entry Point Impressions without a source.");
            if (null == trackResult) {
              const items = [outer1_7.NoMatch];
              let tmp8 = items;
            } else {
              const items1 = [];
              if (obj3.hasFlag(trackResult.gameFlags, source(GAME_PROFILE_ENTRY_POINT_AVAILABLE[5]).GameFlags.GAME_PROFILE_DISABLED)) {
                items1.push(outer1_7.Disabled);
              }
              obj3 = ref(GAME_PROFILE_ENTRY_POINT_AVAILABLE[4]);
              const tmp18 = source;
              tmp8 = items1;
              if (tmp18Result.isAgeRestrictedContentClassification(trackResult.contentClassification)) {
                items1.push(outer1_7.NSFW);
                tmp8 = items1;
              }
              tmp18Result = source(GAME_PROFILE_ENTRY_POINT_AVAILABLE[6]);
            }
            trackResult = track(GAME_PROFILE_ENTRY_POINT_AVAILABLE[3]);
            track = trackResult.track;
            GAME_PROFILE_ENTRY_POINT_AVAILABLE = outer1_6.GAME_PROFILE_ENTRY_POINT_AVAILABLE;
            const obj = { game_profile_available: null, application_id: null, rejection_reason: null, source: null };
            obj[0] = shouldOpenGameProfile;
            obj[1] = trackResult.id;
            obj[2] = tmp8;
            obj[3] = source;
            track(GAME_PROFILE_ENTRY_POINT_AVAILABLE, obj);
            tmp.current = true;
            const tmp15 = source;
          }
        }
      }
    }
  }, items2);
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
    obj2 = importAll(1403);
    const tmp8 = require;
    arr = items1;
    if (tmp8Result.isAgeRestrictedContentClassification(gameFlags.contentClassification)) {
      arr = items1.push(closure_7.NSFW);
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
    obj2 = importAll(1403);
    const tmp9 = require;
    arr = items1;
    if (tmp9Result.isAgeRestrictedContentClassification(game.contentClassification)) {
      arr = items1.push(closure_7.NSFW);
      arr = items1;
    }
    tmp9Result = isAgeRestrictedContentClassification;
  }
  return 0 === arr.length;
};