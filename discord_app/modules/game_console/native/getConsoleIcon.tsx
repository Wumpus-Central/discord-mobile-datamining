// === Module 14177: getConsoleIcon ===

// Module 14177 (getConsoleIcon)
import Constants from "Constants" /* 1087 */;
import CallConstants from "CallConstants" /* 5632 */;
import _modDef11715 from "module_11715" /* 11715 */;
import _modDef11716 from "module_11716" /* 11716 */;
import size from "module_2" /* 2 */;

const VoicePlatforms = CallConstants.VoicePlatforms;
const obj = { [XBOX]: _modDef11715, [PLAYSTATION]: _modDef11716, [PLAYSTATION_STAGING]: _modDef11716 };
({ XBOX, PLAYSTATION, PLAYSTATION_STAGING } = Constants.PlatformTypes);
const result = size.fileFinishedImporting("modules/game_console/native/getConsoleIcon.tsx");

export default function getConsoleIcon(arg0) {
  return obj[arg0];
};
export const getConsoleIconForVoicePlatform = function getConsoleIconForVoicePlatform(voicePlatform) {
  if (voicePlatform === VoicePlatforms.XBOX) {
    let tmp2 = _modDef11715;
  } else {
    tmp2 = null;
    if (voicePlatform === tmp.PLAYSTATION) {
      tmp2 = _modDef11716;
    }
  }
  return tmp2;
};