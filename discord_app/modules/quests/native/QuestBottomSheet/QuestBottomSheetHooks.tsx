// discord_app/modules/quests/native/QuestBottomSheet/QuestBottomSheetHooks.tsx
import ACTION_SHEET_HEIGHT_HALF from "ACTION_SHEET_HEIGHT_HALF";
import noop from "noop";
import { QuestDockMode } from "QuestsExperimentLocations";

const require = arg1;
let result = require("QuestsExperimentLocations").fileFinishedImporting("modules/quests/native/QuestBottomSheet/QuestBottomSheetHooks.tsx");

export const useWatchTaskPressHandler = function useWatchTaskPressHandler(questId) {
  questId = questId.questId;
  let setRestingQuestDockMode = questId;
  const sourceQuestContent = questId.sourceQuestContent;
  let isInQuestBottomSheet = sourceQuestContent;
  setRestingQuestDockMode = undefined;
  isInQuestBottomSheet = undefined;
  setRestingQuestDockMode = React.useContext(setRestingQuestDockMode(callback[3]).QuestDockExternalCoordinationContext).setRestingQuestDockMode;
  isInQuestBottomSheet = React.useContext(setRestingQuestDockMode(callback[4]).QuestBottomSheetContext).isInQuestBottomSheet;
  const items = [isInQuestBottomSheet, setRestingQuestDockMode];
  callback = React.useCallback(() => {
    if (isInQuestBottomSheet) {
      isInQuestBottomSheet(launchMobileActivity[5]).hideActionSheet("QuestBottomSheet");
      const obj = isInQuestBottomSheet(launchMobileActivity[5]);
    } else {
      setRestingQuestDockMode(outer1_5.COLLAPSED);
    }
  }, items);
  const questImpression = setRestingQuestDockMode(callback[6]).useQuestImpression();
  const items1 = [questId, callback, questImpression, sourceQuestContent];
  return React.useCallback(() => {
    callback();
    let obj = { questId: setRestingQuestDockMode, questContentPosition: null, sourceQuestContent: null };
    let questContentPosition;
    if (questImpression != null) {
      questContentPosition = obj2.getQuestContentPosition();
    }
    obj[1] = questContentPosition;
    obj[2] = isInQuestBottomSheet;
    isInQuestBottomSheet(callback[7])(obj);
    const tmp3 = isInQuestBottomSheet(callback[7]);
    if (obj3.shouldMigrateToAdAnalyticsInterface(setRestingQuestDockMode(callback[8]).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_bottom_sheet_watch_task")) {
      let tmp8Result = tmp8(tmp2[9]);
      obj = { type: null, adCreativeType: null, adCreativeId: null, questContentCTA: null, surfaceId: null, sourceQuestContent: null, impressionId: null, questContentPosition: null };
      obj[0] = tmp8(tmp2[10]).AdUserActionType.CLICK_INTERNAL;
      obj[1] = tmp8(tmp2[11]).AdCreativeType.QUEST;
      obj[2] = tmp4;
      obj[3] = tmp8(tmp2[12]).QuestContentCTA.WATCH_VIDEO;
      obj[4] = tmp8(tmp2[13]).QuestContent.QUEST_BOTTOM_SHEET;
      obj[5] = tmp6;
      let id;
      if (obj2 != null) {
        id = obj2.getId();
      }
      obj[6] = id;
      let questContentPosition1;
      if (obj2 != null) {
        questContentPosition1 = obj2.getQuestContentPosition();
      }
      obj[7] = questContentPosition1;
      tmp8Result.captureAdUserAction(obj);
    } else {
      tmp8Result = tmp8(tmp2[14]);
      obj = { questId: null, questContent: null, questContentCTA: null, questContentPosition: null, impressionId: null, sourceQuestContent: null };
      obj[0] = tmp4;
      obj[1] = tmp8(tmp2[13]).QuestContent.QUEST_BOTTOM_SHEET;
      obj[2] = tmp8(tmp2[12]).QuestContentCTA.WATCH_VIDEO;
      let questContentPosition2;
      if (obj2 != null) {
        questContentPosition2 = obj2.getQuestContentPosition();
      }
      obj[3] = questContentPosition2;
      let id1;
      if (obj2 != null) {
        id1 = obj2.getId();
      }
      obj[4] = id1;
      obj[5] = tmp6;
      const result = tmp8Result.trackQuestContentClicked(obj);
    }
  }, items1);
};
export const useMobileActivityPressHandler = function useMobileActivityPressHandler(questId) {
  questId = questId.questId;
  let setRestingQuestDockMode = questId;
  const sourceQuestContent = questId.sourceQuestContent;
  let isInQuestBottomSheet = sourceQuestContent;
  const launchMobileActivity = questId.launchMobileActivity;
  setRestingQuestDockMode = undefined;
  isInQuestBottomSheet = undefined;
  setRestingQuestDockMode = questImpression.useContext(setRestingQuestDockMode(launchMobileActivity[3]).QuestDockExternalCoordinationContext).setRestingQuestDockMode;
  isInQuestBottomSheet = questImpression.useContext(setRestingQuestDockMode(launchMobileActivity[4]).QuestBottomSheetContext).isInQuestBottomSheet;
  const items = [isInQuestBottomSheet, setRestingQuestDockMode];
  const callback = questImpression.useCallback(() => {
    if (isInQuestBottomSheet) {
      isInQuestBottomSheet(launchMobileActivity[5]).hideActionSheet("QuestBottomSheet");
      const obj = isInQuestBottomSheet(launchMobileActivity[5]);
    } else {
      setRestingQuestDockMode(outer1_5.COLLAPSED);
    }
  }, items);
  questImpression = setRestingQuestDockMode(launchMobileActivity[6]).useQuestImpression();
  const items1 = [questId, callback, launchMobileActivity, questImpression, sourceQuestContent];
  return questImpression.useCallback(callback(function*() {
    if (dependencyMap === 2) {
      dependencyMap = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
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
            throw arg1;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_0 = tmp4;
            outer1_3();
            c1 = 1;
            dependencyMap = 1;
            const obj1 = { value: null, done: false };
            obj1[0] = dependencyMap();
            return obj1;
          }
        } else if (arg0 === 1) {
          dependencyMap = 3;
          throw arg1;
        } else if (arg0 === 2) {
          dependencyMap = 3;
          let obj2 = { value: null, done: true };
          obj2[0] = arg1;
          return obj2;
        } else {
          let captureAdUserAction = outer1_0;
          if (obj12.shouldMigrateToAdAnalyticsInterface(outer1_0(8455).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_bottom_sheet_mobile_activity")) {
            captureAdUserAction = captureAdUserAction(8456).captureAdUserAction;
            let obj3 = { type: null, adCreativeType: null, adCreativeId: null, questContentCTA: null, surfaceId: null, sourceQuestContent: null, impressionId: null, questContentPosition: null };
            obj3[0] = outer1_0(8460).AdUserActionType.CLICK_INTERNAL;
            obj3[1] = outer1_0(6017).AdCreativeType.QUEST;
            obj3[2] = closure_0;
            obj3[3] = outer1_0(6016).QuestContentCTA.LAUNCH_MOBILE_ACTIVITY;
            obj3[4] = outer1_0(5040).QuestContent.QUEST_BOTTOM_SHEET;
            obj3[5] = c1;
            let id;
            if (noop != null) {
              id = obj6.getId();
            }
            obj3[6] = id;
            let questContentPosition;
            if (outer1_4 != null) {
              questContentPosition = obj7.getQuestContentPosition();
            }
            obj3[7] = questContentPosition;
            captureAdUserAction(obj3);
            const captureAdUserActionResult = captureAdUserAction(8456);
            obj6 = noop;
            obj7 = outer1_4;
          } else {
            const obj4 = { questId: null, questContent: null, questContentCTA: null, questContentPosition: null, impressionId: null, sourceQuestContent: null };
            obj4[0] = closure_0;
            obj4[1] = outer1_0(5040).QuestContent.QUEST_BOTTOM_SHEET;
            obj4[2] = outer1_0(6016).QuestContentCTA.LAUNCH_MOBILE_ACTIVITY;
            obj2 = noop;
            let questContentPosition1;
            if (noop != null) {
              questContentPosition1 = obj2.getQuestContentPosition();
            }
            obj4[3] = questContentPosition1;
            obj3 = noop;
            let id1;
            if (noop != null) {
              id1 = obj3.getId();
            }
            obj4[4] = id1;
            obj4[5] = c1;
            const result = captureAdUserAction(6006).trackQuestContentClicked(obj4);
            const captureAdUserActionResult2 = captureAdUserAction(6006);
          }
          dependencyMap = 3;
          obj12 = outer1_0(8455);
        }
      } catch (tmp36) {
        dependencyMap = tmp;
        throw tmp36;
      }
    }
  }), items1);
};