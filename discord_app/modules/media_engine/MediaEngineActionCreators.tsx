// discord_app/modules/media_engine/MediaEngineActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import Constants from "../../../discord_common/js/packages/media-engine/Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

const MediaEngineContextTypes = Constants.MediaEngineContextTypes;
const result = size.fileFinishedImporting("modules/media_engine/MediaEngineActionCreators.tsx");

export const setPushToTalkState = function setPushToTalkState(mediaEngine, first1, arg2) {
  closure_0 = first1;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  DispatcherDefault.dispatch({ type: "PUSH_TO_TALK_STATE_CHANGE", isActive: first1, isPriority: flag });
  mediaEngine.eachConnection(
    (setForceAudioInput) => setForceAudioInput.setForceAudioInput(closure_0, flag, false),
    MediaEngineContextTypes.DEFAULT,
  );
};
