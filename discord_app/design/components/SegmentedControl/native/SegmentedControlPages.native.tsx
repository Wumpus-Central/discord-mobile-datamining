// === Module 10974: SegmentedControlPages ===

// Module 10974 (SegmentedControlPages)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 4612 */;
import react_native2 from "react-native" /* 5779 */;
import MathUtils from "MathUtils" /* 10975 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const ReanimatedRexport = ReanimatedRexport2;
let _require, dependencyMap, importDefault, set;

let closure_3 = ["reportedPageIndex", "pageIndex", "scrollTargetPageIndex", "index", "item", "activePageRangeStart", "activePageRangeEnd"];
const ScrollView = react_native.ScrollView;
const jsx = Fragment.jsx;
let closure_8 = ReanimatedRexport.createAnimatedComponent(ScrollView);
let ref = { code: "function SegmentedControlPagesNativeTsx1(){const{activeIndex}=this.__closure;return activeIndex.get();}" };
let pageIndex = { code: "function SegmentedControlPagesNativeTsx2(value_0){const{runOnJS,updateCurrentActiveIndex}=this.__closure;runOnJS(updateCurrentActiveIndex)(value_0);}" };
let reportedPageIndex = { code: "function SegmentedControlPagesNativeTsx3(){const{pageIndex}=this.__closure;return pageIndex.get();}" };
let closure_12 = { code: "function SegmentedControlPagesNativeTsx4(value_1){const{activeIndex}=this.__closure;activeIndex.set(value_1);}" };
let closure_13 = { code: "function SegmentedControlPagesNativeTsx5(contentOffset,contentSize){const{pageWidth,pageIndex,roundIfClose,reportedPageIndex,runOnJS,onPageChanged}=this.__closure;if(pageWidth===0){return;}pageIndex.set(Math.min(Math.max(roundIfClose(contentOffset.x/pageWidth,0.0001),0),roundIfClose(contentSize.width/pageWidth,0.0001)-1));const pageFullyVisible=pageIndex.get()%1===0;if(pageFullyVisible&&reportedPageIndex.get()!==pageIndex.get()){reportedPageIndex.set(pageIndex.get());runOnJS(onPageChanged)(pageIndex.get());}}" };
let __initData = { code: "function SegmentedControlPagesNativeTsx6(event){const{scrollTarget,onBeginDragWorklet}=this.__closure;var _onBeginDragWorklet;scrollTarget.set(-1);(_onBeginDragWorklet=onBeginDragWorklet)===null||_onBeginDragWorklet===void 0||_onBeginDragWorklet(event);}" };
let __initData2 = { code: "function SegmentedControlPagesNativeTsx7(event_0){const{onEndDragWorklet}=this.__closure;var _onEndDragWorklet;(_onEndDragWorklet=onEndDragWorklet)===null||_onEndDragWorklet===void 0||_onEndDragWorklet(event_0);}" };
let closure_16 = { code: "function SegmentedControlPagesNativeTsx8(t5){const{scrollTarget,roundIfClose,runOnJS,refreshScrollOffset,resolvePageIndex}=this.__closure;const{contentOffset:contentOffset_0,contentSize:contentSize_0}=t5;if(scrollTarget.get()!==-1){const hasReachedTarget=roundIfClose(contentOffset_0.x-scrollTarget.get(),0.0001)===0;if(hasReachedTarget){scrollTarget.set(-1);}else{const page=scrollTarget.get();runOnJS(refreshScrollOffset)(page);}}resolvePageIndex(contentOffset_0,contentSize_0);}" };
let closure_17 = { code: "function SegmentedControlPagesNativeTsx9(event_1){const{lastScrollOffsetX,onScrollWorklet,itemCount,pageWidth,activeIndex,runOnJS,refreshScrollOffset,scrollOverflow,scrollTarget,roundIfClose,resolvePageIndex}=this.__closure;var _onScrollWorklet;const{contentOffset:contentOffset_1,contentSize:contentSize_1}=event_1;if(contentSize_1.width===0){return;}if(lastScrollOffsetX.get()===contentOffset_1.x){return;}lastScrollOffsetX.set(contentOffset_1.x);(_onScrollWorklet=onScrollWorklet)===null||_onScrollWorklet===void 0||_onScrollWorklet(event_1);const expectedContentSize=itemCount*pageWidth;if(Math.round(expectedContentSize)%Math.round(contentSize_1.width)!==0){const page_0=activeIndex.get()*pageWidth;runOnJS(refreshScrollOffset)(page_0);return;}if(contentOffset_1.x<0){scrollOverflow.set(contentOffset_1.x);}else{if(contentOffset_1.x>contentSize_1.width-pageWidth){scrollOverflow.set(contentOffset_1.x-(contentSize_1.width-pageWidth));}else{scrollOverflow.set(0);}}if(scrollTarget.get()!==-1){const hasReachedTarget_0=roundIfClose(contentOffset_1.x-scrollTarget.get(),0.0001)===0;if(hasReachedTarget_0){scrollTarget.set(-1);}else{return;}}resolvePageIndex(contentOffset_1,contentSize_1);}" };
let __initData3 = { code: "function SegmentedControlPagesNativeTsx10(){const{scrollTarget,roundIfClose,pageWidth}=this.__closure;if(scrollTarget.get()===-1){return-1;}return roundIfClose(scrollTarget.get()/pageWidth,0.0001);}" };
let closure_19 = { code: "function SegmentedControlPagesNativeTsx11(){const{pageIndex,scrollTargetPageIndex}=this.__closure;const idx=pageIndex.get();let lo=Math.floor(idx);let hi=Math.ceil(idx);const target=scrollTargetPageIndex.get();if(target!==-1){lo=Math.min(lo,target);hi=Math.max(hi,target);}return[lo,hi];}" };
let style = { code: "function SegmentedControlPagesNativeTsx12(range,prev){const{visiblePageRange}=this.__closure;if(prev==null||prev[0]!==range[0]||prev[1]!==range[1]){visiblePageRange.set(range);}}" };
__initData = { code: "function SegmentedControlPagesNativeTsx13(){const{activeIndex}=this.__closure;return activeIndex.get();}" };
__initData = { code: "function SegmentedControlPagesNativeTsx14(value_0){const{runOnJS,updateCurrentActiveIndex}=this.__closure;runOnJS(updateCurrentActiveIndex)(value_0);}" };
let scrollTargetPageIndex = { code: "function SegmentedControlPagesNativeTsx15(){const{pageIndex}=this.__closure;return pageIndex.get();}" };
const __initData4 = { code: "function SegmentedControlPagesNativeTsx16(value_1){const{activeIndex}=this.__closure;activeIndex.set(value_1);}" };
const __initData5 = { code: "function SegmentedControlPagesNativeTsx17(contentOffset,contentSize){const{pageWidth,pageIndex,roundIfClose,reportedPageIndex,runOnJS,onPageChanged}=this.__closure;if(pageWidth===0){return;}pageIndex.set(Math.min(Math.max(roundIfClose(contentOffset.x/pageWidth,1e-4),0),roundIfClose(contentSize.width/pageWidth,1e-4)-1));const pageFullyVisible=pageIndex.get()%1===0;if(pageFullyVisible&&reportedPageIndex.get()!==pageIndex.get()){reportedPageIndex.set(pageIndex.get());runOnJS(onPageChanged)(pageIndex.get());}}" };
const __initData6 = { code: "function SegmentedControlPagesNativeTsx18(event){const{scrollTarget,onBeginDragWorklet}=this.__closure;var _onBeginDragWorklet;scrollTarget.set(-1);(_onBeginDragWorklet=onBeginDragWorklet)===null||_onBeginDragWorklet===void 0||_onBeginDragWorklet(event);}" };
const __initData7 = { code: "function SegmentedControlPagesNativeTsx19(event_0){const{onEndDragWorklet}=this.__closure;var _onEndDragWorklet;(_onEndDragWorklet=onEndDragWorklet)===null||_onEndDragWorklet===void 0||_onEndDragWorklet(event_0);}" };
const __initData8 = { code: "function SegmentedControlPagesNativeTsx20({contentOffset:contentOffset_0,contentSize:contentSize_0}){const{scrollTarget,roundIfClose,runOnJS,refreshScrollOffset,resolvePageIndex}=this.__closure;if(scrollTarget.get()!==-1){const hasReachedTarget=roundIfClose(contentOffset_0.x-scrollTarget.get(),1e-4)===0;if(hasReachedTarget){scrollTarget.set(-1);}else{const page=scrollTarget.get();runOnJS(refreshScrollOffset)(page);}}resolvePageIndex(contentOffset_0,contentSize_0);}" };
const __initData9 = { code: "function SegmentedControlPagesNativeTsx21(event_1){const{lastScrollOffsetX,onScrollWorklet,itemCount,pageWidth,activeIndex,runOnJS,refreshScrollOffset,scrollOverflow,scrollTarget,roundIfClose,resolvePageIndex}=this.__closure;var _onScrollWorklet;const{contentOffset:contentOffset_1,contentSize:contentSize_1}=event_1;if(contentSize_1.width===0){return;}if(lastScrollOffsetX.get()===contentOffset_1.x){return;}lastScrollOffsetX.set(contentOffset_1.x);(_onScrollWorklet=onScrollWorklet)===null||_onScrollWorklet===void 0||_onScrollWorklet(event_1);const expectedContentSize=itemCount*pageWidth;if(Math.round(expectedContentSize)%Math.round(contentSize_1.width)!==0){const page_0=activeIndex.get()*pageWidth;runOnJS(refreshScrollOffset)(page_0);return;}if(contentOffset_1.x<0){scrollOverflow.set(contentOffset_1.x);}else if(contentOffset_1.x>contentSize_1.width-pageWidth){scrollOverflow.set(contentOffset_1.x-(contentSize_1.width-pageWidth));}else{scrollOverflow.set(0);}if(scrollTarget.get()!==-1){const hasReachedTarget_0=roundIfClose(contentOffset_1.x-scrollTarget.get(),1e-4)===0;if(hasReachedTarget_0){scrollTarget.set(-1);}else{return;}}resolvePageIndex(contentOffset_1,contentSize_1);}" };
const __initData10 = { code: "function SegmentedControlPagesNativeTsx22(){const{scrollTarget,roundIfClose,pageWidth}=this.__closure;if(scrollTarget.get()===-1){return-1;}return roundIfClose(scrollTarget.get()/pageWidth,1e-4);}" };
const __initData11 = { code: "function SegmentedControlPagesNativeTsx23(){const{pageIndex,scrollTargetPageIndex}=this.__closure;const idx=pageIndex.get();let lo=Math.floor(idx);let hi=Math.ceil(idx);const target=scrollTargetPageIndex.get();if(target!==-1){lo=Math.min(lo,target);hi=Math.max(hi,target);}return[lo,hi];}" };
const __initData12 = { code: "function SegmentedControlPagesNativeTsx24(range,prev){const{visiblePageRange}=this.__closure;if(prev==null||prev[0]!==range[0]||prev[1]!==range[1]){visiblePageRange.set(range);}}" };
let ReactCompilerGating = ReactCompilerGating_mod;
const __initData13 = { code: "function SegmentedControlPagesNativeTsx25(){const{pageIndex,index,scrollTargetPageIndex}=this.__closure;if(Math.floor(pageIndex.get())===index||Math.ceil(pageIndex.get())===index){return true;}if(scrollTargetPageIndex.get()===index){return true;}return false;}" };
const __initData14 = { code: "function SegmentedControlPagesNativeTsx26(){const{reportedPageIndex,index}=this.__closure;const isHidden=reportedPageIndex.get()!==index;return{pointerEvents:isHidden?\"none\":\"box-none\"};}" };
const __initData15 = { code: "function SegmentedControlPagesNativeTsx27(){const{reportedPageIndex,index}=this.__closure;return reportedPageIndex.get()!==index;}" };
const __initData16 = { code: "function SegmentedControlPagesNativeTsx28(hidden){const{runOnJS,setIsAccessibilityHidden}=this.__closure;runOnJS(setIsAccessibilityHidden)(hidden);}" };
const __initData17 = { code: "function SegmentedControlPagesNativeTsx29(){const{isVisibleOnScreen}=this.__closure;return{display:isVisibleOnScreen.get()?\"flex\":\"none\",flex:1};}" };
let closure_38 = { code: "function SegmentedControlPagesNativeTsx30(){const{activePageRangeStart,activePageRangeEnd}=this.__closure;return[activePageRangeStart.get(),activePageRangeEnd.get()];}" };
let closure_39 = { code: "function SegmentedControlPagesNativeTsx31(t5){const{index,runOnJS,setFreeze}=this.__closure;const[start,end]=t5;const isInActiveRange_0=index>=start&&index<=end;runOnJS(setFreeze)(!isInActiveRange_0);}" };
const __initData18 = { code: "function SegmentedControlPagesNativeTsx32(){const{pageIndex,index,scrollTargetPageIndex}=this.__closure;if(Math.floor(pageIndex.get())===index||Math.ceil(pageIndex.get())===index){return true;}if(scrollTargetPageIndex.get()===index){return true;}return false;}" };
const __initData19 = { code: "function SegmentedControlPagesNativeTsx33(){const{reportedPageIndex,index}=this.__closure;const isHidden=reportedPageIndex.get()!==index;return{pointerEvents:isHidden?'none':'box-none'};}" };
const __initData20 = { code: "function SegmentedControlPagesNativeTsx34(){const{reportedPageIndex,index}=this.__closure;return reportedPageIndex.get()!==index;}" };
const __initData21 = { code: "function SegmentedControlPagesNativeTsx35(hidden){const{runOnJS,setIsAccessibilityHidden}=this.__closure;runOnJS(setIsAccessibilityHidden)(hidden);}" };
const __initData22 = { code: "function SegmentedControlPagesNativeTsx36(){const{isVisibleOnScreen}=this.__closure;return{display:isVisibleOnScreen.get()?'flex':'none',flex:1};}" };
const __initData23 = { code: "function SegmentedControlPagesNativeTsx37(){const{activePageRangeStart,activePageRangeEnd}=this.__closure;return[activePageRangeStart.get(),activePageRangeEnd.get()];}" };
const __initData24 = { code: "function SegmentedControlPagesNativeTsx38([start,end]){const{index,runOnJS,setFreeze}=this.__closure;const isInActiveRange_0=index>=start&&index<=end;runOnJS(setFreeze)(!isInActiveRange_0);}" };
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((onEndDragWorklet) => {
  let activeIndex;
  let ae;
  let bounces;
  let closure_18;
  let ie;
  let items;
  let le;
  let nativeGesture;
  let num39;
  let oe;
  let onBeginDragWorklet;
  let onScrollWorklet;
  let pageWidth;
  let ref2;
  let state;
  let tmp7;
  const tmp2 = onScrollWorklet;
  let obj = onBeginDragWorklet(onScrollWorklet[7]);
  const cResult = obj.c(44);
  ({ state, style, bounces, nativeGesture, onBeginDragWorklet } = onEndDragWorklet);
  onEndDragWorklet = onEndDragWorklet.onEndDragWorklet;
  onScrollWorklet = onEndDragWorklet.onScrollWorklet;
  ({ items, activeIndex } = state);
  const visiblePageRange = state.visiblePageRange;
  const pagerRef = state.pagerRef;
  const scrollTarget = state.scrollTarget;
  const scrollOverflow = state.scrollOverflow;
  ({ onPageChangeRef: closure_8, pageWidth } = state);
  const pressedIndex = state.pressedIndex;
  let obj2 = onBeginDragWorklet(onScrollWorklet[5]);
  const sharedValue = obj2.useSharedValue(activeIndex.get());
  let obj3 = onBeginDragWorklet(onScrollWorklet[5]);
  const sharedValue1 = obj3.useSharedValue(activeIndex.get());
  const length = items.length;
  let obj4 = onBeginDragWorklet(onScrollWorklet[5]);
  const sharedValue2 = obj4.useSharedValue(undefined);
  __initData = scrollTarget.useRef(false);
  if (cResult[0] !== activeIndex) {
    let value = activeIndex.get();
    let num = 0;
    cResult[0] = activeIndex;
    cResult[1] = value;
    tmp7 = value;
  } else {
    tmp7 = cResult[1];
  }
  __initData2 = obj5.useRef(tmp7);
  function updateCurrentActiveIndex(current) {
    ref2.current = current;
  }
  let tmpResult = onBeginDragWorklet(tmp2[5]);
  class L {
    constructor() {
      return activeIndex.get();
    }
  }
  L.__closure = { activeIndex };
  L.__workletHash = 4275537317596;
  L.__initData = pageWidth;
  class K {
    constructor(arg0) {
      const obj = ReanimatedRexport2;
      obj.runOnJS(updateCurrentActiveIndex)(arg0);
    }
  }
  K.__closure = { runOnJS: onBeginDragWorklet(tmp2[5]).runOnJS, updateCurrentActiveIndex };
  K.__workletHash = 9797123893952;
  K.__initData = sharedValue;
  ({ runOnJS: onBeginDragWorklet(tmp2[5]).runOnJS, updateCurrentActiveIndex });
  const animatedReaction = tmpResult.useAnimatedReaction(L, K);
  const tmpResult6 = onBeginDragWorklet(tmp2[5]);
  class U {
    constructor() {
      return sharedValue.get();
    }
  }
  U.__closure = { pageIndex: sharedValue };
  U.__workletHash = 3363652844798;
  U.__initData = sharedValue1;
  class Q {
    constructor(arg0) {
      const result = activeIndex.set(arg0);
    }
  }
  Q.__closure = { activeIndex };
  Q.__workletHash = 2303988655079;
  Q.__initData = length;
  const animatedReaction1 = tmpResult6.useAnimatedReaction(U, Q);
  function onPageChanged(AUTO_DISMISS) {
    if (ref != null) {
      current = ref.current;
      if (current != null) {
        current(AUTO_DISMISS);
      }
    }
  }
  if (cResult[2] === pagerRef) {
    let tmp11;
    if (cResult[3] === scrollTarget) {
      tmp11 = cResult[4];
    }
    __initData3 = tmp11;
    if (cResult[5] === pageWidth) {
      let tmp12;
      let tmp13;
      let tmp23;
      let tmp26;
      if (cResult[6] === tmp11) {
        tmp12 = cResult[7];
        tmp13 = cResult[8];
      }
      const effect = obj5.useEffect(tmp12, tmp13);
      function re(arg0, width) {
        if (0 !== pageWidth) {
          const _Math = Math;
          const _Math2 = Math;
          set = sharedValue.set;
          const obj3 = MathUtils;
          const maxResult = max(obj3.roundIfClose(arg0.x / pageWidth, 0.0001), 0);
          const obj4 = MathUtils;
          const result = set(min(maxResult, obj4.roundIfClose(width.width / pageWidth, 0.0001) - 1));
          const result1 = sharedValue.get() % 1;
          let tmp4 = result1 === 0;
          if (result1 === 0) {
            const value = sharedValue1.get();
            tmp4 = value !== sharedValue.get();
          }
          if (tmp4) {
            const result2 = sharedValue1.set(sharedValue.get());
            const tmp13Result = ReanimatedRexport2;
            const runOnJSResult = tmp13Result.runOnJS(onPageChanged);
            runOnJSResult(sharedValue.get());
          }
        }
      }
      re.__closure = { pageWidth, pageIndex: sharedValue, roundIfClose: onBeginDragWorklet(tmp2[8]).roundIfClose, reportedPageIndex: sharedValue1, runOnJS: onBeginDragWorklet(tmp2[5]).runOnJS, onPageChanged };
      re.__workletHash = 7601802094880;
      re.__initData = sharedValue2;
      const obj8 = { onBeginDrag: le, onEndDrag: ie, onMomentumEnd: oe, onScroll: ae };
      le = function le(arg0) {
        const result = scrollTarget.set(-1);
        if (onBeginDragWorklet != null) {
          tmp2(arg0);
        }
      };
      const obj9 = { scrollTarget, onBeginDragWorklet };
      le.__closure = obj9;
      le.__workletHash = 3327779393906;
      le.__initData = __initData;
      ie = function ie(arg0) {
        if (onEndDragWorklet != null) {
          tmp(arg0);
        }
      };
      const obj10 = { onEndDragWorklet };
      ie.__closure = obj10;
      ie.__workletHash = 3007879580981;
      ie.__initData = __initData2;
      oe = function oe(contentOffset) {
        contentOffset = contentOffset.contentOffset;
        const contentSize = contentOffset.contentSize;
        if (-1 !== scrollTarget.get()) {
          const obj2 = MathUtils;
          if (0 === obj2.roundIfClose(contentOffset.x - scrollTarget.get(), 0.0001)) {
            const result = scrollTarget.set(-1);
          } else {
            const value = scrollTarget.get();
            const tmpResult = ReanimatedRexport2;
            tmpResult.runOnJS(closure_18)(value);
          }
        }
        re(contentOffset, contentSize);
      };
      const obj7 = { pageWidth, pageIndex: sharedValue, roundIfClose: onBeginDragWorklet(tmp2[8]).roundIfClose, reportedPageIndex: sharedValue1, runOnJS: onBeginDragWorklet(tmp2[5]).runOnJS, onPageChanged };
      const obj11 = { scrollTarget, roundIfClose: onBeginDragWorklet(tmp2[8]).roundIfClose, runOnJS: onBeginDragWorklet(tmp2[5]).runOnJS, refreshScrollOffset: tmp11, resolvePageIndex: re };
      oe.__closure = obj11;
      oe.__workletHash = 2536156100149;
      oe.__initData = updateCurrentActiveIndex;
      ae = function ae(arg0) {
        let contentOffset;
        let contentSize;
        ({ contentOffset, contentSize } = arg0);
        if (0 !== contentSize.width) {
          if (sharedValue2.get() !== contentOffset.x) {
            const result = sharedValue2.set(contentOffset.x);
            if (onScrollWorklet != null) {
              tmp24(arg0);
            }
            const _Math = Math;
            const _Math2 = Math;
            const rounded = Math.round(length * pageWidth);
            if (rounded % Math.round(contentSize.width) == 0) {
              if (contentOffset.x < 0) {
                const result1 = scrollOverflow.set(contentOffset.x);
              } else if (contentOffset.x > contentSize.width - pageWidth) {
                const result2 = scrollOverflow.set(contentOffset.x - (contentSize.width - pageWidth));
              } else {
                const result3 = scrollOverflow.set(0);
              }
              if (-1 !== scrollTarget.get()) {
                const obj3 = MathUtils;
                if (0 === obj3.roundIfClose(contentOffset.x - scrollTarget.get(), 0.0001)) {
                  const result4 = scrollTarget.set(-1);
                }
              }
              re(contentOffset, contentSize);
            } else {
              const result5 = activeIndex.get() * pageWidth;
              const obj = ReanimatedRexport2;
              obj.runOnJS(closure_18)(result5);
            }
          }
        }
      };
      const useAnimatedScrollHandler = onBeginDragWorklet(tmp2[5]).useAnimatedScrollHandler;
      const obj12 = { lastScrollOffsetX: null, onScrollWorklet, itemCount: length, pageWidth, activeIndex, runOnJS: onBeginDragWorklet(tmp2[5]).runOnJS, refreshScrollOffset: tmp11, scrollOverflow, scrollTarget: null, roundIfClose: onBeginDragWorklet(tmp2[8]).roundIfClose, resolvePageIndex: re };
      class L {
        constructor() {
          return activeIndex.get();
        }
      }
      class K {
        constructor(arg0) {
          const obj = ReanimatedRexport2;
          obj.runOnJS(updateCurrentActiveIndex)(arg0);
        }
      }
      ae.__closure = obj12;
      ae.__workletHash = 9770585444979;
      ae.__initData = onPageChanged;
      const animatedScrollHandler = useAnimatedScrollHandler(obj8);
      if (cResult[9] !== pageWidth) {
        const obj13 = { flex: 1, width: pageWidth };
        cResult[9] = pageWidth;
        cResult[10] = obj13;
        tmp23 = obj13;
      } else {
        tmp23 = cResult[10];
      }
      style = tmp23;
      class U {
        constructor() {
          return sharedValue.get();
        }
      }
      let result = tmp24 * pageWidth;
      if (cResult[13] !== result) {
        const point = { x: result, y: 0 };
        cResult[13] = result;
        cResult[14] = point;
        tmp26 = point;
      } else {
        tmp26 = cResult[14];
      }
      const tmp29 = pagerRef(closure_54(activeIndex, pressedIndex), 2);
      const first = tmp29[0];
      class Q {
        constructor(arg0) {
          const result = activeIndex.set(arg0);
        }
      }
      activePageRangeEnd = tmp31;
      function he() {
        let num = -1;
        if (-1 !== scrollTarget.get()) {
          const obj2 = MathUtils;
          num = obj2.roundIfClose(scrollTarget.get() / pageWidth, 0.0001);
        }
        return num;
      }
      const obj14 = { scrollTarget, roundIfClose: onBeginDragWorklet(tmp2[8]).roundIfClose, pageWidth };
      const useDerivedValue = onBeginDragWorklet(tmp2[5]).useDerivedValue;
      onBeginDragWorklet(tmp2[5]);
      he.__closure = obj14;
      class Z {
        constructor(x) {
          const result = scrollTarget.set(x);
          if (pagerRef != null) {
            current = pagerRef.current;
            if (current != null) {
              const obj = { x, animated: false };
              current.scrollTo(obj);
            }
          }
        }
      }
      he.__initData = __initData3;
      const derivedValue = useDerivedValue(he);
      const tmpResult9 = onBeginDragWorklet(tmp2[5]);
      class Ie {
        constructor() {
          const value = sharedValue.get();
          const rounded = Math.floor(value);
          const rounded1 = Math.ceil(value);
          const value2 = derivedValue.get();
          let bound1 = rounded1;
          let bound = rounded;
          if (-1 !== value2) {
            const _Math = Math;
            bound = Math.min(rounded, value2);
            const _Math2 = Math;
            bound1 = Math.max(rounded1, value2);
          }
          const items = [bound, bound1];
          return items;
        }
      }
      const obj15 = { pageIndex: sharedValue, scrollTargetPageIndex: derivedValue };
      Ie.__closure = obj15;
      Ie.__workletHash = 9125733538935;
      Ie.__initData = re;
      function ve(arg0, arg1) {
        const tmp = null != arg1 && arg1[0] === arg0[0] && arg1[1] === arg0[1];
        if (!tmp) {
          const result = visiblePageRange.set(arg0);
        }
      }
      const obj16 = { visiblePageRange };
      ve.__closure = obj16;
      ve.__workletHash = 14106897948399;
      ve.__initData = style;
      const animatedReaction2 = tmpResult9.useAnimatedReaction(Ie, ve);
      if (0 === pageWidth) {
        return null;
      } else {
        if (cResult[15] === tmp23) {
          let tmp38;
          let tmp39;
          if (cResult[16] === style) {
            tmp38 = cResult[17];
          }
          if (cResult[18] === tmp29[1]) {
            if (cResult[19] === first) {
              if (cResult[20] === tmp23) {
                if (cResult[21] === items) {
                  if (cResult[22] === sharedValue) {
                    if (cResult[23] === sharedValue1) {
                      if (cResult[24] === derivedValue) {
                        tmp39 = cResult[25];
                      }
                      if (cResult[33] === bounces) {
                        if (cResult[34] === tmp26) {
                          if (cResult[35] === animatedScrollHandler) {
                            if (cResult[36] === pageWidth) {
                              if (cResult[37] === pagerRef) {
                                if (cResult[38] === tmp38) {
                                  let tmp42;
                                  let tmp48;
                                  if (cResult[39] === tmp39) {
                                    tmp42 = cResult[40];
                                  }
                                  if (cResult[41] === nativeGesture) {
                                    let tmp46;
                                    if (cResult[42] === tmp42) {
                                      tmp46 = cResult[43];
                                    }
                                    return tmp46;
                                  }
                                  class Pe {
                                    constructor(item, index) {
                                      return <closure_47 key={index} index={index} activePageRangeStart={activePageRangeStart} activePageRangeEnd={activePageRangeEnd} reportedPageIndex={sharedValue1} pageIndex={sharedValue} scrollTargetPageIndex={derivedValue} style={style} item={item} />;
                                    }
                                  }
                                  if (null != nativeGesture) {
                                    const obj17 = { gesture: nativeGesture, children: null };
                                    class Pe {
                                      constructor(item, index) {
                                        return <closure_47 key={index} index={index} activePageRangeStart={activePageRangeStart} activePageRangeEnd={activePageRangeEnd} reportedPageIndex={sharedValue1} pageIndex={sharedValue} scrollTargetPageIndex={derivedValue} style={style} item={item} />;
                                      }
                                    }
                                    tmp48 = scrollOverflow(onBeginDragWorklet(tmp2[10]).GestureDetector, obj17);
                                  }
                                  cResult[41] = nativeGesture;
                                  cResult[42] = tmp42;
                                  cResult[43] = tmp48;
                                  tmp46 = tmp48;
                                }
                              }
                            }
                          }
                        }
                      }
                      const obj18 = { ref: null, style: tmp38, contentOffset: tmp26, keyboardShouldPersistTaps: "handled", showsHorizontalScrollIndicator: false, pagingEnabled: true, snapToInterval: pageWidth, snapToAlignment: "center", decelerationRate: "fast", centerContent: true, bounces, horizontal: true, accessibilityRole: "none", onScroll: animatedScrollHandler, disableIntervalMomentum: true, scrollEventThrottle: num39, children: tmp39 };
                      class Pe {
                        constructor(item, index) {
                          return <closure_47 key={index} index={index} activePageRangeStart={activePageRangeStart} activePageRangeEnd={activePageRangeEnd} reportedPageIndex={sharedValue1} pageIndex={sharedValue} scrollTargetPageIndex={derivedValue} style={style} item={item} />;
                        }
                      }
                      num39 = undefined;
                      const tmp43 = scrollOverflow;
                      const tmpResult10 = onBeginDragWorklet(tmp2[9]);
                      if (tmpResult10.isIOS()) {
                        num39 = 32;
                      }
                      const tmp43Result = tmp43(ref, obj18);
                      cResult[33] = bounces;
                      cResult[34] = tmp26;
                      cResult[35] = animatedScrollHandler;
                      cResult[36] = pageWidth;
                      cResult[37] = pagerRef;
                      cResult[38] = tmp38;
                      cResult[39] = tmp39;
                      cResult[40] = tmp43Result;
                      tmp42 = tmp43Result;
                    }
                  }
                }
              }
            }
          }
          if (cResult[26] === tmp29[1]) {
            if (cResult[27] === first) {
              if (cResult[28] === tmp23) {
                if (cResult[29] === sharedValue) {
                  if (cResult[30] === sharedValue1) {
                    let tmp40;
                    if (cResult[31] === derivedValue) {
                      tmp40 = cResult[32];
                    }
                    const mapped = items.map(tmp40);
                    class Pe {
                      constructor(item, index) {
                        return <closure_47 key={index} index={index} activePageRangeStart={activePageRangeStart} activePageRangeEnd={activePageRangeEnd} reportedPageIndex={sharedValue1} pageIndex={sharedValue} scrollTargetPageIndex={derivedValue} style={style} item={item} />;
                      }
                    }
                    cResult[19] = first;
                    cResult[20] = tmp23;
                    cResult[21] = items;
                    cResult[22] = sharedValue;
                    cResult[23] = sharedValue1;
                    cResult[24] = derivedValue;
                    cResult[25] = mapped;
                    tmp39 = mapped;
                  }
                }
              }
            }
          }
          class Pe {
            constructor(item, index) {
              return <closure_47 key={index} index={index} activePageRangeStart={activePageRangeStart} activePageRangeEnd={activePageRangeEnd} reportedPageIndex={sharedValue1} pageIndex={sharedValue} scrollTargetPageIndex={derivedValue} style={style} item={item} />;
            }
          }
          cResult[26] = tmp29[1];
          cResult[27] = first;
          cResult[28] = tmp23;
          cResult[29] = sharedValue;
          cResult[30] = sharedValue1;
          cResult[31] = derivedValue;
          cResult[32] = Pe;
          tmp40 = Pe;
        }
        const items1 = [tmp23, ];
        cResult[15] = tmp23;
        cResult[16] = style;
        cResult[17] = items1;
        tmp38 = items1;
      }
    }
    const items2 = [pageWidth, tmp11];
    cResult[5] = pageWidth;
    cResult[6] = tmp11;
    cResult[7] = tmp14;
    cResult[8] = items2;
    tmp13 = items2;
    tmp12 = tmp14;
  }
  class Z {
    constructor(x) {
      const result = scrollTarget.set(x);
      if (pagerRef != null) {
        current = pagerRef.current;
        if (current != null) {
          const obj = { x, animated: false };
          current.scrollTo(obj);
        }
      }
    }
  }
  cResult[2] = pagerRef;
  cResult[3] = scrollTarget;
  tmp11 = Z;
}) : ((onEndDragWorklet) => {
  let activeIndex;
  let bounces;
  let c21;
  let c22;
  let ee;
  let items;
  let items7;
  let nativeGesture;
  let ne;
  let num;
  let onBeginDragWorklet;
  let re;
  let state;
  let te;
  ({ state, nativeGesture, onBeginDragWorklet } = onEndDragWorklet);
  onEndDragWorklet = onEndDragWorklet.onEndDragWorklet;
  const onScrollWorklet = onEndDragWorklet.onScrollWorklet;
  activeIndex = undefined;
  let callback1;
  let callback2;
  let callback3;
  let memo;
  __initData = undefined;
  let derivedValue;
  ({ items, activeIndex } = state);
  const visiblePageRange = state.visiblePageRange;
  const pagerRef = state.pagerRef;
  const scrollTarget = state.scrollTarget;
  const scrollOverflow = state.scrollOverflow;
  const onPageChangeRef = state.onPageChangeRef;
  const pageWidth = state.pageWidth;
  let tmp = onBeginDragWorklet;
  const tmp2 = onScrollWorklet;
  ({ style, bounces } = onEndDragWorklet);
  const pressedIndex = state.pressedIndex;
  let obj = onBeginDragWorklet(onScrollWorklet[5]);
  const sharedValue = obj.useSharedValue(activeIndex.get());
  let obj2 = onBeginDragWorklet(onScrollWorklet[5]);
  const sharedValue1 = obj2.useSharedValue(activeIndex.get());
  const length = items.length;
  let obj3 = onBeginDragWorklet(onScrollWorklet[5]);
  const sharedValue2 = obj3.useSharedValue(undefined);
  ref = scrollTarget.useRef(false);
  const ref2 = scrollTarget.useRef(activeIndex.get());
  const updateCurrentActiveIndex = scrollTarget.useCallback((current) => {
    ref2.current = current;
  }, []);
  let obj4 = onBeginDragWorklet(onScrollWorklet[5]);
  class I {
    constructor() {
      return activeIndex.get();
    }
  }
  I.__closure = { activeIndex };
  I.__workletHash = 1395514015727;
  I.__initData = __initData;
  const fn = function v(arg0) {
    const obj = ReanimatedRexport2;
    obj.runOnJS(callback)(arg0);
  };
  fn.__closure = { runOnJS: onBeginDragWorklet(onScrollWorklet[5]).runOnJS, updateCurrentActiveIndex };
  fn.__workletHash = 12907997375351;
  fn.__initData = __initData;
  ({ runOnJS: onBeginDragWorklet(onScrollWorklet[5]).runOnJS, updateCurrentActiveIndex });
  const animatedReaction = obj4.useAnimatedReaction(I, fn);
  const fn2 = function p() {
    return sharedValue.get();
  };
  fn2.__closure = { pageIndex: sharedValue };
  fn2.__workletHash = 10499929423113;
  fn2.__initData = derivedValue;
  const obj6 = onBeginDragWorklet(onScrollWorklet[5]);
  class S {
    constructor(arg0) {
      const result = activeIndex.set(arg0);
    }
  }
  S.__closure = { activeIndex };
  S.__workletHash = 4431632836916;
  S.__initData = __initData4;
  const animatedReaction1 = obj6.useAnimatedReaction(fn2, S);
  const items1 = [onPageChangeRef];
  callback1 = scrollTarget.useCallback((AUTO_DISMISS) => {
    if (onPageChangeRef != null) {
      current = onPageChangeRef.current;
      if (current != null) {
        current(AUTO_DISMISS);
      }
    }
  }, items1);
  const items2 = [pagerRef, scrollTarget];
  callback2 = scrollTarget.useCallback((x) => {
    const result = scrollTarget.set(x);
    if (pagerRef != null) {
      current = pagerRef.current;
      if (current != null) {
        const obj = { x, animated: false };
        current.scrollTo(obj);
      }
    }
  }, items2);
  const items3 = [pageWidth, callback2];
  const effect = scrollTarget.useEffect(() => {
    if (pageWidth > 0) {
      if (!ref.current) {
        tmp2.current = true;
        if (ref2.current > 0) {
          callback2(ref2.current * tmp);
        }
      }
    }
  }, items3);
  class Z {
    constructor(arg0, width) {
      if (0 !== pageWidth) {
        const _Math = Math;
        const _Math2 = Math;
        set = sharedValue.set;
        const obj3 = MathUtils;
        const maxResult = max(obj3.roundIfClose(arg0.x / pageWidth, 0.0001), 0);
        const obj4 = MathUtils;
        const result = set(min(maxResult, obj4.roundIfClose(width.width / pageWidth, 0.0001) - 1));
        const result1 = sharedValue.get() % 1;
        let tmp4 = result1 === 0;
        if (result1 === 0) {
          const value = sharedValue1.get();
          tmp4 = value !== sharedValue.get();
        }
        if (tmp4) {
          const result2 = sharedValue1.set(sharedValue.get());
          const tmp13Result = ReanimatedRexport2;
          const runOnJSResult = tmp13Result.runOnJS(callback1);
          runOnJSResult(sharedValue.get());
        }
      }
    }
  }
  Z.__closure = { pageWidth, pageIndex: sharedValue, roundIfClose: onBeginDragWorklet(onScrollWorklet[8]).roundIfClose, reportedPageIndex: sharedValue1, runOnJS: onBeginDragWorklet(onScrollWorklet[5]).runOnJS, onPageChanged: callback1 };
  Z.__workletHash = 8342205089427;
  Z.__initData = __initData5;
  const items4 = [callback1, sharedValue, pageWidth, sharedValue1];
  ({ pageWidth, pageIndex: sharedValue, roundIfClose: onBeginDragWorklet(onScrollWorklet[8]).roundIfClose, reportedPageIndex: sharedValue1, runOnJS: onBeginDragWorklet(onScrollWorklet[5]).runOnJS, onPageChanged: callback1 });
  callback3 = scrollTarget.useCallback(Z, items4);
  const obj8 = { onBeginDrag: re, onEndDrag: ne, onMomentumEnd: te, onScroll: ee };
  re = function re(arg0) {
    const result = scrollTarget.set(-1);
    if (onBeginDragWorklet != null) {
      tmp2(arg0);
    }
  };
  re.__closure = { scrollTarget, onBeginDragWorklet };
  re.__workletHash = 13774066389517;
  re.__initData = __initData6;
  ne = function ne(arg0) {
    if (onEndDragWorklet != null) {
      tmp(arg0);
    }
  };
  ne.__closure = { onEndDragWorklet };
  ne.__workletHash = 1247100135210;
  ne.__initData = __initData7;
  te = function te(contentOffset) {
    contentOffset = contentOffset.contentOffset;
    const contentSize = contentOffset.contentSize;
    if (-1 !== scrollTarget.get()) {
      const obj2 = MathUtils;
      if (0 === obj2.roundIfClose(contentOffset.x - scrollTarget.get(), 0.0001)) {
        const result = scrollTarget.set(-1);
      } else {
        const value = scrollTarget.get();
        const tmpResult = ReanimatedRexport2;
        tmpResult.runOnJS(callback2)(value);
      }
    }
    callback3(contentOffset, contentSize);
  };
  const useAnimatedScrollHandler = onBeginDragWorklet(onScrollWorklet[5]).useAnimatedScrollHandler;
  te.__closure = { scrollTarget, roundIfClose: onBeginDragWorklet(onScrollWorklet[8]).roundIfClose, runOnJS: onBeginDragWorklet(onScrollWorklet[5]).runOnJS, refreshScrollOffset: callback2, resolvePageIndex: callback3 };
  te.__workletHash = 7952328022238;
  te.__initData = __initData8;
  ee = function ee(arg0) {
    let contentOffset;
    let contentSize;
    ({ contentOffset, contentSize } = arg0);
    if (0 !== contentSize.width) {
      if (sharedValue2.get() !== contentOffset.x) {
        const result = sharedValue2.set(contentOffset.x);
        if (onScrollWorklet != null) {
          tmp24(arg0);
        }
        const _Math = Math;
        const _Math2 = Math;
        const rounded = Math.round(length * pageWidth);
        if (rounded % Math.round(contentSize.width) == 0) {
          if (contentOffset.x < 0) {
            const result1 = scrollOverflow.set(contentOffset.x);
          } else if (contentOffset.x > contentSize.width - pageWidth) {
            const result2 = scrollOverflow.set(contentOffset.x - (contentSize.width - pageWidth));
          } else {
            const result3 = scrollOverflow.set(0);
          }
          if (-1 !== scrollTarget.get()) {
            const obj3 = MathUtils;
            if (0 === obj3.roundIfClose(contentOffset.x - scrollTarget.get(), 0.0001)) {
              const result4 = scrollTarget.set(-1);
            }
          }
          callback3(contentOffset, contentSize);
        } else {
          const result5 = activeIndex.get() * pageWidth;
          const obj = ReanimatedRexport2;
          obj.runOnJS(callback2)(result5);
        }
      }
    }
  };
  ({ scrollTarget, roundIfClose: onBeginDragWorklet(onScrollWorklet[8]).roundIfClose, runOnJS: onBeginDragWorklet(onScrollWorklet[5]).runOnJS, refreshScrollOffset: callback2, resolvePageIndex: callback3 });
  ee.__closure = { lastScrollOffsetX: sharedValue2, onScrollWorklet, itemCount: length, pageWidth, activeIndex, runOnJS: onBeginDragWorklet(onScrollWorklet[5]).runOnJS, refreshScrollOffset: callback2, scrollOverflow, scrollTarget, roundIfClose: onBeginDragWorklet(onScrollWorklet[8]).roundIfClose, resolvePageIndex: callback3 };
  ee.__workletHash = 12685695320253;
  ee.__initData = __initData9;
  const items5 = [pageWidth];
  ({ lastScrollOffsetX: sharedValue2, onScrollWorklet, itemCount: length, pageWidth, activeIndex, runOnJS: onBeginDragWorklet(onScrollWorklet[5]).runOnJS, refreshScrollOffset: callback2, scrollOverflow, scrollTarget, roundIfClose: onBeginDragWorklet(onScrollWorklet[8]).roundIfClose, resolvePageIndex: callback3 });
  const animatedScrollHandler = useAnimatedScrollHandler(obj8);
  memo = scrollTarget.useMemo(() => ({ flex: 1, width: pageWidth }), items5);
  const items6 = [sharedValue, pageWidth];
  const memo1 = scrollTarget.useMemo(() => {
    let num = sharedValue.get();
    if (num == null) {
      num = 0;
    }
    const point = { x: num * pageWidth, y: 0 };
    return point;
  }, items6);
  [c21, c22] = pagerRef(closure_54(activeIndex, pressedIndex), 2);
  pagerRef(closure_54(activeIndex, pressedIndex), 2);
  function ae() {
    let num = -1;
    if (-1 !== scrollTarget.get()) {
      const obj2 = MathUtils;
      num = obj2.roundIfClose(scrollTarget.get() / pageWidth, 0.0001);
    }
    return num;
  }
  const obj11 = onBeginDragWorklet(onScrollWorklet[5]);
  ae.__closure = { scrollTarget, roundIfClose: onBeginDragWorklet(onScrollWorklet[8]).roundIfClose, pageWidth };
  ae.__workletHash = 3139503492995;
  ae.__initData = __initData10;
  ({ scrollTarget, roundIfClose: onBeginDragWorklet(onScrollWorklet[8]).roundIfClose, pageWidth });
  derivedValue = obj11.useDerivedValue(ae);
  function ie() {
    const value = sharedValue.get();
    const rounded = Math.floor(value);
    const rounded1 = Math.ceil(value);
    const value2 = derivedValue.get();
    let bound1 = rounded1;
    let bound = rounded;
    if (-1 !== value2) {
      const _Math = Math;
      bound = Math.min(rounded, value2);
      const _Math2 = Math;
      bound1 = Math.max(rounded1, value2);
    }
    const items = [bound, bound1];
    return items;
  }
  ie.__closure = { pageIndex: sharedValue, scrollTargetPageIndex: derivedValue };
  ie.__workletHash = 11592344490710;
  ie.__initData = __initData11;
  function oe(arg0, arg1) {
    const tmp = null != arg1 && arg1[0] === arg0[0] && arg1[1] === arg0[1];
    if (!tmp) {
      const result = visiblePageRange.set(arg0);
    }
  }
  oe.__closure = { visiblePageRange };
  oe.__workletHash = 11577207813194;
  oe.__initData = __initData12;
  const obj13 = onBeginDragWorklet(onScrollWorklet[5]);
  const animatedReaction2 = obj13.useAnimatedReaction(ie, oe);
  if (0 === pageWidth) {
    return null;
  } else {
    const tmp24 = scrollOverflow;
    const obj14 = { ref: pagerRef, style: items7, contentOffset: memo1, keyboardShouldPersistTaps: "handled", showsHorizontalScrollIndicator: false, pagingEnabled: true, snapToInterval: pageWidth, snapToAlignment: "center", decelerationRate: "fast", centerContent: true, bounces, horizontal: true, accessibilityRole: "none", onScroll: animatedScrollHandler, disableIntervalMomentum: true, scrollEventThrottle: num, children: items.map((item, index) => <closure_47 key={index} index={index} activePageRangeStart={activePageRangeStart} activePageRangeEnd={activePageRangeEnd} reportedPageIndex={sharedValue1} pageIndex={sharedValue} scrollTargetPageIndex={derivedValue} style={memo} item={item} />) };
    items7 = [memo, style];
    let tmpResult = tmp(tmp2[9]);
    num = undefined;
    const tmp25 = onPageChangeRef;
    if (tmpResult.isIOS()) {
      num = 32;
    }
    const tmp24Result = tmp24(tmp25, obj14);
    let tmp24Result2 = tmp24Result;
    if (null != nativeGesture) {
      const obj15 = { gesture: nativeGesture, children: tmp24Result };
      tmp24Result2 = tmp24(tmp(tmp2[10]).GestureDetector, obj15);
    }
    return tmp24Result2;
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_47 = ReactCompilerGating.isReactCompilerEnabled() ? ((reportedPageIndex) => {
  let closure_0;
  let closure_1;
  let closure_2;
  let closure_5;
  let tmp10;
  let tmp8;
  let tmp = _require;
  let tmp2 = dependencyMap;
  let obj = require("react");
  const cResult = obj.c(32);
  if (cResult[0] !== reportedPageIndex) {
    reportedPageIndex = reportedPageIndex.reportedPageIndex;
    pageIndex = reportedPageIndex.pageIndex;
    closure_3 = pageIndex;
    scrollTargetPageIndex = reportedPageIndex.scrollTargetPageIndex;
    closure_5 = scrollTargetPageIndex;
    const index = reportedPageIndex.index;
    dependencyMap = index;
    const item = reportedPageIndex.item;
    class P {
      constructor() {
        let tmp2 = Math.floor(closure_3.get()) === closure_2;
        if (!tmp2) {
          const _Math = Math;
          tmp2 = Math.ceil(closure_3.get()) === closure_2;
        }
        if (!tmp2) {
          tmp2 = closure_5.get() === closure_2;
        }
        return tmp2;
      }
    }
    importDefault = tmp12;
    activePageRangeEnd = reportedPageIndex.activePageRangeEnd;
    _require = activePageRangeEnd;
    cResult[0] = reportedPageIndex;
    cResult[1] = activePageRangeEnd;
    cResult[2] = tmp12;
    reportedPageIndex(reportedPageIndex, closure_3);
    class O {
      constructor() {
        let pointerEvents = "box-none";
        if (reportedPageIndex.get() !== closure_2) {
          pointerEvents = "none";
        }
        return { pointerEvents };
      }
    }
    cResult[3] = index;
    cResult[4] = item;
    cResult[5] = pageIndex;
    cResult[6] = reportedPageIndex;
    cResult[7] = scrollTargetPageIndex;
    class C {
      constructor() {
        return reportedPageIndex.get() !== closure_2;
      }
    }
    tmp10 = scrollTargetPageIndex;
    tmp8 = pageIndex;
  } else {
    _require = cResult[1];
    importDefault = cResult[2];
    dependencyMap = cResult[3];
    closure_3 = cResult[5];
    class P {
      constructor() {
        let tmp2 = Math.floor(closure_3.get()) === closure_2;
        if (!tmp2) {
          const _Math = Math;
          tmp2 = Math.ceil(closure_3.get()) === closure_2;
        }
        if (!tmp2) {
          tmp2 = closure_5.get() === closure_2;
        }
        return tmp2;
      }
    }
    reportedPageIndex = tmp9;
    closure_5 = cResult[7];
  }
  const tmpResult = tmp(4612);
  class P {
    constructor() {
      let tmp2 = Math.floor(closure_3.get()) === closure_2;
      if (!tmp2) {
        const _Math = Math;
        tmp2 = Math.ceil(closure_3.get()) === closure_2;
      }
      if (!tmp2) {
        tmp2 = closure_5.get() === closure_2;
      }
      return tmp2;
    }
  }
  P.__closure = { pageIndex: tmp8, index: tmp6, scrollTargetPageIndex: tmp10 };
  P.__workletHash = 2724531395868;
  P.__initData = __initData13;
  const derivedValue = tmpResult.useDerivedValue(P);
  const tmpResult3 = tmp(4612);
  class O {
    constructor() {
      let pointerEvents = "box-none";
      if (reportedPageIndex.get() !== closure_2) {
        pointerEvents = "none";
      }
      return { pointerEvents };
    }
  }
  O.__closure = { reportedPageIndex: tmp9, index: tmp6 };
  O.__workletHash = 9779507421474;
  O.__initData = __initData14;
  const animatedProps = tmpResult3.useAnimatedProps(O);
  if (cResult[9] === tmp6) {
    let tmp18;
    let tmp30;
    if (cResult[10] === tmp9) {
      tmp18 = cResult[11];
    }
    const tmp20 = closure_5(derivedValue.useState(tmp18), 2);
    current = tmp20[0];
    closure_8 = tmp22;
    const obj4 = derivedValue;
    class P {
      constructor() {
        let tmp2 = Math.floor(closure_3.get()) === closure_2;
        if (!tmp2) {
          const _Math = Math;
          tmp2 = Math.ceil(closure_3.get()) === closure_2;
        }
        if (!tmp2) {
          tmp2 = closure_5.get() === closure_2;
        }
        return tmp2;
      }
    }
    class D {
      constructor() {
        return reportedPageIndex.get() !== closure_2;
      }
    }
    let obj2 = { reportedPageIndex: tmp9, index: tmp6 };
    D.__closure = obj2;
    D.__workletHash = 10737484996965;
    D.__initData = __initData15;
    class R {
      constructor(arg0) {
        const obj = ReanimatedRexport2;
        obj.runOnJS(closure_8)(arg0);
      }
    }
    let obj3 = { runOnJS: null, setIsAccessibilityHidden: tmp20[1] };
    const useAnimatedReaction = tmp23.useAnimatedReaction;
    class O {
      constructor() {
        let pointerEvents = "box-none";
        if (reportedPageIndex.get() !== closure_2) {
          pointerEvents = "none";
        }
        return { pointerEvents };
      }
    }
    R.__closure = obj3;
    R.__workletHash = 17485016054072;
    R.__initData = __initData16;
    const animatedReaction = useAnimatedReaction(D, R);
    ref = derivedValue.useRef(null);
    class C {
      constructor() {
        return reportedPageIndex.get() !== closure_2;
      }
    }
    if (cResult[12] !== current) {
      class H {
        constructor() {
          current = ref.current && !current;
          ref.current = current;
          if (current) {
            const obj = PlatformUtils;
            current = obj.isIOS();
          }
          if (current) {
            const obj3 = { ref, delay: 100 };
            const obj2 = react_native2;
            const result = obj2.setAccessibilityFocus(obj3);
          }
        }
      }
      let items = [current];
      cResult[12] = current;
      cResult[13] = H;
      cResult[14] = items;
      class P {
        constructor() {
          let tmp2 = Math.floor(closure_3.get()) === closure_2;
          if (!tmp2) {
            const _Math = Math;
            tmp2 = Math.ceil(closure_3.get()) === closure_2;
          }
          if (!tmp2) {
            tmp2 = closure_5.get() === closure_2;
          }
          return tmp2;
        }
      }
      class D {
        constructor() {
          return reportedPageIndex.get() !== closure_2;
        }
      }
    } else {
      class H {
        constructor() {
          current = ref.current && !current;
          ref.current = current;
          if (current) {
            const obj = PlatformUtils;
            current = obj.isIOS();
          }
          if (current) {
            const obj3 = { ref, delay: 100 };
            const obj2 = react_native2;
            const result = obj2.setAccessibilityFocus(obj3);
          }
        }
      }
      tmp30 = cResult[14];
    }
    const effect = obj4.useEffect(tmp29, tmp30);
    const fn = function z() {
      let display = "none";
      if (derivedValue.get()) {
        display = "flex";
      }
      return { display, flex: 1 };
    };
    const obj5 = { isVisibleOnScreen: derivedValue };
    fn.__closure = obj5;
    fn.__workletHash = 6740536171688;
    fn.__initData = __initData17;
    const tmpResult4 = tmp(4612);
    const animatedStyle = tmpResult4.useAnimatedStyle(fn);
    if (cResult[15] === tmp4) {
      class H {
        constructor() {
          current = ref.current && !current;
          ref.current = current;
          if (current) {
            const obj = PlatformUtils;
            current = obj.isIOS();
          }
          if (current) {
            const obj3 = { ref, delay: 100 };
            const obj2 = react_native2;
            const result = obj2.setAccessibilityFocus(obj3);
          }
        }
      }
    }
    class N {
      constructor() {
        const tmp2 = closure_2 >= closure_1.get() && closure_2 <= closure_0.get();
        return !tmp2;
      }
    }
    cResult[15] = tmp4;
    cResult[16] = tmp12;
    cResult[17] = tmp6;
    cResult[18] = N;
  }
  class C {
    constructor() {
      return reportedPageIndex.get() !== closure_2;
    }
  }
  cResult[9] = tmp6;
  cResult[10] = tmp9;
  cResult[11] = C;
  tmp18 = C;
}) : ((reportedPageIndex) => {
  let Freeze;
  let first;
  let obj10;
  let obj9;
  let str;
  reportedPageIndex = reportedPageIndex.reportedPageIndex;
  pageIndex = reportedPageIndex.pageIndex;
  scrollTargetPageIndex = reportedPageIndex.scrollTargetPageIndex;
  const index = reportedPageIndex.index;
  activePageRangeStart = reportedPageIndex.activePageRangeStart;
  activePageRangeEnd = reportedPageIndex.activePageRangeEnd;
  const item = reportedPageIndex.item;
  const merged = Object.assign(reportedPageIndex, Object.assign({ reportedPageIndex: 0, pageIndex: 0, scrollTargetPageIndex: 0, index: 0, item: 0, activePageRangeStart: 0, activePageRangeEnd: 0 }));
  let accessibilityElementsHidden;
  closure_8 = undefined;
  ref = undefined;
  let closure_11;
  let tmp2 = reportedPageIndex;
  let obj = reportedPageIndex(scrollTargetPageIndex[5]);
  const fn = function v() {
    let tmp2 = Math.floor(pageIndex.get()) === index;
    if (!tmp2) {
      const _Math = Math;
      tmp2 = Math.ceil(pageIndex.get()) === index;
    }
    if (!tmp2) {
      tmp2 = scrollTargetPageIndex.get() === index;
    }
    return tmp2;
  };
  fn.__closure = { pageIndex, index, scrollTargetPageIndex };
  fn.__workletHash = 4593378569274;
  fn.__initData = __initData18;
  const derivedValue = obj.useDerivedValue(fn);
  let obj2 = reportedPageIndex(scrollTargetPageIndex[5]);
  class I {
    constructor() {
      let pointerEvents = "box-none";
      if (reportedPageIndex.get() !== index) {
        pointerEvents = "none";
      }
      return { pointerEvents };
    }
  }
  I.__closure = { reportedPageIndex, index };
  I.__workletHash = 12899986233414;
  I.__initData = __initData19;
  const animatedProps = obj2.useAnimatedProps(I);
  const tmp6 = activePageRangeEnd(derivedValue.useState(() => reportedPageIndex.get() !== index), 2);
  accessibilityElementsHidden = tmp6[0];
  closure_8 = tmp8;
  let obj3 = reportedPageIndex(scrollTargetPageIndex[5]);
  const fn2 = function p() {
    return reportedPageIndex.get() !== index;
  };
  fn2.__closure = { reportedPageIndex, index };
  fn2.__workletHash = 2345652853959;
  fn2.__initData = __initData20;
  class S {
    constructor(arg0) {
      const obj = ReanimatedRexport2;
      obj.runOnJS(closure_8)(arg0);
    }
  }
  S.__closure = { runOnJS: reportedPageIndex(scrollTargetPageIndex[5]).runOnJS, setIsAccessibilityHidden: tmp6[1] };
  S.__workletHash = 15518480728660;
  S.__initData = __initData21;
  ({ runOnJS: reportedPageIndex(scrollTargetPageIndex[5]).runOnJS, setIsAccessibilityHidden: tmp6[1] });
  const animatedReaction = obj3.useAnimatedReaction(fn2, S);
  derivedValue.useRef(null);
  ref = derivedValue.useRef(accessibilityElementsHidden);
  let items = [accessibilityElementsHidden];
  const effect = derivedValue.useEffect(() => {
    current = ref.current && !current;
    ref.current = current;
    if (current) {
      const obj = PlatformUtils;
      current = obj.isIOS();
    }
    if (current) {
      const obj3 = { ref, delay: 100 };
      const obj2 = react_native2;
      const result = obj2.setAccessibilityFocus(obj3);
    }
  }, items);
  const obj5 = reportedPageIndex(scrollTargetPageIndex[5]);
  class W {
    constructor() {
      let display = "none";
      if (derivedValue.get()) {
        display = "flex";
      }
      return { display, flex: 1 };
    }
  }
  W.__closure = { isVisibleOnScreen: derivedValue };
  W.__workletHash = 1125238936966;
  W.__initData = __initData22;
  const animatedStyle = obj5.useAnimatedStyle(W);
  const tmp13 = activePageRangeEnd(derivedValue.useState(() => {
    const tmp2 = index >= activePageRangeStart.get() && index <= activePageRangeEnd.get();
    return !tmp2;
  }), 2);
  closure_11 = tmp15;
  const first1 = tmp13[0];
  const obj6 = reportedPageIndex(scrollTargetPageIndex[5]);
  class M {
    constructor() {
      const items = [activePageRangeStart.get(), activePageRangeEnd.get()];
      return items;
    }
  }
  M.__closure = { activePageRangeStart, activePageRangeEnd };
  M.__workletHash = 7158564312502;
  M.__initData = __initData23;
  const fn3 = function b(arg0) {
    let tmp;
    let tmp2;
    [tmp, tmp2] = arg0;
    let tmp4 = index >= tmp;
    const obj = ReanimatedRexport2;
    const runOnJSResult = obj.runOnJS(closure_11);
    if (tmp4) {
      tmp4 = index <= tmp2;
    }
    runOnJSResult(!tmp4);
  };
  fn3.__closure = { index, runOnJS: reportedPageIndex(scrollTargetPageIndex[5]).runOnJS, setFreeze: tmp13[1] };
  fn3.__workletHash = 13391069051873;
  fn3.__initData = __initData24;
  ({ index, runOnJS: reportedPageIndex(scrollTargetPageIndex[5]).runOnJS, setFreeze: tmp13[1] });
  const animatedReaction1 = obj6.useAnimatedReaction(M, fn3);
  const obj8 = { ref, animatedProps, importantForAccessibility: str, accessibilityElementsHidden, children: accessibilityElementsHidden(Freeze, obj9) };
  const View = pageIndex(scrollTargetPageIndex[5]).View;
  const merged1 = Object.assign(merged);
  str = "auto";
  const tmp18 = pageIndex;
  if (accessibilityElementsHidden) {
    str = "no-hide-descendants";
  }
  obj9 = { freeze: first1, children: accessibilityElementsHidden(tmp18(scrollTargetPageIndex[5]).View, obj10) };
  Freeze = tmp2(tmp3[12]).Freeze;
  obj10 = { style: animatedStyle, children: item.page };
  return accessibilityElementsHidden(View, obj8, index);
});
const __initData25 = { code: "function SegmentedControlPagesNativeTsx39(min,max){const{activePageRangeStart,activePageRangeEnd}=this.__closure;activePageRangeStart.set(Math.min(activePageRangeStart.get(),min));activePageRangeEnd.set(Math.max(activePageRangeEnd.get(),max));}" };
const __initData26 = { code: "function SegmentedControlPagesNativeTsx40(){const{activeIndex,pressedIndex}=this.__closure;return{activeIndex:activeIndex.get(),pressedIndex:pressedIndex.get()};}" };
const __initData27 = { code: "function SegmentedControlPagesNativeTsx41(t0){const{expandActivePageRange}=this.__closure;const{activeIndex:activeIndex_0,pressedIndex:pressedIndex_0}=t0;let min_0=activeIndex_0;let max_0=activeIndex_0;if(pressedIndex_0!==-1){min_0=Math.min(activeIndex_0,pressedIndex_0);max_0=Math.max(activeIndex_0,pressedIndex_0);}expandActivePageRange(Math.floor(min_0),Math.ceil(max_0));}" };
const __initData28 = { code: "function SegmentedControlPagesNativeTsx42(min,max){const{activePageRangeStart,activePageRangeEnd}=this.__closure;activePageRangeStart.set(Math.min(activePageRangeStart.get(),min));activePageRangeEnd.set(Math.max(activePageRangeEnd.get(),max));}" };
const __initData29 = { code: "function SegmentedControlPagesNativeTsx43(){const{activeIndex,pressedIndex}=this.__closure;return{activeIndex:activeIndex.get(),pressedIndex:pressedIndex.get()};}" };
const __initData30 = { code: "function SegmentedControlPagesNativeTsx44({activeIndex:activeIndex_0,pressedIndex:pressedIndex_0}){const{expandActivePageRange}=this.__closure;let min_0=activeIndex_0;let max_0=activeIndex_0;if(pressedIndex_0!==-1){min_0=Math.min(activeIndex_0,pressedIndex_0);max_0=Math.max(activeIndex_0,pressedIndex_0);}expandActivePageRange(Math.floor(min_0),Math.ceil(max_0));}" };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_54 = ReactCompilerGating.isReactCompilerEnabled() ? ((activeIndex, pressedIndex) => {
  let closure_0 = activeIndex;
  let closure_1 = pressedIndex;
  let obj = react2;
  const cResult = obj.c(3);
  const obj2 = ReanimatedRexport2;
  const sharedValue = obj2.useSharedValue(activeIndex.get());
  const obj3 = ReanimatedRexport2;
  const sharedValue1 = obj3.useSharedValue(activeIndex.get());
  const fn = function o(arg0, arg1) {
    const result = sharedValue.set(Math.min(sharedValue.get(), arg0));
    const result1 = sharedValue1.set(Math.max(sharedValue1.get(), arg1));
  };
  fn.__closure = { activePageRangeStart: sharedValue, activePageRangeEnd: sharedValue1 };
  fn.__workletHash = 3575728639518;
  fn.__initData = __initData25;
  const fn2 = function l() {
    const obj = { activeIndex: closure_0.get(), pressedIndex: closure_1.get() };
    return obj;
  };
  fn2.__closure = { activeIndex, pressedIndex };
  fn2.__workletHash = 15473938229756;
  fn2.__initData = __initData26;
  const fn3 = function s(arg0) {
    let activeIndex;
    let pressedIndex;
    ({ activeIndex, pressedIndex } = arg0);
    let bound = activeIndex;
    if (-1 !== pressedIndex) {
      const _Math = Math;
      bound = Math.min(activeIndex, pressedIndex);
      const _Math2 = Math;
      const bound1 = Math.max(activeIndex, pressedIndex);
    }
    const rounded = Math.floor(bound);
    if (typeof fn === "function") {
      const _Math3 = Math;
      const result = sharedValue.set(Math.min(sharedValue.get(), rounded));
      const _Math4 = Math;
      const result1 = sharedValue1.set(Math.max(sharedValue1.get(), tmp5));
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  };
  fn3.__closure = { expandActivePageRange: fn };
  fn3.__workletHash = 11024199346758;
  fn3.__initData = __initData27;
  const obj4 = ReanimatedRexport2;
  const animatedReaction = obj4.useAnimatedReaction(fn2, fn3);
  if (cResult[0] === sharedValue1) {
    let tmp5;
    if (cResult[1] === sharedValue) {
      tmp5 = cResult[2];
    }
    return tmp5;
  }
  const items = [sharedValue, sharedValue1];
  cResult[0] = sharedValue1;
  cResult[1] = sharedValue;
  cResult[2] = items;
  tmp5 = items;
}) : ((activeIndex, pressedIndex) => {
  let closure_0 = activeIndex;
  let closure_1 = pressedIndex;
  let obj = ReanimatedRexport2;
  const sharedValue = obj.useSharedValue(activeIndex.get());
  const obj2 = ReanimatedRexport2;
  const sharedValue1 = obj2.useSharedValue(activeIndex.get());
  const fn = function o(arg0, arg1) {
    const result = sharedValue.set(Math.min(sharedValue.get(), arg0));
    const result1 = sharedValue1.set(Math.max(sharedValue1.get(), arg1));
  };
  fn.__closure = { activePageRangeStart: sharedValue, activePageRangeEnd: sharedValue1 };
  fn.__workletHash = 13074491908786;
  fn.__initData = __initData28;
  const items = [sharedValue1, sharedValue];
  const callback = react.useCallback(fn, items);
  const fn2 = function c() {
    const obj = { activeIndex: closure_0.get(), pressedIndex: closure_1.get() };
    return obj;
  };
  fn2.__closure = { activeIndex, pressedIndex };
  fn2.__workletHash = 7031527506303;
  fn2.__initData = __initData29;
  const fn3 = function l(arg0) {
    let activeIndex;
    let pressedIndex;
    ({ activeIndex, pressedIndex } = arg0);
    let bound1 = activeIndex;
    let bound = activeIndex;
    if (-1 !== pressedIndex) {
      const _Math = Math;
      bound = Math.min(activeIndex, pressedIndex);
      const _Math2 = Math;
      bound1 = Math.max(activeIndex, pressedIndex);
    }
    const rounded = Math.floor(bound);
    callback(rounded, Math.ceil(bound1));
  };
  fn3.__closure = { expandActivePageRange: callback };
  fn3.__workletHash = 7154390605088;
  fn3.__initData = __initData30;
  const obj3 = ReanimatedRexport2;
  const animatedReaction = obj3.useAnimatedReaction(fn2, fn3);
  const items1 = [sharedValue, sharedValue1];
  return items1;
});
let result = size.fileFinishedImporting("design/components/SegmentedControl/native/SegmentedControlPages.native.tsx");

export const SegmentedControlPages = tmp2;