// === Module 5055: isForegrounded ===

// Module 5055 (isForegrounded)
import obj132 from "obj132" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const AppState = get_ActivityIndicator.AppState;
const result = obj132.fileFinishedImporting("modules/analytics_sessions/SessionForegroundUtils.native.tsx");

export const isForegrounded = function isForegrounded() {
  return "active" === AppState.currentState;
};