// discord_app/modules/analytics_sessions/SessionForegroundUtils.native.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import get_ActivityIndicator from "../../../_runtime/00017_get_ActivityIndicator.js";

const AppState = get_ActivityIndicator.AppState;
const result = obj132.fileFinishedImporting("modules/analytics_sessions/SessionForegroundUtils.native.tsx");

export const isForegrounded = function isForegrounded() {
  return "active" === AppState.currentState;
};