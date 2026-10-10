// === Module 11705: useChatInputHeightWorklet ===

// Module 11705 (useChatInputHeightWorklet)
import PlatformUtils from "PlatformUtils" /* 1382 */;
import useChatInputMaxHeight from "useChatInputMaxHeight" /* 11706 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_4 = { code: "function useChatInputHeightWorkletNativeTsx1(event){const{contentSize,textFieldHeight,getChatInputHeightAnimationTimingWorklet,textFieldMinHeight}=this.__closure;contentSize.set(event.height);textFieldHeight.set(getChatInputHeightAnimationTimingWorklet(event.height,textFieldMinHeight.get()));}" };
let __initData = { code: "function useChatInputHeightWorkletNativeTsx2(){const{keyboardState,windowDimensions,getChatInputMaxHeightWorklet}=this.__closure;keyboardState.get();windowDimensions.get();return getChatInputMaxHeightWorklet();}" };
let __initData2 = { code: "function useChatInputHeightWorkletNativeTsx3(maxHeight,maxHeightPrev){const{isWorkletDriven,contentSize,textFieldHeight,getChatInputHeightAnimationTimingWorklet,textFieldMinHeight}=this.__closure;if(!isWorkletDriven||maxHeightPrev==null||maxHeight===maxHeightPrev){return;}if(contentSize.get()===0){return;}textFieldHeight.set(getChatInputHeightAnimationTimingWorklet(contentSize.get(),textFieldMinHeight.get()));}" };
const __initData3 = { code: "function useChatInputHeightWorkletNativeTsx4(event){const{contentSize,textFieldHeight,getChatInputHeightAnimationTimingWorklet,textFieldMinHeight}=this.__closure;contentSize.set(event.height);textFieldHeight.set(getChatInputHeightAnimationTimingWorklet(event.height,textFieldMinHeight.get()));}" };
const __initData4 = { code: "function useChatInputHeightWorkletNativeTsx5(){const{keyboardState,windowDimensions,getChatInputMaxHeightWorklet}=this.__closure;keyboardState.get();windowDimensions.get();return getChatInputMaxHeightWorklet();}" };
const __initData5 = { code: "function useChatInputHeightWorkletNativeTsx6(maxHeight,maxHeightPrev){const{isWorkletDriven,contentSize,textFieldHeight,getChatInputHeightAnimationTimingWorklet,textFieldMinHeight}=this.__closure;if(!isWorkletDriven||maxHeightPrev==null||maxHeight===maxHeightPrev){return;}if(contentSize.get()===0){return;}textFieldHeight.set(getChatInputHeightAnimationTimingWorklet(contentSize.get(),textFieldMinHeight.get()));}" };
const ReactCompilerGating = fn(558);
function getIsChatInputHeightWorkletEnabled() {
  return PlatformUtils.isAndroid();
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/useChatInputHeightWorklet.native.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useChatInputHeightWorklet(textFieldHeight) {
  const cResult = textFieldHeight(sharedValue[3]).c(14);
  textFieldHeight = textFieldHeight.textFieldHeight;
  const textFieldMinHeight = textFieldHeight.textFieldMinHeight;
  let obj = textFieldHeight(sharedValue[3]);
  sharedValue = textFieldHeight(sharedValue[4]).useSharedValue(0);
  if (cResult[0] === sharedValue) {
    if (cResult[1] === textFieldHeight) {
      if (cResult[2] === textFieldMinHeight) {
        let tmp5 = cResult[3];
      }
      const _Symbol = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items = ["onChangeContentSize"];
        cResult[4] = items;
        let tmp7 = items;
      } else {
        tmp7 = cResult[4];
      }
      const event = tmp(tmp2[4]).useEvent(tmp5, tmp7);
      const tmpResult = tmp(tmp2[4]);
      const isAndroidResult = tmp(tmp2[1]).isAndroid();
      const tmp11 = textFieldMinHeight(tmp2[6])();
      __initData = tmp11;
      const _Symbol2 = Symbol;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { ignoreKeyboard: true };
        cResult[5] = obj3;
        let tmp12 = obj3;
      } else {
        tmp12 = cResult[5];
      }
      const tmp13 = textFieldMinHeight(tmp2[7])(tmp12);
      __initData2 = tmp13;
      const tmpResult3 = tmp(tmp2[1]);
      const fn2 = function v() {
        value = closure_5.get();
        value2 = closure_6.get();
        return useChatInputMaxHeight.getChatInputMaxHeightWorklet();
      };
      const obj4 = { keyboardState: tmp11, windowDimensions: tmp13, getChatInputMaxHeightWorklet: tmp(tmp2[5]).getChatInputMaxHeightWorklet };
      fn2.__closure = obj4;
      fn2.__workletHash = 13334617579850;
      fn2.__initData = __initData;
      const fn3 = function p(arg0, arg1) {
        let tmp = isAndroidResult;
        if (isAndroidResult) {
          tmp = null != arg1;
        }
        if (tmp) {
          tmp = arg0 !== arg1;
        }
        if (tmp) {
          tmp = 0 !== sharedValue.get();
        }
        if (tmp) {
          value = sharedValue.get();
          const result = textFieldHeight.set(useChatInputMaxHeight.getChatInputHeightAnimationTimingWorklet(value, textFieldMinHeight.get()));
        }
      };
      const obj5 = { isWorkletDriven: isAndroidResult, contentSize: sharedValue, textFieldHeight, getChatInputHeightAnimationTimingWorklet: tmp(tmp2[5]).getChatInputHeightAnimationTimingWorklet, textFieldMinHeight };
      fn3.__closure = obj5;
      fn3.__workletHash = 9298875396681;
      fn3.__initData = __initData2;
      const animatedReaction = tmp(tmp2[4]).useAnimatedReaction(fn2, fn3);
      if (cResult[6] !== event) {
        class F {
          constructor(arg0) {
            obj = closure_0(closure_2[1]);
            if (obj.isAndroid()) {
              tmp = textFieldHeight;
              tmp2 = closure_3;
              workletEventHandler = closure_3.workletEventHandler;
              registerForEventsResult = workletEventHandler.registerForEvents(textFieldHeight);
            }
            return;
          }
        }
        cResult[6] = event;
        cResult[7] = F;
      } else {
        class F {
          constructor(arg0) {
            obj = closure_0(closure_2[1]);
            if (obj.isAndroid()) {
              tmp = textFieldHeight;
              tmp2 = closure_3;
              workletEventHandler = closure_3.workletEventHandler;
              registerForEventsResult = workletEventHandler.registerForEvents(textFieldHeight);
            }
            return;
          }
        }
      }
      if (cResult[8] === sharedValue) {
        class F {
          constructor(arg0) {
            obj = closure_0(closure_2[1]);
            if (obj.isAndroid()) {
              tmp = textFieldHeight;
              tmp2 = closure_3;
              workletEventHandler = closure_3.workletEventHandler;
              registerForEventsResult = workletEventHandler.registerForEvents(textFieldHeight);
            }
            return;
          }
        }
        if (cResult[11] === F) {
          class F {
            constructor(arg0) {
              obj = closure_0(closure_2[1]);
              if (obj.isAndroid()) {
                tmp = textFieldHeight;
                tmp2 = closure_3;
                workletEventHandler = closure_3.workletEventHandler;
                registerForEventsResult = workletEventHandler.registerForEvents(textFieldHeight);
              }
              return;
            }
          }
          return tmp19;
        }
        const obj6 = { registerViewTag: F, unregisterViewTag: tmp18 };
        cResult[11] = F;
        cResult[12] = tmp18;
        cResult[13] = obj6;
        tmp19 = obj6;
      }
      const fn4 = function f(arg0) {
        if (obj.isAndroid()) {
          event.workletEventHandler.unregisterFromEvents(arg0);
          const result = sharedValue.set(0);
          const workletEventHandler = event.workletEventHandler;
        }
        obj = PlatformUtils;
      };
      cResult[8] = sharedValue;
      cResult[9] = event;
      cResult[10] = fn4;
      const tmpResult4 = tmp(tmp2[4]);
    }
  }
  const fn = function u(height) {
    const result = sharedValue.set(height.height);
    const result1 = textFieldHeight.set(useChatInputMaxHeight.getChatInputHeightAnimationTimingWorklet(height.height, textFieldMinHeight.get()));
  };
  const obj2 = textFieldHeight(sharedValue[4]);
  fn.__closure = { contentSize: sharedValue, textFieldHeight, getChatInputHeightAnimationTimingWorklet: textFieldHeight(sharedValue[5]).getChatInputHeightAnimationTimingWorklet, textFieldMinHeight };
  fn.__workletHash = 8560364367725;
  fn.__initData = isAndroidResult;
  cResult[0] = sharedValue;
  cResult[1] = textFieldHeight;
  cResult[2] = textFieldMinHeight;
  cResult[3] = fn;
  tmp5 = fn;
  const obj7 = { contentSize: sharedValue, textFieldHeight, getChatInputHeightAnimationTimingWorklet: textFieldHeight(sharedValue[5]).getChatInputHeightAnimationTimingWorklet, textFieldMinHeight };
}) : (function useChatInputHeightWorklet(textFieldHeight) {
  textFieldHeight = textFieldHeight.textFieldHeight;
  const textFieldMinHeight = textFieldHeight.textFieldMinHeight;
  let sharedValue;
  sharedValue = textFieldHeight(sharedValue[4]).useSharedValue(0);
  let obj = textFieldHeight(sharedValue[4]);
  const fn = function h(height) {
    const result = sharedValue.set(height.height);
    const result1 = textFieldHeight.set(useChatInputMaxHeight.getChatInputHeightAnimationTimingWorklet(height.height, textFieldMinHeight.get()));
  };
  const obj2 = textFieldHeight(sharedValue[4]);
  fn.__closure = { contentSize: sharedValue, textFieldHeight, getChatInputHeightAnimationTimingWorklet: textFieldHeight(sharedValue[5]).getChatInputHeightAnimationTimingWorklet, textFieldMinHeight };
  fn.__workletHash = 16770824923016;
  fn.__initData = __initData3;
  const event = obj2.useEvent(fn, ["onChangeContentSize"]);
  const obj3 = { contentSize: sharedValue, textFieldHeight, getChatInputHeightAnimationTimingWorklet: textFieldHeight(sharedValue[5]).getChatInputHeightAnimationTimingWorklet, textFieldMinHeight };
  const isAndroidResult = textFieldHeight(sharedValue[1]).isAndroid();
  c4 = isAndroidResult;
  const tmp4 = textFieldMinHeight(sharedValue[6])();
  closure_5 = tmp4;
  const tmp5 = textFieldMinHeight(sharedValue[7])({ ignoreKeyboard: true });
  closure_6 = tmp5;
  const obj4 = textFieldHeight(sharedValue[1]);
  const fn2 = function c() {
    value = closure_5.get();
    value2 = closure_6.get();
    return useChatInputMaxHeight.getChatInputMaxHeightWorklet();
  };
  const obj5 = textFieldHeight(sharedValue[4]);
  fn2.__closure = { keyboardState: tmp4, windowDimensions: tmp5, getChatInputMaxHeightWorklet: textFieldHeight(sharedValue[5]).getChatInputMaxHeightWorklet };
  fn2.__workletHash = 3665604675309;
  fn2.__initData = __initData4;
  class H {
    constructor(arg0, arg1) {
      tmp = closure_4;
      if (closure_4) {
        tmp2 = null;
        tmp = null != arg1;
      }
      if (tmp) {
        tmp3 = textFieldHeight;
        tmp = textFieldHeight !== arg1;
      }
      if (tmp) {
        tmp4 = closure_2;
        num = 0;
        tmp = 0 !== closure_2.get();
      }
      if (tmp) {
        tmp5 = textFieldHeight;
        tmp6 = closure_0;
        tmp7 = closure_2;
        obj = closure_0(closure_2[5]);
        tmp8 = closure_2;
        tmp10 = textFieldMinHeight;
        value = closure_2.get();
        result = textFieldHeight.set(obj.getChatInputHeightAnimationTimingWorklet(value, textFieldMinHeight.get()));
      }
      return;
    }
  }
  const obj6 = { keyboardState: tmp4, windowDimensions: tmp5, getChatInputMaxHeightWorklet: textFieldHeight(sharedValue[5]).getChatInputMaxHeightWorklet };
  H.__closure = { isWorkletDriven: isAndroidResult, contentSize: sharedValue, textFieldHeight, getChatInputHeightAnimationTimingWorklet: textFieldHeight(sharedValue[5]).getChatInputHeightAnimationTimingWorklet, textFieldMinHeight };
  H.__workletHash = 17022883949036;
  H.__initData = __initData5;
  const animatedReaction = obj5.useAnimatedReaction(fn2, H);
  const obj8 = { registerViewTag: null, unregisterViewTag: null };
  const items = [event];
  obj8.registerViewTag = event.useCallback((arg0) => {
    if (obj.isAndroid()) {
      event.workletEventHandler.registerForEvents(arg0);
      const workletEventHandler = event.workletEventHandler;
    }
    obj = PlatformUtils;
  }, items);
  const items1 = [sharedValue, event];
  obj8.unregisterViewTag = event.useCallback((arg0) => {
    if (obj.isAndroid()) {
      event.workletEventHandler.unregisterFromEvents(arg0);
      const result = sharedValue.set(0);
      const workletEventHandler = event.workletEventHandler;
    }
    obj = PlatformUtils;
  }, items1);
  return obj8;
});
export { getIsChatInputHeightWorkletEnabled };