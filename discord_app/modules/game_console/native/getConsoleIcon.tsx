// === Module 14268: getConsoleIcon ===

// Module 14268 (getConsoleIcon)
import Constants from "Constants" /* 1071 */;
import CallConstants from "CallConstants" /* 5662 */;
import _modDef7739 from "module_7739" /* 7739 */;
import _modDef10535 from "module_10535" /* 10535 */;
import size from "module_2" /* 2 */;

const VoicePlatforms = CallConstants.VoicePlatforms;
const obj = { [XBOX]: _modDef7739, [PLAYSTATION]: _modDef10535, [PLAYSTATION_STAGING]: _modDef10535 };
({ XBOX, PLAYSTATION, PLAYSTATION_STAGING } = Constants.PlatformTypes);
const result = size.fileFinishedImporting("modules/game_console/native/getConsoleIcon.tsx");

export default function getConsoleIcon(arg0) {
  return obj[arg0];
};
export function getConsoleIconForVoicePlatform(voicePlatform) {
  if (voicePlatform === VoicePlatforms.XBOX) {
    let tmp2 = _modDef7739;
  } else {
    tmp2 = null;
    if (voicePlatform === tmp.PLAYSTATION) {
      tmp2 = _modDef10535;
    }
  }
  return tmp2;
}