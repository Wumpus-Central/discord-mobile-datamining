// === Module 14182: getConsoleIcon ===

// Module 14182 (getConsoleIcon)
import Constants from "Constants" /* 1087 */;
import CallConstants from "CallConstants" /* 5632 */;
import _modDef11719 from "module_11719" /* 11719 */;
import _modDef11720 from "module_11720" /* 11720 */;
import size from "module_2" /* 2 */;

const VoicePlatforms = CallConstants.VoicePlatforms;
const obj = { [XBOX]: _modDef11719, [PLAYSTATION]: _modDef11720, [PLAYSTATION_STAGING]: _modDef11720 };
({ XBOX, PLAYSTATION, PLAYSTATION_STAGING } = Constants.PlatformTypes);
const result = size.fileFinishedImporting("modules/game_console/native/getConsoleIcon.tsx");

export default function getConsoleIcon(arg0) {
  return obj[arg0];
};
export const getConsoleIconForVoicePlatform = function getConsoleIconForVoicePlatform(voicePlatform) {
  if (voicePlatform === VoicePlatforms.XBOX) {
    let tmp2 = _modDef11719;
  } else {
    tmp2 = null;
    if (voicePlatform === tmp.PLAYSTATION) {
      tmp2 = _modDef11720;
    }
  }
  return tmp2;
};