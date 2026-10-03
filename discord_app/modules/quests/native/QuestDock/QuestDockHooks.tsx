// discord_app/modules/quests/native/QuestDock/QuestDockHooks.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useWindowDimensionsDefault from "../../../screen/useWindowDimensions.native.tsx";
import asyncRequireImpl from "../../../../../_runtime/01987_asyncRequireImpl.js";
import useToken from "../../../../design/tokens/native/useToken.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import QuestTypes from "../../QuestTypes.tsx";
import AdCreativeType from "../../../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import AnalyticsActions from "../../lib/analytics/AnalyticsActions.tsx";
import AnalyticsTypes from "../../lib/analytics/AnalyticsTypes.tsx";
import captureAdUserAction from "../../../ads/analytics/captureAdUserAction.tsx";
import captureAdUserActionTypes from "../../../ads/analytics/captureAdUserActionTypes.tsx";
import AdAnalyticsInterfaceExperiment from "../../experiments/AdAnalyticsInterfaceExperiment.tsx";
import ClientThemesOverrides from "../../../client_themes/native/ClientThemesOverrides.tsx";
import cheapWorkletShallowEqual from "../../../reanimated/native/cheapWorkletShallowEqual.tsx";
import QuestDockUtils from "QuestDockUtils.tsx";
import AdCreativeUtils from "../../../ads/utils/AdCreativeUtils.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import QuestDockStore from "QuestDockStore.tsx";

const require = globalThis.__r;

const AssetUtils = getScaledImageUrl(10000);
require = fn;
const QuestConstants = fn(5623);
({ DEFAULT_PORTRAIT_ASPECT_RATIO: metroRequire, QuestDockMode: closure_7 } = QuestConstants);
const QuestDockConstants = fn(14892);
({
  QUEST_DOCK_CLOSED_HEIGHT: closure_8,
  QUEST_DOCK_COLLAPSED_HEIGHT: closure_9,
  QUEST_DOCK_EXTERNAL_OFFSET_CLOSED: c10,
  QUEST_DOCK_EXTERNAL_OFFSET_COLLAPSED_WITH_YOU_BAR: closure_11,
  QUEST_DOCK_EXTERNAL_OFFSET_EXPANDED_WITH_YOU_BAR: closure_12,
  QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED: map1,
} = QuestDockConstants);
fn(558);
const __initData = {
  code: "function QuestDockHooksTsx1(){const{restingQuestDockMode,minExpandedContentHeight,windowDimensions,safeArea}=this.__closure;return{restingQuestDockMode:restingQuestDockMode.get(),minExpandedContentHeight:minExpandedContentHeight.get(),windowWidth:windowDimensions.get().width,windowHeight:windowDimensions.get().height,safeArea:safeArea.get()};}",
};
const __initData2 = {
  code: "function QuestDockHooksTsx2(props,previous){const{cheapWorkletShallowEqual,QuestDockMode,runOnJS,setRestingQuestDockMode,questDockWrapperSpecs,getQuestDockCollapsedWidth,youBarHorizontalMargin,QUEST_DOCK_COLLAPSED_HEIGHT,activeQuestDockMode,getQuestDockClosedWidth,QUEST_DOCK_CLOSED_HEIGHT,getQuestDockExpandedHeightLimits,youBarHeight,QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED,getQuestDockExpandedWidth}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined)){return;}const{restingQuestDockMode:restingQuestDockMode_0,minExpandedContentHeight:minExpandedContentHeight_0,windowWidth:windowWidth,windowHeight:windowHeight,safeArea:safeArea_0}=props;bb11:switch(restingQuestDockMode_0){case QuestDockMode.RESET_TO_PREVIOUS:{var _previous$restingQues;runOnJS(setRestingQuestDockMode)((_previous$restingQues=previous===null||previous===void 0?void 0:previous.restingQuestDockMode)!==null&&_previous$restingQues!==void 0?_previous$restingQues:QuestDockMode.COLLAPSED);return;}case QuestDockMode.COLLAPSED:{questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:0,width:getQuestDockCollapsedWidth(windowWidth,youBarHorizontalMargin,youBarHorizontalMargin),height:QUEST_DOCK_COLLAPSED_HEIGHT});activeQuestDockMode.set(QuestDockMode.COLLAPSED);break bb11;}case QuestDockMode.CLOSED:case QuestDockMode.SOFT_DISMISSED:{questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:0,width:getQuestDockClosedWidth(windowWidth,youBarHorizontalMargin,youBarHorizontalMargin),height:QUEST_DOCK_CLOSED_HEIGHT});activeQuestDockMode.set(restingQuestDockMode_0);break bb11;}case QuestDockMode.EXPANDED:{const minContentHeight=minExpandedContentHeight_0;const{minHeight:minHeight,maxHeight:maxHeight}=getQuestDockExpandedHeightLimits(windowHeight,safeArea_0.top,minContentHeight);const heightMidpoint=(maxHeight+minHeight)/2;let height;if(questDockWrapperSpecs.get().height<=QUEST_DOCK_COLLAPSED_HEIGHT){height=maxHeight;}else{if(previous!=null&&questDockWrapperSpecs.get().height===getQuestDockExpandedHeightLimits(previous.windowHeight,previous.safeArea.top,minContentHeight).maxHeight){height=maxHeight;}else{if(questDockWrapperSpecs.get().height>=heightMidpoint){height=maxHeight;}else{height=maxHeight;}}}questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:youBarHeight>0?youBarHeight:QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED,width:getQuestDockExpandedWidth(windowWidth,safeArea_0.left,safeArea_0.right),height:height});activeQuestDockMode.set(QuestDockMode.EXPANDED);}}}",
};
const __initData3 = {
  code: "function QuestDockHooksTsx3(){const{restingQuestDockMode,minExpandedContentHeight,windowDimensions,safeArea}=this.__closure;return{restingQuestDockMode:restingQuestDockMode.get(),minExpandedContentHeight:minExpandedContentHeight.get(),windowWidth:windowDimensions.get().width,windowHeight:windowDimensions.get().height,safeArea:safeArea.get()};}",
};
const __initData4 = {
  code: "function QuestDockHooksTsx4(props,previous){const{cheapWorkletShallowEqual,QuestDockMode,runOnJS,setRestingQuestDockMode,questDockWrapperSpecs,getQuestDockCollapsedWidth,youBarHorizontalMargin,QUEST_DOCK_COLLAPSED_HEIGHT,activeQuestDockMode,getQuestDockClosedWidth,QUEST_DOCK_CLOSED_HEIGHT,getQuestDockExpandedHeightLimits,youBarHeight,QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED,getQuestDockExpandedWidth}=this.__closure;var _previous$restingQues;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{restingQuestDockMode:restingQuestDockMode_0,minExpandedContentHeight:minExpandedContentHeight_0,windowWidth:windowWidth,windowHeight:windowHeight,safeArea:safeArea_0}=props;switch(restingQuestDockMode_0){case QuestDockMode.RESET_TO_PREVIOUS:runOnJS(setRestingQuestDockMode)((_previous$restingQues=previous===null||previous===void 0?void 0:previous.restingQuestDockMode)!==null&&_previous$restingQues!==void 0?_previous$restingQues:QuestDockMode.COLLAPSED);return;case QuestDockMode.COLLAPSED:questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:0,width:getQuestDockCollapsedWidth(windowWidth,youBarHorizontalMargin,youBarHorizontalMargin),height:QUEST_DOCK_COLLAPSED_HEIGHT});activeQuestDockMode.set(QuestDockMode.COLLAPSED);break;case QuestDockMode.CLOSED:case QuestDockMode.SOFT_DISMISSED:questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:0,width:getQuestDockClosedWidth(windowWidth,youBarHorizontalMargin,youBarHorizontalMargin),height:QUEST_DOCK_CLOSED_HEIGHT});activeQuestDockMode.set(restingQuestDockMode_0);break;case QuestDockMode.EXPANDED:const minContentHeight=minExpandedContentHeight_0;const{minHeight:minHeight,maxHeight:maxHeight}=getQuestDockExpandedHeightLimits(windowHeight,safeArea_0.top,minContentHeight);const heightMidpoint=(maxHeight+minHeight)/2;let height;if(questDockWrapperSpecs.get().height<=QUEST_DOCK_COLLAPSED_HEIGHT){height=maxHeight;}else if(previous!=null&&questDockWrapperSpecs.get().height===getQuestDockExpandedHeightLimits(previous.windowHeight,previous.safeArea.top,minContentHeight).maxHeight){height=maxHeight;}else if(questDockWrapperSpecs.get().height>=heightMidpoint){height=maxHeight;}else{height=maxHeight;}questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:youBarHeight>0?youBarHeight:QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED,width:getQuestDockExpandedWidth(windowWidth,safeArea_0.left,safeArea_0.right),height:height});activeQuestDockMode.set(QuestDockMode.EXPANDED);break;}}",
};
let ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [QuestDockStore];
        const fn = function o() {
          return QuestDockStore.prevRestingQuestDockMode === constants.EXPANDED;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      return initialize.useStateFromStores(tmp4, tmp5);
    }
  : () => {
      const items = [QuestDockStore];
      return initialize.useStateFromStores(items, () => QuestDockStore.prevRestingQuestDockMode === constants.EXPANDED);
    };
ReactCompilerGating = fn(558);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const context = restingQuestDockMode.useContext(
        questDockWrapperSpecs(activeQuestDockMode[8]).QuestDockGestureContext,
      );
      questDockWrapperSpecs = context.questDockWrapperSpecs;
      const windowDimensions = context.windowDimensions;
      activeQuestDockMode = context.activeQuestDockMode;
      const minExpandedContentHeight = context.minExpandedContentHeight;
      const context1 = restingQuestDockMode.useContext(
        questDockWrapperSpecs(activeQuestDockMode[9]).QuestDockExternalCoordinationContext,
      );
      restingQuestDockMode = context1.restingQuestDockMode;
      const setRestingQuestDockMode = context1.setRestingQuestDockMode;
      let tmp3 = windowDimensions(activeQuestDockMode[10])();
      closure_6 = tmp3;
      const youBarHorizontalMargin = questDockWrapperSpecs(activeQuestDockMode[11]).useYouBarHorizontalMargin();
      let obj = questDockWrapperSpecs(activeQuestDockMode[11]);
      const youBarTotalHeight = questDockWrapperSpecs(activeQuestDockMode[12]).useYouBarTotalHeight();
      let obj2 = questDockWrapperSpecs(activeQuestDockMode[12]);
      const fn = function s() {
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
        if (!obj.cheapWorkletShallowEqual(safeAreaState, tmp3)) {
          ({ restingQuestDockMode, minExpandedContentHeight, windowWidth, safeArea } = safeAreaState);
          if (constants.RESET_TO_PREVIOUS === restingQuestDockMode) {
            let restingQuestDockMode1;
            const tmpResult = ReanimatedRexport;
            if (restingQuestDockMode != null) {
              restingQuestDockMode1 = restingQuestDockMode.restingQuestDockMode;
            }
            if (restingQuestDockMode1 == null) {
              restingQuestDockMode1 = constants.COLLAPSED;
            }
            ReanimatedRexport.runOnJS(setRestingQuestDockMode)(restingQuestDockMode1);
            const runOnJSResult = ReanimatedRexport.runOnJS(setRestingQuestDockMode);
          } else if (constants.COLLAPSED === restingQuestDockMode) {
            const obj2 = {};
            const merged = Object.assign(questDockWrapperSpecs.get());
            obj2.x = 0;
            obj2.y = 0;
            obj2.width = QuestDockUtils.getQuestDockCollapsedWidth(
              windowWidth,
              youBarHorizontalMargin,
              youBarHorizontalMargin,
            );
            obj2.height = height;
            const result = questDockWrapperSpecs.set(obj2);
            const result1 = activeQuestDockMode.set(constants.COLLAPSED);
            const tmpResult6 = QuestDockUtils;
          } else {
            if (constants.CLOSED !== restingQuestDockMode) {
              if (constants.SOFT_DISMISSED !== restingQuestDockMode) {
                if (constants.EXPANDED === restingQuestDockMode) {
                  const questDockExpandedHeightLimits = QuestDockUtils.getQuestDockExpandedHeightLimits(
                    tmp4,
                    safeArea.top,
                    minExpandedContentHeight,
                  );
                  const minHeight = questDockExpandedHeightLimits.minHeight;
                  let tmp7 = questDockWrapperSpecs.get().height <= height;
                  if (!tmp7) {
                    let tmp6 = null != restingQuestDockMode;
                    if (tmp6) {
                      tmp6 =
                        questDockWrapperSpecs.get().height ===
                        QuestDockUtils.getQuestDockExpandedHeightLimits(
                          restingQuestDockMode.windowHeight,
                          restingQuestDockMode.safeArea.top,
                          minExpandedContentHeight,
                        ).maxHeight;
                      const tmpResult8 = QuestDockUtils;
                    }
                    tmp7 = tmp6;
                  }
                  if (!tmp7) {
                    height = questDockWrapperSpecs.get().height;
                  }
                  const obj3 = {};
                  const merged1 = Object.assign(questDockWrapperSpecs.get());
                  obj3.x = 0;
                  let tmp10 = youBarTotalHeight;
                  if (youBarTotalHeight <= 0) {
                    tmp10 = QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED;
                  }
                  obj3.y = tmp10;
                  const tmpResult7 = QuestDockUtils;
                  obj3.width = QuestDockUtils.getQuestDockExpandedWidth(windowWidth, safeArea.left, safeArea.right);
                  obj3.height = questDockExpandedHeightLimits.maxHeight;
                  const result2 = questDockWrapperSpecs.set(obj3);
                  const result3 = activeQuestDockMode.set(constants.EXPANDED);
                  const tmpResult9 = QuestDockUtils;
                }
              }
            }
            const obj4 = {};
            const merged2 = Object.assign(questDockWrapperSpecs.get());
            obj4.x = 0;
            obj4.y = 0;
            obj4.width = QuestDockUtils.getQuestDockClosedWidth(
              windowWidth,
              youBarHorizontalMargin,
              youBarHorizontalMargin,
            );
            obj4.height = height;
            const result4 = questDockWrapperSpecs.set(obj4);
            const result5 = activeQuestDockMode.set(restingQuestDockMode);
            const tmpResult10 = QuestDockUtils;
          }
        }
        obj = cheapWorkletShallowEqual;
        tmp3 = restingQuestDockMode;
      };
      let obj3 = questDockWrapperSpecs(activeQuestDockMode[13]);
      fn2.__closure = {
        cheapWorkletShallowEqual: questDockWrapperSpecs(activeQuestDockMode[14]).cheapWorkletShallowEqual,
        QuestDockMode: youBarHorizontalMargin,
        runOnJS: questDockWrapperSpecs(activeQuestDockMode[13]).runOnJS,
        setRestingQuestDockMode,
        questDockWrapperSpecs,
        getQuestDockCollapsedWidth: questDockWrapperSpecs(activeQuestDockMode[15]).getQuestDockCollapsedWidth,
        youBarHorizontalMargin,
        QUEST_DOCK_COLLAPSED_HEIGHT,
        activeQuestDockMode,
        getQuestDockClosedWidth: questDockWrapperSpecs(activeQuestDockMode[15]).getQuestDockClosedWidth,
        QUEST_DOCK_CLOSED_HEIGHT: youBarTotalHeight,
        getQuestDockExpandedHeightLimits: questDockWrapperSpecs(activeQuestDockMode[15])
          .getQuestDockExpandedHeightLimits,
        youBarHeight: youBarTotalHeight,
        QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED,
        getQuestDockExpandedWidth: questDockWrapperSpecs(activeQuestDockMode[15]).getQuestDockExpandedWidth,
      };
      fn2.__workletHash = 11488812261540;
      fn2.__initData = __initData2;
      const animatedReaction = obj3.useAnimatedReaction(fn, fn2);
    }
  : () => {
      const context = restingQuestDockMode.useContext(
        questDockWrapperSpecs(activeQuestDockMode[8]).QuestDockGestureContext,
      );
      questDockWrapperSpecs = context.questDockWrapperSpecs;
      const windowDimensions = context.windowDimensions;
      activeQuestDockMode = context.activeQuestDockMode;
      const minExpandedContentHeight = context.minExpandedContentHeight;
      const context1 = restingQuestDockMode.useContext(
        questDockWrapperSpecs(activeQuestDockMode[9]).QuestDockExternalCoordinationContext,
      );
      restingQuestDockMode = context1.restingQuestDockMode;
      const setRestingQuestDockMode = context1.setRestingQuestDockMode;
      let tmp3 = windowDimensions(activeQuestDockMode[10])();
      closure_6 = tmp3;
      const youBarHorizontalMargin = questDockWrapperSpecs(activeQuestDockMode[11]).useYouBarHorizontalMargin();
      let obj = questDockWrapperSpecs(activeQuestDockMode[11]);
      const youBarTotalHeight = questDockWrapperSpecs(activeQuestDockMode[12]).useYouBarTotalHeight();
      let obj2 = questDockWrapperSpecs(activeQuestDockMode[12]);
      const fn = function s() {
        return {
          restingQuestDockMode: restingQuestDockMode.get(),
          minExpandedContentHeight: minExpandedContentHeight.get(),
          windowWidth: windowDimensions.get().width,
          windowHeight: windowDimensions.get().height,
          safeArea: closure_6.get(),
        };
      };
      fn.__closure = { restingQuestDockMode, minExpandedContentHeight, windowDimensions, safeArea: tmp3 };
      fn.__workletHash = 16898541275483;
      fn.__initData = __initData3;
      const fn2 = function t(safeAreaState, restingQuestDockMode) {
        if (!obj.cheapWorkletShallowEqual(safeAreaState, tmp3)) {
          ({ restingQuestDockMode, minExpandedContentHeight, windowWidth, safeArea } = safeAreaState);
          if (constants.RESET_TO_PREVIOUS === restingQuestDockMode) {
            let restingQuestDockMode1;
            const tmpResult = ReanimatedRexport;
            if (restingQuestDockMode != null) {
              restingQuestDockMode1 = restingQuestDockMode.restingQuestDockMode;
            }
            if (restingQuestDockMode1 == null) {
              restingQuestDockMode1 = constants.COLLAPSED;
            }
            ReanimatedRexport.runOnJS(setRestingQuestDockMode)(restingQuestDockMode1);
            const runOnJSResult = ReanimatedRexport.runOnJS(setRestingQuestDockMode);
          } else if (constants.COLLAPSED === restingQuestDockMode) {
            const obj2 = {};
            const merged = Object.assign(questDockWrapperSpecs.get());
            obj2.x = 0;
            obj2.y = 0;
            obj2.width = QuestDockUtils.getQuestDockCollapsedWidth(
              windowWidth,
              youBarHorizontalMargin,
              youBarHorizontalMargin,
            );
            obj2.height = height;
            const result = questDockWrapperSpecs.set(obj2);
            const result1 = activeQuestDockMode.set(constants.COLLAPSED);
            const tmpResult6 = QuestDockUtils;
          } else {
            if (constants.CLOSED !== restingQuestDockMode) {
              if (constants.SOFT_DISMISSED !== restingQuestDockMode) {
                if (constants.EXPANDED === restingQuestDockMode) {
                  const questDockExpandedHeightLimits = QuestDockUtils.getQuestDockExpandedHeightLimits(
                    tmp4,
                    safeArea.top,
                    minExpandedContentHeight,
                  );
                  const minHeight = questDockExpandedHeightLimits.minHeight;
                  let tmp7 = questDockWrapperSpecs.get().height <= height;
                  if (!tmp7) {
                    let tmp6 = null != restingQuestDockMode;
                    if (tmp6) {
                      tmp6 =
                        questDockWrapperSpecs.get().height ===
                        QuestDockUtils.getQuestDockExpandedHeightLimits(
                          restingQuestDockMode.windowHeight,
                          restingQuestDockMode.safeArea.top,
                          minExpandedContentHeight,
                        ).maxHeight;
                      const tmpResult8 = QuestDockUtils;
                    }
                    tmp7 = tmp6;
                  }
                  if (!tmp7) {
                    height = questDockWrapperSpecs.get().height;
                  }
                  const obj3 = {};
                  const merged1 = Object.assign(questDockWrapperSpecs.get());
                  obj3.x = 0;
                  let tmp10 = youBarTotalHeight;
                  if (youBarTotalHeight <= 0) {
                    tmp10 = QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED;
                  }
                  obj3.y = tmp10;
                  const tmpResult7 = QuestDockUtils;
                  obj3.width = QuestDockUtils.getQuestDockExpandedWidth(windowWidth, safeArea.left, safeArea.right);
                  obj3.height = questDockExpandedHeightLimits.maxHeight;
                  const result2 = questDockWrapperSpecs.set(obj3);
                  const result3 = activeQuestDockMode.set(constants.EXPANDED);
                  const tmpResult9 = QuestDockUtils;
                }
              }
            }
            const obj4 = {};
            const merged2 = Object.assign(questDockWrapperSpecs.get());
            obj4.x = 0;
            obj4.y = 0;
            obj4.width = QuestDockUtils.getQuestDockClosedWidth(
              windowWidth,
              youBarHorizontalMargin,
              youBarHorizontalMargin,
            );
            obj4.height = height;
            const result4 = questDockWrapperSpecs.set(obj4);
            const result5 = activeQuestDockMode.set(restingQuestDockMode);
            const tmpResult10 = QuestDockUtils;
          }
        }
        obj = cheapWorkletShallowEqual;
        tmp3 = restingQuestDockMode;
      };
      let obj3 = questDockWrapperSpecs(activeQuestDockMode[13]);
      fn2.__closure = {
        cheapWorkletShallowEqual: questDockWrapperSpecs(activeQuestDockMode[14]).cheapWorkletShallowEqual,
        QuestDockMode: youBarHorizontalMargin,
        runOnJS: questDockWrapperSpecs(activeQuestDockMode[13]).runOnJS,
        setRestingQuestDockMode,
        questDockWrapperSpecs,
        getQuestDockCollapsedWidth: questDockWrapperSpecs(activeQuestDockMode[15]).getQuestDockCollapsedWidth,
        youBarHorizontalMargin,
        QUEST_DOCK_COLLAPSED_HEIGHT,
        activeQuestDockMode,
        getQuestDockClosedWidth: questDockWrapperSpecs(activeQuestDockMode[15]).getQuestDockClosedWidth,
        QUEST_DOCK_CLOSED_HEIGHT: youBarTotalHeight,
        getQuestDockExpandedHeightLimits: questDockWrapperSpecs(activeQuestDockMode[15])
          .getQuestDockExpandedHeightLimits,
        youBarHeight: youBarTotalHeight,
        QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED,
        getQuestDockExpandedWidth: questDockWrapperSpecs(activeQuestDockMode[15]).getQuestDockExpandedWidth,
      };
      fn2.__workletHash = 2968592526554;
      fn2.__initData = __initData4;
      const animatedReaction = obj3.useAnimatedReaction(fn, fn2);
    };
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [QuestDockStore];
        const fn = function n() {
          const items = [,];
          ({ prevRestingQuestDockMode: arr[0], isEligibleToBeVisible: arr[1] } = QuestDockStore);
          return items;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmp7 = _slicedToArray(initialize.useStateFromStoresArray(tmp4, tmp5), 2);
      const first = tmp7[0];
      let num3 = 0;
      if (tmp7[1]) {
        if (constants.COLLAPSED === first) {
          num3 = closure_1_11;
        } else if (constants.EXPANDED === first) {
          num3 = __initData;
        } else if (constants.CLOSED === first) {
          num3 = v65535;
        } else {
          num3 = 0;
        }
      }
      return num3;
    }
  : () => {
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
          if (constants.COLLAPSED === first) {
            return closure_2_11;
          } else if (constants.EXPANDED === first) {
            return __initData;
          } else {
            if (constants.CLOSED !== first) {
              if (constants.SOFT_DISMISSED !== first) {
                return 0;
              }
            }
            return v65535;
          }
        } else {
          return 0;
        }
      }, items1);
    };
ReactCompilerGating = fn(558);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = setRestingQuestDockMode(576).c(4);
      setRestingQuestDockMode = noop.useContext(
        setRestingQuestDockMode(14896).QuestDockExternalCoordinationContext,
      ).setRestingQuestDockMode;
      const activeQuestDockMode = noop.useContext(
        setRestingQuestDockMode(14893).QuestDockGestureContext,
      ).activeQuestDockMode;
      if (cResult[0] === activeQuestDockMode) {
        if (cResult[1] === setRestingQuestDockMode) {
          let tmp2 = cResult[2];
          let tmp3 = cResult[3];
        }
        const effect = noop.useEffect(tmp2, tmp3);
      }
      const fn = function t() {
        let isSoftDismissedResult = activeQuestDockMode.get() !== constants.SOFT_DISMISSED;
        if (!isSoftDismissedResult) {
          isSoftDismissedResult = setRestingQuestDockMode(14891).isSoftDismissed(
            QuestDockStore.questDockSoftDismissedAt,
          );
          let obj = setRestingQuestDockMode(14891);
        }
        if (!isSoftDismissedResult) {
          setRestingQuestDockMode(constants.COLLAPSED);
        }
        function maybeResetSoftDismissal() {
          let isSoftDismissedResult = activeQuestDockMode.get() !== constants.SOFT_DISMISSED;
          if (!isSoftDismissedResult) {
            isSoftDismissedResult = setRestingQuestDockMode(14891).isSoftDismissed(
              QuestDockStore.questDockSoftDismissedAt,
            );
            const obj = setRestingQuestDockMode(14891);
          }
          if (!isSoftDismissedResult) {
            closure_0(constants.COLLAPSED);
          }
        }
        setRestingQuestDockMode = setInterval(maybeResetSoftDismissal, 5 * activeQuestDockMode(1102).Millis.MINUTE);
        return () => {
          clearInterval(closure_0);
        };
      };
      const items = [setRestingQuestDockMode, activeQuestDockMode];
      cResult[0] = activeQuestDockMode;
      cResult[1] = setRestingQuestDockMode;
      cResult[2] = fn;
      cResult[3] = items;
      tmp3 = items;
      tmp2 = fn;
      let obj = setRestingQuestDockMode(576);
    }
  : () => {
      setRestingQuestDockMode = noop.useContext(
        setRestingQuestDockMode(14896).QuestDockExternalCoordinationContext,
      ).setRestingQuestDockMode;
      const activeQuestDockMode = noop.useContext(
        setRestingQuestDockMode(14893).QuestDockGestureContext,
      ).activeQuestDockMode;
      const items = [setRestingQuestDockMode, activeQuestDockMode];
      const effect = noop.useEffect(() => {
        let isSoftDismissedResult = activeQuestDockMode.get() !== constants.SOFT_DISMISSED;
        if (!isSoftDismissedResult) {
          isSoftDismissedResult = setRestingQuestDockMode(14891).isSoftDismissed(
            QuestDockStore.questDockSoftDismissedAt,
          );
          let obj = setRestingQuestDockMode(14891);
        }
        if (!isSoftDismissedResult) {
          setRestingQuestDockMode(constants.COLLAPSED);
        }
        function maybeResetSoftDismissal() {
          let isSoftDismissedResult = activeQuestDockMode.get() !== constants.SOFT_DISMISSED;
          if (!isSoftDismissedResult) {
            isSoftDismissedResult = setRestingQuestDockMode(14891).isSoftDismissed(
              QuestDockStore.questDockSoftDismissedAt,
            );
            const obj = setRestingQuestDockMode(14891);
          }
          if (!isSoftDismissedResult) {
            closure_0(constants.COLLAPSED);
          }
        }
        setRestingQuestDockMode = setInterval(maybeResetSoftDismissal, 5 * activeQuestDockMode(1102).Millis.MINUTE);
        return () => {
          clearInterval(closure_0);
        };
      }, items);
    };
ReactCompilerGating = fn(558);
const tmp8 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      _require = arg0;
      const cResult = require("c").c(3);
      let obj = require("c");
      const getQuestImpressionId = require("ContentImpressionTrackerHooks").useGetQuestImpressionId();
      if (cResult[0] === arg0) {
        if (cResult[1] === getQuestImpressionId) {
          let tmp3 = cResult[2];
        }
        return tmp3;
      }
      const fn = function o() {
        const obj2 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL };
        const obj = captureAdUserAction;
        const merged = Object.assign(AdCreativeUtils.getCreativeAnalyticsParams(closure_0));
        obj2.questContentCTA = AnalyticsTypes.QuestContentCTA.EXPAND;
        obj2.surfaceId = QuestTypes.QuestContent.QUEST_BAR_MOBILE;
        obj2.sourceQuestContent = QuestTypes.QuestContent.QUEST_BAR_MOBILE;
        obj2.impressionId = getQuestImpressionId();
        obj.captureAdUserAction(obj2);
      };
      cResult[0] = arg0;
      cResult[1] = getQuestImpressionId;
      cResult[2] = fn;
      tmp3 = fn;
    }
  : (arg0) => {
      _require = arg0;
      const getQuestImpressionId = require("ContentImpressionTrackerHooks").useGetQuestImpressionId();
      const items = [arg0, getQuestImpressionId];
      return noop.useCallback(() => {
        const obj2 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL };
        const obj = captureAdUserAction;
        const merged = Object.assign(AdCreativeUtils.getCreativeAnalyticsParams(closure_0));
        obj2.questContentCTA = AnalyticsTypes.QuestContentCTA.EXPAND;
        obj2.surfaceId = QuestTypes.QuestContent.QUEST_BAR_MOBILE;
        obj2.sourceQuestContent = QuestTypes.QuestContent.QUEST_BAR_MOBILE;
        obj2.impressionId = getQuestImpressionId();
        obj.captureAdUserAction(obj2);
      }, items);
    };
ReactCompilerGating = fn(558);
const tmp9 = ReactCompilerGating.isReactCompilerEnabled()
  ? (imagePreview) => {
      let getScaledImageUrl = require;
      let scaledImageUrl1 = dependencyMap;
      const cResult = c.c(8);
      const width = useWindowDimensionsDefault().width;
      const result = width / timestampProducer;
      if (null != imagePreview.imagePreview) {
        if (cResult[0] === imagePreview.imagePreview) {
          if (cResult[1] === result) {
          }
        }
        const scaledImageUrl = AssetUtils;
        getScaledImageUrl = scaledImageUrl.getScaledImageUrl;
        const size = { assetUrl: imagePreview.imagePreview, width, height: result };
        scaledImageUrl1 = getScaledImageUrl(size);
        imagePreview = imagePreview.imagePreview;
        cResult[0] = imagePreview;
        cResult[1] = result;
        cResult[2] = width;
        cResult[3] = scaledImageUrl1;
      } else if (null == imagePreview.videoPreview) {
        return null;
      } else {
        if (cResult[4] === imagePreview.videoPreview) {
          if (cResult[5] === result) {
          }
        }
        const scaledImageUrl2 = AssetUtils;
        const size1 = { assetUrl: imagePreview.videoPreview, width, height: result };
        const scaledFirstFrameImageUrl = scaledImageUrl2.getScaledFirstFrameImageUrl(size1);
        cResult[4] = imagePreview.videoPreview;
        cResult[5] = result;
        cResult[6] = width;
        cResult[7] = scaledFirstFrameImageUrl;
      }
    }
  : (imagePreview) => {
      const width = useWindowDimensionsDefault().width;
      const result = width / timestampProducer;
      if (null != imagePreview.imagePreview) {
        const size = { assetUrl: imagePreview.imagePreview, width, height: result };
        let scaledImageUrl = AssetUtils.getScaledImageUrl(size);
      } else {
        scaledImageUrl = null;
        if (null != imagePreview.videoPreview) {
          const size1 = { assetUrl: imagePreview.videoPreview, width, height: result };
          scaledImageUrl = AssetUtils.getScaledFirstFrameImageUrl(size1);
        }
      }
      return scaledImageUrl;
    };
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockHooks.tsx");

export const useIsQuestDockExpanded = tmp4;
export const useQuestDockModeAnimatedReaction = tmp5;
export const useQuestDockExternalOffset = tmp6;
export const useQuestDockDismissalReset = tmp7;
export const useActionSheetPressHandler = function useActionSheetPressHandler(questCreative) {
  _require = questCreative;
  const questImpressionId = require("ContentImpressionTrackerHooks").useQuestImpressionId();
  const items = [questCreative, questImpressionId];
  return noop.useCallback(() => {
    const creativeAnalyticsParams = AdCreativeUtils.getCreativeAnalyticsParams(creative);
    if (
      obj2.shouldMigrateToAdAnalyticsInterface(
        AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL,
        "quest_dock_action_sheet",
      )
    ) {
      const obj3 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL };
      const merged = Object.assign(creativeAnalyticsParams);
      obj3.questContentCTA = AnalyticsTypes.QuestContentCTA.OPEN_CONTEXT_MENU;
      obj3.surfaceId = QuestTypes.QuestContent.QUEST_BAR_MOBILE;
      obj3.sourceQuestContent = QuestTypes.QuestContent.QUEST_BAR_MOBILE;
      obj3.impressionId = questImpressionId;
      captureAdUserAction.captureAdUserAction(obj3);
      let tmp7 = questImpressionId;
      const tmpResult = captureAdUserAction;
    } else if (creativeAnalyticsParams.adCreativeType === AdCreativeType.AdCreativeType.QUEST) {
      const obj4 = {
        questId: creativeAnalyticsParams.adCreativeId,
        questContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
        questContentCTA: AnalyticsTypes.QuestContentCTA.OPEN_CONTEXT_MENU,
        sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
        impressionId: questImpressionId,
      };
      const result = AnalyticsActions.trackQuestContentClicked(obj4);
      tmp7 = questImpressionId;
      const tmpResult3 = AnalyticsActions;
    } else {
      const obj5 = {
        adContentId: null,
        adCreativeType: null,
        questContent: null,
        questContentCTA: null,
        sourceQuestContent: null,
        impressionId: null,
      };
      ({ adCreativeId: obj9.adContentId, adCreativeType: obj9.adCreativeType } = creativeAnalyticsParams);
      obj5.questContent = QuestTypes.QuestContent.QUEST_BAR_MOBILE;
      obj5.questContentCTA = AnalyticsTypes.QuestContentCTA.OPEN_CONTEXT_MENU;
      obj5.sourceQuestContent = QuestTypes.QuestContent.QUEST_BAR_MOBILE;
      tmp7 = questImpressionId;
      obj5.impressionId = questImpressionId;
      const result1 = AnalyticsActions.trackAdContentClicked(obj5);
      const tmpResult4 = AnalyticsActions;
    }
    obj2 = AdAnalyticsInterfaceExperiment;
    ActionSheetActionCreatorsDefault.openLazy(
      asyncRequireImpl(14900, dependencyMap.paths),
      "QuestDockContextMenuActionSheet",
      { creative, impressionId: tmp7 },
    );
  }, items);
};
export const useQuestDockExpandHandler = tmp8;
export const useBountyPreviewImageUrl = tmp9;
export const useQuestDockAppThemedBackgroundColor = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const gradientBottom = ClientThemesOverrides.useGradientBottom();
      let backgroundColor;
      const token = useToken.useToken(nativeDefault.colors.BACKGROUND_SURFACE_HIGH);
      if (gradientBottom != null) {
        backgroundColor = gradientBottom.backgroundColor;
      }
      if (backgroundColor == null) {
        backgroundColor = token;
      }
      return backgroundColor;
    }
  : () => {
      const gradientBottom = ClientThemesOverrides.useGradientBottom();
      let backgroundColor;
      const token = useToken.useToken(nativeDefault.colors.BACKGROUND_SURFACE_HIGH);
      if (gradientBottom != null) {
        backgroundColor = gradientBottom.backgroundColor;
      }
      if (backgroundColor == null) {
        backgroundColor = token;
      }
      return backgroundColor;
    };
