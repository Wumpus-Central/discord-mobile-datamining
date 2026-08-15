// discord_app/modules/chat_input/native/useChatInputHeightWorklet.native.tsx
import noop from "noop";
import { set } from "../../../utils/PlatformUtils.tsx";

const require = arg1;
let closure_4 = { code: "function useChatInputHeightWorkletNativeTsx1(event){const{contentSize,textFieldHeight,getChatInputHeightAnimationTimingWorklet,textFieldMinHeight}=this.__closure;contentSize.set(event.height);textFieldHeight.set(getChatInputHeightAnimationTimingWorklet(event.height,textFieldMinHeight.get()));}" };
let closure_5 = { code: "function useChatInputHeightWorkletNativeTsx2(){const{keyboardState,windowDimensions,getChatInputMaxHeightWorklet}=this.__closure;keyboardState.get();windowDimensions.get();return getChatInputMaxHeightWorklet();}" };
let closure_6 = { code: "function useChatInputHeightWorkletNativeTsx3(maxHeight,maxHeightPrev){const{isWorkletDriven,contentSize,textFieldHeight,getChatInputHeightAnimationTimingWorklet,textFieldMinHeight}=this.__closure;if(!isWorkletDriven||maxHeightPrev==null||maxHeight===maxHeightPrev){return;}if(contentSize.get()===0){return;}textFieldHeight.set(getChatInputHeightAnimationTimingWorklet(contentSize.get(),textFieldMinHeight.get()));}" };
let result = require("module_4115").fileFinishedImporting("modules/chat_input/native/useChatInputHeightWorklet.native.tsx");

export default function useChatInputHeightWorklet(textFieldHeight) {
  textFieldHeight = textFieldHeight.textFieldHeight;
  const textFieldMinHeight = textFieldHeight.textFieldMinHeight;
  let sharedValue;
  let event;
  let c4;
  let c5;
  let c6;
  let obj = textFieldHeight(sharedValue[2]);
  sharedValue = obj.useSharedValue(0);
  let obj1 = textFieldHeight(sharedValue[2]);
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
  c5 = tmp4;
  const tmp5 = textFieldMinHeight(sharedValue[5])({ ignoreKeyboard: true });
  c6 = tmp5;
  const obj4 = textFieldHeight(sharedValue[1]);
  const fn2 = function k() {
    let value = _undefined.get();
    value = _undefined2.get();
    return textFieldHeight(sharedValue[3]).getChatInputMaxHeightWorklet();
  };
  obj = { keyboardState: tmp4, windowDimensions: tmp5, getChatInputMaxHeightWorklet: textFieldHeight(sharedValue[3]).getChatInputMaxHeightWorklet };
  fn2.__closure = obj;
  fn2.__workletHash = 13334617579850;
  fn2.__initData = c5;
  class H {
    constructor(arg0, arg1) {
      tmp = c4;
      if (c4) {
        tmp2 = null;
        tmp = null != arg1;
      }
      if (tmp) {
        tmp3 = textFieldHeight;
        tmp = textFieldHeight !== arg1;
      }
      if (tmp) {
        tmp4 = c2;
        num = 0;
        tmp = 0 !== c2.get();
      }
      if (tmp) {
        tmp5 = textFieldHeight;
        tmp6 = textFieldHeight;
        tmp7 = c2;
        obj = textFieldHeight(c2[3]);
        tmp8 = c2;
        tmp10 = textFieldMinHeight;
        value = c2.get();
        result = textFieldHeight.set(obj.getChatInputHeightAnimationTimingWorklet(value, textFieldMinHeight.get()));
      }
      return;
    }
  }
  obj1 = { isWorkletDriven: isAndroidResult, contentSize: sharedValue, textFieldHeight, getChatInputHeightAnimationTimingWorklet: textFieldHeight(sharedValue[3]).getChatInputHeightAnimationTimingWorklet, textFieldMinHeight };
  H.__closure = obj1;
  H.__workletHash = 9298875396681;
  H.__initData = c6;
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