// discord_app/modules/voice_panel/native/controls/utils/useAnimatedScrollLock.tsx
import ReanimatedRexport from "../../../../reanimated/ReanimatedRexport.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import PlatformUtils from "../../../../../utils/PlatformUtils.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../../_runtime/metro/00002__.js";

let closure_3 = PlatformUtils.isAndroid();
let context = react.createContext(null);
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
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let fn;
      let fn2;
      let fn3;
      let isDragScrolling;
      let onScrollHandler;
      let onScrollHandlerWorkletized;
      let scrollLocked;
      let obj = arg0;
      let obj2 = onScrollHandler(onScrollHandlerWorkletized[3]);
      const cResult = obj2.c(5);
      if (undefined === arg0) {
        obj = {};
      }
      onScrollHandler = obj.onScrollHandler;
      onScrollHandlerWorkletized = obj.onScrollHandlerWorkletized;
      context = scrollLocked.useContext(isDragScrolling);
      const ref = scrollLocked.useRef(undefined);
      const tmpResult = onScrollHandler(onScrollHandlerWorkletized[4]);
      const sharedValue = tmpResult.useSharedValue(false);
      const tmpResult6 = onScrollHandler(onScrollHandlerWorkletized[4]);
      const sharedValue1 = tmpResult6.useSharedValue(0);
      let gestureRef;
      const tmpResult7 = onScrollHandler(onScrollHandlerWorkletized[4]);
      const sharedValue2 = tmpResult7.useSharedValue(false);
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
      const tmpResult8 = onScrollHandler(onScrollHandlerWorkletized[4]);
      const animatedRef = tmpResult8.useAnimatedRef();
      let obj3 = { onBeginDrag: fn, onEndDrag: fn2, onMomentumEnd: S, onScroll: fn3 };
      fn = function k(arg0, arg1) {
        arg1.momentumEndCount = 0;
        const result = isDragScrolling.set(true);
      };
      fn.__closure = { isDragScrolling };
      fn.__workletHash = 5670175593964;
      fn.__initData = animatedRef;
      fn2 = function v(velocity) {
        const result = isDragScrolling.set(false);
        velocity = velocity.velocity;
        let num;
        const _Math = Math;
        if (velocity != null) {
          num = velocity.y;
        }
        if (num == null) {
          num = 0;
        }
        if (0 === abs(num)) {
          const result1 = scrollLocked.set(false);
        }
      };
      fn2.__closure = { isDragScrolling, scrollLocked };
      fn2.__workletHash = 5460992873286;
      fn2.__initData = __initData;
      const tmpResult9 = onScrollHandler(onScrollHandlerWorkletized[4]);
      class S {
        constructor(arg0, momentumEndCount) {
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
        }
      }
      const obj4 = { IS_ANDROID: scrollOffsetValue, scrollLocked };
      S.__closure = obj4;
      S.__workletHash = 13655275039712;
      S.__initData = __initData2;
      fn3 = function h(contentOffset) {
        let height;
        let height2;
        let width;
        let width2;
        const y = contentOffset.contentOffset.y;
        if (true !== isDragScrolling.get()) {
          let num6 = y;
          const tmp9 = closure_3 && y < 0;
          if (tmp9) {
            const obj2 = ReanimatedRexport;
            obj2.scrollTo(animatedRef, 0, 0, false);
            num6 = 0;
          }
          const result = scrollOffsetValue.set(num6);
        } else {
          y < scrollOffsetValue.get();
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
        }
        ({ width, height } = contentOffset.layoutMeasurement);
        ({ width: width2, height: height2 } = contentOffset.contentSize);
        if (null != onScrollHandler) {
          size = { width, height, offset: y, contentWidth: width2, contentHeight: height2 };
          const obj3 = ReanimatedRexport;
          obj3.runOnJS(tmp17)(size);
        }
        if (onScrollHandlerWorkletized != null) {
          const size1 = { width, height, offset: y, contentWidth: width2, contentHeight: height2 };
          tmp21(size1);
        }
      };
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
      ({
        isDragScrolling,
        IS_ANDROID: scrollOffsetValue,
        scrollTo: onScrollHandler(onScrollHandlerWorkletized[4]).scrollTo,
        scrollerRef: animatedRef,
        scrollOffsetValue,
        scrollLocked,
        onScrollHandler,
        runOnJS: onScrollHandler(onScrollHandlerWorkletized[4]).runOnJS,
        onScrollHandlerWorkletized,
      });
      const animatedScrollHandler = tmpResult9.useAnimatedScrollHandler(obj3);
      const tmpResult10 = onScrollHandler(onScrollHandlerWorkletized[4]);
      class D {
        constructor() {
          const obj = { showsVerticalScrollIndicator: !scrollLocked.get() };
          return obj;
        }
      }
      D.__closure = { scrollLocked };
      D.__workletHash = 2902739817621;
      D.__initData = __initData4;
      const animatedProps = tmpResult10.useAnimatedProps(D);
      if (cResult[0] === animatedScrollHandler) {
        if (cResult[1] === animatedProps) {
          if (cResult[2] === gestureRef) {
            let tmp16;
            if (cResult[3] === animatedRef) {
              tmp16 = cResult[4];
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
      let fn;
      let fn2;
      let fn3;
      let obj6;
      let tmp3Result3;
      let tmp3Result4;
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
      let obj2 = onScrollHandler(onScrollHandlerWorkletized[4]);
      const sharedValue = obj2.useSharedValue(false);
      let obj3 = onScrollHandler(onScrollHandlerWorkletized[4]);
      const sharedValue1 = obj3.useSharedValue(0);
      let gestureRef;
      const obj4 = onScrollHandler(onScrollHandlerWorkletized[4]);
      const sharedValue2 = obj4.useSharedValue(false);
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
      const tmp3Result = onScrollHandler(onScrollHandlerWorkletized[4]);
      animatedRef = tmp3Result.useAnimatedRef();
      const obj5 = {
        onScroll: tmp3Result3.useAnimatedScrollHandler(obj6),
        animatedProps: tmp3Result4.useAnimatedProps(H),
        scrollerRef: animatedRef,
        gestureRef,
      };
      obj6 = { onBeginDrag: D, onEndDrag: fn, onMomentumEnd: fn2, onScroll: fn3 };
      tmp3Result3 = onScrollHandler(onScrollHandlerWorkletized[4]);
      class D {
        constructor(arg0, arg1) {
          arg1.momentumEndCount = 0;
          const result = isDragScrolling.set(true);
        }
      }
      D.__closure = { isDragScrolling };
      D.__workletHash = 9168536183179;
      D.__initData = __initData5;
      fn = function _(velocity) {
        const result = isDragScrolling.set(false);
        velocity = velocity.velocity;
        let num;
        const _Math = Math;
        if (velocity != null) {
          num = velocity.y;
        }
        if (num == null) {
          num = 0;
        }
        if (0 === abs(num)) {
          const result1 = scrollLocked.set(false);
        }
      };
      fn.__closure = { isDragScrolling, scrollLocked };
      fn.__workletHash = 12072943282467;
      fn.__initData = __initData6;
      fn2 = function u(arg0, momentumEndCount) {
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
      const obj7 = { IS_ANDROID: scrollOffsetValue, scrollLocked };
      fn2.__closure = obj7;
      fn2.__workletHash = 4672426278030;
      fn2.__initData = __initData7;
      fn3 = function s(contentOffset) {
        let height;
        let height2;
        let width;
        let width2;
        const y = contentOffset.contentOffset.y;
        if (true !== isDragScrolling.get()) {
          let num6 = y;
          const tmp9 = closure_3 && y < 0;
          if (tmp9) {
            const obj2 = ReanimatedRexport;
            obj2.scrollTo(animatedRef, 0, 0, false);
            num6 = 0;
          }
          const result = scrollOffsetValue.set(num6);
        } else {
          y < scrollOffsetValue.get();
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
        }
        ({ width, height } = contentOffset.layoutMeasurement);
        ({ width: width2, height: height2 } = contentOffset.contentSize);
        if (null != onScrollHandler) {
          size = { width, height, offset: y, contentWidth: width2, contentHeight: height2 };
          const obj3 = ReanimatedRexport;
          obj3.runOnJS(tmp17)(size);
        }
        if (onScrollHandlerWorkletized != null) {
          const size1 = { width, height, offset: y, contentWidth: width2, contentHeight: height2 };
          tmp21(size1);
        }
      };
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
      ({
        isDragScrolling,
        IS_ANDROID: scrollOffsetValue,
        scrollTo: onScrollHandler(onScrollHandlerWorkletized[4]).scrollTo,
        scrollerRef: animatedRef,
        scrollOffsetValue,
        scrollLocked,
        onScrollHandler,
        runOnJS: onScrollHandler(onScrollHandlerWorkletized[4]).runOnJS,
        onScrollHandlerWorkletized,
      });
      tmp3Result4 = onScrollHandler(onScrollHandlerWorkletized[4]);
      class H {
        constructor() {
          const obj = { showsVerticalScrollIndicator: !scrollLocked.get() };
          return obj;
        }
      }
      H.__closure = { scrollLocked };
      H.__workletHash = 7788212990145;
      H.__initData = __initData9;
      return obj5;
    };
let size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/controls/utils/useAnimatedScrollLock.tsx");

export const ControlsGestureScrollLock = context;
export const useAnimatedScrollLock = tmp3;
