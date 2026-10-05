// === Module 9775: useSafeAreaBottomKeyboardInfoController ===

// Module 9775 (useSafeAreaBottomKeyboardInfoController)
import KeyboardStateDebuggingDefault from "KeyboardStateDebugging" /* 1880 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import react from "react" /* 19 */;
import MetaQuestUtils_mod from "MetaQuestUtils" /* 1615 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let MetaQuestUtils = MetaQuestUtils_mod;
MetaQuestUtils = MetaQuestUtils.isMetaQuest();
const __initData = { code: "function useSafeAreaBottomKeyboardInfoControllerTsx1(e_1){const{runOnJS,KeyboardStateDebugging,IS_SYSTEM_KEYBOARD_EXTERNAL,keyboardOverlapsCurrentAppEntry,keyboardOpenedHeight}=this.__closure;runOnJS(KeyboardStateDebugging.keyboardControllerWorkletEvent)(\"onStart\",e_1.height);if(IS_SYSTEM_KEYBOARD_EXTERNAL){return;}if(e_1.height>0&&keyboardOverlapsCurrentAppEntry.get()){keyboardOpenedHeight.set(e_1.height);}}" };
const __initData2 = { code: "function useSafeAreaBottomKeyboardInfoControllerTsx2(e_2){const{runOnJS,KeyboardStateDebugging,IS_SYSTEM_KEYBOARD_EXTERNAL,keyboardOverlapsCurrentAppEntry,keyboardOpenedHeight}=this.__closure;runOnJS(KeyboardStateDebugging.keyboardControllerWorkletEvent)(\"onEnd\",e_2.height);if(IS_SYSTEM_KEYBOARD_EXTERNAL){return;}if(e_2.height>0&&keyboardOverlapsCurrentAppEntry.get()){keyboardOpenedHeight.set(e_2.height);}}" };
const __initData3 = { code: "function useSafeAreaBottomKeyboardInfoControllerTsx3(e_1){const{runOnJS,KeyboardStateDebugging,IS_SYSTEM_KEYBOARD_EXTERNAL,keyboardOverlapsCurrentAppEntry,keyboardOpenedHeight}=this.__closure;runOnJS(KeyboardStateDebugging.keyboardControllerWorkletEvent)('onStart',e_1.height);if(IS_SYSTEM_KEYBOARD_EXTERNAL)return;if(e_1.height>0&&keyboardOverlapsCurrentAppEntry.get()){keyboardOpenedHeight.set(e_1.height);}}" };
const __initData4 = { code: "function useSafeAreaBottomKeyboardInfoControllerTsx4(e_2){const{runOnJS,KeyboardStateDebugging,IS_SYSTEM_KEYBOARD_EXTERNAL,keyboardOverlapsCurrentAppEntry,keyboardOpenedHeight}=this.__closure;runOnJS(KeyboardStateDebugging.keyboardControllerWorkletEvent)('onEnd',e_2.height);if(IS_SYSTEM_KEYBOARD_EXTERNAL)return;if(e_2.height>0&&keyboardOverlapsCurrentAppEntry.get()){keyboardOpenedHeight.set(e_2.height);}}" };
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let appEntryKey;
  let fn2;
  let fn3;
  let sharedValue;
  let sharedValue1;
  let tmp2 = sharedValue1;
  let obj = appEntryKey(sharedValue1[6]);
  const cResult = obj.c(14);
  let obj2 = appEntryKey(sharedValue1[7]);
  appEntryKey = obj2.useAppEntryKey();
  let num = 0;
  if (!MetaQuestUtils) {
    const KeyboardController = tmp(tmp2[8]).KeyboardController;
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
  let tmp8 = 0 !== num;
  if (tmp8) {
    const tmpResult = appEntryKey(tmp2[2]);
    let isAndroidResult = tmpResult.isAndroid();
    let tmp10 = !isAndroidResult;
    if (isAndroidResult) {
      const flag = false;
      const obj4 = sharedValue(tmp2[3]);
      let tmp12 = obj4.getImeInsets(false, appEntryKey) > 0;
      if (!tmp12) {
        let APP_ENTRY_KEYS = tmp(tmp2[4]).APP_ENTRY_KEYS;
        const someResult = APP_ENTRY_KEYS.some((item) => {
          let tmp = item !== closure_0;
          if (tmp) {
            const obj = closure_2_1(closure_2_2[3]);
            tmp = obj.getImeInsets(false, item) > 0;
          }
          return tmp;
        });
        tmp12 = !someResult && null;
      }
      tmp10 = tmp12;
    }
    tmp8 = true === tmp10;
  }
  let num3 = 0;
  if (tmp8) {
    num3 = num;
  }
  const tmpResult5 = appEntryKey(tmp2[9]);
  sharedValue = tmpResult5.useSharedValue(num3);
  const tmpResult6 = appEntryKey(tmp2[9]);
  sharedValue1 = tmpResult6.useSharedValue(tmp8);
  const tmpResult7 = appEntryKey(tmp2[9]);
  const sharedValue2 = tmpResult7.useSharedValue(tmp8);
  if (cResult[0] === appEntryKey) {
    if (cResult[1] === sharedValue1) {
      if (cResult[2] === sharedValue) {
        let tmp18;
        let tmp19;
        if (cResult[3] === sharedValue2) {
          tmp18 = cResult[4];
          tmp19 = cResult[5];
        }
        const effect = sharedValue2.useEffect(tmp18, tmp19);
        if (cResult[6] === sharedValue) {
          let tmp22;
          let tmp27;
          if (cResult[7] === sharedValue2) {
            tmp22 = cResult[8];
          }
          const _Symbol = Symbol;
          if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
            const items = [];
            cResult[9] = items;
            tmp27 = items;
          } else {
            tmp27 = cResult[9];
          }
          const tmpResult8 = appEntryKey(tmp2[8]);
          tmpResult8.useKeyboardHandler(tmp22, tmp27);
          if (cResult[10] === sharedValue1) {
            if (cResult[11] === sharedValue) {
              let tmp29;
              if (cResult[12] === sharedValue2) {
                tmp29 = cResult[13];
              }
              return tmp29;
            }
          }
          const obj3 = { keyboardOpenOrOpening: sharedValue1, keyboardOpenedHeight: sharedValue, keyboardOverlapsCurrentAppEntry: sharedValue2 };
          cResult[10] = sharedValue1;
          cResult[11] = sharedValue;
          cResult[12] = sharedValue2;
          cResult[13] = obj3;
          tmp29 = obj3;
        }
        const obj5 = { onStart: fn2, onEnd: fn3 };
        fn2 = function h(height) {
          const obj = ReanimatedRexport;
          obj.runOnJS(KeyboardStateDebuggingDefault.keyboardControllerWorkletEvent)("onStart", height.height);
          if (!MetaQuestUtils) {
            const value = height.height > 0 && sharedValue2.get();
            if (value) {
              const result = sharedValue.set(height.height);
            }
          }
        };
        fn2.__closure = { runOnJS: appEntryKey(tmp2[9]).runOnJS, KeyboardStateDebugging: sharedValue(tmp2[10]), IS_SYSTEM_KEYBOARD_EXTERNAL: MetaQuestUtils, keyboardOverlapsCurrentAppEntry: sharedValue2, keyboardOpenedHeight: sharedValue };
        fn2.__workletHash = 9490831862205;
        fn2.__initData = __initData;
        fn3 = function s(height) {
          const obj = ReanimatedRexport;
          obj.runOnJS(KeyboardStateDebuggingDefault.keyboardControllerWorkletEvent)("onEnd", height.height);
          if (!MetaQuestUtils) {
            const value = height.height > 0 && sharedValue2.get();
            if (value) {
              const result = sharedValue.set(height.height);
            }
          }
        };
        const obj6 = { runOnJS: appEntryKey(tmp2[9]).runOnJS, KeyboardStateDebugging: sharedValue(tmp2[10]), IS_SYSTEM_KEYBOARD_EXTERNAL: MetaQuestUtils, keyboardOverlapsCurrentAppEntry: sharedValue2, keyboardOpenedHeight: sharedValue };
        fn3.__closure = { runOnJS: appEntryKey(tmp2[9]).runOnJS, KeyboardStateDebugging: sharedValue(tmp2[10]), IS_SYSTEM_KEYBOARD_EXTERNAL: MetaQuestUtils, keyboardOverlapsCurrentAppEntry: sharedValue2, keyboardOpenedHeight: sharedValue };
        fn3.__workletHash = 14130209265617;
        fn3.__initData = __initData2;
        cResult[6] = sharedValue;
        cResult[7] = sharedValue2;
        cResult[8] = obj5;
        tmp22 = obj5;
        const obj7 = { runOnJS: appEntryKey(tmp2[9]).runOnJS, KeyboardStateDebugging: sharedValue(tmp2[10]), IS_SYSTEM_KEYBOARD_EXTERNAL: MetaQuestUtils, keyboardOverlapsCurrentAppEntry: sharedValue2, keyboardOpenedHeight: sharedValue };
      }
    }
  }
  const fn = function l() {
    if (!MetaQuestUtils) {
      let c0 = false;
      function handleKeyboardShow(arg0) {
        if (arg0 > 0) {
          let closure_0 = c0;
          const obj2 = appEntryKey(sharedValue1[2]);
          const isAndroidResult = obj2.isAndroid();
          let tmp5 = !isAndroidResult;
          if (isAndroidResult) {
            const obj = sharedValue(sharedValue1[3]);
            let tmp2 = obj.getImeInsets(false, c0) > 0;
            if (!tmp2) {
              const APP_ENTRY_KEYS = appEntryKey(sharedValue1[4]).APP_ENTRY_KEYS;
              tmp2 = !APP_ENTRY_KEYS.some((item) => {
                let tmp = item !== closure_0;
                if (tmp) {
                  const obj = closure_2_1(closure_2_2[3]);
                  tmp = obj.getImeInsets(false, item) > 0;
                }
                return tmp;
              }) && null;
              !APP_ENTRY_KEYS.some((item) => {
                let tmp = item !== closure_0;
                if (tmp) {
                  const obj = closure_2_1(closure_2_2[3]);
                  tmp = obj.getImeInsets(false, item) > 0;
                }
                return tmp;
              }) && null;
            }
            tmp5 = tmp2;
          }
          if (null != tmp5) {
            const result = closure_3.set(tmp5);
          }
          if (false !== tmp5) {
            if (true === tmp5) {
              const result1 = closure_2.set(true);
              const result2 = handleKeyboardShow.set(arg0);
            }
          } else {
            const result3 = closure_2.set(false);
          }
        }
      }
      const KeyboardEvents = appEntryKey(sharedValue1[8]).KeyboardEvents;
      let closure_2 = KeyboardEvents.addListener("keyboardWillShow", (height) => {
        const obj = KeyboardStateDebuggingDefault;
        const result = obj.keyboardControllerKeyboardWillShow(height.height);
        c0 = true;
        handleKeyboardShow(height.height);
      });
      const KeyboardEvents2 = appEntryKey(sharedValue1[8]).KeyboardEvents;
      let closure_3 = KeyboardEvents2.addListener("keyboardDidShow", (height) => {
        const obj = KeyboardStateDebuggingDefault;
        const result = obj.keyboardControllerKeyboardDidShow(height.height);
        c0 = false;
        handleKeyboardShow(height.height);
      });
      const KeyboardEvents3 = appEntryKey(sharedValue1[8]).KeyboardEvents;
      let closure_4 = KeyboardEvents3.addListener("keyboardWillHide", () => {
        const obj = KeyboardStateDebuggingDefault;
        const result = obj.keyboardControllerKeyboardWillHide();
        if (sharedValue2.get()) {
          if (!c0) {
            const result1 = sharedValue1.set(false);
          }
        }
      });
      const KeyboardEvents4 = appEntryKey(sharedValue1[8]).KeyboardEvents;
      let closure_5 = KeyboardEvents4.addListener("keyboardDidHide", () => {
        const obj = KeyboardStateDebuggingDefault;
        const result = obj.keyboardControllerKeyboardDidHide();
        if (sharedValue2.get()) {
          c0 = false;
          const result1 = sharedValue1.set(false);
        }
      });
      return () => {
        closure_2.remove();
        closure_3.remove();
        closure_4.remove();
        closure_5.remove();
      };
    }
  };
  const items1 = [appEntryKey, sharedValue1, sharedValue, sharedValue2];
  cResult[0] = appEntryKey;
  cResult[1] = sharedValue1;
  cResult[2] = sharedValue;
  cResult[3] = sharedValue2;
  cResult[4] = fn;
  cResult[5] = items1;
  tmp19 = items1;
  tmp18 = fn;
}) : (() => {
  let appEntryKey;
  let fn;
  let fn2;
  let keyboardOpenOrOpening;
  let keyboardOpenedHeight;
  let tmp = appEntryKey;
  let tmp2 = keyboardOpenOrOpening;
  let obj = appEntryKey(keyboardOpenOrOpening[7]);
  appEntryKey = obj.useAppEntryKey();
  let num = 0;
  if (!MetaQuestUtils) {
    const KeyboardController = tmp(tmp2[8]).KeyboardController;
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
    const tmpResult = tmp(tmp2[2]);
    let isAndroidResult = tmpResult.isAndroid();
    let tmp9 = !isAndroidResult;
    if (isAndroidResult) {
      let flag = false;
      const obj3 = keyboardOpenedHeight(tmp2[3]);
      let tmp11 = obj3.getImeInsets(false, appEntryKey) > 0;
      if (!tmp11) {
        let APP_ENTRY_KEYS = tmp(tmp2[4]).APP_ENTRY_KEYS;
        const someResult = APP_ENTRY_KEYS.some((item) => {
          let tmp = item !== closure_0;
          if (tmp) {
            const obj = closure_2_1(closure_2_2[3]);
            tmp = obj.getImeInsets(false, item) > 0;
          }
          return tmp;
        });
        tmp11 = !someResult && null;
      }
      tmp9 = tmp11;
    }
    tmp7 = true === tmp9;
  }
  let num3 = 0;
  if (tmp7) {
    num3 = num;
  }
  const tmpResult5 = tmp(tmp2[9]);
  keyboardOpenedHeight = tmpResult5.useSharedValue(num3);
  const tmpResult6 = tmp(tmp2[9]);
  keyboardOpenOrOpening = tmpResult6.useSharedValue(tmp7);
  const tmpResult7 = tmp(tmp2[9]);
  const keyboardOverlapsCurrentAppEntry = tmpResult7.useSharedValue(tmp7);
  const items = [appEntryKey, keyboardOpenOrOpening, keyboardOpenedHeight, keyboardOverlapsCurrentAppEntry];
  const effect = keyboardOverlapsCurrentAppEntry.useEffect(() => {
    function handleKeyboardShow(arg0) {
      if (arg0 > 0) {
        let closure_0 = c0;
        const obj2 = appEntryKey(keyboardOpenOrOpening[2]);
        const isAndroidResult = obj2.isAndroid();
        let tmp5 = !isAndroidResult;
        if (isAndroidResult) {
          let obj = keyboardOpenedHeight(keyboardOpenOrOpening[3]);
          let tmp2 = obj.getImeInsets(false, c0) > 0;
          if (!tmp2) {
            const APP_ENTRY_KEYS = appEntryKey(keyboardOpenOrOpening[4]).APP_ENTRY_KEYS;
            tmp2 = !APP_ENTRY_KEYS.some((item) => {
              let tmp = item !== closure_0;
              if (tmp) {
                const obj = closure_2_1(closure_2_2[3]);
                tmp = obj.getImeInsets(false, item) > 0;
              }
              return tmp;
            }) && null;
            !APP_ENTRY_KEYS.some((item) => {
              let tmp = item !== closure_0;
              if (tmp) {
                const obj = closure_2_1(closure_2_2[3]);
                tmp = obj.getImeInsets(false, item) > 0;
              }
              return tmp;
            }) && null;
          }
          tmp5 = tmp2;
        }
        if (null != tmp5) {
          const result = closure_3.set(tmp5);
        }
        if (false !== tmp5) {
          if (true === tmp5) {
            const result1 = closure_2.set(true);
            const result2 = closure_1.set(arg0);
          }
        } else {
          const result3 = closure_2.set(false);
        }
      }
    }
    if (!MetaQuestUtils) {
      const flag = false;
      let c0 = false;
      const KeyboardEvents = appEntryKey(keyboardOpenOrOpening[8]).KeyboardEvents;
      let closure_1 = KeyboardEvents.addListener("keyboardWillShow", (height) => {
        const obj = KeyboardStateDebuggingDefault;
        const result = obj.keyboardControllerKeyboardWillShow(height.height);
        c0 = true;
        handleKeyboardShow(height.height);
      });
      const KeyboardEvents2 = appEntryKey(keyboardOpenOrOpening[8]).KeyboardEvents;
      let closure_2 = KeyboardEvents2.addListener("keyboardDidShow", (height) => {
        const obj = KeyboardStateDebuggingDefault;
        const result = obj.keyboardControllerKeyboardDidShow(height.height);
        c0 = false;
        handleKeyboardShow(height.height);
      });
      const KeyboardEvents3 = appEntryKey(keyboardOpenOrOpening[8]).KeyboardEvents;
      let closure_3 = KeyboardEvents3.addListener("keyboardWillHide", () => {
        const obj = KeyboardStateDebuggingDefault;
        const result = obj.keyboardControllerKeyboardWillHide();
        if (keyboardOverlapsCurrentAppEntry.get()) {
          if (!c0) {
            const result1 = keyboardOpenOrOpening.set(false);
          }
        }
      });
      const KeyboardEvents4 = appEntryKey(keyboardOpenOrOpening[8]).KeyboardEvents;
      let closure_4 = KeyboardEvents4.addListener("keyboardDidHide", () => {
        const obj = KeyboardStateDebuggingDefault;
        const result = obj.keyboardControllerKeyboardDidHide();
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
  let obj2 = { onStart: fn, onEnd: fn2 };
  fn = function o(height) {
    const obj = ReanimatedRexport;
    obj.runOnJS(KeyboardStateDebuggingDefault.keyboardControllerWorkletEvent)("onStart", height.height);
    if (!MetaQuestUtils) {
      const value = height.height > 0 && keyboardOverlapsCurrentAppEntry.get();
      if (value) {
        const result = keyboardOpenedHeight.set(height.height);
      }
    }
  };
  const useKeyboardHandler = tmp(tmp2[8]).useKeyboardHandler;
  fn.__closure = { runOnJS: tmp(tmp2[9]).runOnJS, KeyboardStateDebugging: keyboardOpenedHeight(tmp2[10]), IS_SYSTEM_KEYBOARD_EXTERNAL: MetaQuestUtils, keyboardOverlapsCurrentAppEntry, keyboardOpenedHeight };
  fn.__workletHash = 7252585223001;
  fn.__initData = __initData3;
  fn2 = function n(height) {
    const obj = ReanimatedRexport;
    obj.runOnJS(KeyboardStateDebuggingDefault.keyboardControllerWorkletEvent)("onEnd", height.height);
    if (!MetaQuestUtils) {
      const value = height.height > 0 && keyboardOverlapsCurrentAppEntry.get();
      if (value) {
        const result = keyboardOpenedHeight.set(height.height);
      }
    }
  };
  ({ runOnJS: tmp(tmp2[9]).runOnJS, KeyboardStateDebugging: keyboardOpenedHeight(tmp2[10]), IS_SYSTEM_KEYBOARD_EXTERNAL: MetaQuestUtils, keyboardOverlapsCurrentAppEntry, keyboardOpenedHeight });
  fn2.__closure = { runOnJS: tmp(tmp2[9]).runOnJS, KeyboardStateDebugging: keyboardOpenedHeight(tmp2[10]), IS_SYSTEM_KEYBOARD_EXTERNAL: MetaQuestUtils, keyboardOverlapsCurrentAppEntry, keyboardOpenedHeight };
  fn2.__workletHash = 15723477390001;
  fn2.__initData = __initData4;
  ({ runOnJS: tmp(tmp2[9]).runOnJS, KeyboardStateDebugging: keyboardOpenedHeight(tmp2[10]), IS_SYSTEM_KEYBOARD_EXTERNAL: MetaQuestUtils, keyboardOverlapsCurrentAppEntry, keyboardOpenedHeight });
  useKeyboardHandler(obj2, []);
  return { keyboardOpenOrOpening, keyboardOpenedHeight, keyboardOverlapsCurrentAppEntry };
});
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/useSafeAreaBottomKeyboardInfoController.tsx");

export default tmp3;
export const IS_SYSTEM_KEYBOARD_EXTERNAL = MetaQuestUtils;