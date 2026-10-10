// === Module 5295: dispatchAutoDisableVideo ===

// Module 5295 (dispatchAutoDisableVideo)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 5117 */;
import size from "module_2" /* 2 */;

const MediaEngineContextTypes = Constants.MediaEngineContextTypes;
const result = size.fileFinishedImporting("modules/media_engine/dispatchAutoDisableVideo.tsx");

export default function dispatchAutoDisableVideo(userId, videoToggleState) {
  DispatcherDefault.dispatch({ type: "AUDIO_SET_LOCAL_VIDEO_DISABLED", context: MediaEngineContextTypes.DEFAULT, userId, videoToggleState, persist: false, isAutomatic: true });
};