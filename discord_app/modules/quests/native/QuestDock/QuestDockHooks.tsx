// discord_app/modules/quests/native/QuestDock/QuestDockHooks.tsx
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../../_runtime/00019_noop.js";
import QuestDockMode from "QuestDockStore.tsx";
import { QuestDockMode } from "../../QuestConstants.tsx";
import QUEST_DOCK_COLLAPSED_HEIGHT from "QuestDockConstants.tsx";

const require = fn;
({ QUEST_DOCK_CLOSED_HEIGHT: error, QUEST_DOCK_COLLAPSED_HEIGHT: closure_8, QUEST_DOCK_EXTERNAL_OFFSET_CLOSED: c9, QUEST_DOCK_EXTERNAL_OFFSET_COLLAPSED_WITH_YOU_BAR: c10, QUEST_DOCK_EXTERNAL_OFFSET_EXPANDED_WITH_YOU_BAR: unpackModuleId, QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED: closure_12 } = QUEST_DOCK_COLLAPSED_HEIGHT);
let closure_13 = { code: "function QuestDockHooksTsx1(){const{restingQuestDockMode,minExpandedContentHeight,windowDimensions,safeArea}=this.__closure;return{restingQuestDockMode:restingQuestDockMode.get(),minExpandedContentHeight:minExpandedContentHeight.get(),windowWidth:windowDimensions.get().width,windowHeight:windowDimensions.get().height,safeArea:safeArea.get()};}" };
let closure_14 = { code: "function QuestDockHooksTsx2(props,previous){const{cheapWorkletShallowEqual,QuestDockMode,runOnJS,setRestingQuestDockMode,questDockWrapperSpecs,getQuestDockCollapsedWidth,youBarHorizontalMargin,QUEST_DOCK_COLLAPSED_HEIGHT,activeQuestDockMode,getQuestDockClosedWidth,QUEST_DOCK_CLOSED_HEIGHT,getQuestDockExpandedHeightLimits,youBarHeight,QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED,getQuestDockExpandedWidth}=this.__closure;var _previous$restingQues;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{restingQuestDockMode:restingQuestDockMode,minExpandedContentHeight:minExpandedContentHeight,windowWidth:windowWidth,windowHeight:windowHeight,safeArea:safeArea}=props;switch(restingQuestDockMode){case QuestDockMode.RESET_TO_PREVIOUS:runOnJS(setRestingQuestDockMode)((_previous$restingQues=previous===null||previous===void 0?void 0:previous.restingQuestDockMode)!==null&&_previous$restingQues!==void 0?_previous$restingQues:QuestDockMode.COLLAPSED);return;case QuestDockMode.COLLAPSED:questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:0,width:getQuestDockCollapsedWidth(windowWidth,youBarHorizontalMargin,youBarHorizontalMargin),height:QUEST_DOCK_COLLAPSED_HEIGHT});activeQuestDockMode.set(QuestDockMode.COLLAPSED);break;case QuestDockMode.CLOSED:case QuestDockMode.SOFT_DISMISSED:questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:0,width:getQuestDockClosedWidth(windowWidth,youBarHorizontalMargin,youBarHorizontalMargin),height:QUEST_DOCK_CLOSED_HEIGHT});activeQuestDockMode.set(restingQuestDockMode);break;case QuestDockMode.EXPANDED:const minContentHeight=minExpandedContentHeight;const{minHeight:minHeight,maxHeight:maxHeight}=getQuestDockExpandedHeightLimits(windowHeight,safeArea.top,minContentHeight);const heightMidpoint=(maxHeight+minHeight)/2;let height;if(questDockWrapperSpecs.get().height<=QUEST_DOCK_COLLAPSED_HEIGHT){height=maxHeight;}else if(previous!=null&&questDockWrapperSpecs.get().height===getQuestDockExpandedHeightLimits(previous.windowHeight,previous.safeArea.top,minContentHeight).maxHeight){height=maxHeight;}else if(questDockWrapperSpecs.get().height>=heightMidpoint){height=maxHeight;}else{height=maxHeight;}questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:youBarHeight>0?youBarHeight:QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED,width:getQuestDockExpandedWidth(windowWidth,safeArea.left,safeArea.right),height:height});activeQuestDockMode.set(QuestDockMode.EXPANDED);break;}}" };
let result = require("obj132").fileFinishedImporting("modules/quests/native/QuestDock/QuestDockHooks.tsx");

export const useQuestDockModeAnimatedReaction = function useQuestDockModeAnimatedReaction() {
  const context = restingQuestDockMode.useContext(questDockWrapperSpecs(activeQuestDockMode[5]).QuestDockGestureContext);
  questDockWrapperSpecs = context.questDockWrapperSpecs;
  const windowDimensions = context.windowDimensions;
  activeQuestDockMode = context.activeQuestDockMode;
  const minExpandedContentHeight = context.minExpandedContentHeight;
  const context1 = restingQuestDockMode.useContext(questDockWrapperSpecs(activeQuestDockMode[6]).QuestDockExternalCoordinationContext);
  restingQuestDockMode = context1.restingQuestDockMode;
  const setRestingQuestDockMode = context1.setRestingQuestDockMode;
  let tmp3 = windowDimensions(activeQuestDockMode[7])();
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
    if (!obj.cheapWorkletShallowEqual(safeAreaState, tmp3)) {
      ({ restingQuestDockMode, minExpandedContentHeight, windowWidth, safeArea } = safeAreaState);
      if (closure_6.RESET_TO_PREVIOUS === restingQuestDockMode) {
        let tmpResult = questDockWrapperSpecs(activeQuestDockMode[10]);
        restingQuestDockMode = undefined;
        if (restingQuestDockMode != null) {
          restingQuestDockMode = restingQuestDockMode.restingQuestDockMode;
        }
        if (restingQuestDockMode == null) {
          restingQuestDockMode = closure_6.COLLAPSED;
        }
        tmpResult.runOnJS(setRestingQuestDockMode)(restingQuestDockMode);
        const runOnJSResult = tmpResult.runOnJS(setRestingQuestDockMode);
      } else if (closure_6.COLLAPSED === restingQuestDockMode) {
        obj = {};
        const merged = Object.assign(questDockWrapperSpecs.get());
        obj.x = 0;
        obj.y = 0;
        tmpResult = questDockWrapperSpecs(activeQuestDockMode[12]);
        obj.width = tmpResult.getQuestDockCollapsedWidth(windowWidth, youBarHorizontalMargin, youBarHorizontalMargin);
        obj.height = youBarTotalHeight;
        const result = questDockWrapperSpecs.set(obj);
        const result1 = activeQuestDockMode.set(closure_6.COLLAPSED);
      } else {
        if (closure_6.CLOSED !== restingQuestDockMode) {
          if (closure_6.SOFT_DISMISSED !== restingQuestDockMode) {
            if (closure_6.EXPANDED === restingQuestDockMode) {
              const questDockExpandedHeightLimits = questDockWrapperSpecs(activeQuestDockMode[12]).getQuestDockExpandedHeightLimits(tmp4, safeArea.top, minExpandedContentHeight);
              const minHeight = questDockExpandedHeightLimits.minHeight;
              let tmp7 = questDockWrapperSpecs.get().height <= youBarTotalHeight;
              if (!tmp7) {
                let tmp6 = null != restingQuestDockMode;
                if (tmp6) {
                  tmp6 = questDockWrapperSpecs.get().height === questDockWrapperSpecs(activeQuestDockMode[12]).getQuestDockExpandedHeightLimits(restingQuestDockMode.windowHeight, restingQuestDockMode.safeArea.top, minExpandedContentHeight).maxHeight;
                  const tmpResult2 = questDockWrapperSpecs(activeQuestDockMode[12]);
                }
                tmp7 = tmp6;
              }
              if (!tmp7) {
                const height = questDockWrapperSpecs.get().height;
              }
              obj = {};
              const merged1 = Object.assign(questDockWrapperSpecs.get());
              obj.x = 0;
              let tmp10 = youBarTotalHeight;
              if (youBarTotalHeight <= 0) {
                tmp10 = closure_1_12;
              }
              obj.y = tmp10;
              const tmpResult1 = questDockWrapperSpecs(activeQuestDockMode[12]);
              obj.width = questDockWrapperSpecs(activeQuestDockMode[12]).getQuestDockExpandedWidth(windowWidth, safeArea.left, safeArea.right);
              obj.height = questDockExpandedHeightLimits.maxHeight;
              const result2 = questDockWrapperSpecs.set(obj);
              const result3 = activeQuestDockMode.set(closure_6.EXPANDED);
              const tmpResult3 = questDockWrapperSpecs(activeQuestDockMode[12]);
            }
          }
        }
        obj1 = {};
        const merged2 = Object.assign(questDockWrapperSpecs.get());
        obj1.x = 0;
        obj1.y = 0;
        obj1.width = questDockWrapperSpecs(activeQuestDockMode[12]).getQuestDockClosedWidth(windowWidth, youBarHorizontalMargin, youBarHorizontalMargin);
        obj1.height = youBarHorizontalMargin;
        const result4 = questDockWrapperSpecs.set(obj1);
        const result5 = activeQuestDockMode.set(restingQuestDockMode);
        const tmpResult4 = questDockWrapperSpecs(activeQuestDockMode[12]);
      }
    }
    tmp3 = restingQuestDockMode;
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
      if (QuestDockMode.COLLAPSED === first) {
        return closure_1_10;
      } else if (QuestDockMode.EXPANDED === first) {
        return closure_1_11;
      } else {
        if (QuestDockMode.CLOSED !== first) {
          if (QuestDockMode.SOFT_DISMISSED !== first) {
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
  setRestingQuestDockMode = React.useContext(setRestingQuestDockMode(14451).QuestDockExternalCoordinationContext).setRestingQuestDockMode;
  const activeQuestDockMode = React.useContext(setRestingQuestDockMode(14448).QuestDockGestureContext).activeQuestDockMode;
  const items = [setRestingQuestDockMode, activeQuestDockMode];
  const effect = React.useEffect(() => {
    let isSoftDismissedResult = activeQuestDockMode.get() !== QuestDockMode.SOFT_DISMISSED;
    if (!isSoftDismissedResult) {
      isSoftDismissedResult = setRestingQuestDockMode(dependencyMap[12]).isSoftDismissed(closure_1_5.questDockSoftDismissedAt);
      let obj = setRestingQuestDockMode(dependencyMap[12]);
    }
    if (!isSoftDismissedResult) {
      setRestingQuestDockMode(QuestDockMode.COLLAPSED);
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
    setRestingQuestDockMode = setInterval(maybeResetSoftDismissal, 5 * activeQuestDockMode(dependencyMap[14]).Millis.MINUTE);
    return () => {
      clearInterval(closure_0);
    };
  }, items);
};
export const useActionSheetPressHandler = function useActionSheetPressHandler(quest) {
  const _require = quest;
  const trackQuestContentClickedWithImpression = _require(questImpressionId[15]).useTrackQuestContentClickedWithImpression();
  let obj = _require(questImpressionId[15]);
  questImpressionId = _require(questImpressionId[16]).useQuestImpressionId();
  const items = [quest, trackQuestContentClickedWithImpression, questImpressionId];
  return React.useCallback(() => {
    let obj = quest(questImpressionId[17]);
    if (obj.shouldMigrateToAdAnalyticsInterface(quest(questImpressionId[17]).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_dock_action_sheet")) {
      obj = { type: null, adCreativeType: null, adCreativeId: null, questContentCTA: null, surfaceId: null, sourceQuestContent: null, impressionId: null };
      obj[0] = quest(questImpressionId[19]).AdUserActionType.CLICK_INTERNAL;
      obj[1] = quest(questImpressionId[20]).AdCreativeType.QUEST;
      obj[2] = quest.id;
      obj[3] = quest(questImpressionId[21]).QuestContentCTA.OPEN_CONTEXT_MENU;
      obj[4] = quest(questImpressionId[22]).QuestContent.QUEST_BAR_MOBILE;
      obj[5] = quest(questImpressionId[22]).QuestContent.QUEST_BAR_MOBILE;
      obj[6] = questImpressionId;
      quest(questImpressionId[18]).captureAdUserAction(obj);
      let tmp4 = quest;
      const tmpResult = quest(questImpressionId[18]);
    } else {
      obj = { questId: null, questContent: null, questContentCTA: null, sourceQuestContent: null };
      tmp4 = quest;
      obj[0] = quest.id;
      obj[1] = quest(questImpressionId[22]).QuestContent.QUEST_BAR_MOBILE;
      obj[2] = quest(questImpressionId[21]).QuestContentCTA.OPEN_CONTEXT_MENU;
      obj[3] = quest(questImpressionId[22]).QuestContent.QUEST_BAR_MOBILE;
      trackQuestContentClickedWithImpression(obj);
    }
    trackQuestContentClickedWithImpression(questImpressionId[23]).openLazy(quest(questImpressionId[25])(questImpressionId[24], questImpressionId.paths), "QuestDockContextMenuActionSheet", { quest: tmp4 });
    const obj5 = trackQuestContentClickedWithImpression(questImpressionId[23]);
  }, items);
};