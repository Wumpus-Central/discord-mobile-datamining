// discord_app/modules/media_engine/MediaEngineActionCreators.tsx
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import { MediaEngineContextTypes } from "DesktopSources";

const result = require("dispatcher").fileFinishedImporting("modules/media_engine/MediaEngineActionCreators.tsx");

export const setPushToTalkState = function setPushToTalkState(isActive, arg1) {
  const importDefault = isActive;
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