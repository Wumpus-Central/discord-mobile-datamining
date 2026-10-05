// discord_app/modules/game_profile/hooks/useShouldOpenGameProfileModal.tsx
import _modDef38 from "../../../../_runtime/metro/00038__.js";
import Constants from "../../../Constants.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import FlagUtilsAll from "../../../../discord_common/js/shared/utils/FlagUtils.tsx";
import utils from "../../content_classification/utils.tsx";
import GameFlags from "../../../../discord_common/js/shared/shared-constants/GameFlags.tsx";
import react from "../../../../_runtime/00019_react.js";
import GameStore from "../../games/GameStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let importAll, importDefault;

const AnalyticEvents = Constants.AnalyticEvents;
const RejectionReason = { NoMatch: "no match", NSFW: "nsfw", Disabled: "profile disabled", Obscured: "obscured" };
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (trackEntryPointImpression) => {
      let applicationId;
      let closure_1;
      let gameId;
      let gameId2;
      let gameRecord;
      let isLoading;
      let ref;
      let source;
      let obj = source(gameRecord[8]);
      const cResult = obj.c(15);
      const tmp = source;
      ({ applicationId, gameId, source } = trackEntryPointImpression);
      trackEntryPointImpression = trackEntryPointImpression.trackEntryPointImpression;
      let str = "";
      if (undefined !== applicationId) {
        str = applicationId;
      }
      importDefault = tmp4;
      importAll = isLoading.useRef(false);
      const obj2 = isLoading;
      if (cResult[0] === str) {
        let tmp5;
        let tmp8;
        if (cResult[1] === gameId) {
          tmp5 = cResult[2];
        }
        const tmp7 = require("useResolveGameForProfile")(tmp5);
        ({ gameId: gameId2, gameRecord } = tmp7);
        isLoading = tmp7.isLoading;
        if (cResult[3] !== gameRecord) {
          let tmp10 = null != gameRecord;
          if (tmp10) {
            let obj4 = require("FlagUtils");
            tmp10 = !obj4.hasFlag(gameRecord.gameFlags, tmp(tmp2[5]).GameFlags.GAME_DISABLED);
          }
          cResult[3] = gameRecord;
          cResult[4] = tmp10;
          tmp8 = tmp10;
        } else {
          tmp8 = cResult[4];
        }
        const game_profile_available = tmp8;
        if (cResult[5] === gameRecord) {
          if (cResult[6] === tmp8) {
            if (cResult[7] === isLoading) {
              if (cResult[8] === source) {
                let tmp12;
                let tmp13;
                if (cResult[9] === (undefined === trackEntryPointImpression || trackEntryPointImpression)) {
                  tmp12 = cResult[10];
                  tmp13 = cResult[11];
                }
                const effect = obj2.useEffect(tmp12, tmp13);
                if (cResult[12] === gameId2) {
                  let tmp15;
                  if (cResult[13] === tmp8) {
                    tmp15 = cResult[14];
                  }
                  return tmp15;
                }
                const obj3 = { shouldOpenGameProfile: tmp8, gameId: gameId2 };
                cResult[12] = gameId2;
                cResult[13] = tmp8;
                cResult[14] = obj3;
                tmp15 = obj3;
              }
            }
          }
        }
        const fn = function _() {
          let obj;
          const current = ref.current || !closure_1 || isLoading || null == gameRecord;
          if (!current) {
            let tmp14;
            _modDef38(null != source, "Cannot track a Game Profile Entry Point Impressions without a source.");
            const id = gameRecord.id;
            if (null == gameRecord) {
              const items = [obj.NoMatch];
              tmp14 = items;
            } else {
              const items1 = [];
              const obj4 = FlagUtilsAll;
              if (obj4.hasFlag(gameRecord.gameFlags, GameFlags.GameFlags.GAME_DISABLED)) {
                items1.push(obj.Disabled);
              }
              tmp14 = items1;
              const tmp21Result = utils;
              if (tmp21Result.isAgeRestrictedContentClassification(gameRecord.contentClassification)) {
                items1.push(obj.NSFW);
                tmp14 = items1;
              }
            }
            obj = { game_profile_available, application_id: id, rejection_reason: tmp14, source };
            const tmp5Result = AnalyticsUtilsDefault;
            tmp5Result.track(AnalyticEvents.GAME_PROFILE_ENTRY_POINT_AVAILABLE, obj);
            ref.current = true;
          }
        };
        let items = [gameRecord, tmp8, isLoading, source, tmp4];
        cResult[5] = gameRecord;
        cResult[6] = tmp8;
        cResult[7] = isLoading;
        cResult[8] = source;
        cResult[9] = undefined === trackEntryPointImpression || trackEntryPointImpression;
        cResult[10] = fn;
        cResult[11] = items;
        tmp13 = items;
        tmp12 = fn;
      }
      const obj5 = { applicationId: str, gameId };
      cResult[0] = str;
      cResult[1] = gameId;
      cResult[2] = obj5;
      tmp5 = obj5;
    }
  : (applicationId) => {
      let gameId;
      let ref;
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
      let gameRecord;
      let isLoading;
      let obj = isLoading;
      importAll = isLoading.useRef(false);
      const tmp2 = trackEntryPointImpression(gameRecord[9])({ applicationId: str, gameId });
      gameRecord = tmp2.gameRecord;
      isLoading = tmp2.isLoading;
      let shouldOpenGameProfile = null != gameRecord;
      const gameId2 = tmp2.gameId;
      if (shouldOpenGameProfile) {
        const obj2 = require("FlagUtils");
        shouldOpenGameProfile = !obj2.hasFlag(gameRecord.gameFlags, source(tmp[5]).GameFlags.GAME_DISABLED);
      }
      let items = [gameRecord, shouldOpenGameProfile, isLoading, source, trackEntryPointImpression];
      const effect = obj.useEffect(() => {
        let obj;
        const current = ref.current || !trackEntryPointImpression || isLoading || null == gameRecord;
        if (!current) {
          let tmp14;
          _modDef38(null != source, "Cannot track a Game Profile Entry Point Impressions without a source.");
          const id = gameRecord.id;
          if (null == gameRecord) {
            const items = [obj.NoMatch];
            tmp14 = items;
          } else {
            const items1 = [];
            const obj4 = FlagUtilsAll;
            if (obj4.hasFlag(gameRecord.gameFlags, GameFlags.GameFlags.GAME_DISABLED)) {
              items1.push(obj.Disabled);
            }
            tmp14 = items1;
            const tmp21Result = utils;
            if (tmp21Result.isAgeRestrictedContentClassification(gameRecord.contentClassification)) {
              items1.push(obj.NSFW);
              tmp14 = items1;
            }
          }
          obj = { game_profile_available: shouldOpenGameProfile, application_id: id, rejection_reason: tmp14, source };
          const tmp5Result = AnalyticsUtilsDefault;
          tmp5Result.track(AnalyticEvents.GAME_PROFILE_ENTRY_POINT_AVAILABLE, obj);
          ref.current = true;
        }
      }, items);
      return { shouldOpenGameProfile, gameId: gameId2 };
    };
function trackEntryPoint(game_profile_available, id) {
  let items;
  if (items === undefined) {
    items = [];
  }
  const obj = AnalyticsUtilsDefault;
  const obj2 = { game_profile_available, application_id: id, rejection_reason: items, source: CallTile };
  obj.track(AnalyticEvents.GAME_PROFILE_ENTRY_POINT_AVAILABLE, obj2);
}
function gameIsAcceptable(gameFlags) {
  let arr;
  if (null == gameFlags) {
    const items = [obj.NoMatch];
    arr = items;
  } else {
    const items1 = [];
    const obj2 = FlagUtilsAll;
    if (obj2.hasFlag(gameFlags.gameFlags, GameFlags.GameFlags.GAME_DISABLED)) {
      items1.push(obj.Disabled);
    }
    arr = items1;
    const tmp8Result = utils;
    if (tmp8Result.isAgeRestrictedContentClassification(gameFlags.contentClassification)) {
      items1.push(obj.NSFW);
      arr = items1;
    }
  }
  return 0 === arr.length;
}
const result = size.fileFinishedImporting("modules/game_profile/hooks/useShouldOpenGameProfileModal.tsx");

export default tmp2;
export { RejectionReason };
export { trackEntryPoint };
export { gameIsAcceptable };
export const gameIdIsAcceptable = function gameIdIsAcceptable(gameId) {
  let arr;
  const game = GameStore.getGame(gameId);
  if (null == game) {
    const items = [obj.NoMatch];
    arr = items;
  } else {
    const items1 = [];
    const obj2 = FlagUtilsAll;
    if (obj2.hasFlag(game.gameFlags, GameFlags.GameFlags.GAME_DISABLED)) {
      items1.push(obj.Disabled);
    }
    arr = items1;
    const tmp9Result = utils;
    if (tmp9Result.isAgeRestrictedContentClassification(game.contentClassification)) {
      items1.push(obj.NSFW);
      arr = items1;
    }
  }
  return 0 === arr.length;
};
