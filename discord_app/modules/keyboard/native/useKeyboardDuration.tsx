// === Module 5442: getKeyboardDuration ===

// Module 5442 (getKeyboardDuration)
import obj132 from "obj132" /* 2 */;
import context from "context" /* 1497 */;
import computeEntryStateDefault from "computeEntryState" /* 1498 */;

const result = obj132.fileFinishedImporting("modules/keyboard/native/useKeyboardDuration.tsx");

export const getKeyboardDuration = function getKeyboardDuration() {
  let DEFAULT_APP_ENTRY_KEY = arg0;
  if (arg0 === undefined) {
    DEFAULT_APP_ENTRY_KEY = context.DEFAULT_APP_ENTRY_KEY;
  }
  let num = 300;
  if (!obj.isAndroid()) {
    num = computeEntryStateDefault.getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].keyboardDuration;
  }
  return num;
};