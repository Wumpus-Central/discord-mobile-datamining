// === Module 10058: getConsoleIcon ===

// Module 10058 (getConsoleIcon)
import Constants from "Constants" /* 1074 */;
import CallConstants from "CallConstants" /* 4777 */;
import _modDef9362 from "module_9362" /* 9362 */;
import _modDef10059 from "module_10059" /* 10059 */;
import size from "module_2" /* 2 */;

const VoicePlatforms = CallConstants.VoicePlatforms;
const obj = { [XBOX]: _modDef9362, [PLAYSTATION]: _modDef10059, [PLAYSTATION_STAGING]: _modDef10059 };
({ XBOX, PLAYSTATION, PLAYSTATION_STAGING } = Constants.PlatformTypes);
const result = size.fileFinishedImporting("modules/game_console/native/getConsoleIcon.tsx");

export default function getConsoleIcon(arg0) {
  return obj[arg0];
};
export const getConsoleIconForVoicePlatform = function getConsoleIconForVoicePlatform(voicePlatform) {
  if (voicePlatform === VoicePlatforms.XBOX) {
    let tmp2 = _modDef9362;
  } else {
    tmp2 = null;
    if (voicePlatform === tmp.PLAYSTATION) {
      tmp2 = _modDef10059;
    }
  }
  return tmp2;
};