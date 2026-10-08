// discord_app/modules/game_profile/hooks/useShouldOpenGameProfileModal.tsx
import _modDef38 from "../../../../_runtime/metro/00038__.js";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import FlagUtilsAll from "../../../../discord_common/js/shared/utils/FlagUtils.tsx";
import utils from "../../content_classification/utils.tsx";
import GameFlags from "../../../../discord_common/js/shared/shared-constants/GameFlags.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import GameStore from "../../games/GameStore.tsx";

const require = globalThis.__r;

require = fn;
const AnalyticEvents = fn(1085).AnalyticEvents;
const RejectionReason = { NoMatch: "no match", NSFW: "nsfw", Disabled: "profile disabled", Obscured: "obscured" };
const ReactCompilerGating = fn(558);
function trackEntryPoint(game_profile_available, id) {
  if (items === undefined) {
    items = [];
  }
  AnalyticsUtilsDefault.track(AnalyticEvents.GAME_PROFILE_ENTRY_POINT_AVAILABLE, {
    game_profile_available,
    application_id: id,
    rejection_reason: items,
    source: CallTile,
  });
}
function gameIsAcceptable(gameFlags) {
  if (null == gameFlags) {
    const items = [obj.NoMatch];
    let arr = items;
  } else {
    const items1 = [];
    if (obj2.hasFlag(gameFlags.gameFlags, GameFlags.GameFlags.GAME_DISABLED)) {
      items1.push(obj.Disabled);
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
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/hooks/useShouldOpenGameProfileModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useShouldOpenGameProfileModal(trackEntryPointImpression) {
      const cResult = source(gameRecord[8]).c(15);
      ({ applicationId, gameId, source } = trackEntryPointImpression);
      trackEntryPointImpression = trackEntryPointImpression.trackEntryPointImpression;
      let str = "";
      if (undefined !== applicationId) {
        str = applicationId;
      }
      importDefault = tmp4;
      importAll = isLoading.useRef(false);
      if (cResult[0] === str) {
        if (cResult[1] === gameId) {
          let tmp5 = cResult[2];
        }
        const tmp7 = require("useResolveGameForProfile")(tmp5);
        ({ gameId: gameId2, gameRecord } = tmp7);
        isLoading = tmp7.isLoading;
        if (cResult[3] !== gameRecord) {
          let tmp10 = null != gameRecord;
          if (tmp10) {
            tmp10 = !require("FlagUtils").hasFlag(gameRecord.gameFlags, source(tmp2[5]).GameFlags.GAME_DISABLED);
            const obj4 = require("FlagUtils");
          }
          cResult[3] = gameRecord;
          cResult[4] = tmp10;
          let tmp8 = tmp10;
        } else {
          tmp8 = cResult[4];
        }
        const game_profile_available = tmp8;
        if (cResult[5] === gameRecord) {
          if (cResult[6] === tmp8) {
            if (cResult[7] === isLoading) {
              if (cResult[8] === source) {
                if (cResult[9] === tmp4) {
                  let tmp12 = cResult[10];
                  let tmp13 = cResult[11];
                }
                const effect = isLoading.useEffect(tmp12, tmp13);
                if (cResult[12] === gameId2) {
                  if (cResult[13] === tmp8) {
                    let tmp15 = cResult[14];
                  }
                  return tmp15;
                }
                let obj3 = { shouldOpenGameProfile: tmp8, gameId: gameId2 };
                cResult[12] = gameId2;
                cResult[13] = tmp8;
                class A {
                  constructor() {
                    current = closure_2.current;
                    tmp = closure_2;
                    if (!current) {
                      tmp2 = trackEntryPointImpression;
                      current = !trackEntryPointImpression;
                    }
                    if (!current) {
                      current = isLoading;
                    }
                    if (!current) {
                      tmp3 = gameRecord;
                      tmp4 = null;
                      current = null == gameRecord;
                    }
                    if (current) {
                      return;
                    } else {
                      track = closure_1;
                      GAME_PROFILE_ENTRY_POINT_AVAILABLE = closure_3;
                      flag = undefined;
                      tmp6 = null;
                      str = "Cannot track a Game Profile Entry Point Impressions without a source.";
                      tmp5 = source;
                      tmp7 = closure_1(closure_3[10])(
                        null != source,
                        "Cannot track a Game Profile Entry Point Impressions without a source.",
                      );
                      tmp9 = gameRecord;
                      tmp8 = closure_5;
                      if (null == gameRecord) {
                        tmp15 = closure_7;
                        items = [];
                        items[0] = closure_7.NoMatch;
                        tmp12 = items;
                      } else {
                        items1 = [];
                        tmp19 = closure_2;
                        obj3 = closure_2(GAME_PROFILE_ENTRY_POINT_AVAILABLE[4]);
                        tmp20 = closure_0;
                        if (
                          obj3.hasFlag(
                            tmp9.gameFlags,
                            closure_0(GAME_PROFILE_ENTRY_POINT_AVAILABLE[5]).GameFlags.GAME_DISABLED,
                          )
                        ) {
                          tmp10 = closure_7;
                          arr1 = items1.push(closure_7.Disabled);
                        }
                        tmp20Result = tmp20(GAME_PROFILE_ENTRY_POINT_AVAILABLE[6]);
                        tmp12 = items1;
                        if (tmp20Result.isAgeRestrictedContentClassification(tmp9.contentClassification)) {
                          tmp13 = closure_7;
                          arr3 = items1.push(closure_7.NSFW);
                          tmp12 = items1;
                        }
                      }
                      trackResult = track(GAME_PROFILE_ENTRY_POINT_AVAILABLE[3]);
                      track = trackResult.track;
                      tmp17 = AnalyticEvents;
                      GAME_PROFILE_ENTRY_POINT_AVAILABLE = AnalyticEvents.GAME_PROFILE_ENTRY_POINT_AVAILABLE;
                      obj1 = {
                        game_profile_available: null,
                        application_id: null,
                        rejection_reason: null,
                        source: null,
                      };
                      obj1.game_profile_available = tmp8;
                      obj1.application_id = gameRecord.id;
                      obj1.rejection_reason = tmp12;
                      obj1.source = tmp5;
                      trackResult1 = track(GAME_PROFILE_ENTRY_POINT_AVAILABLE, obj1);
                      flag = true;
                      tmp.current = true;
                    }
                    return;
                  }
                }
                tmp15 = obj3;
              }
            }
          }
        }
        class A {
          constructor() {
            current = closure_2.current;
            tmp = closure_2;
            if (!current) {
              tmp2 = trackEntryPointImpression;
              current = !trackEntryPointImpression;
            }
            if (!current) {
              current = isLoading;
            }
            if (!current) {
              tmp3 = gameRecord;
              tmp4 = null;
              current = null == gameRecord;
            }
            if (current) {
              return;
            } else {
              track = closure_1;
              GAME_PROFILE_ENTRY_POINT_AVAILABLE = closure_3;
              flag = undefined;
              tmp6 = null;
              str = "Cannot track a Game Profile Entry Point Impressions without a source.";
              tmp5 = source;
              tmp7 = closure_1(closure_3[10])(
                null != source,
                "Cannot track a Game Profile Entry Point Impressions without a source.",
              );
              tmp9 = gameRecord;
              tmp8 = closure_5;
              if (null == gameRecord) {
                tmp15 = closure_7;
                items = [];
                items[0] = closure_7.NoMatch;
                tmp12 = items;
              } else {
                items1 = [];
                tmp19 = closure_2;
                obj3 = closure_2(GAME_PROFILE_ENTRY_POINT_AVAILABLE[4]);
                tmp20 = closure_0;
                if (
                  obj3.hasFlag(tmp9.gameFlags, closure_0(GAME_PROFILE_ENTRY_POINT_AVAILABLE[5]).GameFlags.GAME_DISABLED)
                ) {
                  tmp10 = closure_7;
                  arr1 = items1.push(closure_7.Disabled);
                }
                tmp20Result = tmp20(GAME_PROFILE_ENTRY_POINT_AVAILABLE[6]);
                tmp12 = items1;
                if (tmp20Result.isAgeRestrictedContentClassification(tmp9.contentClassification)) {
                  tmp13 = closure_7;
                  arr3 = items1.push(closure_7.NSFW);
                  tmp12 = items1;
                }
              }
              trackResult = track(GAME_PROFILE_ENTRY_POINT_AVAILABLE[3]);
              track = trackResult.track;
              tmp17 = AnalyticEvents;
              GAME_PROFILE_ENTRY_POINT_AVAILABLE = AnalyticEvents.GAME_PROFILE_ENTRY_POINT_AVAILABLE;
              obj1 = { game_profile_available: null, application_id: null, rejection_reason: null, source: null };
              obj1.game_profile_available = tmp8;
              obj1.application_id = gameRecord.id;
              obj1.rejection_reason = tmp12;
              obj1.source = tmp5;
              trackResult1 = track(GAME_PROFILE_ENTRY_POINT_AVAILABLE, obj1);
              flag = true;
              tmp.current = true;
            }
            return;
          }
        }
        let items = [gameRecord, tmp8, isLoading, source, tmp4];
        cResult[5] = gameRecord;
        cResult[6] = tmp8;
        cResult[7] = isLoading;
        cResult[8] = source;
        cResult[9] = tmp4;
        cResult[10] = A;
        cResult[11] = items;
        tmp13 = items;
        tmp12 = A;
      }
      const obj5 = { applicationId: str, gameId };
      cResult[0] = str;
      cResult[1] = gameId;
      cResult[2] = obj5;
      tmp5 = obj5;
    }
  : function useShouldOpenGameProfileModal(applicationId) {
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
      const gameId2 = trackEntryPointImpression(gameRecord[9])({ applicationId: str, gameId });
      gameRecord = gameId2.gameRecord;
      isLoading = gameId2.isLoading;
      let shouldOpenGameProfile = null != gameRecord;
      if (shouldOpenGameProfile) {
        shouldOpenGameProfile = !require("FlagUtils").hasFlag(
          gameRecord.gameFlags,
          source(tmp[5]).GameFlags.GAME_DISABLED,
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
            if (obj3.hasFlag(gameRecord.gameFlags, GameFlags.GameFlags.GAME_DISABLED)) {
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
          track = track(1264).track;
          GAME_PROFILE_ENTRY_POINT_AVAILABLE = AnalyticEvents.GAME_PROFILE_ENTRY_POINT_AVAILABLE;
          obj = { game_profile_available: flag, application_id: gameRecord.id, rejection_reason: tmp11, source };
          track(GAME_PROFILE_ENTRY_POINT_AVAILABLE, obj);
          flag = true;
          ref.current = true;
          const trackResult = track(1264);
        }
      }, items);
      return { shouldOpenGameProfile, gameId: gameId2.gameId };
    };
export { RejectionReason };
export { trackEntryPoint };
export { gameIsAcceptable };
export const gameIdIsAcceptable = function gameIdIsAcceptable(gameId) {
  const game = GameStore.getGame(gameId);
  if (null == game) {
    const items = [obj.NoMatch];
    let arr = items;
  } else {
    const items1 = [];
    if (obj2.hasFlag(game.gameFlags, GameFlags.GameFlags.GAME_DISABLED)) {
      items1.push(obj.Disabled);
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
