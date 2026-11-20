// === Module 13700: getConsoleIcon ===

// Module 13700 (getConsoleIcon)
import Constants from "Constants" /* 1071 */;
import CallConstants from "CallConstants" /* 5444 */;
import _modDef6962 from "module_6962" /* 6962 */;
import _modDef10967 from "module_10967" /* 10967 */;
import size from "module_2" /* 2 */;

const VoicePlatforms = CallConstants.VoicePlatforms;
const obj = { [XBOX]: _modDef6962, [PLAYSTATION]: _modDef10967, [PLAYSTATION_STAGING]: _modDef10967 };
({ XBOX, PLAYSTATION, PLAYSTATION_STAGING } = Constants.PlatformTypes);
const result = size.fileFinishedImporting("modules/game_console/native/getConsoleIcon.tsx");

export default function getConsoleIcon(arg0) {
  return obj[arg0];
};
export function getConsoleIconForVoicePlatform(voicePlatform) {
  if (voicePlatform === VoicePlatforms.XBOX) {
    let tmp2 = _modDef6962;
  } else {
    tmp2 = null;
    if (voicePlatform === tmp.PLAYSTATION) {
      tmp2 = _modDef10967;
    }
  }
  return tmp2;
}