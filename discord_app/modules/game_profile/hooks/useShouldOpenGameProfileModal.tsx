// === Module 8743: useShouldOpenGameProfileModal ===

// Module 8743 (useShouldOpenGameProfileModal)
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import hasFlagAll from "hasFlag" /* 1403 */;
import isAgeRestrictedContentClassification from "isAgeRestrictedContentClassification" /* 5023 */;
import GameFlags from "GameFlags" /* 8744 */;
import closure_4 from "noop" /* 19 */;
import closure_5 from "handleLoadMessages" /* 4470 */;
import { AnalyticEvents } from "ME" /* 676 */;

require = arg1;
let obj = { NoMatch: "no match", NSFW: "nsfw", Disabled: "profile disabled", Obscured: "obscured" };
const result = require("set").fileFinishedImporting("modules/game_profile/hooks/useShouldOpenGameProfileModal.tsx");

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
  importAll = undefined;
  let gameRecord;
  let isLoading;
  let shouldOpenGameProfile;
  importAll = isLoading.useRef(false);
  gameId = trackEntryPointImpression(gameRecord[7])({ applicationId: str, gameId });
  gameRecord = gameId.gameRecord;
  isLoading = gameId.isLoading;
  shouldOpenGameProfile = null != gameRecord;
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
        if (obj3.hasFlag(tmp8.gameFlags, source(GAME_PROFILE_ENTRY_POINT_AVAILABLE[5]).GameFlags.GAME_PROFILE_DISABLED)) {
          items1.push(closure_1_7.Disabled);
        }
        obj3 = ref(GAME_PROFILE_ENTRY_POINT_AVAILABLE[4]);
        const tmp19 = source;
        tmp11 = items1;
        if (tmp19Result.isAgeRestrictedContentClassification(tmp8.contentClassification)) {
          items1.push(closure_1_7.NSFW);
          tmp11 = items1;
        }
        tmp19Result = source(GAME_PROFILE_ENTRY_POINT_AVAILABLE[6]);
      }
      track = track(GAME_PROFILE_ENTRY_POINT_AVAILABLE[3]).track;
      GAME_PROFILE_ENTRY_POINT_AVAILABLE = closure_1_6.GAME_PROFILE_ENTRY_POINT_AVAILABLE;
      obj = { game_profile_available: null, application_id: null, rejection_reason: null, source: null };
      obj[0] = flag;
      obj[1] = gameRecord.id;
      obj[2] = tmp11;
      obj[3] = source;
      track(GAME_PROFILE_ENTRY_POINT_AVAILABLE, obj);
      flag = true;
      ref.current = true;
      const tmp5 = source;
      const trackResult = track(GAME_PROFILE_ENTRY_POINT_AVAILABLE[3]);
    }
  }, items);
  return { shouldOpenGameProfile, gameId: gameId.gameId };
};
export const RejectionReason = obj;
export const trackEntryPoint = function trackEntryPoint(game_profile_available, id, items, CallTile) {
  if (items === undefined) {
    items = [];
  }
  obj = expandEventPropertiesDefault;
  obj = { game_profile_available, application_id: id, rejection_reason: items, source: CallTile };
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
    obj2 = hasFlagAll;
    const tmp8 = require;
    arr = items1;
    if (tmp8Result.isAgeRestrictedContentClassification(gameFlags.contentClassification)) {
      arr = items1.push(obj.NSFW);
      arr = items1;
    }
    tmp8Result = isAgeRestrictedContentClassification;
  }
  return 0 === arr.length;
};
export const gameIdIsAcceptable = function gameIdIsAcceptable(closure_0) {
  game = game.getGame(closure_0);
  if (null == game) {
    const items = [obj.NoMatch];
    let arr = items;
  } else {
    const items1 = [];
    if (obj2.hasFlag(game.gameFlags, GameFlags.GameFlags.GAME_PROFILE_DISABLED)) {
      arr = items1.push(obj.Disabled);
    }
    obj2 = hasFlagAll;
    const tmp9 = require;
    arr = items1;
    if (tmp9Result.isAgeRestrictedContentClassification(game.contentClassification)) {
      arr = items1.push(obj.NSFW);
      arr = items1;
    }
    tmp9Result = isAgeRestrictedContentClassification;
  }
  return 0 === arr.length;
};