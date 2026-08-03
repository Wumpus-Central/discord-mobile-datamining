// === Module 10576: useSafeAreaBottomKeyboardInfoController ===

// Module 10576 (useSafeAreaBottomKeyboardInfoController)
import noop from "noop";
import isMetaQuest from "isMetaQuest";

const require = arg1;
isMetaQuest = isMetaQuest.isMetaQuest();
let closure_5 = { code: "function useSafeAreaBottomKeyboardInfoControllerTsx1(e){const{runOnJS,KeyboardStateDebugging,IS_SYSTEM_KEYBOARD_EXTERNAL,keyboardOverlapsCurrentAppEntry,keyboardOpenedHeight}=this.__closure;runOnJS(KeyboardStateDebugging.keyboardControllerWorkletEvent)('onStart',e.height);if(IS_SYSTEM_KEYBOARD_EXTERNAL)return;if(e.height>0&&keyboardOverlapsCurrentAppEntry.get()){keyboardOpenedHeight.set(e.height);}}" };
let closure_6 = { code: "function useSafeAreaBottomKeyboardInfoControllerTsx2(e){const{runOnJS,KeyboardStateDebugging,IS_SYSTEM_KEYBOARD_EXTERNAL,keyboardOverlapsCurrentAppEntry,keyboardOpenedHeight}=this.__closure;runOnJS(KeyboardStateDebugging.keyboardControllerWorkletEvent)('onEnd',e.height);if(IS_SYSTEM_KEYBOARD_EXTERNAL)return;if(e.height>0&&keyboardOverlapsCurrentAppEntry.get()){keyboardOpenedHeight.set(e.height);}}" };
let result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/channel/useSafeAreaBottomKeyboardInfoController.tsx");

export default function useSafeAreaBottomKeyboardInfoController() {
  let obj = appEntryKey(keyboardOpenOrOpening[5]);
  appEntryKey = obj.useAppEntryKey();
  let num = 0;
  if (!isMetaQuest) {
    const KeyboardController = tmp(tmp2[6]).KeyboardController;
    const stateResult = KeyboardController.state();
    let num2;
    if (stateResult != null) {
      num2 = stateResult.height;
    }
    if (num2 == null) {
      num2 = 0;
    }
    num = num2;
  }
  let tmp7 = 0 !== num;
  if (tmp7) {
    let tmpResult = tmp(tmp2[2]);
    let isAndroidResult = tmpResult.isAndroid();
    let tmp9 = !isAndroidResult;
    if (isAndroidResult) {
      let tmp11 = keyboardOpenedHeight(tmp2[3]).getImeInsets(false, appEntryKey) > 0;
      if (!tmp11) {
        let APP_ENTRY_KEYS = tmp(tmp2[4]).APP_ENTRY_KEYS;
        let someResult = APP_ENTRY_KEYS.some((arg0) => {
          let tmp = arg0 !== closure_0;
          if (tmp) {
            tmp = outer1_1(outer1_2[3]).getImeInsets(false, arg0) > 0;
            const obj = outer1_1(outer1_2[3]);
          }
          return tmp;
        });
        let tmp13 = !someResult;
        if (!someResult) {
          tmp13 = null;
        }
        tmp11 = tmp13;
      }
      tmp9 = tmp11;
      const obj3 = keyboardOpenedHeight(tmp2[3]);
    }
    tmp7 = true === tmp9;
  }
  let num3 = 0;
  if (tmp7) {
    num3 = num;
  }
  tmpResult = tmp(tmp2[7]);
  keyboardOpenedHeight = tmpResult.useSharedValue(num3);
  keyboardOpenOrOpening = appEntryKey(keyboardOpenOrOpening[7]).useSharedValue(tmp7);
  const tmpResult1 = appEntryKey(keyboardOpenOrOpening[7]);
  const keyboardOverlapsCurrentAppEntry = appEntryKey(keyboardOpenOrOpening[7]).useSharedValue(tmp7);
  const items = [appEntryKey, keyboardOpenOrOpening, keyboardOpenedHeight, keyboardOverlapsCurrentAppEntry];
  const effect = keyboardOverlapsCurrentAppEntry.useEffect(() => {
    function handleKeyboardShow(height) {
      if (height > 0) {
        const isAndroidResult = callback(store[2]).isAndroid();
        let tmp5 = !isAndroidResult;
        if (isAndroidResult) {
          let tmp2 = lib(tmp17[3]).getImeInsets(false, tmp15) > 0;
          if (!tmp2) {
            const APP_ENTRY_KEYS = tmp16(tmp17[4]).APP_ENTRY_KEYS;
            const someResult = APP_ENTRY_KEYS.some((arg0) => {
              let tmp = arg0 !== closure_0;
              if (tmp) {
                tmp = outer1_1(outer1_2[3]).getImeInsets(false, arg0) > 0;
                const obj = outer1_1(outer1_2[3]);
              }
              return tmp;
            });
            let tmp4 = !someResult;
            if (!someResult) {
              tmp4 = null;
            }
            tmp2 = tmp4;
          }
          tmp5 = tmp2;
          let obj = lib(tmp17[3]);
        }
        if (null != tmp5) {
          const result = store2.set(tmp5);
        }
        if (false !== tmp5) {
          if (true === tmp5) {
            const result1 = store.set(true);
            const result2 = lib.set(height);
          }
        } else {
          const result3 = store.set(false);
        }
        const obj2 = callback(store[2]);
        tmp15 = closure_0;
        tmp16 = callback;
      }
    }
    if (!outer1_4) {
      let c0 = false;
      const KeyboardEvents = appEntryKey(keyboardOpenOrOpening[6]).KeyboardEvents;
      let closure_1 = KeyboardEvents.addListener("keyboardWillShow", (height) => {
        const result = keyboardOpenedHeight(keyboardOpenOrOpening[8]).keyboardControllerKeyboardWillShow(height.height);
        let c0 = true;
        handleKeyboardShow(height.height);
      });
      const KeyboardEvents2 = appEntryKey(keyboardOpenOrOpening[6]).KeyboardEvents;
      let closure_2 = KeyboardEvents2.addListener("keyboardDidShow", (height) => {
        const result = keyboardOpenedHeight(keyboardOpenOrOpening[8]).keyboardControllerKeyboardDidShow(height.height);
        let c0 = false;
        handleKeyboardShow(height.height);
      });
      const KeyboardEvents3 = appEntryKey(keyboardOpenOrOpening[6]).KeyboardEvents;
      let noop = KeyboardEvents3.addListener("keyboardWillHide", () => {
        const result = keyboardOpenedHeight(keyboardOpenOrOpening[8]).keyboardControllerKeyboardWillHide();
        if (store2.get()) {
          if (!c0) {
            const result1 = store.set(false);
          }
        }
      });
      const KeyboardEvents4 = appEntryKey(keyboardOpenOrOpening[6]).KeyboardEvents;
      let closure_4 = KeyboardEvents4.addListener("keyboardDidHide", () => {
        const result = keyboardOpenedHeight(keyboardOpenOrOpening[8]).keyboardControllerKeyboardDidHide();
        if (store2.get()) {
          let c0 = false;
          const result1 = store.set(false);
        }
      });
      return () => {
        lib.remove();
        store.remove();
        store2.remove();
        closure_4.remove();
      };
    }
  }, items);
  const tmpResult2 = appEntryKey(keyboardOpenOrOpening[7]);
  obj = { onStart: null, onEnd: null };
  const fn = function s(height) {
    appEntryKey(keyboardOpenOrOpening[7]).runOnJS(keyboardOpenedHeight(keyboardOpenOrOpening[8]).keyboardControllerWorkletEvent)("onStart", height.height);
    if (!outer1_4) {
      let value = height.height > 0;
      if (value) {
        value = keyboardOverlapsCurrentAppEntry.get();
      }
      if (value) {
        const result = keyboardOpenedHeight.set(height.height);
      }
    }
  };
  obj = { runOnJS: tmp(tmp2[7]).runOnJS, KeyboardStateDebugging: keyboardOpenedHeight(tmp2[8]), IS_SYSTEM_KEYBOARD_EXTERNAL: tmp4, keyboardOverlapsCurrentAppEntry, keyboardOpenedHeight };
  fn.__closure = obj;
  fn.__workletHash = 11726427166555;
  fn.__initData = closure_5;
  obj[0] = fn;
  const fn2 = function l(height) {
    appEntryKey(keyboardOpenOrOpening[7]).runOnJS(keyboardOpenedHeight(keyboardOpenOrOpening[8]).keyboardControllerWorkletEvent)("onEnd", height.height);
    if (!outer1_4) {
      let value = height.height > 0;
      if (value) {
        value = keyboardOverlapsCurrentAppEntry.get();
      }
      if (value) {
        const result = keyboardOpenedHeight.set(height.height);
      }
    }
  };
  const tmpResult3 = appEntryKey(keyboardOpenOrOpening[6]);
  fn2.__closure = { runOnJS: appEntryKey(keyboardOpenOrOpening[7]).runOnJS, KeyboardStateDebugging: keyboardOpenedHeight(keyboardOpenOrOpening[8]), IS_SYSTEM_KEYBOARD_EXTERNAL: isMetaQuest, keyboardOverlapsCurrentAppEntry, keyboardOpenedHeight };
  fn2.__workletHash = 15110866363831;
  fn2.__initData = closure_6;
  obj[1] = fn2;
  tmpResult3.useKeyboardHandler(obj, []);
  return { keyboardOpenOrOpening, keyboardOpenedHeight, keyboardOverlapsCurrentAppEntry };
};
export const IS_SYSTEM_KEYBOARD_EXTERNAL = isMetaQuest;