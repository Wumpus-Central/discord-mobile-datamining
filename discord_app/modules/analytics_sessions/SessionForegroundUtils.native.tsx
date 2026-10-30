// === Module 7635: SessionForegroundUtils ===

// Module 7635 (SessionForegroundUtils)
import _mod17 from "module_17" /* 17 */;
import size from "module_2" /* 2 */;

const AppState = _mod17.AppState;
const result = size.fileFinishedImporting("modules/analytics_sessions/SessionForegroundUtils.native.tsx");

export function isForegrounded() {
  return "active" === AppState.currentState;
}