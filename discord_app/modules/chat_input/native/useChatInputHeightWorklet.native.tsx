// === Module 12030: useChatInputHeightWorklet ===

// Module 12030 (useChatInputHeightWorklet)
import PlatformUtils from "PlatformUtils" /* 1115 */;
import useChatInputMaxHeight from "useChatInputMaxHeight" /* 12031 */;
import noop from "module_19" /* 19 */;

require = fn;
let __initData = { code: "function useChatInputHeightWorkletNativeTsx1(event){const{contentSize,textFieldHeight,getChatInputHeightAnimationTimingWorklet,textFieldMinHeight}=this.__closure;contentSize.set(event.height);textFieldHeight.set(getChatInputHeightAnimationTimingWorklet(event.height,textFieldMinHeight.get()));}" };
let __initData2 = { code: "function useChatInputHeightWorkletNativeTsx2(){const{keyboardState,windowDimensions,getChatInputMaxHeightWorklet}=this.__closure;keyboardState.get();windowDimensions.get();return getChatInputMaxHeightWorklet();}" };
let __initData3 = { code: "function useChatInputHeightWorkletNativeTsx3(maxHeight,maxHeightPrev){const{isWorkletDriven,contentSize,textFieldHeight,getChatInputHeightAnimationTimingWorklet,textFieldMinHeight}=this.__closure;if(!isWorkletDriven||maxHeightPrev==null||maxHeight===maxHeightPrev){return;}if(contentSize.get()===0){return;}textFieldHeight.set(getChatInputHeightAnimationTimingWorklet(contentSize.get(),textFieldMinHeight.get()));}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/useChatInputHeightWorklet.native.tsx");

export default function useChatInputHeightWorklet(textFieldHeight) {
  textFieldHeight = textFieldHeight.textFieldHeight;
  const textFieldMinHeight = textFieldHeight.textFieldMinHeight;
  let sharedValue;
  __initData = undefined;
  let obj = textFieldHeight(sharedValue[2]);
  sharedValue = obj.useSharedValue(0);
  let obj1 = textFieldHeight(sharedValue[2]);
  const fn = function s(height) {
    const result = sharedValue.set(height.height);
    const result1 = textFieldHeight.set(useChatInputMaxHeight.getChatInputHeightAnimationTimingWorklet(height.height, textFieldMinHeight.get()));
  };
  obj = { contentSize: sharedValue, textFieldHeight, getChatInputHeightAnimationTimingWorklet: textFieldHeight(sharedValue[3]).getChatInputHeightAnimationTimingWorklet, textFieldMinHeight };
  fn.__closure = obj;
  fn.__workletHash = 8560364367725;
  fn.__initData = __initData;
  const event = obj1.useEvent(fn, ["onChangeContentSize"]);
  const isAndroidResult = textFieldHeight(sharedValue[1]).isAndroid();
  __initData = isAndroidResult;
  const tmp4 = textFieldMinHeight(sharedValue[4])();
  __initData2 = tmp4;
  const tmp5 = textFieldMinHeight(sharedValue[5])({ ignoreKeyboard: true });
  __initData3 = tmp5;
  const obj4 = textFieldHeight(sharedValue[1]);
  const fn2 = function k() {
    closure_5.get();
    value = closure_6.get();
    return useChatInputMaxHeight.getChatInputMaxHeightWorklet();
  };
  obj = { keyboardState: tmp4, windowDimensions: tmp5, getChatInputMaxHeightWorklet: textFieldHeight(sharedValue[3]).getChatInputMaxHeightWorklet };
  fn2.__closure = obj;
  fn2.__workletHash = 13334617579850;
  fn2.__initData = __initData2;
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
        obj = closure_0(closure_2[3]);
        tmp8 = closure_2;
        tmp10 = textFieldMinHeight;
        value = closure_2.get();
        result = textFieldHeight.set(obj.getChatInputHeightAnimationTimingWorklet(value, textFieldMinHeight.get()));
      }
      return;
    }
  }
  obj1 = { isWorkletDriven: isAndroidResult, contentSize: sharedValue, textFieldHeight, getChatInputHeightAnimationTimingWorklet: textFieldHeight(sharedValue[3]).getChatInputHeightAnimationTimingWorklet, textFieldMinHeight };
  H.__closure = obj1;
  H.__workletHash = 9298875396681;
  H.__initData = __initData3;
  const animatedReaction = textFieldHeight(sharedValue[2]).useAnimatedReaction(fn2, H);
  const obj2 = { registerViewTag: null, unregisterViewTag: null };
  const items = [event];
  obj2.registerViewTag = event.useCallback((arg0) => {
    if (obj.isAndroid()) {
      event.workletEventHandler.registerForEvents(arg0);
      const workletEventHandler = event.workletEventHandler;
    }
    obj = PlatformUtils;
  }, items);
  const items1 = [sharedValue, event];
  obj2.unregisterViewTag = event.useCallback((arg0) => {
    if (obj.isAndroid()) {
      event.workletEventHandler.unregisterFromEvents(arg0);
      const result = sharedValue.set(0);
      const workletEventHandler = event.workletEventHandler;
    }
    obj = PlatformUtils;
  }, items1);
  return obj2;
};
export const getIsChatInputHeightWorkletEnabled = function getIsChatInputHeightWorkletEnabled() {
  return PlatformUtils.isAndroid();
};