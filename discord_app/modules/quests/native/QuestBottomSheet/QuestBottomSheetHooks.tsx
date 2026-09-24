// === Module 15459: QuestBottomSheetHooks ===

// Module 15459 (QuestBottomSheetHooks)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4796 */;
import QuestTypes from "QuestTypes" /* 5752 */;
import AdCreativeType from "AdCreativeType" /* 5756 */;
import AnalyticsActions from "AnalyticsActions" /* 8041 */;
import AnalyticsTypes from "AnalyticsTypes" /* 8051 */;
import captureAdUserAction2 from "captureAdUserAction" /* 8052 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 8062 */;
import AdAnalyticsInterfaceExperiment from "AdAnalyticsInterfaceExperiment" /* 8063 */;
import openVideoQuestModalDefault from "openVideoQuestModal" /* 15460 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

require = fn;
const QuestDockMode = fn(5749).QuestDockMode;
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestBottomSheet/QuestBottomSheetHooks.tsx");

export const useWatchTaskPressHandler = function useWatchTaskPressHandler(questId) {
  questId = questId.questId;
  const sourceQuestContent = questId.sourceQuestContent;
  const setRestingQuestDockMode = noop.useContext(questId(callback[3]).QuestDockExternalCoordinationContext).setRestingQuestDockMode;
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
    const obj = { questId, questContentPosition: null, sourceQuestContent: null };
    let questContentPosition;
    if (questImpression != null) {
      questContentPosition = questImpression.getQuestContentPosition();
    }
    obj.questContentPosition = questContentPosition;
    obj.sourceQuestContent = sourceQuestContent;
    openVideoQuestModalDefault(obj);
    if (obj3.shouldMigrateToAdAnalyticsInterface(AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_bottom_sheet_watch_task")) {
      const obj4 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: questId, questContentCTA: AnalyticsTypes.QuestContentCTA.WATCH_VIDEO, surfaceId: QuestTypes.QuestContent.QUEST_BOTTOM_SHEET, sourceQuestContent, impressionId: null, questContentPosition: null };
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
      captureAdUserAction2.captureAdUserAction(obj4);
      const tmp8Result = captureAdUserAction2;
    } else {
      const obj5 = { questId, questContent: QuestTypes.QuestContent.QUEST_BOTTOM_SHEET, questContentCTA: AnalyticsTypes.QuestContentCTA.WATCH_VIDEO, questContentPosition: null, impressionId: null, sourceQuestContent: null };
      let questContentPosition2;
      if (questImpression != null) {
        questContentPosition2 = questImpression.getQuestContentPosition();
      }
      obj5.questContentPosition = questContentPosition2;
      let id1;
      if (questImpression != null) {
        id1 = questImpression.getId();
      }
      obj5.impressionId = id1;
      obj5.sourceQuestContent = sourceQuestContent;
      const result = AnalyticsActions.trackQuestContentClicked(obj5);
      const tmp8Result2 = AnalyticsActions;
    }
    obj3 = AdAnalyticsInterfaceExperiment;
  }, items1);
};
export const useMobileActivityPressHandler = function useMobileActivityPressHandler(questId) {
  questId = questId.questId;
  const sourceQuestContent = questId.sourceQuestContent;
  const launchMobileActivity = questId.launchMobileActivity;
  const setRestingQuestDockMode = questImpression.useContext(questId(launchMobileActivity[3]).QuestDockExternalCoordinationContext).setRestingQuestDockMode;
  closure_129_0 = setRestingQuestDockMode;
  const isInQuestBottomSheet = questImpression.useContext(questId(launchMobileActivity[4]).QuestBottomSheetContext).isInQuestBottomSheet;
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
  return questImpression.useCallback(callback(function*() {
    if (dependencyMap === 2) {
      dependencyMap = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj = { value, done: true };
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
            const obj2 = { value, done: true };
            return obj2;
          } else {
            callback();
            c1 = 1;
            dependencyMap = 1;
            const obj5 = { value: launchMobileActivity(), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          dependencyMap = 3;
          throw value;
        } else if (arg0 === 2) {
          dependencyMap = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          let captureAdUserAction = tmp4;
          if (obj12.shouldMigrateToAdAnalyticsInterface(tmp4(8063).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_bottom_sheet_mobile_activity")) {
            captureAdUserAction = captureAdUserAction(8052).captureAdUserAction;
            const obj9 = { type: tmp4(8062).AdUserActionType.CLICK_INTERNAL, adCreativeType: tmp4(5756).AdCreativeType.QUEST, adCreativeId: closure_128_0, questContentCTA: tmp4(8051).QuestContentCTA.LAUNCH_MOBILE_ACTIVITY, surfaceId: tmp4(5752).QuestContent.QUEST_BOTTOM_SHEET, sourceQuestContent: closure_128_1, impressionId: null, questContentPosition: null };
            let id;
            if (closure_128_4 != null) {
              id = closure_128_4.getId();
            }
            obj9.impressionId = id;
            let questContentPosition;
            if (closure_128_4 != null) {
              questContentPosition = closure_128_4.getQuestContentPosition();
            }
            obj9.questContentPosition = questContentPosition;
            captureAdUserAction(obj9);
            const captureAdUserActionResult = captureAdUserAction(8052);
          } else {
            const obj10 = { questId: closure_128_0, questContent: tmp4(5752).QuestContent.QUEST_BOTTOM_SHEET, questContentCTA: tmp4(8051).QuestContentCTA.LAUNCH_MOBILE_ACTIVITY, questContentPosition: null, impressionId: null, sourceQuestContent: null };
            let questContentPosition1;
            if (closure_128_4 != null) {
              questContentPosition1 = closure_128_4.getQuestContentPosition();
            }
            obj10.questContentPosition = questContentPosition1;
            let id1;
            if (closure_128_4 != null) {
              id1 = closure_128_4.getId();
            }
            obj10.impressionId = id1;
            obj10.sourceQuestContent = closure_128_1;
            const result = captureAdUserAction(8041).trackQuestContentClicked(obj10);
            const captureAdUserActionResult2 = captureAdUserAction(8041);
          }
          dependencyMap = 3;
          obj12 = tmp4(8063);
        }
      } catch (tmp36) {
        dependencyMap = tmp;
        throw tmp36;
      }
    }
  }), items1);
};