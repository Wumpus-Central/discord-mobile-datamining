// discord_app/modules/game_console/native/getConsoleIcon.tsx
import Constants from "../../../Constants.tsx";
import CallConstants from "../../calls/CallConstants.tsx";
import _modDef7640 from "../../../../_runtime/metro/07640__.js";
import _modDef10436 from "../../../../_runtime/metro/10436__.js";
import size from "../../../../_runtime/metro/00002__.js";

const VoicePlatforms = CallConstants.VoicePlatforms;
const obj = { [XBOX]: _modDef7640, [PLAYSTATION]: _modDef10436, [PLAYSTATION_STAGING]: _modDef10436 };
({ XBOX, PLAYSTATION, PLAYSTATION_STAGING } = Constants.PlatformTypes);
const result = size.fileFinishedImporting("modules/game_console/native/getConsoleIcon.tsx");

export default function getConsoleIcon(arg0) {
  return obj[arg0];
}
export function getConsoleIconForVoicePlatform(voicePlatform) {
  if (voicePlatform === VoicePlatforms.XBOX) {
    let tmp2 = _modDef7640;
  } else {
    tmp2 = null;
    if (voicePlatform === tmp.PLAYSTATION) {
      tmp2 = _modDef10436;
    }
  }
  return tmp2;
}
