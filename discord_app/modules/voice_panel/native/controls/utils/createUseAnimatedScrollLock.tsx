// === Module 12103: createUseAnimatedScrollLock ===

// Module 12103 (createUseAnimatedScrollLock)
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import noop from "module_19" /* 19 */;

require = fn;
const PlatformUtils = fn(1115);
let closure_2 = PlatformUtils.isAndroid();
let closure_3 = { code: "function onBeginDrag_createUseAnimatedScrollLockTsx1(_,context){const{isDragScrolling}=this.__closure;context.momentumEndCount=0;isDragScrolling.set(true);}" };
let closure_4 = { code: "function onEndDrag_createUseAnimatedScrollLockTsx2(event){const{isDragScrolling,scrollLocked}=this.__closure;var _event$velocity$y,_event$velocity;isDragScrolling.set(false);if(Math.abs((_event$velocity$y=(_event$velocity=event.velocity)===null||_event$velocity===void 0?void 0:_event$velocity.y)!==null&&_event$velocity$y!==void 0?_event$velocity$y:0)===0){scrollLocked.set(false);}}" };
let closure_5 = { code: "function onMomentumEnd_createUseAnimatedScrollLockTsx3(event,context){const{IS_ANDROID,scrollLocked}=this.__closure;if(IS_ANDROID){var _context$momentumEndC;let count=(_context$momentumEndC=context===null||context===void 0?void 0:context.momentumEndCount)!==null&&_context$momentumEndC!==void 0?_context$momentumEndC:0;count+=1;if(count===3){scrollLocked.set(false);}else if(context!=null){context.momentumEndCount=count;}}else{scrollLocked.set(false);}}" };
let closure_6 = { code: "function onScroll_createUseAnimatedScrollLockTsx4(event){const{isDragScrolling,IS_ANDROID,scrollTo,scrollerRef,scrollOffsetValue,scrollLocked,onScrollHandler,runOnJS,onScrollHandlerWorkletized}=this.__closure;var _onScrollHandlerWorkl;const newScrollPosition=event.contentOffset.y;if(isDragScrolling.get()!==true){let scrollPosition=newScrollPosition;if(IS_ANDROID&&scrollPosition<0){scrollPosition=0;scrollTo(scrollerRef,0,0,false);}scrollOffsetValue.set(scrollPosition);}else{const isUp=newScrollPosition<scrollOffsetValue.get();if(scrollLocked.get()||isUp&&newScrollPosition<=0){if(!scrollLocked.get()){scrollLocked.set(true);}scrollTo(scrollerRef,0,0,false);scrollOffsetValue.set(0);}else{scrollOffsetValue.set(newScrollPosition);}}const{width:width,height:height}=event.layoutMeasurement;const{width:contentWidth,height:contentHeight}=event.contentSize;onScrollHandler!=null&&runOnJS(onScrollHandler)({width:width,height:height,offset:newScrollPosition,contentWidth:contentWidth,contentHeight:contentHeight});(_onScrollHandlerWorkl=onScrollHandlerWorkletized)===null||_onScrollHandlerWorkl===void 0||_onScrollHandlerWorkl({width:width,height:height,offset:newScrollPosition,contentWidth:contentWidth,contentHeight:contentHeight});}" };
let closure_7 = { code: "function createUseAnimatedScrollLockTsx5(){const{scrollLocked}=this.__closure;return{showsVerticalScrollIndicator:!scrollLocked.get()};}" };
const context = noop.createContext(() => ({}));
let size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/controls/utils/createUseAnimatedScrollLock.tsx");

export const ControlsGestureScrollLock = context;
export function createUseAnimatedScrollLock(arg0, arg1, token, sharedValue1) {
  closure_0 = arg0;
  closure_1 = arg1;
  const IS_ANDROID = token;
  return (A) => {
    let obj = A;
    if (A === undefined) {
      obj = {};
    }
    const onScrollHandler = obj.onScrollHandler;
    const onScrollHandlerWorkletized = obj.onScrollHandlerWorkletized;
    let obj1 = closure_0(onScrollHandlerWorkletized[2]);
    const animatedRef = obj1.useAnimatedRef();
    obj = { onScroll: null, animatedProps: null, scrollerRef: null, gestureRef: null };
    let obj3 = closure_0(onScrollHandlerWorkletized[2]);
    obj = { onBeginDrag: null, onEndDrag: null, onMomentumEnd: null, onScroll: null };
    const fn = function w(arg0, arg1) {
      arg1.momentumEndCount = 0;
      const result = sharedValue1.set(true);
    };
    obj1 = { isDragScrolling: sharedValue1 };
    fn.__closure = obj1;
    fn.__workletHash = 16433590303176;
    fn.__initData = sharedValue1;
    obj.onBeginDrag = fn;
    class H {
      constructor(arg0) {
        result = closure_1_3.set(false);
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
    H.__closure = { isDragScrolling: sharedValue1, scrollLocked: onScrollHandlerWorkletized };
    H.__workletHash = 1594981610850;
    H.__initData = __initData;
    obj.onEndDrag = H;
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
    obj3 = { IS_ANDROID, scrollLocked: onScrollHandlerWorkletized };
    D.__closure = obj3;
    D.__workletHash = 17525906195822;
    D.__initData = __initData2;
    obj.onMomentumEnd = D;
    const fn2 = function k(contentOffset) {
      const y = contentOffset.contentOffset.y;
      if (true !== closure_3.get()) {
        let tmp9 = animatedRef;
        if (animatedRef) {
          tmp9 = y < 0;
        }
        let num6 = y;
        if (tmp9) {
          const obj2 = ReanimatedRexport;
          obj2.scrollTo(animatedRef, 0, 0, false);
          num6 = 0;
        }
        const result = animatedRef.set(num6);
      } else {
        if (onScrollHandlerWorkletized.get()) {
          if (!obj7.get()) {
            const result1 = obj7.set(true);
          }
          const obj = ReanimatedRexport;
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
        const size = { width, height, offset: y, contentWidth: width2, contentHeight: height2 };
        ReanimatedRexport.runOnJS(tmp17)(size);
      }
      if (onScrollHandlerWorkletized != null) {
        const size1 = { width, height, offset: y, contentWidth: width2, contentHeight: height2 };
        tmp21(size1);
      }
    };
    fn2.__closure = { isDragScrolling: sharedValue1, IS_ANDROID, scrollTo: closure_0(onScrollHandlerWorkletized[2]).scrollTo, scrollerRef: animatedRef, scrollOffsetValue: animatedRef, scrollLocked: onScrollHandlerWorkletized, onScrollHandler, runOnJS: closure_0(onScrollHandlerWorkletized[2]).runOnJS, onScrollHandlerWorkletized };
    fn2.__workletHash = 13271628494164;
    fn2.__initData = __initData3;
    obj.onScroll = fn2;
    obj.onScroll = obj3.useAnimatedScrollHandler(obj);
    let obj2 = { isDragScrolling: sharedValue1, scrollLocked: onScrollHandlerWorkletized };
    const obj4 = { isDragScrolling: sharedValue1, IS_ANDROID, scrollTo: closure_0(onScrollHandlerWorkletized[2]).scrollTo, scrollerRef: animatedRef, scrollOffsetValue: animatedRef, scrollLocked: onScrollHandlerWorkletized, onScrollHandler, runOnJS: closure_0(onScrollHandlerWorkletized[2]).runOnJS, onScrollHandlerWorkletized };
    class L {
      constructor() {
        obj = { showsVerticalScrollIndicator: !closure_1.get() };
        return obj;
      }
    }
    L.__closure = { scrollLocked: onScrollHandlerWorkletized };
    L.__workletHash = 3670657775473;
    L.__initData = __initData4;
    obj.animatedProps = closure_0(onScrollHandlerWorkletized[2]).useAnimatedProps(L);
    obj.scrollerRef = animatedRef;
    obj.gestureRef = onScrollHandler;
    return obj;
  };
}