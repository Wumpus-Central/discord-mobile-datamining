// === Module 9108: mediaEngineContextFromParticipantType ===

// Module 9108 (mediaEngineContextFromParticipantType)
import CallConstants from "CallConstants" /* 4887 */;
import Constants from "Constants" /* 4891 */;
import size from "module_2" /* 2 */;

const ParticipantTypes = CallConstants.ParticipantTypes;
const MediaEngineContextTypes = Constants.MediaEngineContextTypes;
let closure_0 = Object.freeze({ [ParticipantTypes.STREAM]: MediaEngineContextTypes.STREAM, [ParticipantTypes.HIDDEN_STREAM]: MediaEngineContextTypes.STREAM, [ParticipantTypes.USER]: MediaEngineContextTypes.DEFAULT, [ParticipantTypes.ACTIVITY]: MediaEngineContextTypes.DEFAULT });
const result = size.fileFinishedImporting("modules/calls/mediaEngineContextFromParticipantType.tsx");

export default function mediaEngineContextFromParticipantType(arg0) {
  return closure_0[arg0];
};