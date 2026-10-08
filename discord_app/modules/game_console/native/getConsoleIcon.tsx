// === Module 12895: getConsoleIcon ===

// Module 12895 (getConsoleIcon)
import Constants from "Constants" /* 1085 */;
import CallConstants from "CallConstants" /* 5113 */;
import _modDef10963 from "module_10963" /* 10963 */;
import _modDef10964 from "module_10964" /* 10964 */;
import size from "module_2" /* 2 */;

const VoicePlatforms = CallConstants.VoicePlatforms;
const obj = { [XBOX]: _modDef10963, [PLAYSTATION]: _modDef10964, [PLAYSTATION_STAGING]: _modDef10964 };
({ XBOX, PLAYSTATION, PLAYSTATION_STAGING } = Constants.PlatformTypes);
const result = size.fileFinishedImporting("modules/game_console/native/getConsoleIcon.tsx");

export default function getConsoleIcon(arg0) {
  return obj[arg0];
};
export const getConsoleIconForVoicePlatform = function getConsoleIconForVoicePlatform(voicePlatform) {
  if (voicePlatform === VoicePlatforms.XBOX) {
    let tmp2 = _modDef10963;
  } else {
    tmp2 = null;
    if (voicePlatform === tmp.PLAYSTATION) {
      tmp2 = _modDef10964;
    }
  }
  return tmp2;
};