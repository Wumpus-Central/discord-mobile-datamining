// === Module 1486: subscribeToKeyboardUIStore ===

// Module 1486 (subscribeToKeyboardUIStore)
import AppEntryKeyContext from "AppEntryKeyContext" /* 1487 */;
import KeyboardUIStoreDefault from "KeyboardUIStore" /* 1488 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/keyboard/native/subscribeToKeyboardUIStore.tsx");

export default function subscribeToKeyboardUIStore(maybeUpdateMaxHeight) {
  let DEFAULT_APP_ENTRY_KEY;
  let closure_0 = maybeUpdateMaxHeight;
  if (DEFAULT_APP_ENTRY_KEY === undefined) {
    DEFAULT_APP_ENTRY_KEY = AppEntryKeyContext.DEFAULT_APP_ENTRY_KEY;
  }
  const obj = KeyboardUIStoreDefault;
  return obj.subscribe((arg0) => closure_0(arg0.byAppEntry[DEFAULT_APP_ENTRY_KEY]));
};