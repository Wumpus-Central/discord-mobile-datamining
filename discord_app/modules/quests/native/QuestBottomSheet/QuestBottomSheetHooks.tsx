// discord_app/modules/quests/native/QuestBottomSheet/QuestBottomSheetHooks.tsx
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import QuestTypes from "../../QuestTypes.tsx";
import AdCreativeType from "../../../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import AnalyticsTypes from "../../lib/analytics/AnalyticsTypes.tsx";
import captureAdUserAction from "../../../ads/analytics/captureAdUserAction.tsx";
import captureAdUserActionTypes from "../../../ads/analytics/captureAdUserActionTypes.tsx";
import openVideoQuestModalDefault from "../VideoQuestModal/openVideoQuestModal.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const QuestDockMode = fn(6745).QuestDockMode;
let ReactCompilerGating = fn(558);
let closure_6 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useDismissSheetOrCollapseDock() {
      const cResult = setRestingQuestDockMode(576).c(3);
      setRestingQuestDockMode = noop.useContext(
        setRestingQuestDockMode(16713).QuestDockExternalCoordinationContext,
      ).setRestingQuestDockMode;
      const isInQuestBottomSheet = noop.useContext(
        setRestingQuestDockMode(16735).QuestBottomSheetContext,
      ).isInQuestBottomSheet;
      if (cResult[0] === isInQuestBottomSheet) {
        if (cResult[1] === setRestingQuestDockMode) {
          let tmp2 = cResult[2];
        }
        return tmp2;
      }
      const fn = function t() {
        if (isInQuestBottomSheet) {
          ActionSheetActionCreatorsDefault.hideActionSheet("QuestBottomSheet");
        } else {
          setRestingQuestDockMode(QuestDockMode.COLLAPSED);
        }
      };
      cResult[0] = isInQuestBottomSheet;
      cResult[1] = setRestingQuestDockMode;
      cResult[2] = fn;
      tmp2 = fn;
    }
  : function useDismissSheetOrCollapseDock() {
      setRestingQuestDockMode = noop.useContext(
        setRestingQuestDockMode(16713).QuestDockExternalCoordinationContext,
      ).setRestingQuestDockMode;
      const isInQuestBottomSheet = noop.useContext(
        setRestingQuestDockMode(16735).QuestBottomSheetContext,
      ).isInQuestBottomSheet;
      const items = [isInQuestBottomSheet, setRestingQuestDockMode];
      return noop.useCallback(() => {
        if (isInQuestBottomSheet) {
          ActionSheetActionCreatorsDefault.hideActionSheet("QuestBottomSheet");
        } else {
          setRestingQuestDockMode(QuestDockMode.COLLAPSED);
        }
      }, items);
    };
fn(558);
ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useWatchTaskPressHandler(questId) {
      const cResult = questId(576).c(5);
      questId = questId.questId;
      const sourceQuestContent = questId.sourceQuestContent;
      const tmp2 = closure_6();
      dependencyMap = tmp2;
      let obj = questId(576);
      const questImpression = questId(9640).useQuestImpression();
      if (cResult[0] === tmp2) {
        if (cResult[1] === questImpression) {
          if (cResult[2] === questId) {
            if (cResult[3] === sourceQuestContent) {
              let tmp4 = cResult[4];
            }
            return tmp4;
          }
        }
      }
      const fn = function s() {
        closure_2();
        const obj = { questId, questContentPosition: null, sourceQuestContent: null };
        let questContentPosition;
        if (questImpression != null) {
          questContentPosition = questImpression.getQuestContentPosition();
        }
        obj.questContentPosition = questContentPosition;
        obj.sourceQuestContent = sourceQuestContent;
        openVideoQuestModalDefault(obj);
        const obj4 = {
          type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL,
          adCreativeType: AdCreativeType.AdCreativeType.QUEST,
          adCreativeId: questId,
          questContentCTA: AnalyticsTypes.QuestContentCTA.WATCH_VIDEO,
          surfaceId: QuestTypes.QuestContent.QUEST_BOTTOM_SHEET,
          sourceQuestContent,
          impressionId: null,
          questContentPosition: null,
        };
        let id;
        if (questImpression != null) {
          id = questImpression.getId();
        }
        obj4.impressionId = id;
        let questContentPosition1;
        if (questImpression != null) {
          questContentPosition1 = questImpression.getQuestContentPosition();
        }
        obj4.questContentPosition = questContentPosition1;
        captureAdUserAction.captureAdUserAction(obj4);
      };
      cResult[0] = tmp2;
      cResult[1] = questImpression;
      cResult[2] = questId;
      cResult[3] = sourceQuestContent;
      cResult[4] = fn;
      tmp4 = fn;
    }
  : function useWatchTaskPressHandler(questId) {
      questId = questId.questId;
      const sourceQuestContent = questId.sourceQuestContent;
      const tmp = closure_6();
      dependencyMap = tmp;
      const questImpression = questId(9640).useQuestImpression();
      const items = [questId, tmp, questImpression, sourceQuestContent];
      return noop.useCallback(() => {
        closure_2();
        const obj = { questId, questContentPosition: null, sourceQuestContent: null };
        let questContentPosition;
        if (questImpression != null) {
          questContentPosition = questImpression.getQuestContentPosition();
        }
        obj.questContentPosition = questContentPosition;
        obj.sourceQuestContent = sourceQuestContent;
        openVideoQuestModalDefault(obj);
        const obj4 = {
          type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL,
          adCreativeType: AdCreativeType.AdCreativeType.QUEST,
          adCreativeId: questId,
          questContentCTA: AnalyticsTypes.QuestContentCTA.WATCH_VIDEO,
          surfaceId: QuestTypes.QuestContent.QUEST_BOTTOM_SHEET,
          sourceQuestContent,
          impressionId: null,
          questContentPosition: null,
        };
        let id;
        if (questImpression != null) {
          id = questImpression.getId();
        }
        obj4.impressionId = id;
        let questContentPosition1;
        if (questImpression != null) {
          questContentPosition1 = questImpression.getQuestContentPosition();
        }
        obj4.questContentPosition = questContentPosition1;
        captureAdUserAction.captureAdUserAction(obj4);
      }, items);
    };
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestBottomSheet/QuestBottomSheetHooks.tsx");

export const useWatchTaskPressHandler = tmp2;
export const useMobileActivityPressHandler = ReactCompilerGating.isReactCompilerEnabled()
  ? function useMobileActivityPressHandler(questId) {
      const cResult = require("c").c(6);
      questId = questId.questId;
      _require = questId;
      let sourceQuestContent = questId.sourceQuestContent;
      launchMobileActivity = questId.launchMobileActivity;
      const tmp2 = closure_6();
      asyncGeneratorStep = tmp2;
      const obj = require("c");
      const questImpression = require("ContentImpressionTrackerHooks").useQuestImpression();
      if (cResult[0] === tmp2) {
        if (cResult[1] === questImpression) {
          if (cResult[2] === launchMobileActivity) {
            if (cResult[3] === questId) {
              if (cResult[4] === sourceQuestContent) {
                let tmp4 = cResult[5];
              }
              return tmp4;
            }
          }
        }
      }
      _require = asyncGeneratorStep(async () => {
        if (v3 === 2) {
          v3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            v3 = 2;
            if (0 === sourceQuestContent) {
              if (arg0 === 1) {
                v3 = 3;
                throw value;
              } else if (arg0 === 2) {
                v3 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                const adCreativeId = tmp4;
                closure_1_3();
                sourceQuestContent = 1;
                v3 = 1;
                const obj4 = { value: v3(), done: false };
                return obj4;
              }
            } else if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              const obj7 = {
                type: adCreativeId(launchMobileActivity[11]).AdUserActionType.CLICK_INTERNAL,
                adCreativeType: adCreativeId(launchMobileActivity[12]).AdCreativeType.QUEST,
                adCreativeId,
                questContentCTA: adCreativeId(launchMobileActivity[13]).QuestContentCTA.LAUNCH_MOBILE_ACTIVITY,
                surfaceId: adCreativeId(launchMobileActivity[14]).QuestContent.QUEST_BOTTOM_SHEET,
                sourceQuestContent,
                impressionId: null,
                questContentPosition: null,
              };
              let id;
              if (questImpression != null) {
                id = questImpression.getId();
              }
              obj7.impressionId = id;
              let questContentPosition;
              if (questImpression != null) {
                questContentPosition = questImpression.getQuestContentPosition();
              }
              obj7.questContentPosition = questContentPosition;
              adCreativeId(launchMobileActivity[10]).captureAdUserAction(obj7);
              v3 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp12) {
            v3 = tmp;
            throw tmp12;
          }
        }
      });
      function t0() {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      }
      cResult[0] = tmp2;
      cResult[1] = questImpression;
      cResult[2] = launchMobileActivity;
      cResult[3] = questId;
      cResult[4] = sourceQuestContent;
      cResult[5] = t0;
      tmp4 = t0;
    }
  : function useMobileActivityPressHandler(questId) {
      questId = questId.questId;
      const sourceQuestContent = questId.sourceQuestContent;
      const launchMobileActivity = questId.launchMobileActivity;
      const tmp = closure_6();
      asyncGeneratorStep = tmp;
      const questImpression = questId(launchMobileActivity[8]).useQuestImpression();
      const items = [questId, tmp, launchMobileActivity, questImpression, sourceQuestContent];
      return questImpression.useCallback(
        asyncGeneratorStep(async () => {
          if (dependencyMap === 2) {
            dependencyMap = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              dependencyMap = 2;
              if (0 === c1) {
                if (arg0 === 1) {
                  dependencyMap = 3;
                  throw value;
                } else if (arg0 === 2) {
                  dependencyMap = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  closure_3();
                  c1 = 1;
                  dependencyMap = 1;
                  const obj4 = { value: launchMobileActivity(), done: false };
                  return obj4;
                }
              } else if (arg0 === 1) {
                dependencyMap = 3;
                throw value;
              } else if (arg0 === 2) {
                dependencyMap = 3;
                const obj5 = { value, done: true };
                return obj5;
              } else {
                const obj7 = {
                  type: tmp4(9610).AdUserActionType.CLICK_INTERNAL,
                  adCreativeType: tmp4(6752).AdCreativeType.QUEST,
                  adCreativeId: closure_128_0,
                  questContentCTA: tmp4(7836).QuestContentCTA.LAUNCH_MOBILE_ACTIVITY,
                  surfaceId: tmp4(6748).QuestContent.QUEST_BOTTOM_SHEET,
                  sourceQuestContent: closure_128_1,
                  impressionId: null,
                  questContentPosition: null,
                };
                let id;
                if (closure_128_4 != null) {
                  id = closure_128_4.getId();
                }
                obj7.impressionId = id;
                let questContentPosition;
                if (closure_128_4 != null) {
                  questContentPosition = closure_128_4.getQuestContentPosition();
                }
                obj7.questContentPosition = questContentPosition;
                tmp4(9607).captureAdUserAction(obj7);
                dependencyMap = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp12) {
              dependencyMap = tmp;
              throw tmp12;
            }
          }
        }),
        items,
      );
    };
