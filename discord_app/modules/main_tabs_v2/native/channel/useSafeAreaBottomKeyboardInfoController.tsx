// === Module 11947: useSafeAreaBottomKeyboardInfoController ===

// Module 11947 (useSafeAreaBottomKeyboardInfoController)
import NativeSafeAreaInsetsModuleDefault from "NativeSafeAreaInsetsModule" /* 1639 */;
import KeyboardStateDebuggingDefault from "KeyboardStateDebugging" /* 2016 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
let MetaQuestUtils = fn(1624);
MetaQuestUtils = MetaQuestUtils.isMetaQuest();
let closure_5 = { code: "(function useSafeAreaBottomKeyboardInfoControllerTsx1(e){let[scheduleOnRN,KeyboardStateDebugging,IS_SYSTEM_KEYBOARD_EXTERNAL,keyboardOverlapsCurrentAppEntry,keyboardOpenedHeight]=this.__closure;scheduleOnRN(KeyboardStateDebugging.keyboardControllerWorkletEvent,'onStart',e.height);if(IS_SYSTEM_KEYBOARD_EXTERNAL)return;if(e.height>0&&keyboardOverlapsCurrentAppEntry.get()){keyboardOpenedHeight.set(e.height);}})" };
let closure_6 = { code: "(function useSafeAreaBottomKeyboardInfoControllerTsx2(e){let[scheduleOnRN,KeyboardStateDebugging,IS_SYSTEM_KEYBOARD_EXTERNAL,keyboardOverlapsCurrentAppEntry,keyboardOpenedHeight]=this.__closure;scheduleOnRN(KeyboardStateDebugging.keyboardControllerWorkletEvent,'onEnd',e.height);if(IS_SYSTEM_KEYBOARD_EXTERNAL)return;if(e.height>0&&keyboardOverlapsCurrentAppEntry.get()){keyboardOpenedHeight.set(e.height);}})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/useSafeAreaBottomKeyboardInfoController.tsx");

export default function useSafeAreaBottomKeyboardInfoController() {
  const appEntryKey = require("AppEntryKeyContext").useAppEntryKey();
  _require = appEntryKey;
  let num = 0;
  if (!c4) {
    const KeyboardController = tmp(1641).KeyboardController;
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
    let isAndroidResult = tmp(1377).isAndroid();
    let tmp9 = !isAndroidResult;
    if (isAndroidResult) {
      let tmp11 = NativeSafeAreaInsetsModuleDefault.getImeInsets(false, appEntryKey) > 0;
      if (!tmp11) {
        let APP_ENTRY_KEYS = tmp(1640).APP_ENTRY_KEYS;
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
    }
    tmp7 = true === tmp9;
    const tmpResult = tmp(1377);
  }
  let num3 = 0;
  if (tmp7) {
    num3 = num;
  }
  let obj = require("AppEntryKeyContext");
  const keyboardOpenedHeight = require("module_1652").useSharedValue(num3);
  const tmpResult5 = require("module_1652");
  const keyboardOpenOrOpening = require("module_1652").useSharedValue(tmp7);
  const tmpResult6 = require("module_1652");
  const keyboardOverlapsCurrentAppEntry = require("module_1652").useSharedValue(tmp7);
  noop = keyboardOverlapsCurrentAppEntry;
  items = [appEntryKey, keyboardOpenOrOpening, keyboardOpenedHeight, keyboardOverlapsCurrentAppEntry];
  const effect = noop.useEffect(() => {
    function handleKeyboardShow(height) {
      if (height > 0) {
        closure_0 = c0;
        const isAndroidResult = c0(c2[2]).isAndroid();
        let tmp5 = !isAndroidResult;
        if (isAndroidResult) {
          let tmp2 = c1(c2[3]).getImeInsets(false, c0) > 0;
          if (!tmp2) {
            const APP_ENTRY_KEYS = c0(c2[4]).APP_ENTRY_KEYS;
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
          let obj = c1(c2[3]);
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
        const obj2 = c0(c2[2]);
      }
    }
    if (!c4) {
      _undefined = false;
      const KeyboardEvents = _undefined(_undefined3[6]).KeyboardEvents;
      closure_1 = KeyboardEvents.addListener("keyboardWillShow", (height) => {
        const result = KeyboardStateDebuggingDefault.keyboardControllerKeyboardWillShow(height.height);
        c0 = true;
        handleKeyboardShow(height.height);
      });
      const KeyboardEvents2 = _undefined(_undefined3[6]).KeyboardEvents;
      closure_2 = KeyboardEvents2.addListener("keyboardDidShow", (height) => {
        const result = KeyboardStateDebuggingDefault.keyboardControllerKeyboardDidShow(height.height);
        c0 = false;
        handleKeyboardShow(height.height);
      });
      const KeyboardEvents3 = _undefined(_undefined3[6]).KeyboardEvents;
      closure_3 = KeyboardEvents3.addListener("keyboardWillHide", () => {
        const result = KeyboardStateDebuggingDefault.keyboardControllerKeyboardWillHide();
        if (c3.get()) {
          if (!c0) {
            const result1 = c2.set(false);
          }
        }
      });
      const KeyboardEvents4 = _undefined(_undefined3[6]).KeyboardEvents;
      closure_4 = KeyboardEvents4.addListener("keyboardDidHide", () => {
        const result = KeyboardStateDebuggingDefault.keyboardControllerKeyboardDidHide();
        if (c3.get()) {
          c0 = false;
          const result1 = c2.set(false);
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
  const tmpResult7 = require("module_1652");
  const items1 = [closure_5, require("module_1705").scheduleOnRN, KeyboardStateDebuggingDefault, c4, keyboardOverlapsCurrentAppEntry, keyboardOpenedHeight];
  _require = undefined;
  c4 = undefined;
  [tmp19, tmp20, tmp21, tmp22, tmp23, tmp24] = items1;
  let obj2 = { onStart: null, onEnd: null };
  function useSafeAreaBottomKeyboardInfoControllerTsx1(height) {
    _undefined(_undefined2.keyboardControllerWorkletEvent, "onStart", height.height);
    if (!c2) {
      value = height.height > 0;
      if (value) {
        value = _undefined4.get();
      }
      if (value) {
        const result = _undefined5.set(height.height);
      }
    }
  }
  const items2 = [tmp20, tmp21, tmp22, tmp23, tmp24];
  useSafeAreaBottomKeyboardInfoControllerTsx1.__closure = items2;
  useSafeAreaBottomKeyboardInfoControllerTsx1.__workletHash = 16041436337775;
  useSafeAreaBottomKeyboardInfoControllerTsx1.__initData = tmp19;
  obj2.onStart = useSafeAreaBottomKeyboardInfoControllerTsx1;
  const items3 = [closure_6, require("module_1705").scheduleOnRN, KeyboardStateDebuggingDefault, c4, keyboardOverlapsCurrentAppEntry, keyboardOpenedHeight];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  c4 = undefined;
  [tmp25, tmp26, tmp27, tmp28, tmp29, tmp30] = items3;
  function useSafeAreaBottomKeyboardInfoControllerTsx2(height) {
    _undefined(_undefined2.keyboardControllerWorkletEvent, "onEnd", height.height);
    if (!c2) {
      value = height.height > 0;
      if (value) {
        value = _undefined4.get();
      }
      if (value) {
        const result = _undefined5.set(height.height);
      }
    }
  }
  const items4 = [tmp26, tmp27, tmp28, tmp29, tmp30];
  useSafeAreaBottomKeyboardInfoControllerTsx2.__closure = items4;
  useSafeAreaBottomKeyboardInfoControllerTsx2.__workletHash = 7470195563171;
  useSafeAreaBottomKeyboardInfoControllerTsx2.__initData = tmp25;
  obj2.onEnd = useSafeAreaBottomKeyboardInfoControllerTsx2;
  require("KeyboardChatScrollView").useKeyboardHandler(obj2, []);
  return { keyboardOpenOrOpening, keyboardOpenedHeight, keyboardOverlapsCurrentAppEntry };
};
export const IS_SYSTEM_KEYBOARD_EXTERNAL = MetaQuestUtils;