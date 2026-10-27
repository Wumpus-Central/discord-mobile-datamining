// === Module 14209: getConsoleIcon ===

// Module 14209 (getConsoleIcon)
import Constants from "Constants" /* 1084 */;
import CallConstants from "CallConstants" /* 5633 */;
import _modDef11721 from "module_11721" /* 11721 */;
import _modDef11722 from "module_11722" /* 11722 */;
import size from "module_2" /* 2 */;

const VoicePlatforms = CallConstants.VoicePlatforms;
const obj = { [XBOX]: _modDef11721, [PLAYSTATION]: _modDef11722, [PLAYSTATION_STAGING]: _modDef11722 };
({ XBOX, PLAYSTATION, PLAYSTATION_STAGING } = Constants.PlatformTypes);
const result = size.fileFinishedImporting("modules/game_console/native/getConsoleIcon.tsx");

export default function getConsoleIcon(arg0) {
  return obj[arg0];
};
export const getConsoleIconForVoicePlatform = function getConsoleIconForVoicePlatform(voicePlatform) {
  if (voicePlatform === VoicePlatforms.XBOX) {
    let tmp2 = _modDef11721;
  } else {
    tmp2 = null;
    if (voicePlatform === tmp.PLAYSTATION) {
      tmp2 = _modDef11722;
    }
  }
  return tmp2;
};