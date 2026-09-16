// === Module 12172: useChatInputHeightWorklet ===

// Module 12172 (useChatInputHeightWorklet)
import PlatformUtils from "PlatformUtils" /* 1364 */;
import useChatInputMaxHeight from "useChatInputMaxHeight" /* 12173 */;
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
  sharedValue = textFieldHeight(sharedValue[2]).useSharedValue(0);
  let obj = textFieldHeight(sharedValue[2]);
  const fn = function s(height) {
    const result = sharedValue.set(height.height);
    const result1 = textFieldHeight.set(useChatInputMaxHeight.getChatInputHeightAnimationTimingWorklet(height.height, textFieldMinHeight.get()));
  };
  const obj2 = textFieldHeight(sharedValue[2]);
  fn.__closure = { contentSize: sharedValue, textFieldHeight, getChatInputHeightAnimationTimingWorklet: textFieldHeight(sharedValue[3]).getChatInputHeightAnimationTimingWorklet, textFieldMinHeight };
  fn.__workletHash = 8560364367725;
  fn.__initData = __initData;
  const event = obj2.useEvent(fn, ["onChangeContentSize"]);
  const obj3 = { contentSize: sharedValue, textFieldHeight, getChatInputHeightAnimationTimingWorklet: textFieldHeight(sharedValue[3]).getChatInputHeightAnimationTimingWorklet, textFieldMinHeight };
  const isAndroidResult = textFieldHeight(sharedValue[1]).isAndroid();
  __initData = isAndroidResult;
  const tmp4 = textFieldMinHeight(sharedValue[4])();
  __initData2 = tmp4;
  const tmp5 = textFieldMinHeight(sharedValue[5])({ ignoreKeyboard: true });
  __initData3 = tmp5;
  const obj4 = textFieldHeight(sharedValue[1]);
  const fn2 = function k() {
    value = closure_5.get();
    value2 = closure_6.get();
    return useChatInputMaxHeight.getChatInputMaxHeightWorklet();
  };
  const obj5 = textFieldHeight(sharedValue[2]);
  fn2.__closure = { keyboardState: tmp4, windowDimensions: tmp5, getChatInputMaxHeightWorklet: textFieldHeight(sharedValue[3]).getChatInputMaxHeightWorklet };
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
  const obj6 = { keyboardState: tmp4, windowDimensions: tmp5, getChatInputMaxHeightWorklet: textFieldHeight(sharedValue[3]).getChatInputMaxHeightWorklet };
  H.__closure = { isWorkletDriven: isAndroidResult, contentSize: sharedValue, textFieldHeight, getChatInputHeightAnimationTimingWorklet: textFieldHeight(sharedValue[3]).getChatInputHeightAnimationTimingWorklet, textFieldMinHeight };
  H.__workletHash = 9298875396681;
  H.__initData = __initData3;
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
};
export const getIsChatInputHeightWorkletEnabled = function getIsChatInputHeightWorkletEnabled() {
  return PlatformUtils.isAndroid();
};