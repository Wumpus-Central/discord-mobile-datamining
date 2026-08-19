// discord_app/modules/keyboard/native/subscribeToKeyboardUIStore.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";

const result = obj132.fileFinishedImporting("modules/keyboard/native/subscribeToKeyboardUIStore.tsx");

export default function subscribeToKeyboardUIStore(arg0) {
  const _require = arg0;
  let DEFAULT_APP_ENTRY_KEY = arg1;
  if (arg1 === undefined) {
    DEFAULT_APP_ENTRY_KEY = require("../../window/native/AppEntryKeyContext.tsx").DEFAULT_APP_ENTRY_KEY;
  }
  return DEFAULT_APP_ENTRY_KEY(1498).subscribe((arg0) => callback(arg0.byAppEntry[DEFAULT_APP_ENTRY_KEY]));
};