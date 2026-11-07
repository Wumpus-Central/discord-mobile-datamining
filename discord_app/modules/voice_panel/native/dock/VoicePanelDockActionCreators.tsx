// discord_app/modules/voice_panel/native/dock/VoicePanelDockActionCreators.tsx
import DispatcherDefault from "../../../../Dispatcher.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockActionCreators.tsx");

export function dismissVoicePanelDockWatchPrompt() {
  DispatcherDefault.dispatch({ type: "VOICE_PANEL_DOCK_WATCH_PROMPT_DISMISS" });
}
export function dismissVoicePanelDockVideoPIP() {
  DispatcherDefault.dispatch({ type: "VOICE_PANEL_DOCK_VIDEO_PIP_DISMISS" });
}
