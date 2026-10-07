// discord_app/modules/analytics_sessions/SessionForegroundUtils.native.tsx
import _mod17 from "../../../_runtime/metro/00017__.js";
import size from "../../../_runtime/metro/00002__.js";

const AppState = _mod17.AppState;
const result = size.fileFinishedImporting("modules/analytics_sessions/SessionForegroundUtils.native.tsx");

export const isForegrounded = function isForegrounded() {
  return "active" === AppState.currentState;
};
