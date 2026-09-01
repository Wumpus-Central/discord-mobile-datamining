// === Module 4342: useKeyboardType ===

// Module 4342 (useKeyboardType)
import context from "context" /* 1496 */;
import computeEntryStateDefault from "computeEntryState" /* 1497 */;
import closure_3 from "noop" /* 19 */;

require = arg1;
let result = require("set").fileFinishedImporting("modules/keyboard/native/useKeyboardType.tsx");

export default function useKeyboardType() {
  _require = _require(1496).useAppEntryKey();
  return computeEntryStateDefault((arg0) => arg0.byAppEntry[closure_0].keyboardType);
};
export const getKeyboardContextForType = function getKeyboardContextForType(arg0) {
  let DEFAULT_APP_ENTRY_KEY = arg1;
  if (arg1 === undefined) {
    DEFAULT_APP_ENTRY_KEY = context.DEFAULT_APP_ENTRY_KEY;
  }
  return computeEntryStateDefault.getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].keyboardContexts[arg0];
};
export const useKeyboardContextForType = function useKeyboardContextForType(SYSTEM) {
  const _require = SYSTEM;
  importDefault = _require(1496).useAppEntryKey();
  return computeEntryStateDefault((arg0) => arg0.byAppEntry[closure_1].keyboardContexts[closure_0]);
};
export const getKeyboardType = function getKeyboardType(arg0) {
  let DEFAULT_APP_ENTRY_KEY = arg0;
  if (arg0 === undefined) {
    DEFAULT_APP_ENTRY_KEY = context.DEFAULT_APP_ENTRY_KEY;
  }
  return computeEntryStateDefault.getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].keyboardType;
};
export const getKeyboardTypePrevious = function getKeyboardTypePrevious() {
  let DEFAULT_APP_ENTRY_KEY = arg0;
  if (arg0 === undefined) {
    DEFAULT_APP_ENTRY_KEY = context.DEFAULT_APP_ENTRY_KEY;
  }
  return computeEntryStateDefault.getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].keyboardTypePrevious;
};
export const useKeyboardTypePrevious = function useKeyboardTypePrevious() {
  _require = _require(1496).useAppEntryKey();
  return computeEntryStateDefault((arg0) => arg0.byAppEntry[closure_0].keyboardTypePrevious);
};
export const useKeyboardTypeSharedValue = function useKeyboardTypeSharedValue() {
  appEntryKey = appEntryKey(1496).useAppEntryKey();
  const obj = appEntryKey(1496);
  let tmp = appEntryKey;
  let DEFAULT_APP_ENTRY_KEY = appEntryKey;
  if (appEntryKey === undefined) {
    DEFAULT_APP_ENTRY_KEY = tmp(1496).DEFAULT_APP_ENTRY_KEY;
  }
  const obj2 = appEntryKey(4217);
  sharedValue = obj2.useSharedValue(sharedValue(1497).getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].keyboardType);
  const items = [appEntryKey, sharedValue];
  const effect = React.useEffect(() => appEntryKey(closure_1_2[2]).addKeyboardTypeChangedListener((type) => {
    let tmp = null != arg1;
    if (tmp) {
      tmp = arg1 !== closure_0;
    }
    if (!tmp) {
      const result = closure_1.set(type.type);
    }
  }), items);
  return sharedValue;
};
export const useKeyboardWillOpenSharedValue = function useKeyboardWillOpenSharedValue() {
  appEntryKey = appEntryKey(1496).useAppEntryKey();
  const obj = appEntryKey(1496);
  let tmp = appEntryKey;
  let DEFAULT_APP_ENTRY_KEY = appEntryKey;
  if (appEntryKey === undefined) {
    DEFAULT_APP_ENTRY_KEY = tmp(1496).DEFAULT_APP_ENTRY_KEY;
  }
  const obj2 = appEntryKey(4217);
  sharedValue = obj2.useSharedValue(true === sharedValue(1497).getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].keyboardContexts[appEntryKey(undefined, 1626).KeyboardTypes.SYSTEM].keyboardWillOpen);
  const items = [appEntryKey, sharedValue];
  const effect = React.useEffect(() => appEntryKey(closure_1_2[2]).addKeyboardWillOpenChangedListener((arg0, arg1) => {
    let tmp = null != arg1;
    if (tmp) {
      tmp = arg1 !== closure_0;
    }
    if (!tmp) {
      const result = closure_1.set(arg0);
    }
  }), items);
  return sharedValue;
};