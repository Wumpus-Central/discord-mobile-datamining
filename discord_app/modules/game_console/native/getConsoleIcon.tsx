// === Module 9463: getConsoleIcon ===

// Module 9463 (getConsoleIcon)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import ParticipantTypes from "ParticipantTypes" /* 4581 */;
import registerAssetDefault from "registerAsset" /* 9442 */;
import registerAssetDefault2 from "registerAsset" /* 9464 */;

const VoicePlatforms = ParticipantTypes.VoicePlatforms;
const obj = { [XBOX]: registerAssetDefault, [PLAYSTATION]: registerAssetDefault2, [PLAYSTATION_STAGING]: registerAssetDefault2 };
({ XBOX, PLAYSTATION, PLAYSTATION_STAGING } = ME.PlatformTypes);
const result = set.fileFinishedImporting("modules/game_console/native/getConsoleIcon.tsx");

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