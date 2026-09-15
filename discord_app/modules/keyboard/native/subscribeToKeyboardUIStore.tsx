// === Module 1480: subscribeToKeyboardUIStore ===

// Module 1480 (subscribeToKeyboardUIStore)
import AppEntryKeyContext from "AppEntryKeyContext" /* 1481 */;
import KeyboardUIStoreDefault from "KeyboardUIStore" /* 1482 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/keyboard/native/subscribeToKeyboardUIStore.tsx");

export default function subscribeToKeyboardUIStore(maybeUpdateMaxHeight) {
  if (DEFAULT_APP_ENTRY_KEY === undefined) {
    DEFAULT_APP_ENTRY_KEY = AppEntryKeyContext.DEFAULT_APP_ENTRY_KEY;
  }
  return KeyboardUIStoreDefault.subscribe((arg0) => maybeUpdateMaxHeight(arg0.byAppEntry[DEFAULT_APP_ENTRY_KEY]));
};