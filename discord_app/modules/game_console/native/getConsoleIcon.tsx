// discord_app/modules/game_console/native/getConsoleIcon.tsx
import Constants from "../../../Constants.tsx";
import CallConstants from "../../calls/CallConstants.tsx";
import _modDef11488 from "../../../../_runtime/metro/11488__.js";
import _modDef11489 from "../../../../_runtime/metro/11489__.js";
import size from "../../../../_runtime/metro/00002__.js";

const VoicePlatforms = CallConstants.VoicePlatforms;
const obj = { [XBOX]: _modDef11488, [PLAYSTATION]: _modDef11489, [PLAYSTATION_STAGING]: _modDef11489 };
({ XBOX, PLAYSTATION, PLAYSTATION_STAGING } = Constants.PlatformTypes);
const result = size.fileFinishedImporting("modules/game_console/native/getConsoleIcon.tsx");

export default function getConsoleIcon(arg0) {
  return obj[arg0];
}
export const getConsoleIconForVoicePlatform = function getConsoleIconForVoicePlatform(voicePlatform) {
  if (voicePlatform === VoicePlatforms.XBOX) {
    let tmp2 = _modDef11488;
  } else {
    tmp2 = null;
    if (voicePlatform === tmp.PLAYSTATION) {
      tmp2 = _modDef11489;
    }
  }
  return tmp2;
};
