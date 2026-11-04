// === Module 14953: getConsoleIcon ===

// Module 14953 (getConsoleIcon)
import Constants from "Constants" /* 1072 */;
import CallConstants from "CallConstants" /* 5815 */;
import _modDef12241 from "module_12241" /* 12241 */;
import _modDef12242 from "module_12242" /* 12242 */;
import size from "module_2" /* 2 */;

const VoicePlatforms = CallConstants.VoicePlatforms;
const obj = { [XBOX]: _modDef12241, [PLAYSTATION]: _modDef12242, [PLAYSTATION_STAGING]: _modDef12242 };
({ XBOX, PLAYSTATION, PLAYSTATION_STAGING } = Constants.PlatformTypes);
const result = size.fileFinishedImporting("modules/game_console/native/getConsoleIcon.tsx");

export default function getConsoleIcon(arg0) {
  return obj[arg0];
};
export function getConsoleIconForVoicePlatform(voicePlatform) {
  if (voicePlatform === VoicePlatforms.XBOX) {
    let tmp2 = _modDef12241;
  } else {
    tmp2 = null;
    if (voicePlatform === tmp.PLAYSTATION) {
      tmp2 = _modDef12242;
    }
  }
  return tmp2;
}