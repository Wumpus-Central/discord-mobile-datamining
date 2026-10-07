// discord_app/modules/voice_panel/native/controls/utils/useAnimatedScrollLock.tsx
import ReanimatedRexport from "../../../../reanimated/ReanimatedRexport.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const PlatformUtils = fn(1369);
let closure_3 = PlatformUtils.isAndroid();
let context = noop.createContext(null);
let closure_5 = {
  code: "function onBeginDrag_useAnimatedScrollLockTsx1(_,context){const{isDragScrolling}=this.__closure;context.momentumEndCount=0;isDragScrolling.set(true);}",
};
const __initData = {
  code: "function onEndDrag_useAnimatedScrollLockTsx2(event){const{isDragScrolling,scrollLocked}=this.__closure;var _event$velocity$y,_event$velocity;isDragScrolling.set(false);if(Math.abs((_event$velocity$y=(_event$velocity=event.velocity)===null||_event$velocity===void 0?void 0:_event$velocity.y)!==null&&_event$velocity$y!==void 0?_event$velocity$y:0)===0){scrollLocked.set(false);}}",
};
const __initData2 = {
  code: "function onMomentumEnd_useAnimatedScrollLockTsx3(event_0,context_0){const{IS_ANDROID,scrollLocked}=this.__closure;if(IS_ANDROID){var _context_0$momentumEn;let count=(_context_0$momentumEn=context_0===null||context_0===void 0?void 0:context_0.momentumEndCount)!==null&&_context_0$momentumEn!==void 0?_context_0$momentumEn:0;count=count+1;if(count===3){scrollLocked.set(false);}else{if(context_0!=null){context_0.momentumEndCount=count;}}}else{scrollLocked.set(false);}}",
};
const __initData3 = {
  code: "function onScroll_useAnimatedScrollLockTsx4(event_1){const{isDragScrolling,IS_ANDROID,scrollTo,scrollerRef,scrollOffsetValue,scrollLocked,onScrollHandler,runOnJS,onScrollHandlerWorkletized}=this.__closure;var _onScrollHandlerWorkl;const newScrollPosition=event_1.contentOffset.y;if(isDragScrolling.get()!==true){let scrollPosition=newScrollPosition;if(IS_ANDROID&&scrollPosition<0){scrollPosition=0;scrollTo(scrollerRef,0,0,false);}scrollOffsetValue.set(scrollPosition);}else{const isUp=newScrollPosition<scrollOffsetValue.get();if(scrollLocked.get()||isUp&&newScrollPosition<=0){if(!scrollLocked.get()){scrollLocked.set(true);}scrollTo(scrollerRef,0,0,false);scrollOffsetValue.set(0);}else{scrollOffsetValue.set(newScrollPosition);}}const{width:width,height:height}=event_1.layoutMeasurement;const{width:contentWidth,height:contentHeight}=event_1.contentSize;onScrollHandler!=null&&runOnJS(onScrollHandler)({width:width,height:height,offset:newScrollPosition,contentWidth:contentWidth,contentHeight:contentHeight});(_onScrollHandlerWorkl=onScrollHandlerWorkletized)===null||_onScrollHandlerWorkl===void 0||_onScrollHandlerWorkl({width:width,height:height,offset:newScrollPosition,contentWidth:contentWidth,contentHeight:contentHeight});}",
};
const __initData4 = {
  code: "function useAnimatedScrollLockTsx5(){const{scrollLocked}=this.__closure;return{showsVerticalScrollIndicator:!scrollLocked.get()};}",
};
const __initData5 = {
  code: "function onBeginDrag_useAnimatedScrollLockTsx6(_,context){const{isDragScrolling}=this.__closure;context.momentumEndCount=0;isDragScrolling.set(true);}",
};
const __initData6 = {
  code: "function onEndDrag_useAnimatedScrollLockTsx7(event){const{isDragScrolling,scrollLocked}=this.__closure;var _event$velocity$y,_event$velocity;isDragScrolling.set(false);if(Math.abs((_event$velocity$y=(_event$velocity=event.velocity)===null||_event$velocity===void 0?void 0:_event$velocity.y)!==null&&_event$velocity$y!==void 0?_event$velocity$y:0)===0){scrollLocked.set(false);}}",
};
const __initData7 = {
  code: "function onMomentumEnd_useAnimatedScrollLockTsx8(event_0,context_0){const{IS_ANDROID,scrollLocked}=this.__closure;if(IS_ANDROID){var _context_0$momentumEn;let count=(_context_0$momentumEn=context_0===null||context_0===void 0?void 0:context_0.momentumEndCount)!==null&&_context_0$momentumEn!==void 0?_context_0$momentumEn:0;count+=1;if(count===3){scrollLocked.set(false);}else if(context_0!=null){context_0.momentumEndCount=count;}}else{scrollLocked.set(false);}}",
};
const __initData8 = {
  code: "function onScroll_useAnimatedScrollLockTsx9(event_1){const{isDragScrolling,IS_ANDROID,scrollTo,scrollerRef,scrollOffsetValue,scrollLocked,onScrollHandler,runOnJS,onScrollHandlerWorkletized}=this.__closure;var _onScrollHandlerWorkl;const newScrollPosition=event_1.contentOffset.y;if(isDragScrolling.get()!==true){let scrollPosition=newScrollPosition;if(IS_ANDROID&&scrollPosition<0){scrollPosition=0;scrollTo(scrollerRef,0,0,false);}scrollOffsetValue.set(scrollPosition);}else{const isUp=newScrollPosition<scrollOffsetValue.get();if(scrollLocked.get()||isUp&&newScrollPosition<=0){if(!scrollLocked.get()){scrollLocked.set(true);}scrollTo(scrollerRef,0,0,false);scrollOffsetValue.set(0);}else{scrollOffsetValue.set(newScrollPosition);}}const{width:width,height:height}=event_1.layoutMeasurement;const{width:contentWidth,height:contentHeight}=event_1.contentSize;onScrollHandler!=null&&runOnJS(onScrollHandler)({width:width,height:height,offset:newScrollPosition,contentWidth:contentWidth,contentHeight:contentHeight});(_onScrollHandlerWorkl=onScrollHandlerWorkletized)===null||_onScrollHandlerWorkl===void 0||_onScrollHandlerWorkl({width:width,height:height,offset:newScrollPosition,contentWidth:contentWidth,contentHeight:contentHeight});}",
};
const __initData9 = {
  code: "function useAnimatedScrollLockTsx10(){const{scrollLocked}=this.__closure;return{showsVerticalScrollIndicator:!scrollLocked.get()};}",
};
const ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/controls/utils/useAnimatedScrollLock.tsx");

export const ControlsGestureScrollLock = context;
export const useAnimatedScrollLock = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let obj = arg0;
      const cResult = onScrollHandler(onScrollHandlerWorkletized[3]).c(5);
      if (undefined === arg0) {
        obj = {};
      }
      onScrollHandler = obj.onScrollHandler;
      onScrollHandlerWorkletized = obj.onScrollHandlerWorkletized;
      context = scrollLocked.useContext(isDragScrolling);
      let obj2 = onScrollHandler(onScrollHandlerWorkletized[3]);
      const ref = scrollLocked.useRef(undefined);
      const sharedValue = onScrollHandler(onScrollHandlerWorkletized[4]).useSharedValue(false);
      const tmpResult = onScrollHandler(onScrollHandlerWorkletized[4]);
      const sharedValue1 = onScrollHandler(onScrollHandlerWorkletized[4]).useSharedValue(0);
      const tmpResult6 = onScrollHandler(onScrollHandlerWorkletized[4]);
      let gestureRef;
      const sharedValue2 = onScrollHandler(onScrollHandlerWorkletized[4]).useSharedValue(false);
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
      let scrollOffsetValue;
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
      const tmpResult7 = onScrollHandler(onScrollHandlerWorkletized[4]);
      const animatedRef = onScrollHandler(onScrollHandlerWorkletized[4]).useAnimatedRef();
      const tmpResult8 = onScrollHandler(onScrollHandlerWorkletized[4]);
      let obj3 = { onBeginDrag: null, onEndDrag: null, onMomentumEnd: null, onScroll: null };
      const fn = function k(arg0, arg1) {
        arg1.momentumEndCount = 0;
        const result = isDragScrolling.set(true);
      };
      fn.__closure = { isDragScrolling };
      fn.__workletHash = 5670175593964;
      fn.__initData = animatedRef;
      obj3.onBeginDrag = fn;
      const fn2 = function v(velocity) {
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
      fn2.__closure = { isDragScrolling, scrollLocked };
      fn2.__workletHash = 5460992873286;
      fn2.__initData = __initData;
      obj3.onEndDrag = fn2;
      class S {
        constructor(arg0, arg1) {
          if (closure_3) {
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
              tmp6 = closure_2;
              flag2 = false;
              result = closure_2.set(false);
            } else if (null != arg1) {
              arg1.momentumEndCount = sum;
            }
          } else {
            tmp = closure_2;
            flag = false;
            result1 = closure_2.set(false);
          }
          return;
        }
      }
      S.__closure = { IS_ANDROID: scrollOffsetValue, scrollLocked };
      S.__workletHash = 13655275039712;
      S.__initData = __initData2;
      obj3.onMomentumEnd = S;
      const fn3 = function h(contentOffset) {
        const y = contentOffset.contentOffset.y;
        if (true !== isDragScrolling.get()) {
          let tmp9 = closure_3;
          if (closure_3) {
            tmp9 = y < 0;
          }
          let num6 = y;
          if (tmp9) {
            const obj2 = ReanimatedRexport;
            obj2.scrollTo(animatedRef, 0, 0, false);
            num6 = 0;
          }
          const result = scrollOffsetValue.set(num6);
        } else {
          if (scrollLocked.get()) {
            if (!scrollLocked.get()) {
              const result1 = scrollLocked.set(true);
            }
            const obj = ReanimatedRexport;
            obj.scrollTo(animatedRef, 0, 0, false);
            const result2 = scrollOffsetValue.set(0);
          } else {
            const result3 = scrollOffsetValue.set(y);
          }
          const tmp23 = y < scrollOffsetValue.get();
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
      const obj4 = { IS_ANDROID: scrollOffsetValue, scrollLocked };
      const tmpResult9 = onScrollHandler(onScrollHandlerWorkletized[4]);
      fn3.__closure = {
        isDragScrolling,
        IS_ANDROID: scrollOffsetValue,
        scrollTo: onScrollHandler(onScrollHandlerWorkletized[4]).scrollTo,
        scrollerRef: animatedRef,
        scrollOffsetValue,
        scrollLocked,
        onScrollHandler,
        runOnJS: onScrollHandler(onScrollHandlerWorkletized[4]).runOnJS,
        onScrollHandlerWorkletized,
      };
      fn3.__workletHash = 7524555635696;
      fn3.__initData = __initData3;
      obj3.onScroll = fn3;
      const animatedScrollHandler = tmpResult9.useAnimatedScrollHandler(obj3);
      const obj5 = {
        isDragScrolling,
        IS_ANDROID: scrollOffsetValue,
        scrollTo: onScrollHandler(onScrollHandlerWorkletized[4]).scrollTo,
        scrollerRef: animatedRef,
        scrollOffsetValue,
        scrollLocked,
        onScrollHandler,
        runOnJS: onScrollHandler(onScrollHandlerWorkletized[4]).runOnJS,
        onScrollHandlerWorkletized,
      };
      class D {
        constructor() {
          obj = { showsVerticalScrollIndicator: !closure_2.get() };
          return obj;
        }
      }
      D.__closure = { scrollLocked };
      D.__workletHash = 2902739817621;
      D.__initData = __initData4;
      const animatedProps = onScrollHandler(onScrollHandlerWorkletized[4]).useAnimatedProps(D);
      if (cResult[0] === animatedScrollHandler) {
        if (cResult[1] === animatedProps) {
          if (cResult[2] === gestureRef) {
            if (cResult[3] === animatedRef) {
              let tmp16 = cResult[4];
            }
            return tmp16;
          }
        }
      }
      const obj6 = { onScroll: animatedScrollHandler, animatedProps, scrollerRef: animatedRef, gestureRef };
      cResult[0] = animatedScrollHandler;
      cResult[1] = animatedProps;
      cResult[2] = gestureRef;
      cResult[3] = animatedRef;
      cResult[4] = obj6;
      tmp16 = obj6;
    }
  : () => {
      let obj = arg0;
      if (arg0 === undefined) {
        obj = {};
      }
      const onScrollHandler = obj.onScrollHandler;
      const onScrollHandlerWorkletized = obj.onScrollHandlerWorkletized;
      let scrollLocked;
      let scrollOffsetValue;
      let isDragScrolling;
      let animatedRef;
      context = scrollLocked.useContext(isDragScrolling);
      const ref = scrollLocked.useRef(undefined);
      const sharedValue = onScrollHandler(onScrollHandlerWorkletized[4]).useSharedValue(false);
      let obj2 = onScrollHandler(onScrollHandlerWorkletized[4]);
      const sharedValue1 = onScrollHandler(onScrollHandlerWorkletized[4]).useSharedValue(0);
      let obj3 = onScrollHandler(onScrollHandlerWorkletized[4]);
      let gestureRef;
      const sharedValue2 = onScrollHandler(onScrollHandlerWorkletized[4]).useSharedValue(false);
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
      const obj4 = onScrollHandler(onScrollHandlerWorkletized[4]);
      animatedRef = onScrollHandler(onScrollHandlerWorkletized[4]).useAnimatedRef();
      const obj5 = { onScroll: null, animatedProps: null, scrollerRef: null, gestureRef: null };
      const tmp3Result = onScrollHandler(onScrollHandlerWorkletized[4]);
      const obj6 = { onBeginDrag: null, onEndDrag: null, onMomentumEnd: null, onScroll: null };
      class D {
        constructor(arg0, arg1) {
          arg1.momentumEndCount = 0;
          result = closure_4.set(true);
          return;
        }
      }
      D.__closure = { isDragScrolling };
      D.__workletHash = 9168536183179;
      D.__initData = __initData5;
      obj6.onBeginDrag = D;
      const fn = function _(velocity) {
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
      fn.__workletHash = 12072943282467;
      fn.__initData = __initData6;
      obj6.onEndDrag = fn;
      const fn2 = function u(arg0, momentumEndCount) {
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
      fn2.__closure = { IS_ANDROID: scrollOffsetValue, scrollLocked };
      fn2.__workletHash = 4672426278030;
      fn2.__initData = __initData7;
      obj6.onMomentumEnd = fn2;
      const fn3 = function s(contentOffset) {
        const y = contentOffset.contentOffset.y;
        if (true !== isDragScrolling.get()) {
          let tmp9 = closure_3;
          if (closure_3) {
            tmp9 = y < 0;
          }
          let num6 = y;
          if (tmp9) {
            const obj2 = ReanimatedRexport;
            obj2.scrollTo(animatedRef, 0, 0, false);
            num6 = 0;
          }
          const result = scrollOffsetValue.set(num6);
        } else {
          if (scrollLocked.get()) {
            if (!scrollLocked.get()) {
              const result1 = scrollLocked.set(true);
            }
            const obj = ReanimatedRexport;
            obj.scrollTo(animatedRef, 0, 0, false);
            const result2 = scrollOffsetValue.set(0);
          } else {
            const result3 = scrollOffsetValue.set(y);
          }
          const tmp23 = y < scrollOffsetValue.get();
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
      const obj7 = { IS_ANDROID: scrollOffsetValue, scrollLocked };
      const tmp3Result3 = onScrollHandler(onScrollHandlerWorkletized[4]);
      fn3.__closure = {
        isDragScrolling,
        IS_ANDROID: scrollOffsetValue,
        scrollTo: onScrollHandler(onScrollHandlerWorkletized[4]).scrollTo,
        scrollerRef: animatedRef,
        scrollOffsetValue,
        scrollLocked,
        onScrollHandler,
        runOnJS: onScrollHandler(onScrollHandlerWorkletized[4]).runOnJS,
        onScrollHandlerWorkletized,
      };
      fn3.__workletHash = 13162184976701;
      fn3.__initData = __initData8;
      obj6.onScroll = fn3;
      obj5.onScroll = tmp3Result3.useAnimatedScrollHandler(obj6);
      const obj8 = {
        isDragScrolling,
        IS_ANDROID: scrollOffsetValue,
        scrollTo: onScrollHandler(onScrollHandlerWorkletized[4]).scrollTo,
        scrollerRef: animatedRef,
        scrollOffsetValue,
        scrollLocked,
        onScrollHandler,
        runOnJS: onScrollHandler(onScrollHandlerWorkletized[4]).runOnJS,
        onScrollHandlerWorkletized,
      };
      class H {
        constructor() {
          obj = { showsVerticalScrollIndicator: !closure_2.get() };
          return obj;
        }
      }
      H.__closure = { scrollLocked };
      H.__workletHash = 7788212990145;
      H.__initData = __initData9;
      obj5.animatedProps = onScrollHandler(onScrollHandlerWorkletized[4]).useAnimatedProps(H);
      obj5.scrollerRef = animatedRef;
      obj5.gestureRef = gestureRef;
      return obj5;
    };
