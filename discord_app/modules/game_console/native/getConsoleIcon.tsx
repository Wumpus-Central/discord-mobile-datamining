// discord_app/modules/game_console/native/getConsoleIcon.tsx
import Constants from "../../../Constants.tsx";
import CallConstants from "../../calls/CallConstants.tsx";
import _modDef11719 from "../../../../_runtime/metro/11719__.js";
import _modDef11720 from "../../../../_runtime/metro/11720__.js";
import size from "../../../../_runtime/metro/00002__.js";

const VoicePlatforms = CallConstants.VoicePlatforms;
const obj = { [XBOX]: _modDef11719, [PLAYSTATION]: _modDef11720, [PLAYSTATION_STAGING]: _modDef11720 };
({ XBOX, PLAYSTATION, PLAYSTATION_STAGING } = Constants.PlatformTypes);
const result = size.fileFinishedImporting("modules/game_console/native/getConsoleIcon.tsx");

export default function getConsoleIcon(arg0) {
  return obj[arg0];
}
export const getConsoleIconForVoicePlatform = function getConsoleIconForVoicePlatform(voicePlatform) {
  if (voicePlatform === VoicePlatforms.XBOX) {
    let tmp2 = _modDef11719;
  } else {
    tmp2 = null;
    if (voicePlatform === tmp.PLAYSTATION) {
      tmp2 = _modDef11720;
    }
  }
  return tmp2;
};
