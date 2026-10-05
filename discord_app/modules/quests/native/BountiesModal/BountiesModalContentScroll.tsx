// discord_app/modules/quests/native/BountiesModal/BountiesModalContentScroll.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ComponentDispatchUtils from "../../../../utils/ComponentDispatchUtils.tsx";
import useWindowDimensionsDefault from "../../../screen/useWindowDimensions.native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import timingPresets from "../../../../design/animation/reanimated/timing/timingPresets.tsx";
import QuestContent from "../../../../../discord_common/js/shared/shared-constants/QuestContent.tsx";
import AdCreativeType from "../../../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import QuestDataUtils from "../../utils/QuestDataUtils.tsx";
import AnalyticsActions from "../../lib/analytics/AnalyticsActions.tsx";
import AnalyticsTypes from "../../lib/analytics/AnalyticsTypes.tsx";
import QuestActionCreators from "../../QuestActionCreators.tsx";
import AppStoreOverlayTelemetryManager from "../AppStoreOverlayTelemetryManager.tsx";
import VideoQuestUtils from "../../utils/VideoQuestUtils.tsx";
import BountiesModalActionCreatorsDefault from "BountiesModalActionCreators.tsx";
import useBountiesRecapScroll from "useBountiesRecapScroll.tsx";
import BountiesScrollVideoItem from "BountiesScrollVideoItem.tsx";
import BountiesScrollRecapPage from "BountiesScrollRecapPage.tsx";
import shared_ThemeTypes from "../../../../../discord_common/js/packages/design/shared/ThemeTypes.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import BountyStore from "../../BountyStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const QuestConstants = fn(5623);
({ BOUNTY_ORB_AMOUNT: closure_8, DEFAULT_PLACEHOLDER_ENTRYPOINT_BOUNTY_ID: closure_9 } = QuestConstants);
const BountiesModalConstants = fn(14815);
({
  getBountyVideoEndAppStoreSheetHeight: c10,
  getBountyVideoEndPeekClipHeight: closure_11,
  getBountyVideoEndPeekScale: closure_12,
  getBountyVideoEndPeekTargetScale: map1,
} = BountiesModalConstants);
const Constants = fn(1085);
({ AnalyticEvents: closure_14, ComponentActions: closure_15 } = Constants);
const ContentDismissActionType = fn(2048).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_17, jsxs: closure_18 } = jsxProd);
const PlatformUtils = fn(1370);
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
let ReactCompilerGating = fn(558);
let ItemSeparatorComponent = ReactCompilerGating.isReactCompilerEnabled()
  ? (trailingItem) => {
      const cResult = c.c(1);
      if (null == trailingItem.trailingItem) {
        return null;
      } else {
        const _Symbol = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { style: null };
          const obj3 = { height: PX_8 };
          obj2.style = obj3;
          const tmp7 = constants(timestampProducer, obj2);
          cResult[0] = tmp7;
          let first = tmp7;
        } else {
          first = cResult[0];
        }
      }
    }
  : (trailingItem) => {
      let tmp = null;
      if (null != trailingItem.trailingItem) {
        const obj = { style: null };
        const obj2 = { height: PX_8 };
        obj.style = obj2;
        tmp = constants(timestampProducer, obj);
      }
      return tmp;
    };
function isScrollEventInBounds(contentOffset) {
  return contentOffset.contentOffset.y >= 0 && contentOffset.contentOffset.y <= tmp;
}
isScrollEventInBounds.__closure = {};
isScrollEventInBounds.__workletHash = 14148486927190;
isScrollEventInBounds.__initData = {
  code: "function isScrollEventInBounds_BountiesModalContentScrollTsx1(event){const maxOffset=Math.max(0,event.contentSize.height-event.layoutMeasurement.height);return event.contentOffset.y>=0&&event.contentOffset.y<=maxOffset;}",
};
ReactCompilerGating = fn(558);
let closure_34 = ReactCompilerGating.isReactCompilerEnabled()
  ? (height) => {
      const cResult = c.c(2);
      height = height.height;
      if (cResult[0] !== height) {
        const obj2 = { style: null };
        const obj3 = { height };
        obj2.style = obj3;
        const tmp5 = constants(timestampProducer, obj2);
        cResult[0] = height;
        cResult[1] = tmp5;
        let tmp2 = tmp5;
      } else {
        tmp2 = cResult[1];
      }
      return tmp2;
    }
  : (height) => constants(timestampProducer, { style: { height: height.height } });
const createStyles = fn(4890);
let closure_35 = createStyles.createStyles(() => {
  const obj = {
    root: { flex: 1 },
    recapPage: { position: "absolute", zIndex },
    listWrapper: { position: "absolute", zIndex: zIndex2, overflow: "hidden" },
    closeButton: { position: "absolute", zIndex: zIndex4 },
    peekGradient: { position: "absolute", zIndex: zIndex3 },
  };
  return obj;
});
const __initData = {
  code: "function BountiesModalContentScrollTsx2(){const{scrollY,index,slotHeight,isPeekEnabled,PEEK_OPACITY,interpolate,FADE_DEADBAND,Extrapolation}=this.__closure;const signedDistance=(scrollY.get()-index*slotHeight)/slotHeight;const distance=Math.abs(signedDistance);const peekOpacity=isPeekEnabled&&signedDistance<0&&index===1?PEEK_OPACITY:0;const opacity=interpolate(distance,[0,FADE_DEADBAND,1],[1,1,peekOpacity],Extrapolation.CLAMP);return{opacity:opacity};}",
};
const __initData2 = {
  code: "function BountiesModalContentScrollTsx3(){const{scrollY,index,slotHeight,isPeekEnabled,PEEK_OPACITY,interpolate,FADE_DEADBAND,Extrapolation}=this.__closure;const signedDistance=(scrollY.get()-index*slotHeight)/slotHeight;const distance=Math.abs(signedDistance);const peekOpacity=isPeekEnabled&&signedDistance<0&&index===1?PEEK_OPACITY:0;const opacity=interpolate(distance,[0,FADE_DEADBAND,1],[1,1,peekOpacity],Extrapolation.CLAMP);return{opacity:opacity};}",
};
ReactCompilerGating = fn(558);
let closure_38 = ReactCompilerGating.isReactCompilerEnabled()
  ? (index) => {
      const cResult = index(scrollY[12]).c(6);
      index = index.index;
      const slotHeight = index.slotHeight;
      scrollY = index.scrollY;
      ({ style, isPeekEnabled } = index);
      const children = index.children;
      let obj = index(scrollY[12]);
      const tmp = scrollY;
      const fn = function o() {
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
        const obj = { opacity: null };
        const items = [0, c27, 1];
        const items1 = [1, 1, num];
        obj.opacity = ReanimatedRexport.interpolate(absolute, items, items1, ReanimatedRexport.Extrapolation.CLAMP);
        return obj;
      };
      const obj2 = index(scrollY[14]);
      fn.__closure = {
        scrollY,
        index,
        slotHeight,
        isPeekEnabled,
        PEEK_OPACITY,
        interpolate: index(scrollY[14]).interpolate,
        FADE_DEADBAND,
        Extrapolation: index(scrollY[14]).Extrapolation,
      };
      fn.__workletHash = 6532652233494;
      fn.__initData = __initData;
      const animatedStyle = obj2.useAnimatedStyle(fn);
      if (cResult[0] === animatedStyle) {
        if (cResult[1] === style) {
          let tmp4 = cResult[2];
        }
        if (cResult[3] === children) {
          if (cResult[4] === tmp4) {
            let tmp5 = cResult[5];
          }
          return tmp5;
        }
        const obj4 = { style: tmp4, children };
        const tmp8 = closure_17(slotHeight(tmp[14]).View, obj4);
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
      const obj3 = {
        scrollY,
        index,
        slotHeight,
        isPeekEnabled,
        PEEK_OPACITY,
        interpolate: index(scrollY[14]).interpolate,
        FADE_DEADBAND,
        Extrapolation: index(scrollY[14]).Extrapolation,
      };
    }
  : (index) => {
      index = index.index;
      const slotHeight = index.slotHeight;
      const scrollY = index.scrollY;
      const isPeekEnabled = index.isPeekEnabled;
      ({ style, children } = index);
      const fn = function c() {
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
        const obj = { opacity: null };
        const items = [0, c27, 1];
        const items1 = [1, 1, num];
        obj.opacity = ReanimatedRexport.interpolate(absolute, items, items1, ReanimatedRexport.Extrapolation.CLAMP);
        return obj;
      };
      let obj = index(scrollY[14]);
      fn.__closure = {
        scrollY,
        index,
        slotHeight,
        isPeekEnabled,
        PEEK_OPACITY,
        interpolate: index(scrollY[14]).interpolate,
        FADE_DEADBAND,
        Extrapolation: index(scrollY[14]).Extrapolation,
      };
      fn.__workletHash = 9072488166423;
      fn.__initData = __initData2;
      const animatedStyle = obj.useAnimatedStyle(fn);
      const obj3 = { style: null, children };
      let items = [style, animatedStyle];
      obj3.style = items;
      return closure_17(slotHeight(scrollY[14]).View, obj3);
    };
ReactCompilerGating = fn(558);
let closure_39 = ReactCompilerGating.isReactCompilerEnabled()
  ? (footerHeight) => {
      const cResult = c.c(5);
      ({ width, height } = useWindowDimensionsDefault());
      const rect = useSafeAreaInsetsDefault();
      const diff = width - rect.left - rect.right;
      const diff1 = height - rect.top - footerHeight.footerHeight;
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
            if (cResult[3] === top) {
              let tmp10 = cResult[4];
            }
            return tmp10;
          }
        }
      }
      const size = { top, left: rounded, width: rounded1, height: rounded2 };
      cResult[0] = rounded;
      cResult[1] = rounded1;
      cResult[2] = rounded2;
      cResult[3] = top;
      cResult[4] = size;
      tmp10 = size;
    }
  : (footerHeight) => {
      footerHeight = footerHeight.footerHeight;
      let width;
      let height;
      let size = width(height[15])();
      width = size.width;
      height = size.height;
      const tmp = width(height[16])();
      closure_3 = tmp;
      const items = [width, height, , , ,];
      ({ top: arr[2], left: arr[3], right: arr[4] } = tmp);
      items[5] = footerHeight;
      return noop.useMemo(() => {
        const rect = closure_3;
        const diff = width - closure_3.left - closure_3.right;
        const diff1 = height - closure_3.top - footerHeight;
        let result = diff / c24;
        let result1 = diff;
        if (result > diff1) {
          result1 = diff1 * c24;
          result = diff1;
        }
        const size = {
          top: rect.top,
          left: Math.floor(rect.left + (diff - result1) / 2),
          width: Math.floor(result1),
          height: Math.floor(result),
        };
        return size;
      }, items);
    };
let closure_40 = {
  code: "function BountiesModalContentScrollTsx4(event_0){const{scrollY,isDraggingSharedValue,isScrollingInBoundsSharedValue,isScrollEventInBounds}=this.__closure;scrollY.set(event_0.contentOffset.y);if(isDraggingSharedValue.get()){isScrollingInBoundsSharedValue.set(isScrollEventInBounds(event_0));}}",
};
let closure_41 = {
  code: "function BountiesModalContentScrollTsx5(event_1){const{isDraggingSharedValue,isScrollingInBoundsSharedValue,isScrollEventInBounds}=this.__closure;isDraggingSharedValue.set(true);isScrollingInBoundsSharedValue.set(isScrollEventInBounds(event_1));}",
};
let closure_42 = {
  code: "function BountiesModalContentScrollTsx6(){const{isDraggingSharedValue,IS_ANDROID,isScrollingInBoundsSharedValue}=this.__closure;isDraggingSharedValue.set(false);if(!IS_ANDROID){isScrollingInBoundsSharedValue.set(false);}}",
};
let closure_43 = {
  code: "function BountiesModalContentScrollTsx7(event_2){const{showRecapPullZone,runOnJS,handleRecapMomentumEnd,isScrollingInBoundsSharedValue}=this.__closure;if(showRecapPullZone){runOnJS(handleRecapMomentumEnd)(event_2);}isScrollingInBoundsSharedValue.set(false);}",
};
let closure_44 = {
  code: "function BountiesModalContentScrollTsx8(){const{scrollY,slotHeight,lastBountyIndex}=this.__closure;return Math.min(Math.max(Math.round(scrollY.get()/slotHeight),0),lastBountyIndex);}",
};
let closure_45 = {
  code: "function BountiesModalContentScrollTsx9(next,prev_0){const{runOnJS,commitSwipe}=this.__closure;if(next!==prev_0){runOnJS(commitSwipe)(next);}}",
};
let closure_46 = {
  code: "function BountiesModalContentScrollTsx10(){const{showRecapPullZone,scrollY,lastBountyScrollOffset,RECAP_SNAP_EPSILON}=this.__closure;return showRecapPullZone&&scrollY.get()>=lastBountyScrollOffset-RECAP_SNAP_EPSILON;}",
};
let closure_47 = {
  code: "function BountiesModalContentScrollTsx11(show,previousShow){const{runOnJS,setShowRecapFooter}=this.__closure;if(show!==previousShow){runOnJS(setShowRecapFooter)(show);}}",
};
let closure_48 = {
  code: "function BountiesModalContentScrollTsx12(){const{showRecapPullZone,scrollY,lastBountyScrollOffset}=this.__closure;return showRecapPullZone&&scrollY.get()>lastBountyScrollOffset;}",
};
let closure_49 = {
  code: "function BountiesModalContentScrollTsx13(revealed,previousRevealed){const{runOnJS,setIsRecapPageRevealed}=this.__closure;if(revealed!==previousRevealed){runOnJS(setIsRecapPageRevealed)(revealed);}}",
};
let closure_50 = {
  code: "function BountiesModalContentScrollTsx14(){const{showRecapPullZone,scrollY,fullRecapScrollOffset,RECAP_SNAP_EPSILON}=this.__closure;return showRecapPullZone&&scrollY.get()>=fullRecapScrollOffset-RECAP_SNAP_EPSILON;}",
};
let closure_51 = {
  code: "function BountiesModalContentScrollTsx15(onTop,previousOnTop){const{runOnJS,setIsRecapPageOnTop}=this.__closure;if(onTop!==previousOnTop){runOnJS(setIsRecapPageOnTop)(onTop);}}",
};
let closure_52 = {
  code: "function BountiesModalContentScrollTsx16(){const{videoEndPeekProgress,getBountyVideoEndPeekScale,videoEndPeekTargetScale,getBountyVideoEndPeekClipHeight,videoLayout,BOUNTIES_MODAL_FOOTER_HEIGHT}=this.__closure;const progress_0=videoEndPeekProgress.get();const scale=getBountyVideoEndPeekScale(progress_0,videoEndPeekTargetScale);const clipHeight=getBountyVideoEndPeekClipHeight(progress_0,videoLayout.width,videoLayout.height);const footerHeight_0=progress_0>0?0:BOUNTIES_MODAL_FOOTER_HEIGHT;return{height:videoLayout.top+clipHeight*scale+footerHeight_0};}",
};
let closure_53 = {
  code: "function BountiesModalContentScrollTsx17(){const{videoEndPeekProgress}=this.__closure;return videoEndPeekProgress.get()>0;}",
};
let closure_54 = {
  code: "function BountiesModalContentScrollTsx18(hide,previousHide){const{runOnJS,setHideListFooterPadding}=this.__closure;if(hide!==previousHide){runOnJS(setHideListFooterPadding)(hide);}}",
};
let closure_55 = {
  code: "function BountiesModalContentScrollTsx19(){const{getRevealProgress,scrollY,lastBountyScrollOffset,recapRevealHeight}=this.__closure;return getRevealProgress(scrollY.get(),lastBountyScrollOffset,recapRevealHeight);}",
};
let closure_56 = {
  code: "function BountiesModalContentScrollTsx20(){const{interpolate,recapPullProgress,Extrapolation}=this.__closure;return{opacity:interpolate(recapPullProgress.get(),[0,1],[0,1],Extrapolation.CLAMP)};}",
};
let closure_57 = {
  code: "function BountiesModalContentScrollTsx21(){const{interpolate,recapPullProgress,FOOTER_FADE_START_PROGRESS,FOOTER_FADE_END_PROGRESS,Extrapolation}=this.__closure;return{opacity:interpolate(recapPullProgress.get(),[FOOTER_FADE_START_PROGRESS,FOOTER_FADE_END_PROGRESS],[1,0],Extrapolation.CLAMP)};}",
};
let closure_58 = {
  code: "function BountiesModalContentScrollTsx22(){const{scrollY,lastBountyScrollOffset,slotHeight,recapPullProgress,getRevealProgress,recapRevealHeight,interpolate,FOOTER_FADE_START_PROGRESS,FOOTER_FADE_END_PROGRESS,Extrapolation}=this.__closure;const progress_1=scrollY.get()>=lastBountyScrollOffset-slotHeight/2?recapPullProgress.get():getRevealProgress(scrollY.get(),0,recapRevealHeight);return{opacity:interpolate(progress_1,[FOOTER_FADE_START_PROGRESS,FOOTER_FADE_END_PROGRESS],[1,0],Extrapolation.CLAMP)};}",
};
let closure_59 = {
  code: "function BountiesModalContentScrollTsx23(){const{interpolate,scrollY,slotHeight,Extrapolation}=this.__closure;return{opacity:interpolate(scrollY.get(),[0,slotHeight],[1,0],Extrapolation.CLAMP)};}",
};
let closure_60 = {
  code: "function BountiesModalContentScrollTsx24(){const{recapPullProgress,FOOTER_FADE_END_PROGRESS}=this.__closure;return recapPullProgress.get()<FOOTER_FADE_END_PROGRESS;}",
};
let closure_61 = {
  code: "function BountiesModalContentScrollTsx25(pressable,previousPressable){const{runOnJS,setIsCloseButtonPressable}=this.__closure;if(pressable!==previousPressable){runOnJS(setIsCloseButtonPressable)(pressable);}}",
};
const __initData3 = {
  code: "function BountiesModalContentScrollTsx26(event_0){const{scrollY,isDraggingSharedValue,isScrollingInBoundsSharedValue,isScrollEventInBounds}=this.__closure;scrollY.set(event_0.contentOffset.y);if(isDraggingSharedValue.get()){isScrollingInBoundsSharedValue.set(isScrollEventInBounds(event_0));}}",
};
const __initData4 = {
  code: "function BountiesModalContentScrollTsx27(event_1){const{isDraggingSharedValue,isScrollingInBoundsSharedValue,isScrollEventInBounds}=this.__closure;isDraggingSharedValue.set(true);isScrollingInBoundsSharedValue.set(isScrollEventInBounds(event_1));}",
};
const __initData5 = {
  code: "function BountiesModalContentScrollTsx28(){const{isDraggingSharedValue,IS_ANDROID,isScrollingInBoundsSharedValue}=this.__closure;isDraggingSharedValue.set(false);if(!IS_ANDROID){isScrollingInBoundsSharedValue.set(false);}}",
};
const __initData6 = {
  code: "function BountiesModalContentScrollTsx29(event_2){const{showRecapPullZone,runOnJS,handleRecapMomentumEnd,isScrollingInBoundsSharedValue}=this.__closure;if(showRecapPullZone){runOnJS(handleRecapMomentumEnd)(event_2);}isScrollingInBoundsSharedValue.set(false);}",
};
const __initData7 = {
  code: "function BountiesModalContentScrollTsx30(){const{scrollY,slotHeight,lastBountyIndex}=this.__closure;return Math.min(Math.max(Math.round(scrollY.get()/slotHeight),0),lastBountyIndex);}",
};
const __initData8 = {
  code: "function BountiesModalContentScrollTsx31(next,prev_0){const{runOnJS,commitSwipe}=this.__closure;if(next!==prev_0){runOnJS(commitSwipe)(next);}}",
};
const __initData9 = {
  code: "function BountiesModalContentScrollTsx32(){const{showRecapPullZone,scrollY,lastBountyScrollOffset,RECAP_SNAP_EPSILON}=this.__closure;return showRecapPullZone&&scrollY.get()>=lastBountyScrollOffset-RECAP_SNAP_EPSILON;}",
};
const __initData10 = {
  code: "function BountiesModalContentScrollTsx33(show,previousShow){const{runOnJS,setShowRecapFooter}=this.__closure;if(show!==previousShow){runOnJS(setShowRecapFooter)(show);}}",
};
const __initData11 = {
  code: "function BountiesModalContentScrollTsx34(){const{showRecapPullZone,scrollY,lastBountyScrollOffset}=this.__closure;return showRecapPullZone&&scrollY.get()>lastBountyScrollOffset;}",
};
const __initData12 = {
  code: "function BountiesModalContentScrollTsx35(revealed,previousRevealed){const{runOnJS,setIsRecapPageRevealed}=this.__closure;if(revealed!==previousRevealed){runOnJS(setIsRecapPageRevealed)(revealed);}}",
};
const __initData13 = {
  code: "function BountiesModalContentScrollTsx36(){const{showRecapPullZone,scrollY,fullRecapScrollOffset,RECAP_SNAP_EPSILON}=this.__closure;return showRecapPullZone&&scrollY.get()>=fullRecapScrollOffset-RECAP_SNAP_EPSILON;}",
};
const __initData14 = {
  code: "function BountiesModalContentScrollTsx37(onTop,previousOnTop){const{runOnJS,setIsRecapPageOnTop}=this.__closure;if(onTop!==previousOnTop){runOnJS(setIsRecapPageOnTop)(onTop);}}",
};
const __initData15 = {
  code: "function BountiesModalContentScrollTsx38(){const{videoEndPeekProgress,getBountyVideoEndPeekScale,videoEndPeekTargetScale,getBountyVideoEndPeekClipHeight,videoLayout,BOUNTIES_MODAL_FOOTER_HEIGHT}=this.__closure;const progress_0=videoEndPeekProgress.get();const scale=getBountyVideoEndPeekScale(progress_0,videoEndPeekTargetScale);const clipHeight=getBountyVideoEndPeekClipHeight(progress_0,videoLayout.width,videoLayout.height);const footerHeight_0=progress_0>0?0:BOUNTIES_MODAL_FOOTER_HEIGHT;return{height:videoLayout.top+clipHeight*scale+footerHeight_0};}",
};
const __initData16 = {
  code: "function BountiesModalContentScrollTsx39(){const{videoEndPeekProgress}=this.__closure;return videoEndPeekProgress.get()>0;}",
};
const __initData17 = {
  code: "function BountiesModalContentScrollTsx40(hide,previousHide){const{runOnJS,setHideListFooterPadding}=this.__closure;if(hide!==previousHide){runOnJS(setHideListFooterPadding)(hide);}}",
};
const __initData18 = {
  code: "function BountiesModalContentScrollTsx41(){const{getRevealProgress,scrollY,lastBountyScrollOffset,recapRevealHeight}=this.__closure;return getRevealProgress(scrollY.get(),lastBountyScrollOffset,recapRevealHeight);}",
};
const __initData19 = {
  code: "function BountiesModalContentScrollTsx42(){const{interpolate,recapPullProgress,Extrapolation}=this.__closure;return{opacity:interpolate(recapPullProgress.get(),[0,1],[0,1],Extrapolation.CLAMP)};}",
};
const __initData20 = {
  code: "function BountiesModalContentScrollTsx43(){const{interpolate,recapPullProgress,FOOTER_FADE_START_PROGRESS,FOOTER_FADE_END_PROGRESS,Extrapolation}=this.__closure;return{opacity:interpolate(recapPullProgress.get(),[FOOTER_FADE_START_PROGRESS,FOOTER_FADE_END_PROGRESS],[1,0],Extrapolation.CLAMP)};}",
};
const __initData21 = {
  code: "function BountiesModalContentScrollTsx44(){const{scrollY,lastBountyScrollOffset,slotHeight,recapPullProgress,getRevealProgress,recapRevealHeight,interpolate,FOOTER_FADE_START_PROGRESS,FOOTER_FADE_END_PROGRESS,Extrapolation}=this.__closure;const progress_1=scrollY.get()>=lastBountyScrollOffset-slotHeight/2?recapPullProgress.get():getRevealProgress(scrollY.get(),0,recapRevealHeight);return{opacity:interpolate(progress_1,[FOOTER_FADE_START_PROGRESS,FOOTER_FADE_END_PROGRESS],[1,0],Extrapolation.CLAMP)};}",
};
const __initData22 = {
  code: "function BountiesModalContentScrollTsx45(){const{interpolate,scrollY,slotHeight,Extrapolation}=this.__closure;return{opacity:interpolate(scrollY.get(),[0,slotHeight],[1,0],Extrapolation.CLAMP)};}",
};
const __initData23 = {
  code: "function BountiesModalContentScrollTsx46(){const{recapPullProgress,FOOTER_FADE_END_PROGRESS}=this.__closure;return recapPullProgress.get()<FOOTER_FADE_END_PROGRESS;}",
};
const __initData24 = {
  code: "function BountiesModalContentScrollTsx47(pressable,previousPressable){const{runOnJS,setIsCloseButtonPressable}=this.__closure;if(pressable!==previousPressable){runOnJS(setIsCloseButtonPressable)(pressable);}}",
};
ReactCompilerGating = fn(558);
let closure_84 = ReactCompilerGating.isReactCompilerEnabled()
  ? (initialBountyId) => {
      const cResult = initialBountyId(576).c(190);
      initialBountyId = initialBountyId.initialBountyId;
      const sourceQuestContent = initialBountyId.sourceQuestContent;
      ref3();
      const height = sourceQuestContent(1484)().height;
      questHomeBounties.useRef(null);
      let obj = initialBountyId(576);
      [tmp8, dependencyMap] = size(
        questHomeBounties.useState(initialBountyId(14816).BOUNTIES_MODAL_BASE_FOOTER_HEIGHT),
        2,
      );
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function c(nativeEvent) {
          dependencyMap(Math.ceil(nativeEvent.nativeEvent.layout.height));
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp8) {
        let obj3 = { footerHeight: tmp8 };
        cResult[1] = tmp8;
        cResult[2] = obj3;
        let tmp10 = obj3;
      } else {
        tmp10 = cResult[2];
      }
      size = onClose(tmp10);
      let tmp7 = size(questHomeBounties.useState(initialBountyId(14816).BOUNTIES_MODAL_BASE_FOOTER_HEIGHT), 2);
      questHomeBounties = initialBountyId(10911).useQuestHomeBounties().questHomeBounties;
      if (cResult[3] === initialBountyId) {
        if (cResult[4] === questHomeBounties) {
          let tmp11 = cResult[5];
        }
        const first1 = tmp6(obj2.useState(tmp11), 1)[0];
        closure_6 = tmp12;
        if (cResult[6] === initialBountyId) {
          if (cResult[7] === tmp12) {
            if (cResult[8] === sourceQuestContent) {
              let tmp13 = cResult[9];
              let tmp14 = cResult[10];
            }
            const effect = obj2.useEffect(tmp13, tmp14);
            const sharedValue = tmp(4612).useSharedValue(0);
            const tmpResult2 = tmp(4612);
            [tmp18, closure_8] = tmp6(obj2.useState(null), 2);
            obj2.useRef(null);
            const ref2 = obj2.useRef(0);
            if (cResult[11] === size.height) {
              if (cResult[12] === size.top) {
                if (cResult[13] === size.width) {
                  if (cResult[14] === height) {
                    let tmp20 = cResult[15];
                  }
                  closure_11 = tmp20;
                  if (cResult[16] !== height) {
                    const tmp25 = ref2(height);
                    cResult[16] = height;
                    cResult[17] = tmp25;
                  }
                  if (cResult[18] !== sharedValue) {
                    class Ne {
                      constructor(arg0) {
                        closure_10.current = Date.now();
                        closure_9.current = initialBountyId;
                        tmp = closure_8(initialBountyId);
                        tmp2 = closure_0;
                        tmp3 = closure_2;
                        obj = closure_0(closure_2[21]);
                        result = closure_7.set(obj.withTiming(1, closure_0(closure_2[22]).timingSlow));
                        appId = initialBountyId.metadata.appId;
                        trackOverlayEventResult = initialBountyId.trackOverlayEvent(
                          AnalyticEvents.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED,
                          appId,
                          tmp2(tmp3[23]).AppStoreOverlayVariant.CUSTOM,
                        );
                        return;
                      }
                    }
                    cResult[18] = sharedValue;
                    cResult[19] = Ne;
                  } else {
                    class Ne {
                      constructor(arg0) {
                        closure_10.current = Date.now();
                        closure_9.current = initialBountyId;
                        tmp = closure_8(initialBountyId);
                        tmp2 = closure_0;
                        tmp3 = closure_2;
                        obj = closure_0(closure_2[21]);
                        result = closure_7.set(obj.withTiming(1, closure_0(closure_2[22]).timingSlow));
                        appId = initialBountyId.metadata.appId;
                        trackOverlayEventResult = initialBountyId.trackOverlayEvent(
                          AnalyticEvents.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED,
                          appId,
                          tmp2(tmp3[23]).AppStoreOverlayVariant.CUSTOM,
                        );
                        return;
                      }
                    }
                  }
                  if (cResult[20] !== sharedValue) {
                    class Ne {
                      constructor(arg0) {
                        closure_10.current = Date.now();
                        closure_9.current = initialBountyId;
                        tmp = closure_8(initialBountyId);
                        tmp2 = closure_0;
                        tmp3 = closure_2;
                        obj = closure_0(closure_2[21]);
                        result = closure_7.set(obj.withTiming(1, closure_0(closure_2[22]).timingSlow));
                        appId = initialBountyId.metadata.appId;
                        trackOverlayEventResult = initialBountyId.trackOverlayEvent(
                          AnalyticEvents.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED,
                          appId,
                          tmp2(tmp3[23]).AppStoreOverlayVariant.CUSTOM,
                        );
                        return;
                      }
                    }
                    cResult[20] = sharedValue;
                    cResult[21] = tmp28;
                  } else {
                    class Ne {
                      constructor(arg0) {
                        closure_10.current = Date.now();
                        closure_9.current = initialBountyId;
                        tmp = closure_8(initialBountyId);
                        tmp2 = closure_0;
                        tmp3 = closure_2;
                        obj = closure_0(closure_2[21]);
                        result = closure_7.set(obj.withTiming(1, closure_0(closure_2[22]).timingSlow));
                        appId = initialBountyId.metadata.appId;
                        trackOverlayEventResult = initialBountyId.trackOverlayEvent(
                          AnalyticEvents.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED,
                          appId,
                          tmp2(tmp3[23]).AppStoreOverlayVariant.CUSTOM,
                        );
                        return;
                      }
                    }
                  }
                  if (cResult[22] === tmp27) {
                    class Ne {
                      constructor(arg0) {
                        closure_10.current = Date.now();
                        closure_9.current = initialBountyId;
                        tmp = closure_8(initialBountyId);
                        tmp2 = closure_0;
                        tmp3 = closure_2;
                        obj = closure_0(closure_2[21]);
                        result = closure_7.set(obj.withTiming(1, closure_0(closure_2[22]).timingSlow));
                        appId = initialBountyId.metadata.appId;
                        trackOverlayEventResult = initialBountyId.trackOverlayEvent(
                          AnalyticEvents.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED,
                          appId,
                          tmp2(tmp3[23]).AppStoreOverlayVariant.CUSTOM,
                        );
                        return;
                      }
                    }
                  }
                  let obj4 = {
                    videoEndPeekProgress: sharedValue,
                    videoEndPeekTargetScale: tmp20,
                    isVideoEndAppStoreOverlayVisible: tmp19,
                    showVideoEndAppStoreOverlay: Ne,
                    dismissVideoEndAppStoreOverlay: tmp27,
                  };
                  cResult[22] = tmp27;
                  cResult[23] = tmp19;
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
            const tmp6Result = tmp6(obj2.useState(null), 2);
          }
        }
        function fe() {
          if (closure_6) {
            const _Error = Error;
            const error = new Error("Bounty unexpectedly missing when opening the Bounties modal");
            const obj2 = { tags: { source: "BountiesModalContentScroll" }, extra: null };
            const obj3 = { bountyId: initialBountyId, sourceQuestContent };
            obj2.extra = obj3;
            const result = QuestDataUtils.captureQuestsException(error, obj2);
            BountiesModalActionCreatorsDefault.hideModal();
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
              tmp2 = items1;
              num = 0;
              arraySpreadResult = HermesBuiltin.arraySpread(arr.slice(findIndexResult), 0);
              tmp4 = items1;
              arraySpreadResult1 = HermesBuiltin.arraySpread(arr.slice(0, findIndexResult), arraySpreadResult);
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
      const tmpResult = initialBountyId(10911);
    }
  : (initialBountyId) => {
      initialBountyId = initialBountyId.initialBountyId;
      const sourceQuestContent = initialBountyId.sourceQuestContent;
      noop = undefined;
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
      const height = sourceQuestContent(1484)().height;
      const ref = noop.useRef(null);
      [tmp7, c4] = height(noop.useState(initialBountyId(14816).BOUNTIES_MODAL_BASE_FOOTER_HEIGHT), 2);
      const callback = noop.useCallback((nativeEvent) => {
        _undefined(Math.ceil(nativeEvent.nativeEvent.layout.height));
      }, []);
      const tmp9 = memo5({ footerHeight: tmp7 });
      styles = tmp9;
      const tmp6 = height(noop.useState(initialBountyId(14816).BOUNTIES_MODAL_BASE_FOOTER_HEIGHT), 2);
      const questHomeBounties = initialBountyId(10911).useQuestHomeBounties().questHomeBounties;
      const data = height(
        noop.useState(() => {
          const findIndexResult = questHomeBounties.findIndex((id) => id.id === initialBountyId);
          if (findIndexResult < 0) {
            let items = [];
          } else {
            items = questHomeBounties;
            if (0 !== findIndexResult) {
              const items1 = [];
              HermesBuiltin.arraySpread(
                questHomeBounties.slice(0, findIndexResult),
                HermesBuiltin.arraySpread(questHomeBounties.slice(findIndexResult), 0),
              );
              items = items1;
              const arraySpreadResult = HermesBuiltin.arraySpread(questHomeBounties.slice(findIndexResult), 0);
            }
          }
          return items;
        }),
        1,
      )[0];
      closure_8 = tmp10;
      let items = [0 === data.length, initialBountyId, sourceQuestContent];
      const effect = noop.useEffect(() => {
        if (closure_8) {
          const _Error = Error;
          const error = new Error("Bounty unexpectedly missing when opening the Bounties modal");
          const obj2 = { tags: { source: "BountiesModalContentScroll" }, extra: null };
          const obj3 = { bountyId: initialBountyId, sourceQuestContent };
          obj2.extra = obj3;
          const result = QuestDataUtils.captureQuestsException(error, obj2);
          BountiesModalActionCreatorsDefault.hideModal();
        }
      }, items);
      adContentId = closure_8;
      let obj2 = initialBountyId(10911);
      const sharedValue = initialBountyId(4612).useSharedValue(0);
      let obj3 = initialBountyId(4612);
      [tmp14, c11] = height(noop.useState(null), 2);
      getBountyVideoEndPeekScale = noop.useRef(null);
      noop.useRef(0);
      const isVideoEndAppStoreOverlayVisible = tmp15;
      let items1 = [height, , ,];
      ({ top: arr3[1], width: arr3[2], height: arr3[3] } = tmp9);
      const memo = noop.useMemo(
        () =>
          __initData2({
            windowHeight: height,
            videoTop: styles.top,
            videoWidth: styles.width,
            videoHeight: styles.height,
          }),
        items1,
      );
      const items2 = [height];
      const items3 = [sharedValue];
      const memo1 = noop.useMemo(() => v65535(height), items2);
      const callback1 = noop.useCallback((current) => {
        closure_13.current = Date.now();
        closure_12.current = current;
        _undefined2(current);
        const result = sharedValue.set(timing.withTiming(1, timingPresets.timingSlow));
        const appId = current.metadata.appId;
        current.trackOverlayEvent(
          constants.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED,
          appId,
          AnalyticsActions.AppStoreOverlayVariant.CUSTOM,
        );
      }, items3);
      const items4 = [sharedValue];
      const callback2 = noop.useCallback(() => {
        const current = ref.current;
        if (null != current) {
          ref.current = null;
          const QUEST_APP_STORE_OVERLAY_CLOSED = constants.QUEST_APP_STORE_OVERLAY_CLOSED;
          const appId = current.metadata.appId;
          const _Date = Date;
          current.trackOverlayEvent(
            QUEST_APP_STORE_OVERLAY_CLOSED,
            appId,
            AnalyticsActions.AppStoreOverlayVariant.CUSTOM,
            Date.now() - ref2.current,
          );
          const result = AppStoreOverlayTelemetryManager.clearAppStoreOverlayOpen();
          const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
          ComponentDispatch.dispatch(constants2.QUEST_APP_STORE_OVERLAY_FINISHED);
          _undefined2(null);
          const result1 = sharedValue.set(timing.withTiming(0, timingPresets.timingStandard));
        }
      }, items4);
      const items5 = [callback2, null != tmp14, callback1, sharedValue, memo];
      const memo2 = noop.useMemo(
        () => ({
          videoEndPeekProgress: sharedValue,
          videoEndPeekTargetScale: memo,
          isVideoEndAppStoreOverlayVisible,
          showVideoEndAppStoreOverlay: callback1,
          dismissVideoEndAppStoreOverlay: callback2,
        }),
        items5,
      );
      const tmp13 = height(noop.useState(null), 2);
      const items6 = [data];
      const items7 = [data, closure_8];
      const stateFromStores = initialBountyId(504).useStateFromStores(
        items6,
        () => BountyStore.getCompletedBountyCount(first) * closure_9,
        items7,
      );
      let obj4 = initialBountyId(504);
      const bountyRecurringSwipeUpNux = initialBountyId(14819).useBountyRecurringSwipeUpNux({ isEligible: tmp22 });
      let hasRecurringSwipeUpNux = bountyRecurringSwipeUpNux.hasRecurringSwipeUpNux;
      const dismissRecurringSwipeUpNux = bountyRecurringSwipeUpNux.dismissRecurringSwipeUpNux;
      const height2 = tmp9.height;
      let sum = height2 + sum1;
      c21 = sum;
      let diff = data.length - 1;
      c22 = diff;
      zIndex4 = tmp26;
      let result = diff * sum;
      BOUNTIES_MODAL_FOOTER_HEIGHT = result;
      sum1 = result + height2;
      const items8 = [sum1, result, height2];
      const memo3 = noop.useMemo(() => ({ lastBounty, fullRecap: sum1, revealHeight: height2 }), items8);
      let obj5 = initialBountyId(14819);
      const handleRecapMomentumEnd = initialBountyId(14820).useBountiesRecapScroll({
        listRef: ref,
        enabled: tmp26,
        offsets: memo3,
      }).handleRecapMomentumEnd;
      const items9 = [data, sum1, stateFromStores > 0, sum];
      const memo4 = noop.useMemo(() => {
        const mapped = first.map((item, index) => index * slotHeight);
        if (closure_23) {
          mapped.push(sum1);
        }
        return mapped;
      }, items9);
      const tmp31 = height(noop.useState(false), 2);
      const first1 = tmp31[0];
      colors = tmp33;
      const tmp34 = height(noop.useState(false), 2);
      const first2 = tmp34[0];
      FOOTER_FADE_END_PROGRESS = tmp36;
      let obj6 = initialBountyId(14820);
      [tmp38, tmp39] = height(noop.useState(true), 2);
      ItemSeparatorComponent = tmp39;
      const tmp37 = height(noop.useState(true), 2);
      [tmp41, tmp42] = height(noop.useState(false), 2);
      isScrollEventInBounds = tmp42;
      const tmp43 = height(noop.useState(0), 2);
      const first3 = tmp43[0];
      closure_35 = tmp43[1];
      const tmp40 = height(noop.useState(false), 2);
      const sharedValue1 = initialBountyId(4612).useSharedValue(false);
      const obj7 = initialBountyId(4612);
      const sharedValue2 = initialBountyId(4612).useSharedValue(false);
      const obj8 = initialBountyId(4612);
      const sharedValue3 = initialBountyId(4612).useSharedValue(0);
      memo5 = noop.useMemo(() => initialBountyId(closure_2[29]).v4(), []);
      noop.useRef(0);
      noop.useRef(0);
      const effect1 = noop.useEffect(() => {
        closure_40.current = Date.now();
      }, []);
      const items10 = [memo5];
      const callback3 = noop.useCallback((current) => {
        let MANUAL = arg1;
        if (arg1 === undefined) {
          MANUAL = AnalyticsTypes.BountyScrollingType.MANUAL;
        }
        current = ref4.current;
        if (current !== current) {
          tmp3.current = current;
          const _Date = Date;
          const timestamp = Date.now();
          ref3.current = timestamp;
          const diff = timestamp - ref3.current;
          let result = {
            scrollingType: MANUAL,
            scrollingDirection: null,
            verticalScrollingPosition: null,
            scrollSessionId: null,
            timeWatchedPreScrollMs: null,
          };
          if (current > current) {
            let UP = AnalyticsTypes.VerticalScrollingDirection.DOWN;
          } else {
            UP = AnalyticsTypes.VerticalScrollingDirection.UP;
          }
          result.scrollingDirection = UP;
          result.verticalScrollingPosition = current;
          result.scrollSessionId = memo5;
          result.timeWatchedPreScrollMs = diff;
          result = AnalyticsActions.trackBountyVerticalScroll(result);
        }
      }, items10);
      const items11 = [first3, dismissRecurringSwipeUpNux, callback2, callback3, hasRecurringSwipeUpNux];
      const callback4 = noop.useCallback((arg0) => {
        if (tmp) {
          dismissRecurringSwipeUpNux(ContentDismissActionType.USER_DISMISS);
        }
        closure_35(arg0);
        callback2();
        callback3(arg0);
        tmp = 0 === first3 && arg0 > 0 && hasRecurringSwipeUpNux;
      }, items11);
      const obj9 = initialBountyId(4612);
      const orbAmount = initialBountyId(14821).useBountiesRecapOrbCount({
        scrollY: sharedValue3,
        lastBountyScrollOffset: result,
        recapRevealHeight: height2,
        targetOrbAmount: stateFromStores,
        enabled: tmp26,
      });
      const items12 = [data, first3];
      const effect2 = noop.useEffect(() => {
        if (null != first[first3]) {
          const items = [tmp.id];
          QuestActionCreators.markAdContentSeen(AdCreativeType.AdCreativeType.BOUNTY, items);
        }
      }, items12);
      const items13 = [data, first3, sourceQuestContent];
      const items14 = [sourceQuestContent];
      const callback5 = noop.useCallback(() => {
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
          const obj2 = {
            adContentId: tmp.id,
            adCreativeType: AdCreativeType.AdCreativeType.BOUNTY,
            event: constants.AD_VIDEO_MODAL_CLOSED,
            properties: null,
            sourceQuestContent: null,
          };
          const obj3 = {
            content_name: null,
            content_id: null,
            video_progress: null,
            threshold_met: null,
            reward_timer_seconds: null,
          };
          const obj = AnalyticsActions;
          obj3.content_name = AnalyticsTypes.getQuestContentName(QuestContent.QuestContent.VIDEO_MODAL_MOBILE);
          obj3.content_id = QuestContent.QuestContent.VIDEO_MODAL_MOBILE;
          obj3.video_progress = VideoQuestUtils.formatVideoProgressRatio(num, num2);
          obj3.threshold_met = 1000 * num >= result;
          obj3.reward_timer_seconds = result / 1000;
          obj2.properties = obj3;
          obj2.sourceQuestContent = sourceQuestContent;
          obj.trackAdContentEvent(obj2);
        }
        BountiesModalActionCreatorsDefault.hideModal();
      }, items13);
      const onClose = noop.useCallback(() => {
        const obj2 = {
          adContentId,
          adCreativeType: AdCreativeType.AdCreativeType.BOUNTY,
          event: constants.AD_VIDEO_MODAL_CLOSED,
          properties: null,
          sourceQuestContent: null,
        };
        const obj3 = { content_name: null, content_id: null };
        const obj = AnalyticsActions;
        obj3.content_name = AnalyticsTypes.getQuestContentName(QuestContent.QuestContent.BOUNTIES_END_INTERSTITIAL);
        obj3.content_id = QuestContent.QuestContent.BOUNTIES_END_INTERSTITIAL;
        obj2.properties = obj3;
        obj2.sourceQuestContent = sourceQuestContent;
        obj.trackAdContentEvent(obj2);
        BountiesModalActionCreatorsDefault.hideModal();
      }, items14);
      const obj10 = initialBountyId(14821);
      const obj12 = { onScroll: null, onBeginDrag: null, onEndDrag: null, onMomentumEnd: null };
      class Dt {
        constructor(arg0) {
          result = closure_38.set(initialBountyId.contentOffset.y);
          if (closure_37.get()) {
            tmp4 = isScrollEventInBounds;
            if (typeof isScrollEventInBounds === "function") {
              tmp5 = globalThis;
              _Math = Math;
              num = 0;
              tmp7 = initialBountyId.contentOffset.y >= 0 && initialBountyId.contentOffset.y <= tmp6;
              tmp3Result = tmp3(tmp7);
            } else {
              str = "Trying to call a non-function";
              throw new TypeError("Trying to call a non-function");
            }
          }
          return;
        }
      }
      Dt.__closure = {
        scrollY: sharedValue3,
        isDraggingSharedValue: sharedValue2,
        isScrollingInBoundsSharedValue: sharedValue1,
        isScrollEventInBounds,
      };
      Dt.__workletHash = 16550062427029;
      Dt.__initData = __initData3;
      obj12.onScroll = Dt;
      class At {
        constructor(arg0) {
          result = closure_37.set(true);
          if (typeof isScrollEventInBounds === "function") {
            tmp4 = initialBountyId;
            tmp5 = globalThis;
            _Math = Math;
            num = 0;
            tmp7 = initialBountyId.contentOffset.y >= 0 && initialBountyId.contentOffset.y <= tmp6;
            tmp3Result = tmp3(tmp7);
            return;
          } else {
            str = "Trying to call a non-function";
            throw new TypeError("Trying to call a non-function");
          }
        }
      }
      At.__closure = {
        isDraggingSharedValue: sharedValue2,
        isScrollingInBoundsSharedValue: sharedValue1,
        isScrollEventInBounds,
      };
      At.__workletHash = 4736731816545;
      At.__initData = __initData4;
      obj12.onBeginDrag = At;
      class Tt {
        constructor() {
          result = closure_37.set(false);
          if (!closure_19) {
            tmp2 = closure_36;
            result1 = closure_36.set(false);
          }
          return;
        }
      }
      Tt.__closure = {
        isDraggingSharedValue: sharedValue2,
        IS_ANDROID: dismissRecurringSwipeUpNux,
        isScrollingInBoundsSharedValue: sharedValue1,
      };
      Tt.__workletHash = 1138792855760;
      Tt.__initData = __initData5;
      obj12.onEndDrag = Tt;
      class Rt {
        constructor(arg0) {
          if (closure_23) {
            tmp = initialBountyId;
            tmp2 = closure_0;
            tmp3 = closure_2;
            obj = closure_0(closure_2[14]);
            tmp4 = handleRecapMomentumEnd;
            tmp5 = obj.runOnJS(handleRecapMomentumEnd)(initialBountyId);
          }
          result = closure_36.set(false);
          return;
        }
      }
      const obj11 = initialBountyId(4612);
      const obj13 = {
        scrollY: sharedValue3,
        isDraggingSharedValue: sharedValue2,
        isScrollingInBoundsSharedValue: sharedValue1,
        isScrollEventInBounds,
      };
      const obj14 = {
        isDraggingSharedValue: sharedValue2,
        IS_ANDROID: dismissRecurringSwipeUpNux,
        isScrollingInBoundsSharedValue: sharedValue1,
      };
      Rt.__closure = {
        showRecapPullZone: stateFromStores > 0,
        runOnJS: initialBountyId(4612).runOnJS,
        handleRecapMomentumEnd,
        isScrollingInBoundsSharedValue: sharedValue1,
      };
      Rt.__workletHash = 12889620623212;
      Rt.__initData = __initData6;
      obj12.onMomentumEnd = Rt;
      const obj15 = {
        showRecapPullZone: stateFromStores > 0,
        runOnJS: initialBountyId(4612).runOnJS,
        handleRecapMomentumEnd,
        isScrollingInBoundsSharedValue: sharedValue1,
      };
      const animatedScrollHandler = obj11.useAnimatedScrollHandler(obj12);
      function yt() {
        return Math.min(Math.max(Math.round(sharedValue3.get() / c21), 0), c22);
      }
      yt.__closure = { scrollY: sharedValue3, slotHeight: sum, lastBountyIndex: diff };
      yt.__workletHash = 2321200091780;
      yt.__initData = __initData7;
      class Ct {
        constructor(arg0, arg1) {
          if (initialBountyId !== arg1) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[14]);
            tmp3 = closure_43;
            tmp4 = obj.runOnJS(closure_43)(initialBountyId);
          }
          return;
        }
      }
      const obj16 = initialBountyId(4612);
      Ct.__closure = { runOnJS: initialBountyId(4612).runOnJS, commitSwipe: callback4 };
      Ct.__workletHash = 13969036336836;
      Ct.__initData = __initData8;
      const animatedReaction = obj16.useAnimatedReaction(yt, Ct);
      const obj17 = { runOnJS: initialBountyId(4612).runOnJS, commitSwipe: callback4 };
      class It {
        constructor() {
          tmp = closure_23;
          if (closure_23) {
            tmp2 = closure_38;
            tmp4 = closure_25;
            tmp5 = closure_0;
            tmp6 = closure_2;
            value = closure_38.get();
            tmp = value >= closure_25 - closure_0(closure_2[28]).RECAP_SNAP_EPSILON;
          }
          return tmp;
        }
      }
      const obj18 = initialBountyId(4612);
      It.__closure = {
        showRecapPullZone: stateFromStores > 0,
        scrollY: sharedValue3,
        lastBountyScrollOffset: result,
        RECAP_SNAP_EPSILON: initialBountyId(14820).RECAP_SNAP_EPSILON,
      };
      It.__workletHash = 9483642326616;
      It.__initData = __initData9;
      class Bt {
        constructor(arg0, arg1) {
          if (initialBountyId !== arg1) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[14]);
            tmp3 = closure_33;
            tmp4 = obj.runOnJS(closure_33)(initialBountyId);
          }
          return;
        }
      }
      const obj19 = {
        showRecapPullZone: stateFromStores > 0,
        scrollY: sharedValue3,
        lastBountyScrollOffset: result,
        RECAP_SNAP_EPSILON: initialBountyId(14820).RECAP_SNAP_EPSILON,
      };
      Bt.__closure = { runOnJS: initialBountyId(4612).runOnJS, setShowRecapFooter: tmp42 };
      Bt.__workletHash = 16849792087458;
      Bt.__initData = __initData10;
      const animatedReaction1 = obj18.useAnimatedReaction(It, Bt);
      const obj20 = { runOnJS: initialBountyId(4612).runOnJS, setShowRecapFooter: tmp42 };
      function wt() {
        let tmp = closure_23;
        if (closure_23) {
          tmp = sharedValue3.get() > c25;
        }
        return tmp;
      }
      wt.__closure = { showRecapPullZone: stateFromStores > 0, scrollY: sharedValue3, lastBountyScrollOffset: result };
      wt.__workletHash = 8683329587970;
      wt.__initData = __initData11;
      function mt(arg0, arg1) {
        if (arg0 !== arg1) {
          ReanimatedRexport.runOnJS(closure_29)(arg0);
        }
      }
      const obj21 = initialBountyId(4612);
      mt.__closure = { runOnJS: initialBountyId(4612).runOnJS, setIsRecapPageRevealed: tmp31[1] };
      mt.__workletHash = 6558318546127;
      mt.__initData = __initData12;
      const animatedReaction2 = obj21.useAnimatedReaction(wt, mt);
      const obj22 = { runOnJS: initialBountyId(4612).runOnJS, setIsRecapPageRevealed: tmp31[1] };
      class Mt {
        constructor() {
          tmp = closure_23;
          if (closure_23) {
            tmp2 = closure_38;
            tmp4 = closure_26;
            tmp5 = closure_0;
            tmp6 = closure_2;
            value = closure_38.get();
            tmp = value >= closure_26 - closure_0(closure_2[28]).RECAP_SNAP_EPSILON;
          }
          return tmp;
        }
      }
      const obj23 = initialBountyId(4612);
      Mt.__closure = {
        showRecapPullZone: stateFromStores > 0,
        scrollY: sharedValue3,
        fullRecapScrollOffset: sum1,
        RECAP_SNAP_EPSILON: initialBountyId(14820).RECAP_SNAP_EPSILON,
      };
      Mt.__workletHash = 14769605032316;
      Mt.__initData = __initData13;
      function xt(arg0, arg1) {
        if (arg0 !== arg1) {
          ReanimatedRexport.runOnJS(closure_31)(arg0);
        }
      }
      const obj24 = {
        showRecapPullZone: stateFromStores > 0,
        scrollY: sharedValue3,
        fullRecapScrollOffset: sum1,
        RECAP_SNAP_EPSILON: initialBountyId(14820).RECAP_SNAP_EPSILON,
      };
      xt.__closure = { runOnJS: initialBountyId(4612).runOnJS, setIsRecapPageOnTop: tmp34[1] };
      xt.__workletHash = 2311489082799;
      xt.__initData = __initData14;
      const animatedReaction3 = obj23.useAnimatedReaction(Mt, xt);
      const items15 = [height2, stateFromStores > 0];
      const memo6 = noop.useMemo(() => {
        let tmp = null;
        if (closure_23) {
          const obj = { height: height2 };
          tmp = constants(closure_34, obj);
        }
        return tmp;
      }, items15);
      const obj25 = { runOnJS: initialBountyId(4612).runOnJS, setIsRecapPageOnTop: tmp34[1] };
      class Vt {
        constructor() {
          value = closure_10.get();
          tmp2 = closure_12(value, closure_15);
          tmp3 = closure_5;
          num = 0;
          tmp4 = closure_11(value, closure_5.width, closure_5.height);
          if (value <= 0) {
            num = c25;
          }
          obj = { height: tmp3.top + tmp4 * tmp2 + num };
          return obj;
        }
      }
      Vt.__closure = {
        videoEndPeekProgress: sharedValue,
        getBountyVideoEndPeekScale,
        videoEndPeekTargetScale: memo,
        getBountyVideoEndPeekClipHeight,
        videoLayout: tmp9,
        BOUNTIES_MODAL_FOOTER_HEIGHT,
      };
      Vt.__workletHash = 4942578912766;
      Vt.__initData = __initData15;
      animatedStyle = initialBountyId(4612).useAnimatedStyle(Vt);
      const items16 = [animatedStyle, tmp.listWrapper, ,];
      ({ left: arr18[2], width: arr18[3] } = tmp9);
      const memo7 = noop.useMemo(() => {
        const items = [closure_2.listWrapper, ,];
        const rect = { top: 0, left: styles.left, width: styles.width };
        items[1] = rect;
        items[2] = animatedStyle;
        return items;
      }, items16);
      const tmp62 = height(noop.useState(false), 2);
      first4 = tmp62[0];
      closure_48 = tmp64;
      const obj26 = initialBountyId(4612);
      const obj27 = {
        videoEndPeekProgress: sharedValue,
        getBountyVideoEndPeekScale,
        videoEndPeekTargetScale: memo,
        getBountyVideoEndPeekClipHeight,
        videoLayout: tmp9,
        BOUNTIES_MODAL_FOOTER_HEIGHT,
      };
      class Lt {
        constructor() {
          return closure_10.get() > 0;
        }
      }
      Lt.__closure = { videoEndPeekProgress: sharedValue };
      Lt.__workletHash = 3087541213855;
      Lt.__initData = __initData16;
      function bt(arg0, arg1) {
        if (arg0 !== arg1) {
          ReanimatedRexport.runOnJS(closure_48)(arg0);
        }
      }
      const obj28 = initialBountyId(4612);
      bt.__closure = { runOnJS: initialBountyId(4612).runOnJS, setHideListFooterPadding: tmp62[1] };
      bt.__workletHash = 4435232161253;
      bt.__initData = __initData17;
      const animatedReaction4 = obj28.useAnimatedReaction(Lt, bt);
      const items17 = [first4, tmp9.top];
      const items18 = [,];
      ({ width: arr20[0], height: arr20[1] } = tmp9);
      const memo8 = noop.useMemo(() => {
        const obj = { paddingTop: styles.top, paddingBottom: null };
        let num = 0;
        if (!first4) {
          num = c25;
        }
        obj.paddingBottom = num;
        return obj;
      }, items17);
      memo9 = noop.useMemo(() => {
        const size = { width: styles.width, height: styles.height };
        return size;
      }, items18);
      const items19 = [tmp.closeButton, , ,];
      ({ top: arr21[1], left: arr21[2], width: arr21[3] } = tmp9);
      const items20 = [first2, tmp.recapPage, , , ,];
      ({ top: arr22[2], left: arr22[3], width: arr22[4] } = tmp9);
      items20[5] = height;
      const memo10 = noop.useMemo(() => {
        const items = [closure_2.closeButton];
        const rect = { top: styles.top + nativeDefault.space.PX_8, left: null };
        const sum = styles.left + styles.width;
        const diff = sum - nativeDefault.space.PX_32;
        rect.left = diff - nativeDefault.space.PX_8;
        items[1] = rect;
        return items;
      }, items19);
      const memo11 = noop.useMemo(() => {
        const items = [closure_2.recapPage];
        const size = { top: styles.top, left: styles.left, width: styles.width, height: height - styles.top };
        let tmp = null;
        if (first2) {
          const obj = { zIndex };
          tmp = obj;
        }
        const merged = Object.assign(tmp);
        items[1] = size;
        return items;
      }, items20);
      const obj29 = { runOnJS: initialBountyId(4612).runOnJS, setHideListFooterPadding: tmp62[1] };
      function zt() {
        return useBountiesRecapScroll.getRevealProgress(sharedValue3.get(), c25, height2);
      }
      const obj30 = initialBountyId(4612);
      zt.__closure = {
        getRevealProgress: initialBountyId(14820).getRevealProgress,
        scrollY: sharedValue3,
        lastBountyScrollOffset: result,
        recapRevealHeight: height2,
      };
      zt.__workletHash = 11341453871635;
      zt.__initData = __initData18;
      derivedValue = obj30.useDerivedValue(zt);
      const obj31 = {
        getRevealProgress: initialBountyId(14820).getRevealProgress,
        scrollY: sharedValue3,
        lastBountyScrollOffset: result,
        recapRevealHeight: height2,
      };
      class Wt {
        constructor() {
          obj = { opacity: null };
          obj2 = closure_0(closure_2[14]);
          value = closure_50.get();
          obj.opacity = obj2.interpolate(value, [0, 1], [0, 1], closure_0(closure_2[14]).Extrapolation.CLAMP);
          return obj;
        }
      }
      const obj32 = initialBountyId(4612);
      Wt.__closure = {
        interpolate: initialBountyId(4612).interpolate,
        recapPullProgress: derivedValue,
        Extrapolation: initialBountyId(4612).Extrapolation,
      };
      Wt.__workletHash = 120061230536;
      Wt.__initData = __initData19;
      const animatedStyle1 = obj32.useAnimatedStyle(Wt);
      const obj33 = {
        interpolate: initialBountyId(4612).interpolate,
        recapPullProgress: derivedValue,
        Extrapolation: initialBountyId(4612).Extrapolation,
      };
      class Kt {
        constructor() {
          obj = { opacity: null };
          obj2 = closure_0(closure_2[14]);
          value = closure_50.get();
          items = [,];
          items[0] = c30;
          items[1] = c31;
          obj.opacity = obj2.interpolate(value, items, [1, 0], closure_0(closure_2[14]).Extrapolation.CLAMP);
          return obj;
        }
      }
      const obj34 = initialBountyId(4612);
      Kt.__closure = {
        interpolate: initialBountyId(4612).interpolate,
        recapPullProgress: derivedValue,
        FOOTER_FADE_START_PROGRESS: first2,
        FOOTER_FADE_END_PROGRESS,
        Extrapolation: initialBountyId(4612).Extrapolation,
      };
      Kt.__workletHash = 2307930075336;
      Kt.__initData = __initData20;
      const animatedStyle2 = obj34.useAnimatedStyle(Kt);
      const obj35 = {
        interpolate: initialBountyId(4612).interpolate,
        recapPullProgress: derivedValue,
        FOOTER_FADE_START_PROGRESS: first2,
        FOOTER_FADE_END_PROGRESS,
        Extrapolation: initialBountyId(4612).Extrapolation,
      };
      const tmp72 = FOOTER_FADE_END_PROGRESS;
      class Xt {
        constructor() {
          obj = closure_38;
          if (closure_38.get() >= closure_25 - closure_21 / 2) {
            tmp5 = closure_50;
            value = closure_50.get();
          } else {
            tmp = closure_0;
            tmp2 = closure_2;
            obj2 = closure_0(closure_2[28]);
            tmp3 = height;
            num = 0;
            value = obj2.getRevealProgress(obj.get(), 0, height);
          }
          obj1 = { opacity: null };
          obj4 = closure_0(closure_2[14]);
          items = [,];
          items[0] = c30;
          items[1] = c31;
          obj1.opacity = obj4.interpolate(value, items, [1, 0], closure_0(closure_2[14]).Extrapolation.CLAMP);
          return obj1;
        }
      }
      const obj36 = initialBountyId(4612);
      Xt.__closure = {
        scrollY: sharedValue3,
        lastBountyScrollOffset: result,
        slotHeight: sum,
        recapPullProgress: derivedValue,
        getRevealProgress: initialBountyId(14820).getRevealProgress,
        recapRevealHeight: height2,
        interpolate: initialBountyId(4612).interpolate,
        FOOTER_FADE_START_PROGRESS: first2,
        FOOTER_FADE_END_PROGRESS,
        Extrapolation: initialBountyId(4612).Extrapolation,
      };
      Xt.__workletHash = 11729673016787;
      Xt.__initData = __initData21;
      const items21 = [tmp.peekGradient, , , ,];
      ({ left: arr23[1], width: arr23[2], top: arr23[3], height: arr23[4] } = tmp9);
      const animatedStyle3 = obj36.useAnimatedStyle(Xt);
      let tmp76 = tmp22;
      const memo12 = noop.useMemo(() => {
        const items = [closure_2.peekGradient];
        const rect = { left: styles.left, width: styles.width, top: styles.top + styles.height, bottom: 0 };
        items[1] = rect;
        return items;
      }, items21);
      if (data.length > 1) {
        tmp76 = hasRecurringSwipeUpNux;
      }
      if (tmp76) {
        tmp76 = !tmp15;
      }
      isPeekEnabled = tmp76;
      if (hasRecurringSwipeUpNux) {
        hasRecurringSwipeUpNux = tmp22;
      }
      const obj37 = {
        scrollY: sharedValue3,
        lastBountyScrollOffset: result,
        slotHeight: sum,
        recapPullProgress: derivedValue,
        getRevealProgress: initialBountyId(14820).getRevealProgress,
        recapRevealHeight: height2,
        interpolate: initialBountyId(4612).interpolate,
        FOOTER_FADE_START_PROGRESS: first2,
        FOOTER_FADE_END_PROGRESS,
        Extrapolation: initialBountyId(4612).Extrapolation,
      };
      function qt() {
        const obj = { opacity: null };
        value = sharedValue3.get();
        const items = [0, c21];
        obj.opacity = ReanimatedRexport.interpolate(value, items, [1, 0], ReanimatedRexport.Extrapolation.CLAMP);
        return obj;
      }
      const tmp5Result = initialBountyId(4612);
      qt.__closure = {
        interpolate: initialBountyId(4612).interpolate,
        scrollY: sharedValue3,
        slotHeight: sum,
        Extrapolation: initialBountyId(4612).Extrapolation,
      };
      qt.__workletHash = 17578041414706;
      qt.__initData = __initData22;
      const animatedStyle4 = tmp5Result.useAnimatedStyle(qt);
      const obj38 = {
        interpolate: initialBountyId(4612).interpolate,
        scrollY: sharedValue3,
        slotHeight: sum,
        Extrapolation: initialBountyId(4612).Extrapolation,
      };
      function $t() {
        return derivedValue.get() < c31;
      }
      $t.__closure = { recapPullProgress: derivedValue, FOOTER_FADE_END_PROGRESS: tmp72 };
      $t.__workletHash = 2114608155849;
      $t.__initData = __initData23;
      function jt(arg0, arg1) {
        if (arg0 !== arg1) {
          ReanimatedRexport.runOnJS(c32)(arg0);
        }
      }
      const tmp5Result2 = initialBountyId(4612);
      jt.__closure = { runOnJS: initialBountyId(4612).runOnJS, setIsCloseButtonPressable: tmp39 };
      jt.__workletHash = 2587138880527;
      jt.__initData = __initData24;
      const animatedReaction5 = tmp5Result2.useAnimatedReaction($t, jt);
      const items22 = [sum, sharedValue3, memo9, tmp76, hasRecurringSwipeUpNux, sourceQuestContent, , , , , ,];
      ({ width: arr24[6], height: arr24[7] } = tmp9);
      items22[8] = first3;
      items22[9] = first1;
      items22[10] = first2;
      items22[11] = sharedValue1;
      const items23 = [first3, first1, first2, , , ,];
      ({ width: arr25[3], height: arr25[4] } = tmp9);
      items23[5] = tmp76;
      items23[6] = null != tmp14;
      const callback6 = obj.useCallback((arg0) => {
        ({ item, index } = arg0);
        const obj = { index, slotHeight, scrollY: sharedValue3, style: memo9, isPeekEnabled, children: null };
        const size = {
          bounty: item,
          sourceQuestContent,
          width: styles.width,
          height: styles.height,
          index,
          isScrollIndicatorEnabled: null,
          isActive: null,
          isRecapPageRevealed: null,
          isRecapPageOnTop: null,
          isScrollingInBoundsSharedValue: null,
          shouldLoadHls: null,
          softDownloadCapsEnabled: true,
        };
        let tmp3 = hasRecurringSwipeUpNux;
        if (hasRecurringSwipeUpNux) {
          tmp3 = 0 === index;
        }
        size.isScrollIndicatorEnabled = tmp3;
        let tmp5 = index === first3;
        size.isActive = tmp5;
        size.isRecapPageRevealed = first1;
        size.isRecapPageOnTop = first2;
        size.isScrollingInBoundsSharedValue = sharedValue1;
        if (!tmp5) {
          tmp5 = index === tmp4 + 1;
        }
        size.shouldLoadHls = tmp5;
        obj.children = constants(BountiesScrollVideoItem.BountiesScrollVideoItem, size, item.id);
        return constants(closure_38, obj);
      }, items22);
      [][0] = height2;
      const memo13 = obj.useMemo(() => {
        const size = {
          activeIndex: first3,
          isRecapPageRevealed: first1,
          isRecapPageOnTop: first2,
          width: styles.width,
          height: styles.height,
          isPeekEnabled,
          isVideoEndAppStoreOverlayVisible,
        };
        return size;
      }, items23);
      if (0 === data.length) {
        return null;
      } else {
        let tmp83 = null;
        if (tmp41) {
          const obj40 = { orbAmount: stateFromStores };
          tmp83 = callback2(tmp5(14856).BountiesScrollRecapFooter, obj40);
        }
        const obj41 = { value: memo2, children: null };
        const obj42 = { style: tmp.root, children: null };
        let tmp84Result = null;
        if (tmp26) {
          const obj43 = { style: null, pointerEvents: null, children: null };
          const items24 = [memo11, animatedStyle1];
          obj43.style = items24;
          let str = "none";
          if (first2) {
            str = "box-none";
          }
          obj43.pointerEvents = str;
          const obj44 = {
            adContentId,
            adCreativeType: tmp5(5630).AdCreativeType.BOUNTY,
            questContent: tmp5(5628).QuestContent.BOUNTIES_END_INTERSTITIAL,
            overrideVisibility: first2,
            sourceQuestContent,
            children() {
              return constants(BountiesScrollRecapPage.BountiesScrollRecapPage, {
                orbAmount,
                onClose,
                style: { flex: 1 },
              });
            },
          };
          obj43.children = tmp84(tmp5(10958).QuestContentImpressionTrackerNative, obj44);
          tmp84Result = tmp84(tmp2(4612).View, obj43);
        }
        const items25 = [tmp84Result, , , , ,];
        const obj45 = { style: memo7, children: null };
        const obj46 = {
          ref,
          data,
          keyExtractor(id) {
            return id.id;
          },
          renderItem: callback6,
          extraData: memo13,
          overrideItemLayout: tmp81,
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
          contentContainerStyle: memo8,
        };
        obj45.children = callback2(tmp5(8371).AnimatedFlashList, obj46);
        items25[1] = callback2(tmp2(4612).View, obj45);
        let tmp84Result4 = null;
        if (null != tmp14) {
          const obj47 = {
            metadata: tmp14.metadata,
            sheetHeight: memo1,
            revealProgress: sharedValue,
            onDismiss: callback2,
            onInstallPress: null,
            onOverlaySurfaceClick: null,
            onCarouselScroll: null,
          };
          ({
            onInstallPress: obj49.onInstallPress,
            onOverlaySurfaceClick: obj49.onOverlaySurfaceClick,
            onCarouselScroll: obj49.onCarouselScroll,
          } = tmp14);
          tmp84Result4 = tmp84(tmp2(14861), obj47);
        }
        items25[2] = tmp84Result4;
        let tmp84Result5 = null;
        if (tmp76) {
          tmp84Result5 = null;
          if (data.length > 1) {
            const obj48 = { pointerEvents: "none", style: null, children: null };
            const items26 = [memo12, animatedStyle4];
            obj48.style = items26;
            const obj50 = { colors, style: styles.absoluteFill };
            obj48.children = tmp84(tmp2(5605), obj50);
            tmp84Result5 = tmp84(tmp2(4612).View, obj48);
          }
        }
        items25[3] = tmp84Result5;
        const obj51 = { style: null, pointerEvents: null, children: null };
        const items27 = [memo10, animatedStyle2];
        obj51.style = items27;
        let str2 = "none";
        if (tmp38) {
          str2 = "box-none";
        }
        obj51.pointerEvents = str2;
        let tmp84Result6 = null;
        if (tmp38) {
          const obj52 = { onPress: callback5 };
          tmp84Result6 = tmp84(tmp2(14862), obj52);
        }
        obj51.children = tmp84Result6;
        items25[4] = callback2(tmp2(4612).View, obj51);
        const obj53 = {
          visible: tmp41,
          onContentLayout: callback,
          zIndex: zIndex4,
          opacityStyle: animatedStyle3,
          children: tmp83,
        };
        items25[5] = callback2(tmp2(14816), obj53);
        obj42.children = items25;
        obj41.children = hasRecurringSwipeUpNux(questHomeBounties, obj42);
        return callback2(tmp5(14825).BountyVideoEndAppStoreProvider, obj41);
      }
      const obj39 = { runOnJS: initialBountyId(4612).runOnJS, setIsCloseButtonPressable: tmp39 };
    };
ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalContentScroll.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(3);
      ({ bountyId, sourceQuestContent } = arg0);
      if (cResult[0] === bountyId) {
        if (cResult[1] === sourceQuestContent) {
          let tmp4 = cResult[2];
        }
        return tmp4;
      }
      const tmp5 = constants(native.ThemeContextProvider, {
        theme: shared_ThemeTypes.ThemeTypes.DARK,
        children: constants(closure_84, { initialBountyId: bountyId, sourceQuestContent }),
      });
      cResult[0] = bountyId;
      cResult[1] = sourceQuestContent;
      cResult[2] = tmp5;
      tmp4 = tmp5;
      const obj2 = {
        theme: shared_ThemeTypes.ThemeTypes.DARK,
        children: constants(closure_84, { initialBountyId: bountyId, sourceQuestContent }),
      };
    }
  : (arg0) => {
      ({ bountyId, sourceQuestContent } = arg0);
      return constants(native.ThemeContextProvider, {
        theme: shared_ThemeTypes.ThemeTypes.DARK,
        children: constants(closure_84, { initialBountyId: bountyId, sourceQuestContent }),
      });
    };
