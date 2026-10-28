// === Module 14433: getConsoleIcon ===

// Module 14433 (getConsoleIcon)
import Constants from "Constants" /* 1084 */;
import CallConstants from "CallConstants" /* 5668 */;
import _modDef11759 from "module_11759" /* 11759 */;
import _modDef11760 from "module_11760" /* 11760 */;
import size from "module_2" /* 2 */;

const VoicePlatforms = CallConstants.VoicePlatforms;
const obj = { [XBOX]: _modDef11759, [PLAYSTATION]: _modDef11760, [PLAYSTATION_STAGING]: _modDef11760 };
({ XBOX, PLAYSTATION, PLAYSTATION_STAGING } = Constants.PlatformTypes);
const result = size.fileFinishedImporting("modules/game_console/native/getConsoleIcon.tsx");

export default function getConsoleIcon(arg0) {
  return obj[arg0];
};
export const getConsoleIconForVoicePlatform = function getConsoleIconForVoicePlatform(voicePlatform) {
  if (voicePlatform === VoicePlatforms.XBOX) {
    let tmp2 = _modDef11759;
  } else {
    tmp2 = null;
    if (voicePlatform === tmp.PLAYSTATION) {
      tmp2 = _modDef11760;
    }
  }
  return tmp2;
};