// === Module 9884: getConsoleIcon ===

// Module 9884 (getConsoleIcon)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import ParticipantTypes from "ParticipantTypes" /* 4544 */;
import registerAssetDefault from "registerAsset" /* 9839 */;
import registerAssetDefault2 from "registerAsset" /* 9885 */;

const VoicePlatforms = ParticipantTypes.VoicePlatforms;
({ XBOX, PLAYSTATION, PLAYSTATION_STAGING } = ME.PlatformTypes);
const result = obj132.fileFinishedImporting("modules/game_console/native/getConsoleIcon.tsx");

export default function getConsoleIcon(arg0) {
  return obj[arg0];
};
export const getConsoleIconForVoicePlatform = function getConsoleIconForVoicePlatform(voicePlatform) {
  if (voicePlatform === VoicePlatforms.XBOX) {
    let tmp2 = registerAssetDefault;
  } else {
    tmp2 = null;
    if (voicePlatform === tmp.PLAYSTATION) {
      tmp2 = registerAssetDefault2;
    }
  }
  return tmp2;
};