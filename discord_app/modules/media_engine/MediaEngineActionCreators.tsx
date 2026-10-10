// === Module 11039: MediaEngineActionCreators ===

// Module 11039 (MediaEngineActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 5117 */;
import size from "module_2" /* 2 */;

const MediaEngineContextTypes = Constants.MediaEngineContextTypes;
const result = size.fileFinishedImporting("modules/media_engine/MediaEngineActionCreators.tsx");

export const setPushToTalkState = function setPushToTalkState(mediaEngine, first1, arg2) {
  closure_0 = first1;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  DispatcherDefault.dispatch({ type: "PUSH_TO_TALK_STATE_CHANGE", isActive: first1, isPriority: flag });
  mediaEngine.eachConnection((setForceAudioInput) => setForceAudioInput.setForceAudioInput(closure_0, flag, false), MediaEngineContextTypes.DEFAULT);
};