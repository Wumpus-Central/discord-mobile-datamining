// discord_app/modules/keyboard/native/useKeyboardIsOpen.tsx
import AppEntryKeyContext from "../../window/native/AppEntryKeyContext.tsx";
import KeyboardUIStoreDefault from "KeyboardUIStore.native.tsx";
import KeyboardTypes from "KeyboardTypes.tsx";
import subscribeToKeyboardUIStore from "subscribeToKeyboardUIStore.tsx";

require = fn;
let closure_4 = {};
const size = fn(2);
const result = size.fileFinishedImporting("modules/keyboard/native/useKeyboardIsOpen.tsx");

export default function useKeyboardIsOpen() {
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = closure_4;
  }
  let flag = tmp.includeCustomKeyboard;
  if (flag === undefined) {
    flag = false;
  }
  importDefault = flag(1480).useAppEntryKey();
  return KeyboardUIStoreDefault((arg0) => {
    const systemKeyboardOpen = tmp.systemKeyboardOpen;
    if (flag) {
      let tmp3 = systemKeyboardOpen;
      if (!systemKeyboardOpen) {
        tmp3 = tmp.keyboardType !== KeyboardTypes.KeyboardTypes.SYSTEM;
      }
      let tmp2 = tmp3;
    } else {
      tmp2 = systemKeyboardOpen;
    }
    return tmp2;
  });
}
export const subscribeToKeyboardIsOpen = function subscribeToKeyboardIsOpen(arg0) {
  _require = arg0;
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = closure_4;
  }
  let flag = tmp.includeCustomKeyboard;
  if (flag === undefined) {
    flag = false;
  }
  let DEFAULT_APP_ENTRY_KEY = tmp.appEntryKey;
  if (DEFAULT_APP_ENTRY_KEY === undefined) {
    DEFAULT_APP_ENTRY_KEY = require("AppEntryKeyContext").DEFAULT_APP_ENTRY_KEY;
  }
  return subscribeToKeyboardUIStore(() => {
    const obj = { includeCustomKeyboard: flag, appEntryKey: DEFAULT_APP_ENTRY_KEY };
    flag = obj.includeCustomKeyboard;
    if (flag === undefined) {
      flag = false;
    }
    DEFAULT_APP_ENTRY_KEY = obj.appEntryKey;
    if (DEFAULT_APP_ENTRY_KEY === undefined) {
      DEFAULT_APP_ENTRY_KEY = AppEntryKeyContext.DEFAULT_APP_ENTRY_KEY;
    }
    const tmp5 = KeyboardUIStoreDefault.getState().byAppEntry[DEFAULT_APP_ENTRY_KEY];
    const systemKeyboardOpen = tmp5.systemKeyboardOpen;
    if (flag) {
      let tmp7 = systemKeyboardOpen;
      if (!systemKeyboardOpen) {
        tmp7 = tmp5.keyboardType !== KeyboardTypes.KeyboardTypes.SYSTEM;
      }
      let tmp6 = tmp7;
    } else {
      tmp6 = systemKeyboardOpen;
    }
    return closure_0(tmp6);
  }, DEFAULT_APP_ENTRY_KEY);
};
export const getKeyboardIsOpen = function getKeyboardIsOpen(arg0) {
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = closure_4;
  }
  let flag = tmp.includeCustomKeyboard;
  if (flag === undefined) {
    flag = false;
  }
  let DEFAULT_APP_ENTRY_KEY = tmp.appEntryKey;
  if (DEFAULT_APP_ENTRY_KEY === undefined) {
    DEFAULT_APP_ENTRY_KEY = AppEntryKeyContext.DEFAULT_APP_ENTRY_KEY;
  }
  const tmp5 = KeyboardUIStoreDefault.getState().byAppEntry[DEFAULT_APP_ENTRY_KEY];
  const systemKeyboardOpen = tmp5.systemKeyboardOpen;
  if (flag) {
    let tmp7 = systemKeyboardOpen;
    if (!systemKeyboardOpen) {
      tmp7 = tmp5.keyboardType !== KeyboardTypes.KeyboardTypes.SYSTEM;
    }
    let tmp6 = tmp7;
  } else {
    tmp6 = systemKeyboardOpen;
  }
  return tmp6;
};
