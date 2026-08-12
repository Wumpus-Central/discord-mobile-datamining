// discord_app/modules/chat_input/native/useChatInputHeightWorklet.native.tsx
import noop from "noop";
import { set } from "../../../utils/PlatformUtils.tsx";

const require = arg1;
let closure_4 = { code: "function useChatInputHeightWorkletNativeTsx1(event){const{contentSize,textFieldHeight,getChatInputHeightAnimationTimingWorklet}=this.__closure;contentSize.set(event.height);textFieldHeight.set(getChatInputHeightAnimationTimingWorklet(event.height));}" };
let closure_5 = { code: "function useChatInputHeightWorkletNativeTsx2(){const{keyboardState,windowDimensions,getChatInputMaxHeightWorklet}=this.__closure;keyboardState.get();windowDimensions.get();return getChatInputMaxHeightWorklet();}" };
let closure_6 = { code: "function useChatInputHeightWorkletNativeTsx3(maxHeight,maxHeightPrev){const{isWorkletDriven,contentSize,textFieldHeight,getChatInputHeightAnimationTimingWorklet}=this.__closure;if(!isWorkletDriven||maxHeightPrev==null||maxHeight===maxHeightPrev){return;}if(contentSize.get()===0){return;}textFieldHeight.set(getChatInputHeightAnimationTimingWorklet(contentSize.get()));}" };
let result = require("module_4083").fileFinishedImporting("modules/chat_input/native/useChatInputHeightWorklet.native.tsx");

export default function useChatInputHeightWorklet(textFieldHeight) {
  textFieldHeight = textFieldHeight.textFieldHeight;
  let sharedValue;
  let event;
  let React;
  let c4;
  let c5;
  let obj = textFieldHeight(event[2]);
  sharedValue = obj.useSharedValue(0);
  let obj1 = textFieldHeight(event[2]);
  const fn = function u(height) {
    const result = sharedValue.set(height.height);
    const result1 = textFieldHeight.set(textFieldHeight(event[3]).getChatInputHeightAnimationTimingWorklet(height.height));
  };
  obj = { contentSize: sharedValue, textFieldHeight, getChatInputHeightAnimationTimingWorklet: textFieldHeight(event[3]).getChatInputHeightAnimationTimingWorklet };
  fn.__closure = obj;
  fn.__workletHash = 11599375567188;
  fn.__initData = c4;
  event = obj1.useEvent(fn, ["onChangeContentSize"]);
  const isAndroidResult = textFieldHeight(event[1]).isAndroid();
  React = isAndroidResult;
  const tmp4 = sharedValue(event[4])();
  c4 = tmp4;
  const tmp5 = sharedValue(event[5])({ ignoreKeyboard: true });
  c5 = tmp5;
  const obj4 = textFieldHeight(event[1]);
  class H {
    constructor() {
      value = c4.get();
      value1 = c5.get();
      obj = textFieldHeight(c2[3]);
      return obj.getChatInputMaxHeightWorklet();
    }
  }
  obj = { keyboardState: tmp4, windowDimensions: tmp5, getChatInputMaxHeightWorklet: textFieldHeight(event[3]).getChatInputMaxHeightWorklet };
  H.__closure = obj;
  H.__workletHash = 13334617579850;
  H.__initData = c5;
  const fn2 = function s(arg0, arg1) {
    let tmp = c3;
    if (c3) {
      tmp = null != arg1;
    }
    if (tmp) {
      tmp = arg0 !== arg1;
    }
    if (tmp) {
      tmp = 0 !== sharedValue.get();
    }
    if (tmp) {
      const result = textFieldHeight.set(textFieldHeight(event[3]).getChatInputHeightAnimationTimingWorklet(sharedValue.get()));
      const obj = textFieldHeight(event[3]);
    }
  };
  obj1 = { isWorkletDriven: isAndroidResult, contentSize: sharedValue, textFieldHeight, getChatInputHeightAnimationTimingWorklet: textFieldHeight(event[3]).getChatInputHeightAnimationTimingWorklet };
  fn2.__closure = obj1;
  fn2.__workletHash = 15828170755920;
  fn2.__initData = closure_6;
  const animatedReaction = textFieldHeight(event[2]).useAnimatedReaction(H, fn2);
  const obj5 = textFieldHeight(event[2]);
  const items = [event];
  const items1 = [sharedValue, event];
  return {
    registerViewTag: React.useCallback((arg0) => {
      if (obj.isAndroid()) {
        event.workletEventHandler.registerForEvents(arg0);
        const workletEventHandler = event.workletEventHandler;
      }
    }, items),
    unregisterViewTag: React.useCallback((arg0) => {
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