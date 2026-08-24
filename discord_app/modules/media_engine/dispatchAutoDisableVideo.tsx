// === Module 13153: dispatchAutoDisableVideo ===

// Module 13153 (dispatchAutoDisableVideo)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import DesktopSources from "DesktopSources" /* 4534 */;

const MediaEngineContextTypes = DesktopSources.MediaEngineContextTypes;
const result = set.fileFinishedImporting("modules/media_engine/dispatchAutoDisableVideo.tsx");

export default function dispatchAutoDisableVideo(arg0, arg1) {
  importDefault = arg0;
  dependencyMap = arg1;
  dispatcherDefault.wait(() => {
    let obj = callback(table[1]);
    obj = { type: "AUDIO_SET_LOCAL_VIDEO_DISABLED", context: closure_1_2.DEFAULT, userId: callback, videoToggleState: table, persist: false, isAutomatic: true };
    obj.dispatch(obj);
  });
};