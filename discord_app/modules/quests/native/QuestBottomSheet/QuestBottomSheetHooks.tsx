// === Module 14927: QuestBottomSheetHooks ===

// Module 14927 (QuestBottomSheetHooks)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import QuestConstants from "QuestConstants" /* 5623 */;
import QuestTypes from "QuestTypes" /* 5626 */;
import AdCreativeType from "AdCreativeType" /* 5630 */;
import AnalyticsActions from "AnalyticsActions" /* 7202 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7212 */;
import captureAdUserAction2 from "captureAdUserAction" /* 7213 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 7223 */;
import AdAnalyticsInterfaceExperiment from "AdAnalyticsInterfaceExperiment" /* 7224 */;
import openVideoQuestModalDefault from "openVideoQuestModal" /* 14928 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c1, dependencyMap, questId;

let _asyncToGenerator = _asyncToGenerator_mod;
const QuestDockMode = QuestConstants.QuestDockMode;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_6 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let setRestingQuestDockMode;
  let obj = setRestingQuestDockMode(576);
  const cResult = obj.c(3);
  setRestingQuestDockMode = react.useContext(setRestingQuestDockMode(14900).QuestDockExternalCoordinationContext).setRestingQuestDockMode;
  const isInQuestBottomSheet = react.useContext(setRestingQuestDockMode(14923).QuestBottomSheetContext).isInQuestBottomSheet;
  if (cResult[0] === isInQuestBottomSheet) {
    let tmp2;
    if (cResult[1] === setRestingQuestDockMode) {
      tmp2 = cResult[2];
    }
    return tmp2;
  }
  const fn = function t() {
    if (isInQuestBottomSheet) {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet("QuestBottomSheet");
    } else {
      setRestingQuestDockMode(QuestDockMode.COLLAPSED);
    }
  };
  cResult[0] = isInQuestBottomSheet;
  cResult[1] = setRestingQuestDockMode;
  cResult[2] = fn;
  tmp2 = fn;
}) : (() => {
  let setRestingQuestDockMode;
  setRestingQuestDockMode = react.useContext(setRestingQuestDockMode(14900).QuestDockExternalCoordinationContext).setRestingQuestDockMode;
  const isInQuestBottomSheet = react.useContext(setRestingQuestDockMode(14923).QuestBottomSheetContext).isInQuestBottomSheet;
  const items = [isInQuestBottomSheet, setRestingQuestDockMode];
  return react.useCallback(() => {
    if (isInQuestBottomSheet) {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet("QuestBottomSheet");
    } else {
      setRestingQuestDockMode(QuestDockMode.COLLAPSED);
    }
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((questId) => {
  let closure_2;
  let obj = questId(576);
  const cResult = obj.c(5);
  questId = questId.questId;
  const sourceQuestContent = questId.sourceQuestContent;
  const tmp2 = closure_6();
  dependencyMap = tmp2;
  const obj2 = questId(10916);
  const questImpression = obj2.useQuestImpression();
  if (cResult[0] === tmp2) {
    if (cResult[1] === questImpression) {
      if (cResult[2] === questId) {
        let tmp4;
        if (cResult[3] === sourceQuestContent) {
          tmp4 = cResult[4];
        }
        return tmp4;
      }
    }
  }
  const fn = function n() {
    let id;
    let id1;
    let questContentPosition;
    let questContentPosition1;
    let questContentPosition2;
    closure_2();
    const obj = { questId, questContentPosition, sourceQuestContent };
    questContentPosition = undefined;
    const tmp3 = openVideoQuestModalDefault;
    if (questImpression != null) {
      questContentPosition = questImpression.getQuestContentPosition();
    }
    tmp3(obj);
    const obj3 = AdAnalyticsInterfaceExperiment;
    if (obj3.shouldMigrateToAdAnalyticsInterface(AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_bottom_sheet_watch_task")) {
      const obj4 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: questId, questContentCTA: AnalyticsTypes.QuestContentCTA.WATCH_VIDEO, surfaceId: QuestTypes.QuestContent.QUEST_BOTTOM_SHEET, sourceQuestContent, impressionId: id, questContentPosition: questContentPosition1 };
      const captureAdUserAction = captureAdUserAction2.captureAdUserAction;
      captureAdUserAction2;
      id = undefined;
      if (questImpression != null) {
        id = questImpression.getId();
      }
      questContentPosition1 = undefined;
      if (questImpression != null) {
        questContentPosition1 = questImpression.getQuestContentPosition();
      }
      captureAdUserAction(obj4);
    } else {
      const obj5 = { questId, questContent: QuestTypes.QuestContent.QUEST_BOTTOM_SHEET, questContentCTA: AnalyticsTypes.QuestContentCTA.WATCH_VIDEO, questContentPosition: questContentPosition2, impressionId: id1, sourceQuestContent };
      const trackQuestContentClicked = AnalyticsActions.trackQuestContentClicked;
      AnalyticsActions;
      questContentPosition2 = undefined;
      if (questImpression != null) {
        questContentPosition2 = questImpression.getQuestContentPosition();
      }
      id1 = undefined;
      if (questImpression != null) {
        id1 = questImpression.getId();
      }
      const result = trackQuestContentClicked(obj5);
    }
  };
  cResult[0] = tmp2;
  cResult[1] = questImpression;
  cResult[2] = questId;
  cResult[3] = sourceQuestContent;
  cResult[4] = fn;
  tmp4 = fn;
}) : ((questId) => {
  let closure_2;
  questId = questId.questId;
  const sourceQuestContent = questId.sourceQuestContent;
  const tmp = closure_6();
  dependencyMap = tmp;
  let obj = questId(10916);
  const questImpression = obj.useQuestImpression();
  const items = [questId, tmp, questImpression, sourceQuestContent];
  return react.useCallback(() => {
    let id;
    let id1;
    let questContentPosition;
    let questContentPosition1;
    let questContentPosition2;
    closure_2();
    const obj = { questId, questContentPosition, sourceQuestContent };
    questContentPosition = undefined;
    const tmp3 = openVideoQuestModalDefault;
    if (questImpression != null) {
      questContentPosition = questImpression.getQuestContentPosition();
    }
    tmp3(obj);
    const obj3 = AdAnalyticsInterfaceExperiment;
    if (obj3.shouldMigrateToAdAnalyticsInterface(AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_bottom_sheet_watch_task")) {
      const obj4 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: questId, questContentCTA: AnalyticsTypes.QuestContentCTA.WATCH_VIDEO, surfaceId: QuestTypes.QuestContent.QUEST_BOTTOM_SHEET, sourceQuestContent, impressionId: id, questContentPosition: questContentPosition1 };
      const captureAdUserAction = captureAdUserAction2.captureAdUserAction;
      captureAdUserAction2;
      id = undefined;
      if (questImpression != null) {
        id = questImpression.getId();
      }
      questContentPosition1 = undefined;
      if (questImpression != null) {
        questContentPosition1 = questImpression.getQuestContentPosition();
      }
      captureAdUserAction(obj4);
    } else {
      const obj5 = { questId, questContent: QuestTypes.QuestContent.QUEST_BOTTOM_SHEET, questContentCTA: AnalyticsTypes.QuestContentCTA.WATCH_VIDEO, questContentPosition: questContentPosition2, impressionId: id1, sourceQuestContent };
      const trackQuestContentClicked = AnalyticsActions.trackQuestContentClicked;
      AnalyticsActions;
      questContentPosition2 = undefined;
      if (questImpression != null) {
        questContentPosition2 = questImpression.getQuestContentPosition();
      }
      id1 = undefined;
      if (questImpression != null) {
        id1 = questImpression.getId();
      }
      const result = trackQuestContentClicked(obj5);
    }
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((questId) => {
  let closure_3;
  let launchMobileActivity;
  let obj = questId(launchMobileActivity[4]);
  const cResult = obj.c(6);
  questId = questId.questId;
  let sourceQuestContent = questId.sourceQuestContent;
  launchMobileActivity = questId.launchMobileActivity;
  const tmp2 = closure_6();
  _asyncToGenerator = tmp2;
  const obj2 = questId(launchMobileActivity[8]);
  const questImpression = obj2.useQuestImpression();
  if (cResult[0] === tmp2) {
    if (cResult[1] === questImpression) {
      if (cResult[2] === launchMobileActivity) {
        if (cResult[3] === questId) {
          let tmp4;
          if (cResult[4] === sourceQuestContent) {
            tmp4 = cResult[5];
          }
          return tmp4;
        }
      }
    }
  }
  let closure_0 = _asyncToGenerator(async () => {
    let id;
    let id1;
    let questContentPosition;
    let questContentPosition1;
    let v3;
    if (v3 === 2) {
      v3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj4 = { value, done: true };
        return obj4;
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
            const obj7 = { value, done: true };
            return obj7;
          } else {
            closure_1_3();
            sourceQuestContent = 1;
            v3 = 1;
            const obj8 = { value: v3(), done: false };
            return obj8;
          }
        } else if (arg0 === 1) {
          v3 = 3;
          throw value;
        } else if (arg0 === 2) {
          v3 = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          const obj11 = tmp3(launchMobileActivity[10]);
          if (obj11.shouldMigrateToAdAnalyticsInterface(tmp3(launchMobileActivity[10]).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_bottom_sheet_mobile_activity")) {
            const obj10 = { type: tmp3(launchMobileActivity[12]).AdUserActionType.CLICK_INTERNAL, adCreativeType: tmp3(launchMobileActivity[13]).AdCreativeType.QUEST, adCreativeId: tmp3, questContentCTA: tmp3(launchMobileActivity[14]).QuestContentCTA.LAUNCH_MOBILE_ACTIVITY, surfaceId: tmp3(launchMobileActivity[15]).QuestContent.QUEST_BOTTOM_SHEET, sourceQuestContent, impressionId: id, questContentPosition };
            const captureAdUserAction = tmp3(launchMobileActivity[11]).captureAdUserAction;
            const tmp46Result = tmp3(launchMobileActivity[11]);
            id = undefined;
            if (questImpression != null) {
              id = questImpression.getId();
            }
            questContentPosition = undefined;
            if (questImpression != null) {
              questContentPosition = questImpression.getQuestContentPosition();
            }
            captureAdUserAction(obj10);
          } else {
            const obj = { questId: tmp3, questContent: tmp3(launchMobileActivity[15]).QuestContent.QUEST_BOTTOM_SHEET, questContentCTA: tmp3(launchMobileActivity[14]).QuestContentCTA.LAUNCH_MOBILE_ACTIVITY, questContentPosition: questContentPosition1, impressionId: id1, sourceQuestContent };
            const trackQuestContentClicked = tmp3(launchMobileActivity[16]).trackQuestContentClicked;
            const tmp4 = tmp3(launchMobileActivity[16]);
            questContentPosition1 = undefined;
            if (questImpression != null) {
              questContentPosition1 = questImpression.getQuestContentPosition();
            }
            id1 = undefined;
            if (questImpression != null) {
              id1 = questImpression.getId();
            }
            const result = trackQuestContentClicked(obj);
          }
          v3 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp36) {
        v3 = 3;
        throw tmp36;
      }
    }
  });
  const fn = function() {
    return closure_0(...arguments);
  };
  cResult[0] = tmp2;
  cResult[1] = questImpression;
  cResult[2] = launchMobileActivity;
  cResult[3] = questId;
  cResult[4] = sourceQuestContent;
  cResult[5] = fn;
  tmp4 = fn;
}) : ((questId) => {
  let closure_3;
  questId = questId.questId;
  const sourceQuestContent = questId.sourceQuestContent;
  let launchMobileActivity = questId.launchMobileActivity;
  const tmp = closure_6();
  _asyncToGenerator = tmp;
  let obj = questId(launchMobileActivity[8]);
  const questImpression = obj.useQuestImpression();
  const items = [questId, tmp, launchMobileActivity, questImpression, sourceQuestContent];
  return questImpression.useCallback(_asyncToGenerator(async () => {
    let c2;
    let closure_0;
    let id;
    let id1;
    let questContentPosition;
    let questContentPosition1;
    if (launchMobileActivity === 2) {
      launchMobileActivity = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj4 = { value, done: true };
        return obj4;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        launchMobileActivity = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            launchMobileActivity = 3;
            throw value;
          } else if (arg0 === 2) {
            launchMobileActivity = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            closure_3();
            c1 = 1;
            launchMobileActivity = 1;
            const obj8 = { value: launchMobileActivity(), done: false };
            return obj8;
          }
        } else if (arg0 === 1) {
          launchMobileActivity = 3;
          throw value;
        } else if (arg0 === 2) {
          launchMobileActivity = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          const obj11 = tmp3(launchMobileActivity[10]);
          if (obj11.shouldMigrateToAdAnalyticsInterface(tmp3(launchMobileActivity[10]).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_bottom_sheet_mobile_activity")) {
            const obj10 = { type: tmp3(launchMobileActivity[12]).AdUserActionType.CLICK_INTERNAL, adCreativeType: tmp3(launchMobileActivity[13]).AdCreativeType.QUEST, adCreativeId: closure_128_0, questContentCTA: tmp3(launchMobileActivity[14]).QuestContentCTA.LAUNCH_MOBILE_ACTIVITY, surfaceId: tmp3(launchMobileActivity[15]).QuestContent.QUEST_BOTTOM_SHEET, sourceQuestContent: closure_128_1, impressionId: id, questContentPosition };
            const captureAdUserAction = tmp3(launchMobileActivity[11]).captureAdUserAction;
            const tmp46Result = tmp3(launchMobileActivity[11]);
            id = undefined;
            if (closure_128_4 != null) {
              id = closure_128_4.getId();
            }
            questContentPosition = undefined;
            if (closure_128_4 != null) {
              questContentPosition = closure_128_4.getQuestContentPosition();
            }
            captureAdUserAction(obj10);
          } else {
            const obj = { questId: closure_128_0, questContent: tmp3(launchMobileActivity[15]).QuestContent.QUEST_BOTTOM_SHEET, questContentCTA: tmp3(launchMobileActivity[14]).QuestContentCTA.LAUNCH_MOBILE_ACTIVITY, questContentPosition: questContentPosition1, impressionId: id1, sourceQuestContent: closure_128_1 };
            const trackQuestContentClicked = tmp3(launchMobileActivity[16]).trackQuestContentClicked;
            const tmp4 = tmp3(launchMobileActivity[16]);
            questContentPosition1 = undefined;
            if (closure_128_4 != null) {
              questContentPosition1 = closure_128_4.getQuestContentPosition();
            }
            id1 = undefined;
            if (closure_128_4 != null) {
              id1 = closure_128_4.getId();
            }
            const result = trackQuestContentClicked(obj);
          }
          launchMobileActivity = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp36) {
        launchMobileActivity = 3;
        throw tmp36;
      }
    }
  }), items);
});
let result = size.fileFinishedImporting("modules/quests/native/QuestBottomSheet/QuestBottomSheetHooks.tsx");

export const useWatchTaskPressHandler = tmp2;
export const useMobileActivityPressHandler = tmp3;