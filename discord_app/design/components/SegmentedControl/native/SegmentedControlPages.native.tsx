// === Module 14944: SegmentedControlPages ===

// Module 14944 (SegmentedControlPages)
import PlatformUtils from "PlatformUtils" /* 1380 */;
import setAccessibilityFocus from "setAccessibilityFocus" /* 6331 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import module_1655 from "module_1655" /* 1655 */;

const require = globalThis.__r;

require = fn;
function SegmentedControlPage(reportedPageIndex) {
  reportedPageIndex = reportedPageIndex.reportedPageIndex;
  const index = reportedPageIndex.index;
  const activePageRangeStart = reportedPageIndex.activePageRangeStart;
  const activePageRangeEnd = reportedPageIndex.activePageRangeEnd;
  ({ pageIndex, scrollTargetPageIndex, item } = reportedPageIndex);
  const merged = Object.assign(reportedPageIndex, Object.assign({ reportedPageIndex: 0, pageIndex: 0, scrollTargetPageIndex: 0, index: 0, item: 0, activePageRangeStart: 0, activePageRangeEnd: 0 }));
  let accessibilityElementsHidden;
  let ref;
  items = [closure_19, pageIndex, index, scrollTargetPageIndex];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp4, tmp5, tmp6, tmp7] = items;
  class SegmentedControlPagesNativeTsx13 {
    constructor() {
      obj = closure_0;
      tmp = closure_1;
      tmp2 = Math.floor(closure_0.get()) === closure_1;
      if (!tmp2) {
        _Math = Math;
        tmp2 = Math.ceil(obj.get()) === tmp;
      }
      if (!tmp2) {
        tmp3 = closure_2;
        tmp2 = closure_2.get() === tmp;
      }
      return tmp2;
    }
  }
  const items1 = [tmp5, tmp6, tmp7];
  SegmentedControlPagesNativeTsx13.__closure = items1;
  SegmentedControlPagesNativeTsx13.__workletHash = 8284708217376;
  SegmentedControlPagesNativeTsx13.__initData = tmp4;
  const derivedValue = require("module_1655").useDerivedValue(SegmentedControlPagesNativeTsx13);
  let obj = require("module_1655");
  const items2 = [closure_20, reportedPageIndex, index];
  _require = undefined;
  importDefault = undefined;
  [tmp9, tmp10, tmp11] = items2;
  class SegmentedControlPagesNativeTsx14 {
    constructor() {
      pointerEvents = "box-none";
      if (closure_0.get() !== closure_1) {
        pointerEvents = "none";
      }
      return { pointerEvents };
    }
  }
  const items3 = [tmp10, tmp11];
  SegmentedControlPagesNativeTsx14.__closure = items3;
  SegmentedControlPagesNativeTsx14.__workletHash = 17363978333434;
  SegmentedControlPagesNativeTsx14.__initData = tmp9;
  const animatedProps = require("module_1655").useAnimatedProps(SegmentedControlPagesNativeTsx14);
  const tmp14 = activePageRangeEnd(accessibilityElementsHidden.useState(() => _undefined.get() !== c1), 2);
  accessibilityElementsHidden = tmp14[0];
  const tmp13 = activePageRangeEnd;
  const tmp2Result = require("module_1655");
  const items4 = [closure_21, reportedPageIndex, index];
  _require = undefined;
  importDefault = undefined;
  [tmp16, tmp17, tmp18] = items4;
  class SegmentedControlPagesNativeTsx15 {
    constructor() {
      return closure_0.get() !== closure_1;
    }
  }
  const items5 = [tmp17, tmp18];
  SegmentedControlPagesNativeTsx15.__closure = items5;
  SegmentedControlPagesNativeTsx15.__workletHash = 2423172957373;
  SegmentedControlPagesNativeTsx15.__initData = tmp16;
  const items6 = [closure_22, require("module_1708").scheduleOnRN, tmp14[1]];
  _require = undefined;
  importDefault = undefined;
  [tmp19, tmp20, tmp21] = items6;
  class SegmentedControlPagesNativeTsx16 {
    constructor(arg0) {
      tmp = closure_0(closure_1, reportedPageIndex);
      return;
    }
  }
  const items7 = [tmp20, tmp21];
  SegmentedControlPagesNativeTsx16.__closure = items7;
  SegmentedControlPagesNativeTsx16.__workletHash = 13860997207969;
  SegmentedControlPagesNativeTsx16.__initData = tmp19;
  const animatedReaction = require("module_1655").useAnimatedReaction(SegmentedControlPagesNativeTsx15, SegmentedControlPagesNativeTsx16);
  obj3.useRef(null);
  ref = obj3.useRef(accessibilityElementsHidden);
  const items8 = [accessibilityElementsHidden];
  const effect = obj3.useEffect(() => {
    let current = ref.current;
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
  }, items8);
  const tmp2Result4 = require("module_1655");
  const items9 = [closure_23, derivedValue];
  _require = undefined;
  [tmp25, tmp26] = items9;
  class SegmentedControlPagesNativeTsx17 {
    constructor() {
      display = "none";
      if (closure_0.get()) {
        display = "flex";
      }
      return { display, flex: 1 };
    }
  }
  const items10 = [tmp26];
  SegmentedControlPagesNativeTsx17.__closure = items10;
  SegmentedControlPagesNativeTsx17.__workletHash = 15945321321692;
  SegmentedControlPagesNativeTsx17.__initData = tmp25;
  const animatedStyle = require("module_1655").useAnimatedStyle(SegmentedControlPagesNativeTsx17);
  const tmp2Result5 = require("module_1655");
  [tmp29, tmp30] = tmp13(accessibilityElementsHidden.useState(() => {
    let tmp2 = c1 >= _undefined3.get();
    if (tmp2) {
      tmp2 = c1 <= activePageRangeEnd.get();
    }
    return !tmp2;
  }), 2);
  const tmp13Result = tmp13(accessibilityElementsHidden.useState(() => {
    let tmp2 = c1 >= _undefined3.get();
    if (tmp2) {
      tmp2 = c1 <= activePageRangeEnd.get();
    }
    return !tmp2;
  }), 2);
  const items11 = [closure_24, activePageRangeStart, activePageRangeEnd];
  _require = undefined;
  importDefault = undefined;
  [tmp31, tmp32, tmp33] = items11;
  class SegmentedControlPagesNativeTsx18 {
    constructor() {
      items = [, ];
      items[0] = closure_0.get();
      items[1] = closure_1.get();
      return items;
    }
  }
  const items12 = [tmp32, tmp33];
  SegmentedControlPagesNativeTsx18.__closure = items12;
  SegmentedControlPagesNativeTsx18.__workletHash = 10512750394690;
  SegmentedControlPagesNativeTsx18.__initData = tmp31;
  const items13 = [closure_25, index, require("module_1708").scheduleOnRN, tmp30];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp34, tmp35, tmp36, tmp37] = items13;
  class SegmentedControlPagesNativeTsx19 {
    constructor(arg0) {
      [tmp, tmp2] = reportedPageIndex;
      tmp5 = closure_0 >= tmp;
      tmp3 = closure_1;
      tmp4 = closure_2;
      if (tmp5) {
        tmp5 = closure_0 <= tmp2;
      }
      tmp3Result = tmp3(tmp4, !tmp5);
      return;
    }
  }
  const items14 = [tmp35, tmp36, tmp37];
  SegmentedControlPagesNativeTsx19.__closure = items14;
  SegmentedControlPagesNativeTsx19.__workletHash = 9520394351574;
  SegmentedControlPagesNativeTsx19.__initData = tmp34;
  const animatedReaction1 = require("module_1655").useAnimatedReaction(SegmentedControlPagesNativeTsx18, SegmentedControlPagesNativeTsx19);
  let obj2 = { ref };
  const merged1 = Object.assign(merged);
  obj2.animatedProps = animatedProps;
  let str = "auto";
  if (accessibilityElementsHidden) {
    str = "no-hide-descendants";
  }
  obj2.importantForAccessibility = str;
  obj2.accessibilityElementsHidden = accessibilityElementsHidden;
  const obj4 = { freeze: tmp29, children: ref(module_1655.View, { style: animatedStyle, children: item.page }) };
  obj2.children = ref(require("Suspender").Freeze, obj4);
  return ref(module_1655.View, obj2, index);
}
let jsx = fn(21).jsx;
let closure_6 = module_1655.createAnimatedComponent(fn(17).ScrollView);
let closure_7 = { code: "(function SegmentedControlPagesNativeTsx1(){let[activeIndex]=this.__closure;return activeIndex.get();})" };
let closure_8 = { code: "(function SegmentedControlPagesNativeTsx2(value){let[scheduleOnRN,updateCurrentActiveIndex]=this.__closure;scheduleOnRN(updateCurrentActiveIndex,value);})" };
let closure_9 = { code: "(function SegmentedControlPagesNativeTsx3(){let[pageIndex]=this.__closure;return pageIndex.get();})" };
let closure_10 = { code: "(function SegmentedControlPagesNativeTsx4(value){let[activeIndex]=this.__closure;activeIndex.set(value);})" };
let closure_11 = { code: "(function SegmentedControlPagesNativeTsx5(contentOffset,contentSize){let[pageWidth,pageIndex,roundIfClose,reportedPageIndex,scheduleOnRN,onPageChanged]=this.__closure;if(pageWidth===0){return;}pageIndex.set(Math.min(Math.max(roundIfClose(contentOffset.x/pageWidth,1e-4),0),roundIfClose(contentSize.width/pageWidth,1e-4)-1));const pageFullyVisible=pageIndex.get()%1===0;if(pageFullyVisible&&reportedPageIndex.get()!==pageIndex.get()){reportedPageIndex.set(pageIndex.get());scheduleOnRN(onPageChanged,pageIndex.get());}})" };
let closure_12 = { code: "(function SegmentedControlPagesNativeTsx6(event){let[scrollTarget,onBeginDragWorklet]=this.__closure;var _onBeginDragWorklet;scrollTarget.set(-1);(_onBeginDragWorklet=onBeginDragWorklet)===null||_onBeginDragWorklet===void 0||_onBeginDragWorklet(event);})" };
let closure_13 = { code: "(function SegmentedControlPagesNativeTsx7(event){let[onEndDragWorklet]=this.__closure;var _onEndDragWorklet;(_onEndDragWorklet=onEndDragWorklet)===null||_onEndDragWorklet===void 0||_onEndDragWorklet(event);})" };
let closure_14 = { code: "(function SegmentedControlPagesNativeTsx8({contentOffset:contentOffset,contentSize:contentSize}){let[scrollTarget,roundIfClose,scheduleOnRN,refreshScrollOffset,resolvePageIndex]=this.__closure;if(scrollTarget.get()!==-1){const hasReachedTarget=roundIfClose(contentOffset.x-scrollTarget.get(),1e-4)===0;if(hasReachedTarget){scrollTarget.set(-1);}else{const page=scrollTarget.get();scheduleOnRN(refreshScrollOffset,page);}}resolvePageIndex(contentOffset,contentSize);})" };
let closure_15 = { code: "(function SegmentedControlPagesNativeTsx9(event){let[lastScrollOffsetX,onScrollWorklet,itemCount,pageWidth,activeIndex,scheduleOnRN,refreshScrollOffset,scrollOverflow,scrollTarget,roundIfClose,resolvePageIndex]=this.__closure;var _onScrollWorklet;const{contentOffset:contentOffset,contentSize:contentSize}=event;if(contentSize.width===0){return;}if(lastScrollOffsetX.get()===contentOffset.x){return;}lastScrollOffsetX.set(contentOffset.x);(_onScrollWorklet=onScrollWorklet)===null||_onScrollWorklet===void 0||_onScrollWorklet(event);const expectedContentSize=itemCount*pageWidth;if(Math.round(expectedContentSize)%Math.round(contentSize.width)!==0){const page=activeIndex.get()*pageWidth;scheduleOnRN(refreshScrollOffset,page);return;}if(contentOffset.x<0){scrollOverflow.set(contentOffset.x);}else if(contentOffset.x>contentSize.width-pageWidth){scrollOverflow.set(contentOffset.x-(contentSize.width-pageWidth));}else{scrollOverflow.set(0);}if(scrollTarget.get()!==-1){const hasReachedTarget=roundIfClose(contentOffset.x-scrollTarget.get(),1e-4)===0;if(hasReachedTarget){scrollTarget.set(-1);}else{return;}}resolvePageIndex(contentOffset,contentSize);})" };
let closure_16 = { code: "(function SegmentedControlPagesNativeTsx10(){let[scrollTarget,roundIfClose,pageWidth]=this.__closure;if(scrollTarget.get()===-1){return-1;}return roundIfClose(scrollTarget.get()/pageWidth,1e-4);})" };
let closure_17 = { code: "(function SegmentedControlPagesNativeTsx11(){let[pageIndex,scrollTargetPageIndex]=this.__closure;const idx=pageIndex.get();let lo=Math.floor(idx);let hi=Math.ceil(idx);const target=scrollTargetPageIndex.get();if(target!==-1){lo=Math.min(lo,target);hi=Math.max(hi,target);}return[lo,hi];})" };
let closure_18 = { code: "(function SegmentedControlPagesNativeTsx12(range,prev){let[visiblePageRange]=this.__closure;if(prev==null||prev[0]!==range[0]||prev[1]!==range[1]){visiblePageRange.set(range);}})" };
let closure_19 = { code: "(function SegmentedControlPagesNativeTsx13(){let[pageIndex,index,scrollTargetPageIndex]=this.__closure;if(Math.floor(pageIndex.get())===index||Math.ceil(pageIndex.get())===index){return true;}if(scrollTargetPageIndex.get()===index){return true;}return false;})" };
let closure_20 = { code: "(function SegmentedControlPagesNativeTsx14(){let[reportedPageIndex,index]=this.__closure;const isHidden=reportedPageIndex.get()!==index;return{pointerEvents:isHidden?'none':'box-none'};})" };
let closure_21 = { code: "(function SegmentedControlPagesNativeTsx15(){let[reportedPageIndex,index]=this.__closure;return reportedPageIndex.get()!==index;})" };
let closure_22 = { code: "(function SegmentedControlPagesNativeTsx16(hidden){let[scheduleOnRN,setIsAccessibilityHidden]=this.__closure;scheduleOnRN(setIsAccessibilityHidden,hidden);})" };
let closure_23 = { code: "(function SegmentedControlPagesNativeTsx17(){let[isVisibleOnScreen]=this.__closure;return{display:isVisibleOnScreen.get()?'flex':'none',flex:1};})" };
let closure_24 = { code: "(function SegmentedControlPagesNativeTsx18(){let[activePageRangeStart,activePageRangeEnd]=this.__closure;return[activePageRangeStart.get(),activePageRangeEnd.get()];})" };
let closure_25 = { code: "(function SegmentedControlPagesNativeTsx19([start,end]){let[index,scheduleOnRN,setFreeze]=this.__closure;const isInActiveRange=index>=start&&index<=end;scheduleOnRN(setFreeze,!isInActiveRange);})" };
let closure_27 = { code: "(function SegmentedControlPagesNativeTsx20(min,max){let[activePageRangeStart,activePageRangeEnd]=this.__closure;activePageRangeStart.set(Math.min(activePageRangeStart.get(),min));activePageRangeEnd.set(Math.max(activePageRangeEnd.get(),max));})" };
let closure_28 = { code: "(function SegmentedControlPagesNativeTsx21(){let[activeIndex,pressedIndex]=this.__closure;return{activeIndex:activeIndex.get(),pressedIndex:pressedIndex.get()};})" };
let closure_29 = { code: "(function SegmentedControlPagesNativeTsx22({activeIndex:activeIndex,pressedIndex:pressedIndex}){let[expandActivePageRange]=this.__closure;let min=activeIndex;let max=activeIndex;if(pressedIndex!==-1){min=Math.min(activeIndex,pressedIndex);max=Math.max(activeIndex,pressedIndex);}expandActivePageRange(Math.floor(min),Math.ceil(max));})" };
const size = fn(2);
let result = size.fileFinishedImporting("design/components/SegmentedControl/native/SegmentedControlPages.native.tsx");

export function SegmentedControlPages(arg0) {
  ({ state, nativeGesture } = arg0);
  c8 = undefined;
  let memo;
  c10 = undefined;
  c11 = undefined;
  let derivedValue;
  ({ items, activeIndex, pagerRef } = state);
  _require = pagerRef;
  const scrollTarget = state.scrollTarget;
  c1 = scrollTarget;
  const onPageChangeRef = state.onPageChangeRef;
  dependencyMap = onPageChangeRef;
  const pageWidth = state.pageWidth;
  c3 = pageWidth;
  ({ style, bounces, onBeginDragWorklet, onEndDragWorklet, onScrollWorklet } = arg0);
  ({ visiblePageRange, scrollOverflow, pressedIndex } = state);
  const sharedValue = require("module_1655").useSharedValue(activeIndex.get());
  noop = sharedValue;
  let obj = require("module_1655");
  const sharedValue1 = require("module_1655").useSharedValue(activeIndex.get());
  jsx = sharedValue1;
  const obj2 = require("module_1655");
  const sharedValue2 = require("module_1655").useSharedValue(undefined);
  c6 = noop.useRef(false);
  c7 = noop.useRef(activeIndex.get());
  const callback = noop.useCallback((current) => {
    c7.current = current;
  }, []);
  const obj3 = require("module_1655");
  const items1 = [c7, activeIndex];
  _require = undefined;
  [tmp7, tmp8] = items1;
  class SegmentedControlPagesNativeTsx1 {
    constructor() {
      return closure_0.get();
    }
  }
  const items2 = [tmp8];
  SegmentedControlPagesNativeTsx1.__closure = items2;
  SegmentedControlPagesNativeTsx1.__workletHash = 10084739164293;
  SegmentedControlPagesNativeTsx1.__initData = tmp7;
  const items3 = [c8, require("module_1708").scheduleOnRN, callback];
  _require = undefined;
  c1 = undefined;
  [tmp9, tmp10, tmp11] = items3;
  class SegmentedControlPagesNativeTsx2 {
    constructor(arg0) {
      tmp = closure_0(closure_1, arg0);
      return;
    }
  }
  const items4 = [tmp10, tmp11];
  SegmentedControlPagesNativeTsx2.__closure = items4;
  SegmentedControlPagesNativeTsx2.__workletHash = 8813808345172;
  SegmentedControlPagesNativeTsx2.__initData = tmp9;
  const animatedReaction = require("module_1655").useAnimatedReaction(SegmentedControlPagesNativeTsx1, SegmentedControlPagesNativeTsx2);
  const obj5 = require("module_1655");
  const items5 = [memo, sharedValue];
  _require = undefined;
  [tmp13, tmp14] = items5;
  class SegmentedControlPagesNativeTsx3 {
    constructor() {
      return closure_0.get();
    }
  }
  const items6 = [tmp14];
  SegmentedControlPagesNativeTsx3.__closure = items6;
  SegmentedControlPagesNativeTsx3.__workletHash = 6811370282727;
  SegmentedControlPagesNativeTsx3.__initData = tmp13;
  const items7 = [c10, activeIndex];
  _require = undefined;
  [tmp15, tmp16] = items7;
  class SegmentedControlPagesNativeTsx4 {
    constructor(arg0) {
      result = closure_0.set(arg0);
      return;
    }
  }
  const items8 = [tmp16];
  SegmentedControlPagesNativeTsx4.__closure = items8;
  SegmentedControlPagesNativeTsx4.__workletHash = 6338583262078;
  SegmentedControlPagesNativeTsx4.__initData = tmp15;
  const animatedReaction1 = require("module_1655").useAnimatedReaction(SegmentedControlPagesNativeTsx3, SegmentedControlPagesNativeTsx4);
  const items9 = [onPageChangeRef];
  const callback1 = obj4.useCallback((AUTO_DISMISS) => {
    if (ref != null) {
      const current = ref.current;
      if (current != null) {
        current(AUTO_DISMISS);
      }
    }
  }, items9);
  const items10 = [pagerRef, scrollTarget];
  const callback2 = obj4.useCallback((x) => {
    const result = _undefined2.set(x);
    if (_undefined != null) {
      const current = _undefined.current;
      if (current != null) {
        const obj = { x, animated: false };
        current.scrollTo(obj);
      }
    }
  }, items10);
  c8 = callback2;
  const items11 = [pageWidth, callback2];
  const effect = obj4.useEffect(() => {
    if (c3 > 0) {
      if (!_undefined4.current) {
        tmp2.current = true;
        if (_undefined5.current > 0) {
          _undefined6(_undefined5.current * tmp);
        }
      }
    }
  }, items11);
  const items12 = [c11, pageWidth, sharedValue, require("MathUtils").roundIfClose, sharedValue1, require("module_1708").scheduleOnRN, callback1];
  _require = undefined;
  c1 = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  noop = undefined;
  jsx = undefined;
  [tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27] = items12;
  class SegmentedControlPagesNativeTsx5 {
    constructor(arg0, arg1) {
      tmp = closure_0;
      if (0 !== closure_0) {
        tmp10 = arg0;
        tmp11 = arg1;
        obj = closure_1;
        tmp12 = globalThis;
        _Math = Math;
        _Math2 = Math;
        tmp13 = closure_2;
        num = 0.0001;
        bound = Math.max(closure_2(arg0.x / tmp, 0.0001), 0);
        num2 = 1;
        result = closure_1.set(Math.min(bound, closure_2(arg1.width / tmp, 0.0001) - 1));
        result1 = closure_1.get() % 1;
        tmp4 = result1 === 0;
        if (result1 === 0) {
          tmp2 = closure_3;
          value = closure_3.get();
          tmp4 = value !== obj.get();
        }
        if (tmp4) {
          tmp5 = closure_3;
          result2 = closure_3.set(obj.get());
          tmp7 = closure_4;
          tmp8 = closure_5;
          tmp9 = closure_4(closure_5, obj.get());
        }
      }
      return;
    }
  }
  const items13 = [tmp22, tmp23, tmp24, tmp25, tmp26, tmp27];
  SegmentedControlPagesNativeTsx5.__closure = items13;
  SegmentedControlPagesNativeTsx5.__workletHash = 6044712524276;
  SegmentedControlPagesNativeTsx5.__initData = tmp21;
  const items14 = [callback1, sharedValue, pageWidth, sharedValue1];
  const callback3 = obj4.useCallback(SegmentedControlPagesNativeTsx5, items14);
  const tmpResult = require("module_1655");
  const items15 = [derivedValue, scrollTarget, onBeginDragWorklet];
  _require = undefined;
  c1 = undefined;
  [tmp29, tmp30, tmp31] = items15;
  const obj6 = { onBeginDrag: null, onEndDrag: null, onMomentumEnd: null, onScroll: null };
  class SegmentedControlPagesNativeTsx6 {
    constructor(arg0) {
      result = closure_0.set(-1);
      if (closure_1 != null) {
        tmp3 = arg0;
        tmp2Result = tmp2(arg0);
      }
      return;
    }
  }
  const items16 = [tmp30, tmp31];
  SegmentedControlPagesNativeTsx6.__closure = items16;
  SegmentedControlPagesNativeTsx6.__workletHash = 10991210914123;
  SegmentedControlPagesNativeTsx6.__initData = tmp29;
  obj6.onBeginDrag = SegmentedControlPagesNativeTsx6;
  const items17 = [closure_13, onEndDragWorklet];
  _require = undefined;
  [tmp32, tmp33] = items17;
  class SegmentedControlPagesNativeTsx7 {
    constructor(arg0) {
      if (closure_0 != null) {
        tmp2 = arg0;
        tmpResult = tmp(arg0);
      }
      return;
    }
  }
  const items18 = [tmp33];
  SegmentedControlPagesNativeTsx7.__closure = items18;
  SegmentedControlPagesNativeTsx7.__workletHash = 10732648958284;
  SegmentedControlPagesNativeTsx7.__initData = tmp32;
  obj6.onEndDrag = SegmentedControlPagesNativeTsx7;
  const items19 = [closure_14, scrollTarget, require("MathUtils").roundIfClose, require("module_1708").scheduleOnRN, callback2, callback3];
  _require = undefined;
  c1 = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  noop = undefined;
  [tmp34, tmp35, tmp36, tmp37, tmp38, tmp39] = items19;
  class SegmentedControlPagesNativeTsx8 {
    constructor(arg0) {
      contentOffset = arg0.contentOffset;
      obj = closure_0;
      if (-1 !== closure_0.get()) {
        tmp = closure_1;
        num = 0.0001;
        num2 = 0;
        if (0 === closure_1(contentOffset.x - obj.get(), 0.0001)) {
          result = obj.set(-1);
        } else {
          tmp2 = closure_2;
          tmp3 = closure_3;
          tmp4 = closure_2(closure_3, obj.get());
        }
      }
      tmp6 = closure_4(contentOffset, arg0.contentSize);
      return;
    }
  }
  const items20 = [tmp35, tmp36, tmp37, tmp38, tmp39];
  SegmentedControlPagesNativeTsx8.__closure = items20;
  SegmentedControlPagesNativeTsx8.__workletHash = 1962375899423;
  SegmentedControlPagesNativeTsx8.__initData = tmp34;
  obj6.onMomentumEnd = SegmentedControlPagesNativeTsx8;
  const items21 = [closure_15, sharedValue2, onScrollWorklet, items.length, pageWidth, activeIndex, require("module_1708").scheduleOnRN, callback2, scrollOverflow, scrollTarget, require("MathUtils").roundIfClose, callback3];
  _require = undefined;
  c1 = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  noop = undefined;
  jsx = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  memo = undefined;
  c10 = undefined;
  [tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51] = items21;
  class SegmentedControlPagesNativeTsx9 {
    constructor(arg0) {
      ({ contentOffset, contentSize } = arg0);
      if (0 !== contentSize.width) {
        obj2 = closure_0;
        if (closure_0.get() !== contentOffset.x) {
          result = obj2.set(contentOffset.x);
          tmp22 = null;
          if (closure_1 != null) {
            tmp = tmp21(arg0);
          }
          tmp2 = globalThis;
          _Math = Math;
          tmp3 = closure_2;
          tmp4 = closure_3;
          _Math2 = Math;
          rounded = Math.round(closure_2 * closure_3);
          if (rounded % Math.round(contentSize.width) == 0) {
            if (contentOffset.x < 0) {
              tmp14 = closure_7;
              result1 = closure_7.set(contentOffset.x);
            } else if (contentOffset.x > contentSize.width - tmp4) {
              tmp12 = closure_7;
              result2 = closure_7.set(contentOffset.x - (contentSize.width - tmp4));
            } else {
              tmp10 = closure_7;
              result3 = closure_7.set(0);
            }
            obj = closure_8;
            num = -1;
            if (-1 !== closure_8.get()) {
              tmp16 = closure_9;
              num2 = 0.0001;
              if (0 === closure_9(contentOffset.x - obj.get(), 0.0001)) {
                result4 = obj.set(-1);
              } else {
                return;
              }
            }
            tmp18 = closure_10;
            tmp19 = closure_10(contentOffset, contentSize);
          } else {
            tmp6 = closure_4;
            tmp7 = closure_5;
            tmp8 = closure_6;
            tmp9 = closure_5(closure_6, closure_4.get() * tmp4);
          }
        }
      }
      return;
    }
  }
  const items22 = [tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51];
  SegmentedControlPagesNativeTsx9.__closure = items22;
  SegmentedControlPagesNativeTsx9.__workletHash = 1723748367859;
  SegmentedControlPagesNativeTsx9.__initData = tmp40;
  obj6.onScroll = SegmentedControlPagesNativeTsx9;
  const items23 = [pageWidth];
  const tmpResult8 = require("module_1655");
  memo = obj4.useMemo(() => ({ flex: 1, width }), items23);
  const items24 = [sharedValue, pageWidth];
  const memo1 = obj4.useMemo(() => {
    let num = pageIndex.get();
    if (num == null) {
      num = 0;
    }
    const point = { x: num * c3, y: 0 };
    return point;
  }, items24);
  const animatedScrollHandler = require("module_1655").useAnimatedScrollHandler(obj6);
  const sharedValue3 = require("module_1655").useSharedValue(activeIndex.get());
  const tmpResult9 = require("module_1655");
  const sharedValue4 = require("module_1655").useSharedValue(activeIndex.get());
  const items25 = [closure_27, sharedValue3, sharedValue4];
  _require = undefined;
  c1 = undefined;
  [tmp57, tmp58, tmp59] = items25;
  class SegmentedControlPagesNativeTsx20 {
    constructor(arg0, arg1) {
      result = closure_0.set(Math.min(closure_0.get(), arg0));
      result1 = closure_1.set(Math.max(closure_1.get(), arg1));
      return;
    }
  }
  const items26 = [tmp58, tmp59];
  SegmentedControlPagesNativeTsx20.__closure = items26;
  SegmentedControlPagesNativeTsx20.__workletHash = 14021304354703;
  SegmentedControlPagesNativeTsx20.__initData = tmp57;
  const items27 = [sharedValue4, sharedValue3];
  const callback4 = obj4.useCallback(SegmentedControlPagesNativeTsx20, items27);
  const tmpResult10 = require("module_1655");
  const items28 = [closure_28, activeIndex, pressedIndex];
  _require = undefined;
  c1 = undefined;
  [tmp61, tmp62, tmp63] = items28;
  class SegmentedControlPagesNativeTsx21 {
    constructor() {
      obj = { activeIndex: closure_0.get(), pressedIndex: closure_1.get() };
      return obj;
    }
  }
  const items29 = [tmp62, tmp63];
  SegmentedControlPagesNativeTsx21.__closure = items29;
  SegmentedControlPagesNativeTsx21.__workletHash = 12186802847778;
  SegmentedControlPagesNativeTsx21.__initData = tmp61;
  const items30 = [closure_29, callback4];
  _require = undefined;
  [tmp64, tmp65] = items30;
  class SegmentedControlPagesNativeTsx22 {
    constructor(arg0) {
      ({ activeIndex, pressedIndex } = arg0);
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
      tmp5 = closure_0(rounded, Math.ceil(bound1));
      return;
    }
  }
  const items31 = [tmp65];
  SegmentedControlPagesNativeTsx22.__closure = items31;
  SegmentedControlPagesNativeTsx22.__workletHash = 3512419339638;
  SegmentedControlPagesNativeTsx22.__initData = tmp64;
  const animatedReaction2 = require("module_1655").useAnimatedReaction(SegmentedControlPagesNativeTsx21, SegmentedControlPagesNativeTsx22);
  const items32 = [sharedValue3, sharedValue4];
  const tmpResult11 = require("module_1655");
  [c10, c11] = c3(items32, 2);
  const tmp67 = c3(items32, 2);
  const items33 = [closure_16, scrollTarget, require("MathUtils").roundIfClose, pageWidth];
  _require = undefined;
  c1 = undefined;
  dependencyMap = undefined;
  [tmp68, tmp69, tmp70, tmp71] = items33;
  class SegmentedControlPagesNativeTsx10 {
    constructor() {
      obj = closure_0;
      num = -1;
      if (-1 !== closure_0.get()) {
        tmp = closure_1;
        tmp2 = closure_2;
        num2 = 0.0001;
        num = closure_1(obj.get() / closure_2, 0.0001);
      }
      return num;
    }
  }
  const items34 = [tmp69, tmp70, tmp71];
  SegmentedControlPagesNativeTsx10.__closure = items34;
  SegmentedControlPagesNativeTsx10.__workletHash = 2040972920411;
  SegmentedControlPagesNativeTsx10.__initData = tmp68;
  derivedValue = require("module_1655").useDerivedValue(SegmentedControlPagesNativeTsx10);
  const tmpResult12 = require("module_1655");
  const items35 = [closure_17, sharedValue, derivedValue];
  _require = undefined;
  c1 = undefined;
  [tmp73, tmp74, tmp75] = items35;
  class SegmentedControlPagesNativeTsx11 {
    constructor() {
      value = closure_0.get();
      rounded = Math.floor(value);
      rounded1 = Math.ceil(value);
      value1 = closure_1.get();
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
  const items36 = [tmp74, tmp75];
  SegmentedControlPagesNativeTsx11.__closure = items36;
  SegmentedControlPagesNativeTsx11.__workletHash = 11724241961838;
  SegmentedControlPagesNativeTsx11.__initData = tmp73;
  const items37 = [closure_18, visiblePageRange];
  _require = undefined;
  [tmp76, tmp77] = items37;
  class SegmentedControlPagesNativeTsx12 {
    constructor(arg0, arg1) {
      tmp = null != arg1 && arg1[0] === arg0[0] && arg1[1] === arg0[1];
      if (!tmp) {
        tmp2 = closure_0;
        result = closure_0.set(arg0);
      }
      return;
    }
  }
  const items38 = [tmp77];
  SegmentedControlPagesNativeTsx12.__closure = items38;
  SegmentedControlPagesNativeTsx12.__workletHash = 15097469489206;
  SegmentedControlPagesNativeTsx12.__initData = tmp76;
  const animatedReaction3 = require("module_1655").useAnimatedReaction(SegmentedControlPagesNativeTsx11, SegmentedControlPagesNativeTsx12);
  if (0 === pageWidth) {
    return null;
  } else {
    const obj7 = { ref: pagerRef, style: null, contentOffset: null, keyboardShouldPersistTaps: "handled", showsHorizontalScrollIndicator: false, pagingEnabled: true, snapToInterval: null, snapToAlignment: "center", decelerationRate: "fast", centerContent: true, bounces: null, horizontal: true, accessibilityRole: "none", onScroll: null, disableIntervalMomentum: true, scrollEventThrottle: null, children: null };
    const items39 = [memo, style];
    obj7.style = items39;
    obj7.contentOffset = memo1;
    obj7.snapToInterval = pageWidth;
    obj7.bounces = bounces;
    obj7.onScroll = animatedScrollHandler;
    let num;
    if (tmpResult14.isIOS()) {
      num = 32;
    }
    obj7.scrollEventThrottle = num;
    obj7.children = items.map((item, index) => <SegmentedControlPage key={index} index={index} activePageRangeStart={activePageRangeStart} activePageRangeEnd={activePageRangeEnd} reportedPageIndex={reportedPageIndex} pageIndex={pageIndex} scrollTargetPageIndex={derivedValue} style={memo} item={item} />);
    const tmp83Result = jsx(c6, obj7);
    let tmp83Result2 = tmp83Result;
    if (null != nativeGesture) {
      const obj8 = { gesture: nativeGesture, children: tmp83Result };
      tmp83Result2 = tmp83(tmp(5598).GestureDetector, obj8);
    }
    return tmp83Result2;
  }
  const tmpResult13 = require("module_1655");
}