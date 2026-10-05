// discord_app/modules/analytics_sessions/SessionForegroundUtils.native.tsx
import react_native from "../../../_runtime/00017_react-native.js";
import size from "../../../_runtime/metro/00002__.js";

const AppState = react_native.AppState;
const result = size.fileFinishedImporting("modules/analytics_sessions/SessionForegroundUtils.native.tsx");

export const isForegrounded = function isForegrounded() {
  return "active" === AppState.currentState;
};
