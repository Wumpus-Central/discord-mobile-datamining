// === Module 4948: useKeyboardType ===

// Module 4948 (useKeyboardType)
import c from "c" /* 576 */;
import AppEntryKeyContext from "AppEntryKeyContext" /* 1500 */;
import KeyboardUIStore from "KeyboardUIStore" /* 1501 */;
import noop from "module_19" /* 19 */;

const KeyboardUIStoreDefault = KeyboardUIStore;

require = fn;
fn(558);
let ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useKeyboardContextForType(arg0) {
  closure_0 = arg0;
  const cResult = c.c(3);
  const appEntryKey = AppEntryKeyContext.useAppEntryKey();
  if (cResult[0] === appEntryKey) {
    if (cResult[1] === arg0) {
      let tmp4 = cResult[2];
    }
    return KeyboardUIStoreDefault(tmp4);
  }
  const fn = function t(arg0) {
    return arg0.byAppEntry[appEntryKey].keyboardContexts[closure_0];
  };
  cResult[0] = appEntryKey;
  cResult[1] = arg0;
  cResult[2] = fn;
  tmp4 = fn;
}) : (function useKeyboardContextForType(arg0) {
  closure_0 = arg0;
  closure_1 = AppEntryKeyContext.useAppEntryKey();
  return KeyboardUIStoreDefault((arg0) => arg0.byAppEntry[closure_1].keyboardContexts[closure_0]);
});
ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useKeyboardType() {
  const cResult = c.c(2);
  const appEntryKey = AppEntryKeyContext.useAppEntryKey();
  if (cResult[0] !== appEntryKey) {
    const fn = function y(arg0) {
      return arg0.byAppEntry[appEntryKey].keyboardType;
    };
    cResult[0] = appEntryKey;
    cResult[1] = fn;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  return KeyboardUIStoreDefault(tmp4);
}) : (function useKeyboardType() {
  closure_0 = AppEntryKeyContext.useAppEntryKey();
  return KeyboardUIStoreDefault((arg0) => arg0.byAppEntry[closure_0].keyboardType);
});
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useKeyboardTypePrevious() {
  const cResult = c.c(2);
  const appEntryKey = AppEntryKeyContext.useAppEntryKey();
  if (cResult[0] !== appEntryKey) {
    const fn = function y(arg0) {
      return arg0.byAppEntry[appEntryKey].keyboardTypePrevious;
    };
    cResult[0] = appEntryKey;
    cResult[1] = fn;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  return KeyboardUIStoreDefault(tmp4);
}) : (function useKeyboardTypePrevious() {
  closure_0 = AppEntryKeyContext.useAppEntryKey();
  return KeyboardUIStoreDefault((arg0) => arg0.byAppEntry[closure_0].keyboardTypePrevious);
});
ReactCompilerGating = fn(558);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function useKeyboardTypeSharedValue() {
  const cResult = appEntryKey(576).c(4);
  const obj = appEntryKey(576);
  let tmp = appEntryKey;
  appEntryKey = appEntryKey(1500).useAppEntryKey();
  const obj2 = appEntryKey(1500);
  let DEFAULT_APP_ENTRY_KEY = appEntryKey;
  if (appEntryKey === undefined) {
    DEFAULT_APP_ENTRY_KEY = tmp(1500).DEFAULT_APP_ENTRY_KEY;
  }
  const obj3 = appEntryKey(4811);
  sharedValue = obj3.useSharedValue(sharedValue(1501).getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].keyboardType);
  if (cResult[0] === appEntryKey) {
    if (cResult[1] === sharedValue) {
      let tmp6 = cResult[2];
      let tmp7 = cResult[3];
    }
    const effect = noop.useEffect(tmp6, tmp7);
    return sharedValue;
  }
  const fn = function t() {
    return KeyboardUIStore.addKeyboardTypeChangedListener((type, arg1) => {
      let tmp = null != arg1;
      if (tmp) {
        tmp = arg1 !== appEntryKey;
      }
      if (!tmp) {
        const result = sharedValue.set(type.type);
      }
    });
  };
  const items = [appEntryKey, sharedValue];
  cResult[0] = appEntryKey;
  cResult[1] = sharedValue;
  cResult[2] = fn;
  cResult[3] = items;
  tmp7 = items;
  tmp6 = fn;
  const obj4 = sharedValue(1501);
}) : (function useKeyboardTypeSharedValue() {
  appEntryKey = appEntryKey(1500).useAppEntryKey();
  const obj = appEntryKey(1500);
  let tmp = appEntryKey;
  let DEFAULT_APP_ENTRY_KEY = appEntryKey;
  if (appEntryKey === undefined) {
    DEFAULT_APP_ENTRY_KEY = tmp(1500).DEFAULT_APP_ENTRY_KEY;
  }
  const obj2 = appEntryKey(4811);
  sharedValue = obj2.useSharedValue(sharedValue(1501).getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].keyboardType);
  const items = [appEntryKey, sharedValue];
  const effect = noop.useEffect(() => KeyboardUIStore.addKeyboardTypeChangedListener((type, arg1) => {
    let tmp = null != arg1;
    if (tmp) {
      tmp = arg1 !== appEntryKey;
    }
    if (!tmp) {
      const result = sharedValue.set(type.type);
    }
  }), items);
  return sharedValue;
});
function getKeyboardContextForType(EXPRESSION) {
  let DEFAULT_APP_ENTRY_KEY = arg1;
  if (arg1 === undefined) {
    DEFAULT_APP_ENTRY_KEY = AppEntryKeyContext.DEFAULT_APP_ENTRY_KEY;
  }
  return KeyboardUIStoreDefault.getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].keyboardContexts[EXPRESSION];
}
function getKeyboardType() {
  let DEFAULT_APP_ENTRY_KEY = appEntryKey;
  if (appEntryKey === undefined) {
    DEFAULT_APP_ENTRY_KEY = AppEntryKeyContext.DEFAULT_APP_ENTRY_KEY;
  }
  return KeyboardUIStoreDefault.getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].keyboardType;
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/keyboard/native/useKeyboardType.tsx");

export default tmp3;
export { getKeyboardContextForType };
export const useKeyboardContextForType = tmp2;
export { getKeyboardType };
export const getKeyboardTypePrevious = function getKeyboardTypePrevious() {
  let DEFAULT_APP_ENTRY_KEY = arg0;
  if (arg0 === undefined) {
    DEFAULT_APP_ENTRY_KEY = AppEntryKeyContext.DEFAULT_APP_ENTRY_KEY;
  }
  return KeyboardUIStoreDefault.getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].keyboardTypePrevious;
};
export const useKeyboardTypePrevious = tmp4;
export const useKeyboardTypeSharedValue = tmp5;
export const useKeyboardWillOpenSharedValue = ReactCompilerGating.isReactCompilerEnabled() ? (function useKeyboardWillOpenSharedValue() {
  const cResult = appEntryKey(576).c(4);
  const obj = appEntryKey(576);
  let tmp = appEntryKey;
  appEntryKey = appEntryKey(1500).useAppEntryKey();
  const obj2 = appEntryKey(1500);
  let DEFAULT_APP_ENTRY_KEY = appEntryKey;
  if (appEntryKey === undefined) {
    DEFAULT_APP_ENTRY_KEY = tmp(1500).DEFAULT_APP_ENTRY_KEY;
  }
  const obj3 = appEntryKey(4811);
  sharedValue = obj3.useSharedValue(true === sharedValue(1501).getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].keyboardContexts[appEntryKey(undefined, 1629).KeyboardTypes.SYSTEM].keyboardWillOpen);
  if (cResult[0] === appEntryKey) {
    if (cResult[1] === sharedValue) {
      let tmp6 = cResult[2];
      let tmp7 = cResult[3];
    }
    const effect = noop.useEffect(tmp6, tmp7);
    return sharedValue;
  }
  const fn = function t() {
    return KeyboardUIStore.addKeyboardWillOpenChangedListener((arg0, arg1) => {
      let tmp = null != arg1;
      if (tmp) {
        tmp = arg1 !== appEntryKey;
      }
      if (!tmp) {
        const result = sharedValue.set(arg0);
      }
    });
  };
  const items = [appEntryKey, sharedValue];
  cResult[0] = appEntryKey;
  cResult[1] = sharedValue;
  cResult[2] = fn;
  cResult[3] = items;
  tmp7 = items;
  tmp6 = fn;
  const obj4 = sharedValue(1501);
}) : (function useKeyboardWillOpenSharedValue() {
  appEntryKey = appEntryKey(1500).useAppEntryKey();
  const obj = appEntryKey(1500);
  let tmp = appEntryKey;
  let DEFAULT_APP_ENTRY_KEY = appEntryKey;
  if (appEntryKey === undefined) {
    DEFAULT_APP_ENTRY_KEY = tmp(1500).DEFAULT_APP_ENTRY_KEY;
  }
  const obj2 = appEntryKey(4811);
  sharedValue = obj2.useSharedValue(true === sharedValue(1501).getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].keyboardContexts[appEntryKey(undefined, 1629).KeyboardTypes.SYSTEM].keyboardWillOpen);
  const items = [appEntryKey, sharedValue];
  const effect = noop.useEffect(() => KeyboardUIStore.addKeyboardWillOpenChangedListener((arg0, arg1) => {
    let tmp = null != arg1;
    if (tmp) {
      tmp = arg1 !== appEntryKey;
    }
    if (!tmp) {
      const result = sharedValue.set(arg0);
    }
  }), items);
  return sharedValue;
});