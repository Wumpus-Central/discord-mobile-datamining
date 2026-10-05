// === Module 14814: BountiesModalContentScroll ===

// Module 14814 (BountiesModalContentScroll)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1121 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1484 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2048 */;
import native from "native" /* 4589 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import timing from "timing" /* 4891 */;
import timingPresets from "timingPresets" /* 4894 */;
import QuestContent from "QuestContent" /* 5628 */;
import AdCreativeType from "AdCreativeType" /* 5630 */;
import QuestDataUtils from "QuestDataUtils" /* 7183 */;
import AnalyticsActions from "AnalyticsActions" /* 7202 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7212 */;
import QuestActionCreators from "QuestActionCreators" /* 9994 */;
import AppStoreOverlayTelemetryManager from "AppStoreOverlayTelemetryManager" /* 10919 */;
import VideoQuestUtils from "VideoQuestUtils" /* 10940 */;
import BountiesModalActionCreatorsDefault from "BountiesModalActionCreators" /* 14811 */;
import useBountiesRecapScroll from "useBountiesRecapScroll" /* 14820 */;
import BountiesScrollVideoItem2 from "BountiesScrollVideoItem" /* 14822 */;
import BountiesScrollRecapPage from "BountiesScrollRecapPage" /* 14857 */;
import shared_ThemeTypes from "shared/ThemeTypes" /* 14863 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import BountyStore from "BountyStore" /* 7186 */;
import QuestConstants from "QuestConstants" /* 5623 */;
import BountiesModalConstants from "BountiesModalConstants" /* 14815 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "utils/PlatformUtils" /* 1370 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import createStyles from "createStyles" /* 4890 */;
import size_mod from "module_2" /* 2 */;

let adContentId, arr, arraySpreadResult1, dependencyMap, footerHeight, initialBountyId, set, styles, zIndex4;

let c10;
let c9;
let closure_12;
let closure_14;
let closure_15;
let closure_17;
let closure_18;
let hasOwnProperty;
let map1;
let metroImportAll;
let metroRequire;
let unpackModuleId;
let react = react_mod;
({ StyleSheet: hasOwnProperty, View: metroRequire } = react_native);
({ BOUNTY_ORB_AMOUNT: metroImportAll, DEFAULT_PLACEHOLDER_ENTRYPOINT_BOUNTY_ID: c9 } = QuestConstants);
({ getBountyVideoEndAppStoreSheetHeight: c10, getBountyVideoEndPeekClipHeight: unpackModuleId, getBountyVideoEndPeekScale: closure_12, getBountyVideoEndPeekTargetScale: map1 } = BountiesModalConstants);
({ AnalyticEvents: closure_14, ComponentActions: closure_15 } = Constants);
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: closure_17, jsxs: closure_18 } = Fragment);
let closure_19 = PlatformUtils.isAndroid();
let c20 = 0;
let c21 = 1;
let c22 = 2;
let c23 = 3;
let c24 = 0.5625;
let c25 = 97;
const PX_8 = nativeDefault.space.PX_8;
let c27 = 0.3;
let c28 = 0.8;
let colors = ["rgba(0,0,0,0)", "rgba(0,0,0,0.75)"];
let c30 = 0.05;
let c31 = 0.1;
let ReactCompilerGating = ReactCompilerGating_mod;
let ItemSeparatorComponent = ReactCompilerGating.isReactCompilerEnabled() ? ((trailingItem) => {
  let obj3;
  const obj = react2;
  const cResult = obj.c(1);
  let tmp2 = null;
  if (null != trailingItem.trailingItem) {
    let first;
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { style: obj3 };
      obj3 = { height: PX_8 };
      const tmp8 = closure_17(metroRequire, obj2);
      cResult[0] = tmp8;
      first = tmp8;
    } else {
      first = cResult[0];
    }
    tmp2 = first;
  }
  return tmp2;
}) : ((trailingItem) => {
  let obj2;
  let tmp = null;
  if (null != trailingItem.trailingItem) {
    const obj = { style: obj2 };
    obj2 = { height: PX_8 };
    tmp = closure_17(metroRequire, obj);
  }
  return tmp;
});
function isScrollEventInBounds(contentOffset) {
  return contentOffset.contentOffset.y >= 0 && contentOffset.contentOffset.y <= tmp;
}
isScrollEventInBounds.__closure = {};
isScrollEventInBounds.__workletHash = 14148486927190;
isScrollEventInBounds.__initData = { code: "function isScrollEventInBounds_BountiesModalContentScrollTsx1(event){const maxOffset=Math.max(0,event.contentSize.height-event.layoutMeasurement.height);return event.contentOffset.y>=0&&event.contentOffset.y<=maxOffset;}" };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_34 = ReactCompilerGating.isReactCompilerEnabled() ? ((height) => {
  let obj3;
  let tmp2;
  const obj = react2;
  const cResult = obj.c(2);
  height = height.height;
  if (cResult[0] !== height) {
    const obj2 = { style: obj3 };
    obj3 = { height };
    const tmp5 = closure_17(metroRequire, obj2);
    cResult[0] = height;
    cResult[1] = tmp5;
    tmp2 = tmp5;
  } else {
    tmp2 = cResult[1];
  }
  return tmp2;
}) : ((height) => {
  const obj = { style: { height: height.height } };
  return closure_17(metroRequire, obj);
});
let closure_35 = createStyles.createStyles(() => {
  const obj = { root: { flex: 1 }, recapPage: obj2, listWrapper: obj3, closeButton: obj4, peekGradient: obj5 };
  return obj;
});
const __initData = { code: "function BountiesModalContentScrollTsx2(){const{scrollY,index,slotHeight,isPeekEnabled,PEEK_OPACITY,interpolate,FADE_DEADBAND,Extrapolation}=this.__closure;const signedDistance=(scrollY.get()-index*slotHeight)/slotHeight;const distance=Math.abs(signedDistance);const peekOpacity=isPeekEnabled&&signedDistance<0&&index===1?PEEK_OPACITY:0;const opacity=interpolate(distance,[0,FADE_DEADBAND,1],[1,1,peekOpacity],Extrapolation.CLAMP);return{opacity:opacity};}" };
const __initData2 = { code: "function BountiesModalContentScrollTsx3(){const{scrollY,index,slotHeight,isPeekEnabled,PEEK_OPACITY,interpolate,FADE_DEADBAND,Extrapolation}=this.__closure;const signedDistance=(scrollY.get()-index*slotHeight)/slotHeight;const distance=Math.abs(signedDistance);const peekOpacity=isPeekEnabled&&signedDistance<0&&index===1?PEEK_OPACITY:0;const opacity=interpolate(distance,[0,FADE_DEADBAND,1],[1,1,peekOpacity],Extrapolation.CLAMP);return{opacity:opacity};}" };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_38 = ReactCompilerGating.isReactCompilerEnabled() ? ((index) => {
  let isPeekEnabled;
  let scrollY;
  let style;
  let obj = index(scrollY[12]);
  const cResult = obj.c(6);
  index = index.index;
  const slotHeight = index.slotHeight;
  const tmp = scrollY;
  scrollY = index.scrollY;
  ({ style, isPeekEnabled } = index);
  const children = index.children;
  let obj2 = index(scrollY[14]);
  const fn = function o() {
    let items;
    let items1;
    let obj2;
    const result = (scrollY.get() - index * slotHeight) / slotHeight;
    const absolute = Math.abs(result);
    let num = 0;
    if (isPeekEnabled) {
      num = 0;
      if (result < 0) {
        num = 0;
        if (1 === index) {
          num = c28;
        }
      }
    }
    const obj = { opacity: obj2.interpolate(absolute, items, items1, ReanimatedRexport.Extrapolation.CLAMP) };
    items = [0, c27, 1];
    items1 = [1, 1, num];
    obj2 = ReanimatedRexport;
    return obj;
  };
  fn.__closure = { scrollY, index, slotHeight, isPeekEnabled, PEEK_OPACITY, interpolate: index(scrollY[14]).interpolate, FADE_DEADBAND, Extrapolation: index(scrollY[14]).Extrapolation };
  fn.__workletHash = 6532652233494;
  fn.__initData = __initData;
  ({ scrollY, index, slotHeight, isPeekEnabled, PEEK_OPACITY, interpolate: index(scrollY[14]).interpolate, FADE_DEADBAND, Extrapolation: index(scrollY[14]).Extrapolation });
  const animatedStyle = obj2.useAnimatedStyle(fn);
  if (cResult[0] === animatedStyle) {
    let tmp4;
    if (cResult[1] === style) {
      tmp4 = cResult[2];
    }
    if (cResult[3] === children) {
      let tmp5;
      if (cResult[4] === tmp4) {
        tmp5 = cResult[5];
      }
      return tmp5;
    }
    const obj4 = { style: tmp4, children };
    const tmp8 = closure_17(slotHeight(tmp[14]).View, obj4);
    let num = 3;
    cResult[3] = children;
    cResult[4] = tmp4;
    cResult[5] = tmp8;
    tmp5 = tmp8;
  }
  let items = [style, animatedStyle];
  cResult[0] = animatedStyle;
  cResult[1] = style;
  cResult[2] = items;
  tmp4 = items;
}) : ((index) => {
  let children;
  let items;
  let style;
  index = index.index;
  const slotHeight = index.slotHeight;
  const scrollY = index.scrollY;
  const isPeekEnabled = index.isPeekEnabled;
  ({ style, children } = index);
  let obj = index(scrollY[14]);
  const fn = function c() {
    let items;
    let items1;
    let obj2;
    const result = (scrollY.get() - index * slotHeight) / slotHeight;
    const absolute = Math.abs(result);
    let num = 0;
    if (isPeekEnabled) {
      num = 0;
      if (result < 0) {
        num = 0;
        if (1 === index) {
          num = c28;
        }
      }
    }
    const obj = { opacity: obj2.interpolate(absolute, items, items1, ReanimatedRexport.Extrapolation.CLAMP) };
    items = [0, c27, 1];
    items1 = [1, 1, num];
    obj2 = ReanimatedRexport;
    return obj;
  };
  let obj2 = { scrollY, index, slotHeight, isPeekEnabled, PEEK_OPACITY, interpolate: index(scrollY[14]).interpolate, FADE_DEADBAND, Extrapolation: index(scrollY[14]).Extrapolation };
  fn.__closure = obj2;
  fn.__workletHash = 9072488166423;
  fn.__initData = __initData2;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const obj3 = { style: items, children };
  items = [style, animatedStyle];
  return closure_17(slotHeight(scrollY[14]).View, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_39 = ReactCompilerGating.isReactCompilerEnabled() ? ((footerHeight) => {
  let height;
  let width;
  const obj = react2;
  const cResult = obj.c(5);
  footerHeight = footerHeight.footerHeight;
  ({ width, height } = useWindowDimensionsDefault());
  useWindowDimensionsDefault();
  const rect = useSafeAreaInsetsDefault();
  const diff = width - rect.left - rect.right;
  const diff1 = height - rect.top - footerHeight;
  let result = diff / c24;
  let result1 = diff;
  if (result > diff1) {
    result1 = diff1 * c24;
    result = diff1;
  }
  const top = rect.top;
  const rounded = Math.floor(rect.left + (diff - result1) / 2);
  const rounded1 = Math.floor(result1);
  const rounded2 = Math.floor(result);
  if (cResult[0] === rounded) {
    if (cResult[1] === rounded1) {
      if (cResult[2] === rounded2) {
        let tmp10;
        if (cResult[3] === top) {
          tmp10 = cResult[4];
        }
        return tmp10;
      }
    }
  }
  size = { top, left: rounded, width: rounded1, height: rounded2 };
  cResult[0] = rounded;
  cResult[1] = rounded1;
  cResult[2] = rounded2;
  cResult[3] = top;
  cResult[4] = size;
  tmp10 = size;
}) : ((footerHeight) => {
  footerHeight = footerHeight.footerHeight;
  let width;
  let height;
  size = width(height[15])();
  width = size.width;
  height = size.height;
  const tmp = width(height[16])();
  let closure_3 = tmp;
  const items = [width, height, , , , ];
  ({ top: arr[2], left: arr[3], right: arr[4] } = tmp);
  items[5] = footerHeight;
  return react.useMemo(() => {
    const rect = closure_3;
    const diff = width - closure_3.left - closure_3.right;
    const diff1 = height - closure_3.top - footerHeight;
    let result = diff / c24;
    let result1 = diff;
    if (result > diff1) {
      result1 = diff1 * c24;
      result = diff1;
    }
    size = { top: rect.top, left: Math.floor(rect.left + (diff - result1) / 2), width: Math.floor(result1), height: Math.floor(result) };
    return size;
  }, items);
});
let closure_40 = { code: "function BountiesModalContentScrollTsx4(event_0){const{scrollY,isDraggingSharedValue,isScrollingInBoundsSharedValue,isScrollEventInBounds}=this.__closure;scrollY.set(event_0.contentOffset.y);if(isDraggingSharedValue.get()){isScrollingInBoundsSharedValue.set(isScrollEventInBounds(event_0));}}" };
let closure_41 = { code: "function BountiesModalContentScrollTsx5(event_1){const{isDraggingSharedValue,isScrollingInBoundsSharedValue,isScrollEventInBounds}=this.__closure;isDraggingSharedValue.set(true);isScrollingInBoundsSharedValue.set(isScrollEventInBounds(event_1));}" };
let closure_42 = { code: "function BountiesModalContentScrollTsx6(){const{isDraggingSharedValue,IS_ANDROID,isScrollingInBoundsSharedValue}=this.__closure;isDraggingSharedValue.set(false);if(!IS_ANDROID){isScrollingInBoundsSharedValue.set(false);}}" };
let closure_43 = { code: "function BountiesModalContentScrollTsx7(event_2){const{showRecapPullZone,runOnJS,handleRecapMomentumEnd,isScrollingInBoundsSharedValue}=this.__closure;if(showRecapPullZone){runOnJS(handleRecapMomentumEnd)(event_2);}isScrollingInBoundsSharedValue.set(false);}" };
let closure_44 = { code: "function BountiesModalContentScrollTsx8(){const{scrollY,slotHeight,lastBountyIndex}=this.__closure;return Math.min(Math.max(Math.round(scrollY.get()/slotHeight),0),lastBountyIndex);}" };
let closure_45 = { code: "function BountiesModalContentScrollTsx9(next,prev_0){const{runOnJS,commitSwipe}=this.__closure;if(next!==prev_0){runOnJS(commitSwipe)(next);}}" };
let closure_46 = { code: "function BountiesModalContentScrollTsx10(){const{showRecapPullZone,scrollY,lastBountyScrollOffset,RECAP_SNAP_EPSILON}=this.__closure;return showRecapPullZone&&scrollY.get()>=lastBountyScrollOffset-RECAP_SNAP_EPSILON;}" };
let closure_47 = { code: "function BountiesModalContentScrollTsx11(show,previousShow){const{runOnJS,setShowRecapFooter}=this.__closure;if(show!==previousShow){runOnJS(setShowRecapFooter)(show);}}" };
let closure_48 = { code: "function BountiesModalContentScrollTsx12(){const{showRecapPullZone,scrollY,lastBountyScrollOffset}=this.__closure;return showRecapPullZone&&scrollY.get()>lastBountyScrollOffset;}" };
let closure_49 = { code: "function BountiesModalContentScrollTsx13(revealed,previousRevealed){const{runOnJS,setIsRecapPageRevealed}=this.__closure;if(revealed!==previousRevealed){runOnJS(setIsRecapPageRevealed)(revealed);}}" };
let closure_50 = { code: "function BountiesModalContentScrollTsx14(){const{showRecapPullZone,scrollY,fullRecapScrollOffset,RECAP_SNAP_EPSILON}=this.__closure;return showRecapPullZone&&scrollY.get()>=fullRecapScrollOffset-RECAP_SNAP_EPSILON;}" };
let closure_51 = { code: "function BountiesModalContentScrollTsx15(onTop,previousOnTop){const{runOnJS,setIsRecapPageOnTop}=this.__closure;if(onTop!==previousOnTop){runOnJS(setIsRecapPageOnTop)(onTop);}}" };
let closure_52 = { code: "function BountiesModalContentScrollTsx16(){const{videoEndPeekProgress,getBountyVideoEndPeekScale,videoEndPeekTargetScale,getBountyVideoEndPeekClipHeight,videoLayout,BOUNTIES_MODAL_FOOTER_HEIGHT}=this.__closure;const progress_0=videoEndPeekProgress.get();const scale=getBountyVideoEndPeekScale(progress_0,videoEndPeekTargetScale);const clipHeight=getBountyVideoEndPeekClipHeight(progress_0,videoLayout.width,videoLayout.height);const footerHeight_0=progress_0>0?0:BOUNTIES_MODAL_FOOTER_HEIGHT;return{height:videoLayout.top+clipHeight*scale+footerHeight_0};}" };
let closure_53 = { code: "function BountiesModalContentScrollTsx17(){const{videoEndPeekProgress}=this.__closure;return videoEndPeekProgress.get()>0;}" };
let closure_54 = { code: "function BountiesModalContentScrollTsx18(hide,previousHide){const{runOnJS,setHideListFooterPadding}=this.__closure;if(hide!==previousHide){runOnJS(setHideListFooterPadding)(hide);}}" };
let closure_55 = { code: "function BountiesModalContentScrollTsx19(){const{getRevealProgress,scrollY,lastBountyScrollOffset,recapRevealHeight}=this.__closure;return getRevealProgress(scrollY.get(),lastBountyScrollOffset,recapRevealHeight);}" };
let closure_56 = { code: "function BountiesModalContentScrollTsx20(){const{interpolate,recapPullProgress,Extrapolation}=this.__closure;return{opacity:interpolate(recapPullProgress.get(),[0,1],[0,1],Extrapolation.CLAMP)};}" };
let closure_57 = { code: "function BountiesModalContentScrollTsx21(){const{interpolate,recapPullProgress,FOOTER_FADE_START_PROGRESS,FOOTER_FADE_END_PROGRESS,Extrapolation}=this.__closure;return{opacity:interpolate(recapPullProgress.get(),[FOOTER_FADE_START_PROGRESS,FOOTER_FADE_END_PROGRESS],[1,0],Extrapolation.CLAMP)};}" };
let closure_58 = { code: "function BountiesModalContentScrollTsx22(){const{scrollY,lastBountyScrollOffset,slotHeight,recapPullProgress,getRevealProgress,recapRevealHeight,interpolate,FOOTER_FADE_START_PROGRESS,FOOTER_FADE_END_PROGRESS,Extrapolation}=this.__closure;const progress_1=scrollY.get()>=lastBountyScrollOffset-slotHeight/2?recapPullProgress.get():getRevealProgress(scrollY.get(),0,recapRevealHeight);return{opacity:interpolate(progress_1,[FOOTER_FADE_START_PROGRESS,FOOTER_FADE_END_PROGRESS],[1,0],Extrapolation.CLAMP)};}" };
let closure_59 = { code: "function BountiesModalContentScrollTsx23(){const{interpolate,scrollY,slotHeight,Extrapolation}=this.__closure;return{opacity:interpolate(scrollY.get(),[0,slotHeight],[1,0],Extrapolation.CLAMP)};}" };
let closure_60 = { code: "function BountiesModalContentScrollTsx24(){const{recapPullProgress,FOOTER_FADE_END_PROGRESS}=this.__closure;return recapPullProgress.get()<FOOTER_FADE_END_PROGRESS;}" };
let closure_61 = { code: "function BountiesModalContentScrollTsx25(pressable,previousPressable){const{runOnJS,setIsCloseButtonPressable}=this.__closure;if(pressable!==previousPressable){runOnJS(setIsCloseButtonPressable)(pressable);}}" };
const __initData3 = { code: "function BountiesModalContentScrollTsx26(event_0){const{scrollY,isDraggingSharedValue,isScrollingInBoundsSharedValue,isScrollEventInBounds}=this.__closure;scrollY.set(event_0.contentOffset.y);if(isDraggingSharedValue.get()){isScrollingInBoundsSharedValue.set(isScrollEventInBounds(event_0));}}" };
const __initData4 = { code: "function BountiesModalContentScrollTsx27(event_1){const{isDraggingSharedValue,isScrollingInBoundsSharedValue,isScrollEventInBounds}=this.__closure;isDraggingSharedValue.set(true);isScrollingInBoundsSharedValue.set(isScrollEventInBounds(event_1));}" };
const __initData5 = { code: "function BountiesModalContentScrollTsx28(){const{isDraggingSharedValue,IS_ANDROID,isScrollingInBoundsSharedValue}=this.__closure;isDraggingSharedValue.set(false);if(!IS_ANDROID){isScrollingInBoundsSharedValue.set(false);}}" };
const __initData6 = { code: "function BountiesModalContentScrollTsx29(event_2){const{showRecapPullZone,runOnJS,handleRecapMomentumEnd,isScrollingInBoundsSharedValue}=this.__closure;if(showRecapPullZone){runOnJS(handleRecapMomentumEnd)(event_2);}isScrollingInBoundsSharedValue.set(false);}" };
const __initData7 = { code: "function BountiesModalContentScrollTsx30(){const{scrollY,slotHeight,lastBountyIndex}=this.__closure;return Math.min(Math.max(Math.round(scrollY.get()/slotHeight),0),lastBountyIndex);}" };
const __initData8 = { code: "function BountiesModalContentScrollTsx31(next,prev_0){const{runOnJS,commitSwipe}=this.__closure;if(next!==prev_0){runOnJS(commitSwipe)(next);}}" };
const __initData9 = { code: "function BountiesModalContentScrollTsx32(){const{showRecapPullZone,scrollY,lastBountyScrollOffset,RECAP_SNAP_EPSILON}=this.__closure;return showRecapPullZone&&scrollY.get()>=lastBountyScrollOffset-RECAP_SNAP_EPSILON;}" };
const __initData10 = { code: "function BountiesModalContentScrollTsx33(show,previousShow){const{runOnJS,setShowRecapFooter}=this.__closure;if(show!==previousShow){runOnJS(setShowRecapFooter)(show);}}" };
const __initData11 = { code: "function BountiesModalContentScrollTsx34(){const{showRecapPullZone,scrollY,lastBountyScrollOffset}=this.__closure;return showRecapPullZone&&scrollY.get()>lastBountyScrollOffset;}" };
const __initData12 = { code: "function BountiesModalContentScrollTsx35(revealed,previousRevealed){const{runOnJS,setIsRecapPageRevealed}=this.__closure;if(revealed!==previousRevealed){runOnJS(setIsRecapPageRevealed)(revealed);}}" };
const __initData13 = { code: "function BountiesModalContentScrollTsx36(){const{showRecapPullZone,scrollY,fullRecapScrollOffset,RECAP_SNAP_EPSILON}=this.__closure;return showRecapPullZone&&scrollY.get()>=fullRecapScrollOffset-RECAP_SNAP_EPSILON;}" };
const __initData14 = { code: "function BountiesModalContentScrollTsx37(onTop,previousOnTop){const{runOnJS,setIsRecapPageOnTop}=this.__closure;if(onTop!==previousOnTop){runOnJS(setIsRecapPageOnTop)(onTop);}}" };
const __initData15 = { code: "function BountiesModalContentScrollTsx38(){const{videoEndPeekProgress,getBountyVideoEndPeekScale,videoEndPeekTargetScale,getBountyVideoEndPeekClipHeight,videoLayout,BOUNTIES_MODAL_FOOTER_HEIGHT}=this.__closure;const progress_0=videoEndPeekProgress.get();const scale=getBountyVideoEndPeekScale(progress_0,videoEndPeekTargetScale);const clipHeight=getBountyVideoEndPeekClipHeight(progress_0,videoLayout.width,videoLayout.height);const footerHeight_0=progress_0>0?0:BOUNTIES_MODAL_FOOTER_HEIGHT;return{height:videoLayout.top+clipHeight*scale+footerHeight_0};}" };
const __initData16 = { code: "function BountiesModalContentScrollTsx39(){const{videoEndPeekProgress}=this.__closure;return videoEndPeekProgress.get()>0;}" };
const __initData17 = { code: "function BountiesModalContentScrollTsx40(hide,previousHide){const{runOnJS,setHideListFooterPadding}=this.__closure;if(hide!==previousHide){runOnJS(setHideListFooterPadding)(hide);}}" };
const __initData18 = { code: "function BountiesModalContentScrollTsx41(){const{getRevealProgress,scrollY,lastBountyScrollOffset,recapRevealHeight}=this.__closure;return getRevealProgress(scrollY.get(),lastBountyScrollOffset,recapRevealHeight);}" };
const __initData19 = { code: "function BountiesModalContentScrollTsx42(){const{interpolate,recapPullProgress,Extrapolation}=this.__closure;return{opacity:interpolate(recapPullProgress.get(),[0,1],[0,1],Extrapolation.CLAMP)};}" };
const __initData20 = { code: "function BountiesModalContentScrollTsx43(){const{interpolate,recapPullProgress,FOOTER_FADE_START_PROGRESS,FOOTER_FADE_END_PROGRESS,Extrapolation}=this.__closure;return{opacity:interpolate(recapPullProgress.get(),[FOOTER_FADE_START_PROGRESS,FOOTER_FADE_END_PROGRESS],[1,0],Extrapolation.CLAMP)};}" };
const __initData21 = { code: "function BountiesModalContentScrollTsx44(){const{scrollY,lastBountyScrollOffset,slotHeight,recapPullProgress,getRevealProgress,recapRevealHeight,interpolate,FOOTER_FADE_START_PROGRESS,FOOTER_FADE_END_PROGRESS,Extrapolation}=this.__closure;const progress_1=scrollY.get()>=lastBountyScrollOffset-slotHeight/2?recapPullProgress.get():getRevealProgress(scrollY.get(),0,recapRevealHeight);return{opacity:interpolate(progress_1,[FOOTER_FADE_START_PROGRESS,FOOTER_FADE_END_PROGRESS],[1,0],Extrapolation.CLAMP)};}" };
const __initData22 = { code: "function BountiesModalContentScrollTsx45(){const{interpolate,scrollY,slotHeight,Extrapolation}=this.__closure;return{opacity:interpolate(scrollY.get(),[0,slotHeight],[1,0],Extrapolation.CLAMP)};}" };
const __initData23 = { code: "function BountiesModalContentScrollTsx46(){const{recapPullProgress,FOOTER_FADE_END_PROGRESS}=this.__closure;return recapPullProgress.get()<FOOTER_FADE_END_PROGRESS;}" };
const __initData24 = { code: "function BountiesModalContentScrollTsx47(pressable,previousPressable){const{runOnJS,setIsCloseButtonPressable}=this.__closure;if(pressable!==previousPressable){runOnJS(setIsCloseButtonPressable)(pressable);}}" };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_84 = ReactCompilerGating.isReactCompilerEnabled() ? ((initialBountyId) => {
  let closure_8;
  let isPeekEnabled;
  let isRecapPageOnTop;
  let isRecapPageRevealed;
  let isScrollingInBoundsSharedValue;
  let orbAmount;
  let questHomeBounties;
  let ref4;
  let scrollSessionId;
  let scrollY;
  let slotHeight;
  let style;
  let tmp10;
  let tmp18;
  let tmp28;
  let tmp8;
  let tmp = initialBountyId;
  let obj = initialBountyId(576);
  const cResult = obj.c(190);
  initialBountyId = initialBountyId.initialBountyId;
  const sourceQuestContent = initialBountyId.sourceQuestContent;
  let tmp4 = ref3();
  const height = sourceQuestContent(1484)().height;
  let obj2 = questHomeBounties;
  let ref = questHomeBounties.useRef(null);
  const tmp6 = size;
  let tmp7 = size(questHomeBounties.useState(initialBountyId(14816).BOUNTIES_MODAL_BASE_FOOTER_HEIGHT), 2);
  [tmp8, dependencyMap] = tmp7;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function c(nativeEvent) {
      dependencyMap(Math.ceil(nativeEvent.nativeEvent.layout.height));
    };
    let num = 0;
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp8) {
    let obj3 = { footerHeight: tmp8 };
    let num2 = 1;
    cResult[1] = tmp8;
    cResult[2] = obj3;
    tmp10 = obj3;
  } else {
    tmp10 = cResult[2];
  }
  size = onClose(tmp10);
  const tmpResult = tmp(10911);
  questHomeBounties = tmpResult.useQuestHomeBounties().questHomeBounties;
  if (cResult[3] === initialBountyId) {
    let tmp11;
    if (cResult[4] === questHomeBounties) {
      tmp11 = cResult[5];
    }
    const first1 = tmp6(obj2.useState(tmp11), 1)[0];
    let closure_6 = tmp12;
    if (cResult[6] === initialBountyId) {
      if (cResult[7] === 0 === first1.length) {
        let tmp13;
        let tmp14;
        if (cResult[8] === sourceQuestContent) {
          tmp13 = cResult[9];
          tmp14 = cResult[10];
        }
        const effect = obj2.useEffect(tmp13, tmp14);
        const tmpResult2 = tmp(4612);
        const sharedValue = tmpResult2.useSharedValue(0);
        [tmp18, closure_8] = tmp6(obj2.useState(null), 2);
        tmp6(obj2.useState(null), 2);
        ref = obj2.useRef(null);
        const ref2 = obj2.useRef(0);
        if (cResult[11] === size.height) {
          if (cResult[12] === size.top) {
            if (cResult[13] === size.width) {
              let tmp20;
              if (cResult[14] === height) {
                tmp20 = cResult[15];
              }
              let closure_11 = tmp20;
              if (cResult[16] !== height) {
                cResult[16] = height;
                cResult[17] = ref2(height);
                const tmp25 = ref2(height);
              }
              if (cResult[18] !== sharedValue) {
                class Ne {
                  constructor(current) {
                    ref2.current = Date.now();
                    ref.current = current;
                    closure_8(current);
                    set = sharedValue.set;
                    const obj = timing;
                    const result = set(obj.withTiming(1, timingPresets.timingSlow));
                    const appId = current.metadata.appId;
                    const trackOverlayEvent = current.trackOverlayEvent;
                    const QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED = constants.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED;
                    trackOverlayEvent(QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED, appId, AnalyticsActions.AppStoreOverlayVariant.CUSTOM);
                  }
                }
                cResult[18] = sharedValue;
                cResult[19] = Ne;
              } else {
                class Ne {
                  constructor(current) {
                    ref2.current = Date.now();
                    ref.current = current;
                    closure_8(current);
                    set = sharedValue.set;
                    const obj = timing;
                    const result = set(obj.withTiming(1, timingPresets.timingSlow));
                    const appId = current.metadata.appId;
                    const trackOverlayEvent = current.trackOverlayEvent;
                    const QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED = constants.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED;
                    trackOverlayEvent(QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED, appId, AnalyticsActions.AppStoreOverlayVariant.CUSTOM);
                  }
                }
              }
              if (cResult[20] !== sharedValue) {
                class Ne {
                  constructor(current) {
                    ref2.current = Date.now();
                    ref.current = current;
                    closure_8(current);
                    set = sharedValue.set;
                    const obj = timing;
                    const result = set(obj.withTiming(1, timingPresets.timingSlow));
                    const appId = current.metadata.appId;
                    const trackOverlayEvent = current.trackOverlayEvent;
                    const QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED = constants.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED;
                    trackOverlayEvent(QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED, appId, AnalyticsActions.AppStoreOverlayVariant.CUSTOM);
                  }
                }
                cResult[20] = sharedValue;
                cResult[21] = tmp28;
              } else {
                class Ne {
                  constructor(current) {
                    ref2.current = Date.now();
                    ref.current = current;
                    closure_8(current);
                    set = sharedValue.set;
                    const obj = timing;
                    const result = set(obj.withTiming(1, timingPresets.timingSlow));
                    const appId = current.metadata.appId;
                    const trackOverlayEvent = current.trackOverlayEvent;
                    const QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED = constants.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED;
                    trackOverlayEvent(QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED, appId, AnalyticsActions.AppStoreOverlayVariant.CUSTOM);
                  }
                }
              }
              tmp28 = tmp27;
              if (cResult[22] === tmp27) {
                class Ne {
                  constructor(current) {
                    ref2.current = Date.now();
                    ref.current = current;
                    closure_8(current);
                    set = sharedValue.set;
                    const obj = timing;
                    const result = set(obj.withTiming(1, timingPresets.timingSlow));
                    const appId = current.metadata.appId;
                    const trackOverlayEvent = current.trackOverlayEvent;
                    const QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED = constants.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED;
                    trackOverlayEvent(QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED, appId, AnalyticsActions.AppStoreOverlayVariant.CUSTOM);
                  }
                }
              }
              let obj4 = { videoEndPeekProgress: sharedValue, videoEndPeekTargetScale: tmp20, isVideoEndAppStoreOverlayVisible: null != tmp18, showVideoEndAppStoreOverlay: Ne, dismissVideoEndAppStoreOverlay: tmp27 };
              cResult[22] = tmp27;
              cResult[23] = null != tmp18;
              cResult[24] = Ne;
              cResult[25] = sharedValue;
              cResult[26] = tmp20;
              cResult[27] = obj4;
            }
          }
        }
        let obj5 = { windowHeight: height, videoTop: null, videoWidth: null, videoHeight: null };
        ({ top: obj6.videoTop, width: obj6.videoWidth, height: obj6.videoHeight } = size);
        const tmp22 = closure_13(obj5);
        cResult[11] = size.height;
        cResult[12] = size.top;
        cResult[13] = size.width;
        cResult[14] = height;
        cResult[15] = tmp22;
        tmp20 = tmp22;
      }
    }
    function fe() {
      let obj2;
      if (closure_6) {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const captureQuestsException = QuestDataUtils.captureQuestsException;
        QuestDataUtils;
        const error = new Error("Bounty unexpectedly missing when opening the Bounties modal");
        const obj = { tags: { source: "BountiesModalContentScroll" }, extra: obj2 };
        obj2 = { bountyId: initialBountyId, sourceQuestContent };
        const result = captureQuestsException(error, obj);
        const obj3 = BountiesModalActionCreatorsDefault;
        obj3.hideModal();
      }
    }
    let items = [0 === first1.length, initialBountyId, sourceQuestContent];
    cResult[6] = initialBountyId;
    cResult[7] = 0 === first1.length;
    cResult[8] = sourceQuestContent;
    cResult[9] = fe;
    cResult[10] = items;
    tmp14 = items;
    tmp13 = fe;
  }
  class Ee {
    constructor() {
      arr = questHomeBounties;
      findIndexResult = questHomeBounties.findIndex((id) => id.id === initialBountyId);
      if (findIndexResult < 0) {
        items = [];
      } else {
        items = arr;
        if (0 !== findIndexResult) {
          items1 = [];
          tmp3 = items1;
          num = 0;
          arraySpreadResult = HermesBuiltin.arraySpread(items1, arr.slice(findIndexResult), 0);
          tmp5 = items1;
          arraySpreadResult1 = HermesBuiltin.arraySpread(items1, arr.slice(0, findIndexResult), arraySpreadResult);
          items = items1;
        }
      }
      return items;
    }
  }
  cResult[3] = initialBountyId;
  cResult[4] = questHomeBounties;
  cResult[5] = Ee;
  tmp11 = Ee;
}) : ((initialBountyId) => {
  let QuestContentImpressionTrackerNative;
  let _undefined;
  let _undefined2;
  let c11;
  let c32;
  let c33;
  let c4;
  let closure_2;
  let closure_29;
  let closure_31;
  let items24;
  let items25;
  let items26;
  let items27;
  let lastBounty;
  let obj40;
  let obj42;
  let obj44;
  let obj48;
  let slotHeight;
  let str;
  let str2;
  let tmp14;
  let tmp38;
  let tmp39;
  let tmp41;
  let tmp42;
  let tmp7;
  let tmp86Result6;
  let tmp87;
  let tmp88;
  initialBountyId = initialBountyId.initialBountyId;
  const sourceQuestContent = initialBountyId.sourceQuestContent;
  react = undefined;
  getBountyVideoEndPeekClipHeight = undefined;
  let sum1;
  closure_35 = undefined;
  let memo5;
  let animatedStyle;
  let first4;
  closure_48 = undefined;
  let memo9;
  let derivedValue;
  let isPeekEnabled;
  let tmp = closure_35();
  dependencyMap = tmp;
  let tmp2 = sourceQuestContent;
  let tmp3 = dependencyMap;
  const height = sourceQuestContent(1484)().height;
  let obj = react;
  const ref = react.useRef(null);
  const tmp5 = initialBountyId;
  const tmp6 = height(react.useState(initialBountyId(14816).BOUNTIES_MODAL_BASE_FOOTER_HEIGHT), 2);
  [tmp7, c4] = tmp6;
  const callback = react.useCallback((nativeEvent) => {
    _undefined(Math.ceil(nativeEvent.nativeEvent.layout.height));
  }, []);
  const tmp9 = memo5({ footerHeight: tmp7 });
  styles = tmp9;
  let obj2 = initialBountyId(10911);
  const questHomeBounties = obj2.useQuestHomeBounties().questHomeBounties;
  const data = height(react.useState(() => {
    let items;
    const findIndexResult = questHomeBounties.findIndex((id) => id.id === initialBountyId);
    if (findIndexResult < 0) {
      items = [];
    } else {
      items = questHomeBounties;
      if (0 !== findIndexResult) {
        const items1 = [];
        const arraySpreadResult = HermesBuiltin.arraySpread(items1, questHomeBounties.slice(findIndexResult), 0);
        HermesBuiltin.arraySpread(items1, questHomeBounties.slice(0, findIndexResult), arraySpreadResult);
        items = items1;
      }
    }
    return items;
  }), 1)[0];
  let closure_8 = tmp10;
  let items = [0 === data.length, initialBountyId, sourceQuestContent];
  const effect = react.useEffect(function() {
    let obj2;
    if (closure_8) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const captureQuestsException = QuestDataUtils.captureQuestsException;
      QuestDataUtils;
      const error = new Error("Bounty unexpectedly missing when opening the Bounties modal");
      const obj = { tags: { source: "BountiesModalContentScroll" }, extra: obj2 };
      obj2 = { bountyId: initialBountyId, sourceQuestContent };
      const result = captureQuestsException(error, obj);
      const obj3 = BountiesModalActionCreatorsDefault;
      obj3.hideModal();
    }
  }, items);
  adContentId = closure_8;
  let obj3 = initialBountyId(4612);
  const sharedValue = obj3.useSharedValue(0);
  [tmp14, c11] = height(react.useState(null), 2);
  const tmp13 = height(react.useState(null), 2);
  getBountyVideoEndPeekScale = react.useRef(null);
  const ref2 = react.useRef(0);
  const tmp15 = null != tmp14;
  const isVideoEndAppStoreOverlayVisible = tmp15;
  let items1 = [height, , , ];
  ({ top: arr3[1], width: arr3[2], height: arr3[3] } = tmp9);
  const memo = react.useMemo(() => {
    const obj = { windowHeight: height, videoTop: styles.top, videoWidth: styles.width, videoHeight: styles.height };
    return map1(obj);
  }, items1);
  const items2 = [height];
  const items3 = [sharedValue];
  const memo1 = react.useMemo(() => authStore(height), items2);
  const callback1 = react.useCallback((current) => {
    ref2.current = Date.now();
    ref.current = current;
    _undefined2(current);
    set = sharedValue.set;
    const obj = timing;
    const result = set(obj.withTiming(1, timingPresets.timingSlow));
    const appId = current.metadata.appId;
    const trackOverlayEvent = current.trackOverlayEvent;
    const QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED = isVideoEndAppStoreOverlayVisible.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED;
    trackOverlayEvent(QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED, appId, AnalyticsActions.AppStoreOverlayVariant.CUSTOM);
  }, items3);
  const items4 = [sharedValue];
  const callback2 = react.useCallback(() => {
    const current = ref.current;
    if (null != current) {
      ref.current = null;
      const QUEST_APP_STORE_OVERLAY_CLOSED = isVideoEndAppStoreOverlayVisible.QUEST_APP_STORE_OVERLAY_CLOSED;
      const appId = current.metadata.appId;
      const trackOverlayEvent = current.trackOverlayEvent;
      const _Date = Date;
      trackOverlayEvent(QUEST_APP_STORE_OVERLAY_CLOSED, appId, AnalyticsActions.AppStoreOverlayVariant.CUSTOM, Date.now() - ref2.current);
      const obj = AppStoreOverlayTelemetryManager;
      const result = obj.clearAppStoreOverlayOpen();
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.dispatch(memo.QUEST_APP_STORE_OVERLAY_FINISHED);
      _undefined2(null);
      set = sharedValue.set;
      const obj2 = timing;
      const result1 = set(obj2.withTiming(0, timingPresets.timingStandard));
    }
  }, items4);
  const items5 = [callback2, tmp15, callback1, sharedValue, memo];
  const memo2 = react.useMemo(() => ({ videoEndPeekProgress: sharedValue, videoEndPeekTargetScale: memo, isVideoEndAppStoreOverlayVisible, showVideoEndAppStoreOverlay: callback1, dismissVideoEndAppStoreOverlay: callback2 }), items5);
  let obj4 = initialBountyId(504);
  const items6 = [data];
  const items7 = [data, closure_8];
  const stateFromStores = obj4.useStateFromStores(items6, () => BountyStore.getCompletedBountyCount(first) * adContentId, items7);
  let obj5 = initialBountyId(14819);
  const bountyRecurringSwipeUpNux = obj5.useBountyRecurringSwipeUpNux({ isEligible: tmp22 });
  let hasRecurringSwipeUpNux = bountyRecurringSwipeUpNux.hasRecurringSwipeUpNux;
  const dismissRecurringSwipeUpNux = bountyRecurringSwipeUpNux.dismissRecurringSwipeUpNux;
  const height2 = tmp9.height;
  let sum = height2 + sum1;
  let c21 = sum;
  let diff = data.length - 1;
  let c22 = diff;
  zIndex4 = tmp26;
  let result = diff * sum;
  BOUNTIES_MODAL_FOOTER_HEIGHT = result;
  sum1 = result + height2;
  const items8 = [sum1, result, height2];
  const memo3 = react.useMemo(() => ({ lastBounty, fullRecap: sum1, revealHeight: height2 }), items8);
  const obj6 = initialBountyId(14820);
  const handleRecapMomentumEnd = obj6.useBountiesRecapScroll({ listRef: ref, enabled: tmp26, offsets: memo3 }).handleRecapMomentumEnd;
  const items9 = [data, sum1, stateFromStores > 0, sum];
  const memo4 = react.useMemo(() => {
    const mapped = first.map((item, index) => index * slotHeight);
    if (zIndex) {
      mapped.push(sum1);
    }
    return mapped;
  }, items9);
  const tmp31 = height(react.useState(false), 2);
  const first1 = tmp31[0];
  colors = tmp33;
  const tmp34 = height(react.useState(false), 2);
  const first2 = tmp34[0];
  FOOTER_FADE_END_PROGRESS = tmp36;
  [tmp38, tmp39] = height(react.useState(true), 2);
  ItemSeparatorComponent = tmp39;
  height(react.useState(true), 2);
  [tmp41, tmp42] = height(react.useState(false), 2);
  isScrollEventInBounds = tmp42;
  height(react.useState(false), 2);
  const tmp43 = height(react.useState(0), 2);
  const first3 = tmp43[0];
  closure_35 = tmp43[1];
  const obj7 = initialBountyId(4612);
  const sharedValue1 = obj7.useSharedValue(false);
  const obj8 = initialBountyId(4612);
  const sharedValue2 = obj8.useSharedValue(false);
  const obj9 = initialBountyId(4612);
  const sharedValue3 = obj9.useSharedValue(0);
  memo5 = react.useMemo(() => {
    const obj = initialBountyId(closure_2[29]);
    return obj.v4();
  }, []);
  const ref3 = react.useRef(0);
  const ref4 = react.useRef(0);
  const effect1 = react.useEffect(() => {
    ref3.current = Date.now();
  }, []);
  const items10 = [memo5];
  const callback3 = react.useCallback((current) => {
    let UP;
    let MANUAL = arg1;
    if (arg1 === undefined) {
      MANUAL = AnalyticsTypes.BountyScrollingType.MANUAL;
    }
    current = ref4.current;
    if (current !== current) {
      ref4.current = current;
      const _Date = Date;
      const timestamp = Date.now();
      ref3.current = timestamp;
      const diff = timestamp - ref3.current;
      const obj = { scrollingType: MANUAL, scrollingDirection: UP, verticalScrollingPosition: current, scrollSessionId: memo5, timeWatchedPreScrollMs: diff };
      const trackBountyVerticalScroll = AnalyticsActions.trackBountyVerticalScroll;
      AnalyticsActions;
      if (current > current) {
        UP = AnalyticsTypes.VerticalScrollingDirection.DOWN;
      } else {
        UP = AnalyticsTypes.VerticalScrollingDirection.UP;
      }
      const result = trackBountyVerticalScroll(obj);
    }
  }, items10);
  const items11 = [first3, dismissRecurringSwipeUpNux, callback2, callback3, hasRecurringSwipeUpNux];
  const callback4 = react.useCallback((arg0) => {
    const tmp = 0 === first3 && arg0 > 0 && hasRecurringSwipeUpNux;
    if (tmp) {
      dismissRecurringSwipeUpNux(ContentDismissActionType.USER_DISMISS);
    }
    closure_35(arg0);
    callback2();
    callback3(arg0);
  }, items11);
  const obj10 = initialBountyId(14821);
  const orbAmount = obj10.useBountiesRecapOrbCount({ scrollY: sharedValue3, lastBountyScrollOffset: result, recapRevealHeight: height2, targetOrbAmount: stateFromStores, enabled: tmp26 });
  const items12 = [data, first3];
  const effect2 = react.useEffect(() => {
    if (null != first[first3]) {
      const items = [first[first3].id];
      const obj = QuestActionCreators;
      obj.markAdContentSeen(AdCreativeType.AdCreativeType.BOUNTY, items);
    }
  }, items12);
  const items13 = [data, first3, sourceQuestContent];
  const items14 = [sourceQuestContent];
  const callback5 = react.useCallback(() => {
    let obj2;
    let obj3;
    let obj4;
    if (null != first[first3]) {
      const bountyVideoProgress = BountyStore.getBountyVideoProgress(tmp.id);
      let num;
      if (bountyVideoProgress != null) {
        num = bountyVideoProgress.maxTimestampSec;
      }
      if (num == null) {
        num = 0;
      }
      let num2;
      if (bountyVideoProgress != null) {
        num2 = bountyVideoProgress.duration;
      }
      if (num2 == null) {
        num2 = 0;
      }
      const result = 1000 * tmp.rewardTimerSeconds;
      const obj = { adContentId: first[first3].id, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, event: isVideoEndAppStoreOverlayVisible.AD_VIDEO_MODAL_CLOSED, properties: obj2, sourceQuestContent };
      const trackAdContentEvent = AnalyticsActions.trackAdContentEvent;
      AnalyticsActions;
      obj2 = { content_name: obj3.getQuestContentName(QuestContent.QuestContent.VIDEO_MODAL_MOBILE), content_id: QuestContent.QuestContent.VIDEO_MODAL_MOBILE, video_progress: obj4.formatVideoProgressRatio(num, num2), threshold_met: 1000 * num >= result, reward_timer_seconds: result / 1000 };
      obj3 = AnalyticsTypes;
      obj4 = VideoQuestUtils;
      trackAdContentEvent(obj);
    }
    const obj5 = BountiesModalActionCreatorsDefault;
    obj5.hideModal();
  }, items13);
  const onClose = react.useCallback(() => {
    let obj2;
    let obj3;
    const tmp = AnalyticsActions;
    const trackAdContentEvent = tmp.trackAdContentEvent;
    const obj = { adContentId, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, event: isVideoEndAppStoreOverlayVisible.AD_VIDEO_MODAL_CLOSED, properties: obj2, sourceQuestContent };
    obj2 = { content_name: obj3.getQuestContentName(QuestContent.QuestContent.BOUNTIES_END_INTERSTITIAL), content_id: QuestContent.QuestContent.BOUNTIES_END_INTERSTITIAL };
    obj3 = AnalyticsTypes;
    trackAdContentEvent(obj);
    const obj4 = BountiesModalActionCreatorsDefault;
    obj4.hideModal();
  }, items14);
  const obj12 = { onScroll: Dt, onBeginDrag: At, onEndDrag: Tt, onMomentumEnd: Rt };
  const obj11 = initialBountyId(4612);
  class Dt {
    constructor(contentOffset) {
      const result = sharedValue3.set(contentOffset.contentOffset.y);
      if (sharedValue2.get()) {
        if (typeof isScrollEventInBounds === "function") {
          const _Math = Math;
          const tmp7 = contentOffset.contentOffset.y >= 0 && contentOffset.contentOffset.y <= tmp6;
          tmp3(tmp7);
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
    }
  }
  const obj13 = { scrollY: sharedValue3, isDraggingSharedValue: sharedValue2, isScrollingInBoundsSharedValue: sharedValue1, isScrollEventInBounds };
  Dt.__closure = obj13;
  Dt.__workletHash = 16550062427029;
  Dt.__initData = __initData3;
  class At {
    constructor(contentOffset) {
      const result = sharedValue2.set(true);
      if (typeof isScrollEventInBounds === "function") {
        const _Math = Math;
        const tmp7 = contentOffset.contentOffset.y >= 0 && contentOffset.contentOffset.y <= tmp6;
        tmp3(tmp7);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  At.__closure = { isDraggingSharedValue: sharedValue2, isScrollingInBoundsSharedValue: sharedValue1, isScrollEventInBounds };
  At.__workletHash = 4736731816545;
  At.__initData = __initData4;
  class Tt {
    constructor() {
      const result = sharedValue2.set(false);
      if (!closure_19) {
        const result1 = sharedValue1.set(false);
      }
    }
  }
  const obj14 = { isDraggingSharedValue: sharedValue2, IS_ANDROID: dismissRecurringSwipeUpNux, isScrollingInBoundsSharedValue: sharedValue1 };
  Tt.__closure = obj14;
  Tt.__workletHash = 1138792855760;
  Tt.__initData = __initData5;
  class Rt {
    constructor(arg0) {
      if (zIndex) {
        const obj = ReanimatedRexport;
        obj.runOnJS(handleRecapMomentumEnd)(arg0);
      }
      const result = sharedValue1.set(false);
    }
  }
  Rt.__closure = { showRecapPullZone: stateFromStores > 0, runOnJS: initialBountyId(4612).runOnJS, handleRecapMomentumEnd, isScrollingInBoundsSharedValue: sharedValue1 };
  Rt.__workletHash = 12889620623212;
  Rt.__initData = __initData6;
  ({ showRecapPullZone: stateFromStores > 0, runOnJS: initialBountyId(4612).runOnJS, handleRecapMomentumEnd, isScrollingInBoundsSharedValue: sharedValue1 });
  function yt() {
    return Math.min(Math.max(Math.round(sharedValue3.get() / c21), 0), c22);
  }
  yt.__closure = { scrollY: sharedValue3, slotHeight: sum, lastBountyIndex: diff };
  yt.__workletHash = 2321200091780;
  yt.__initData = __initData7;
  const animatedScrollHandler = obj11.useAnimatedScrollHandler(obj12);
  const obj16 = initialBountyId(4612);
  class Ct {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        const obj = ReanimatedRexport;
        obj.runOnJS(callback4)(arg0);
      }
    }
  }
  Ct.__closure = { runOnJS: initialBountyId(4612).runOnJS, commitSwipe: callback4 };
  Ct.__workletHash = 13969036336836;
  Ct.__initData = __initData8;
  ({ runOnJS: initialBountyId(4612).runOnJS, commitSwipe: callback4 });
  const animatedReaction = obj16.useAnimatedReaction(yt, Ct);
  const tmp56 = initialBountyId(4612);
  class It {
    constructor() {
      let tmp = zIndex;
      if (tmp) {
        const value = sharedValue3.get();
        tmp = value >= c25 - useBountiesRecapScroll.RECAP_SNAP_EPSILON;
      }
      return tmp;
    }
  }
  const useAnimatedReaction = tmp56.useAnimatedReaction;
  It.__closure = { showRecapPullZone: stateFromStores > 0, scrollY: sharedValue3, lastBountyScrollOffset: result, RECAP_SNAP_EPSILON: initialBountyId(14820).RECAP_SNAP_EPSILON };
  It.__workletHash = 9483642326616;
  It.__initData = __initData9;
  ({ showRecapPullZone: stateFromStores > 0, scrollY: sharedValue3, lastBountyScrollOffset: result, RECAP_SNAP_EPSILON: initialBountyId(14820).RECAP_SNAP_EPSILON });
  class Bt {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        const obj = ReanimatedRexport;
        obj.runOnJS(c33)(arg0);
      }
    }
  }
  Bt.__closure = { runOnJS: initialBountyId(4612).runOnJS, setShowRecapFooter: tmp42 };
  Bt.__workletHash = 16849792087458;
  Bt.__initData = __initData10;
  ({ runOnJS: initialBountyId(4612).runOnJS, setShowRecapFooter: tmp42 });
  const animatedReaction1 = useAnimatedReaction(It, Bt);
  function wt() {
    const tmp = zIndex && sharedValue3.get() > c25;
    return tmp;
  }
  wt.__closure = { showRecapPullZone: stateFromStores > 0, scrollY: sharedValue3, lastBountyScrollOffset: result };
  wt.__workletHash = 8683329587970;
  wt.__initData = __initData11;
  function mt(arg0, arg1) {
    if (arg0 !== arg1) {
      const obj = ReanimatedRexport;
      obj.runOnJS(closure_29)(arg0);
    }
  }
  const obj20 = initialBountyId(4612);
  mt.__closure = { runOnJS: initialBountyId(4612).runOnJS, setIsRecapPageRevealed: tmp31[1] };
  mt.__workletHash = 6558318546127;
  mt.__initData = __initData12;
  ({ runOnJS: initialBountyId(4612).runOnJS, setIsRecapPageRevealed: tmp31[1] });
  const animatedReaction2 = obj20.useAnimatedReaction(wt, mt);
  const tmp59 = initialBountyId(4612);
  class Mt {
    constructor() {
      let tmp = zIndex;
      if (tmp) {
        const value = sharedValue3.get();
        tmp = value >= sum1 - useBountiesRecapScroll.RECAP_SNAP_EPSILON;
      }
      return tmp;
    }
  }
  const useAnimatedReaction2 = tmp59.useAnimatedReaction;
  Mt.__closure = { showRecapPullZone: stateFromStores > 0, scrollY: sharedValue3, fullRecapScrollOffset: sum1, RECAP_SNAP_EPSILON: initialBountyId(14820).RECAP_SNAP_EPSILON };
  Mt.__workletHash = 14769605032316;
  Mt.__initData = __initData13;
  function xt(arg0, arg1) {
    if (arg0 !== arg1) {
      const obj = ReanimatedRexport;
      obj.runOnJS(closure_31)(arg0);
    }
  }
  ({ showRecapPullZone: stateFromStores > 0, scrollY: sharedValue3, fullRecapScrollOffset: sum1, RECAP_SNAP_EPSILON: initialBountyId(14820).RECAP_SNAP_EPSILON });
  xt.__closure = { runOnJS: initialBountyId(4612).runOnJS, setIsRecapPageOnTop: tmp34[1] };
  xt.__workletHash = 2311489082799;
  xt.__initData = __initData14;
  ({ runOnJS: initialBountyId(4612).runOnJS, setIsRecapPageOnTop: tmp34[1] });
  const animatedReaction21 = useAnimatedReaction2(Mt, xt);
  const items15 = [height2, stateFromStores > 0];
  const memo6 = react.useMemo(() => {
    let tmp = null;
    if (zIndex) {
      const obj = { height: height2 };
      tmp = callback2(closure_34, obj);
    }
    return tmp;
  }, items15);
  const obj24 = initialBountyId(4612);
  class Vt {
    constructor() {
      const value = sharedValue.get();
      let num = 0;
      const tmp2 = ref(value, memo);
      const tmp4 = unpackModuleId(value, styles.width, styles.height);
      if (value <= 0) {
        num = c25;
      }
      return { height: styles.top + tmp4 * tmp2 + num };
    }
  }
  const obj25 = { videoEndPeekProgress: sharedValue, getBountyVideoEndPeekScale, videoEndPeekTargetScale: memo, getBountyVideoEndPeekClipHeight, videoLayout: tmp9, BOUNTIES_MODAL_FOOTER_HEIGHT };
  Vt.__closure = obj25;
  Vt.__workletHash = 4942578912766;
  Vt.__initData = __initData15;
  animatedStyle = obj24.useAnimatedStyle(Vt);
  const items16 = [animatedStyle, tmp.listWrapper, , ];
  ({ left: arr18[2], width: arr18[3] } = tmp9);
  const memo7 = react.useMemo(() => {
    const items = [closure_2.listWrapper, , ];
    const rect = { top: 0, left: styles.left, width: styles.width };
    items[1] = rect;
    items[2] = animatedStyle;
    return items;
  }, items16);
  const tmp64 = height(react.useState(false), 2);
  first4 = tmp64[0];
  closure_48 = tmp66;
  const obj26 = initialBountyId(4612);
  class Lt {
    constructor() {
      return sharedValue.get() > 0;
    }
  }
  Lt.__closure = { videoEndPeekProgress: sharedValue };
  Lt.__workletHash = 3087541213855;
  Lt.__initData = __initData16;
  function bt(arg0, arg1) {
    if (arg0 !== arg1) {
      const obj = ReanimatedRexport;
      obj.runOnJS(closure_48)(arg0);
    }
  }
  bt.__closure = { runOnJS: initialBountyId(4612).runOnJS, setHideListFooterPadding: tmp64[1] };
  bt.__workletHash = 4435232161253;
  bt.__initData = __initData17;
  ({ runOnJS: initialBountyId(4612).runOnJS, setHideListFooterPadding: tmp64[1] });
  const animatedReaction3 = obj26.useAnimatedReaction(Lt, bt);
  const items17 = [first4, tmp9.top];
  const items18 = [, ];
  ({ width: arr20[0], height: arr20[1] } = tmp9);
  const memo8 = react.useMemo(() => {
    let num;
    const obj = { paddingTop: styles.top, paddingBottom: num };
    num = 0;
    if (!first4) {
      num = c25;
    }
    return obj;
  }, items17);
  memo9 = react.useMemo(() => {
    size = { width: styles.width, height: styles.height };
    return size;
  }, items18);
  const items19 = [tmp.closeButton, , , ];
  ({ top: arr21[1], left: arr21[2], width: arr21[3] } = tmp9);
  const items20 = [first2, tmp.recapPage, , , , ];
  ({ top: arr22[2], left: arr22[3], width: arr22[4] } = tmp9);
  items20[5] = height;
  const memo10 = react.useMemo(() => {
    let diff;
    const items = [closure_2.closeButton, ];
    const rect = { top: styles.top + nativeDefault.space.PX_8, left: diff - nativeDefault.space.PX_8 };
    const sum = styles.left + styles.width;
    diff = sum - nativeDefault.space.PX_32;
    items[1] = rect;
    return items;
  }, items19);
  const memo11 = react.useMemo(() => {
    const items = [closure_2.recapPage, ];
    size = { top: styles.top, left: styles.left, width: styles.width, height: height - styles.top };
    let tmp = null;
    if (first2) {
      tmp = { zIndex };
      const obj = { zIndex };
    }
    const merged = Object.assign(tmp);
    items[1] = size;
    return items;
  }, items20);
  function zt() {
    const obj = useBountiesRecapScroll;
    return obj.getRevealProgress(sharedValue3.get(), c25, height2);
  }
  const obj28 = initialBountyId(4612);
  zt.__closure = { getRevealProgress: initialBountyId(14820).getRevealProgress, scrollY: sharedValue3, lastBountyScrollOffset: result, recapRevealHeight: height2 };
  zt.__workletHash = 11341453871635;
  zt.__initData = __initData18;
  ({ getRevealProgress: initialBountyId(14820).getRevealProgress, scrollY: sharedValue3, lastBountyScrollOffset: result, recapRevealHeight: height2 });
  derivedValue = obj28.useDerivedValue(zt);
  const obj30 = initialBountyId(4612);
  class Wt {
    constructor() {
      let interpolate;
      let value;
      const obj = { opacity: interpolate(value, [0, 1], [0, 1], ReanimatedRexport.Extrapolation.CLAMP) };
      interpolate = ReanimatedRexport.interpolate;
      ReanimatedRexport;
      value = derivedValue.get();
      return obj;
    }
  }
  Wt.__closure = { interpolate: initialBountyId(4612).interpolate, recapPullProgress: derivedValue, Extrapolation: initialBountyId(4612).Extrapolation };
  Wt.__workletHash = 120061230536;
  Wt.__initData = __initData19;
  ({ interpolate: initialBountyId(4612).interpolate, recapPullProgress: derivedValue, Extrapolation: initialBountyId(4612).Extrapolation });
  const animatedStyle1 = obj30.useAnimatedStyle(Wt);
  const obj32 = initialBountyId(4612);
  class Kt {
    constructor() {
      let interpolate;
      let items;
      let value;
      const obj = { opacity: interpolate(value, items, [1, 0], ReanimatedRexport.Extrapolation.CLAMP) };
      interpolate = ReanimatedRexport.interpolate;
      ReanimatedRexport;
      value = derivedValue.get();
      items = [c30, c31];
      return obj;
    }
  }
  Kt.__closure = { interpolate: initialBountyId(4612).interpolate, recapPullProgress: derivedValue, FOOTER_FADE_START_PROGRESS: first2, FOOTER_FADE_END_PROGRESS, Extrapolation: initialBountyId(4612).Extrapolation };
  Kt.__workletHash = 2307930075336;
  Kt.__initData = __initData20;
  ({ interpolate: initialBountyId(4612).interpolate, recapPullProgress: derivedValue, FOOTER_FADE_START_PROGRESS: first2, FOOTER_FADE_END_PROGRESS, Extrapolation: initialBountyId(4612).Extrapolation });
  const animatedStyle2 = obj32.useAnimatedStyle(Kt);
  const obj34 = initialBountyId(4612);
  const tmp74 = FOOTER_FADE_END_PROGRESS;
  class Xt {
    constructor() {
      let items;
      let obj4;
      let revealProgress;
      if (sharedValue3.get() >= c25 - c21 / 2) {
        revealProgress = derivedValue.get();
      } else {
        const obj2 = useBountiesRecapScroll;
        revealProgress = obj2.getRevealProgress(sharedValue3.get(), 0, height2);
      }
      const obj3 = { opacity: obj4.interpolate(revealProgress, items, [1, 0], ReanimatedRexport.Extrapolation.CLAMP) };
      items = [c30, c31];
      obj4 = ReanimatedRexport;
      return obj3;
    }
  }
  Xt.__closure = { scrollY: sharedValue3, lastBountyScrollOffset: result, slotHeight: sum, recapPullProgress: derivedValue, getRevealProgress: initialBountyId(14820).getRevealProgress, recapRevealHeight: height2, interpolate: initialBountyId(4612).interpolate, FOOTER_FADE_START_PROGRESS: first2, FOOTER_FADE_END_PROGRESS, Extrapolation: initialBountyId(4612).Extrapolation };
  Xt.__workletHash = 11729673016787;
  Xt.__initData = __initData21;
  const items21 = [tmp.peekGradient, , , , ];
  ({ left: arr23[1], width: arr23[2], top: arr23[3], height: arr23[4] } = tmp9);
  ({ scrollY: sharedValue3, lastBountyScrollOffset: result, slotHeight: sum, recapPullProgress: derivedValue, getRevealProgress: initialBountyId(14820).getRevealProgress, recapRevealHeight: height2, interpolate: initialBountyId(4612).interpolate, FOOTER_FADE_START_PROGRESS: first2, FOOTER_FADE_END_PROGRESS, Extrapolation: initialBountyId(4612).Extrapolation });
  const animatedStyle3 = obj34.useAnimatedStyle(Xt);
  let tmp78 = tmp22;
  const memo12 = react.useMemo(() => {
    const items = [closure_2.peekGradient, ];
    const rect = { left: styles.left, width: styles.width, top: styles.top + styles.height, bottom: 0 };
    items[1] = rect;
    return items;
  }, items21);
  if (data.length > 1) {
    tmp78 = hasRecurringSwipeUpNux;
  }
  if (tmp78) {
    tmp78 = !tmp15;
  }
  isPeekEnabled = tmp78;
  if (hasRecurringSwipeUpNux) {
    hasRecurringSwipeUpNux = tmp22;
  }
  function qt() {
    let interpolate;
    let items;
    let value;
    const obj = { opacity: interpolate(value, items, [1, 0], ReanimatedRexport.Extrapolation.CLAMP) };
    interpolate = ReanimatedRexport.interpolate;
    ReanimatedRexport;
    value = sharedValue3.get();
    items = [0, c21];
    return obj;
  }
  const tmp5Result = tmp5(4612);
  qt.__closure = { interpolate: tmp5(4612).interpolate, scrollY: sharedValue3, slotHeight: sum, Extrapolation: tmp5(4612).Extrapolation };
  qt.__workletHash = 17578041414706;
  qt.__initData = __initData22;
  ({ interpolate: tmp5(4612).interpolate, scrollY: sharedValue3, slotHeight: sum, Extrapolation: tmp5(4612).Extrapolation });
  const animatedStyle4 = tmp5Result.useAnimatedStyle(qt);
  function $t() {
    return derivedValue.get() < c31;
  }
  $t.__closure = { recapPullProgress: derivedValue, FOOTER_FADE_END_PROGRESS: tmp74 };
  $t.__workletHash = 2114608155849;
  $t.__initData = __initData23;
  function jt(arg0, arg1) {
    if (arg0 !== arg1) {
      const obj = ReanimatedRexport;
      obj.runOnJS(c32)(arg0);
    }
  }
  const tmp5Result2 = tmp5(4612);
  jt.__closure = { runOnJS: tmp5(4612).runOnJS, setIsCloseButtonPressable: tmp39 };
  jt.__workletHash = 2587138880527;
  jt.__initData = __initData24;
  ({ runOnJS: tmp5(4612).runOnJS, setIsCloseButtonPressable: tmp39 });
  const animatedReaction4 = tmp5Result2.useAnimatedReaction($t, jt);
  const items22 = [sum, sharedValue3, memo9, tmp78, hasRecurringSwipeUpNux, sourceQuestContent, , , , , , ];
  ({ width: arr24[6], height: arr24[7] } = tmp9);
  items22[8] = first3;
  items22[9] = first1;
  items22[10] = first2;
  items22[11] = sharedValue1;
  const items23 = [first3, first1, first2, , , , ];
  ({ width: arr25[3], height: arr25[4] } = tmp9);
  items23[5] = tmp78;
  items23[6] = tmp15;
  const callback6 = obj.useCallback((arg0) => {
    let BountiesScrollVideoItem;
    let index;
    let item;
    let tmp3;
    ({ item, index } = arg0);
    const obj = { index, slotHeight, scrollY: sharedValue3, style: memo9, isPeekEnabled, children: callback2(BountiesScrollVideoItem, size, item.id) };
    size = { bounty: item, sourceQuestContent, width: styles.width, height: styles.height, index, isScrollIndicatorEnabled: tmp3, isActive: tmp5, isRecapPageRevealed: first1, isRecapPageOnTop: first2, isScrollingInBoundsSharedValue: sharedValue1, shouldLoadHls: tmp5, softDownloadCapsEnabled: true };
    tmp3 = hasRecurringSwipeUpNux;
    BountiesScrollVideoItem = BountiesScrollVideoItem2.BountiesScrollVideoItem;
    if (hasRecurringSwipeUpNux) {
      tmp3 = 0 === index;
    }
    return callback2(closure_38, obj);
  }, items22);
  [][0] = height2;
  const memo13 = obj.useMemo(() => {
    size = { activeIndex: first3, isRecapPageRevealed: first1, isRecapPageOnTop: first2, width: styles.width, height: styles.height, isPeekEnabled, isVideoEndAppStoreOverlayVisible };
    return size;
  }, items23);
  if (0 === data.length) {
    return null;
  } else {
    let tmp85 = null;
    if (tmp41) {
      const obj38 = { orbAmount: stateFromStores };
      tmp85 = callback2(tmp5(14856).BountiesScrollRecapFooter, obj38);
    }
    const obj39 = { value: memo2, children: tmp87(tmp88, obj40) };
    let tmp86Result = null;
    obj40 = { style: tmp.root, children: items25 };
    const BountyVideoEndAppStoreProvider = tmp5(14825).BountyVideoEndAppStoreProvider;
    tmp87 = hasRecurringSwipeUpNux;
    tmp88 = questHomeBounties;
    if (stateFromStores > 0) {
      const obj41 = { style: items24, pointerEvents: str, children: callback2(QuestContentImpressionTrackerNative, obj42) };
      items24 = [memo11, animatedStyle1];
      str = "none";
      const View = tmp2(4612).View;
      if (first2) {
        str = "box-none";
      }
      obj42 = {
        adContentId,
        adCreativeType: tmp5(5630).AdCreativeType.BOUNTY,
        questContent: tmp5(5628).QuestContent.BOUNTIES_END_INTERSTITIAL,
        overrideVisibility: first2,
        sourceQuestContent,
        children() {
              const obj = { orbAmount, onClose, style: { flex: 1 } };
              return callback2(BountiesScrollRecapPage.BountiesScrollRecapPage, obj);
            }
      };
      QuestContentImpressionTrackerNative = tmp5(10958).QuestContentImpressionTrackerNative;
      tmp86Result = tmp86(View, obj41);
    }
    items25 = [tmp86Result, , , , , ];
    const obj43 = { style: memo7, children: callback2(tmp5(8371).AnimatedFlashList, obj44) };
    const View2 = tmp2(4612).View;
    obj44 = {
      ref,
      data,
      keyExtractor(id) {
          return id.id;
        },
      renderItem: callback6,
      extraData: memo13,
      overrideItemLayout: tmp83,
      ItemSeparatorComponent,
      ListFooterComponent: memo6,
      snapToOffsets: memo4,
      snapToEnd: false,
      decelerationRate: 0.85,
      showsVerticalScrollIndicator: false,
      drawDistance: sum,
      onScroll: animatedScrollHandler,
      scrollEventThrottle: 16,
      scrollEnabled: !tmp15,
      contentContainerStyle: memo8
    };
    items25[1] = callback2(View2, obj43);
    let tmp86Result4 = null;
    if (null != tmp14) {
      const obj45 = { metadata: tmp14.metadata, sheetHeight: memo1, revealProgress: sharedValue, onDismiss: callback2, onInstallPress: null, onOverlaySurfaceClick: null, onCarouselScroll: null };
      ({ onInstallPress: obj47.onInstallPress, onOverlaySurfaceClick: obj47.onOverlaySurfaceClick, onCarouselScroll: obj47.onCarouselScroll } = tmp14);
      tmp86Result4 = tmp86(tmp2(14861), obj45);
    }
    items25[2] = tmp86Result4;
    let tmp86Result5 = null;
    if (tmp78) {
      tmp86Result5 = null;
      if (data.length > 1) {
        const obj46 = { pointerEvents: "none", style: items26, children: callback2(tmp2(5605), obj48) };
        items26 = [memo12, animatedStyle4];
        const View3 = tmp2(4612).View;
        obj48 = { colors, style: styles.absoluteFill };
        tmp86Result5 = tmp86(View3, obj46);
      }
    }
    items25[3] = tmp86Result5;
    const obj49 = { style: items27, pointerEvents: str2, children: tmp86Result6 };
    items27 = [memo10, animatedStyle2];
    str2 = "none";
    const View4 = tmp2(4612).View;
    if (tmp38) {
      str2 = "box-none";
    }
    tmp86Result6 = null;
    if (tmp38) {
      const obj50 = { onPress: callback5 };
      tmp86Result6 = tmp86(tmp2(14862), obj50);
    }
    items25[4] = callback2(View4, obj49);
    const obj51 = { visible: tmp41, onContentLayout: callback, zIndex: zIndex4, opacityStyle: animatedStyle3, children: tmp85 };
    const tmp2Result = tmp2(14816);
    items25[5] = callback2(tmp2Result, obj51);
    return callback2(BountyVideoEndAppStoreProvider, obj39);
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let bountyId;
  let sourceQuestContent;
  const obj = react2;
  const cResult = obj.c(3);
  ({ bountyId, sourceQuestContent } = arg0);
  if (cResult[0] === bountyId) {
    let tmp4;
    if (cResult[1] === sourceQuestContent) {
      tmp4 = cResult[2];
    }
    return tmp4;
  }
  const obj2 = { theme: shared_ThemeTypes.ThemeTypes.DARK, children: closure_17(closure_84, { initialBountyId: bountyId, sourceQuestContent }) };
  const ThemeContextProvider = native.ThemeContextProvider;
  const tmp5 = closure_17(ThemeContextProvider, obj2);
  cResult[0] = bountyId;
  cResult[1] = sourceQuestContent;
  cResult[2] = tmp5;
  tmp4 = tmp5;
}) : ((arg0) => {
  let bountyId;
  let sourceQuestContent;
  ({ bountyId, sourceQuestContent } = arg0);
  const obj = { theme: shared_ThemeTypes.ThemeTypes.DARK, children: closure_17(closure_84, { initialBountyId: bountyId, sourceQuestContent }) };
  const ThemeContextProvider = native.ThemeContextProvider;
  return closure_17(ThemeContextProvider, obj);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalContentScroll.tsx");

export default tmp7;