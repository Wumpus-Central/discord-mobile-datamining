// discord_app/modules/calls/mediaEngineContextFromParticipantType.tsx
import set from "../../../_runtime/00002_set.js";
import ParticipantTypes2 from "CallConstants.tsx";
import DesktopSources from "../../../discord_common/js/packages/media-engine/Constants.tsx";

const ParticipantTypes = ParticipantTypes2.ParticipantTypes;
const MediaEngineContextTypes = DesktopSources.MediaEngineContextTypes;
let closure_0 = Object.freeze({ [ParticipantTypes.STREAM]: MediaEngineContextTypes.STREAM, [ParticipantTypes.HIDDEN_STREAM]: MediaEngineContextTypes.STREAM, [ParticipantTypes.USER]: MediaEngineContextTypes.DEFAULT, [ParticipantTypes.ACTIVITY]: MediaEngineContextTypes.DEFAULT });
const result = set.fileFinishedImporting("modules/calls/mediaEngineContextFromParticipantType.tsx");

export default function mediaEngineContextFromParticipantType(arg0) {
  return table[arg0];
};