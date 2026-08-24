// === Module 11206: useChatInputHeightWorklet ===

// Module 11206 (useChatInputHeightWorklet)
import set from "set" /* 500 */;
import closure_3 from "noop" /* 19 */;

require = arg1;
let closure_4 = { code: "function useChatInputHeightWorkletNativeTsx1(event){const{contentSize,textFieldHeight,getChatInputHeightAnimationTimingWorklet,textFieldMinHeight}=this.__closure;contentSize.set(event.height);textFieldHeight.set(getChatInputHeightAnimationTimingWorklet(event.height,textFieldMinHeight.get()));}" };
let closure_5 = { code: "function useChatInputHeightWorkletNativeTsx2(){const{keyboardState,windowDimensions,getChatInputMaxHeightWorklet}=this.__closure;keyboardState.get();windowDimensions.get();return getChatInputMaxHeightWorklet();}" };
let closure_6 = { code: "function useChatInputHeightWorkletNativeTsx3(maxHeight,maxHeightPrev){const{isWorkletDriven,contentSize,textFieldHeight,getChatInputHeightAnimationTimingWorklet,textFieldMinHeight}=this.__closure;if(!isWorkletDriven||maxHeightPrev==null||maxHeight===maxHeightPrev){return;}if(contentSize.get()===0){return;}textFieldHeight.set(getChatInputHeightAnimationTimingWorklet(contentSize.get(),textFieldMinHeight.get()));}" };
let result = require("set").fileFinishedImporting("modules/chat_input/native/useChatInputHeightWorklet.native.tsx");

export default function useChatInputHeightWorklet(textFieldHeight) {
  textFieldHeight = textFieldHeight.textFieldHeight;
  const textFieldMinHeight = textFieldHeight.textFieldMinHeight;
  let sharedValue;
  let event;
  c4 = undefined;
  closure_5 = undefined;
  closure_6 = undefined;
  let obj = textFieldHeight(sharedValue[2]);
  sharedValue = obj.useSharedValue(0);
  obj1 = textFieldHeight(sharedValue[2]);
  const fn = function s(height) {
    const result = sharedValue.set(height.height);
    const result1 = textFieldHeight.set(textFieldHeight(sharedValue[3]).getChatInputHeightAnimationTimingWorklet(height.height, textFieldMinHeight.get()));
  };
  obj = { contentSize: sharedValue, textFieldHeight, getChatInputHeightAnimationTimingWorklet: textFieldHeight(sharedValue[3]).getChatInputHeightAnimationTimingWorklet, textFieldMinHeight };
  fn.__closure = obj;
  fn.__workletHash = 8560364367725;
  fn.__initData = c4;
  event = obj1.useEvent(fn, ["onChangeContentSize"]);
  const isAndroidResult = textFieldHeight(sharedValue[1]).isAndroid();
  c4 = isAndroidResult;
  const tmp4 = textFieldMinHeight(sharedValue[4])();
  closure_5 = tmp4;
  const tmp5 = textFieldMinHeight(sharedValue[5])({ ignoreKeyboard: true });
  closure_6 = tmp5;
  const obj4 = textFieldHeight(sharedValue[1]);
  const fn2 = function k() {
    let value = closure_5.get();
    value = closure_6.get();
    return textFieldHeight(sharedValue[3]).getChatInputMaxHeightWorklet();
  };
  obj = { keyboardState: tmp4, windowDimensions: tmp5, getChatInputMaxHeightWorklet: textFieldHeight(sharedValue[3]).getChatInputMaxHeightWorklet };
  fn2.__closure = obj;
  fn2.__workletHash = 13334617579850;
  fn2.__initData = closure_5;
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
        tmp6 = textFieldHeight;
        tmp7 = closure_2;
        obj = textFieldHeight(closure_2[3]);
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
  H.__initData = closure_6;
  const animatedReaction = textFieldHeight(sharedValue[2]).useAnimatedReaction(fn2, H);
  const obj5 = textFieldHeight(sharedValue[2]);
  const items = [event];
  const items1 = [sharedValue, event];
  return {
    registerViewTag: event.useCallback((arg0) => {
      if (obj.isAndroid()) {
        event.workletEventHandler.registerForEvents(arg0);
        const workletEventHandler = event.workletEventHandler;
      }
    }, items),
    unregisterViewTag: event.useCallback((arg0) => {
      if (obj.isAndroid()) {
        event.workletEventHandler.unregisterFromEvents(arg0);
        const result = sharedValue.set(0);
        const workletEventHandler = event.workletEventHandler;
      }
    }, items1)
  };
};
export const getIsChatInputHeightWorkletEnabled = function getIsChatInputHeightWorkletEnabled() {
  return set.isAndroid();
};