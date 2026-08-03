// === Module 5903: useKeyboardIsOpen ===

// Module 5903 (useKeyboardIsOpen)
import subscribeToKeyboardUIStore from "subscribeToKeyboardUIStore";

const require = arg1;
let closure_4 = {};
const result = require("computeEntryState").fileFinishedImporting("modules/keyboard/native/useKeyboardIsOpen.tsx");

export default function useKeyboardIsOpen() {
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = closure_4;
  }
  let flag = tmp.includeCustomKeyboard;
  if (flag === undefined) {
    flag = false;
  }
  let importDefault;
  importDefault = flag(1477).useAppEntryKey();
  return importDefault(1478)((arg0) => {
    const systemKeyboardOpen = tmp.systemKeyboardOpen;
    if (flag) {
      let tmp3 = systemKeyboardOpen;
      if (!systemKeyboardOpen) {
        tmp3 = tmp.keyboardType !== flag(outer1_2[3]).KeyboardTypes.SYSTEM;
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
    DEFAULT_APP_ENTRY_KEY = require(1477) /* context */.DEFAULT_APP_ENTRY_KEY;
  }
  const tmp5 = importDefault(1478).getState().byAppEntry[DEFAULT_APP_ENTRY_KEY];
  const systemKeyboardOpen = tmp5.systemKeyboardOpen;
  if (flag) {
    let tmp7 = systemKeyboardOpen;
    if (!systemKeyboardOpen) {
      tmp7 = tmp5.keyboardType !== require(1579) /* KeyboardTypes */.KeyboardTypes.SYSTEM;
    }
    let tmp6 = tmp7;
  } else {
    tmp6 = systemKeyboardOpen;
  }
  return tmp6;
};