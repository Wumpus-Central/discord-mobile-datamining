import { context } from "../../window/native/AppEntryKeyContext.tsx";
import { computeEntryState } from "KeyboardUIStore.native.tsx";
// discord_app/modules/keyboard/native/useKeyboardType.tsx
import noop from "noop";

const require = arg1;
let result = require("computeEntryState").fileFinishedImporting("modules/keyboard/native/useKeyboardType.tsx");

export default function useKeyboardType() {
  _require = _context.useAppEntryKey();
  return computeEntryState((arg0) => arg0.byAppEntry[closure_0].keyboardType);
};
export const getKeyboardContextForType = function getKeyboardContextForType(arg0) {
  let DEFAULT_APP_ENTRY_KEY = arg1;
  if (arg1 === undefined) {
    DEFAULT_APP_ENTRY_KEY = context /* context */.DEFAULT_APP_ENTRY_KEY;
  }
  return computeEntryState.getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].keyboardContexts[arg0];
};
export const useKeyboardContextForType = function useKeyboardContextForType(SYSTEM) {
  const _require = SYSTEM;
  const importDefault = _context.useAppEntryKey();
  return computeEntryState((arg0) => arg0.byAppEntry[closure_1].keyboardContexts[closure_0]);
};
export const getKeyboardType = function getKeyboardType(arg0) {
  let DEFAULT_APP_ENTRY_KEY = arg0;
  if (arg0 === undefined) {
    DEFAULT_APP_ENTRY_KEY = context /* context */.DEFAULT_APP_ENTRY_KEY;
  }
  return computeEntryState.getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].keyboardType;
};
export const getKeyboardTypePrevious = function getKeyboardTypePrevious() {
  let DEFAULT_APP_ENTRY_KEY = arg0;
  if (arg0 === undefined) {
    DEFAULT_APP_ENTRY_KEY = context /* context */.DEFAULT_APP_ENTRY_KEY;
  }
  return computeEntryState.getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].keyboardTypePrevious;
};
export const useKeyboardTypePrevious = function useKeyboardTypePrevious() {
  _require = _context.useAppEntryKey();
  return computeEntryState((arg0) => arg0.byAppEntry[closure_0].keyboardTypePrevious);
};
export const useKeyboardTypeSharedValue = function useKeyboardTypeSharedValue() {
  appEntryKey = appEntryKey(1477).useAppEntryKey();
  const obj = appEntryKey(1477);
  let tmp = appEntryKey;
  let DEFAULT_APP_ENTRY_KEY = appEntryKey;
  if (appEntryKey === undefined) {
    DEFAULT_APP_ENTRY_KEY = tmp(1477).DEFAULT_APP_ENTRY_KEY;
  }
  const obj2 = appEntryKey(4146);
  sharedValue = obj2.useSharedValue(sharedValue(1478).getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].keyboardType);
  const items = [appEntryKey, sharedValue];
  const effect = React.useEffect(() => appEntryKey(outer1_2[2]).addKeyboardTypeChangedListener((type) => {
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
  appEntryKey = appEntryKey(1477).useAppEntryKey();
  const obj = appEntryKey(1477);
  let tmp = appEntryKey;
  let DEFAULT_APP_ENTRY_KEY = appEntryKey;
  if (appEntryKey === undefined) {
    DEFAULT_APP_ENTRY_KEY = tmp(1477).DEFAULT_APP_ENTRY_KEY;
  }
  const obj2 = appEntryKey(4146);
  sharedValue = obj2.useSharedValue(true === sharedValue(1478).getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].keyboardContexts[appEntryKey(undefined, 1579).KeyboardTypes.SYSTEM].keyboardWillOpen);
  const items = [appEntryKey, sharedValue];
  const effect = React.useEffect(() => appEntryKey(outer1_2[2]).addKeyboardWillOpenChangedListener((arg0, arg1) => {
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