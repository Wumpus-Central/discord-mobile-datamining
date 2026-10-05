// === Module 14893: QuestDockHooks ===

// Module 14893 (QuestDockHooks)
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1484 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import useToken from "useToken" /* 4580 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import QuestTypes from "QuestTypes" /* 5626 */;
import AdCreativeType from "AdCreativeType" /* 5630 */;
import AnalyticsActions from "AnalyticsActions" /* 7202 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7212 */;
import captureAdUserAction2 from "captureAdUserAction" /* 7213 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 7223 */;
import AdAnalyticsInterfaceExperiment from "AdAnalyticsInterfaceExperiment" /* 7224 */;
import ClientThemesOverrides from "ClientThemesOverrides" /* 7507 */;
import cheapWorkletShallowEqual2 from "cheapWorkletShallowEqual" /* 9074 */;
import AssetUtils from "AssetUtils" /* 10000 */;
import QuestDockUtils from "QuestDockUtils" /* 14895 */;
import AdCreativeUtils from "AdCreativeUtils" /* 14903 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import QuestDockStore from "QuestDockStore" /* 14894 */;
import QuestConstants from "QuestConstants" /* 5623 */;
import QuestDockConstants from "QuestDockConstants" /* 14896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, set, set2, set3;

let c10;
let c9;
let closure_12;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
({ DEFAULT_PORTRAIT_ASPECT_RATIO: metroRequire, QuestDockMode: metroImportDefault } = QuestConstants);
({ QUEST_DOCK_CLOSED_HEIGHT: metroImportAll, QUEST_DOCK_COLLAPSED_HEIGHT: c9, QUEST_DOCK_EXTERNAL_OFFSET_CLOSED: c10, QUEST_DOCK_EXTERNAL_OFFSET_COLLAPSED_WITH_YOU_BAR: unpackModuleId, QUEST_DOCK_EXTERNAL_OFFSET_EXPANDED_WITH_YOU_BAR: closure_12, QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED: map1 } = QuestDockConstants);
let ReactCompilerGating = ReactCompilerGating_mod;
const __initData = { code: "function QuestDockHooksTsx1(){const{restingQuestDockMode,minExpandedContentHeight,windowDimensions,safeArea}=this.__closure;return{restingQuestDockMode:restingQuestDockMode.get(),minExpandedContentHeight:minExpandedContentHeight.get(),windowWidth:windowDimensions.get().width,windowHeight:windowDimensions.get().height,safeArea:safeArea.get()};}" };
const __initData2 = { code: "function QuestDockHooksTsx2(props,previous){const{cheapWorkletShallowEqual,QuestDockMode,runOnJS,setRestingQuestDockMode,questDockWrapperSpecs,getQuestDockCollapsedWidth,youBarHorizontalMargin,QUEST_DOCK_COLLAPSED_HEIGHT,activeQuestDockMode,getQuestDockClosedWidth,QUEST_DOCK_CLOSED_HEIGHT,getQuestDockExpandedHeightLimits,youBarHeight,QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED,getQuestDockExpandedWidth}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined)){return;}const{restingQuestDockMode:restingQuestDockMode_0,minExpandedContentHeight:minExpandedContentHeight_0,windowWidth:windowWidth,windowHeight:windowHeight,safeArea:safeArea_0}=props;bb11:switch(restingQuestDockMode_0){case QuestDockMode.RESET_TO_PREVIOUS:{var _previous$restingQues;runOnJS(setRestingQuestDockMode)((_previous$restingQues=previous===null||previous===void 0?void 0:previous.restingQuestDockMode)!==null&&_previous$restingQues!==void 0?_previous$restingQues:QuestDockMode.COLLAPSED);return;}case QuestDockMode.COLLAPSED:{questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:0,width:getQuestDockCollapsedWidth(windowWidth,youBarHorizontalMargin,youBarHorizontalMargin),height:QUEST_DOCK_COLLAPSED_HEIGHT});activeQuestDockMode.set(QuestDockMode.COLLAPSED);break bb11;}case QuestDockMode.CLOSED:case QuestDockMode.SOFT_DISMISSED:{questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:0,width:getQuestDockClosedWidth(windowWidth,youBarHorizontalMargin,youBarHorizontalMargin),height:QUEST_DOCK_CLOSED_HEIGHT});activeQuestDockMode.set(restingQuestDockMode_0);break bb11;}case QuestDockMode.EXPANDED:{const minContentHeight=minExpandedContentHeight_0;const{minHeight:minHeight,maxHeight:maxHeight}=getQuestDockExpandedHeightLimits(windowHeight,safeArea_0.top,minContentHeight);const heightMidpoint=(maxHeight+minHeight)/2;let height;if(questDockWrapperSpecs.get().height<=QUEST_DOCK_COLLAPSED_HEIGHT){height=maxHeight;}else{if(previous!=null&&questDockWrapperSpecs.get().height===getQuestDockExpandedHeightLimits(previous.windowHeight,previous.safeArea.top,minContentHeight).maxHeight){height=maxHeight;}else{if(questDockWrapperSpecs.get().height>=heightMidpoint){height=maxHeight;}else{height=maxHeight;}}}questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:youBarHeight>0?youBarHeight:QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED,width:getQuestDockExpandedWidth(windowWidth,safeArea_0.left,safeArea_0.right),height:height});activeQuestDockMode.set(QuestDockMode.EXPANDED);}}}" };
const __initData3 = { code: "function QuestDockHooksTsx3(){const{restingQuestDockMode,minExpandedContentHeight,windowDimensions,safeArea}=this.__closure;return{restingQuestDockMode:restingQuestDockMode.get(),minExpandedContentHeight:minExpandedContentHeight.get(),windowWidth:windowDimensions.get().width,windowHeight:windowDimensions.get().height,safeArea:safeArea.get()};}" };
const __initData4 = { code: "function QuestDockHooksTsx4(props,previous){const{cheapWorkletShallowEqual,QuestDockMode,runOnJS,setRestingQuestDockMode,questDockWrapperSpecs,getQuestDockCollapsedWidth,youBarHorizontalMargin,QUEST_DOCK_COLLAPSED_HEIGHT,activeQuestDockMode,getQuestDockClosedWidth,QUEST_DOCK_CLOSED_HEIGHT,getQuestDockExpandedHeightLimits,youBarHeight,QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED,getQuestDockExpandedWidth}=this.__closure;var _previous$restingQues;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{restingQuestDockMode:restingQuestDockMode_0,minExpandedContentHeight:minExpandedContentHeight_0,windowWidth:windowWidth,windowHeight:windowHeight,safeArea:safeArea_0}=props;switch(restingQuestDockMode_0){case QuestDockMode.RESET_TO_PREVIOUS:runOnJS(setRestingQuestDockMode)((_previous$restingQues=previous===null||previous===void 0?void 0:previous.restingQuestDockMode)!==null&&_previous$restingQues!==void 0?_previous$restingQues:QuestDockMode.COLLAPSED);return;case QuestDockMode.COLLAPSED:questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:0,width:getQuestDockCollapsedWidth(windowWidth,youBarHorizontalMargin,youBarHorizontalMargin),height:QUEST_DOCK_COLLAPSED_HEIGHT});activeQuestDockMode.set(QuestDockMode.COLLAPSED);break;case QuestDockMode.CLOSED:case QuestDockMode.SOFT_DISMISSED:questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:0,width:getQuestDockClosedWidth(windowWidth,youBarHorizontalMargin,youBarHorizontalMargin),height:QUEST_DOCK_CLOSED_HEIGHT});activeQuestDockMode.set(restingQuestDockMode_0);break;case QuestDockMode.EXPANDED:const minContentHeight=minExpandedContentHeight_0;const{minHeight:minHeight,maxHeight:maxHeight}=getQuestDockExpandedHeightLimits(windowHeight,safeArea_0.top,minContentHeight);const heightMidpoint=(maxHeight+minHeight)/2;let height;if(questDockWrapperSpecs.get().height<=QUEST_DOCK_COLLAPSED_HEIGHT){height=maxHeight;}else if(previous!=null&&questDockWrapperSpecs.get().height===getQuestDockExpandedHeightLimits(previous.windowHeight,previous.safeArea.top,minContentHeight).maxHeight){height=maxHeight;}else if(questDockWrapperSpecs.get().height>=heightMidpoint){height=maxHeight;}else{height=maxHeight;}questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:youBarHeight>0?youBarHeight:QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED,width:getQuestDockExpandedWidth(windowWidth,safeArea_0.left,safeArea_0.right),height:height});activeQuestDockMode.set(QuestDockMode.EXPANDED);break;}}" };
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(2);
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
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStores(tmp4, tmp5);
}) : (() => {
  const items = [QuestDockStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => QuestDockStore.prevRestingQuestDockMode === constants.EXPANDED);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let activeQuestDockMode;
  let questDockWrapperSpecs;
  let restingQuestDockMode;
  const context = restingQuestDockMode.useContext(questDockWrapperSpecs(activeQuestDockMode[8]).QuestDockGestureContext);
  questDockWrapperSpecs = context.questDockWrapperSpecs;
  const windowDimensions = context.windowDimensions;
  activeQuestDockMode = context.activeQuestDockMode;
  const minExpandedContentHeight = context.minExpandedContentHeight;
  const context1 = restingQuestDockMode.useContext(questDockWrapperSpecs(activeQuestDockMode[9]).QuestDockExternalCoordinationContext);
  restingQuestDockMode = context1.restingQuestDockMode;
  const setRestingQuestDockMode = context1.setRestingQuestDockMode;
  const tmp3 = windowDimensions(activeQuestDockMode[10])();
  let closure_6 = tmp3;
  let obj = questDockWrapperSpecs(activeQuestDockMode[11]);
  const youBarHorizontalMargin = obj.useYouBarHorizontalMargin();
  let obj2 = questDockWrapperSpecs(activeQuestDockMode[12]);
  const youBarTotalHeight = obj2.useYouBarTotalHeight();
  let obj3 = questDockWrapperSpecs(activeQuestDockMode[13]);
  const fn = function s() {
    const obj = { restingQuestDockMode: restingQuestDockMode.get(), minExpandedContentHeight: minExpandedContentHeight.get(), windowWidth: windowDimensions.get().width, windowHeight: windowDimensions.get().height, safeArea: closure_6.get() };
    return obj;
  };
  fn.__closure = { restingQuestDockMode, minExpandedContentHeight, windowDimensions, safeArea: tmp3 };
  fn.__workletHash = 9502251090521;
  fn.__initData = __initData;
  const fn2 = function t(safeAreaState, restingQuestDockMode) {
    let safeArea;
    let tmp11;
    let tmpResult10;
    let tmpResult6;
    let tmpResult9;
    let windowWidth;
    const cheapWorkletShallowEqual = cheapWorkletShallowEqual2.cheapWorkletShallowEqual;
    cheapWorkletShallowEqual2;
    const tmp4 = restingQuestDockMode;
    if (!cheapWorkletShallowEqual(safeAreaState, tmp4)) {
      ({ restingQuestDockMode, minExpandedContentHeight, windowWidth, safeArea } = safeAreaState);
      if (metroImportDefault.RESET_TO_PREVIOUS === restingQuestDockMode) {
        let restingQuestDockMode1;
        const tmpResult = ReanimatedRexport;
        const runOnJSResult = tmpResult.runOnJS(setRestingQuestDockMode);
        if (restingQuestDockMode != null) {
          restingQuestDockMode1 = restingQuestDockMode.restingQuestDockMode;
        }
        if (restingQuestDockMode1 == null) {
          restingQuestDockMode1 = metroImportDefault.COLLAPSED;
        }
        runOnJSResult(restingQuestDockMode1);
      } else if (metroImportDefault.COLLAPSED === restingQuestDockMode) {
        const obj = { x: 0, y: 0, width: tmpResult6.getQuestDockCollapsedWidth(windowWidth, youBarHorizontalMargin, youBarHorizontalMargin), height: metroImportAll };
        set3 = questDockWrapperSpecs.set;
        const merged = Object.assign(questDockWrapperSpecs.get());
        tmpResult6 = QuestDockUtils;
        set3(obj);
        const result = activeQuestDockMode.set(metroImportDefault.COLLAPSED);
      } else {
        if (metroImportDefault.CLOSED !== restingQuestDockMode) {
          if (metroImportDefault.SOFT_DISMISSED !== restingQuestDockMode) {
            if (metroImportDefault.EXPANDED === restingQuestDockMode) {
              const tmpResult7 = QuestDockUtils;
              const questDockExpandedHeightLimits = tmpResult7.getQuestDockExpandedHeightLimits(tmp5, safeArea.top, minExpandedContentHeight);
              const minHeight = questDockExpandedHeightLimits.minHeight;
              const maxHeight = questDockExpandedHeightLimits.maxHeight;
              let tmp8 = questDockWrapperSpecs.get().height <= metroImportAll;
              if (!tmp8) {
                let tmp7 = null != restingQuestDockMode;
                if (tmp7) {
                  metroImportAll = questDockWrapperSpecs.get().height;
                  const tmpResult8 = QuestDockUtils;
                  tmp7 = metroImportAll === tmpResult8.getQuestDockExpandedHeightLimits(restingQuestDockMode.windowHeight, restingQuestDockMode.safeArea.top, minExpandedContentHeight).maxHeight;
                }
                tmp8 = tmp7;
              }
              if (!tmp8) {
                const height2 = questDockWrapperSpecs.get().height;
              }
              const obj2 = { x: 0, y: tmp11, width: tmpResult9.getQuestDockExpandedWidth(windowWidth, safeArea.left, safeArea.right), height: maxHeight };
              set = questDockWrapperSpecs.set;
              const merged1 = Object.assign(questDockWrapperSpecs.get());
              tmp11 = youBarTotalHeight;
              if (youBarTotalHeight <= 0) {
                tmp11 = map1;
              }
              tmpResult9 = QuestDockUtils;
              const result1 = set(obj2);
              const result2 = activeQuestDockMode.set(metroImportDefault.EXPANDED);
            }
          }
        }
        const obj3 = { x: 0, y: 0, width: tmpResult10.getQuestDockClosedWidth(windowWidth, youBarHorizontalMargin, youBarHorizontalMargin), height: metroImportAll };
        set2 = questDockWrapperSpecs.set;
        const merged2 = Object.assign(questDockWrapperSpecs.get());
        tmpResult10 = QuestDockUtils;
        set2(obj3);
        const result3 = activeQuestDockMode.set(restingQuestDockMode);
      }
    }
  };
  fn2.__closure = { cheapWorkletShallowEqual: questDockWrapperSpecs(activeQuestDockMode[14]).cheapWorkletShallowEqual, QuestDockMode: youBarHorizontalMargin, runOnJS: questDockWrapperSpecs(activeQuestDockMode[13]).runOnJS, setRestingQuestDockMode, questDockWrapperSpecs, getQuestDockCollapsedWidth: questDockWrapperSpecs(activeQuestDockMode[15]).getQuestDockCollapsedWidth, youBarHorizontalMargin, QUEST_DOCK_COLLAPSED_HEIGHT, activeQuestDockMode, getQuestDockClosedWidth: questDockWrapperSpecs(activeQuestDockMode[15]).getQuestDockClosedWidth, QUEST_DOCK_CLOSED_HEIGHT: youBarTotalHeight, getQuestDockExpandedHeightLimits: questDockWrapperSpecs(activeQuestDockMode[15]).getQuestDockExpandedHeightLimits, youBarHeight: youBarTotalHeight, QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED, getQuestDockExpandedWidth: questDockWrapperSpecs(activeQuestDockMode[15]).getQuestDockExpandedWidth };
  fn2.__workletHash = 11488812261540;
  fn2.__initData = __initData2;
  ({ cheapWorkletShallowEqual: questDockWrapperSpecs(activeQuestDockMode[14]).cheapWorkletShallowEqual, QuestDockMode: youBarHorizontalMargin, runOnJS: questDockWrapperSpecs(activeQuestDockMode[13]).runOnJS, setRestingQuestDockMode, questDockWrapperSpecs, getQuestDockCollapsedWidth: questDockWrapperSpecs(activeQuestDockMode[15]).getQuestDockCollapsedWidth, youBarHorizontalMargin, QUEST_DOCK_COLLAPSED_HEIGHT, activeQuestDockMode, getQuestDockClosedWidth: questDockWrapperSpecs(activeQuestDockMode[15]).getQuestDockClosedWidth, QUEST_DOCK_CLOSED_HEIGHT: youBarTotalHeight, getQuestDockExpandedHeightLimits: questDockWrapperSpecs(activeQuestDockMode[15]).getQuestDockExpandedHeightLimits, youBarHeight: youBarTotalHeight, QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED, getQuestDockExpandedWidth: questDockWrapperSpecs(activeQuestDockMode[15]).getQuestDockExpandedWidth });
  const animatedReaction = obj3.useAnimatedReaction(fn, fn2);
}) : (() => {
  let activeQuestDockMode;
  let questDockWrapperSpecs;
  let restingQuestDockMode;
  const context = restingQuestDockMode.useContext(questDockWrapperSpecs(activeQuestDockMode[8]).QuestDockGestureContext);
  questDockWrapperSpecs = context.questDockWrapperSpecs;
  const windowDimensions = context.windowDimensions;
  activeQuestDockMode = context.activeQuestDockMode;
  const minExpandedContentHeight = context.minExpandedContentHeight;
  const context1 = restingQuestDockMode.useContext(questDockWrapperSpecs(activeQuestDockMode[9]).QuestDockExternalCoordinationContext);
  restingQuestDockMode = context1.restingQuestDockMode;
  const setRestingQuestDockMode = context1.setRestingQuestDockMode;
  const tmp3 = windowDimensions(activeQuestDockMode[10])();
  let closure_6 = tmp3;
  let obj = questDockWrapperSpecs(activeQuestDockMode[11]);
  const youBarHorizontalMargin = obj.useYouBarHorizontalMargin();
  let obj2 = questDockWrapperSpecs(activeQuestDockMode[12]);
  const youBarTotalHeight = obj2.useYouBarTotalHeight();
  let obj3 = questDockWrapperSpecs(activeQuestDockMode[13]);
  const fn = function s() {
    const obj = { restingQuestDockMode: restingQuestDockMode.get(), minExpandedContentHeight: minExpandedContentHeight.get(), windowWidth: windowDimensions.get().width, windowHeight: windowDimensions.get().height, safeArea: closure_6.get() };
    return obj;
  };
  fn.__closure = { restingQuestDockMode, minExpandedContentHeight, windowDimensions, safeArea: tmp3 };
  fn.__workletHash = 16898541275483;
  fn.__initData = __initData3;
  const fn2 = function t(safeAreaState, restingQuestDockMode) {
    let safeArea;
    let tmp11;
    let tmpResult10;
    let tmpResult6;
    let tmpResult9;
    let windowWidth;
    const cheapWorkletShallowEqual = cheapWorkletShallowEqual2.cheapWorkletShallowEqual;
    cheapWorkletShallowEqual2;
    const tmp4 = restingQuestDockMode;
    if (!cheapWorkletShallowEqual(safeAreaState, tmp4)) {
      ({ restingQuestDockMode, minExpandedContentHeight, windowWidth, safeArea } = safeAreaState);
      if (metroImportDefault.RESET_TO_PREVIOUS === restingQuestDockMode) {
        let restingQuestDockMode1;
        const tmpResult = ReanimatedRexport;
        const runOnJSResult = tmpResult.runOnJS(setRestingQuestDockMode);
        if (restingQuestDockMode != null) {
          restingQuestDockMode1 = restingQuestDockMode.restingQuestDockMode;
        }
        if (restingQuestDockMode1 == null) {
          restingQuestDockMode1 = metroImportDefault.COLLAPSED;
        }
        runOnJSResult(restingQuestDockMode1);
      } else if (metroImportDefault.COLLAPSED === restingQuestDockMode) {
        const obj = { x: 0, y: 0, width: tmpResult6.getQuestDockCollapsedWidth(windowWidth, youBarHorizontalMargin, youBarHorizontalMargin), height: metroImportAll };
        set3 = questDockWrapperSpecs.set;
        const merged = Object.assign(questDockWrapperSpecs.get());
        tmpResult6 = QuestDockUtils;
        set3(obj);
        const result = activeQuestDockMode.set(metroImportDefault.COLLAPSED);
      } else {
        if (metroImportDefault.CLOSED !== restingQuestDockMode) {
          if (metroImportDefault.SOFT_DISMISSED !== restingQuestDockMode) {
            if (metroImportDefault.EXPANDED === restingQuestDockMode) {
              const tmpResult7 = QuestDockUtils;
              const questDockExpandedHeightLimits = tmpResult7.getQuestDockExpandedHeightLimits(tmp5, safeArea.top, minExpandedContentHeight);
              const minHeight = questDockExpandedHeightLimits.minHeight;
              const maxHeight = questDockExpandedHeightLimits.maxHeight;
              let tmp8 = questDockWrapperSpecs.get().height <= metroImportAll;
              if (!tmp8) {
                let tmp7 = null != restingQuestDockMode;
                if (tmp7) {
                  metroImportAll = questDockWrapperSpecs.get().height;
                  const tmpResult8 = QuestDockUtils;
                  tmp7 = metroImportAll === tmpResult8.getQuestDockExpandedHeightLimits(restingQuestDockMode.windowHeight, restingQuestDockMode.safeArea.top, minExpandedContentHeight).maxHeight;
                }
                tmp8 = tmp7;
              }
              if (!tmp8) {
                const height2 = questDockWrapperSpecs.get().height;
              }
              const obj2 = { x: 0, y: tmp11, width: tmpResult9.getQuestDockExpandedWidth(windowWidth, safeArea.left, safeArea.right), height: maxHeight };
              set = questDockWrapperSpecs.set;
              const merged1 = Object.assign(questDockWrapperSpecs.get());
              tmp11 = youBarTotalHeight;
              if (youBarTotalHeight <= 0) {
                tmp11 = map1;
              }
              tmpResult9 = QuestDockUtils;
              const result1 = set(obj2);
              const result2 = activeQuestDockMode.set(metroImportDefault.EXPANDED);
            }
          }
        }
        const obj3 = { x: 0, y: 0, width: tmpResult10.getQuestDockClosedWidth(windowWidth, youBarHorizontalMargin, youBarHorizontalMargin), height: metroImportAll };
        set2 = questDockWrapperSpecs.set;
        const merged2 = Object.assign(questDockWrapperSpecs.get());
        tmpResult10 = QuestDockUtils;
        set2(obj3);
        const result3 = activeQuestDockMode.set(restingQuestDockMode);
      }
    }
  };
  fn2.__closure = { cheapWorkletShallowEqual: questDockWrapperSpecs(activeQuestDockMode[14]).cheapWorkletShallowEqual, QuestDockMode: youBarHorizontalMargin, runOnJS: questDockWrapperSpecs(activeQuestDockMode[13]).runOnJS, setRestingQuestDockMode, questDockWrapperSpecs, getQuestDockCollapsedWidth: questDockWrapperSpecs(activeQuestDockMode[15]).getQuestDockCollapsedWidth, youBarHorizontalMargin, QUEST_DOCK_COLLAPSED_HEIGHT, activeQuestDockMode, getQuestDockClosedWidth: questDockWrapperSpecs(activeQuestDockMode[15]).getQuestDockClosedWidth, QUEST_DOCK_CLOSED_HEIGHT: youBarTotalHeight, getQuestDockExpandedHeightLimits: questDockWrapperSpecs(activeQuestDockMode[15]).getQuestDockExpandedHeightLimits, youBarHeight: youBarTotalHeight, QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED, getQuestDockExpandedWidth: questDockWrapperSpecs(activeQuestDockMode[15]).getQuestDockExpandedWidth };
  fn2.__workletHash = 2968592526554;
  fn2.__initData = __initData4;
  ({ cheapWorkletShallowEqual: questDockWrapperSpecs(activeQuestDockMode[14]).cheapWorkletShallowEqual, QuestDockMode: youBarHorizontalMargin, runOnJS: questDockWrapperSpecs(activeQuestDockMode[13]).runOnJS, setRestingQuestDockMode, questDockWrapperSpecs, getQuestDockCollapsedWidth: questDockWrapperSpecs(activeQuestDockMode[15]).getQuestDockCollapsedWidth, youBarHorizontalMargin, QUEST_DOCK_COLLAPSED_HEIGHT, activeQuestDockMode, getQuestDockClosedWidth: questDockWrapperSpecs(activeQuestDockMode[15]).getQuestDockClosedWidth, QUEST_DOCK_CLOSED_HEIGHT: youBarTotalHeight, getQuestDockExpandedHeightLimits: questDockWrapperSpecs(activeQuestDockMode[15]).getQuestDockExpandedHeightLimits, youBarHeight: youBarTotalHeight, QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED, getQuestDockExpandedWidth: questDockWrapperSpecs(activeQuestDockMode[15]).getQuestDockExpandedWidth });
  const animatedReaction = obj3.useAnimatedReaction(fn, fn2);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [QuestDockStore];
    const fn = function n() {
      const items = [, ];
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
  const tmpResult = get_initialized;
  const tmp7 = _slicedToArray(tmpResult.useStateFromStoresArray(tmp4, tmp5), 2);
  const first = tmp7[0];
  let num3 = 0;
  if (tmp7[1]) {
    if (metroImportDefault.COLLAPSED === first) {
      num3 = unpackModuleId;
    } else if (metroImportDefault.EXPANDED === first) {
      num3 = closure_12;
    } else if (metroImportDefault.CLOSED === first) {
      num3 = authStore;
    } else {
      num3 = 0;
    }
  }
  return num3;
}) : (() => {
  let first;
  let items = [QuestDockStore];
  const obj = first(504);
  const tmp = _slicedToArray(obj.useStateFromStoresArray(items, () => {
    const items = [, ];
    ({ prevRestingQuestDockMode: arr[0], isEligibleToBeVisible: arr[1] } = QuestDockStore);
    return items;
  }), 2);
  first = tmp[0];
  let closure_1 = tmp3;
  const items1 = [tmp[1], first];
  return react.useMemo(() => {
    if (closure_1) {
      if (metroImportDefault.COLLAPSED === first) {
        return unpackModuleId;
      } else if (metroImportDefault.EXPANDED === first) {
        return closure_12;
      } else {
        if (metroImportDefault.CLOSED !== first) {
          if (metroImportDefault.SOFT_DISMISSED !== first) {
            return 0;
          }
        }
        return authStore;
      }
    } else {
      return 0;
    }
  }, items1);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let setRestingQuestDockMode;
  let obj = setRestingQuestDockMode(576);
  const cResult = obj.c(4);
  setRestingQuestDockMode = react.useContext(setRestingQuestDockMode(14900).QuestDockExternalCoordinationContext).setRestingQuestDockMode;
  const activeQuestDockMode = react.useContext(setRestingQuestDockMode(14897).QuestDockGestureContext).activeQuestDockMode;
  if (cResult[0] === activeQuestDockMode) {
    let tmp2;
    let tmp3;
    if (cResult[1] === setRestingQuestDockMode) {
      tmp2 = cResult[2];
      tmp3 = cResult[3];
    }
    const effect = react.useEffect(tmp2, tmp3);
  }
  const fn = function t() {
    let closure_0;
    let isSoftDismissedResult = activeQuestDockMode.get() !== constants.SOFT_DISMISSED;
    if (!isSoftDismissedResult) {
      let obj = setRestingQuestDockMode(dependencyMap[15]);
      isSoftDismissedResult = obj.isSoftDismissed(QuestDockStore.questDockSoftDismissedAt);
    }
    if (!isSoftDismissedResult) {
      setRestingQuestDockMode(constants.COLLAPSED);
    }
    function maybeResetSoftDismissal() {
      let isSoftDismissedResult = activeQuestDockMode.get() !== constants.SOFT_DISMISSED;
      if (!isSoftDismissedResult) {
        const obj = setRestingQuestDockMode(dependencyMap[15]);
        isSoftDismissedResult = obj.isSoftDismissed(QuestDockStore.questDockSoftDismissedAt);
      }
      if (!isSoftDismissedResult) {
        closure_0(constants.COLLAPSED);
      }
    }
    setRestingQuestDockMode = setInterval(maybeResetSoftDismissal, 5 * activeQuestDockMode(dependencyMap[16]).Millis.MINUTE);
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
}) : (() => {
  let setRestingQuestDockMode;
  setRestingQuestDockMode = react.useContext(setRestingQuestDockMode(14900).QuestDockExternalCoordinationContext).setRestingQuestDockMode;
  const activeQuestDockMode = react.useContext(setRestingQuestDockMode(14897).QuestDockGestureContext).activeQuestDockMode;
  const items = [setRestingQuestDockMode, activeQuestDockMode];
  const effect = react.useEffect(() => {
    let closure_0;
    let isSoftDismissedResult = activeQuestDockMode.get() !== constants.SOFT_DISMISSED;
    if (!isSoftDismissedResult) {
      let obj = setRestingQuestDockMode(dependencyMap[15]);
      isSoftDismissedResult = obj.isSoftDismissed(QuestDockStore.questDockSoftDismissedAt);
    }
    if (!isSoftDismissedResult) {
      setRestingQuestDockMode(constants.COLLAPSED);
    }
    function maybeResetSoftDismissal() {
      let isSoftDismissedResult = activeQuestDockMode.get() !== constants.SOFT_DISMISSED;
      if (!isSoftDismissedResult) {
        const obj = setRestingQuestDockMode(dependencyMap[15]);
        isSoftDismissedResult = obj.isSoftDismissed(QuestDockStore.questDockSoftDismissedAt);
      }
      if (!isSoftDismissedResult) {
        closure_0(constants.COLLAPSED);
      }
    }
    setRestingQuestDockMode = setInterval(maybeResetSoftDismissal, 5 * activeQuestDockMode(dependencyMap[16]).Millis.MINUTE);
    return () => {
      clearInterval(closure_0);
    };
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(3);
  let obj2 = require("ContentImpressionTrackerHooks");
  const getQuestImpressionId = obj2.useGetQuestImpressionId();
  if (cResult[0] === arg0) {
    let tmp3;
    if (cResult[1] === getQuestImpressionId) {
      tmp3 = cResult[2];
    }
    return tmp3;
  }
  const fn = function o() {
    const tmp = captureAdUserAction2;
    const captureAdUserAction = tmp.captureAdUserAction;
    const obj = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, questContentCTA: AnalyticsTypes.QuestContentCTA.EXPAND, surfaceId: QuestTypes.QuestContent.QUEST_BAR_MOBILE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, impressionId: getQuestImpressionId() };
    const obj2 = AdCreativeUtils;
    const merged = Object.assign(obj2.getCreativeAnalyticsParams(closure_0));
    captureAdUserAction(obj);
  };
  cResult[0] = arg0;
  cResult[1] = getQuestImpressionId;
  cResult[2] = fn;
  tmp3 = fn;
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  let obj = require("ContentImpressionTrackerHooks");
  const getQuestImpressionId = obj.useGetQuestImpressionId();
  const items = [arg0, getQuestImpressionId];
  return react.useCallback(() => {
    const tmp = captureAdUserAction2;
    const captureAdUserAction = tmp.captureAdUserAction;
    const obj = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, questContentCTA: AnalyticsTypes.QuestContentCTA.EXPAND, surfaceId: QuestTypes.QuestContent.QUEST_BAR_MOBILE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, impressionId: getQuestImpressionId() };
    const obj2 = AdCreativeUtils;
    const merged = Object.assign(obj2.getCreativeAnalyticsParams(closure_0));
    captureAdUserAction(obj);
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? ((imagePreview) => {
  let tmp7;
  const obj = react2;
  const cResult = obj.c(8);
  const width = useWindowDimensionsDefault().width;
  const result = width / metroRequire;
  if (null != imagePreview.imagePreview) {
    if (cResult[0] === imagePreview.imagePreview) {
      if (cResult[1] === result) {
        let tmp8;
        if (cResult[2] === width) {
          tmp8 = cResult[3];
        }
        tmp7 = tmp8;
      }
    }
    size = { assetUrl: imagePreview.imagePreview, width, height: result };
    const tmpResult = AssetUtils;
    const scaledImageUrl = tmpResult.getScaledImageUrl(size);
    cResult[0] = imagePreview.imagePreview;
    cResult[1] = result;
    cResult[2] = width;
    cResult[3] = scaledImageUrl;
    tmp8 = scaledImageUrl;
  } else {
    tmp7 = null;
    if (null != imagePreview.videoPreview) {
      if (cResult[4] === imagePreview.videoPreview) {
        if (cResult[5] === result) {
          let tmp5;
          if (cResult[6] === width) {
            tmp5 = cResult[7];
          }
          tmp7 = tmp5;
        }
      }
      const size1 = { assetUrl: imagePreview.videoPreview, width, height: result };
      const tmpResult2 = AssetUtils;
      const scaledFirstFrameImageUrl = tmpResult2.getScaledFirstFrameImageUrl(size1);
      cResult[4] = imagePreview.videoPreview;
      cResult[5] = result;
      cResult[6] = width;
      cResult[7] = scaledFirstFrameImageUrl;
      tmp5 = scaledFirstFrameImageUrl;
    }
  }
  return tmp7;
}) : ((imagePreview) => {
  let scaledImageUrl;
  const width = useWindowDimensionsDefault().width;
  const result = width / metroRequire;
  if (null != imagePreview.imagePreview) {
    size = { assetUrl: imagePreview.imagePreview, width, height: result };
    const obj3 = AssetUtils;
    scaledImageUrl = obj3.getScaledImageUrl(size);
  } else {
    scaledImageUrl = null;
    if (null != imagePreview.videoPreview) {
      const size1 = { assetUrl: imagePreview.videoPreview, width, height: result };
      const obj = AssetUtils;
      scaledImageUrl = obj.getScaledFirstFrameImageUrl(size1);
    }
  }
  return scaledImageUrl;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp10 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const obj = ClientThemesOverrides;
  const gradientBottom = obj.useGradientBottom();
  let backgroundColor;
  const obj2 = useToken;
  const token = obj2.useToken(nativeDefault.colors.BACKGROUND_SURFACE_HIGH);
  if (gradientBottom != null) {
    backgroundColor = gradientBottom.backgroundColor;
  }
  if (backgroundColor == null) {
    backgroundColor = token;
  }
  return backgroundColor;
}) : (() => {
  const obj = ClientThemesOverrides;
  const gradientBottom = obj.useGradientBottom();
  let backgroundColor;
  const obj2 = useToken;
  const token = obj2.useToken(nativeDefault.colors.BACKGROUND_SURFACE_HIGH);
  if (gradientBottom != null) {
    backgroundColor = gradientBottom.backgroundColor;
  }
  if (backgroundColor == null) {
    backgroundColor = token;
  }
  return backgroundColor;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockHooks.tsx");

export const useIsQuestDockExpanded = tmp4;
export const useQuestDockModeAnimatedReaction = tmp5;
export const useQuestDockExternalOffset = tmp6;
export const useQuestDockDismissalReset = tmp7;
export const useActionSheetPressHandler = function useActionSheetPressHandler(questCreative) {
  _require = questCreative;
  let obj = require("ContentImpressionTrackerHooks");
  const questImpressionId = obj.useQuestImpressionId();
  const items = [questCreative, questImpressionId];
  return react.useCallback(() => {
    let tmp8;
    const obj = AdCreativeUtils;
    const creativeAnalyticsParams = obj.getCreativeAnalyticsParams(questCreative);
    const obj2 = AdAnalyticsInterfaceExperiment;
    if (obj2.shouldMigrateToAdAnalyticsInterface(AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_dock_action_sheet")) {
      const obj3 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, questContentCTA: AnalyticsTypes.QuestContentCTA.OPEN_CONTEXT_MENU, surfaceId: QuestTypes.QuestContent.QUEST_BAR_MOBILE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, impressionId: questImpressionId };
      const captureAdUserAction = captureAdUserAction2.captureAdUserAction;
      captureAdUserAction2;
      const merged = Object.assign(creativeAnalyticsParams);
      captureAdUserAction(obj3);
      tmp8 = questImpressionId;
    } else if (creativeAnalyticsParams.adCreativeType === AdCreativeType.AdCreativeType.QUEST) {
      const obj4 = { questId: creativeAnalyticsParams.adCreativeId, questContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, questContentCTA: AnalyticsTypes.QuestContentCTA.OPEN_CONTEXT_MENU, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, impressionId: questImpressionId };
      const trackQuestContentClicked = AnalyticsActions.trackQuestContentClicked;
      AnalyticsActions;
      const result = trackQuestContentClicked(obj4);
      tmp8 = questImpressionId;
    } else {
      ({ adCreativeId: obj6.adContentId, adCreativeType: obj6.adCreativeType } = creativeAnalyticsParams);
      const obj9 = { adContentId: null, adCreativeType: null, questContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, questContentCTA: AnalyticsTypes.QuestContentCTA.OPEN_CONTEXT_MENU, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, impressionId: questImpressionId };
      const trackAdContentClicked = AnalyticsActions.trackAdContentClicked;
      AnalyticsActions;
      tmp8 = questImpressionId;
      const result1 = trackAdContentClicked(obj9);
    }
    const obj5 = ActionSheetActionCreatorsDefault;
    obj5.openLazy(asyncRequire(14904, dependencyMap.paths), "QuestDockContextMenuActionSheet", { creative: questCreative, impressionId: tmp8 });
  }, items);
};
export const useQuestDockExpandHandler = tmp8;
export const useBountyPreviewImageUrl = tmp9;
export const useQuestDockAppThemedBackgroundColor = tmp10;