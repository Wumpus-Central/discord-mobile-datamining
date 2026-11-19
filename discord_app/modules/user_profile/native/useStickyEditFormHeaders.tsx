// === Module 15772: useStickyEditFormHeaders ===

// Module 15772 (useStickyEditFormHeaders)
import _mod1655 from "module_1655" /* 1655 */;
import _mod1708 from "module_1708" /* 1708 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = { code: "(function useStickyEditFormHeadersTsx1(event){let[scrollPosition,onScroll,scheduleOnRN,headerY,headerHiddenOffset,headerHeight]=this.__closure;const maxScrollY=Math.max(0,event.contentSize.height-event.layoutMeasurement.height);const currentY=Math.min(event.contentOffset.y,maxScrollY);const previousY=Math.min(scrollPosition.get(),maxScrollY);scrollPosition.set(event.contentOffset.y);if(onScroll!=null){scheduleOnRN(onScroll,event);}const stickStart=headerY.get();if(currentY<=stickStart){headerHiddenOffset.set(0);return;}const delta=currentY-Math.max(previousY,stickStart);headerHiddenOffset.set(Math.min(Math.max(headerHiddenOffset.get()+delta,0),headerHeight.get()));})" };
let closure_4 = { code: "(function useStickyEditFormHeadersTsx2(){let[scrollPosition,headerY,headerHiddenOffset]=this.__closure;const scrollY=scrollPosition.get();const stickStart=headerY.get();return scrollY>stickStart?scrollY-stickStart-headerHiddenOffset.get():0;})" };
let closure_5 = { code: "(function useStickyEditFormHeadersTsx3(){let[headerTranslateY]=this.__closure;return{transform:[{translateY:headerTranslateY.get()}]};})" };
let closure_6 = { code: "(function useStickyEditFormHeadersTsx4(){let[tabsY,scrollPosition,headerHeight,headerY,headerTranslateY]=this.__closure;const tabsTop=tabsY.get();if(tabsTop<=0){return 0;}const scrollY=scrollPosition.get();const height=headerHeight.get();const headerBottom=height>0?Math.max(0,headerY.get()+headerTranslateY.get()+height-scrollY):0;return Math.max(0,scrollY+headerBottom-tabsTop);})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/useStickyEditFormHeaders.tsx");

export default function useStickyEditFormHeaders(sharedValue, animatedRef, onScroll) {
  sharedValue = _mod1655.useSharedValue(0);
  const sharedValue1 = _mod1655.useSharedValue(0);
  const sharedValue2 = _mod1655.useSharedValue(0);
  const sharedValue3 = _mod1655.useSharedValue(0);
  const sharedValue4 = _mod1655.useSharedValue(0);
  const ref = noop.useRef(null);
  items = [_undefined4, sharedValue, onScroll, _mod1708.scheduleOnRN, sharedValue, sharedValue2, sharedValue1];
  c5 = undefined;
  [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15] = items;
  const obj8 = { onScroll: null };
  function useStickyEditFormHeadersTsx1(contentSize) {
    const bound = Math.max(0, contentSize.contentSize.height - contentSize.layoutMeasurement.height);
    const bound1 = Math.min(contentSize.contentOffset.y, bound);
    const bound2 = Math.min(_undefined.get(), bound);
    const result = _undefined.set(contentSize.contentOffset.y);
    if (null != c1) {
      _undefined3(tmp5, contentSize);
    }
    value = _undefined4.get();
    if (bound1 <= value) {
      const result1 = _undefined5.set(0);
    } else {
      const _Math = Math;
      const _Math2 = Math;
      const _Math3 = Math;
      const diff = bound1 - Math.max(bound2, value);
      const bound3 = Math.max(_undefined5.get() + diff, 0);
      const result2 = _undefined5.set(Math.min(bound3, _undefined6.get()));
    }
  }
  const items1 = [tmp10, tmp11, tmp12, tmp13, tmp14, tmp15];
  useStickyEditFormHeadersTsx1.__closure = items1;
  useStickyEditFormHeadersTsx1.__workletHash = 3468125991740;
  useStickyEditFormHeadersTsx1.__initData = tmp9;
  obj8.onScroll = useStickyEditFormHeadersTsx1;
  const animatedScrollHandler = _mod1655.useAnimatedScrollHandler(obj8);
  const items2 = [_undefined5, sharedValue, sharedValue, sharedValue2];
  [tmp17, tmp18, tmp19, tmp20] = items2;
  function useStickyEditFormHeadersTsx2() {
    value = _undefined.get();
    const value2 = _undefined2.get();
    let num = 0;
    if (value > value2) {
      const diff = value - value2;
      num = diff - _undefined3.get();
    }
    return num;
  }
  const items3 = [tmp18, tmp19, tmp20];
  useStickyEditFormHeadersTsx2.__closure = items3;
  useStickyEditFormHeadersTsx2.__workletHash = 2869064830561;
  useStickyEditFormHeadersTsx2.__initData = tmp17;
  const derivedValue = _mod1655.useDerivedValue(useStickyEditFormHeadersTsx2);
  const tmpResult = _mod1655;
  const items4 = [_undefined6, derivedValue];
  [tmp22, tmp23] = items4;
  function useStickyEditFormHeadersTsx3() {
    const obj = { transform: null };
    items = [{ translateY: _undefined.get() }];
    obj.transform = items;
    return obj;
  }
  const items5 = [tmp23];
  useStickyEditFormHeadersTsx3.__closure = items5;
  useStickyEditFormHeadersTsx3.__workletHash = 13231650278188;
  useStickyEditFormHeadersTsx3.__initData = tmp22;
  const animatedStyle = _mod1655.useAnimatedStyle(useStickyEditFormHeadersTsx3);
  const tmpResult3 = _mod1655;
  const items6 = [closure_6, sharedValue3, sharedValue, sharedValue1, sharedValue, derivedValue];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  [tmp25, tmp26, tmp27, tmp28, tmp29, tmp30] = items6;
  function useStickyEditFormHeadersTsx4() {
    value = _undefined.get();
    if (value <= 0) {
      return 0;
    } else {
      const value4 = _undefined2.get();
      const value5 = _undefined3.get();
      let num = 0;
      if (value5 > 0) {
        const _Math = Math;
        const value6 = _undefined4.get();
        num = Math.max(0, value6 + _undefined5.get() + value5 - value4);
      }
      const _Math2 = Math;
      return Math.max(0, value4 + num - value);
    }
  }
  const items7 = [tmp26, tmp27, tmp28, tmp29, tmp30];
  useStickyEditFormHeadersTsx4.__closure = items7;
  useStickyEditFormHeadersTsx4.__workletHash = 17221813634962;
  useStickyEditFormHeadersTsx4.__initData = tmp25;
  const items8 = [sharedValue, sharedValue1];
  const derivedValue1 = _mod1655.useDerivedValue(useStickyEditFormHeadersTsx4);
  const items9 = [sharedValue4];
  const callback = noop.useCallback((nativeEvent) => {
    const layout = nativeEvent.nativeEvent.layout;
    const result = _undefined2.set(layout.y);
    const result1 = _undefined3.set(layout.height);
  }, items8);
  const items10 = [animatedRef, sharedValue3];
  const callback1 = noop.useCallback((nativeEvent) => _undefined5.set(nativeEvent.nativeEvent.layout.height), items9);
  const tmpResult4 = _mod1655;
  return {
    headerStyle: animatedStyle,
    handleHeaderLayout: callback,
    tabsAnchorRef: ref,
    measureTabsY: noop.useCallback(() => {
      const current = _undefined.current;
      let innerViewRef;
      if (current != null) {
        innerViewRef = current.getInnerViewRef();
      }
      if (null != innerViewRef) {
        const current2 = _undefined6.current;
        if (current2 != null) {
          current2.measureLayout(innerViewRef, (arg0, arg1) => _undefined4.set(arg1));
        }
      }
    }, items10),
    tabsTranslateY: derivedValue1,
    handleTabsBarLayout: callback1,
    tabsBarHeight: sharedValue4,
    scrollHandler: animatedScrollHandler
  };
};