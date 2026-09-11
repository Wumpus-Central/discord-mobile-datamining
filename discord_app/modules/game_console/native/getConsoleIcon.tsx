// === Module 9554: getConsoleIcon ===

// Module 9554 (getConsoleIcon)
import Constants from "Constants" /* 1074 */;
import CallConstants from "CallConstants" /* 4627 */;
import _modDef9533 from "module_9533" /* 9533 */;
import _modDef9555 from "module_9555" /* 9555 */;
import size from "module_2" /* 2 */;

const VoicePlatforms = CallConstants.VoicePlatforms;
const obj = { [XBOX]: _modDef9533, [PLAYSTATION]: _modDef9555, [PLAYSTATION_STAGING]: _modDef9555 };
({ XBOX, PLAYSTATION, PLAYSTATION_STAGING } = Constants.PlatformTypes);
const result = size.fileFinishedImporting("modules/game_console/native/getConsoleIcon.tsx");

export default function getConsoleIcon(arg0) {
  return obj[arg0];
};
export const getConsoleIconForVoicePlatform = function getConsoleIconForVoicePlatform(voicePlatform) {
  if (voicePlatform === VoicePlatforms.XBOX) {
    let tmp2 = _modDef9533;
  } else {
    tmp2 = null;
    if (voicePlatform === tmp.PLAYSTATION) {
      tmp2 = _modDef9555;
    }
  }
  return tmp2;
};