// === Module 9533: getConsoleIcon ===

// Module 9533 (getConsoleIcon)
import Constants from "Constants" /* 1074 */;
import CallConstants from "CallConstants" /* 4626 */;
import _modDef9512 from "module_9512" /* 9512 */;
import _modDef9534 from "module_9534" /* 9534 */;
import size from "module_2" /* 2 */;

const VoicePlatforms = CallConstants.VoicePlatforms;
const obj = { [XBOX]: _modDef9512, [PLAYSTATION]: _modDef9534, [PLAYSTATION_STAGING]: _modDef9534 };
({ XBOX, PLAYSTATION, PLAYSTATION_STAGING } = Constants.PlatformTypes);
const result = size.fileFinishedImporting("modules/game_console/native/getConsoleIcon.tsx");

export default function getConsoleIcon(arg0) {
  return obj[arg0];
};
export const getConsoleIconForVoicePlatform = function getConsoleIconForVoicePlatform(voicePlatform) {
  if (voicePlatform === VoicePlatforms.XBOX) {
    let tmp2 = _modDef9512;
  } else {
    tmp2 = null;
    if (voicePlatform === tmp.PLAYSTATION) {
      tmp2 = _modDef9534;
    }
  }
  return tmp2;
};