// === Module 14011: getConsoleIcon ===

// Module 14011 (getConsoleIcon)
import Constants from "Constants" /* 1087 */;
import CallConstants from "CallConstants" /* 5593 */;
import _modDef11597 from "module_11597" /* 11597 */;
import _modDef11598 from "module_11598" /* 11598 */;
import size from "module_2" /* 2 */;

const VoicePlatforms = CallConstants.VoicePlatforms;
const obj = { [XBOX]: _modDef11597, [PLAYSTATION]: _modDef11598, [PLAYSTATION_STAGING]: _modDef11598 };
({ XBOX, PLAYSTATION, PLAYSTATION_STAGING } = Constants.PlatformTypes);
const result = size.fileFinishedImporting("modules/game_console/native/getConsoleIcon.tsx");

export default function getConsoleIcon(arg0) {
  return obj[arg0];
};
export const getConsoleIconForVoicePlatform = function getConsoleIconForVoicePlatform(voicePlatform) {
  if (voicePlatform === VoicePlatforms.XBOX) {
    let tmp2 = _modDef11597;
  } else {
    tmp2 = null;
    if (voicePlatform === tmp.PLAYSTATION) {
      tmp2 = _modDef11598;
    }
  }
  return tmp2;
};