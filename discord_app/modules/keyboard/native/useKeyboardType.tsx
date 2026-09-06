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
export const getKeyboardContextForType = function getKeyboardContextForType(arg0) {
  let DEFAULT_APP_ENTRY_KEY = arg1;
  if (arg1 === undefined) {
    DEFAULT_APP_ENTRY_KEY = AppEntryKeyContext.DEFAULT_APP_ENTRY_KEY;
  }
  return KeyboardUIStoreDefault.getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].keyboardContexts[arg0];
};
export const useKeyboardContextForType = function useKeyboardContextForType(SYSTEM) {
  closure_0 = SYSTEM;
  closure_1 = AppEntryKeyContext.useAppEntryKey();
  return KeyboardUIStoreDefault((arg0) => arg0.byAppEntry[closure_1].keyboardContexts[closure_0]);
};
export const getKeyboardType = function getKeyboardType(appEntryKey) {
  let DEFAULT_APP_ENTRY_KEY = appEntryKey;
  if (appEntryKey === undefined) {
    DEFAULT_APP_ENTRY_KEY = AppEntryKeyContext.DEFAULT_APP_ENTRY_KEY;
  }
  return KeyboardUIStoreDefault.getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].keyboardType;
};
export const getKeyboardTypePrevious = function getKeyboardTypePrevious() {
  let DEFAULT_APP_ENTRY_KEY = arg0;
  if (arg0 === undefined) {
    DEFAULT_APP_ENTRY_KEY = AppEntryKeyContext.DEFAULT_APP_ENTRY_KEY;
  }
  return KeyboardUIStoreDefault.getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].keyboardTypePrevious;
};
export const useKeyboardTypePrevious = function useKeyboardTypePrevious() {
  closure_0 = AppEntryKeyContext.useAppEntryKey();
  return KeyboardUIStoreDefault((arg0) => arg0.byAppEntry[closure_0].keyboardTypePrevious);
};
export const useKeyboardTypeSharedValue = function useKeyboardTypeSharedValue() {
  appEntryKey = appEntryKey(1480).useAppEntryKey();
  const obj = appEntryKey(1480);
  let tmp = appEntryKey;
  let DEFAULT_APP_ENTRY_KEY = appEntryKey;
  if (appEntryKey === undefined) {
    DEFAULT_APP_ENTRY_KEY = tmp(1480).DEFAULT_APP_ENTRY_KEY;
  }
  const obj2 = appEntryKey(4296);
  sharedValue = obj2.useSharedValue(sharedValue(1481).getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].keyboardType);
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
};
export const useKeyboardWillOpenSharedValue = function useKeyboardWillOpenSharedValue() {
  appEntryKey = appEntryKey(1480).useAppEntryKey();
  const obj = appEntryKey(1480);
  let tmp = appEntryKey;
  let DEFAULT_APP_ENTRY_KEY = appEntryKey;
  if (appEntryKey === undefined) {
    DEFAULT_APP_ENTRY_KEY = tmp(1480).DEFAULT_APP_ENTRY_KEY;
  }
  const obj2 = appEntryKey(4296);
  sharedValue = obj2.useSharedValue(
    true ===
      sharedValue(1481).getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].keyboardContexts[
        appEntryKey(undefined, 1609).KeyboardTypes.SYSTEM
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
};
