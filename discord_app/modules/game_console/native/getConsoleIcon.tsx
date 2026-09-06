// === Module 9463: getConsoleIcon ===

// Module 9463 (getConsoleIcon)
import Constants from "Constants" /* 1074 */;
import CallConstants from "CallConstants" /* 4581 */;
import _modDef9442 from "module_9442" /* 9442 */;
import _modDef9464 from "module_9464" /* 9464 */;
import size from "module_2" /* 2 */;

const VoicePlatforms = CallConstants.VoicePlatforms;
const obj = { [XBOX]: _modDef9442, [PLAYSTATION]: _modDef9464, [PLAYSTATION_STAGING]: _modDef9464 };
({ XBOX, PLAYSTATION, PLAYSTATION_STAGING } = Constants.PlatformTypes);
const result = size.fileFinishedImporting("modules/game_console/native/getConsoleIcon.tsx");

export default function getConsoleIcon(arg0) {
  return obj[arg0];
};
export const getConsoleIconForVoicePlatform = function getConsoleIconForVoicePlatform(voicePlatform) {
  if (voicePlatform === VoicePlatforms.XBOX) {
    let tmp2 = _modDef9442;
  } else {
    tmp2 = null;
    if (voicePlatform === tmp.PLAYSTATION) {
      tmp2 = _modDef9464;
    }
  }
  return tmp2;
};