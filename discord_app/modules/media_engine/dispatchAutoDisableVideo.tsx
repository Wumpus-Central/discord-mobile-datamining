// discord_app/modules/media_engine/dispatchAutoDisableVideo.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import dispatcherDefault from "../../Dispatcher.tsx";
import DesktopSources from "../../../discord_common/js/packages/media-engine/Constants.tsx";

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