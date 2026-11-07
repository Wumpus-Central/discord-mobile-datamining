// === Module 17379: QuestDockHooks ===

// Module 17379 (QuestDockHooks)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 575 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1493 */;
import _mod1652 from "module_1652" /* 1652 */;
import _mod1705 from "module_1705" /* 1705 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import useToken from "useToken" /* 5724 */;
import QuestTypes from "QuestTypes" /* 6839 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7948 */;
import captureAdUserAction from "captureAdUserAction" /* 9775 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 9778 */;
import AssetUtils from "AssetUtils" /* 9785 */;
import ClientThemesOverrides from "ClientThemesOverrides" /* 9911 */;
import cheapWorkletShallowEqual from "cheapWorkletShallowEqual" /* 10210 */;
import useSafeAreaInsetsSharedValueDefault from "useSafeAreaInsetsSharedValue" /* 11384 */;
import QuestDockUtils from "QuestDockUtils" /* 17381 */;
import QuestDockGestureContext from "QuestDockGestureContext" /* 17383 */;
import useYouBarMargins from "useYouBarMargins" /* 17384 */;
import QuestDockExternalCoordinationContext from "QuestDockExternalCoordinationContext" /* 17386 */;
import useYouBarTotalHeight from "useYouBarTotalHeight" /* 17387 */;
import AdCreativeUtils from "AdCreativeUtils" /* 17389 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import QuestDockStore from "QuestDockStore" /* 17380 */;

const require = globalThis.__r;

require = fn;
const QuestConstants = fn(6836);
({ DEFAULT_PORTRAIT_ASPECT_RATIO: closure_6, QuestDockMode: metroImportDefault } = QuestConstants);
const QuestDockConstants = fn(17382);
({ QUEST_DOCK_CLOSED_HEIGHT: closure_8, QUEST_DOCK_COLLAPSED_HEIGHT: closure_9, QUEST_DOCK_EXTERNAL_OFFSET_CLOSED: closure_10, QUEST_DOCK_EXTERNAL_OFFSET_COLLAPSED_WITH_YOU_BAR: closure_11, QUEST_DOCK_EXTERNAL_OFFSET_EXPANDED_WITH_YOU_BAR: closure_12, QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED: map1 } = QuestDockConstants);
let closure_14 = { code: "(function QuestDockHooksTsx1(){let[restingQuestDockMode,minExpandedContentHeight,windowDimensions,safeArea]=this.__closure;return{restingQuestDockMode:restingQuestDockMode.get(),minExpandedContentHeight:minExpandedContentHeight.get(),windowWidth:windowDimensions.get().width,windowHeight:windowDimensions.get().height,safeArea:safeArea.get()};})" };
let closure_15 = { code: "(function QuestDockHooksTsx2(props,previous){let[cheapWorkletShallowEqual,QuestDockMode,scheduleOnRN,setRestingQuestDockMode,questDockWrapperSpecs,getQuestDockCollapsedWidth,youBarHorizontalMargin,QUEST_DOCK_COLLAPSED_HEIGHT,activeQuestDockMode,getQuestDockClosedWidth,QUEST_DOCK_CLOSED_HEIGHT,getQuestDockExpandedHeightLimits,youBarHeight,QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED,getQuestDockExpandedWidth]=this.__closure;var _previous$restingQues;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{restingQuestDockMode:restingQuestDockMode,minExpandedContentHeight:minExpandedContentHeight,windowWidth:windowWidth,windowHeight:windowHeight,safeArea:safeArea}=props;switch(restingQuestDockMode){case QuestDockMode.RESET_TO_PREVIOUS:scheduleOnRN(setRestingQuestDockMode,(_previous$restingQues=previous===null||previous===void 0?void 0:previous.restingQuestDockMode)!==null&&_previous$restingQues!==void 0?_previous$restingQues:QuestDockMode.COLLAPSED);return;case QuestDockMode.COLLAPSED:questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:0,width:getQuestDockCollapsedWidth(windowWidth,safeArea.left,safeArea.right,youBarHorizontalMargin),height:QUEST_DOCK_COLLAPSED_HEIGHT});activeQuestDockMode.set(QuestDockMode.COLLAPSED);break;case QuestDockMode.CLOSED:case QuestDockMode.SOFT_DISMISSED:questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:0,width:getQuestDockClosedWidth(windowWidth,safeArea.left,safeArea.right,youBarHorizontalMargin),height:QUEST_DOCK_CLOSED_HEIGHT});activeQuestDockMode.set(restingQuestDockMode);break;case QuestDockMode.EXPANDED:const minContentHeight=minExpandedContentHeight;const{minHeight:minHeight,maxHeight:maxHeight}=getQuestDockExpandedHeightLimits(windowHeight,safeArea.top,minContentHeight);const heightMidpoint=(maxHeight+minHeight)/2;let height;if(questDockWrapperSpecs.get().height<=QUEST_DOCK_COLLAPSED_HEIGHT){height=maxHeight;}else if(previous!=null&&questDockWrapperSpecs.get().height===getQuestDockExpandedHeightLimits(previous.windowHeight,previous.safeArea.top,minContentHeight).maxHeight){height=maxHeight;}else if(questDockWrapperSpecs.get().height>=heightMidpoint){height=maxHeight;}else{height=maxHeight;}questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:youBarHeight>0?youBarHeight:QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED,width:getQuestDockExpandedWidth(windowWidth,safeArea.left,safeArea.right),height:height});activeQuestDockMode.set(QuestDockMode.EXPANDED);break;}})" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockHooks.tsx");

export function useIsQuestDockExpanded() {
  items = [QuestDockStore];
  return initialize.useStateFromStores(items, () => QuestDockStore.prevRestingQuestDockMode === constants.EXPANDED);
}
export function useQuestDockModeAnimatedReaction() {
  const context = noop.useContext(QuestDockGestureContext.QuestDockGestureContext);
  ({ questDockWrapperSpecs, windowDimensions, activeQuestDockMode, minExpandedContentHeight } = context);
  const context1 = noop.useContext(QuestDockExternalCoordinationContext.QuestDockExternalCoordinationContext);
  ({ restingQuestDockMode, setRestingQuestDockMode } = context1);
  let tmp5 = useSafeAreaInsetsSharedValueDefault();
  const youBarHorizontalMargin = useYouBarMargins.useYouBarHorizontalMargin();
  const youBarTotalHeight = useYouBarTotalHeight.useYouBarTotalHeight();
  items = [_undefined10, restingQuestDockMode, minExpandedContentHeight, windowDimensions, tmp5];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  [tmp8, tmp9, tmp10, tmp11, tmp12] = items;
  class QuestDockHooksTsx1 {
    constructor() {
      obj = { restingQuestDockMode: closure_0.get(), minExpandedContentHeight: closure_1.get(), windowWidth: closure_2.get().width, windowHeight: closure_2.get().height, safeArea: closure_3.get() };
      return obj;
    }
  }
  const items1 = [tmp9, tmp10, tmp11, tmp12];
  QuestDockHooksTsx1.__closure = items1;
  QuestDockHooksTsx1.__workletHash = 13936751394400;
  QuestDockHooksTsx1.__initData = tmp8;
  const items2 = [closure_15, cheapWorkletShallowEqual.cheapWorkletShallowEqual, height, _mod1705.scheduleOnRN, setRestingQuestDockMode, questDockWrapperSpecs, QuestDockUtils.getQuestDockCollapsedWidth, youBarHorizontalMargin, React6, activeQuestDockMode, QuestDockUtils.getQuestDockClosedWidth, React5, QuestDockUtils.getQuestDockExpandedHeightLimits, youBarTotalHeight, state, QuestDockUtils.getQuestDockExpandedWidth];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  c10 = undefined;
  c11 = undefined;
  c12 = undefined;
  c13 = undefined;
  c14 = undefined;
  [tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28] = items2;
  class QuestDockHooksTsx2 {
    constructor(arg0, arg1) {
      tmp2 = arg1;
      tmp = closure_0;
      if (!tmp(arg0, tmp2)) {
        ({ restingQuestDockMode, minExpandedContentHeight, windowWidth, safeArea } = arg0);
        tmp4 = closure_1;
        if (closure_1.RESET_TO_PREVIOUS === restingQuestDockMode) {
          restingQuestDockMode1 = undefined;
          tmp34 = closure_2;
          tmp35 = closure_3;
          if (arg1 != null) {
            restingQuestDockMode1 = arg1.restingQuestDockMode;
          }
          if (restingQuestDockMode1 == null) {
            restingQuestDockMode1 = tmp4.COLLAPSED;
          }
          tmp34Result = tmp34(tmp35, restingQuestDockMode1);
          return;
        } else if (tmp4.COLLAPSED === restingQuestDockMode) {
          tmp24 = closure_4;
          obj1 = {};
          tmp25 = obj1;
          merged = Object.assign(closure_4.get());
          num3 = 0;
          obj1.x = 0;
          obj1.y = 0;
          tmp27 = closure_5;
          tmp28 = closure_6;
          tmp29 = windowWidth;
          obj1.width = closure_5(windowWidth, safeArea.left, safeArea.right, closure_6);
          tmp30 = closure_7;
          obj1.height = closure_7;
          result = closure_4.set(obj1);
          tmp32 = closure_8;
          result1 = closure_8.set(tmp4.COLLAPSED);
        } else {
          if (tmp4.CLOSED !== restingQuestDockMode) {
            if (tmp4.SOFT_DISMISSED !== restingQuestDockMode) {
              if (tmp4.EXPANDED === restingQuestDockMode) {
                tmp38 = closure_11;
                tmp39 = closure_11(tmp3, safeArea.top, minExpandedContentHeight);
                minHeight = tmp39.minHeight;
                obj4 = closure_4;
                tmp40 = closure_7;
                tmp6 = closure_4.get().height <= closure_7;
                if (!tmp6) {
                  tmp5 = null != arg1;
                  if (tmp5) {
                    tmp5 = obj4.get().height === tmp38(arg1.windowHeight, arg1.safeArea.top, minExpandedContentHeight).maxHeight;
                  }
                  tmp6 = tmp5;
                }
                if (!tmp6) {
                  height = obj4.get().height;
                }
                obj = {};
                tmp7 = obj;
                merged1 = Object.assign(obj4.get());
                num = 0;
                obj.x = 0;
                tmp9 = closure_12;
                if (closure_12 <= 0) {
                  tmp9 = closure_13;
                }
                obj.y = tmp9;
                tmp10 = closure_14;
                obj.width = closure_14(windowWidth, safeArea.left, safeArea.right);
                obj.height = tmp39.maxHeight;
                result2 = obj4.set(obj);
                tmp12 = closure_8;
                result3 = closure_8.set(tmp4.EXPANDED);
              }
            }
          }
          tmp14 = closure_4;
          obj5 = {};
          tmp15 = obj5;
          merged2 = Object.assign(closure_4.get());
          num2 = 0;
          obj5.x = 0;
          obj5.y = 0;
          tmp17 = closure_9;
          tmp18 = closure_6;
          tmp19 = windowWidth;
          obj5.width = closure_9(windowWidth, safeArea.left, safeArea.right, closure_6);
          tmp20 = closure_10;
          obj5.height = closure_10;
          result4 = closure_4.set(obj5);
          tmp22 = closure_8;
          result5 = closure_8.set(restingQuestDockMode);
        }
      }
      return;
    }
  }
  const items3 = [tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28];
  QuestDockHooksTsx2.__closure = items3;
  QuestDockHooksTsx2.__workletHash = 15593308101479;
  QuestDockHooksTsx2.__initData = tmp13;
  const animatedReaction = _mod1652.useAnimatedReaction(QuestDockHooksTsx1, QuestDockHooksTsx2);
}
export function useQuestDockExternalOffset() {
  items = [QuestDockStore];
  const tmp = _slicedToArray(first(504).useStateFromStoresArray(items, () => {
    items = [, ];
    ({ prevRestingQuestDockMode: arr[0], isEligibleToBeVisible: arr[1] } = QuestDockStore);
    return items;
  }), 2);
  first = tmp[0];
  closure_1 = tmp3;
  const items1 = [tmp[1], first];
  return noop.useMemo(() => {
    if (closure_1) {
      if (height.COLLAPSED === first) {
        return closure_2_11;
      } else if (height.EXPANDED === first) {
        return application_id;
      } else {
        if (height.CLOSED !== first) {
          if (height.SOFT_DISMISSED !== first) {
            return 0;
          }
        }
        return height2;
      }
    } else {
      return 0;
    }
  }, items1);
}
export function useQuestDockDismissalReset() {
  setRestingQuestDockMode = noop.useContext(setRestingQuestDockMode(17386).QuestDockExternalCoordinationContext).setRestingQuestDockMode;
  const activeQuestDockMode = noop.useContext(setRestingQuestDockMode(17383).QuestDockGestureContext).activeQuestDockMode;
  items = [setRestingQuestDockMode, activeQuestDockMode];
  const effect = noop.useEffect(() => {
    let isSoftDismissedResult = activeQuestDockMode.get() !== constants.SOFT_DISMISSED;
    if (!isSoftDismissedResult) {
      isSoftDismissedResult = setRestingQuestDockMode(17381).isSoftDismissed(QuestDockStore.questDockSoftDismissedAt);
      let obj = setRestingQuestDockMode(17381);
    }
    if (!isSoftDismissedResult) {
      setRestingQuestDockMode(constants.COLLAPSED);
    }
    function maybeResetSoftDismissal() {
      let isSoftDismissedResult = activeQuestDockMode.get() !== constants.SOFT_DISMISSED;
      if (!isSoftDismissedResult) {
        isSoftDismissedResult = setRestingQuestDockMode(17381).isSoftDismissed(QuestDockStore.questDockSoftDismissedAt);
        const obj = setRestingQuestDockMode(17381);
      }
      if (!isSoftDismissedResult) {
        closure_0(constants.COLLAPSED);
      }
    }
    setRestingQuestDockMode = setInterval(maybeResetSoftDismissal, 5 * activeQuestDockMode(1089).Millis.MINUTE);
    return () => {
      clearInterval(closure_0);
    };
  }, items);
}
export function useActionSheetPressHandler(questCreative) {
  _require = questCreative;
  const questImpressionId = require("ContentImpressionTrackerHooks").useQuestImpressionId();
  items = [questCreative, questImpressionId];
  return noop.useCallback(() => {
    const obj2 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL };
    const obj = captureAdUserAction;
    const merged = Object.assign(AdCreativeUtils.getCreativeAnalyticsParams(creative));
    obj2.questContentCTA = AnalyticsTypes.QuestContentCTA.OPEN_CONTEXT_MENU;
    obj2.surfaceId = QuestTypes.QuestContent.QUEST_BAR_MOBILE;
    obj2.sourceQuestContent = QuestTypes.QuestContent.QUEST_BAR_MOBILE;
    obj2.impressionId = questImpressionId;
    obj.captureAdUserAction(obj2);
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(17390, dependencyMap.paths), "QuestDockContextMenuActionSheet", { creative, impressionId: questImpressionId });
  }, items);
}
export function useQuestDockExpandHandler(questDockCreative) {
  _require = questDockCreative;
  const getQuestImpressionId = require("ContentImpressionTrackerHooks").useGetQuestImpressionId();
  items = [questDockCreative, getQuestImpressionId];
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
}
export function useBountyPreviewImageUrl(bounty) {
  const width = useWindowDimensionsDefault().width;
  const result = width / timestampProducer;
  if (null != bounty.imagePreview) {
    const size = { assetUrl: bounty.imagePreview, width, height: result };
    let scaledImageUrl = AssetUtils.getScaledImageUrl(size);
  } else {
    scaledImageUrl = null;
    if (null != bounty.videoPreview) {
      const size1 = { assetUrl: bounty.videoPreview, width, height: result };
      scaledImageUrl = AssetUtils.getScaledFirstFrameImageUrl(size1);
    }
  }
  return scaledImageUrl;
}
export function useQuestDockAppThemedBackgroundColor() {
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