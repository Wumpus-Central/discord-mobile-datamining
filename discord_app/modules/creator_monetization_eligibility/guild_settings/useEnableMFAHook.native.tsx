// === Module 17509: passthrough ===

// Module 17509 (passthrough)
import set from "set" /* 2 */;

function passthrough(arg0) {
  return arg0;
}
const result = set.fileFinishedImporting("modules/creator_monetization_eligibility/guild_settings/useEnableMFAHook.native.tsx");

export function useEnableMFAHook(arg0) {
  return passthrough;
}