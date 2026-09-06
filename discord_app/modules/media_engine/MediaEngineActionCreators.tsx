// discord_app/modules/media_engine/MediaEngineActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import MediaEngineStore from "../../stores/MediaEngineStore.tsx";

const MediaEngineContextTypes = fn(4585).MediaEngineContextTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_engine/MediaEngineActionCreators.tsx");

export const setPushToTalkState = function setPushToTalkState(first1, arg1) {
  closure_0 = first1;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const obj = { type: "PUSH_TO_TALK_STATE_CHANGE", isActive: first1, isPriority: flag };
  obj.dispatch(obj);
  const mediaEngine = MediaEngineStore.getMediaEngine();
  mediaEngine.eachConnection(
    (setForceAudioInput) => setForceAudioInput.setForceAudioInput(closure_0, flag, false),
    MediaEngineContextTypes.DEFAULT,
  );
};
