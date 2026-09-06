// === Module 11355: useSafeAreaBottomKeyboardInfoController ===

// Module 11355 (useSafeAreaBottomKeyboardInfoController)
import KeyboardStateDebuggingDefault from "KeyboardStateDebugging" /* 1873 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import noop from "module_19" /* 19 */;

require = fn;
let MetaQuestUtils = fn(1608);
MetaQuestUtils = MetaQuestUtils.isMetaQuest();
const __initData = { code: "function useSafeAreaBottomKeyboardInfoControllerTsx1(e){const{runOnJS,KeyboardStateDebugging,IS_SYSTEM_KEYBOARD_EXTERNAL,keyboardOverlapsCurrentAppEntry,keyboardOpenedHeight}=this.__closure;runOnJS(KeyboardStateDebugging.keyboardControllerWorkletEvent)('onStart',e.height);if(IS_SYSTEM_KEYBOARD_EXTERNAL)return;if(e.height>0&&keyboardOverlapsCurrentAppEntry.get()){keyboardOpenedHeight.set(e.height);}}" };
const __initData2 = { code: "function useSafeAreaBottomKeyboardInfoControllerTsx2(e){const{runOnJS,KeyboardStateDebugging,IS_SYSTEM_KEYBOARD_EXTERNAL,keyboardOverlapsCurrentAppEntry,keyboardOpenedHeight}=this.__closure;runOnJS(KeyboardStateDebugging.keyboardControllerWorkletEvent)('onEnd',e.height);if(IS_SYSTEM_KEYBOARD_EXTERNAL)return;if(e.height>0&&keyboardOverlapsCurrentAppEntry.get()){keyboardOpenedHeight.set(e.height);}}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/useSafeAreaBottomKeyboardInfoController.tsx");

export default function useSafeAreaBottomKeyboardInfoController() {
  let obj = appEntryKey(keyboardOpenOrOpening[5]);
  appEntryKey = obj.useAppEntryKey();
  let num = 0;
  if (!MetaQuestUtils) {
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
    closure_129_0 = appEntryKey;
    let tmpResult = tmp(tmp2[2]);
    let isAndroidResult = tmpResult.isAndroid();
    let tmp9 = !isAndroidResult;
    if (isAndroidResult) {
      let tmp11 = keyboardOpenedHeight(tmp2[3]).getImeInsets(false, appEntryKey) > 0;
      if (!tmp11) {
        let APP_ENTRY_KEYS = tmp(tmp2[4]).APP_ENTRY_KEYS;
        let someResult = APP_ENTRY_KEYS.some((item) => {
          let tmp = item !== closure_0;
          if (tmp) {
            tmp = closure_1(dependencyMap[3]).getImeInsets(false, item) > 0;
            const obj = closure_1(dependencyMap[3]);
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
        closure_0 = c0;
        const isAndroidResult = appEntryKey(keyboardOpenOrOpening[2]).isAndroid();
        let tmp5 = !isAndroidResult;
        if (isAndroidResult) {
          let tmp2 = keyboardOpenedHeight(keyboardOpenOrOpening[3]).getImeInsets(false, c0) > 0;
          if (!tmp2) {
            const APP_ENTRY_KEYS = appEntryKey(keyboardOpenOrOpening[4]).APP_ENTRY_KEYS;
            const someResult = APP_ENTRY_KEYS.some((item) => {
              let tmp = item !== closure_0;
              if (tmp) {
                tmp = closure_1(dependencyMap[3]).getImeInsets(false, item) > 0;
                const obj = closure_1(dependencyMap[3]);
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
          let obj = keyboardOpenedHeight(keyboardOpenOrOpening[3]);
        }
        if (null != tmp5) {
          const result = closure_3.set(tmp5);
        }
        if (false !== tmp5) {
          if (true === tmp5) {
            const result1 = dependencyMap.set(true);
            const result2 = closure_1.set(height);
          }
        } else {
          const result3 = dependencyMap.set(false);
        }
        const obj2 = appEntryKey(keyboardOpenOrOpening[2]);
      }
    }
    if (!MetaQuestUtils) {
      c0 = false;
      const KeyboardEvents = appEntryKey(keyboardOpenOrOpening[6]).KeyboardEvents;
      closure_1 = KeyboardEvents.addListener("keyboardWillShow", (height) => {
        const result = KeyboardStateDebuggingDefault.keyboardControllerKeyboardWillShow(height.height);
        c0 = true;
        handleKeyboardShow(height.height);
      });
      const KeyboardEvents2 = appEntryKey(keyboardOpenOrOpening[6]).KeyboardEvents;
      closure_2 = KeyboardEvents2.addListener("keyboardDidShow", (height) => {
        const result = KeyboardStateDebuggingDefault.keyboardControllerKeyboardDidShow(height.height);
        c0 = false;
        handleKeyboardShow(height.height);
      });
      const KeyboardEvents3 = appEntryKey(keyboardOpenOrOpening[6]).KeyboardEvents;
      closure_3 = KeyboardEvents3.addListener("keyboardWillHide", () => {
        const result = KeyboardStateDebuggingDefault.keyboardControllerKeyboardWillHide();
        if (keyboardOverlapsCurrentAppEntry.get()) {
          if (!c0) {
            const result1 = keyboardOpenOrOpening.set(false);
          }
        }
      });
      const KeyboardEvents4 = appEntryKey(keyboardOpenOrOpening[6]).KeyboardEvents;
      closure_4 = KeyboardEvents4.addListener("keyboardDidHide", () => {
        const result = KeyboardStateDebuggingDefault.keyboardControllerKeyboardDidHide();
        if (keyboardOverlapsCurrentAppEntry.get()) {
          c0 = false;
          const result1 = keyboardOpenOrOpening.set(false);
        }
      });
      return () => {
        closure_1.remove();
        closure_2.remove();
        closure_3.remove();
        closure_4.remove();
      };
    }
  }, items);
  const tmpResult2 = appEntryKey(keyboardOpenOrOpening[7]);
  obj = { onStart: null, onEnd: null };
  const fn = function s(height) {
    ReanimatedRexport.runOnJS(KeyboardStateDebuggingDefault.keyboardControllerWorkletEvent)("onStart", height.height);
    if (!MetaQuestUtils) {
      value = height.height > 0;
      if (value) {
        value = keyboardOverlapsCurrentAppEntry.get();
      }
      if (value) {
        const result = keyboardOpenedHeight.set(height.height);
      }
    }
  };
  obj = { runOnJS: tmp(tmp2[7]).runOnJS, KeyboardStateDebugging: keyboardOpenedHeight(tmp2[8]), IS_SYSTEM_KEYBOARD_EXTERNAL: MetaQuestUtils, keyboardOverlapsCurrentAppEntry, keyboardOpenedHeight };
  fn.__closure = obj;
  fn.__workletHash = 11726427166555;
  fn.__initData = __initData;
  obj.onStart = fn;
  const fn2 = function l(height) {
    ReanimatedRexport.runOnJS(KeyboardStateDebuggingDefault.keyboardControllerWorkletEvent)("onEnd", height.height);
    if (!MetaQuestUtils) {
      value = height.height > 0;
      if (value) {
        value = keyboardOverlapsCurrentAppEntry.get();
      }
      if (value) {
        const result = keyboardOpenedHeight.set(height.height);
      }
    }
  };
  const tmpResult3 = appEntryKey(keyboardOpenOrOpening[6]);
  fn2.__closure = { runOnJS: appEntryKey(keyboardOpenOrOpening[7]).runOnJS, KeyboardStateDebugging: keyboardOpenedHeight(keyboardOpenOrOpening[8]), IS_SYSTEM_KEYBOARD_EXTERNAL: MetaQuestUtils, keyboardOverlapsCurrentAppEntry, keyboardOpenedHeight };
  fn2.__workletHash = 15110866363831;
  fn2.__initData = __initData2;
  obj.onEnd = fn2;
  tmpResult3.useKeyboardHandler(obj, []);
  return { keyboardOpenOrOpening, keyboardOpenedHeight, keyboardOverlapsCurrentAppEntry };
};
export const IS_SYSTEM_KEYBOARD_EXTERNAL = MetaQuestUtils;