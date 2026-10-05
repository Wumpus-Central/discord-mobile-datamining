// === Module 4747: useKeyboardType ===

// Module 4747 (useKeyboardType)
import react2 from "react" /* 576 */;
import AppEntryKeyContext from "AppEntryKeyContext" /* 1487 */;
import KeyboardUIStore from "KeyboardUIStore" /* 1488 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const KeyboardUIStoreDefault = KeyboardUIStore;
let type;

let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0 = arg0;
  const obj = react2;
  const cResult = obj.c(3);
  const obj2 = AppEntryKeyContext;
  const appEntryKey = obj2.useAppEntryKey();
  if (cResult[0] === appEntryKey) {
    let tmp4;
    if (cResult[1] === arg0) {
      tmp4 = cResult[2];
    }
    return KeyboardUIStoreDefault(tmp4);
  }
  const fn = function y(arg0) {
    return arg0.byAppEntry[appEntryKey].keyboardContexts[closure_0];
  };
  cResult[0] = appEntryKey;
  cResult[1] = arg0;
  cResult[2] = fn;
  tmp4 = fn;
}) : ((arg0) => {
  let closure_0 = arg0;
  const obj = AppEntryKeyContext;
  let closure_1 = obj.useAppEntryKey();
  return KeyboardUIStoreDefault((arg0) => arg0.byAppEntry[closure_1].keyboardContexts[closure_0]);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp4;
  const obj = react2;
  const cResult = obj.c(2);
  const obj2 = AppEntryKeyContext;
  const appEntryKey = obj2.useAppEntryKey();
  if (cResult[0] !== appEntryKey) {
    const fn = function t(arg0) {
      return arg0.byAppEntry[appEntryKey].keyboardType;
    };
    cResult[0] = appEntryKey;
    cResult[1] = fn;
    tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  return KeyboardUIStoreDefault(tmp4);
}) : (() => {
  const obj = AppEntryKeyContext;
  let closure_0 = obj.useAppEntryKey();
  return KeyboardUIStoreDefault((arg0) => arg0.byAppEntry[closure_0].keyboardType);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp4;
  const obj = react2;
  const cResult = obj.c(2);
  const obj2 = AppEntryKeyContext;
  const appEntryKey = obj2.useAppEntryKey();
  if (cResult[0] !== appEntryKey) {
    const fn = function t(arg0) {
      return arg0.byAppEntry[appEntryKey].keyboardTypePrevious;
    };
    cResult[0] = appEntryKey;
    cResult[1] = fn;
    tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  return KeyboardUIStoreDefault(tmp4);
}) : (() => {
  const obj = AppEntryKeyContext;
  let closure_0 = obj.useAppEntryKey();
  return KeyboardUIStoreDefault((arg0) => arg0.byAppEntry[closure_0].keyboardTypePrevious);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let appEntryKey;
  let sharedValue;
  let tmp = appEntryKey;
  let obj = appEntryKey(576);
  const cResult = obj.c(4);
  const obj2 = appEntryKey(1487);
  appEntryKey = obj2.useAppEntryKey();
  let DEFAULT_APP_ENTRY_KEY = appEntryKey;
  const useSharedValue = appEntryKey(4612).useSharedValue;
  appEntryKey(4612);
  if (appEntryKey === undefined) {
    DEFAULT_APP_ENTRY_KEY = tmp(1487).DEFAULT_APP_ENTRY_KEY;
  }
  const obj3 = sharedValue(1488);
  sharedValue = useSharedValue(obj3.getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].keyboardType);
  if (cResult[0] === appEntryKey) {
    let tmp7;
    let tmp8;
    if (cResult[1] === sharedValue) {
      tmp7 = cResult[2];
      tmp8 = cResult[3];
    }
    const effect = react.useEffect(tmp7, tmp8);
    return sharedValue;
  }
  const fn = function y() {
    const obj = KeyboardUIStore;
    return obj.addKeyboardTypeChangedListener((type, arg1) => {
      let tmp = null != arg1;
      type = type.type;
      if (tmp) {
        tmp = arg1 !== appEntryKey;
      }
      if (!tmp) {
        const result = sharedValue.set(type);
      }
    });
  };
  const items = [appEntryKey, sharedValue];
  cResult[0] = appEntryKey;
  cResult[1] = sharedValue;
  cResult[2] = fn;
  cResult[3] = items;
  tmp8 = items;
  tmp7 = fn;
}) : (() => {
  let appEntryKey;
  let sharedValue;
  let tmp = appEntryKey;
  let obj = appEntryKey(1487);
  appEntryKey = obj.useAppEntryKey();
  let DEFAULT_APP_ENTRY_KEY = appEntryKey;
  const useSharedValue = appEntryKey(4612).useSharedValue;
  appEntryKey(4612);
  if (appEntryKey === undefined) {
    DEFAULT_APP_ENTRY_KEY = tmp(1487).DEFAULT_APP_ENTRY_KEY;
  }
  const obj2 = sharedValue(1488);
  sharedValue = useSharedValue(obj2.getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].keyboardType);
  const items = [appEntryKey, sharedValue];
  const effect = react.useEffect(() => {
    const obj = KeyboardUIStore;
    return obj.addKeyboardTypeChangedListener((type, arg1) => {
      let tmp = null != arg1;
      type = type.type;
      if (tmp) {
        tmp = arg1 !== appEntryKey;
      }
      if (!tmp) {
        const result = sharedValue.set(type);
      }
    });
  }, items);
  return sharedValue;
});
ReactCompilerGating = ReactCompilerGating_mod;
function getKeyboardContextForType(EXPRESSION) {
  let DEFAULT_APP_ENTRY_KEY = arg1;
  if (arg1 === undefined) {
    DEFAULT_APP_ENTRY_KEY = AppEntryKeyContext.DEFAULT_APP_ENTRY_KEY;
  }
  const obj = KeyboardUIStoreDefault;
  return obj.getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].keyboardContexts[EXPRESSION];
}
function getKeyboardType() {
  let DEFAULT_APP_ENTRY_KEY = appEntryKey;
  if (appEntryKey === undefined) {
    DEFAULT_APP_ENTRY_KEY = AppEntryKeyContext.DEFAULT_APP_ENTRY_KEY;
  }
  const obj = KeyboardUIStoreDefault;
  return obj.getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].keyboardType;
}
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let appEntryKey;
  let sharedValue;
  let tmp = appEntryKey;
  let obj = appEntryKey(576);
  const cResult = obj.c(4);
  const obj2 = appEntryKey(1487);
  appEntryKey = obj2.useAppEntryKey();
  const useSharedValue = appEntryKey(4612).useSharedValue;
  let DEFAULT_APP_ENTRY_KEY = appEntryKey;
  appEntryKey(4612);
  const SYSTEM = appEntryKey(1616).KeyboardTypes.SYSTEM;
  if (appEntryKey === undefined) {
    DEFAULT_APP_ENTRY_KEY = tmp(1487).DEFAULT_APP_ENTRY_KEY;
  }
  const obj3 = sharedValue(1488);
  sharedValue = useSharedValue(true === obj3.getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].keyboardContexts[SYSTEM].keyboardWillOpen);
  if (cResult[0] === appEntryKey) {
    let tmp7;
    let tmp8;
    if (cResult[1] === sharedValue) {
      tmp7 = cResult[2];
      tmp8 = cResult[3];
    }
    const effect = react.useEffect(tmp7, tmp8);
    return sharedValue;
  }
  const fn = function y() {
    const obj = KeyboardUIStore;
    return obj.addKeyboardWillOpenChangedListener((arg0, arg1) => {
      const tmp = null != arg1 && arg1 !== appEntryKey;
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
  tmp8 = items;
  tmp7 = fn;
}) : (() => {
  let appEntryKey;
  let sharedValue;
  let tmp = appEntryKey;
  let obj = appEntryKey(1487);
  appEntryKey = obj.useAppEntryKey();
  const useSharedValue = appEntryKey(4612).useSharedValue;
  let DEFAULT_APP_ENTRY_KEY = appEntryKey;
  appEntryKey(4612);
  const SYSTEM = appEntryKey(1616).KeyboardTypes.SYSTEM;
  if (appEntryKey === undefined) {
    DEFAULT_APP_ENTRY_KEY = tmp(1487).DEFAULT_APP_ENTRY_KEY;
  }
  const obj2 = sharedValue(1488);
  sharedValue = useSharedValue(true === obj2.getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].keyboardContexts[SYSTEM].keyboardWillOpen);
  const items = [appEntryKey, sharedValue];
  const effect = react.useEffect(() => {
    const obj = KeyboardUIStore;
    return obj.addKeyboardWillOpenChangedListener((arg0, arg1) => {
      const tmp = null != arg1 && arg1 !== appEntryKey;
      if (!tmp) {
        const result = sharedValue.set(arg0);
      }
    });
  }, items);
  return sharedValue;
});
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
  const obj = KeyboardUIStoreDefault;
  return obj.getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].keyboardTypePrevious;
};
export const useKeyboardTypePrevious = tmp4;
export const useKeyboardTypeSharedValue = tmp5;
export const useKeyboardWillOpenSharedValue = tmp6;