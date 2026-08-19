// === Module 13097: dispatchAutoDisableVideo ===

// Module 13097 (dispatchAutoDisableVideo)
import obj132 from "obj132" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import DesktopSources from "DesktopSources" /* 4529 */;

const MediaEngineContextTypes = DesktopSources.MediaEngineContextTypes;
const result = obj132.fileFinishedImporting("modules/media_engine/dispatchAutoDisableVideo.tsx");

export default function dispatchAutoDisableVideo(arg0, arg1) {
  importDefault = arg0;
  dependencyMap = arg1;
  dispatcherDefault.wait(() => {
    callback(table[1]);
    const obj = { type: "AUDIO_SET_LOCAL_VIDEO_DISABLED", context: MediaEngineContextTypes.DEFAULT, userId: callback, videoToggleState: table, persist: false, isAutomatic: true };
    obj.dispatch(obj);
  });
};