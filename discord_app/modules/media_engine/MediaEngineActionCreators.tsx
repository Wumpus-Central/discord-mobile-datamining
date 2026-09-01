// === Module 9666: setPushToTalkState ===

// Module 9666 (setPushToTalkState)
import closure_2 from "_detectH265HardwareDecode" /* 4529 */;
import { MediaEngineContextTypes } from "DesktopSources" /* 4542 */;

const result = require("set").fileFinishedImporting("modules/media_engine/MediaEngineActionCreators.tsx");

export const setPushToTalkState = function setPushToTalkState(isActive, arg1) {
  importDefault = isActive;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let obj = importDefault(flag[2]);
  obj = { type: "PUSH_TO_TALK_STATE_CHANGE", isActive, isPriority: flag };
  obj.dispatch(obj);
  mediaEngine = mediaEngine.getMediaEngine();
  mediaEngine.eachConnection((setForceAudioInput) => setForceAudioInput.setForceAudioInput(closure_0, flag, false), MediaEngineContextTypes.DEFAULT);
};