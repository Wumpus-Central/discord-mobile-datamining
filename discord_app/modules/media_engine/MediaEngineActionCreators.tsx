// discord_app/modules/media_engine/MediaEngineActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import Constants from "../../../discord_common/js/packages/media-engine/Constants.tsx";
import MediaEngineStore from "../../stores/MediaEngineStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

const MediaEngineContextTypes = Constants.MediaEngineContextTypes;
const result = size.fileFinishedImporting("modules/media_engine/MediaEngineActionCreators.tsx");

export const setPushToTalkState = function setPushToTalkState(isActive, arg1) {
  let closure_0 = isActive;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const obj = DispatcherDefault;
  const obj2 = { type: "PUSH_TO_TALK_STATE_CHANGE", isActive, isPriority: flag };
  obj.dispatch(obj2);
  const mediaEngine = MediaEngineStore.getMediaEngine();
  mediaEngine.eachConnection(
    (setForceAudioInput) => setForceAudioInput.setForceAudioInput(closure_0, flag, false),
    MediaEngineContextTypes.DEFAULT,
  );
};
