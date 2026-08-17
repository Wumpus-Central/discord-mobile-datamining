// discord_app/modules/keyboard/native/useKeyboardIsOpen.tsx
import context from "context" /* 1497 */;
import computeEntryStateDefault from "computeEntryState" /* 1498 */;
import KeyboardTypes from "KeyboardTypes" /* 1627 */;
import closure_3 from "subscribeToKeyboardUIStore" /* 1496 */;

require = arg1;
let closure_4 = {};
const result = require("set").fileFinishedImporting("modules/keyboard/native/useKeyboardIsOpen.tsx");

export default function useKeyboardIsOpen() {
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = closure_4;
  }
  let flag = tmp.includeCustomKeyboard;
  if (flag === undefined) {
    flag = false;
  }
  importDefault = undefined;
  importDefault = flag(1497).useAppEntryKey();
  return computeEntryStateDefault((arg0) => {
    const systemKeyboardOpen = tmp.systemKeyboardOpen;
    if (flag) {
      let tmp3 = systemKeyboardOpen;
      if (!systemKeyboardOpen) {
        tmp3 = tmp.keyboardType !== flag(closure_1_2[3]).KeyboardTypes.SYSTEM;
      }
      let tmp2 = tmp3;
    } else {
      tmp2 = systemKeyboardOpen;
    }
    return tmp2;
  });
};
export const subscribeToKeyboardIsOpen = function subscribeToKeyboardIsOpen(arg0) {
  const _require = arg0;
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
    DEFAULT_APP_ENTRY_KEY = _require(DEFAULT_APP_ENTRY_KEY[1]).DEFAULT_APP_ENTRY_KEY;
  }
  return callback(() => {
    const obj = { includeCustomKeyboard: flag, appEntryKey: DEFAULT_APP_ENTRY_KEY };
    flag = obj.includeCustomKeyboard;
    if (flag === undefined) {
      flag = false;
    }
    DEFAULT_APP_ENTRY_KEY = obj.appEntryKey;
    if (DEFAULT_APP_ENTRY_KEY === undefined) {
      DEFAULT_APP_ENTRY_KEY = callback(DEFAULT_APP_ENTRY_KEY[1]).DEFAULT_APP_ENTRY_KEY;
    }
    const tmp5 = flag(DEFAULT_APP_ENTRY_KEY[2]).getState().byAppEntry[DEFAULT_APP_ENTRY_KEY];
    const systemKeyboardOpen = tmp5.systemKeyboardOpen;
    if (flag) {
      let tmp7 = systemKeyboardOpen;
      if (!systemKeyboardOpen) {
        tmp7 = tmp5.keyboardType !== callback(DEFAULT_APP_ENTRY_KEY[3]).KeyboardTypes.SYSTEM;
      }
      let tmp6 = tmp7;
    } else {
      tmp6 = systemKeyboardOpen;
    }
    return callback(tmp6);
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
    DEFAULT_APP_ENTRY_KEY = context.DEFAULT_APP_ENTRY_KEY;
  }
  const tmp5 = computeEntryStateDefault.getState().byAppEntry[DEFAULT_APP_ENTRY_KEY];
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