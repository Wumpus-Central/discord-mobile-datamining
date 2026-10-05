// discord_app/modules/calls/mediaEngineContextFromParticipantType.tsx
import CallConstants from "CallConstants.tsx";
import Constants from "../../../discord_common/js/packages/media-engine/Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

const ParticipantTypes = CallConstants.ParticipantTypes;
const MediaEngineContextTypes = Constants.MediaEngineContextTypes;
const obj = {
  [ParticipantTypes.STREAM]: MediaEngineContextTypes.STREAM,
  [ParticipantTypes.HIDDEN_STREAM]: MediaEngineContextTypes.STREAM,
  [ParticipantTypes.USER]: MediaEngineContextTypes.DEFAULT,
  [ParticipantTypes.ACTIVITY]: MediaEngineContextTypes.DEFAULT,
};
let closure_0 = Object.freeze(obj);
const result = size.fileFinishedImporting("modules/calls/mediaEngineContextFromParticipantType.tsx");

export default function mediaEngineContextFromParticipantType(arg0) {
  return closure_0[arg0];
}
