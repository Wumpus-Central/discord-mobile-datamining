// === Module 1494: subscribeToKeyboardUIStore ===

// Module 1494 (subscribeToKeyboardUIStore)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/keyboard/native/subscribeToKeyboardUIStore.tsx");

export default function subscribeToKeyboardUIStore(arg0) {
  const _require = arg0;
  let DEFAULT_APP_ENTRY_KEY = arg1;
  if (arg1 === undefined) {
    DEFAULT_APP_ENTRY_KEY = _require(1495).DEFAULT_APP_ENTRY_KEY;
  }
  return DEFAULT_APP_ENTRY_KEY(1496).subscribe((arg0) => callback(arg0.byAppEntry[DEFAULT_APP_ENTRY_KEY]));
};