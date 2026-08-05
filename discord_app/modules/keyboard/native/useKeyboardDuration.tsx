import { context } from "../../window/native/AppEntryKeyContext.tsx";
import { computeEntryState } from "KeyboardUIStore.native.tsx";
// discord_app/modules/keyboard/native/useKeyboardDuration.tsx
const result = require("computeEntryState").fileFinishedImporting("modules/keyboard/native/useKeyboardDuration.tsx");

export const getKeyboardDuration = function getKeyboardDuration() {
  let DEFAULT_APP_ENTRY_KEY = arg0;
  if (arg0 === undefined) {
    DEFAULT_APP_ENTRY_KEY = context /* context */.DEFAULT_APP_ENTRY_KEY;
  }
  let num = 300;
  if (!obj.isAndroid()) {
    num = computeEntryState.getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].keyboardDuration;
    const obj2 = computeEntryState;
  }
  return num;
};