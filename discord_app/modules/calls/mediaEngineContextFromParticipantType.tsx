// discord_app/modules/calls/mediaEngineContextFromParticipantType.tsx
import set from "set" /* 2 */;
import DesktopSources from "DesktopSources" /* 4529 */;
import ParticipantTypes2 from "ParticipantTypes" /* 4544 */;

const ParticipantTypes = ParticipantTypes2.ParticipantTypes;
const MediaEngineContextTypes = DesktopSources.MediaEngineContextTypes;
let closure_0 = Object.freeze({ [ParticipantTypes.STREAM]: MediaEngineContextTypes.STREAM, [ParticipantTypes.HIDDEN_STREAM]: MediaEngineContextTypes.STREAM, [ParticipantTypes.USER]: MediaEngineContextTypes.DEFAULT, [ParticipantTypes.ACTIVITY]: MediaEngineContextTypes.DEFAULT });
const result = set.fileFinishedImporting("modules/calls/mediaEngineContextFromParticipantType.tsx");

export default function mediaEngineContextFromParticipantType(arg0) {
  return table[arg0];
};