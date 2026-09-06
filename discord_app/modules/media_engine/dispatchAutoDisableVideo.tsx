// === Module 13822: dispatchAutoDisableVideo ===

// Module 13822 (dispatchAutoDisableVideo)
import DispatcherDefault from "Dispatcher" /* 573 */;
import Constants from "Constants" /* 4585 */;
import size from "module_2" /* 2 */;

const MediaEngineContextTypes = Constants.MediaEngineContextTypes;
const result = size.fileFinishedImporting("modules/media_engine/dispatchAutoDisableVideo.tsx");

export default function dispatchAutoDisableVideo(userId, videoToggleState) {
  importDefault = userId;
  dependencyMap = videoToggleState;
  DispatcherDefault.wait(() => {
    const obj = { type: "AUDIO_SET_LOCAL_VIDEO_DISABLED", context: MediaEngineContextTypes.DEFAULT, userId, videoToggleState, persist: false, isAutomatic: true };
    obj.dispatch(obj);
  });
};