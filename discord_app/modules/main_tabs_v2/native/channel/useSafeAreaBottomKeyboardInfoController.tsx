// discord_app/modules/main_tabs_v2/native/channel/useSafeAreaBottomKeyboardInfoController.tsx
import KeyboardStateDebuggingDefault from "../../../keyboard/KeyboardStateDebugging.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let MetaQuestUtils = fn(1627);
MetaQuestUtils = MetaQuestUtils.isMetaQuest();
const __initData = {
  code: 'function useSafeAreaBottomKeyboardInfoControllerTsx1(e_1){const{runOnJS,KeyboardStateDebugging,IS_SYSTEM_KEYBOARD_EXTERNAL,keyboardOverlapsCurrentAppEntry,keyboardOpenedHeight}=this.__closure;runOnJS(KeyboardStateDebugging.keyboardControllerWorkletEvent)("onStart",e_1.height);if(IS_SYSTEM_KEYBOARD_EXTERNAL){return;}if(e_1.height>0&&keyboardOverlapsCurrentAppEntry.get()){keyboardOpenedHeight.set(e_1.height);}}',
};
const __initData2 = {
  code: 'function useSafeAreaBottomKeyboardInfoControllerTsx2(e_2){const{runOnJS,KeyboardStateDebugging,IS_SYSTEM_KEYBOARD_EXTERNAL,keyboardOverlapsCurrentAppEntry,keyboardOpenedHeight}=this.__closure;runOnJS(KeyboardStateDebugging.keyboardControllerWorkletEvent)("onEnd",e_2.height);if(IS_SYSTEM_KEYBOARD_EXTERNAL){return;}if(e_2.height>0&&keyboardOverlapsCurrentAppEntry.get()){keyboardOpenedHeight.set(e_2.height);}}',
};
const __initData3 = {
  code: "function useSafeAreaBottomKeyboardInfoControllerTsx3(e_1){const{runOnJS,KeyboardStateDebugging,IS_SYSTEM_KEYBOARD_EXTERNAL,keyboardOverlapsCurrentAppEntry,keyboardOpenedHeight}=this.__closure;runOnJS(KeyboardStateDebugging.keyboardControllerWorkletEvent)('onStart',e_1.height);if(IS_SYSTEM_KEYBOARD_EXTERNAL)return;if(e_1.height>0&&keyboardOverlapsCurrentAppEntry.get()){keyboardOpenedHeight.set(e_1.height);}}",
};
const __initData4 = {
  code: "function useSafeAreaBottomKeyboardInfoControllerTsx4(e_2){const{runOnJS,KeyboardStateDebugging,IS_SYSTEM_KEYBOARD_EXTERNAL,keyboardOverlapsCurrentAppEntry,keyboardOpenedHeight}=this.__closure;runOnJS(KeyboardStateDebugging.keyboardControllerWorkletEvent)('onEnd',e_2.height);if(IS_SYSTEM_KEYBOARD_EXTERNAL)return;if(e_2.height>0&&keyboardOverlapsCurrentAppEntry.get()){keyboardOpenedHeight.set(e_2.height);}}",
};
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/channel/useSafeAreaBottomKeyboardInfoController.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useSafeAreaBottomKeyboardInfoController() {
      const cResult = appEntryKey(sharedValue1[6]).c(14);
      let obj = appEntryKey(sharedValue1[6]);
      appEntryKey = appEntryKey(sharedValue1[7]).useAppEntryKey();
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
        closure_129_0 = appEntryKey;
        let isAndroidResult = tmp(tmp2[2]).isAndroid();
        let tmp10 = !isAndroidResult;
        if (isAndroidResult) {
          let tmp12 = sharedValue(tmp2[3]).getImeInsets(false, appEntryKey) > 0;
          if (!tmp12) {
            let APP_ENTRY_KEYS = tmp(tmp2[4]).APP_ENTRY_KEYS;
            let someResult = APP_ENTRY_KEYS.some((item) => {
              let tmp = item !== closure_0;
              if (tmp) {
                tmp = closure_1(dependencyMap[3]).getImeInsets(false, item) > 0;
                const obj = closure_1(dependencyMap[3]);
              }
              return tmp;
            });
            let tmp14 = !someResult;
            if (!someResult) {
              tmp14 = null;
            }
            tmp12 = tmp14;
          }
          tmp10 = tmp12;
          const obj4 = sharedValue(tmp2[3]);
        }
        tmp8 = true === tmp10;
        const tmpResult = tmp(tmp2[2]);
      }
      let num3 = 0;
      if (tmp8) {
        num3 = num;
      }
      let obj2 = appEntryKey(sharedValue1[7]);
      sharedValue = appEntryKey(sharedValue1[9]).useSharedValue(num3);
      const tmpResult5 = appEntryKey(sharedValue1[9]);
      sharedValue1 = appEntryKey(sharedValue1[9]).useSharedValue(tmp8);
      const tmpResult6 = appEntryKey(sharedValue1[9]);
      const sharedValue2 = appEntryKey(sharedValue1[9]).useSharedValue(tmp8);
      if (cResult[0] === appEntryKey) {
        if (cResult[1] === sharedValue1) {
          if (cResult[2] === sharedValue) {
            if (cResult[3] === sharedValue2) {
              let tmp18 = cResult[4];
              let tmp19 = cResult[5];
            }
            const effect = sharedValue2.useEffect(tmp18, tmp19);
            if (cResult[6] === sharedValue) {
              if (cResult[7] === sharedValue2) {
                let tmp22 = cResult[8];
              }
              const _Symbol = Symbol;
              if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
                const items = [];
                cResult[9] = items;
                let tmp27 = items;
              } else {
                tmp27 = cResult[9];
              }
              tmp(tmp2[8]).useKeyboardHandler(tmp22, tmp27);
              if (cResult[10] === sharedValue1) {
                if (cResult[11] === sharedValue) {
                  if (cResult[12] === sharedValue2) {
                    let tmp29 = cResult[13];
                  }
                  return tmp29;
                }
              }
              const obj3 = {
                keyboardOpenOrOpening: sharedValue1,
                keyboardOpenedHeight: sharedValue,
                keyboardOverlapsCurrentAppEntry: sharedValue2,
              };
              cResult[10] = sharedValue1;
              cResult[11] = sharedValue;
              cResult[12] = sharedValue2;
              cResult[13] = obj3;
              tmp29 = obj3;
              const tmpResult8 = tmp(tmp2[8]);
            }
            const obj5 = { onStart: null, onEnd: null };
            const fn2 = function h(height) {
              ReanimatedRexport.runOnJS(KeyboardStateDebuggingDefault.keyboardControllerWorkletEvent)(
                "onStart",
                height.height,
              );
              if (!MetaQuestUtils) {
                value = height.height > 0;
                if (value) {
                  value = sharedValue2.get();
                }
                if (value) {
                  const result = sharedValue.set(height.height);
                }
              }
            };
            const obj6 = {
              runOnJS: tmp(tmp2[9]).runOnJS,
              KeyboardStateDebugging: sharedValue(tmp2[10]),
              IS_SYSTEM_KEYBOARD_EXTERNAL: MetaQuestUtils,
              keyboardOverlapsCurrentAppEntry: sharedValue2,
              keyboardOpenedHeight: sharedValue,
            };
            fn2.__closure = obj6;
            fn2.__workletHash = 9490831862205;
            fn2.__initData = __initData;
            obj5.onStart = fn2;
            const fn3 = function s(height) {
              ReanimatedRexport.runOnJS(KeyboardStateDebuggingDefault.keyboardControllerWorkletEvent)(
                "onEnd",
                height.height,
              );
              if (!MetaQuestUtils) {
                value = height.height > 0;
                if (value) {
                  value = sharedValue2.get();
                }
                if (value) {
                  const result = sharedValue.set(height.height);
                }
              }
            };
            const obj7 = {
              runOnJS: tmp(tmp2[9]).runOnJS,
              KeyboardStateDebugging: sharedValue(tmp2[10]),
              IS_SYSTEM_KEYBOARD_EXTERNAL: MetaQuestUtils,
              keyboardOverlapsCurrentAppEntry: sharedValue2,
              keyboardOpenedHeight: sharedValue,
            };
            fn3.__closure = obj7;
            fn3.__workletHash = 14130209265617;
            fn3.__initData = __initData2;
            obj5.onEnd = fn3;
            cResult[6] = sharedValue;
            cResult[7] = sharedValue2;
            cResult[8] = obj5;
            tmp22 = obj5;
          }
        }
      }
      const fn = function l() {
        if (!MetaQuestUtils) {
          c0 = false;
          function handleKeyboardShow(arg0) {
            if (arg0 > 0) {
              closure_0 = c0;
              const isAndroidResult = appEntryKey(sharedValue1[2]).isAndroid();
              let tmp5 = !isAndroidResult;
              if (isAndroidResult) {
                let tmp2 = sharedValue(sharedValue1[3]).getImeInsets(false, c0) > 0;
                if (!tmp2) {
                  const APP_ENTRY_KEYS = appEntryKey(sharedValue1[4]).APP_ENTRY_KEYS;
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
                const obj = sharedValue(sharedValue1[3]);
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
              const obj2 = appEntryKey(sharedValue1[2]);
            }
          }
          const KeyboardEvents = appEntryKey(sharedValue1[8]).KeyboardEvents;
          closure_2 = KeyboardEvents.addListener("keyboardWillShow", (height) => {
            const result = KeyboardStateDebuggingDefault.keyboardControllerKeyboardWillShow(height.height);
            c0 = true;
            handleKeyboardShow(height.height);
          });
          const KeyboardEvents2 = appEntryKey(sharedValue1[8]).KeyboardEvents;
          closure_3 = KeyboardEvents2.addListener("keyboardDidShow", (height) => {
            const result = KeyboardStateDebuggingDefault.keyboardControllerKeyboardDidShow(height.height);
            c0 = false;
            handleKeyboardShow(height.height);
          });
          const KeyboardEvents3 = appEntryKey(sharedValue1[8]).KeyboardEvents;
          closure_4 = KeyboardEvents3.addListener("keyboardWillHide", () => {
            const result = KeyboardStateDebuggingDefault.keyboardControllerKeyboardWillHide();
            if (sharedValue2.get()) {
              if (!c0) {
                const result1 = sharedValue1.set(false);
              }
            }
          });
          const KeyboardEvents4 = appEntryKey(sharedValue1[8]).KeyboardEvents;
          closure_5 = KeyboardEvents4.addListener("keyboardDidHide", () => {
            const result = KeyboardStateDebuggingDefault.keyboardControllerKeyboardDidHide();
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
      const tmpResult7 = appEntryKey(sharedValue1[9]);
    }
  : function useSafeAreaBottomKeyboardInfoController() {
      appEntryKey = appEntryKey(keyboardOpenOrOpening[7]).useAppEntryKey();
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
        closure_129_0 = appEntryKey;
        let isAndroidResult = tmp(tmp2[2]).isAndroid();
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
        const tmpResult = tmp(tmp2[2]);
      }
      let num3 = 0;
      if (tmp7) {
        num3 = num;
      }
      let obj = appEntryKey(keyboardOpenOrOpening[7]);
      keyboardOpenedHeight = appEntryKey(keyboardOpenOrOpening[9]).useSharedValue(num3);
      const tmpResult5 = appEntryKey(keyboardOpenOrOpening[9]);
      keyboardOpenOrOpening = appEntryKey(keyboardOpenOrOpening[9]).useSharedValue(tmp7);
      const tmpResult6 = appEntryKey(keyboardOpenOrOpening[9]);
      const keyboardOverlapsCurrentAppEntry = appEntryKey(keyboardOpenOrOpening[9]).useSharedValue(tmp7);
      const items = [appEntryKey, keyboardOpenOrOpening, keyboardOpenedHeight, keyboardOverlapsCurrentAppEntry];
      const effect = keyboardOverlapsCurrentAppEntry.useEffect(() => {
        function handleKeyboardShow(arg0) {
          if (arg0 > 0) {
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
                const result2 = closure_1.set(arg0);
              }
            } else {
              const result3 = dependencyMap.set(false);
            }
            const obj2 = appEntryKey(keyboardOpenOrOpening[2]);
          }
        }
        if (!MetaQuestUtils) {
          c0 = false;
          const KeyboardEvents = appEntryKey(keyboardOpenOrOpening[8]).KeyboardEvents;
          closure_1 = KeyboardEvents.addListener("keyboardWillShow", (height) => {
            const result = KeyboardStateDebuggingDefault.keyboardControllerKeyboardWillShow(height.height);
            c0 = true;
            handleKeyboardShow(height.height);
          });
          const KeyboardEvents2 = appEntryKey(keyboardOpenOrOpening[8]).KeyboardEvents;
          closure_2 = KeyboardEvents2.addListener("keyboardDidShow", (height) => {
            const result = KeyboardStateDebuggingDefault.keyboardControllerKeyboardDidShow(height.height);
            c0 = false;
            handleKeyboardShow(height.height);
          });
          const KeyboardEvents3 = appEntryKey(keyboardOpenOrOpening[8]).KeyboardEvents;
          closure_3 = KeyboardEvents3.addListener("keyboardWillHide", () => {
            const result = KeyboardStateDebuggingDefault.keyboardControllerKeyboardWillHide();
            if (keyboardOverlapsCurrentAppEntry.get()) {
              if (!c0) {
                const result1 = keyboardOpenOrOpening.set(false);
              }
            }
          });
          const KeyboardEvents4 = appEntryKey(keyboardOpenOrOpening[8]).KeyboardEvents;
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
      const tmpResult7 = appEntryKey(keyboardOpenOrOpening[9]);
      let obj2 = { onStart: null, onEnd: null };
      const fn = function n(height) {
        ReanimatedRexport.runOnJS(KeyboardStateDebuggingDefault.keyboardControllerWorkletEvent)(
          "onStart",
          height.height,
        );
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
      const tmpResult8 = appEntryKey(keyboardOpenOrOpening[8]);
      fn.__closure = {
        runOnJS: appEntryKey(keyboardOpenOrOpening[9]).runOnJS,
        KeyboardStateDebugging: keyboardOpenedHeight(keyboardOpenOrOpening[10]),
        IS_SYSTEM_KEYBOARD_EXTERNAL: MetaQuestUtils,
        keyboardOverlapsCurrentAppEntry,
        keyboardOpenedHeight,
      };
      fn.__workletHash = 7252585223001;
      fn.__initData = __initData3;
      obj2.onStart = fn;
      const fn2 = function o(height) {
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
      const obj4 = {
        runOnJS: appEntryKey(keyboardOpenOrOpening[9]).runOnJS,
        KeyboardStateDebugging: keyboardOpenedHeight(keyboardOpenOrOpening[10]),
        IS_SYSTEM_KEYBOARD_EXTERNAL: MetaQuestUtils,
        keyboardOverlapsCurrentAppEntry,
        keyboardOpenedHeight,
      };
      fn2.__closure = {
        runOnJS: appEntryKey(keyboardOpenOrOpening[9]).runOnJS,
        KeyboardStateDebugging: keyboardOpenedHeight(keyboardOpenOrOpening[10]),
        IS_SYSTEM_KEYBOARD_EXTERNAL: MetaQuestUtils,
        keyboardOverlapsCurrentAppEntry,
        keyboardOpenedHeight,
      };
      fn2.__workletHash = 15723477390001;
      fn2.__initData = __initData4;
      obj2.onEnd = fn2;
      tmpResult8.useKeyboardHandler(obj2, []);
      return { keyboardOpenOrOpening, keyboardOpenedHeight, keyboardOverlapsCurrentAppEntry };
    };
export const IS_SYSTEM_KEYBOARD_EXTERNAL = MetaQuestUtils;
