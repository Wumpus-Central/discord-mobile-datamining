// === Module 14527: useChatInputHeightWorklet ===

// Module 14527 (useChatInputHeightWorklet)
import PlatformUtils from "PlatformUtils" /* 1377 */;
import useKeyboardStateSharedValueDefault from "useKeyboardStateSharedValue" /* 13703 */;
import useWindowDimensionsSharedValueDefault from "useWindowDimensionsSharedValue" /* 13704 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
let closure_4 = { code: "(function useChatInputHeightWorkletNativeTsx1(event){let[contentSize,textFieldHeight,getChatInputHeightAnimationTimingWorklet,textFieldMinHeight]=this.__closure;contentSize.set(event.height);textFieldHeight.set(getChatInputHeightAnimationTimingWorklet(event.height,textFieldMinHeight.get()));})" };
let closure_5 = { code: "(function useChatInputHeightWorkletNativeTsx2(){let[keyboardState,windowDimensions,getChatInputMaxHeightWorklet]=this.__closure;keyboardState.get();windowDimensions.get();return getChatInputMaxHeightWorklet();})" };
let closure_6 = { code: "(function useChatInputHeightWorkletNativeTsx3(maxHeight,maxHeightPrev){let[isWorkletDriven,contentSize,textFieldHeight,getChatInputHeightAnimationTimingWorklet,textFieldMinHeight]=this.__closure;if(!isWorkletDriven||maxHeightPrev==null||maxHeight===maxHeightPrev){return;}if(contentSize.get()===0){return;}textFieldHeight.set(getChatInputHeightAnimationTimingWorklet(contentSize.get(),textFieldMinHeight.get()));})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/useChatInputHeightWorklet.native.tsx");

export default function useChatInputHeightWorklet(arg0) {
  ({ textFieldHeight, textFieldMinHeight } = arg0);
  _require = undefined;
  const sharedValue = require("module_1652").useSharedValue(0);
  _require = sharedValue;
  let obj = require("module_1652");
  items = [c4, sharedValue, textFieldHeight, require("useChatInputMaxHeight").getChatInputHeightAnimationTimingWorklet, textFieldMinHeight];
  _require = undefined;
  [tmp4, tmp5, tmp6, tmp7, tmp8] = items;
  function useChatInputHeightWorkletNativeTsx1(height) {
    const result = _undefined.set(height.height);
    const result1 = _undefined2.set(_undefined3(height.height, _undefined4.get()));
  }
  const items1 = [tmp5, tmp6, tmp7, tmp8];
  useChatInputHeightWorkletNativeTsx1.__closure = items1;
  useChatInputHeightWorkletNativeTsx1.__workletHash = 620916776372;
  useChatInputHeightWorkletNativeTsx1.__initData = tmp4;
  const event = require("module_1652").useEvent(useChatInputHeightWorkletNativeTsx1, ["onChangeContentSize"]);
  const obj2 = require("module_1652");
  const tmpResult = require("PlatformUtils");
  const isAndroidResult = require("PlatformUtils").isAndroid();
  const tmp11 = useKeyboardStateSharedValueDefault();
  const tmp12 = useWindowDimensionsSharedValueDefault({ ignoreKeyboard: true });
  const items2 = [closure_5, tmp11, tmp12, require("useChatInputMaxHeight").getChatInputMaxHeightWorklet];
  _require = undefined;
  [tmp13, tmp14, tmp15, tmp16] = items2;
  function useChatInputHeightWorkletNativeTsx2() {
    value = _undefined.get();
    const value2 = _undefined2.get();
    return _undefined3();
  }
  const items3 = [tmp14, tmp15, tmp16];
  useChatInputHeightWorkletNativeTsx2.__closure = items3;
  useChatInputHeightWorkletNativeTsx2.__workletHash = 9634242494291;
  useChatInputHeightWorkletNativeTsx2.__initData = tmp13;
  const items4 = [closure_6, isAndroidResult, sharedValue, textFieldHeight, require("useChatInputMaxHeight").getChatInputHeightAnimationTimingWorklet, textFieldMinHeight];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  c4 = undefined;
  [tmp17, tmp18, tmp19, tmp20, tmp21, tmp22] = items4;
  function useChatInputHeightWorkletNativeTsx3(arg0, arg1) {
    let tmp = c0;
    if (c0) {
      tmp = null != arg1;
    }
    if (tmp) {
      tmp = arg0 !== arg1;
    }
    if (tmp) {
      tmp = 0 !== _undefined2.get();
    }
    if (tmp) {
      value = _undefined2.get();
      const result = _undefined3.set(_undefined4(value, _undefined5.get()));
    }
  }
  const items5 = [tmp18, tmp19, tmp20, tmp21, tmp22];
  useChatInputHeightWorkletNativeTsx3.__closure = items5;
  useChatInputHeightWorkletNativeTsx3.__workletHash = 14811065728720;
  useChatInputHeightWorkletNativeTsx3.__initData = tmp17;
  const animatedReaction = require("module_1652").useAnimatedReaction(useChatInputHeightWorkletNativeTsx2, useChatInputHeightWorkletNativeTsx3);
  const obj3 = { registerViewTag: null, unregisterViewTag: null };
  const items6 = [event];
  obj3.registerViewTag = noop.useCallback((findNodeHandleResult) => {
    if (obj.isAndroid()) {
      _undefined2.workletEventHandler.registerForEvents(findNodeHandleResult);
      const workletEventHandler = _undefined2.workletEventHandler;
    }
    obj = PlatformUtils;
  }, items6);
  const items7 = [sharedValue, event];
  obj3.unregisterViewTag = noop.useCallback((findNodeHandleResult) => {
    if (obj.isAndroid()) {
      _undefined2.workletEventHandler.unregisterFromEvents(findNodeHandleResult);
      const result = _undefined.set(0);
      const workletEventHandler = _undefined2.workletEventHandler;
    }
    obj = PlatformUtils;
  }, items7);
  return obj3;
};
export function getIsChatInputHeightWorkletEnabled() {
  return PlatformUtils.isAndroid();
}