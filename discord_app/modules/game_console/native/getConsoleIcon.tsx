// === Module 13877: getConsoleIcon ===

// Module 13877 (getConsoleIcon)
import Constants from "Constants" /* 1087 */;
import CallConstants from "CallConstants" /* 5176 */;
import _modDef11491 from "module_11491" /* 11491 */;
import _modDef11492 from "module_11492" /* 11492 */;
import size from "module_2" /* 2 */;

const VoicePlatforms = CallConstants.VoicePlatforms;
const obj = { [XBOX]: _modDef11491, [PLAYSTATION]: _modDef11492, [PLAYSTATION_STAGING]: _modDef11492 };
({ XBOX, PLAYSTATION, PLAYSTATION_STAGING } = Constants.PlatformTypes);
const result = size.fileFinishedImporting("modules/game_console/native/getConsoleIcon.tsx");

export default function getConsoleIcon(arg0) {
  return obj[arg0];
};
export const getConsoleIconForVoicePlatform = function getConsoleIconForVoicePlatform(voicePlatform) {
  if (voicePlatform === VoicePlatforms.XBOX) {
    let tmp2 = _modDef11491;
  } else {
    tmp2 = null;
    if (voicePlatform === tmp.PLAYSTATION) {
      tmp2 = _modDef11492;
    }
  }
  return tmp2;
};