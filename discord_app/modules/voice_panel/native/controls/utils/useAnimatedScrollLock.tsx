// === Module 12635: useAnimatedScrollLock ===

// Module 12635 (useAnimatedScrollLock)
import _mod1652 from "module_1652" /* 1652 */;
import _mod1705 from "module_1705" /* 1705 */;
import noop from "module_19" /* 19 */;

require = fn;
const PlatformUtils = fn(1377);
let closure_3 = PlatformUtils.isAndroid();
let context = noop.createContext(null);
let closure_5 = { code: "(function onBeginDrag_useAnimatedScrollLockTsx1(_,context){let[isDragScrolling]=this.__closure;context.momentumEndCount=0;isDragScrolling.set(true);})" };
let closure_6 = { code: "(function onEndDrag_useAnimatedScrollLockTsx2(event){let[isDragScrolling,scrollLocked]=this.__closure;var _event$velocity$y,_event$velocity;isDragScrolling.set(false);if(Math.abs((_event$velocity$y=(_event$velocity=event.velocity)===null||_event$velocity===void 0?void 0:_event$velocity.y)!==null&&_event$velocity$y!==void 0?_event$velocity$y:0)===0){scrollLocked.set(false);}})" };
let closure_7 = { code: "(function onMomentumEnd_useAnimatedScrollLockTsx3(event,context){let[IS_ANDROID,scrollLocked]=this.__closure;if(IS_ANDROID){var _context$momentumEndC;let count=(_context$momentumEndC=context===null||context===void 0?void 0:context.momentumEndCount)!==null&&_context$momentumEndC!==void 0?_context$momentumEndC:0;count+=1;if(count===3){scrollLocked.set(false);}else if(context!=null){context.momentumEndCount=count;}}else{scrollLocked.set(false);}})" };
let closure_8 = { code: "(function onScroll_useAnimatedScrollLockTsx4(event){let[isDragScrolling,IS_ANDROID,scrollTo,scrollerRef,scrollOffsetValue,scrollLocked,onScrollHandler,scheduleOnRN,onScrollHandlerWorkletized]=this.__closure;var _onScrollHandlerWorkl;const newScrollPosition=event.contentOffset.y;if(isDragScrolling.get()!==true){let scrollPosition=newScrollPosition;if(IS_ANDROID&&scrollPosition<0){scrollPosition=0;scrollTo(scrollerRef,0,0,false);}scrollOffsetValue.set(scrollPosition);}else{const isUp=newScrollPosition<scrollOffsetValue.get();if(scrollLocked.get()||isUp&&newScrollPosition<=0){if(!scrollLocked.get()){scrollLocked.set(true);}scrollTo(scrollerRef,0,0,false);scrollOffsetValue.set(0);}else{scrollOffsetValue.set(newScrollPosition);}}const{width:width,height:height}=event.layoutMeasurement;const{width:contentWidth,height:contentHeight}=event.contentSize;onScrollHandler!=null&&scheduleOnRN(onScrollHandler,{width:width,height:height,offset:newScrollPosition,contentWidth:contentWidth,contentHeight:contentHeight});(_onScrollHandlerWorkl=onScrollHandlerWorkletized)===null||_onScrollHandlerWorkl===void 0||_onScrollHandlerWorkl({width:width,height:height,offset:newScrollPosition,contentWidth:contentWidth,contentHeight:contentHeight});})" };
let closure_9 = { code: "(function useAnimatedScrollLockTsx5(){let[scrollLocked]=this.__closure;return{showsVerticalScrollIndicator:!scrollLocked.get()};})" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/controls/utils/useAnimatedScrollLock.tsx");

export const ControlsGestureScrollLock = context;
export function useAnimatedScrollLock(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  ({ onScrollHandler, onScrollHandlerWorkletized } = obj);
  context = noop.useContext(context);
  const ref = noop.useRef(undefined);
  const sharedValue = _mod1652.useSharedValue(false);
  const sharedValue1 = _mod1652.useSharedValue(0);
  let gestureRef;
  const sharedValue2 = _mod1652.useSharedValue(false);
  if (context != null) {
    gestureRef = context.gestureRef;
  }
  if (gestureRef == null) {
    gestureRef = ref;
  }
  let scrollLocked;
  if (context != null) {
    scrollLocked = context.scrollLocked;
  }
  if (scrollLocked == null) {
    scrollLocked = sharedValue;
  }
  let scrollOffsetValue;
  if (context != null) {
    scrollOffsetValue = context.scrollOffsetValue;
  }
  if (scrollOffsetValue == null) {
    scrollOffsetValue = sharedValue1;
  }
  let isDragScrolling;
  if (context != null) {
    isDragScrolling = context.isDragScrolling;
  }
  if (isDragScrolling == null) {
    isDragScrolling = sharedValue2;
  }
  const animatedRef = _mod1652.useAnimatedRef();
  const tmp3Result = _mod1652;
  items = [_undefined5, isDragScrolling];
  [tmp13, tmp14] = items;
  const obj5 = { onBeginDrag: null, onEndDrag: null, onMomentumEnd: null, onScroll: null };
  function onBeginDrag(arg0, arg1) {
    arg1.momentumEndCount = 0;
    const result = _undefined.set(true);
  }
  const items1 = [tmp14];
  onBeginDrag.__closure = items1;
  onBeginDrag.__workletHash = 16715410599637;
  onBeginDrag.__initData = tmp13;
  obj5.onBeginDrag = onBeginDrag;
  const items2 = [closure_6, isDragScrolling, scrollLocked];
  [tmp15, tmp16, tmp17] = items2;
  function onEndDrag(velocity) {
    const result = _undefined.set(false);
    velocity = velocity.velocity;
    let num;
    if (velocity != null) {
      num = velocity.y;
    }
    if (num == null) {
      num = 0;
    }
    if (0 === Math.abs(num)) {
      const result1 = _undefined2.set(false);
    }
  }
  const items3 = [tmp16, tmp17];
  onEndDrag.__closure = items3;
  onEndDrag.__workletHash = 15559740677567;
  onEndDrag.__initData = tmp15;
  obj5.onEndDrag = onEndDrag;
  const items4 = [_undefined6, closure_3, scrollLocked];
  [tmp18, tmp19, tmp20] = items4;
  function onMomentumEnd(arg0, momentumEndCount) {
    if (c0) {
      let num;
      if (momentumEndCount != null) {
        num = momentumEndCount.momentumEndCount;
      }
      if (num == null) {
        num = 0;
      }
      const sum = num + 1;
      if (3 === sum) {
        const result = _undefined2.set(false);
      } else if (null != momentumEndCount) {
        momentumEndCount.momentumEndCount = sum;
      }
    } else {
      const result1 = _undefined2.set(false);
    }
  }
  const items5 = [tmp19, tmp20];
  onMomentumEnd.__closure = items5;
  onMomentumEnd.__workletHash = 3109808246259;
  onMomentumEnd.__initData = tmp18;
  obj5.onMomentumEnd = onMomentumEnd;
  const items6 = [closure_8, isDragScrolling, closure_3, _mod1652.scrollTo, animatedRef, scrollOffsetValue, scrollLocked, onScrollHandler, _mod1705.scheduleOnRN, onScrollHandlerWorkletized];
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  [tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30] = items6;
  function onScroll(contentOffset) {
    const y = contentOffset.contentOffset.y;
    if (true !== _undefined.get()) {
      let tmp8 = c1;
      if (c1) {
        tmp8 = y < 0;
      }
      let num6 = y;
      if (tmp8) {
        _undefined3(c3, 0, 0, false);
        num6 = 0;
      }
      const result = _undefined4.set(num6);
    } else {
      if (_undefined5.get()) {
        if (!_undefined5.get()) {
          const result1 = _undefined5.set(true);
        }
        _undefined3(c3, 0, 0, false);
        const result2 = _undefined4.set(0);
      } else {
        const result3 = _undefined4.set(y);
      }
      const tmp = y < _undefined4.get();
    }
    ({ width, height } = contentOffset.layoutMeasurement);
    ({ width: width2, height: height2 } = contentOffset.contentSize);
    if (null != c6) {
      const size = { width, height, offset: y, contentWidth: width2, contentHeight: height2 };
      _undefined6(tmp14, size);
    }
    if (c8 != null) {
      const size1 = { width, height, offset: y, contentWidth: width2, contentHeight: height2 };
      tmp17(size1);
    }
  }
  const items7 = [tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30];
  onScroll.__closure = items7;
  onScroll.__workletHash = 12056309843492;
  onScroll.__initData = tmp21;
  obj5.onScroll = onScroll;
  const tmp3Result3 = _mod1652;
  const animatedScrollHandler = _mod1652.useAnimatedScrollHandler(obj5);
  const items8 = [closure_9, scrollLocked];
  c0 = undefined;
  [tmp32, tmp33] = items8;
  function useAnimatedScrollLockTsx5() {
    return { showsVerticalScrollIndicator: !_undefined.get() };
  }
  const items9 = [tmp33];
  useAnimatedScrollLockTsx5.__closure = items9;
  useAnimatedScrollLockTsx5.__workletHash = 5672658583564;
  useAnimatedScrollLockTsx5.__initData = tmp32;
  const tmp3Result4 = _mod1652;
  return { onScroll: animatedScrollHandler, animatedProps: _mod1652.useAnimatedProps(useAnimatedScrollLockTsx5), scrollerRef: animatedRef, gestureRef };
}