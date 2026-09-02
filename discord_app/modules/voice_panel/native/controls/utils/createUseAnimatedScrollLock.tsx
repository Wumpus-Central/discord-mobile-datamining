// === Module 11898: context ===

// Module 11898 (context)
import noopAll from "noop" /* 19 */;
import set from "set" /* 1234 */;

const require = arg1;
let closure_2 = set.isAndroid();
let closure_3 = { code: "function onBeginDrag_createUseAnimatedScrollLockTsx1(_,context){const{isDragScrolling}=this.__closure;context.momentumEndCount=0;isDragScrolling.set(true);}" };
let closure_4 = { code: "function onEndDrag_createUseAnimatedScrollLockTsx2(event){const{isDragScrolling,scrollLocked}=this.__closure;var _event$velocity$y,_event$velocity;isDragScrolling.set(false);if(Math.abs((_event$velocity$y=(_event$velocity=event.velocity)===null||_event$velocity===void 0?void 0:_event$velocity.y)!==null&&_event$velocity$y!==void 0?_event$velocity$y:0)===0){scrollLocked.set(false);}}" };
let closure_5 = { code: "function onMomentumEnd_createUseAnimatedScrollLockTsx3(event,context){const{IS_ANDROID,scrollLocked}=this.__closure;if(IS_ANDROID){var _context$momentumEndC;let count=(_context$momentumEndC=context===null||context===void 0?void 0:context.momentumEndCount)!==null&&_context$momentumEndC!==void 0?_context$momentumEndC:0;count+=1;if(count===3){scrollLocked.set(false);}else if(context!=null){context.momentumEndCount=count;}}else{scrollLocked.set(false);}}" };
let closure_6 = { code: "function onScroll_createUseAnimatedScrollLockTsx4(event){const{isDragScrolling,IS_ANDROID,scrollTo,scrollerRef,scrollOffsetValue,scrollLocked,onScrollHandler,runOnJS,onScrollHandlerWorkletized}=this.__closure;var _onScrollHandlerWorkl;const newScrollPosition=event.contentOffset.y;if(isDragScrolling.get()!==true){let scrollPosition=newScrollPosition;if(IS_ANDROID&&scrollPosition<0){scrollPosition=0;scrollTo(scrollerRef,0,0,false);}scrollOffsetValue.set(scrollPosition);}else{const isUp=newScrollPosition<scrollOffsetValue.get();if(scrollLocked.get()||isUp&&newScrollPosition<=0){if(!scrollLocked.get()){scrollLocked.set(true);}scrollTo(scrollerRef,0,0,false);scrollOffsetValue.set(0);}else{scrollOffsetValue.set(newScrollPosition);}}const{width:width,height:height}=event.layoutMeasurement;const{width:contentWidth,height:contentHeight}=event.contentSize;onScrollHandler!=null&&runOnJS(onScrollHandler)({width:width,height:height,offset:newScrollPosition,contentWidth:contentWidth,contentHeight:contentHeight});(_onScrollHandlerWorkl=onScrollHandlerWorkletized)===null||_onScrollHandlerWorkl===void 0||_onScrollHandlerWorkl({width:width,height:height,offset:newScrollPosition,contentWidth:contentWidth,contentHeight:contentHeight});}" };
let closure_7 = { code: "function createUseAnimatedScrollLockTsx5(){const{scrollLocked}=this.__closure;return{showsVerticalScrollIndicator:!scrollLocked.get()};}" };
const context = noopAll.createContext(() => ({}));
let result = set.fileFinishedImporting("modules/voice_panel/native/controls/utils/createUseAnimatedScrollLock.tsx");

export const ControlsGestureScrollLock = context;
export function createUseAnimatedScrollLock(closure_12, closure_13, sharedValue5, sharedValue4) {
  closure_0 = closure_12;
  closure_1 = closure_13;
  closure_2 = sharedValue5;
  closure_3 = sharedValue4;
  return (A) => {
    let obj = A;
    if (A === undefined) {
      obj = {};
    }
    const onScrollHandler = obj.onScrollHandler;
    const onScrollHandlerWorkletized = obj.onScrollHandlerWorkletized;
    let animatedRef;
    obj1 = callback(4217);
    animatedRef = obj1.useAnimatedRef();
    obj = { onScroll: null, animatedProps: null, scrollerRef: null, gestureRef: null };
    let obj3 = callback(4217);
    obj = { onBeginDrag: fn, onEndDrag: null, onMomentumEnd: null, onScroll: null };
    fn = function w(arg0, arg1) {
      arg1.momentumEndCount = 0;
      const result = store.set(true);
    };
    obj1 = { isDragScrolling: closure_3 };
    fn.__closure = obj1;
    fn.__workletHash = 16433590303176;
    fn.__initData = closure_3;
    class H {
      constructor(arg0) {
        result = closure_3.set(false);
        velocity = A.velocity;
        num = undefined;
        if (velocity != null) {
          num = velocity.y;
        }
        if (num == null) {
          num = 0;
        }
        if (0 === Math.abs(num)) {
          tmp2 = closure_1;
          result1 = closure_1.set(false);
        }
        return;
      }
    }
    H.__closure = { isDragScrolling: closure_3, scrollLocked: onScrollHandlerWorkletized };
    H.__workletHash = 1594981610850;
    H.__initData = closure_1_4;
    obj[1] = H;
    class D {
      constructor(arg0, arg1) {
        if (closure_2) {
          tmp3 = arg1;
          tmp4 = null;
          num = undefined;
          if (arg1 != null) {
            num = arg1.momentumEndCount;
          }
          if (num == null) {
            num = 0;
          }
          num2 = 1;
          sum = num + 1;
          num3 = 3;
          if (3 === sum) {
            tmp6 = closure_1;
            flag2 = false;
            result = closure_1.set(false);
          } else if (null != arg1) {
            arg1.momentumEndCount = sum;
          }
        } else {
          tmp = closure_1;
          flag = false;
          result1 = closure_1.set(false);
        }
        return;
      }
    }
    obj3 = { IS_ANDROID: closure_2, scrollLocked: onScrollHandlerWorkletized };
    D.__closure = obj3;
    D.__workletHash = 17525906195822;
    D.__initData = closure_1_5;
    obj[2] = D;
    const fn2 = function k(contentOffset) {
      const y = contentOffset.contentOffset.y;
      if (true !== closure_1_3.get()) {
        let tmp9 = closure_2;
        if (closure_2) {
          tmp9 = y < 0;
        }
        let num6 = y;
        if (tmp9) {
          const obj2 = onScrollHandler(onScrollHandlerWorkletized[2]);
          obj2.scrollTo(animatedRef, 0, 0, false);
          num6 = 0;
        }
        const result = animatedRef.set(num6);
      } else {
        if (onScrollHandlerWorkletized.get()) {
          if (!obj7.get()) {
            const result1 = obj7.set(true);
          }
          let obj = onScrollHandler(onScrollHandlerWorkletized[2]);
          obj.scrollTo(animatedRef, 0, 0, false);
          const result2 = obj6.set(0);
        } else {
          const result3 = obj6.set(y);
        }
        const tmp23 = y < animatedRef.get();
      }
      ({ width, height } = contentOffset.layoutMeasurement);
      ({ width: width2, height: height2 } = contentOffset.contentSize);
      if (null != onScrollHandler) {
        obj = { width: null, height: null, offset: null, contentWidth: null, contentHeight: null };
        obj[0] = width;
        obj[1] = height;
        obj[2] = y;
        obj[3] = width2;
        obj[4] = height2;
        onScrollHandler(onScrollHandlerWorkletized[2]).runOnJS(tmp17)(obj);
        const obj3 = onScrollHandler(onScrollHandlerWorkletized[2]);
      }
      if (onScrollHandlerWorkletized != null) {
        obj = { width: null, height: null, offset: null, contentWidth: null, contentHeight: null };
        obj[0] = width;
        obj[1] = height;
        obj[2] = y;
        obj[3] = width2;
        obj[4] = height2;
        tmp21(obj);
      }
    };
    fn2.__closure = { isDragScrolling: closure_3, IS_ANDROID: closure_2, scrollTo: callback(4217).scrollTo, scrollerRef: animatedRef, scrollOffsetValue: animatedRef, scrollLocked: onScrollHandlerWorkletized, onScrollHandler, runOnJS: callback(4217).runOnJS, onScrollHandlerWorkletized };
    fn2.__workletHash = 13271628494164;
    fn2.__initData = closure_1_6;
    obj[3] = fn2;
    obj[0] = obj3.useAnimatedScrollHandler(obj);
    let obj2 = { isDragScrolling: closure_3, scrollLocked: onScrollHandlerWorkletized };
    const obj4 = { isDragScrolling: closure_3, IS_ANDROID: closure_2, scrollTo: callback(4217).scrollTo, scrollerRef: animatedRef, scrollOffsetValue: animatedRef, scrollLocked: onScrollHandlerWorkletized, onScrollHandler, runOnJS: callback(4217).runOnJS, onScrollHandlerWorkletized };
    class L {
      constructor() {
        obj = { showsVerticalScrollIndicator: !closure_1.get() };
        return obj;
      }
    }
    L.__closure = { scrollLocked: onScrollHandlerWorkletized };
    L.__workletHash = 3670657775473;
    L.__initData = closure_1_7;
    obj[1] = callback(4217).useAnimatedProps(L);
    obj[2] = animatedRef;
    obj[3] = onScrollHandler;
    return obj;
  };
}