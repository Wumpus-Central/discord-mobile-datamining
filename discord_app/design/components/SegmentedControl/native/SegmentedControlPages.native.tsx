// === Module 10600: SegmentedControlPages ===

// Module 10600 (SegmentedControlPages)
import c from "c" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 4850 */;
import setAccessibilityFocus from "setAccessibilityFocus" /* 5371 */;
import MathUtils from "MathUtils" /* 10601 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const ReanimatedRexport = ReanimatedRexport2;

require = fn;
let closure_3 = ["reportedPageIndex", "pageIndex", "scrollTargetPageIndex", "index", "item", "activePageRangeStart", "activePageRangeEnd"];
const jsx = fn(21).jsx;
let closure_8 = ReanimatedRexport.createAnimatedComponent(fn(17).ScrollView);
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
const style = { code: "function SegmentedControlPagesNativeTsx12(range,prev){const{visiblePageRange}=this.__closure;if(prev==null||prev[0]!==range[0]||prev[1]!==range[1]){visiblePageRange.set(range);}}" };
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
fn(558);
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
let ReactCompilerGating = fn(558);
let closure_47 = ReactCompilerGating.isReactCompilerEnabled() ? (function SegmentedControlPage(reportedPageIndex) {
  const cResult = require("c").c(32);
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
        obj = closure_3;
        tmp = closure_2;
        tmp2 = Math.floor(closure_3.get()) === closure_2;
        if (!tmp2) {
          _Math = Math;
          tmp2 = Math.ceil(obj.get()) === tmp;
        }
        if (!tmp2) {
          tmp3 = closure_5;
          tmp2 = closure_5.get() === tmp;
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
    class O {
      constructor() {
        pointerEvents = "box-none";
        if (closure_4.get() !== closure_2) {
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
        return closure_4.get() !== closure_2;
      }
    }
    const tmp10 = scrollTargetPageIndex;
    const tmp15 = reportedPageIndex(reportedPageIndex, closure_3);
    const tmp8 = pageIndex;
  } else {
    _require = cResult[1];
    importDefault = cResult[2];
    dependencyMap = cResult[3];
    closure_3 = cResult[5];
    class P {
      constructor() {
        obj = closure_3;
        tmp = closure_2;
        tmp2 = Math.floor(closure_3.get()) === closure_2;
        if (!tmp2) {
          _Math = Math;
          tmp2 = Math.ceil(obj.get()) === tmp;
        }
        if (!tmp2) {
          tmp3 = closure_5;
          tmp2 = closure_5.get() === tmp;
        }
        return tmp2;
      }
    }
    reportedPageIndex = tmp9;
    closure_5 = cResult[7];
  }
  let obj = require("c");
  class P {
    constructor() {
      obj = closure_3;
      tmp = closure_2;
      tmp2 = Math.floor(closure_3.get()) === closure_2;
      if (!tmp2) {
        _Math = Math;
        tmp2 = Math.ceil(obj.get()) === tmp;
      }
      if (!tmp2) {
        tmp3 = closure_5;
        tmp2 = closure_5.get() === tmp;
      }
      return tmp2;
    }
  }
  P.__closure = { pageIndex: tmp8, index: tmp6, scrollTargetPageIndex: tmp10 };
  P.__workletHash = 2724531395868;
  P.__initData = __initData13;
  const derivedValue = require("ReanimatedRexport").useDerivedValue(P);
  const tmpResult = require("ReanimatedRexport");
  class O {
    constructor() {
      pointerEvents = "box-none";
      if (closure_4.get() !== closure_2) {
        pointerEvents = "none";
      }
      return { pointerEvents };
    }
  }
  O.__closure = { reportedPageIndex: tmp9, index: tmp6 };
  O.__workletHash = 9779507421474;
  O.__initData = __initData14;
  const animatedProps = require("ReanimatedRexport").useAnimatedProps(O);
  if (cResult[9] === tmp6) {
    if (cResult[10] === tmp9) {
      let tmp18 = cResult[11];
    }
    const tmp20 = closure_5(derivedValue.useState(tmp18), 2);
    current = tmp20[0];
    closure_8 = tmp22;
    class P {
      constructor() {
        obj = closure_3;
        tmp = closure_2;
        tmp2 = Math.floor(closure_3.get()) === closure_2;
        if (!tmp2) {
          _Math = Math;
          tmp2 = Math.ceil(obj.get()) === tmp;
        }
        if (!tmp2) {
          tmp3 = closure_5;
          tmp2 = closure_5.get() === tmp;
        }
        return tmp2;
      }
    }
    class D {
      constructor() {
        return closure_4.get() !== closure_2;
      }
    }
    let obj2 = { reportedPageIndex: tmp9, index: tmp6 };
    D.__closure = obj2;
    D.__workletHash = 10737484996965;
    D.__initData = __initData15;
    class R {
      constructor(arg0) {
        obj = closure_0(closure_2[5]);
        tmp = obj.runOnJS(closure_8)(reportedPageIndex);
        return;
      }
    }
    let obj3 = { runOnJS: null, setIsAccessibilityHidden: null };
    class O {
      constructor() {
        pointerEvents = "box-none";
        if (closure_4.get() !== closure_2) {
          pointerEvents = "none";
        }
        return { pointerEvents };
      }
    }
    obj3.setIsAccessibilityHidden = tmp20[1];
    R.__closure = obj3;
    R.__workletHash = 17485016054072;
    R.__initData = __initData16;
    const animatedReaction = obj5.useAnimatedReaction(D, R);
    derivedValue.useRef(null);
    class C {
      constructor() {
        return closure_4.get() !== closure_2;
      }
    }
    if (cResult[12] !== current) {
      class H {
        constructor() {
          current = closure_10.current;
          tmp = closure_10;
          if (current) {
            tmp2 = closure_7;
            current = !closure_7;
          }
          tmp.current = closure_7;
          if (current) {
            tmp3 = closure_0;
            tmp4 = closure_2;
            obj = closure_0(closure_2[9]);
            current = obj.isIOS();
          }
          if (current) {
            tmp5 = closure_0;
            tmp6 = closure_2;
            obj2 = closure_0(closure_2[11]);
            obj1 = { ref: null, delay: 100 };
            tmp7 = closure_9;
            obj1.ref = closure_9;
            result = obj2.setAccessibilityFocus(obj1);
          }
          return;
        }
      }
      let items = [current];
      cResult[12] = current;
      cResult[13] = H;
      cResult[14] = items;
      class P {
        constructor() {
          obj = closure_3;
          tmp = closure_2;
          tmp2 = Math.floor(closure_3.get()) === closure_2;
          if (!tmp2) {
            _Math = Math;
            tmp2 = Math.ceil(obj.get()) === tmp;
          }
          if (!tmp2) {
            tmp3 = closure_5;
            tmp2 = closure_5.get() === tmp;
          }
          return tmp2;
        }
      }
      class D {
        constructor() {
          return closure_4.get() !== closure_2;
        }
      }
    } else {
      class H {
        constructor() {
          current = closure_10.current;
          tmp = closure_10;
          if (current) {
            tmp2 = closure_7;
            current = !closure_7;
          }
          tmp.current = closure_7;
          if (current) {
            tmp3 = closure_0;
            tmp4 = closure_2;
            obj = closure_0(closure_2[9]);
            current = obj.isIOS();
          }
          if (current) {
            tmp5 = closure_0;
            tmp6 = closure_2;
            obj2 = closure_0(closure_2[11]);
            obj1 = { ref: null, delay: 100 };
            tmp7 = closure_9;
            obj1.ref = closure_9;
            result = obj2.setAccessibilityFocus(obj1);
          }
          return;
        }
      }
      const tmp29 = cResult[14];
    }
    const effect = derivedValue.useEffect(tmp28, tmp29);
    class A {
      constructor() {
        display = "none";
        if (closure_6.get()) {
          display = "flex";
        }
        return { display, flex: 1 };
      }
    }
    const obj6 = { isVisibleOnScreen: derivedValue };
    A.__closure = obj6;
    A.__workletHash = 6740536171688;
    A.__initData = __initData17;
    const animatedStyle = tmp(4850).useAnimatedStyle(A);
    if (cResult[15] === tmp4) {
      class H {
        constructor() {
          current = closure_10.current;
          tmp = closure_10;
          if (current) {
            tmp2 = closure_7;
            current = !closure_7;
          }
          tmp.current = closure_7;
          if (current) {
            tmp3 = closure_0;
            tmp4 = closure_2;
            obj = closure_0(closure_2[9]);
            current = obj.isIOS();
          }
          if (current) {
            tmp5 = closure_0;
            tmp6 = closure_2;
            obj2 = closure_0(closure_2[11]);
            obj1 = { ref: null, delay: 100 };
            tmp7 = closure_9;
            obj1.ref = closure_9;
            result = obj2.setAccessibilityFocus(obj1);
          }
          return;
        }
      }
    }
    class N {
      constructor() {
        tmp = closure_2;
        tmp2 = closure_2 >= closure_1.get();
        if (tmp2) {
          tmp3 = closure_0;
          tmp2 = tmp <= closure_0.get();
        }
        return !tmp2;
      }
    }
    cResult[15] = tmp4;
    cResult[16] = tmp12;
    cResult[17] = tmp6;
    cResult[18] = N;
    const tmpResult4 = tmp(4850);
  }
  class C {
    constructor() {
      return closure_4.get() !== closure_2;
    }
  }
  cResult[9] = tmp6;
  cResult[11] = C;
  tmp18 = C;
  const tmpResult3 = require("ReanimatedRexport");
}) : (function SegmentedControlPage(children) {
  reportedPageIndex = children.reportedPageIndex;
  pageIndex = children.pageIndex;
  scrollTargetPageIndex = children.scrollTargetPageIndex;
  const index = children.index;
  activePageRangeStart = children.activePageRangeStart;
  activePageRangeEnd = children.activePageRangeEnd;
  const merged = Object.assign(children, Object.assign({ reportedPageIndex: 0, pageIndex: 0, scrollTargetPageIndex: 0, index: 0, item: 0, activePageRangeStart: 0, activePageRangeEnd: 0 }));
  let accessibilityElementsHidden;
  closure_8 = undefined;
  ref = undefined;
  closure_11 = undefined;
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
  const derivedValue = reportedPageIndex(scrollTargetPageIndex[5]).useDerivedValue(fn);
  let obj = reportedPageIndex(scrollTargetPageIndex[5]);
  let tmp2 = reportedPageIndex;
  class S {
    constructor() {
      pointerEvents = "box-none";
      if (reportedPageIndex.get() !== index) {
        pointerEvents = "none";
      }
      return { pointerEvents };
    }
  }
  S.__closure = { reportedPageIndex, index };
  S.__workletHash = 12899986233414;
  S.__initData = __initData19;
  const animatedProps = reportedPageIndex(scrollTargetPageIndex[5]).useAnimatedProps(S);
  const tmp6 = activePageRangeEnd(derivedValue.useState(() => reportedPageIndex.get() !== index), 2);
  accessibilityElementsHidden = tmp6[0];
  closure_8 = tmp8;
  let obj2 = reportedPageIndex(scrollTargetPageIndex[5]);
  const fn2 = function p() {
    return reportedPageIndex.get() !== index;
  };
  fn2.__closure = { reportedPageIndex, index };
  fn2.__workletHash = 2345652853959;
  fn2.__initData = __initData20;
  class I {
    constructor(arg0) {
      obj = closure_0(closure_2[5]);
      tmp = obj.runOnJS(closure_8)(children);
      return;
    }
  }
  let obj3 = reportedPageIndex(scrollTargetPageIndex[5]);
  I.__closure = { runOnJS: reportedPageIndex(scrollTargetPageIndex[5]).runOnJS, setIsAccessibilityHidden: tmp6[1] };
  I.__workletHash = 15518480728660;
  I.__initData = __initData21;
  const animatedReaction = obj3.useAnimatedReaction(fn2, I);
  derivedValue.useRef(null);
  ref = derivedValue.useRef(accessibilityElementsHidden);
  let items = [accessibilityElementsHidden];
  const effect = derivedValue.useEffect(() => {
    current = ref.current;
    if (current) {
      current = !current;
    }
    ref.current = current;
    if (current) {
      current = PlatformUtils.isIOS();
    }
    if (current) {
      const obj3 = { ref, delay: 100 };
      const result = setAccessibilityFocus.setAccessibilityFocus(obj3);
    }
  }, items);
  const obj4 = { runOnJS: reportedPageIndex(scrollTargetPageIndex[5]).runOnJS, setIsAccessibilityHidden: tmp6[1] };
  class W {
    constructor() {
      display = "none";
      if (closure_6.get()) {
        display = "flex";
      }
      return { display, flex: 1 };
    }
  }
  W.__closure = { isVisibleOnScreen: derivedValue };
  W.__workletHash = 1125238936966;
  W.__initData = __initData22;
  const animatedStyle = reportedPageIndex(scrollTargetPageIndex[5]).useAnimatedStyle(W);
  const tmp13 = activePageRangeEnd(derivedValue.useState(() => {
    let tmp2 = index >= activePageRangeStart.get();
    if (tmp2) {
      tmp2 = index <= activePageRangeEnd.get();
    }
    return !tmp2;
  }), 2);
  closure_11 = tmp14;
  const obj5 = reportedPageIndex(scrollTargetPageIndex[5]);
  class M {
    constructor() {
      items = [, ];
      items[0] = activePageRangeStart.get();
      items[1] = activePageRangeEnd.get();
      return items;
    }
  }
  M.__closure = { activePageRangeStart, activePageRangeEnd };
  M.__workletHash = 7158564312502;
  M.__initData = __initData23;
  const fn3 = function b(arg0) {
    [tmp, tmp2] = arg0;
    let tmp4 = index >= tmp;
    if (tmp4) {
      tmp4 = index <= tmp2;
    }
    ReanimatedRexport2.runOnJS(closure_11)(!tmp4);
  };
  const obj6 = reportedPageIndex(scrollTargetPageIndex[5]);
  fn3.__closure = { index, runOnJS: reportedPageIndex(scrollTargetPageIndex[5]).runOnJS, setFreeze: tmp13[1] };
  fn3.__workletHash = 13391069051873;
  fn3.__initData = __initData24;
  const animatedReaction1 = obj6.useAnimatedReaction(M, fn3);
  const obj8 = { ref };
  const merged1 = Object.assign(merged);
  obj8.animatedProps = animatedProps;
  let str = "auto";
  if (accessibilityElementsHidden) {
    str = "no-hide-descendants";
  }
  obj8.importantForAccessibility = str;
  obj8.accessibilityElementsHidden = accessibilityElementsHidden;
  const obj9 = { freeze: tmp13[0], children: accessibilityElementsHidden(pageIndex(scrollTargetPageIndex[5]).View, { style: animatedStyle, children: children.item.page }) };
  obj8.children = accessibilityElementsHidden(tmp2(scrollTargetPageIndex[12]).Freeze, obj9);
  return accessibilityElementsHidden(pageIndex(scrollTargetPageIndex[5]).View, obj8, index);
});
const __initData25 = { code: "function SegmentedControlPagesNativeTsx39(min,max){const{activePageRangeStart,activePageRangeEnd}=this.__closure;activePageRangeStart.set(Math.min(activePageRangeStart.get(),min));activePageRangeEnd.set(Math.max(activePageRangeEnd.get(),max));}" };
const __initData26 = { code: "function SegmentedControlPagesNativeTsx40(){const{activeIndex,pressedIndex}=this.__closure;return{activeIndex:activeIndex.get(),pressedIndex:pressedIndex.get()};}" };
const __initData27 = { code: "function SegmentedControlPagesNativeTsx41(t0){const{expandActivePageRange}=this.__closure;const{activeIndex:activeIndex_0,pressedIndex:pressedIndex_0}=t0;let min_0=activeIndex_0;let max_0=activeIndex_0;if(pressedIndex_0!==-1){min_0=Math.min(activeIndex_0,pressedIndex_0);max_0=Math.max(activeIndex_0,pressedIndex_0);}expandActivePageRange(Math.floor(min_0),Math.ceil(max_0));}" };
const __initData28 = { code: "function SegmentedControlPagesNativeTsx42(min,max){const{activePageRangeStart,activePageRangeEnd}=this.__closure;activePageRangeStart.set(Math.min(activePageRangeStart.get(),min));activePageRangeEnd.set(Math.max(activePageRangeEnd.get(),max));}" };
const __initData29 = { code: "function SegmentedControlPagesNativeTsx43(){const{activeIndex,pressedIndex}=this.__closure;return{activeIndex:activeIndex.get(),pressedIndex:pressedIndex.get()};}" };
const __initData30 = { code: "function SegmentedControlPagesNativeTsx44({activeIndex:activeIndex_0,pressedIndex:pressedIndex_0}){const{expandActivePageRange}=this.__closure;let min_0=activeIndex_0;let max_0=activeIndex_0;if(pressedIndex_0!==-1){min_0=Math.min(activeIndex_0,pressedIndex_0);max_0=Math.max(activeIndex_0,pressedIndex_0);}expandActivePageRange(Math.floor(min_0),Math.ceil(max_0));}" };
ReactCompilerGating = fn(558);
let closure_54 = ReactCompilerGating.isReactCompilerEnabled() ? (function useFrozenPageIndices(activeIndex, pressedIndex) {
  const cResult = c.c(3);
  const sharedValue = ReanimatedRexport2.useSharedValue(activeIndex.get());
  const sharedValue1 = ReanimatedRexport2.useSharedValue(activeIndex.get());
  const expandActivePageRange = function o(arg0, arg1) {
    const result = sharedValue.set(Math.min(sharedValue.get(), arg0));
    const result1 = sharedValue1.set(Math.max(sharedValue1.get(), arg1));
  };
  expandActivePageRange.__closure = { activePageRangeStart: sharedValue, activePageRangeEnd: sharedValue1 };
  expandActivePageRange.__workletHash = 3575728639518;
  expandActivePageRange.__initData = __initData25;
  const fn2 = function l() {
    return { activeIndex: activeIndex.get(), pressedIndex: pressedIndex.get() };
  };
  fn2.__closure = { activeIndex, pressedIndex };
  fn2.__workletHash = 15473938229756;
  fn2.__initData = __initData26;
  const fn3 = function s(arg0) {
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
  fn3.__closure = { expandActivePageRange };
  fn3.__workletHash = 11024199346758;
  fn3.__initData = __initData27;
  const animatedReaction = ReanimatedRexport2.useAnimatedReaction(fn2, fn3);
  if (cResult[0] === sharedValue1) {
    if (cResult[1] === sharedValue) {
      let tmp5 = cResult[2];
    }
    return tmp5;
  }
  const items = [sharedValue, sharedValue1];
  cResult[0] = sharedValue1;
  cResult[1] = sharedValue;
  cResult[2] = items;
  tmp5 = items;
}) : (function useFrozenPageIndices(activeIndex, pressedIndex) {
  const sharedValue = ReanimatedRexport2.useSharedValue(activeIndex.get());
  const sharedValue1 = ReanimatedRexport2.useSharedValue(activeIndex.get());
  const fn = function o(arg0, arg1) {
    const result = sharedValue.set(Math.min(sharedValue.get(), arg0));
    const result1 = sharedValue1.set(Math.max(sharedValue1.get(), arg1));
  };
  fn.__closure = { activePageRangeStart: sharedValue, activePageRangeEnd: sharedValue1 };
  fn.__workletHash = 13074491908786;
  fn.__initData = __initData28;
  const items = [sharedValue1, sharedValue];
  const expandActivePageRange = noop.useCallback(fn, items);
  const fn2 = function c() {
    return { activeIndex: activeIndex.get(), pressedIndex: pressedIndex.get() };
  };
  fn2.__closure = { activeIndex, pressedIndex };
  fn2.__workletHash = 7031527506303;
  fn2.__initData = __initData29;
  const fn3 = function l(arg0) {
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
  fn3.__closure = { expandActivePageRange };
  fn3.__workletHash = 7154390605088;
  fn3.__initData = __initData30;
  const animatedReaction = ReanimatedRexport2.useAnimatedReaction(fn2, fn3);
  const items1 = [sharedValue, sharedValue1];
  return items1;
});
const size = fn(2);
let result = size.fileFinishedImporting("design/components/SegmentedControl/native/SegmentedControlPages.native.tsx");

export const SegmentedControlPages = ReactCompilerGating.isReactCompilerEnabled() ? (function SegmentedControlPages(onEndDragWorklet) {
  const cResult = onBeginDragWorklet(onScrollWorklet[7]).c(44);
  ({ state, style, bounces, nativeGesture, onBeginDragWorklet } = onEndDragWorklet);
  onEndDragWorklet = onEndDragWorklet.onEndDragWorklet;
  onScrollWorklet = onEndDragWorklet.onScrollWorklet;
  ({ items, activeIndex } = state);
  const visiblePageRange = state.visiblePageRange;
  const pagerRef = state.pagerRef;
  const scrollTarget = state.scrollTarget;
  const scrollOverflow = state.scrollOverflow;
  ({ onPageChangeRef: closure_8, pageWidth } = state);
  let obj = onBeginDragWorklet(onScrollWorklet[7]);
  const sharedValue = onBeginDragWorklet(onScrollWorklet[5]).useSharedValue(activeIndex.get());
  let obj2 = onBeginDragWorklet(onScrollWorklet[5]);
  const sharedValue1 = onBeginDragWorklet(onScrollWorklet[5]).useSharedValue(activeIndex.get());
  let obj3 = onBeginDragWorklet(onScrollWorklet[5]);
  const sharedValue2 = onBeginDragWorklet(onScrollWorklet[5]).useSharedValue(undefined);
  __initData = scrollTarget.useRef(false);
  if (cResult[0] !== activeIndex) {
    value = activeIndex.get();
    cResult[0] = activeIndex;
    cResult[1] = value;
    let tmp7 = value;
  } else {
    tmp7 = cResult[1];
  }
  __initData2 = obj5.useRef(tmp7);
  function updateCurrentActiveIndex(current) {
    closure_15.current = current;
  }
  let obj4 = onBeginDragWorklet(onScrollWorklet[5]);
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
      obj = closure_0(closure_2[5]);
      tmp = obj.runOnJS(updateCurrentActiveIndex)(onEndDragWorklet);
      return;
    }
  }
  let tmpResult = onBeginDragWorklet(onScrollWorklet[5]);
  K.__closure = { runOnJS: onBeginDragWorklet(onScrollWorklet[5]).runOnJS, updateCurrentActiveIndex };
  K.__workletHash = 9797123893952;
  K.__initData = sharedValue;
  const animatedReaction = tmpResult.useAnimatedReaction(L, K);
  const obj6 = { runOnJS: onBeginDragWorklet(onScrollWorklet[5]).runOnJS, updateCurrentActiveIndex };
  class U {
    constructor() {
      return closure_10.get();
    }
  }
  U.__closure = { pageIndex: sharedValue };
  U.__workletHash = 3363652844798;
  U.__initData = sharedValue1;
  class Q {
    constructor(arg0) {
      result = activeIndex.set(onEndDragWorklet);
      return;
    }
  }
  Q.__closure = { activeIndex };
  Q.__workletHash = 2303988655079;
  Q.__initData = items.length;
  const animatedReaction1 = onBeginDragWorklet(onScrollWorklet[5]).useAnimatedReaction(U, Q);
  function onPageChanged(AUTO_DISMISS) {
    if (ref != null) {
      current = ref.current;
      if (current != null) {
        current(AUTO_DISMISS);
      }
    }
  }
  if (cResult[2] === pagerRef) {
    if (cResult[3] === scrollTarget) {
      let tmp11 = cResult[4];
    }
    __initData3 = tmp11;
    if (cResult[5] === pageWidth) {
      if (cResult[6] === tmp11) {
        let tmp12 = cResult[7];
        let tmp13 = cResult[8];
      }
      const effect = obj5.useEffect(tmp12, tmp13);
      function re(arg0, width) {
        if (0 !== pageWidth) {
          const _Math = Math;
          const _Math2 = Math;
          const bound = Math.max(MathUtils.roundIfClose(arg0.x / pageWidth, 0.0001), 0);
          const result = sharedValue.set(Math.min(bound, MathUtils.roundIfClose(width.width / pageWidth, 0.0001) - 1));
          const result1 = sharedValue.get() % 1;
          let tmp4 = result1 === 0;
          if (result1 === 0) {
            value = sharedValue1.get();
            tmp4 = value !== sharedValue.get();
          }
          if (tmp4) {
            const result2 = sharedValue1.set(sharedValue.get());
            const tmp13Result = ReanimatedRexport2;
            ReanimatedRexport2.runOnJS(onPageChanged)(sharedValue.get());
            const runOnJSResult = ReanimatedRexport2.runOnJS(onPageChanged);
          }
        }
      }
      const obj7 = { pageWidth, pageIndex: sharedValue, roundIfClose: onBeginDragWorklet(tmp2[8]).roundIfClose, reportedPageIndex: sharedValue1, runOnJS: onBeginDragWorklet(tmp2[5]).runOnJS, onPageChanged };
      re.__closure = obj7;
      re.__workletHash = 7601802094880;
      re.__initData = sharedValue2;
      const obj8 = { onBeginDrag: null, onEndDrag: null, onMomentumEnd: null, onScroll: null };
      function le(arg0) {
        const result = scrollTarget.set(-1);
        if (onBeginDragWorklet != null) {
          tmp2(arg0);
        }
      }
      const obj9 = { scrollTarget, onBeginDragWorklet };
      le.__closure = obj9;
      le.__workletHash = 3327779393906;
      le.__initData = __initData;
      obj8.onBeginDrag = le;
      function ie(arg0) {
        if (onEndDragWorklet != null) {
          tmp(arg0);
        }
      }
      const obj10 = { onEndDragWorklet };
      ie.__closure = obj10;
      ie.__workletHash = 3007879580981;
      ie.__initData = __initData2;
      obj8.onEndDrag = ie;
      function oe(contentOffset) {
        contentOffset = contentOffset.contentOffset;
        if (-1 !== scrollTarget.get()) {
          if (0 === obj2.roundIfClose(contentOffset.x - scrollTarget.get(), 0.0001)) {
            const result = scrollTarget.set(-1);
          } else {
            value = scrollTarget.get();
            ReanimatedRexport2.runOnJS(closure_18)(value);
            const tmpResult = ReanimatedRexport2;
          }
          obj2 = MathUtils;
        }
        re(contentOffset, contentOffset.contentSize);
      }
      const obj11 = { scrollTarget, roundIfClose: onBeginDragWorklet(tmp2[8]).roundIfClose, runOnJS: onBeginDragWorklet(tmp2[5]).runOnJS, refreshScrollOffset: tmp11, resolvePageIndex: re };
      oe.__closure = obj11;
      oe.__workletHash = 2536156100149;
      oe.__initData = updateCurrentActiveIndex;
      obj8.onMomentumEnd = oe;
      function ae(arg0) {
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
                if (0 === obj3.roundIfClose(contentOffset.x - scrollTarget.get(), 0.0001)) {
                  const result4 = scrollTarget.set(-1);
                }
                obj3 = MathUtils;
              }
              re(contentOffset, contentSize);
            } else {
              const result5 = activeIndex.get() * pageWidth;
              ReanimatedRexport2.runOnJS(closure_18)(result5);
            }
          }
        }
      }
      const obj12 = { lastScrollOffsetX: null, onScrollWorklet: null, itemCount: null, pageWidth: null, activeIndex: null, runOnJS: null, refreshScrollOffset: null, scrollOverflow: null, scrollTarget: null, roundIfClose: null, resolvePageIndex: null };
      class L {
        constructor() {
          return activeIndex.get();
        }
      }
      obj12.onScrollWorklet = onScrollWorklet;
      obj12.itemCount = length;
      obj12.pageWidth = pageWidth;
      obj12.activeIndex = activeIndex;
      obj12.runOnJS = onBeginDragWorklet(tmp2[5]).runOnJS;
      obj12.refreshScrollOffset = tmp11;
      obj12.scrollOverflow = scrollOverflow;
      class K {
        constructor(arg0) {
          obj = closure_0(closure_2[5]);
          tmp = obj.runOnJS(updateCurrentActiveIndex)(onEndDragWorklet);
          return;
        }
      }
      obj12.roundIfClose = onBeginDragWorklet(tmp2[8]).roundIfClose;
      obj12.resolvePageIndex = re;
      ae.__closure = obj12;
      ae.__workletHash = 9770585444979;
      ae.__initData = onPageChanged;
      obj8.onScroll = ae;
      const animatedScrollHandler = onBeginDragWorklet(tmp2[5]).useAnimatedScrollHandler(obj8);
      if (cResult[9] !== pageWidth) {
        const obj13 = { flex: 1, width: pageWidth };
        cResult[9] = pageWidth;
        cResult[10] = obj13;
        let tmp22 = obj13;
      } else {
        tmp22 = cResult[10];
      }
      style = tmp22;
      class U {
        constructor() {
          return closure_10.get();
        }
      }
      let result = tmp23 * pageWidth;
      if (cResult[13] !== result) {
        const point = { x: result, y: 0 };
        cResult[13] = result;
        cResult[14] = point;
        let tmp25 = point;
      } else {
        tmp25 = cResult[14];
      }
      const tmp28 = pagerRef(closure_54(activeIndex, state.pressedIndex), 2);
      const first = tmp28[0];
      class Q {
        constructor(arg0) {
          result = activeIndex.set(onEndDragWorklet);
          return;
        }
      }
      activePageRangeEnd = tmp30;
      const tmpResult7 = onBeginDragWorklet(tmp2[5]);
      function he() {
        let num = -1;
        if (-1 !== scrollTarget.get()) {
          num = MathUtils.roundIfClose(scrollTarget.get() / pageWidth, 0.0001);
        }
        return num;
      }
      const obj14 = { scrollTarget, roundIfClose: onBeginDragWorklet(tmp2[8]).roundIfClose, pageWidth };
      he.__closure = obj14;
      class Z {
        constructor(arg0) {
          result = scrollTarget.set(onEndDragWorklet);
          if (pagerRef != null) {
            current = pagerRef.current;
            if (current != null) {
              obj = { x: null, animated: false };
              obj.x = onEndDragWorklet;
              scrollToResult = current.scrollTo(obj);
            }
          }
          return;
        }
      }
      he.__initData = __initData3;
      const derivedValue = onBeginDragWorklet(tmp2[5]).useDerivedValue(he);
      const tmpResult8 = onBeginDragWorklet(tmp2[5]);
      class Se {
        constructor() {
          value = closure_10.get();
          rounded = Math.floor(value);
          rounded1 = Math.ceil(value);
          value1 = closure_23.get();
          bound1 = rounded1;
          bound = rounded;
          if (-1 !== value1) {
            _Math = Math;
            bound = Math.min(rounded, value1);
            _Math2 = Math;
            bound1 = Math.max(rounded1, value1);
          }
          items = [, ];
          items[0] = bound;
          items[1] = bound1;
          return items;
        }
      }
      const obj15 = { pageIndex: sharedValue, scrollTargetPageIndex: derivedValue };
      Se.__closure = obj15;
      Se.__workletHash = 9125733538935;
      Se.__initData = re;
      function ve(arg0, arg1) {
        if (!tmp) {
          const result = visiblePageRange.set(arg0);
        }
        tmp = null != arg1 && arg1[0] === arg0[0] && arg1[1] === arg0[1];
      }
      const obj16 = { visiblePageRange };
      ve.__closure = obj16;
      ve.__workletHash = 14106897948399;
      ve.__initData = style;
      const animatedReaction2 = onBeginDragWorklet(tmp2[5]).useAnimatedReaction(Se, ve);
      if (0 === pageWidth) {
        return null;
      } else {
        if (cResult[15] === tmp22) {
          if (cResult[16] === style) {
            let tmp36 = cResult[17];
          }
          if (cResult[18] === tmp30) {
            if (cResult[19] === first) {
              if (cResult[20] === tmp22) {
                if (cResult[21] === items) {
                  if (cResult[22] === sharedValue) {
                    if (cResult[23] === sharedValue1) {
                      if (cResult[24] === derivedValue) {
                        if (cResult[33] === bounces) {
                          if (cResult[34] === tmp25) {
                            if (cResult[35] === animatedScrollHandler) {
                              if (cResult[36] === pageWidth) {
                                if (cResult[37] === pagerRef) {
                                  if (cResult[38] === tmp36) {
                                    if (cResult[39] === tmp37) {
                                      let tmp41 = cResult[40];
                                    }
                                    if (cResult[41] === nativeGesture) {
                                      if (cResult[42] === tmp41) {
                                        let tmp45 = cResult[43];
                                      }
                                      return tmp45;
                                    }
                                    class Pe {
                                      constructor(arg0, arg1) {
                                        obj = { index: arg1, activePageRangeStart: closure_21, activePageRangeEnd: closure_22, reportedPageIndex: closure_11, pageIndex: closure_10, scrollTargetPageIndex: closure_23, style: closure_20, item: onEndDragWorklet };
                                        return jsx(SegmentedControlPage, obj, arg1);
                                      }
                                    }
                                    if (null != nativeGesture) {
                                      const obj17 = { gesture: nativeGesture, children: null };
                                      class Pe {
                                        constructor(arg0, arg1) {
                                          obj = { index: arg1, activePageRangeStart: closure_21, activePageRangeEnd: closure_22, reportedPageIndex: closure_11, pageIndex: closure_10, scrollTargetPageIndex: closure_23, style: closure_20, item: onEndDragWorklet };
                                          return jsx(SegmentedControlPage, obj, arg1);
                                        }
                                      }
                                      const tmp47 = scrollOverflow(onBeginDragWorklet(tmp2[10]).GestureDetector, obj17);
                                    }
                                    cResult[41] = nativeGesture;
                                    cResult[42] = tmp41;
                                    cResult[43] = tmp47;
                                    tmp45 = tmp47;
                                  }
                                }
                              }
                            }
                          }
                        }
                        const obj18 = { ref: null, style: null, contentOffset: null, keyboardShouldPersistTaps: "handled", showsHorizontalScrollIndicator: false, pagingEnabled: true, snapToInterval: null, snapToAlignment: "center", decelerationRate: "fast", centerContent: true, bounces: null, horizontal: true, accessibilityRole: "none", onScroll: null, disableIntervalMomentum: true, scrollEventThrottle: null, children: null };
                        class Pe {
                          constructor(arg0, arg1) {
                            obj = { index: arg1, activePageRangeStart: closure_21, activePageRangeEnd: closure_22, reportedPageIndex: closure_11, pageIndex: closure_10, scrollTargetPageIndex: closure_23, style: closure_20, item: onEndDragWorklet };
                            return jsx(SegmentedControlPage, obj, arg1);
                          }
                        }
                        obj18.style = tmp36;
                        obj18.contentOffset = tmp25;
                        obj18.snapToInterval = pageWidth;
                        obj18.bounces = bounces;
                        obj18.onScroll = animatedScrollHandler;
                        let num39;
                        if (tmpResult10.isIOS()) {
                          num39 = 32;
                        }
                        obj18.scrollEventThrottle = num39;
                        obj18.children = cResult[25];
                        const tmp42Result = scrollOverflow(ref, obj18);
                        cResult[33] = bounces;
                        cResult[34] = tmp25;
                        cResult[35] = animatedScrollHandler;
                        cResult[36] = pageWidth;
                        cResult[37] = pagerRef;
                        cResult[38] = tmp36;
                        cResult[39] = cResult[25];
                        cResult[40] = tmp42Result;
                        tmp41 = tmp42Result;
                        tmpResult10 = onBeginDragWorklet(tmp2[9]);
                      }
                    }
                  }
                }
              }
            }
          }
          if (cResult[26] === tmp30) {
            if (cResult[27] === first) {
              if (cResult[28] === tmp22) {
                if (cResult[29] === sharedValue) {
                  if (cResult[30] === sharedValue1) {
                    if (cResult[31] === derivedValue) {
                      let tmp38 = cResult[32];
                    }
                    const mapped = items.map(tmp38);
                    class Pe {
                      constructor(arg0, arg1) {
                        obj = { index: arg1, activePageRangeStart: closure_21, activePageRangeEnd: closure_22, reportedPageIndex: closure_11, pageIndex: closure_10, scrollTargetPageIndex: closure_23, style: closure_20, item: onEndDragWorklet };
                        return jsx(SegmentedControlPage, obj, arg1);
                      }
                    }
                    cResult[19] = first;
                    cResult[20] = tmp22;
                    cResult[21] = items;
                    cResult[22] = sharedValue;
                    cResult[23] = sharedValue1;
                    cResult[24] = derivedValue;
                    cResult[25] = mapped;
                  }
                }
              }
            }
          }
          class Pe {
            constructor(arg0, arg1) {
              obj = { index: arg1, activePageRangeStart: closure_21, activePageRangeEnd: closure_22, reportedPageIndex: closure_11, pageIndex: closure_10, scrollTargetPageIndex: closure_23, style: closure_20, item: onEndDragWorklet };
              return jsx(SegmentedControlPage, obj, arg1);
            }
          }
          cResult[26] = tmp30;
          cResult[27] = first;
          cResult[28] = tmp22;
          cResult[29] = sharedValue;
          cResult[30] = sharedValue1;
          cResult[31] = derivedValue;
          cResult[32] = Pe;
          tmp38 = Pe;
        }
        const items1 = [tmp22, ];
        cResult[15] = tmp22;
        cResult[16] = style;
        cResult[17] = items1;
        tmp36 = items1;
      }
      const tmpResult9 = onBeginDragWorklet(tmp2[5]);
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
    constructor(arg0) {
      result = scrollTarget.set(onEndDragWorklet);
      if (pagerRef != null) {
        current = pagerRef.current;
        if (current != null) {
          obj = { x: null, animated: false };
          obj.x = onEndDragWorklet;
          scrollToResult = current.scrollTo(obj);
        }
      }
      return;
    }
  }
  cResult[2] = pagerRef;
  cResult[3] = scrollTarget;
  tmp11 = Z;
  const tmpResult6 = onBeginDragWorklet(onScrollWorklet[5]);
}) : (function SegmentedControlPages(onEndDragWorklet) {
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
  ({ style, bounces } = onEndDragWorklet);
  const sharedValue = onBeginDragWorklet(onScrollWorklet[5]).useSharedValue(activeIndex.get());
  let obj = onBeginDragWorklet(onScrollWorklet[5]);
  const sharedValue1 = onBeginDragWorklet(onScrollWorklet[5]).useSharedValue(activeIndex.get());
  const length = items.length;
  let obj2 = onBeginDragWorklet(onScrollWorklet[5]);
  const sharedValue2 = onBeginDragWorklet(onScrollWorklet[5]).useSharedValue(undefined);
  scrollTarget.useRef(false);
  scrollTarget.useRef(activeIndex.get());
  const updateCurrentActiveIndex = scrollTarget.useCallback((current) => {
    closure_15.current = current;
  }, []);
  let obj3 = onBeginDragWorklet(onScrollWorklet[5]);
  class S {
    constructor() {
      return activeIndex.get();
    }
  }
  S.__closure = { activeIndex };
  S.__workletHash = 1395514015727;
  S.__initData = __initData;
  const fn = function v(arg0) {
    ReanimatedRexport2.runOnJS(callback)(arg0);
  };
  let obj4 = onBeginDragWorklet(onScrollWorklet[5]);
  fn.__closure = { runOnJS: onBeginDragWorklet(onScrollWorklet[5]).runOnJS, updateCurrentActiveIndex };
  fn.__workletHash = 12907997375351;
  fn.__initData = __initData;
  const animatedReaction = obj4.useAnimatedReaction(S, fn);
  const obj5 = { runOnJS: onBeginDragWorklet(onScrollWorklet[5]).runOnJS, updateCurrentActiveIndex };
  const fn2 = function p() {
    return sharedValue.get();
  };
  fn2.__closure = { pageIndex: sharedValue };
  fn2.__workletHash = 10499929423113;
  fn2.__initData = derivedValue;
  class I {
    constructor(arg0) {
      result = activeIndex.set(onEndDragWorklet);
      return;
    }
  }
  I.__closure = { activeIndex };
  I.__workletHash = 4431632836916;
  I.__initData = __initData4;
  const animatedReaction1 = onBeginDragWorklet(onScrollWorklet[5]).useAnimatedReaction(fn2, I);
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
    constructor(arg0, arg1) {
      tmp = pageWidth;
      if (0 !== pageWidth) {
        tmp10 = onEndDragWorklet;
        tmp11 = arg1;
        obj2 = closure_10;
        tmp12 = globalThis;
        _Math = Math;
        _Math2 = Math;
        tmp13 = closure_0;
        tmp14 = closure_2;
        obj3 = closure_0(closure_2[8]);
        num = 0.0001;
        bound = Math.max(obj3.roundIfClose(onEndDragWorklet.x / tmp, 0.0001), 0);
        obj4 = closure_0(closure_2[8]);
        num2 = 1;
        result = closure_10.set(Math.min(bound, obj4.roundIfClose(arg1.width / tmp, 0.0001) - 1));
        result1 = closure_10.get() % 1;
        tmp4 = result1 === 0;
        if (result1 === 0) {
          tmp2 = closure_11;
          value = closure_11.get();
          tmp4 = value !== obj2.get();
        }
        if (tmp4) {
          tmp5 = closure_11;
          result2 = closure_11.set(obj2.get());
          tmp13Result = tmp13(tmp14[5]);
          tmp7 = closure_17;
          runOnJSResult = tmp13Result.runOnJS(closure_17);
          tmp8Result = runOnJSResult(obj2.get());
        }
      }
      return;
    }
  }
  const obj6 = onBeginDragWorklet(onScrollWorklet[5]);
  Z.__closure = { pageWidth, pageIndex: sharedValue, roundIfClose: onBeginDragWorklet(onScrollWorklet[8]).roundIfClose, reportedPageIndex: sharedValue1, runOnJS: onBeginDragWorklet(onScrollWorklet[5]).runOnJS, onPageChanged: callback1 };
  Z.__workletHash = 8342205089427;
  Z.__initData = __initData5;
  const items4 = [callback1, sharedValue, pageWidth, sharedValue1];
  callback3 = scrollTarget.useCallback(Z, items4);
  const obj7 = { pageWidth, pageIndex: sharedValue, roundIfClose: onBeginDragWorklet(onScrollWorklet[8]).roundIfClose, reportedPageIndex: sharedValue1, runOnJS: onBeginDragWorklet(onScrollWorklet[5]).runOnJS, onPageChanged: callback1 };
  const obj9 = { onBeginDrag: null, onEndDrag: null, onMomentumEnd: null, onScroll: null };
  function re(arg0) {
    const result = scrollTarget.set(-1);
    if (onBeginDragWorklet != null) {
      tmp2(arg0);
    }
  }
  re.__closure = { scrollTarget, onBeginDragWorklet };
  re.__workletHash = 13774066389517;
  re.__initData = __initData6;
  obj9.onBeginDrag = re;
  function ne(arg0) {
    if (onEndDragWorklet != null) {
      tmp(arg0);
    }
  }
  ne.__closure = { onEndDragWorklet };
  ne.__workletHash = 1247100135210;
  ne.__initData = __initData7;
  obj9.onEndDrag = ne;
  function te(contentOffset) {
    contentOffset = contentOffset.contentOffset;
    if (-1 !== scrollTarget.get()) {
      if (0 === obj2.roundIfClose(contentOffset.x - scrollTarget.get(), 0.0001)) {
        const result = scrollTarget.set(-1);
      } else {
        value = scrollTarget.get();
        ReanimatedRexport2.runOnJS(callback2)(value);
        const tmpResult = ReanimatedRexport2;
      }
      obj2 = MathUtils;
    }
    callback3(contentOffset, contentOffset.contentSize);
  }
  const obj8 = onBeginDragWorklet(onScrollWorklet[5]);
  te.__closure = { scrollTarget, roundIfClose: onBeginDragWorklet(onScrollWorklet[8]).roundIfClose, runOnJS: onBeginDragWorklet(onScrollWorklet[5]).runOnJS, refreshScrollOffset: callback2, resolvePageIndex: callback3 };
  te.__workletHash = 7952328022238;
  te.__initData = __initData8;
  obj9.onMomentumEnd = te;
  function ee(arg0) {
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
            if (0 === obj3.roundIfClose(contentOffset.x - scrollTarget.get(), 0.0001)) {
              const result4 = scrollTarget.set(-1);
            }
            obj3 = MathUtils;
          }
          callback3(contentOffset, contentSize);
        } else {
          const result5 = activeIndex.get() * pageWidth;
          ReanimatedRexport2.runOnJS(callback2)(result5);
        }
      }
    }
  }
  const obj10 = { scrollTarget, roundIfClose: onBeginDragWorklet(onScrollWorklet[8]).roundIfClose, runOnJS: onBeginDragWorklet(onScrollWorklet[5]).runOnJS, refreshScrollOffset: callback2, resolvePageIndex: callback3 };
  ee.__closure = { lastScrollOffsetX: sharedValue2, onScrollWorklet, itemCount: length, pageWidth, activeIndex, runOnJS: onBeginDragWorklet(onScrollWorklet[5]).runOnJS, refreshScrollOffset: callback2, scrollOverflow, scrollTarget, roundIfClose: onBeginDragWorklet(onScrollWorklet[8]).roundIfClose, resolvePageIndex: callback3 };
  ee.__workletHash = 12685695320253;
  ee.__initData = __initData9;
  obj9.onScroll = ee;
  const items5 = [pageWidth];
  const obj11 = { lastScrollOffsetX: sharedValue2, onScrollWorklet, itemCount: length, pageWidth, activeIndex, runOnJS: onBeginDragWorklet(onScrollWorklet[5]).runOnJS, refreshScrollOffset: callback2, scrollOverflow, scrollTarget, roundIfClose: onBeginDragWorklet(onScrollWorklet[8]).roundIfClose, resolvePageIndex: callback3 };
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
  const animatedScrollHandler = obj8.useAnimatedScrollHandler(obj9);
  [c21, c22] = pagerRef(closure_54(activeIndex, state.pressedIndex), 2);
  const tmp16 = pagerRef(closure_54(activeIndex, state.pressedIndex), 2);
  function ae() {
    let num = -1;
    if (-1 !== scrollTarget.get()) {
      num = MathUtils.roundIfClose(scrollTarget.get() / pageWidth, 0.0001);
    }
    return num;
  }
  const obj12 = onBeginDragWorklet(onScrollWorklet[5]);
  ae.__closure = { scrollTarget, roundIfClose: onBeginDragWorklet(onScrollWorklet[8]).roundIfClose, pageWidth };
  ae.__workletHash = 3139503492995;
  ae.__initData = __initData10;
  derivedValue = obj12.useDerivedValue(ae);
  const obj13 = { scrollTarget, roundIfClose: onBeginDragWorklet(onScrollWorklet[8]).roundIfClose, pageWidth };
  function ie() {
    value = sharedValue.get();
    const rounded = Math.floor(value);
    const rounded1 = Math.ceil(value);
    value2 = derivedValue.get();
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
    if (!tmp) {
      const result = visiblePageRange.set(arg0);
    }
    tmp = null != arg1 && arg1[0] === arg0[0] && arg1[1] === arg0[1];
  }
  oe.__closure = { visiblePageRange };
  oe.__workletHash = 11577207813194;
  oe.__initData = __initData12;
  const animatedReaction2 = onBeginDragWorklet(onScrollWorklet[5]).useAnimatedReaction(ie, oe);
  if (0 === pageWidth) {
    return null;
  } else {
    const obj15 = { ref: pagerRef, style: null, contentOffset: null, keyboardShouldPersistTaps: "handled", showsHorizontalScrollIndicator: false, pagingEnabled: true, snapToInterval: null, snapToAlignment: "center", decelerationRate: "fast", centerContent: true, bounces: null, horizontal: true, accessibilityRole: "none", onScroll: null, disableIntervalMomentum: true, scrollEventThrottle: null, children: null };
    const items7 = [memo, style];
    obj15.style = items7;
    obj15.contentOffset = memo1;
    obj15.snapToInterval = pageWidth;
    obj15.bounces = bounces;
    obj15.onScroll = animatedScrollHandler;
    let num;
    if (tmpResult.isIOS()) {
      num = 32;
    }
    obj15.scrollEventThrottle = num;
    obj15.children = items.map((item, index) => <closure_47 key={index} index={index} activePageRangeStart={activePageRangeStart} activePageRangeEnd={activePageRangeEnd} reportedPageIndex={sharedValue1} pageIndex={sharedValue} scrollTargetPageIndex={derivedValue} style={memo} item={item} />);
    const tmp23Result = scrollOverflow(onPageChangeRef, obj15);
    let tmp23Result2 = tmp23Result;
    if (null != nativeGesture) {
      const obj16 = { gesture: nativeGesture, children: tmp23Result };
      tmp23Result2 = tmp23(tmp(tmp2[10]).GestureDetector, obj16);
    }
    return tmp23Result2;
  }
  const obj14 = onBeginDragWorklet(onScrollWorklet[5]);
});