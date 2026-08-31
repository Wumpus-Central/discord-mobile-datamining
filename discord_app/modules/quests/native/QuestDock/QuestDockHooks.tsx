// === Module 14660: useQuestDockModeAnimatedReaction ===

// Module 14660 (useQuestDockModeAnimatedReaction)
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import closure_5 from "QuestDockMode" /* 14661 */;
import { QuestDockMode } from "QuestsExperimentLocations" /* 5355 */;
import QUEST_DOCK_COLLAPSED_HEIGHT from "QUEST_DOCK_COLLAPSED_HEIGHT" /* 14663 */;

const require = arg1;
({ QUEST_DOCK_CLOSED_HEIGHT: error, QUEST_DOCK_COLLAPSED_HEIGHT: closure_8, QUEST_DOCK_EXTERNAL_OFFSET_CLOSED: c9, QUEST_DOCK_EXTERNAL_OFFSET_COLLAPSED_WITH_YOU_BAR: c10, QUEST_DOCK_EXTERNAL_OFFSET_EXPANDED_WITH_YOU_BAR: unpackModuleId, QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED: closure_12 } = QUEST_DOCK_COLLAPSED_HEIGHT);
let closure_13 = { code: "function QuestDockHooksTsx1(){const{restingQuestDockMode,minExpandedContentHeight,windowDimensions,safeArea}=this.__closure;return{restingQuestDockMode:restingQuestDockMode.get(),minExpandedContentHeight:minExpandedContentHeight.get(),windowWidth:windowDimensions.get().width,windowHeight:windowDimensions.get().height,safeArea:safeArea.get()};}" };
let closure_14 = { code: "function QuestDockHooksTsx2(props,previous){const{cheapWorkletShallowEqual,QuestDockMode,runOnJS,setRestingQuestDockMode,questDockWrapperSpecs,getQuestDockCollapsedWidth,youBarHorizontalMargin,QUEST_DOCK_COLLAPSED_HEIGHT,activeQuestDockMode,getQuestDockClosedWidth,QUEST_DOCK_CLOSED_HEIGHT,getQuestDockExpandedHeightLimits,youBarHeight,QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED,getQuestDockExpandedWidth}=this.__closure;var _previous$restingQues;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{restingQuestDockMode:restingQuestDockMode,minExpandedContentHeight:minExpandedContentHeight,windowWidth:windowWidth,windowHeight:windowHeight,safeArea:safeArea}=props;switch(restingQuestDockMode){case QuestDockMode.RESET_TO_PREVIOUS:runOnJS(setRestingQuestDockMode)((_previous$restingQues=previous===null||previous===void 0?void 0:previous.restingQuestDockMode)!==null&&_previous$restingQues!==void 0?_previous$restingQues:QuestDockMode.COLLAPSED);return;case QuestDockMode.COLLAPSED:questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:0,width:getQuestDockCollapsedWidth(windowWidth,youBarHorizontalMargin,youBarHorizontalMargin),height:QUEST_DOCK_COLLAPSED_HEIGHT});activeQuestDockMode.set(QuestDockMode.COLLAPSED);break;case QuestDockMode.CLOSED:case QuestDockMode.SOFT_DISMISSED:questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:0,width:getQuestDockClosedWidth(windowWidth,youBarHorizontalMargin,youBarHorizontalMargin),height:QUEST_DOCK_CLOSED_HEIGHT});activeQuestDockMode.set(restingQuestDockMode);break;case QuestDockMode.EXPANDED:const minContentHeight=minExpandedContentHeight;const{minHeight:minHeight,maxHeight:maxHeight}=getQuestDockExpandedHeightLimits(windowHeight,safeArea.top,minContentHeight);const heightMidpoint=(maxHeight+minHeight)/2;let height;if(questDockWrapperSpecs.get().height<=QUEST_DOCK_COLLAPSED_HEIGHT){height=maxHeight;}else if(previous!=null&&questDockWrapperSpecs.get().height===getQuestDockExpandedHeightLimits(previous.windowHeight,previous.safeArea.top,minContentHeight).maxHeight){height=maxHeight;}else if(questDockWrapperSpecs.get().height>=heightMidpoint){height=maxHeight;}else{height=maxHeight;}questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:youBarHeight>0?youBarHeight:QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED,width:getQuestDockExpandedWidth(windowWidth,safeArea.left,safeArea.right),height:height});activeQuestDockMode.set(QuestDockMode.EXPANDED);break;}}" };
let result = require("set").fileFinishedImporting("modules/quests/native/QuestDock/QuestDockHooks.tsx");

export const useQuestDockModeAnimatedReaction = function useQuestDockModeAnimatedReaction() {
  const context = restingQuestDockMode.useContext(questDockWrapperSpecs(activeQuestDockMode[5]).QuestDockGestureContext);
  questDockWrapperSpecs = context.questDockWrapperSpecs;
  const windowDimensions = context.windowDimensions;
  activeQuestDockMode = context.activeQuestDockMode;
  const minExpandedContentHeight = context.minExpandedContentHeight;
  const context1 = restingQuestDockMode.useContext(questDockWrapperSpecs(activeQuestDockMode[6]).QuestDockExternalCoordinationContext);
  restingQuestDockMode = context1.restingQuestDockMode;
  const setRestingQuestDockMode = context1.setRestingQuestDockMode;
  const tmp3 = windowDimensions(activeQuestDockMode[7])();
  closure_6 = tmp3;
  let obj = questDockWrapperSpecs(activeQuestDockMode[8]);
  const youBarHorizontalMargin = obj.useYouBarHorizontalMargin();
  const youBarTotalHeight = questDockWrapperSpecs(activeQuestDockMode[9]).useYouBarTotalHeight();
  const obj2 = questDockWrapperSpecs(activeQuestDockMode[9]);
  const fn = function o() {
    return { restingQuestDockMode: restingQuestDockMode.get(), minExpandedContentHeight: minExpandedContentHeight.get(), windowWidth: windowDimensions.get().width, windowHeight: windowDimensions.get().height, safeArea: closure_6.get() };
  };
  fn.__closure = { restingQuestDockMode, minExpandedContentHeight, windowDimensions, safeArea: tmp3 };
  fn.__workletHash = 9502251090521;
  fn.__initData = closure_13;
  const fn2 = function t(safeAreaState, restingQuestDockMode) {
    let obj = questDockWrapperSpecs(activeQuestDockMode[11]);
    if (!obj.cheapWorkletShallowEqual(safeAreaState, restingQuestDockMode)) {
      ({ restingQuestDockMode, minExpandedContentHeight, windowWidth, safeArea } = safeAreaState);
      if (closure_6.RESET_TO_PREVIOUS === restingQuestDockMode) {
        let tmpResult = tmp(tmp2[10]);
        restingQuestDockMode = undefined;
        if (restingQuestDockMode != null) {
          restingQuestDockMode = restingQuestDockMode.restingQuestDockMode;
        }
        if (restingQuestDockMode == null) {
          restingQuestDockMode = tmp5.COLLAPSED;
        }
        tmpResult.runOnJS(setRestingQuestDockMode)(restingQuestDockMode);
      } else if (tmp5.COLLAPSED === restingQuestDockMode) {
        obj = {};
        const merged = Object.assign(questDockWrapperSpecs.get());
        obj.x = 0;
        obj.y = 0;
        tmpResult = tmp(tmp2[12]);
        obj.width = tmpResult.getQuestDockCollapsedWidth(windowWidth, youBarHorizontalMargin, youBarHorizontalMargin);
        obj.height = youBarTotalHeight;
        const result = questDockWrapperSpecs.set(obj);
        const result1 = activeQuestDockMode.set(tmp5.COLLAPSED);
      } else {
        if (tmp5.CLOSED !== restingQuestDockMode) {
          if (tmp5.SOFT_DISMISSED !== restingQuestDockMode) {
            if (tmp5.EXPANDED === restingQuestDockMode) {
              const questDockExpandedHeightLimits = tmp(tmp2[12]).getQuestDockExpandedHeightLimits(tmp4, safeArea.top, minExpandedContentHeight);
              const minHeight = questDockExpandedHeightLimits.minHeight;
              let tmp7 = questDockWrapperSpecs.get().height <= youBarTotalHeight;
              if (!tmp7) {
                let tmp6 = null != restingQuestDockMode;
                if (tmp6) {
                  tmp6 = obj11.get().height === tmp(tmp2[12]).getQuestDockExpandedHeightLimits(restingQuestDockMode.windowHeight, restingQuestDockMode.safeArea.top, minExpandedContentHeight).maxHeight;
                  const tmpResult2 = tmp(tmp2[12]);
                }
                tmp7 = tmp6;
              }
              if (!tmp7) {
                const height = obj11.get().height;
              }
              obj = {};
              const merged1 = Object.assign(obj11.get());
              obj.x = 0;
              let tmp10 = youBarTotalHeight;
              if (youBarTotalHeight <= 0) {
                tmp10 = closure_1_12;
              }
              obj.y = tmp10;
              const tmpResult1 = tmp(tmp2[12]);
              obj.width = tmp(tmp2[12]).getQuestDockExpandedWidth(windowWidth, safeArea.left, safeArea.right);
              obj.height = questDockExpandedHeightLimits.maxHeight;
              const result2 = obj11.set(obj);
              const result3 = activeQuestDockMode.set(tmp5.EXPANDED);
              const tmpResult3 = tmp(tmp2[12]);
            }
          }
        }
        obj1 = {};
        const merged2 = Object.assign(questDockWrapperSpecs.get());
        obj1.x = 0;
        obj1.y = 0;
        obj1.width = tmp(tmp2[12]).getQuestDockClosedWidth(windowWidth, youBarHorizontalMargin, youBarHorizontalMargin);
        obj1.height = youBarHorizontalMargin;
        const result4 = questDockWrapperSpecs.set(obj1);
        const result5 = activeQuestDockMode.set(restingQuestDockMode);
        const tmpResult4 = tmp(tmp2[12]);
      }
    }
  };
  obj = { cheapWorkletShallowEqual: questDockWrapperSpecs(activeQuestDockMode[11]).cheapWorkletShallowEqual, QuestDockMode: closure_6, runOnJS: questDockWrapperSpecs(activeQuestDockMode[10]).runOnJS, setRestingQuestDockMode, questDockWrapperSpecs, getQuestDockCollapsedWidth: questDockWrapperSpecs(activeQuestDockMode[12]).getQuestDockCollapsedWidth, youBarHorizontalMargin, QUEST_DOCK_COLLAPSED_HEIGHT: youBarTotalHeight, activeQuestDockMode, getQuestDockClosedWidth: questDockWrapperSpecs(activeQuestDockMode[12]).getQuestDockClosedWidth, QUEST_DOCK_CLOSED_HEIGHT: youBarHorizontalMargin, getQuestDockExpandedHeightLimits: questDockWrapperSpecs(activeQuestDockMode[12]).getQuestDockExpandedHeightLimits, youBarHeight: youBarTotalHeight, QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED: closure_12, getQuestDockExpandedWidth: questDockWrapperSpecs(activeQuestDockMode[12]).getQuestDockExpandedWidth };
  fn2.__closure = obj;
  fn2.__workletHash = 2510234714195;
  fn2.__initData = closure_14;
  const animatedReaction = questDockWrapperSpecs(activeQuestDockMode[10]).useAnimatedReaction(fn, fn2);
};
export const useQuestDockExternalOffset = function useQuestDockExternalOffset() {
  let items = [closure_5];
  const tmp = callback(first(589).useStateFromStoresArray(items, () => {
    const items = [, ];
    ({ prevRestingQuestDockMode: arr[0], isEligibleToBeVisible: arr[1] } = closure_5);
    return items;
  }), 2);
  first = tmp[0];
  closure_1 = tmp3;
  const items1 = [tmp[1], first];
  return React.useMemo(() => {
    if (closure_1) {
      if (closure_1_6.COLLAPSED === first) {
        return closure_1_10;
      } else if (tmp2.EXPANDED === tmp) {
        return closure_1_11;
      } else {
        if (tmp2.CLOSED !== tmp) {
          if (tmp2.SOFT_DISMISSED !== tmp) {
            return 0;
          }
        }
        return closure_1_9;
      }
    } else {
      return 0;
    }
  }, items1);
};
export const useQuestDockDismissalReset = function useQuestDockDismissalReset() {
  setRestingQuestDockMode = React.useContext(setRestingQuestDockMode(14667).QuestDockExternalCoordinationContext).setRestingQuestDockMode;
  const activeQuestDockMode = React.useContext(setRestingQuestDockMode(14664).QuestDockGestureContext).activeQuestDockMode;
  const items = [setRestingQuestDockMode, activeQuestDockMode];
  const effect = React.useEffect(() => {
    let isSoftDismissedResult = activeQuestDockMode.get() !== closure_1_6.SOFT_DISMISSED;
    if (!isSoftDismissedResult) {
      isSoftDismissedResult = setRestingQuestDockMode(closure_1_2[12]).isSoftDismissed(closure_1_5.questDockSoftDismissedAt);
      let obj = setRestingQuestDockMode(closure_1_2[12]);
    }
    if (!isSoftDismissedResult) {
      setRestingQuestDockMode(closure_1_6.COLLAPSED);
    }
    function maybeResetSoftDismissal() {
      let isSoftDismissedResult = closure_1.get() !== closure_1_6.SOFT_DISMISSED;
      if (!isSoftDismissedResult) {
        isSoftDismissedResult = callback(closure_1_2[12]).isSoftDismissed(closure_1_5.questDockSoftDismissedAt);
        const obj = callback(closure_1_2[12]);
      }
      if (!isSoftDismissedResult) {
        callback(closure_1_6.COLLAPSED);
      }
    }
    setRestingQuestDockMode = setInterval(maybeResetSoftDismissal, 5 * activeQuestDockMode(closure_1_2[14]).Millis.MINUTE);
    return () => {
      clearInterval(closure_0);
    };
  }, items);
};
export const useActionSheetPressHandler = function useActionSheetPressHandler(memo) {
  const _require = memo;
  const questImpressionId = _require(11049).useQuestImpressionId();
  const items = [memo, questImpressionId];
  return React.useCallback(() => {
    let obj = memo(closure_1_2[16]);
    const questDockMenuAdCreative = obj.getQuestDockMenuAdCreative(memo);
    obj1 = memo(closure_1_2[17]);
    if (obj1.shouldMigrateToAdAnalyticsInterface(memo(closure_1_2[17]).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_dock_action_sheet")) {
      let tmpResult = tmp(tmp2[18]);
      obj = { type: null };
      obj[0] = tmp(tmp2[19]).AdUserActionType.CLICK_INTERNAL;
      const merged = Object.assign(questDockMenuAdCreative);
      obj.questContentCTA = tmp(tmp2[20]).QuestContentCTA.OPEN_CONTEXT_MENU;
      obj.surfaceId = tmp(tmp2[21]).QuestContent.QUEST_BAR_MOBILE;
      obj.sourceQuestContent = tmp(tmp2[21]).QuestContent.QUEST_BAR_MOBILE;
      obj.impressionId = questImpressionId;
      tmpResult.captureAdUserAction(obj);
      let tmp7 = questImpressionId;
    } else if (questDockMenuAdCreative.adCreativeType === tmp(tmp2[22]).AdCreativeType.QUEST) {
      tmpResult = tmp(tmp2[23]);
      obj = { questId: null, questContent: null, questContentCTA: null, sourceQuestContent: null, impressionId: null };
      obj[0] = questDockMenuAdCreative.adCreativeId;
      obj[1] = tmp(tmp2[21]).QuestContent.QUEST_BAR_MOBILE;
      obj[2] = tmp(tmp2[20]).QuestContentCTA.OPEN_CONTEXT_MENU;
      obj[3] = tmp(tmp2[21]).QuestContent.QUEST_BAR_MOBILE;
      obj[4] = questImpressionId;
      const result = tmpResult.trackQuestContentClicked(obj);
      tmp7 = questImpressionId;
    } else {
      obj1 = { adContentId: null, adCreativeType: null, questContent: null, questContentCTA: null, sourceQuestContent: null, impressionId: null };
      ({ adCreativeId: obj9[0], adCreativeType: obj9[1] } = questDockMenuAdCreative);
      obj1[2] = tmp(tmp2[21]).QuestContent.QUEST_BAR_MOBILE;
      obj1[3] = tmp(tmp2[20]).QuestContentCTA.OPEN_CONTEXT_MENU;
      obj1[4] = tmp(tmp2[21]).QuestContent.QUEST_BAR_MOBILE;
      tmp7 = questImpressionId;
      obj1[5] = questImpressionId;
      const result1 = tmp(tmp2[23]).trackAdContentClicked(obj1);
      const tmpResult1 = tmp(tmp2[23]);
    }
    questImpressionId(closure_1_2[24]).openLazy(memo(closure_1_2[26])(closure_1_2[25], closure_1_2.paths), "QuestDockContextMenuActionSheet", { creative: memo, impressionId: tmp7 });
  }, items);
};