// discord_app/modules/game_console/native/getConsoleIcon.tsx
import Constants from "../../../Constants.tsx";
import CallConstants from "../../calls/CallConstants.tsx";
import _modDef8749 from "../../../../_runtime/metro/08749__.js";
import _modDef9460 from "../../../../_runtime/metro/09460__.js";
import size from "../../../../_runtime/metro/00002__.js";

const VoicePlatforms = CallConstants.VoicePlatforms;
const obj = { [XBOX]: _modDef8749, [PLAYSTATION]: _modDef9460, [PLAYSTATION_STAGING]: _modDef9460 };
({ XBOX, PLAYSTATION, PLAYSTATION_STAGING } = Constants.PlatformTypes);
const result = size.fileFinishedImporting("modules/game_console/native/getConsoleIcon.tsx");

export default function getConsoleIcon(arg0) {
  return obj[arg0];
}
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
