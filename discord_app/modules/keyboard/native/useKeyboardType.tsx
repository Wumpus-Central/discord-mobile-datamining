// discord_app/modules/keyboard/native/useKeyboardType.tsx
import AppEntryKeyContext from "../../window/native/AppEntryKeyContext.tsx";
import KeyboardUIStore from "KeyboardUIStore.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const KeyboardUIStoreDefault = KeyboardUIStore;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/keyboard/native/useKeyboardType.tsx");

export default function useKeyboardType() {
  closure_0 = AppEntryKeyContext.useAppEntryKey();
  return KeyboardUIStoreDefault((arg0) => arg0.byAppEntry[closure_0].keyboardType);
}
export function getKeyboardContextForType(EXPRESSION) {
  let DEFAULT_APP_ENTRY_KEY = arg1;
  if (arg1 === undefined) {
    DEFAULT_APP_ENTRY_KEY = AppEntryKeyContext.DEFAULT_APP_ENTRY_KEY;
  }
  return KeyboardUIStoreDefault.getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].keyboardContexts[EXPRESSION];
}
export function useKeyboardContextForType(SYSTEM) {
  closure_0 = SYSTEM;
  closure_1 = AppEntryKeyContext.useAppEntryKey();
  return KeyboardUIStoreDefault((arg0) => arg0.byAppEntry[closure_1].keyboardContexts[closure_0]);
}
export function getKeyboardType() {
  let DEFAULT_APP_ENTRY_KEY = appEntryKey;
  if (appEntryKey === undefined) {
    DEFAULT_APP_ENTRY_KEY = AppEntryKeyContext.DEFAULT_APP_ENTRY_KEY;
  }
  return KeyboardUIStoreDefault.getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].keyboardType;
}
export function getKeyboardTypePrevious() {
  let DEFAULT_APP_ENTRY_KEY = arg0;
  if (arg0 === undefined) {
    DEFAULT_APP_ENTRY_KEY = AppEntryKeyContext.DEFAULT_APP_ENTRY_KEY;
  }
  return KeyboardUIStoreDefault.getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].keyboardTypePrevious;
}
export function useKeyboardTypePrevious() {
  closure_0 = AppEntryKeyContext.useAppEntryKey();
  return KeyboardUIStoreDefault((arg0) => arg0.byAppEntry[closure_0].keyboardTypePrevious);
}
export function useKeyboardTypeSharedValue() {
  appEntryKey = appEntryKey(1495).useAppEntryKey();
  const obj = appEntryKey(1495);
  let tmp = appEntryKey;
  let DEFAULT_APP_ENTRY_KEY = appEntryKey;
  if (appEntryKey === undefined) {
    DEFAULT_APP_ENTRY_KEY = tmp(1495).DEFAULT_APP_ENTRY_KEY;
  }
  const obj2 = appEntryKey(5090);
  sharedValue = obj2.useSharedValue(sharedValue(1496).getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].keyboardType);
  const items = [appEntryKey, sharedValue];
  const effect = noop.useEffect(
    () =>
      KeyboardUIStore.addKeyboardTypeChangedListener((type, arg1) => {
        let tmp = null != arg1;
        if (tmp) {
          tmp = arg1 !== appEntryKey;
        }
        if (!tmp) {
          const result = sharedValue.set(type.type);
        }
      }),
    items,
  );
  return sharedValue;
}
export function useKeyboardWillOpenSharedValue() {
  appEntryKey = appEntryKey(1495).useAppEntryKey();
  const obj = appEntryKey(1495);
  let tmp = appEntryKey;
  let DEFAULT_APP_ENTRY_KEY = appEntryKey;
  if (appEntryKey === undefined) {
    DEFAULT_APP_ENTRY_KEY = tmp(1495).DEFAULT_APP_ENTRY_KEY;
  }
  const obj2 = appEntryKey(5090);
  sharedValue = obj2.useSharedValue(
    true ===
      sharedValue(1496).getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].keyboardContexts[
        appEntryKey(undefined, 1624).KeyboardTypes.SYSTEM
      ].keyboardWillOpen,
  );
  const items = [appEntryKey, sharedValue];
  const effect = noop.useEffect(
    () =>
      KeyboardUIStore.addKeyboardWillOpenChangedListener((arg0, arg1) => {
        let tmp = null != arg1;
        if (tmp) {
          tmp = arg1 !== appEntryKey;
        }
        if (!tmp) {
          const result = sharedValue.set(arg0);
        }
      }),
    items,
  );
  return sharedValue;
}
