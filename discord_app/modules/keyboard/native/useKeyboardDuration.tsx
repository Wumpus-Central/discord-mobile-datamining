// discord_app/modules/keyboard/native/useKeyboardDuration.tsx
import set from "../../../../_runtime/00002_set.js";
import context from "../../window/native/AppEntryKeyContext.tsx";
import computeEntryStateDefault from "KeyboardUIStore.native.tsx";

const result = set.fileFinishedImporting("modules/keyboard/native/useKeyboardDuration.tsx");

export const getKeyboardDuration = function getKeyboardDuration() {
  let DEFAULT_APP_ENTRY_KEY = arg0;
  if (arg0 === undefined) {
    DEFAULT_APP_ENTRY_KEY = context.DEFAULT_APP_ENTRY_KEY;
  }
  let num = 300;
  if (!obj.isAndroid()) {
    num = computeEntryStateDefault.getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].keyboardDuration;
    const obj2 = computeEntryStateDefault;
  }
  return num;
};