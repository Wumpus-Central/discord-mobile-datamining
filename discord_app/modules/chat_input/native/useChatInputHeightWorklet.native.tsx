// === Module 11644: useChatInputHeightWorklet ===

// Module 11644 (useChatInputHeightWorklet)
import PlatformUtils from "PlatformUtils" /* 1369 */;
import useChatInputMaxHeight from "useChatInputMaxHeight" /* 11645 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let set;

let closure_4 = { code: "function useChatInputHeightWorkletNativeTsx1(event){const{contentSize,textFieldHeight,getChatInputHeightAnimationTimingWorklet,textFieldMinHeight}=this.__closure;contentSize.set(event.height);textFieldHeight.set(getChatInputHeightAnimationTimingWorklet(event.height,textFieldMinHeight.get()));}" };
let __initData = { code: "function useChatInputHeightWorkletNativeTsx2(){const{keyboardState,windowDimensions,getChatInputMaxHeightWorklet}=this.__closure;keyboardState.get();windowDimensions.get();return getChatInputMaxHeightWorklet();}" };
let __initData2 = { code: "function useChatInputHeightWorkletNativeTsx3(maxHeight,maxHeightPrev){const{isWorkletDriven,contentSize,textFieldHeight,getChatInputHeightAnimationTimingWorklet,textFieldMinHeight}=this.__closure;if(!isWorkletDriven||maxHeightPrev==null||maxHeight===maxHeightPrev){return;}if(contentSize.get()===0){return;}textFieldHeight.set(getChatInputHeightAnimationTimingWorklet(contentSize.get(),textFieldMinHeight.get()));}" };
const __initData3 = { code: "function useChatInputHeightWorkletNativeTsx4(event){const{contentSize,textFieldHeight,getChatInputHeightAnimationTimingWorklet,textFieldMinHeight}=this.__closure;contentSize.set(event.height);textFieldHeight.set(getChatInputHeightAnimationTimingWorklet(event.height,textFieldMinHeight.get()));}" };
const __initData4 = { code: "function useChatInputHeightWorkletNativeTsx5(){const{keyboardState,windowDimensions,getChatInputMaxHeightWorklet}=this.__closure;keyboardState.get();windowDimensions.get();return getChatInputMaxHeightWorklet();}" };
const __initData5 = { code: "function useChatInputHeightWorkletNativeTsx6(maxHeight,maxHeightPrev){const{isWorkletDriven,contentSize,textFieldHeight,getChatInputHeightAnimationTimingWorklet,textFieldMinHeight}=this.__closure;if(!isWorkletDriven||maxHeightPrev==null||maxHeight===maxHeightPrev){return;}if(contentSize.get()===0){return;}textFieldHeight.set(getChatInputHeightAnimationTimingWorklet(contentSize.get(),textFieldMinHeight.get()));}" };
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((textFieldHeight) => {
  let closure_5;
  let closure_6;
  let isAndroidResult;
  let sharedValue;
  let tmp20;
  let tmp = textFieldHeight;
  let obj = textFieldHeight(sharedValue[3]);
  const cResult = obj.c(14);
  textFieldHeight = textFieldHeight.textFieldHeight;
  const textFieldMinHeight = textFieldHeight.textFieldMinHeight;
  const obj2 = textFieldHeight(sharedValue[4]);
  sharedValue = obj2.useSharedValue(0);
  if (cResult[0] === sharedValue) {
    if (cResult[1] === textFieldHeight) {
      let tmp5;
      let tmp7;
      let tmp12;
      if (cResult[2] === textFieldMinHeight) {
        tmp5 = cResult[3];
      }
      const _Symbol = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items = ["onChangeContentSize"];
        cResult[4] = items;
        tmp7 = items;
      } else {
        tmp7 = cResult[4];
      }
      const tmpResult = tmp(sharedValue[4]);
      const event = tmpResult.useEvent(tmp5, tmp7);
      const tmpResult3 = tmp(sharedValue[1]);
      isAndroidResult = tmpResult3.isAndroid();
      const tmp11 = textFieldMinHeight(sharedValue[6])();
      __initData = tmp11;
      const _Symbol2 = Symbol;
      const tmp10 = textFieldMinHeight;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { ignoreKeyboard: true };
        cResult[5] = obj3;
        tmp12 = obj3;
      } else {
        tmp12 = cResult[5];
      }
      const tmp13 = tmp10(sharedValue[7])(tmp12);
      __initData2 = tmp13;
      const fn2 = function v() {
        const value = closure_5.get();
        const value2 = closure_6.get();
        const obj = useChatInputMaxHeight;
        return obj.getChatInputMaxHeightWorklet();
      };
      const obj4 = { keyboardState: tmp11, windowDimensions: tmp13, getChatInputMaxHeightWorklet: tmp(sharedValue[5]).getChatInputMaxHeightWorklet };
      const useAnimatedReaction = tmp(tmp2[4]).useAnimatedReaction;
      tmp(sharedValue[4]);
      fn2.__closure = obj4;
      fn2.__workletHash = 13334617579850;
      fn2.__initData = __initData;
      const fn3 = function p(arg0, arg1) {
        const tmp = isAndroidResult && null != arg1 && arg0 !== arg1 && 0 !== sharedValue.get();
        if (tmp) {
          set = textFieldHeight.set;
          const getChatInputHeightAnimationTimingWorklet = useChatInputMaxHeight.getChatInputHeightAnimationTimingWorklet;
          useChatInputMaxHeight;
          const value = sharedValue.get();
          const result = set(getChatInputHeightAnimationTimingWorklet(value, textFieldMinHeight.get()));
        }
      };
      fn3.__closure = { isWorkletDriven: isAndroidResult, contentSize: sharedValue, textFieldHeight, getChatInputHeightAnimationTimingWorklet: tmp(sharedValue[5]).getChatInputHeightAnimationTimingWorklet, textFieldMinHeight };
      fn3.__workletHash = 9298875396681;
      fn3.__initData = __initData2;
      const obj5 = { isWorkletDriven: isAndroidResult, contentSize: sharedValue, textFieldHeight, getChatInputHeightAnimationTimingWorklet: tmp(sharedValue[5]).getChatInputHeightAnimationTimingWorklet, textFieldMinHeight };
      const animatedReaction = useAnimatedReaction(fn2, fn3);
      if (cResult[6] !== event) {
        class F {
          constructor(arg0) {
            const obj = PlatformUtils;
            if (obj.isAndroid()) {
              const workletEventHandler = event.workletEventHandler;
              workletEventHandler.registerForEvents(arg0);
            }
          }
        }
        cResult[6] = event;
        cResult[7] = F;
      } else {
        class F {
          constructor(arg0) {
            const obj = PlatformUtils;
            if (obj.isAndroid()) {
              const workletEventHandler = event.workletEventHandler;
              workletEventHandler.registerForEvents(arg0);
            }
          }
        }
      }
      if (cResult[8] === sharedValue) {
        class F {
          constructor(arg0) {
            const obj = PlatformUtils;
            if (obj.isAndroid()) {
              const workletEventHandler = event.workletEventHandler;
              workletEventHandler.registerForEvents(arg0);
            }
          }
        }
        if (cResult[11] === F) {
          class F {
            constructor(arg0) {
              const obj = PlatformUtils;
              if (obj.isAndroid()) {
                const workletEventHandler = event.workletEventHandler;
                workletEventHandler.registerForEvents(arg0);
              }
            }
          }
          return tmp20;
        }
        const obj6 = { registerViewTag: F, unregisterViewTag: tmp19 };
        cResult[11] = F;
        cResult[12] = tmp19;
        cResult[13] = obj6;
        tmp20 = obj6;
      }
      const fn4 = function f(arg0) {
        const obj = PlatformUtils;
        if (obj.isAndroid()) {
          const workletEventHandler = event.workletEventHandler;
          workletEventHandler.unregisterFromEvents(arg0);
          const result = sharedValue.set(0);
        }
      };
      cResult[8] = sharedValue;
      cResult[9] = event;
      cResult[10] = fn4;
    }
  }
  const fn = function u(height) {
    const result = sharedValue.set(height.height);
    set = textFieldHeight.set;
    const obj = useChatInputMaxHeight;
    const result1 = set(obj.getChatInputHeightAnimationTimingWorklet(height.height, textFieldMinHeight.get()));
  };
  fn.__closure = { contentSize: sharedValue, textFieldHeight, getChatInputHeightAnimationTimingWorklet: tmp(sharedValue[5]).getChatInputHeightAnimationTimingWorklet, textFieldMinHeight };
  fn.__workletHash = 8560364367725;
  fn.__initData = isAndroidResult;
  cResult[0] = sharedValue;
  cResult[1] = textFieldHeight;
  cResult[2] = textFieldMinHeight;
  cResult[3] = fn;
  tmp5 = fn;
  ({ contentSize: sharedValue, textFieldHeight, getChatInputHeightAnimationTimingWorklet: tmp(sharedValue[5]).getChatInputHeightAnimationTimingWorklet, textFieldMinHeight });
}) : ((textFieldHeight) => {
  let items;
  let items1;
  textFieldHeight = textFieldHeight.textFieldHeight;
  const textFieldMinHeight = textFieldHeight.textFieldMinHeight;
  let sharedValue;
  let obj = textFieldHeight(sharedValue[4]);
  sharedValue = obj.useSharedValue(0);
  const fn = function h(height) {
    const result = sharedValue.set(height.height);
    set = textFieldHeight.set;
    const obj = useChatInputMaxHeight;
    const result1 = set(obj.getChatInputHeightAnimationTimingWorklet(height.height, textFieldMinHeight.get()));
  };
  const obj2 = textFieldHeight(sharedValue[4]);
  fn.__closure = { contentSize: sharedValue, textFieldHeight, getChatInputHeightAnimationTimingWorklet: textFieldHeight(sharedValue[5]).getChatInputHeightAnimationTimingWorklet, textFieldMinHeight };
  fn.__workletHash = 16770824923016;
  fn.__initData = __initData3;
  ({ contentSize: sharedValue, textFieldHeight, getChatInputHeightAnimationTimingWorklet: textFieldHeight(sharedValue[5]).getChatInputHeightAnimationTimingWorklet, textFieldMinHeight });
  const event = obj2.useEvent(fn, ["onChangeContentSize"]);
  const obj4 = textFieldHeight(sharedValue[1]);
  const isAndroidResult = obj4.isAndroid();
  let c4 = isAndroidResult;
  const tmp4 = textFieldMinHeight(sharedValue[6])();
  let closure_5 = tmp4;
  const tmp5 = textFieldMinHeight(sharedValue[7])({ ignoreKeyboard: true });
  let closure_6 = tmp5;
  const fn2 = function c() {
    const value = closure_5.get();
    const value2 = closure_6.get();
    const obj = useChatInputMaxHeight;
    return obj.getChatInputMaxHeightWorklet();
  };
  const useAnimatedReaction = textFieldHeight(sharedValue[4]).useAnimatedReaction;
  const tmp6 = textFieldHeight(sharedValue[4]);
  fn2.__closure = { keyboardState: tmp4, windowDimensions: tmp5, getChatInputMaxHeightWorklet: textFieldHeight(sharedValue[5]).getChatInputMaxHeightWorklet };
  fn2.__workletHash = 3665604675309;
  fn2.__initData = __initData4;
  ({ keyboardState: tmp4, windowDimensions: tmp5, getChatInputMaxHeightWorklet: textFieldHeight(sharedValue[5]).getChatInputMaxHeightWorklet });
  class H {
    constructor(arg0, arg1) {
      const tmp = c4 && null != arg1 && arg0 !== arg1 && 0 !== sharedValue.get();
      if (tmp) {
        set = textFieldHeight.set;
        const getChatInputHeightAnimationTimingWorklet = useChatInputMaxHeight.getChatInputHeightAnimationTimingWorklet;
        useChatInputMaxHeight;
        const value = sharedValue.get();
        const result = set(getChatInputHeightAnimationTimingWorklet(value, textFieldMinHeight.get()));
      }
    }
  }
  H.__closure = { isWorkletDriven: isAndroidResult, contentSize: sharedValue, textFieldHeight, getChatInputHeightAnimationTimingWorklet: textFieldHeight(sharedValue[5]).getChatInputHeightAnimationTimingWorklet, textFieldMinHeight };
  H.__workletHash = 17022883949036;
  H.__initData = __initData5;
  ({ isWorkletDriven: isAndroidResult, contentSize: sharedValue, textFieldHeight, getChatInputHeightAnimationTimingWorklet: textFieldHeight(sharedValue[5]).getChatInputHeightAnimationTimingWorklet, textFieldMinHeight });
  const animatedReaction = useAnimatedReaction(fn2, H);
  const obj7 = {
    registerViewTag: event.useCallback((arg0) => {
      const obj = PlatformUtils;
      if (obj.isAndroid()) {
        const workletEventHandler = event.workletEventHandler;
        workletEventHandler.registerForEvents(arg0);
      }
    }, items),
    unregisterViewTag: event.useCallback((arg0) => {
      const obj = PlatformUtils;
      if (obj.isAndroid()) {
        const workletEventHandler = event.workletEventHandler;
        workletEventHandler.unregisterFromEvents(arg0);
        const result = sharedValue.set(0);
      }
    }, items1)
  };
  items = [event];
  items1 = [sharedValue, event];
  return obj7;
});
function getIsChatInputHeightWorkletEnabled() {
  const obj = PlatformUtils;
  return obj.isAndroid();
}
let result = size.fileFinishedImporting("modules/chat_input/native/useChatInputHeightWorklet.native.tsx");

export default tmp2;
export { getIsChatInputHeightWorkletEnabled };