// discord_app/modules/media_engine/dispatchAutoDisableVideo.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import Constants from "../../../discord_common/js/packages/media-engine/Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

const MediaEngineContextTypes = Constants.MediaEngineContextTypes;
const result = size.fileFinishedImporting("modules/media_engine/dispatchAutoDisableVideo.tsx");

export default function dispatchAutoDisableVideo(userId, videoToggleState) {
  importDefault = userId;
  dependencyMap = videoToggleState;
  DispatcherDefault.wait(() => {
    const obj = {
      type: "AUDIO_SET_LOCAL_VIDEO_DISABLED",
      context: MediaEngineContextTypes.DEFAULT,
      userId,
      videoToggleState,
      persist: false,
      isAutomatic: true,
    };
    obj.dispatch(obj);
  });
}
