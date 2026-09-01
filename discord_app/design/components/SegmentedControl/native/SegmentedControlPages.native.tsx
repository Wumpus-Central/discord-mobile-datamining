// discord_app/design/components/SegmentedControl/native/SegmentedControlPages.native.tsx
import closure_3 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../../_runtime/00019_noop.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import importDefaultResult from "../../../../modules/reanimated/ReanimatedRexport.tsx";

const require = arg1;
function SegmentedControlPage(children) {
  const reportedPageIndex = children.reportedPageIndex;
  const pageIndex = children.pageIndex;
  const scrollTargetPageIndex = children.scrollTargetPageIndex;
  const index = children.index;
  const activePageRangeStart = children.activePageRangeStart;
  const activePageRangeEnd = children.activePageRangeEnd;
  const merged = Object.assign(children, Object.create(null));
  let derivedValue;
  let first;
  closure_8 = undefined;
  let ref;
  closure_10 = undefined;
  closure_11 = undefined;
  let obj = reportedPageIndex(scrollTargetPageIndex[4]);
  const fn = function v() {
    let tmp2 = Math.floor(pageIndex.get()) === index;
    if (!tmp2) {
      const _Math = Math;
      tmp2 = Math.ceil(pageIndex.get()) === tmp;
    }
    if (!tmp2) {
      tmp2 = scrollTargetPageIndex.get() === tmp;
    }
    return tmp2;
  };
  fn.__closure = { pageIndex, index, scrollTargetPageIndex };
  fn.__workletHash = 6181538518841;
  fn.__initData = closure_19;
  derivedValue = obj.useDerivedValue(fn);
  obj1 = reportedPageIndex(scrollTargetPageIndex[4]);
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
  S.__workletHash = 13786543795395;
  S.__initData = closure_20;
  const animatedProps = obj1.useAnimatedProps(S);
  const tmp6 = index(
    activePageRangeStart.useState(() => reportedPageIndex.get() !== index),
    2,
  );
  first = tmp6[0];
  closure_8 = tmp8;
  let obj2 = reportedPageIndex(scrollTargetPageIndex[4]);
  const fn2 = function p() {
    return reportedPageIndex.get() !== index;
  };
  fn2.__closure = { reportedPageIndex, index };
  fn2.__workletHash = 7407561160388;
  fn2.__initData = closure_21;
  class I {
    constructor(arg0) {
      obj = reportedPageIndex(scrollTargetPageIndex[4]);
      tmp = obj.runOnJS(closure_8)(children);
      return;
    }
  }
  obj = { runOnJS: reportedPageIndex(scrollTargetPageIndex[4]).runOnJS, setIsAccessibilityHidden: tmp8 };
  I.__closure = obj;
  I.__workletHash = 1716421879381;
  I.__initData = closure_22;
  const animatedReaction = obj2.useAnimatedReaction(fn2, I);
  ref = activePageRangeStart.useRef(null);
  closure_10 = activePageRangeStart.useRef(first);
  let items = [first];
  const effect = activePageRangeStart.useEffect(() => {
    let current = ref.current;
    if (current) {
      current = !first;
    }
    ref.current = first;
    if (current) {
      let obj = reportedPageIndex(scrollTargetPageIndex[6]);
      current = obj.isIOS();
    }
    if (current) {
      obj = { ref: null, delay: 100 };
      obj[0] = ref;
      const result = reportedPageIndex(scrollTargetPageIndex[8]).setAccessibilityFocus(obj);
      const obj2 = reportedPageIndex(scrollTargetPageIndex[8]);
    }
  }, items);
  class A {
    constructor() {
      display = "none";
      if (closure_6.get()) {
        display = "flex";
      }
      return { display, flex: 1 };
    }
  }
  A.__closure = { isVisibleOnScreen: derivedValue };
  A.__workletHash = 10465509086469;
  A.__initData = closure_23;
  const animatedStyle = reportedPageIndex(scrollTargetPageIndex[4]).useAnimatedStyle(A);
  const tmp13 = index(
    activePageRangeStart.useState(() => {
      let tmp2 = index >= activePageRangeStart.get();
      if (tmp2) {
        tmp2 = index <= activePageRangeEnd.get();
      }
      return !tmp2;
    }),
    2,
  );
  closure_11 = tmp14;
  const obj5 = reportedPageIndex(scrollTargetPageIndex[4]);
  let tmp2 = reportedPageIndex;
  const fn3 = function y() {
    const items = [activePageRangeStart.get(), activePageRangeEnd.get()];
    return items;
  };
  fn3.__closure = { activePageRangeStart, activePageRangeEnd };
  fn3.__workletHash = 3980327308475;
  fn3.__initData = closure_24;
  class N {
    constructor(arg0) {
      [tmp, tmp2] = children;
      obj = reportedPageIndex(scrollTargetPageIndex[4]);
      tmp4 = index >= tmp;
      runOnJSResult = obj.runOnJS(closure_11);
      if (tmp4) {
        tmp4 = index <= tmp2;
      }
      tmp3Result = runOnJSResult(!tmp4);
      return;
    }
  }
  obj = { index, runOnJS: reportedPageIndex(scrollTargetPageIndex[4]).runOnJS, setFreeze: tmp14 };
  N.__closure = obj;
  N.__workletHash = 16675026816258;
  N.__initData = closure_25;
  const animatedReaction1 = reportedPageIndex(scrollTargetPageIndex[4]).useAnimatedReaction(fn3, N);
  obj1 = { ref };
  const merged1 = Object.assign(merged);
  obj1.animatedProps = animatedProps;
  let str = "auto";
  if (first) {
    str = "no-hide-descendants";
  }
  obj1.importantForAccessibility = str;
  obj1.accessibilityElementsHidden = first;
  obj2 = { freeze: tmp13[0], children: tmp16(pageIndex(tmp3[4]).View, obj3) };
  obj1.children = activePageRangeEnd(tmp2(scrollTargetPageIndex[9]).Freeze, obj2);
  return activePageRangeEnd(pageIndex(scrollTargetPageIndex[4]).View, obj1, index);
}
let closure_6 = importDefaultResult.createAnimatedComponent(require("get ActivityIndicator").ScrollView);
let closure_7 = {
  code: "function SegmentedControlPagesNativeTsx1(){const{activeIndex}=this.__closure;return activeIndex.get();}",
};
let closure_8 = {
  code: "function SegmentedControlPagesNativeTsx2(value){const{runOnJS,updateCurrentActiveIndex}=this.__closure;runOnJS(updateCurrentActiveIndex)(value);}",
};
let closure_9 = {
  code: "function SegmentedControlPagesNativeTsx3(){const{pageIndex}=this.__closure;return pageIndex.get();}",
};
let closure_10 = {
  code: "function SegmentedControlPagesNativeTsx4(value){const{activeIndex}=this.__closure;activeIndex.set(value);}",
};
let closure_11 = {
  code: "function SegmentedControlPagesNativeTsx5(contentOffset,contentSize){const{pageWidth,pageIndex,roundIfClose,reportedPageIndex,runOnJS,onPageChanged}=this.__closure;if(pageWidth===0){return;}pageIndex.set(Math.min(Math.max(roundIfClose(contentOffset.x/pageWidth,1e-4),0),roundIfClose(contentSize.width/pageWidth,1e-4)-1));const pageFullyVisible=pageIndex.get()%1===0;if(pageFullyVisible&&reportedPageIndex.get()!==pageIndex.get()){reportedPageIndex.set(pageIndex.get());runOnJS(onPageChanged)(pageIndex.get());}}",
};
let closure_12 = {
  code: "function SegmentedControlPagesNativeTsx6(event){const{scrollTarget,onBeginDragWorklet}=this.__closure;var _onBeginDragWorklet;scrollTarget.set(-1);(_onBeginDragWorklet=onBeginDragWorklet)===null||_onBeginDragWorklet===void 0||_onBeginDragWorklet(event);}",
};
let closure_13 = {
  code: "function SegmentedControlPagesNativeTsx7(event){const{onEndDragWorklet}=this.__closure;var _onEndDragWorklet;(_onEndDragWorklet=onEndDragWorklet)===null||_onEndDragWorklet===void 0||_onEndDragWorklet(event);}",
};
let closure_14 = {
  code: "function SegmentedControlPagesNativeTsx8({contentOffset:contentOffset,contentSize:contentSize}){const{scrollTarget,roundIfClose,runOnJS,refreshScrollOffset,resolvePageIndex}=this.__closure;if(scrollTarget.get()!==-1){const hasReachedTarget=roundIfClose(contentOffset.x-scrollTarget.get(),1e-4)===0;if(hasReachedTarget){scrollTarget.set(-1);}else{const page=scrollTarget.get();runOnJS(refreshScrollOffset)(page);}}resolvePageIndex(contentOffset,contentSize);}",
};
let closure_15 = {
  code: "function SegmentedControlPagesNativeTsx9(event){const{lastScrollOffsetX,onScrollWorklet,itemCount,pageWidth,activeIndex,runOnJS,refreshScrollOffset,scrollOverflow,scrollTarget,roundIfClose,resolvePageIndex}=this.__closure;var _onScrollWorklet;const{contentOffset:contentOffset,contentSize:contentSize}=event;if(contentSize.width===0){return;}if(lastScrollOffsetX.get()===contentOffset.x){return;}lastScrollOffsetX.set(contentOffset.x);(_onScrollWorklet=onScrollWorklet)===null||_onScrollWorklet===void 0||_onScrollWorklet(event);const expectedContentSize=itemCount*pageWidth;if(Math.round(expectedContentSize)%Math.round(contentSize.width)!==0){const page=activeIndex.get()*pageWidth;runOnJS(refreshScrollOffset)(page);return;}if(contentOffset.x<0){scrollOverflow.set(contentOffset.x);}else if(contentOffset.x>contentSize.width-pageWidth){scrollOverflow.set(contentOffset.x-(contentSize.width-pageWidth));}else{scrollOverflow.set(0);}if(scrollTarget.get()!==-1){const hasReachedTarget=roundIfClose(contentOffset.x-scrollTarget.get(),1e-4)===0;if(hasReachedTarget){scrollTarget.set(-1);}else{return;}}resolvePageIndex(contentOffset,contentSize);}",
};
let closure_16 = {
  code: "function SegmentedControlPagesNativeTsx10(){const{scrollTarget,roundIfClose,pageWidth}=this.__closure;if(scrollTarget.get()===-1){return-1;}return roundIfClose(scrollTarget.get()/pageWidth,1e-4);}",
};
let closure_17 = {
  code: "function SegmentedControlPagesNativeTsx11(){const{pageIndex,scrollTargetPageIndex}=this.__closure;const idx=pageIndex.get();let lo=Math.floor(idx);let hi=Math.ceil(idx);const target=scrollTargetPageIndex.get();if(target!==-1){lo=Math.min(lo,target);hi=Math.max(hi,target);}return[lo,hi];}",
};
let closure_18 = {
  code: "function SegmentedControlPagesNativeTsx12(range,prev){const{visiblePageRange}=this.__closure;if(prev==null||prev[0]!==range[0]||prev[1]!==range[1]){visiblePageRange.set(range);}}",
};
let closure_19 = {
  code: "function SegmentedControlPagesNativeTsx13(){const{pageIndex,index,scrollTargetPageIndex}=this.__closure;if(Math.floor(pageIndex.get())===index||Math.ceil(pageIndex.get())===index){return true;}if(scrollTargetPageIndex.get()===index){return true;}return false;}",
};
let closure_20 = {
  code: "function SegmentedControlPagesNativeTsx14(){const{reportedPageIndex,index}=this.__closure;const isHidden=reportedPageIndex.get()!==index;return{pointerEvents:isHidden?'none':'box-none'};}",
};
let closure_21 = {
  code: "function SegmentedControlPagesNativeTsx15(){const{reportedPageIndex,index}=this.__closure;return reportedPageIndex.get()!==index;}",
};
let closure_22 = {
  code: "function SegmentedControlPagesNativeTsx16(hidden){const{runOnJS,setIsAccessibilityHidden}=this.__closure;runOnJS(setIsAccessibilityHidden)(hidden);}",
};
let closure_23 = {
  code: "function SegmentedControlPagesNativeTsx17(){const{isVisibleOnScreen}=this.__closure;return{display:isVisibleOnScreen.get()?'flex':'none',flex:1};}",
};
let closure_24 = {
  code: "function SegmentedControlPagesNativeTsx18(){const{activePageRangeStart,activePageRangeEnd}=this.__closure;return[activePageRangeStart.get(),activePageRangeEnd.get()];}",
};
let closure_25 = {
  code: "function SegmentedControlPagesNativeTsx19([start,end]){const{index,runOnJS,setFreeze}=this.__closure;const isInActiveRange=index>=start&&index<=end;runOnJS(setFreeze)(!isInActiveRange);}",
};
let closure_27 = {
  code: "function SegmentedControlPagesNativeTsx20(min,max){const{activePageRangeStart,activePageRangeEnd}=this.__closure;activePageRangeStart.set(Math.min(activePageRangeStart.get(),min));activePageRangeEnd.set(Math.max(activePageRangeEnd.get(),max));}",
};
let closure_28 = {
  code: "function SegmentedControlPagesNativeTsx21(){const{activeIndex,pressedIndex}=this.__closure;return{activeIndex:activeIndex.get(),pressedIndex:pressedIndex.get()};}",
};
let closure_29 = {
  code: "function SegmentedControlPagesNativeTsx22({activeIndex:activeIndex,pressedIndex:pressedIndex}){const{expandActivePageRange}=this.__closure;let min=activeIndex;let max=activeIndex;if(pressedIndex!==-1){min=Math.min(activeIndex,pressedIndex);max=Math.max(activeIndex,pressedIndex);}expandActivePageRange(Math.floor(min),Math.ceil(max));}",
};
let result = require("set").fileFinishedImporting(
  "design/components/SegmentedControl/native/SegmentedControlPages.native.tsx",
);

export const SegmentedControlPages = function SegmentedControlPages(onEndDragWorklet) {
  ({ state, nativeGesture, onBeginDragWorklet } = onEndDragWorklet);
  activeIndex = onBeginDragWorklet;
  onEndDragWorklet = onEndDragWorklet.onEndDragWorklet;
  pressedIndex = onEndDragWorklet;
  const onScrollWorklet = onEndDragWorklet.onScrollWorklet;
  let sharedValue3 = onScrollWorklet;
  let sharedValue4;
  let callback4;
  let pagerRef;
  let scrollTarget;
  let scrollOverflow;
  onPageChangeRef = undefined;
  let pageWidth;
  let sharedValue;
  let sharedValue1;
  let length;
  let sharedValue2;
  closure_14 = undefined;
  closure_15 = undefined;
  let callback;
  let callback1;
  let callback2;
  let callback3;
  let memo;
  c21 = undefined;
  c22 = undefined;
  let derivedValue;
  ({ items, activeIndex } = state);
  sharedValue4 = activeIndex;
  const visiblePageRange = state.visiblePageRange;
  callback4 = visiblePageRange;
  pagerRef = state.pagerRef;
  scrollTarget = state.scrollTarget;
  scrollOverflow = state.scrollOverflow;
  ({ pressedIndex, onPageChangeRef } = state);
  pageWidth = state.pageWidth;
  ({ style, bounces } = onEndDragWorklet);
  let obj = activeIndex(sharedValue3[4]);
  sharedValue = obj.useSharedValue(activeIndex.get());
  obj1 = activeIndex(sharedValue3[4]);
  sharedValue1 = obj1.useSharedValue(activeIndex.get());
  length = items.length;
  let obj2 = activeIndex(sharedValue3[4]);
  sharedValue2 = obj2.useSharedValue(undefined);
  closure_14 = callback4.useRef(false);
  closure_15 = callback4.useRef(activeIndex.get());
  callback = callback4.useCallback((current) => {
    closure_15.current = current;
  }, []);
  let obj3 = activeIndex(sharedValue3[4]);
  class J {
    constructor() {
      return closure_3.get();
    }
  }
  J.__closure = { activeIndex };
  J.__workletHash = 4275537317596;
  J.__initData = scrollOverflow;
  class W {
    constructor(arg0) {
      obj = activeIndex(closure_2[4]);
      tmp = obj.runOnJS(closure_16)(onEndDragWorklet);
      return;
    }
  }
  obj = { runOnJS: activeIndex(sharedValue3[4]).runOnJS, updateCurrentActiveIndex: callback };
  W.__closure = obj;
  W.__workletHash = 1219187007872;
  W.__initData = onPageChangeRef;
  const animatedReaction = obj3.useAnimatedReaction(J, W);
  let obj5 = activeIndex(sharedValue3[4]);
  const fn = function z() {
    return sharedValue.get();
  };
  fn.__closure = { pageIndex: sharedValue };
  fn.__workletHash = 3363652844798;
  fn.__initData = pageWidth;
  class E {
    constructor(arg0) {
      result = closure_3.set(onEndDragWorklet);
      return;
    }
  }
  E.__closure = { activeIndex };
  E.__workletHash = 10225590895783;
  E.__initData = sharedValue;
  const animatedReaction1 = obj5.useAnimatedReaction(fn, E);
  items = [onPageChangeRef];
  callback1 = callback4.useCallback((AUTO_DISMISS) => {
    if (onPageChangeRef != null) {
      const current = onPageChangeRef.current;
      if (current != null) {
        current(AUTO_DISMISS);
      }
    }
  }, items);
  const items1 = [pagerRef, scrollTarget];
  callback2 = callback4.useCallback((arg0) => {
    const result = scrollTarget.set(arg0);
    if (pagerRef != null) {
      const current = pagerRef.current;
      if (current != null) {
        const obj = { x: null, animated: false };
        obj[0] = arg0;
        current.scrollTo(obj);
      }
    }
  }, items1);
  const items2 = [pageWidth, callback2];
  const effect = callback4.useEffect(() => {
    if (pageWidth > 0) {
      if (!ref.current) {
        tmp2.current = true;
        if (ref2.current > 0) {
          callback2(ref2.current * tmp);
        }
      }
    }
  }, items2);
  function te(arg0, width) {
    if (0 !== pageWidth) {
      const _Math = Math;
      const _Math2 = Math;
      const bound = Math.max(activeIndex(sharedValue3[5]).roundIfClose(arg0.x / tmp, 0.0001), 0);
      const obj3 = activeIndex(sharedValue3[5]);
      const tmp13 = activeIndex;
      const tmp14 = sharedValue3;
      const result = sharedValue.set(
        Math.min(bound, activeIndex(sharedValue3[5]).roundIfClose(width.width / tmp, 0.0001) - 1),
      );
      const result1 = sharedValue.get() % 1;
      let tmp4 = result1 === 0;
      if (result1 === 0) {
        const value = sharedValue1.get();
        tmp4 = value !== obj2.get();
      }
      if (tmp4) {
        const result2 = sharedValue1.set(obj2.get());
        const tmp13Result = tmp13(tmp14[4]);
        tmp13(tmp14[4]).runOnJS(callback1)(obj2.get());
        const runOnJSResult = tmp13(tmp14[4]).runOnJS(callback1);
      }
      const obj4 = activeIndex(sharedValue3[5]);
    }
  }
  obj = {
    pageWidth,
    pageIndex: sharedValue,
    roundIfClose: activeIndex(sharedValue3[5]).roundIfClose,
    reportedPageIndex: sharedValue1,
    runOnJS: activeIndex(sharedValue3[4]).runOnJS,
    onPageChanged: callback1,
  };
  te.__closure = obj;
  te.__workletHash = 11872880107296;
  te.__initData = sharedValue1;
  const items3 = [callback1, sharedValue, pageWidth, sharedValue1];
  callback3 = callback4.useCallback(te, items3);
  obj1 = { onBeginDrag: oe, onEndDrag: ae, onMomentumEnd: null, onScroll: null };
  oe = function oe(arg0) {
    const result = scrollTarget.set(-1);
    if (activeIndex != null) {
      tmp2(arg0);
    }
  };
  oe.__closure = { scrollTarget, onBeginDragWorklet };
  oe.__workletHash = 3327779393906;
  oe.__initData = length;
  ae = function ae(arg0) {
    if (pressedIndex != null) {
      tmp(arg0);
    }
  };
  ae.__closure = { onEndDragWorklet };
  ae.__workletHash = 14857102500821;
  ae.__initData = sharedValue2;
  function re(contentOffset) {
    contentOffset = contentOffset.contentOffset;
    if (-1 !== scrollTarget.get()) {
      if (0 === obj2.roundIfClose(contentOffset.x - obj.get(), 0.0001)) {
        const result = obj.set(-1);
      } else {
        const value = obj.get();
        tmp(tmp2[4]).runOnJS(callback2)(value);
        const tmpResult = tmp(tmp2[4]);
      }
      obj2 = activeIndex(sharedValue3[5]);
      tmp = activeIndex;
      tmp2 = sharedValue3;
    }
    callback3(contentOffset, contentOffset.contentSize);
  }
  obj2 = {
    scrollTarget,
    roundIfClose: activeIndex(sharedValue3[5]).roundIfClose,
    runOnJS: activeIndex(sharedValue3[4]).runOnJS,
    refreshScrollOffset: callback2,
    resolvePageIndex: callback3,
  };
  re.__closure = obj2;
  re.__workletHash = 10636475595563;
  re.__initData = closure_14;
  obj1[2] = re;
  function ne(arg0) {
    ({ contentOffset, contentSize } = arg0);
    if (0 !== contentSize.width) {
      if (sharedValue2.get() !== contentOffset.x) {
        const result = obj4.set(contentOffset.x);
        if (sharedValue3 != null) {
          tmp24(arg0);
        }
        const _Math = Math;
        const _Math2 = Math;
        const rounded = Math.round(length * pageWidth);
        if (rounded % Math.round(contentSize.width) == 0) {
          if (contentOffset.x < 0) {
            const result1 = scrollOverflow.set(contentOffset.x);
          } else if (contentOffset.x > contentSize.width - tmp4) {
            const result2 = scrollOverflow.set(contentOffset.x - (contentSize.width - tmp4));
          } else {
            const result3 = scrollOverflow.set(0);
          }
          if (-1 !== scrollTarget.get()) {
            if (0 === obj3.roundIfClose(contentOffset.x - obj2.get(), 0.0001)) {
              const result4 = obj2.set(-1);
            }
            obj3 = activeIndex(sharedValue3[5]);
          }
          callback3(contentOffset, contentSize);
        } else {
          const result5 = sharedValue4.get() * tmp4;
          activeIndex(sharedValue3[4]).runOnJS(callback2)(result5);
          const obj = activeIndex(sharedValue3[4]);
        }
      }
      obj4 = sharedValue2;
    }
  }
  obj3 = {
    lastScrollOffsetX: sharedValue2,
    onScrollWorklet,
    itemCount: length,
    pageWidth,
    activeIndex,
    runOnJS: activeIndex(sharedValue3[4]).runOnJS,
    refreshScrollOffset: callback2,
    scrollOverflow,
    scrollTarget,
    roundIfClose: activeIndex(sharedValue3[5]).roundIfClose,
    resolvePageIndex: callback3,
  };
  ne.__closure = obj3;
  ne.__workletHash = 9933659944135;
  ne.__initData = closure_15;
  obj1[3] = ne;
  const items4 = [pageWidth];
  const obj8 = activeIndex(sharedValue3[4]);
  memo = callback4.useMemo(() => ({ flex: 1, width: pageWidth }), items4);
  const items5 = [sharedValue, pageWidth];
  sharedValue3 = undefined;
  sharedValue4 = undefined;
  callback4 = undefined;
  const memo1 = callback4.useMemo(() => {
    let num = sharedValue.get();
    if (num == null) {
      num = 0;
    }
    return { x: num * pageWidth, y: 0 };
  }, items5);
  const animatedScrollHandler = activeIndex(sharedValue3[4]).useAnimatedScrollHandler(obj1);
  sharedValue3 = activeIndex(sharedValue3[4]).useSharedValue(activeIndex.get());
  const obj12 = activeIndex(sharedValue3[4]);
  sharedValue4 = activeIndex(sharedValue3[4]).useSharedValue(activeIndex.get());
  const fn2 = function u(arg0, arg1) {
    const result = sharedValue3.set(Math.min(sharedValue3.get(), arg0));
    const result1 = sharedValue4.set(Math.max(sharedValue4.get(), arg1));
  };
  fn2.__closure = { activePageRangeStart: sharedValue3, activePageRangeEnd: sharedValue4 };
  fn2.__workletHash = 2682934677750;
  fn2.__initData = closure_27;
  const items6 = [sharedValue4, sharedValue3];
  callback4 = callback4.useCallback(fn2, items6);
  const obj13 = activeIndex(sharedValue3[4]);
  class SegmentedControlPagesNativeTsx21 {
    constructor() {
      obj = { activeIndex: activeIndex.get(), pressedIndex: pressedIndex.get() };
      return obj;
    }
  }
  SegmentedControlPagesNativeTsx21.__closure = { activeIndex, pressedIndex };
  SegmentedControlPagesNativeTsx21.__workletHash = 16203677263547;
  SegmentedControlPagesNativeTsx21.__initData = closure_28;
  class SegmentedControlPagesNativeTsx22 {
    constructor(arg0) {
      ({ activeIndex, pressedIndex } = onEndDragWorklet);
      bound1 = activeIndex;
      bound = activeIndex;
      if (-1 !== pressedIndex) {
        tmp3 = globalThis;
        _Math = Math;
        bound = Math.min(activeIndex, pressedIndex);
        _Math2 = Math;
        bound1 = Math.max(activeIndex, pressedIndex);
      }
      rounded = Math.floor(bound);
      tmp5 = closure_4(rounded, Math.ceil(bound1));
      return;
    }
  }
  SegmentedControlPagesNativeTsx22.__closure = { expandActivePageRange: callback4 };
  SegmentedControlPagesNativeTsx22.__workletHash = 4886047206415;
  SegmentedControlPagesNativeTsx22.__initData = closure_29;
  const animatedReaction2 = activeIndex(sharedValue3[4]).useAnimatedReaction(
    SegmentedControlPagesNativeTsx21,
    SegmentedControlPagesNativeTsx22,
  );
  const items7 = [sharedValue3, sharedValue4];
  const obj14 = activeIndex(sharedValue3[4]);
  [c21, c22] = sharedValue4(items7, 2);
  const tmp20 = sharedValue4(items7, 2);
  function se() {
    let num = -1;
    if (-1 !== scrollTarget.get()) {
      num = activeIndex(sharedValue3[5]).roundIfClose(scrollTarget.get() / pageWidth, 0.0001);
      const obj2 = activeIndex(sharedValue3[5]);
    }
    return num;
  }
  const obj15 = activeIndex(sharedValue3[4]);
  se.__closure = { scrollTarget, roundIfClose: activeIndex(sharedValue3[5]).roundIfClose, pageWidth };
  se.__workletHash = 7742060999778;
  se.__initData = callback;
  derivedValue = obj15.useDerivedValue(se);
  let obj4 = { scrollTarget, roundIfClose: activeIndex(sharedValue3[5]).roundIfClose, pageWidth };
  function le() {
    let value = sharedValue.get();
    const rounded = Math.floor(value);
    const rounded1 = Math.ceil(value);
    value = derivedValue.get();
    let bound1 = rounded1;
    let bound = rounded;
    if (-1 !== value) {
      const _Math = Math;
      bound = Math.min(rounded, value);
      const _Math2 = Math;
      bound1 = Math.max(rounded1, value);
    }
    const items = [bound, bound1];
    return items;
  }
  le.__closure = { pageIndex: sharedValue, scrollTargetPageIndex: derivedValue };
  le.__workletHash = 9125733538935;
  le.__initData = callback1;
  function ie(arg0, arg1) {
    if (!tmp) {
      const result = callback4.set(arg0);
    }
  }
  ie.__closure = { visiblePageRange };
  ie.__workletHash = 14106897948399;
  ie.__initData = callback2;
  const animatedReaction3 = activeIndex(sharedValue3[4]).useAnimatedReaction(le, ie);
  if (0 === pageWidth) {
    return null;
  } else {
    obj5 = {
      ref: null,
      style: null,
      contentOffset: null,
      keyboardShouldPersistTaps: "handled",
      showsHorizontalScrollIndicator: false,
      pagingEnabled: true,
      snapToInterval: null,
      snapToAlignment: "center",
      decelerationRate: "fast",
      centerContent: true,
      bounces: null,
      horizontal: true,
      accessibilityRole: "none",
      onScroll: null,
      disableIntervalMomentum: true,
      scrollEventThrottle: null,
      children: null,
    };
    obj5[0] = pagerRef;
    const items8 = [memo, style];
    obj5[1] = items8;
    obj5[2] = memo1;
    obj5[6] = pageWidth;
    obj5[10] = bounces;
    obj5[13] = animatedScrollHandler;
    let num;
    if (tmpResult.isIOS()) {
      num = 32;
    }
    obj5[15] = num;
    obj5[16] = items.map((item, index) =>
      pagerRef(
        closure_1_26,
        {
          index,
          activePageRangeStart: c21,
          activePageRangeEnd: c22,
          reportedPageIndex: sharedValue1,
          pageIndex: sharedValue,
          scrollTargetPageIndex: derivedValue,
          style: memo,
          item,
        },
        index,
      ),
    );
    let tmp27Result = tmp27(scrollTarget, obj5);
    if (null != nativeGesture) {
      const obj6 = { gesture: null, children: null };
      obj6[0] = nativeGesture;
      obj6[1] = tmp27Result;
      tmp27Result = tmp27(tmp(tmp2[7]).GestureDetector, obj6);
    }
    return tmp27Result;
  }
  const obj17 = activeIndex(sharedValue3[4]);
};
