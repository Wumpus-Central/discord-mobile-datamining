// === Module 19720: VoicePanelDockActionCreators ===

// Module 19720 (VoicePanelDockActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockActionCreators.tsx");

export function dismissVoicePanelDockWatchPrompt() {
  DispatcherDefault.dispatch({ type: "VOICE_PANEL_DOCK_WATCH_PROMPT_DISMISS" });
}
export function dismissVoicePanelDockVideoPIP() {
  DispatcherDefault.dispatch({ type: "VOICE_PANEL_DOCK_VIDEO_PIP_DISMISS" });
}