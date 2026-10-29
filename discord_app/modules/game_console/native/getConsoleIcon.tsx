// === Module 14667: getConsoleIcon ===

// Module 14667 (getConsoleIcon)
import Constants from "Constants" /* 1084 */;
import CallConstants from "CallConstants" /* 5670 */;
import _modDef11813 from "module_11813" /* 11813 */;
import _modDef11814 from "module_11814" /* 11814 */;
import size from "module_2" /* 2 */;

const VoicePlatforms = CallConstants.VoicePlatforms;
const obj = { [XBOX]: _modDef11813, [PLAYSTATION]: _modDef11814, [PLAYSTATION_STAGING]: _modDef11814 };
({ XBOX, PLAYSTATION, PLAYSTATION_STAGING } = Constants.PlatformTypes);
const result = size.fileFinishedImporting("modules/game_console/native/getConsoleIcon.tsx");

export default function getConsoleIcon(arg0) {
  return obj[arg0];
};
export function getConsoleIconForVoicePlatform(voicePlatform) {
  if (voicePlatform === VoicePlatforms.XBOX) {
    let tmp2 = _modDef11813;
  } else {
    tmp2 = null;
    if (voicePlatform === tmp.PLAYSTATION) {
      tmp2 = _modDef11814;
    }
  }
  return tmp2;
}