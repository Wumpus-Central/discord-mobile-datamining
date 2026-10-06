// === Module 6117: useKeyboardIsOpen ===

// Module 6117 (useKeyboardIsOpen)
import AppEntryKeyContext from "AppEntryKeyContext" /* 1487 */;
import KeyboardUIStoreDefault from "KeyboardUIStore" /* 1488 */;
import KeyboardTypes from "KeyboardTypes" /* 1616 */;
import subscribeToKeyboardUIStore from "subscribeToKeyboardUIStore" /* 1486 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let closure_4 = {};
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let tmp = arg0;
  let tmp2 = _require;
  const obj = require("react");
  const cResult = obj.c(3);
  if (undefined === arg0) {
    tmp = closure_4;
  }
  const includeCustomKeyboard = tmp.includeCustomKeyboard;
  _require = tmp5;
  const tmp2Result = tmp2(1487);
  const appEntryKey = tmp2Result.useAppEntryKey();
  if (cResult[0] === appEntryKey) {
    let tmp7;
    if (cResult[1] === (undefined !== includeCustomKeyboard && includeCustomKeyboard)) {
      tmp7 = cResult[2];
    }
    return appEntryKey(1488)(tmp7);
  }
  const fn = function t(arg0) {
    let tmp2;
    const systemKeyboardOpen = tmp.systemKeyboardOpen;
    if (closure_0) {
      tmp2 = systemKeyboardOpen || tmp.keyboardType !== KeyboardTypes.KeyboardTypes.SYSTEM;
      const tmp3 = systemKeyboardOpen || tmp.keyboardType !== KeyboardTypes.KeyboardTypes.SYSTEM;
    } else {
      tmp2 = systemKeyboardOpen;
    }
    return tmp2;
  };
  cResult[0] = appEntryKey;
  cResult[1] = undefined !== includeCustomKeyboard && includeCustomKeyboard;
  cResult[2] = fn;
  tmp7 = fn;
}) : (() => {
  let closure_1;
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = closure_4;
  }
  let flag = tmp.includeCustomKeyboard;
  if (flag === undefined) {
    flag = false;
  }
  const obj = flag(1487);
  importDefault = obj.useAppEntryKey();
  return KeyboardUIStoreDefault((arg0) => {
    let tmp2;
    const systemKeyboardOpen = tmp.systemKeyboardOpen;
    if (flag) {
      tmp2 = systemKeyboardOpen || tmp.keyboardType !== KeyboardTypes.KeyboardTypes.SYSTEM;
      const tmp3 = systemKeyboardOpen || tmp.keyboardType !== KeyboardTypes.KeyboardTypes.SYSTEM;
    } else {
      tmp2 = systemKeyboardOpen;
    }
    return tmp2;
  });
});
function getKeyboardIsOpen(arg0) {
  let tmp6;
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
  const obj = KeyboardUIStoreDefault;
  const tmp5 = obj.getState().byAppEntry[DEFAULT_APP_ENTRY_KEY];
  const systemKeyboardOpen = tmp5.systemKeyboardOpen;
  if (flag) {
    tmp6 = systemKeyboardOpen || tmp5.keyboardType !== KeyboardTypes.KeyboardTypes.SYSTEM;
    const tmp7 = systemKeyboardOpen || tmp5.keyboardType !== KeyboardTypes.KeyboardTypes.SYSTEM;
  } else {
    tmp6 = systemKeyboardOpen;
  }
  return tmp6;
}
const result = size.fileFinishedImporting("modules/keyboard/native/useKeyboardIsOpen.tsx");

export default tmp2;
export const subscribeToKeyboardIsOpen = function subscribeToKeyboardIsOpen(arg0) {
  let closure_0;
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
    let tmp6;
    const obj = { includeCustomKeyboard: flag, appEntryKey: DEFAULT_APP_ENTRY_KEY };
    flag = obj.includeCustomKeyboard;
    if (flag === undefined) {
      flag = false;
    }
    DEFAULT_APP_ENTRY_KEY = obj.appEntryKey;
    if (DEFAULT_APP_ENTRY_KEY === undefined) {
      DEFAULT_APP_ENTRY_KEY = AppEntryKeyContext.DEFAULT_APP_ENTRY_KEY;
    }
    const obj2 = KeyboardUIStoreDefault;
    const tmp5 = obj2.getState().byAppEntry[DEFAULT_APP_ENTRY_KEY];
    const systemKeyboardOpen = tmp5.systemKeyboardOpen;
    if (flag) {
      tmp6 = systemKeyboardOpen || tmp5.keyboardType !== KeyboardTypes.KeyboardTypes.SYSTEM;
      const tmp7 = systemKeyboardOpen || tmp5.keyboardType !== KeyboardTypes.KeyboardTypes.SYSTEM;
    } else {
      tmp6 = systemKeyboardOpen;
    }
    return closure_0(tmp6);
  }, DEFAULT_APP_ENTRY_KEY);
};
export { getKeyboardIsOpen };