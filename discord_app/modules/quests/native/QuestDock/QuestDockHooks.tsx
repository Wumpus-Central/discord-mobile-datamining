// discord_app/modules/quests/native/QuestDock/QuestDockHooks.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import asyncRequireImpl from "../../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import QuestTypes from "../../QuestTypes.tsx";
import AnalyticsTypes from "../../lib/analytics/AnalyticsTypes.tsx";
import cheapWorkletShallowEqual from "../../../reanimated/native/cheapWorkletShallowEqual.tsx";
import AdAnalyticsInterfaceExperiment from "../../experiments/AdAnalyticsInterfaceExperiment.tsx";
import captureAdUserAction from "../../../ads/analytics/captureAdUserAction.tsx";
import captureAdUserActionTypes from "../../../ads/analytics/captureAdUserActionTypes.tsx";
import QuestDockCreativeContext from "QuestDockCreativeContext.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import QuestDockStore from "QuestDockStore.tsx";

require = fn;
let QuestDockMode = fn(5444).QuestDockMode;
const QuestDockConstants = fn(15095);
({
  QUEST_DOCK_CLOSED_HEIGHT: closure_7,
  QUEST_DOCK_COLLAPSED_HEIGHT: closure_8,
  QUEST_DOCK_EXTERNAL_OFFSET_CLOSED: closure_9,
  QUEST_DOCK_EXTERNAL_OFFSET_COLLAPSED_WITH_YOU_BAR: c10,
  QUEST_DOCK_EXTERNAL_OFFSET_EXPANDED_WITH_YOU_BAR: closure_11,
  QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED: closure_12,
} = QuestDockConstants);
const __initData = {
  code: "function QuestDockHooksTsx1(){const{restingQuestDockMode,minExpandedContentHeight,windowDimensions,safeArea}=this.__closure;return{restingQuestDockMode:restingQuestDockMode.get(),minExpandedContentHeight:minExpandedContentHeight.get(),windowWidth:windowDimensions.get().width,windowHeight:windowDimensions.get().height,safeArea:safeArea.get()};}",
};
const __initData2 = {
  code: "function QuestDockHooksTsx2(props,previous){const{cheapWorkletShallowEqual,QuestDockMode,runOnJS,setRestingQuestDockMode,questDockWrapperSpecs,getQuestDockCollapsedWidth,youBarHorizontalMargin,QUEST_DOCK_COLLAPSED_HEIGHT,activeQuestDockMode,getQuestDockClosedWidth,QUEST_DOCK_CLOSED_HEIGHT,getQuestDockExpandedHeightLimits,youBarHeight,QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED,getQuestDockExpandedWidth}=this.__closure;var _previous$restingQues;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{restingQuestDockMode:restingQuestDockMode,minExpandedContentHeight:minExpandedContentHeight,windowWidth:windowWidth,windowHeight:windowHeight,safeArea:safeArea}=props;switch(restingQuestDockMode){case QuestDockMode.RESET_TO_PREVIOUS:runOnJS(setRestingQuestDockMode)((_previous$restingQues=previous===null||previous===void 0?void 0:previous.restingQuestDockMode)!==null&&_previous$restingQues!==void 0?_previous$restingQues:QuestDockMode.COLLAPSED);return;case QuestDockMode.COLLAPSED:questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:0,width:getQuestDockCollapsedWidth(windowWidth,youBarHorizontalMargin,youBarHorizontalMargin),height:QUEST_DOCK_COLLAPSED_HEIGHT});activeQuestDockMode.set(QuestDockMode.COLLAPSED);break;case QuestDockMode.CLOSED:case QuestDockMode.SOFT_DISMISSED:questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:0,width:getQuestDockClosedWidth(windowWidth,youBarHorizontalMargin,youBarHorizontalMargin),height:QUEST_DOCK_CLOSED_HEIGHT});activeQuestDockMode.set(restingQuestDockMode);break;case QuestDockMode.EXPANDED:const minContentHeight=minExpandedContentHeight;const{minHeight:minHeight,maxHeight:maxHeight}=getQuestDockExpandedHeightLimits(windowHeight,safeArea.top,minContentHeight);const heightMidpoint=(maxHeight+minHeight)/2;let height;if(questDockWrapperSpecs.get().height<=QUEST_DOCK_COLLAPSED_HEIGHT){height=maxHeight;}else if(previous!=null&&questDockWrapperSpecs.get().height===getQuestDockExpandedHeightLimits(previous.windowHeight,previous.safeArea.top,minContentHeight).maxHeight){height=maxHeight;}else if(questDockWrapperSpecs.get().height>=heightMidpoint){height=maxHeight;}else{height=maxHeight;}questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:youBarHeight>0?youBarHeight:QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED,width:getQuestDockExpandedWidth(windowWidth,safeArea.left,safeArea.right),height:height});activeQuestDockMode.set(QuestDockMode.EXPANDED);break;}}",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockHooks.tsx");

export const useIsQuestDockExpanded = function useIsQuestDockExpanded() {
  const items = [QuestDockStore];
  return initialize.useStateFromStores(items, () => QuestDockStore.prevRestingQuestDockMode === constants.EXPANDED);
};
export const useQuestDockModeAnimatedReaction = function useQuestDockModeAnimatedReaction() {
  const context = restingQuestDockMode.useContext(
    questDockWrapperSpecs(activeQuestDockMode[6]).QuestDockGestureContext,
  );
  questDockWrapperSpecs = context.questDockWrapperSpecs;
  const windowDimensions = context.windowDimensions;
  activeQuestDockMode = context.activeQuestDockMode;
  const minExpandedContentHeight = context.minExpandedContentHeight;
  const context1 = restingQuestDockMode.useContext(
    questDockWrapperSpecs(activeQuestDockMode[7]).QuestDockExternalCoordinationContext,
  );
  restingQuestDockMode = context1.restingQuestDockMode;
  const setRestingQuestDockMode = context1.setRestingQuestDockMode;
  const tmp3 = windowDimensions(activeQuestDockMode[8])();
  QuestDockMode = tmp3;
  let obj = questDockWrapperSpecs(activeQuestDockMode[9]);
  const youBarHorizontalMargin = obj.useYouBarHorizontalMargin();
  const youBarTotalHeight = questDockWrapperSpecs(activeQuestDockMode[10]).useYouBarTotalHeight();
  const obj2 = questDockWrapperSpecs(activeQuestDockMode[10]);
  const fn = function o() {
    return {
      restingQuestDockMode: restingQuestDockMode.get(),
      minExpandedContentHeight: minExpandedContentHeight.get(),
      windowWidth: windowDimensions.get().width,
      windowHeight: windowDimensions.get().height,
      safeArea: closure_6.get(),
    };
  };
  fn.__closure = { restingQuestDockMode, minExpandedContentHeight, windowDimensions, safeArea: tmp3 };
  fn.__workletHash = 9502251090521;
  fn.__initData = __initData;
  const fn2 = function t(safeAreaState, restingQuestDockMode) {
    let obj = cheapWorkletShallowEqual;
    if (!obj.cheapWorkletShallowEqual(safeAreaState, restingQuestDockMode)) {
      ({ restingQuestDockMode, minExpandedContentHeight, windowWidth, safeArea } = safeAreaState);
      if (QuestDockMode.RESET_TO_PREVIOUS === restingQuestDockMode) {
        let tmpResult = tmp(4296);
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
        tmpResult = tmp(15094);
        obj.width = tmpResult.getQuestDockCollapsedWidth(windowWidth, youBarHorizontalMargin, youBarHorizontalMargin);
        obj.height = height2;
        const result = questDockWrapperSpecs.set(obj);
        const result1 = activeQuestDockMode.set(tmp5.COLLAPSED);
      } else {
        if (tmp5.CLOSED !== restingQuestDockMode) {
          if (tmp5.SOFT_DISMISSED !== restingQuestDockMode) {
            if (tmp5.EXPANDED === restingQuestDockMode) {
              const questDockExpandedHeightLimits = tmp(15094).getQuestDockExpandedHeightLimits(
                tmp4,
                safeArea.top,
                minExpandedContentHeight,
              );
              const minHeight = questDockExpandedHeightLimits.minHeight;
              let tmp7 = questDockWrapperSpecs.get().height <= height2;
              if (!tmp7) {
                let tmp6 = null != restingQuestDockMode;
                if (tmp6) {
                  tmp6 =
                    obj11.get().height ===
                    tmp(15094).getQuestDockExpandedHeightLimits(
                      restingQuestDockMode.windowHeight,
                      restingQuestDockMode.safeArea.top,
                      minExpandedContentHeight,
                    ).maxHeight;
                  const tmpResult2 = tmp(15094);
                }
                tmp7 = tmp6;
              }
              if (!tmp7) {
                height = obj11.get().height;
              }
              obj = {};
              const merged1 = Object.assign(obj11.get());
              obj.x = 0;
              let tmp10 = youBarTotalHeight;
              if (youBarTotalHeight <= 0) {
                tmp10 = QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED;
              }
              obj.y = tmp10;
              const tmpResult1 = tmp(15094);
              obj.width = tmp(15094).getQuestDockExpandedWidth(windowWidth, safeArea.left, safeArea.right);
              obj.height = questDockExpandedHeightLimits.maxHeight;
              const result2 = obj11.set(obj);
              const result3 = activeQuestDockMode.set(tmp5.EXPANDED);
              const tmpResult3 = tmp(15094);
            }
          }
        }
        const obj1 = {};
        const merged2 = Object.assign(questDockWrapperSpecs.get());
        obj1.x = 0;
        obj1.y = 0;
        obj1.width = tmp(15094).getQuestDockClosedWidth(windowWidth, youBarHorizontalMargin, youBarHorizontalMargin);
        obj1.height = height;
        const result4 = questDockWrapperSpecs.set(obj1);
        const result5 = activeQuestDockMode.set(restingQuestDockMode);
        const tmpResult4 = tmp(15094);
      }
    }
  };
  obj = {
    cheapWorkletShallowEqual: questDockWrapperSpecs(activeQuestDockMode[12]).cheapWorkletShallowEqual,
    QuestDockMode,
    runOnJS: questDockWrapperSpecs(activeQuestDockMode[11]).runOnJS,
    setRestingQuestDockMode,
    questDockWrapperSpecs,
    getQuestDockCollapsedWidth: questDockWrapperSpecs(activeQuestDockMode[13]).getQuestDockCollapsedWidth,
    youBarHorizontalMargin,
    QUEST_DOCK_COLLAPSED_HEIGHT: youBarTotalHeight,
    activeQuestDockMode,
    getQuestDockClosedWidth: questDockWrapperSpecs(activeQuestDockMode[13]).getQuestDockClosedWidth,
    QUEST_DOCK_CLOSED_HEIGHT: youBarHorizontalMargin,
    getQuestDockExpandedHeightLimits: questDockWrapperSpecs(activeQuestDockMode[13]).getQuestDockExpandedHeightLimits,
    youBarHeight: youBarTotalHeight,
    QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED,
    getQuestDockExpandedWidth: questDockWrapperSpecs(activeQuestDockMode[13]).getQuestDockExpandedWidth,
  };
  fn2.__closure = obj;
  fn2.__workletHash = 2510234714195;
  fn2.__initData = __initData2;
  const animatedReaction = questDockWrapperSpecs(activeQuestDockMode[11]).useAnimatedReaction(fn, fn2);
};
export const useQuestDockExternalOffset = function useQuestDockExternalOffset() {
  let items = [QuestDockStore];
  const tmp = _slicedToArray(
    first(504).useStateFromStoresArray(items, () => {
      const items = [,];
      ({ prevRestingQuestDockMode: arr[0], isEligibleToBeVisible: arr[1] } = QuestDockStore);
      return items;
    }),
    2,
  );
  first = tmp[0];
  closure_1 = tmp3;
  const items1 = [tmp[1], first];
  return noop.useMemo(() => {
    if (closure_1) {
      if (QuestDockMode.COLLAPSED === first) {
        return closure_2_10;
      } else if (tmp2.EXPANDED === tmp) {
        return closure_2_11;
      } else {
        if (tmp2.CLOSED !== tmp) {
          if (tmp2.SOFT_DISMISSED !== tmp) {
            return 0;
          }
        }
        return React7;
      }
    } else {
      return 0;
    }
  }, items1);
};
export const useQuestDockDismissalReset = function useQuestDockDismissalReset() {
  setRestingQuestDockMode = noop.useContext(
    setRestingQuestDockMode(15099).QuestDockExternalCoordinationContext,
  ).setRestingQuestDockMode;
  const activeQuestDockMode = noop.useContext(
    setRestingQuestDockMode(15096).QuestDockGestureContext,
  ).activeQuestDockMode;
  const items = [setRestingQuestDockMode, activeQuestDockMode];
  const effect = noop.useEffect(() => {
    let isSoftDismissedResult = activeQuestDockMode.get() !== constants.SOFT_DISMISSED;
    if (!isSoftDismissedResult) {
      isSoftDismissedResult = setRestingQuestDockMode(15094).isSoftDismissed(QuestDockStore.questDockSoftDismissedAt);
      let obj = setRestingQuestDockMode(15094);
    }
    if (!isSoftDismissedResult) {
      setRestingQuestDockMode(constants.COLLAPSED);
    }
    function maybeResetSoftDismissal() {
      let isSoftDismissedResult = activeQuestDockMode.get() !== constants.SOFT_DISMISSED;
      if (!isSoftDismissedResult) {
        isSoftDismissedResult = setRestingQuestDockMode(15094).isSoftDismissed(QuestDockStore.questDockSoftDismissedAt);
        const obj = setRestingQuestDockMode(15094);
      }
      if (!isSoftDismissedResult) {
        closure_0(constants.COLLAPSED);
      }
    }
    setRestingQuestDockMode = setInterval(maybeResetSoftDismissal, 5 * activeQuestDockMode(1090).Millis.MINUTE);
    return () => {
      clearInterval(closure_0);
    };
  }, items);
};
export const useActionSheetPressHandler = function useActionSheetPressHandler(questCreative) {
  _require = questCreative;
  const questImpressionId = require("ContentImpressionTrackerHooks").useQuestImpressionId();
  const items = [questCreative, questImpressionId];
  return noop.useCallback(() => {
    let obj = QuestDockCreativeContext;
    const creativeAnalyticsParams = obj.getCreativeAnalyticsParams(creative);
    let obj1 = AdAnalyticsInterfaceExperiment;
    if (
      obj1.shouldMigrateToAdAnalyticsInterface(
        AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL,
        "quest_dock_action_sheet",
      )
    ) {
      let tmpResult = tmp(11193);
      obj = { type: tmp(11197).AdUserActionType.CLICK_INTERNAL };
      const merged = Object.assign(creativeAnalyticsParams);
      obj.questContentCTA = tmp(7728).QuestContentCTA.OPEN_CONTEXT_MENU;
      obj.surfaceId = tmp(5447).QuestContent.QUEST_BAR_MOBILE;
      obj.sourceQuestContent = tmp(5447).QuestContent.QUEST_BAR_MOBILE;
      obj.impressionId = questImpressionId;
      tmpResult.captureAdUserAction(obj);
      let tmp7 = questImpressionId;
    } else if (creativeAnalyticsParams.adCreativeType === tmp(5451).AdCreativeType.QUEST) {
      tmpResult = tmp(7718);
      obj = {
        questId: creativeAnalyticsParams.adCreativeId,
        questContent: tmp(5447).QuestContent.QUEST_BAR_MOBILE,
        questContentCTA: tmp(7728).QuestContentCTA.OPEN_CONTEXT_MENU,
        sourceQuestContent: tmp(5447).QuestContent.QUEST_BAR_MOBILE,
        impressionId: questImpressionId,
      };
      const result = tmpResult.trackQuestContentClicked(obj);
      tmp7 = questImpressionId;
    } else {
      obj1 = {
        adContentId: null,
        adCreativeType: null,
        questContent: null,
        questContentCTA: null,
        sourceQuestContent: null,
        impressionId: null,
      };
      ({ adCreativeId: obj9.adContentId, adCreativeType: obj9.adCreativeType } = creativeAnalyticsParams);
      obj1.questContent = tmp(5447).QuestContent.QUEST_BAR_MOBILE;
      obj1.questContentCTA = tmp(7728).QuestContentCTA.OPEN_CONTEXT_MENU;
      obj1.sourceQuestContent = tmp(5447).QuestContent.QUEST_BAR_MOBILE;
      tmp7 = questImpressionId;
      obj1.impressionId = questImpressionId;
      const result1 = tmp(7718).trackAdContentClicked(obj1);
      const tmpResult1 = tmp(7718);
    }
    ActionSheetActionCreatorsDefault.openLazy(
      asyncRequireImpl(15103, dependencyMap.paths),
      "QuestDockContextMenuActionSheet",
      { creative, impressionId: tmp7 },
    );
  }, items);
};
export const useQuestDockExpandHandler = function useQuestDockExpandHandler(questDockCreative) {
  _require = questDockCreative;
  const getQuestImpressionId = require("ContentImpressionTrackerHooks").useGetQuestImpressionId();
  const items = [questDockCreative, getQuestImpressionId];
  return noop.useCallback(() => {
    const obj = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL };
    const merged = Object.assign(QuestDockCreativeContext.getCreativeAnalyticsParams(closure_0));
    obj.questContentCTA = AnalyticsTypes.QuestContentCTA.EXPAND;
    obj.surfaceId = QuestTypes.QuestContent.QUEST_BAR_MOBILE;
    obj.sourceQuestContent = QuestTypes.QuestContent.QUEST_BAR_MOBILE;
    obj.impressionId = getQuestImpressionId();
    obj.captureAdUserAction(obj);
  }, items);
};
