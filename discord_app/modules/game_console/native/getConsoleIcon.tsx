// === Module 9459: getConsoleIcon ===

// Module 9459 (getConsoleIcon)
import Constants from "Constants" /* 1074 */;
import CallConstants from "CallConstants" /* 4887 */;
import _modDef8749 from "module_8749" /* 8749 */;
import _modDef9460 from "module_9460" /* 9460 */;
import size from "module_2" /* 2 */;

const VoicePlatforms = CallConstants.VoicePlatforms;
const obj = { [XBOX]: _modDef8749, [PLAYSTATION]: _modDef9460, [PLAYSTATION_STAGING]: _modDef9460 };
({ XBOX, PLAYSTATION, PLAYSTATION_STAGING } = Constants.PlatformTypes);
const result = size.fileFinishedImporting("modules/game_console/native/getConsoleIcon.tsx");

export default function getConsoleIcon(arg0) {
  return obj[arg0];
};
export const getConsoleIconForVoicePlatform = function getConsoleIconForVoicePlatform(voicePlatform) {
  if (voicePlatform === VoicePlatforms.XBOX) {
    let tmp2 = _modDef8749;
  } else {
    tmp2 = null;
    if (voicePlatform === tmp.PLAYSTATION) {
      tmp2 = _modDef9460;
    }
  }
  return tmp2;
};