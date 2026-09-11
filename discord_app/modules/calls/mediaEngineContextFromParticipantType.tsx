// === Module 9720: mediaEngineContextFromParticipantType ===

// Module 9720 (mediaEngineContextFromParticipantType)
import CallConstants from "CallConstants" /* 4627 */;
import Constants from "Constants" /* 4631 */;
import size from "module_2" /* 2 */;

const ParticipantTypes = CallConstants.ParticipantTypes;
const MediaEngineContextTypes = Constants.MediaEngineContextTypes;
let closure_0 = Object.freeze({ [ParticipantTypes.STREAM]: MediaEngineContextTypes.STREAM, [ParticipantTypes.HIDDEN_STREAM]: MediaEngineContextTypes.STREAM, [ParticipantTypes.USER]: MediaEngineContextTypes.DEFAULT, [ParticipantTypes.ACTIVITY]: MediaEngineContextTypes.DEFAULT });
const result = size.fileFinishedImporting("modules/calls/mediaEngineContextFromParticipantType.tsx");

export default function mediaEngineContextFromParticipantType(arg0) {
  return closure_0[arg0];
};