// discord_app/modules/quests/native/QuestBottomSheet/QuestBottomSheetHooks.tsx
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import AdAnalyticsInterfaceExperiment from "../../experiments/AdAnalyticsInterfaceExperiment.tsx";
import openVideoQuestModalDefault from "../VideoQuestModal/openVideoQuestModal.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const QuestDockMode = fn(5444).QuestDockMode;
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestBottomSheet/QuestBottomSheetHooks.tsx");

export const useWatchTaskPressHandler = function useWatchTaskPressHandler(questId) {
  questId = questId.questId;
  const sourceQuestContent = questId.sourceQuestContent;
  const setRestingQuestDockMode = noop.useContext(
    questId(callback[3]).QuestDockExternalCoordinationContext,
  ).setRestingQuestDockMode;
  closure_129_0 = setRestingQuestDockMode;
  const isInQuestBottomSheet = noop.useContext(questId(callback[4]).QuestBottomSheetContext).isInQuestBottomSheet;
  closure_129_1 = isInQuestBottomSheet;
  const items = [isInQuestBottomSheet, setRestingQuestDockMode];
  callback = noop.useCallback(() => {
    if (sourceQuestContent) {
      ActionSheetActionCreatorsDefault.hideActionSheet("QuestBottomSheet");
    } else {
      questId(QuestDockMode.COLLAPSED);
    }
  }, items);
  const questImpression = questId(callback[6]).useQuestImpression();
  const items1 = [questId, callback, questImpression, sourceQuestContent];
  return noop.useCallback(() => {
    callback();
    let obj = { questId, questContentPosition: null, sourceQuestContent: null };
    let questContentPosition;
    if (questImpression != null) {
      questContentPosition = obj2.getQuestContentPosition();
    }
    obj.questContentPosition = questContentPosition;
    obj.sourceQuestContent = sourceQuestContent;
    openVideoQuestModalDefault(obj);
    if (
      obj3.shouldMigrateToAdAnalyticsInterface(
        AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL,
        "quest_bottom_sheet_watch_task",
      )
    ) {
      let tmp8Result = tmp8(11193);
      obj = {
        type: tmp8(11197).AdUserActionType.CLICK_INTERNAL,
        adCreativeType: tmp8(5451).AdCreativeType.QUEST,
        adCreativeId: tmp4,
        questContentCTA: tmp8(7728).QuestContentCTA.WATCH_VIDEO,
        surfaceId: tmp8(5447).QuestContent.QUEST_BOTTOM_SHEET,
        sourceQuestContent: tmp6,
        impressionId: null,
        questContentPosition: null,
      };
      let id;
      if (obj2 != null) {
        id = obj2.getId();
      }
      obj.impressionId = id;
      let questContentPosition1;
      if (obj2 != null) {
        questContentPosition1 = obj2.getQuestContentPosition();
      }
      obj.questContentPosition = questContentPosition1;
      tmp8Result.captureAdUserAction(obj);
    } else {
      tmp8Result = tmp8(7718);
      obj = {
        questId: tmp4,
        questContent: tmp8(5447).QuestContent.QUEST_BOTTOM_SHEET,
        questContentCTA: tmp8(7728).QuestContentCTA.WATCH_VIDEO,
        questContentPosition: null,
        impressionId: null,
        sourceQuestContent: null,
      };
      let questContentPosition2;
      if (obj2 != null) {
        questContentPosition2 = obj2.getQuestContentPosition();
      }
      obj.questContentPosition = questContentPosition2;
      let id1;
      if (obj2 != null) {
        id1 = obj2.getId();
      }
      obj.impressionId = id1;
      obj.sourceQuestContent = tmp6;
      const result = tmp8Result.trackQuestContentClicked(obj);
    }
  }, items1);
};
export const useMobileActivityPressHandler = function useMobileActivityPressHandler(questId) {
  questId = questId.questId;
  const sourceQuestContent = questId.sourceQuestContent;
  const launchMobileActivity = questId.launchMobileActivity;
  const setRestingQuestDockMode = questImpression.useContext(
    questId(launchMobileActivity[3]).QuestDockExternalCoordinationContext,
  ).setRestingQuestDockMode;
  closure_129_0 = setRestingQuestDockMode;
  const isInQuestBottomSheet = questImpression.useContext(
    questId(launchMobileActivity[4]).QuestBottomSheetContext,
  ).isInQuestBottomSheet;
  closure_129_1 = isInQuestBottomSheet;
  const items = [isInQuestBottomSheet, setRestingQuestDockMode];
  const callback = questImpression.useCallback(() => {
    if (sourceQuestContent) {
      ActionSheetActionCreatorsDefault.hideActionSheet("QuestBottomSheet");
    } else {
      questId(QuestDockMode.COLLAPSED);
    }
  }, items);
  questImpression = questId(launchMobileActivity[6]).useQuestImpression();
  const items1 = [questId, callback, launchMobileActivity, questImpression, sourceQuestContent];
  return questImpression.useCallback(
    callback(function* (arg0, value) {
      if (dependencyMap === 2) {
        dependencyMap = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
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
              obj = { value, done: true };
              return obj;
            } else {
              callback();
              c1 = 1;
              dependencyMap = 1;
              const obj1 = { value: launchMobileActivity(), done: false };
              return obj1;
            }
          } else if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            let obj2 = { value, done: true };
            return obj2;
          } else {
            let captureAdUserAction = tmp4;
            if (
              obj12.shouldMigrateToAdAnalyticsInterface(
                tmp4(11192).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL,
                "quest_bottom_sheet_mobile_activity",
              )
            ) {
              captureAdUserAction = captureAdUserAction(11193).captureAdUserAction;
              let obj3 = {
                type: tmp4(11197).AdUserActionType.CLICK_INTERNAL,
                adCreativeType: tmp4(5451).AdCreativeType.QUEST,
                adCreativeId: closure_128_0,
                questContentCTA: tmp4(7728).QuestContentCTA.LAUNCH_MOBILE_ACTIVITY,
                surfaceId: tmp4(5447).QuestContent.QUEST_BOTTOM_SHEET,
                sourceQuestContent: closure_128_1,
                impressionId: null,
                questContentPosition: null,
              };
              let id;
              if (closure_128_4 != null) {
                id = obj6.getId();
              }
              obj3.impressionId = id;
              let questContentPosition;
              if (closure_128_4 != null) {
                questContentPosition = obj7.getQuestContentPosition();
              }
              obj3.questContentPosition = questContentPosition;
              captureAdUserAction(obj3);
              const captureAdUserActionResult = captureAdUserAction(11193);
              obj6 = closure_128_4;
              obj7 = closure_128_4;
            } else {
              const obj4 = {
                questId: closure_128_0,
                questContent: tmp4(5447).QuestContent.QUEST_BOTTOM_SHEET,
                questContentCTA: tmp4(7728).QuestContentCTA.LAUNCH_MOBILE_ACTIVITY,
                questContentPosition: null,
                impressionId: null,
                sourceQuestContent: null,
              };
              obj2 = closure_128_4;
              let questContentPosition1;
              if (closure_128_4 != null) {
                questContentPosition1 = obj2.getQuestContentPosition();
              }
              obj4.questContentPosition = questContentPosition1;
              obj3 = closure_128_4;
              let id1;
              if (closure_128_4 != null) {
                id1 = obj3.getId();
              }
              obj4.impressionId = id1;
              obj4.sourceQuestContent = closure_128_1;
              const result = captureAdUserAction(7718).trackQuestContentClicked(obj4);
              const captureAdUserActionResult2 = captureAdUserAction(7718);
            }
            dependencyMap = 3;
            obj12 = tmp4(11192);
          }
        } catch (tmp36) {
          dependencyMap = tmp;
          throw tmp36;
        }
      }
    }),
    items1,
  );
};
