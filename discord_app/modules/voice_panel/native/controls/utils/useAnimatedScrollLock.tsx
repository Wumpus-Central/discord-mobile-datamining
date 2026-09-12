// === Module 12232: useAnimatedScrollLock ===

// Module 12232 (useAnimatedScrollLock)
import ReanimatedRexport from "ReanimatedRexport" /* 4373 */;
import noop from "module_19" /* 19 */;

require = fn;
const PlatformUtils = fn(1150);
let closure_3 = PlatformUtils.isAndroid();
let context = noop.createContext(null);
let closure_5 = { code: "function onBeginDrag_useAnimatedScrollLockTsx1(_,context){const{isDragScrolling}=this.__closure;context.momentumEndCount=0;isDragScrolling.set(true);}" };
const __initData = { code: "function onEndDrag_useAnimatedScrollLockTsx2(event){const{isDragScrolling,scrollLocked}=this.__closure;var _event$velocity$y,_event$velocity;isDragScrolling.set(false);if(Math.abs((_event$velocity$y=(_event$velocity=event.velocity)===null||_event$velocity===void 0?void 0:_event$velocity.y)!==null&&_event$velocity$y!==void 0?_event$velocity$y:0)===0){scrollLocked.set(false);}}" };
const __initData2 = { code: "function onMomentumEnd_useAnimatedScrollLockTsx3(event,context){const{IS_ANDROID,scrollLocked}=this.__closure;if(IS_ANDROID){var _context$momentumEndC;let count=(_context$momentumEndC=context===null||context===void 0?void 0:context.momentumEndCount)!==null&&_context$momentumEndC!==void 0?_context$momentumEndC:0;count+=1;if(count===3){scrollLocked.set(false);}else if(context!=null){context.momentumEndCount=count;}}else{scrollLocked.set(false);}}" };
const __initData3 = { code: "function onScroll_useAnimatedScrollLockTsx4(event){const{isDragScrolling,IS_ANDROID,scrollTo,scrollerRef,scrollOffsetValue,scrollLocked,onScrollHandler,runOnJS,onScrollHandlerWorkletized}=this.__closure;var _onScrollHandlerWorkl;const newScrollPosition=event.contentOffset.y;if(isDragScrolling.get()!==true){let scrollPosition=newScrollPosition;if(IS_ANDROID&&scrollPosition<0){scrollPosition=0;scrollTo(scrollerRef,0,0,false);}scrollOffsetValue.set(scrollPosition);}else{const isUp=newScrollPosition<scrollOffsetValue.get();if(scrollLocked.get()||isUp&&newScrollPosition<=0){if(!scrollLocked.get()){scrollLocked.set(true);}scrollTo(scrollerRef,0,0,false);scrollOffsetValue.set(0);}else{scrollOffsetValue.set(newScrollPosition);}}const{width:width,height:height}=event.layoutMeasurement;const{width:contentWidth,height:contentHeight}=event.contentSize;onScrollHandler!=null&&runOnJS(onScrollHandler)({width:width,height:height,offset:newScrollPosition,contentWidth:contentWidth,contentHeight:contentHeight});(_onScrollHandlerWorkl=onScrollHandlerWorkletized)===null||_onScrollHandlerWorkl===void 0||_onScrollHandlerWorkl({width:width,height:height,offset:newScrollPosition,contentWidth:contentWidth,contentHeight:contentHeight});}" };
const __initData4 = { code: "function useAnimatedScrollLockTsx5(){const{scrollLocked}=this.__closure;return{showsVerticalScrollIndicator:!scrollLocked.get()};}" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/controls/utils/useAnimatedScrollLock.tsx");

export const ControlsGestureScrollLock = context;
export const useAnimatedScrollLock = function useAnimatedScrollLock() {
  let obj = fn;
  if (fn === undefined) {
    obj = {};
  }
  const onScrollHandler = obj.onScrollHandler;
  const onScrollHandlerWorkletized = obj.onScrollHandlerWorkletized;
  let scrollLocked;
  let scrollOffsetValue;
  let isDragScrolling;
  let animatedRef;
  context = scrollLocked.useContext(isDragScrolling);
  let obj1 = onScrollHandler(onScrollHandlerWorkletized[2]);
  const sharedValue = obj1.useSharedValue(false);
  let obj2 = onScrollHandler(onScrollHandlerWorkletized[2]);
  const sharedValue1 = obj2.useSharedValue(0);
  const ref = scrollLocked.useRef(undefined);
  let gestureRef;
  const sharedValue2 = onScrollHandler(onScrollHandlerWorkletized[2]).useSharedValue(false);
  if (context != null) {
    gestureRef = context.gestureRef;
  }
  if (gestureRef == null) {
    gestureRef = ref;
  }
  scrollLocked = undefined;
  if (context != null) {
    scrollLocked = context.scrollLocked;
  }
  if (scrollLocked == null) {
    scrollLocked = sharedValue;
  }
  scrollOffsetValue = undefined;
  if (context != null) {
    scrollOffsetValue = context.scrollOffsetValue;
  }
  if (scrollOffsetValue == null) {
    scrollOffsetValue = sharedValue1;
  }
  isDragScrolling = undefined;
  if (context != null) {
    isDragScrolling = context.isDragScrolling;
  }
  if (isDragScrolling == null) {
    isDragScrolling = sharedValue2;
  }
  let tmp3Result = tmp3(tmp4[2]);
  animatedRef = tmp3Result.useAnimatedRef();
  obj = { onScroll: null, animatedProps: null, scrollerRef: null, gestureRef: null };
  tmp3Result = tmp3(tmp4[2]);
  obj = { onBeginDrag: null, onEndDrag: null, onMomentumEnd: null, onScroll: null };
  class D {
    constructor(arg0, arg1) {
      arg1.momentumEndCount = 0;
      result = closure_4.set(true);
      return;
    }
  }
  D.__closure = { isDragScrolling };
  D.__workletHash = 5670175593964;
  D.__initData = animatedRef;
  obj.onBeginDrag = D;
  fn = function k(velocity) {
    const result = isDragScrolling.set(false);
    velocity = velocity.velocity;
    let num;
    if (velocity != null) {
      num = velocity.y;
    }
    if (num == null) {
      num = 0;
    }
    if (0 === Math.abs(num)) {
      const result1 = scrollLocked.set(false);
    }
  };
  fn.__closure = { isDragScrolling, scrollLocked };
  fn.__workletHash = 5460992873286;
  fn.__initData = __initData;
  obj.onEndDrag = fn;
  const fn2 = function v(arg0, momentumEndCount) {
    if (closure_3) {
      let num;
      if (momentumEndCount != null) {
        num = momentumEndCount.momentumEndCount;
      }
      if (num == null) {
        num = 0;
      }
      const sum = num + 1;
      if (3 === sum) {
        const result = scrollLocked.set(false);
      } else if (null != momentumEndCount) {
        momentumEndCount.momentumEndCount = sum;
      }
    } else {
      const result1 = scrollLocked.set(false);
    }
  };
  obj1 = { IS_ANDROID: scrollOffsetValue, scrollLocked };
  fn2.__closure = obj1;
  fn2.__workletHash = 5278475045322;
  fn2.__initData = __initData2;
  obj.onMomentumEnd = fn2;
  class S {
    constructor(arg0) {
      y = fn.contentOffset.y;
      if (true !== closure_4.get()) {
        tmp9 = closure_3;
        if (closure_3) {
          num5 = 0;
          tmp9 = y < 0;
        }
        num6 = y;
        if (tmp9) {
          tmp10 = closure_0;
          tmp11 = closure_1;
          obj2 = closure_0(closure_1[2]);
          tmp12 = closure_5;
          flag2 = false;
          tmp13 = obj2;
          num7 = 0;
          num8 = 0;
          scrollToResult = obj2.scrollTo(closure_5, 0, 0, false);
          num6 = 0;
        }
        tmp15 = closure_3;
        result = closure_3.set(num6);
      } else {
        obj6 = closure_3;
        obj7 = closure_2;
        tmp23 = y < closure_3.get();
        if (closure_2.get()) {
          if (!obj7.get()) {
            result1 = obj7.set(true);
          }
          tmp3 = closure_0;
          tmp4 = closure_1;
          obj = closure_0(closure_1[2]);
          tmp5 = closure_5;
          flag = false;
          num2 = 0;
          tmp6 = obj;
          num3 = 0;
          num4 = 0;
          scrollToResult1 = obj.scrollTo(closure_5, 0, 0, false);
          result2 = obj6.set(0);
        } else {
          if (tmp23) {
            num = 0;
          }
          result3 = obj6.set(y);
        }
      }
      ({ width, height } = fn.layoutMeasurement);
      ({ width: width2, height: height2 } = fn.contentSize);
      if (null != onScrollHandler) {
        tmp18 = closure_0;
        tmp19 = closure_1;
        obj3 = closure_0(closure_1[2]);
        size = { width: null, height: null, offset: null, contentWidth: null, contentHeight: null };
        size.width = width;
        size.height = height;
        size.offset = y;
        size.contentWidth = width2;
        size.contentHeight = height2;
        tmp20 = obj3.runOnJS(tmp17)(size);
      }
      if (closure_1 != null) {
        size1 = { width: null, height: null, offset: null, contentWidth: null, contentHeight: null };
        size1.width = width;
        size1.height = height;
        size1.offset = y;
        size1.contentWidth = width2;
        size1.contentHeight = height2;
        tmp21Result = tmp21(size1);
      }
      return;
    }
  }
  obj2 = { isDragScrolling, IS_ANDROID: scrollOffsetValue, scrollTo: tmp3(tmp4[2]).scrollTo, scrollerRef: animatedRef, scrollOffsetValue, scrollLocked, onScrollHandler, runOnJS: tmp3(tmp4[2]).runOnJS, onScrollHandlerWorkletized };
  S.__closure = obj2;
  S.__workletHash = 9155123629104;
  S.__initData = __initData3;
  obj.onScroll = S;
  obj.onScroll = tmp3Result.useAnimatedScrollHandler(obj);
  const obj4 = onScrollHandler(onScrollHandlerWorkletized[2]);
  class H {
    constructor() {
      obj = { showsVerticalScrollIndicator: !closure_2.get() };
      return obj;
    }
  }
  H.__closure = { scrollLocked };
  H.__workletHash = 2902739817621;
  H.__initData = __initData4;
  obj.animatedProps = onScrollHandler(onScrollHandlerWorkletized[2]).useAnimatedProps(H);
  obj.scrollerRef = animatedRef;
  obj.gestureRef = gestureRef;
  return obj;
};