// === Module 1496: subscribeToKeyboardUIStore ===

// Module 1496 (subscribeToKeyboardUIStore)
import obj132 from "obj132" /* 2 */;

const result = obj132.fileFinishedImporting("modules/keyboard/native/subscribeToKeyboardUIStore.tsx");

export default function subscribeToKeyboardUIStore(arg0) {
  const _require = arg0;
  let DEFAULT_APP_ENTRY_KEY = arg1;
  if (arg1 === undefined) {
    DEFAULT_APP_ENTRY_KEY = _require(1497).DEFAULT_APP_ENTRY_KEY;
  }
  return DEFAULT_APP_ENTRY_KEY(1498).subscribe((arg0) => callback(arg0.byAppEntry[DEFAULT_APP_ENTRY_KEY]));
};