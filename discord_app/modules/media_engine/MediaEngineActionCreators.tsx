// discord_app/modules/media_engine/MediaEngineActionCreators.tsx
import _detectH265HardwareDecode from "../../stores/MediaEngineStore.tsx";
import { MediaEngineContextTypes } from "../../../discord_common/js/packages/media-engine/Constants.tsx";

const result = require("obj132").fileFinishedImporting("modules/media_engine/MediaEngineActionCreators.tsx");

export const setPushToTalkState = function setPushToTalkState(first1, arg1) {
  importDefault = first1;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  importDefault(flag[2]);
  const obj = { type: "PUSH_TO_TALK_STATE_CHANGE", isActive: first1, isPriority: flag };
  obj.dispatch(obj);
  mediaEngine = mediaEngine.getMediaEngine();
  mediaEngine.eachConnection((setForceAudioInput) => setForceAudioInput.setForceAudioInput(closure_0, flag, false), MediaEngineContextTypes.DEFAULT);
};