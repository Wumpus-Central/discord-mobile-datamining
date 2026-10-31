// discord_app/modules/game_console/native/getConsoleIcon.tsx
import Constants from "../../../Constants.tsx";
import CallConstants from "../../calls/CallConstants.tsx";
import _modDef12044 from "../../../../_runtime/metro/12044__.js";
import _modDef12045 from "../../../../_runtime/metro/12045__.js";
import size from "../../../../_runtime/metro/00002__.js";

const VoicePlatforms = CallConstants.VoicePlatforms;
const obj = { [XBOX]: _modDef12044, [PLAYSTATION]: _modDef12045, [PLAYSTATION_STAGING]: _modDef12045 };
({ XBOX, PLAYSTATION, PLAYSTATION_STAGING } = Constants.PlatformTypes);
const result = size.fileFinishedImporting("modules/game_console/native/getConsoleIcon.tsx");

export default function getConsoleIcon(arg0) {
  return obj[arg0];
}
export function getConsoleIconForVoicePlatform(voicePlatform) {
  if (voicePlatform === VoicePlatforms.XBOX) {
    let tmp2 = _modDef12044;
  } else {
    tmp2 = null;
    if (voicePlatform === tmp.PLAYSTATION) {
      tmp2 = _modDef12045;
    }
  }
  return tmp2;
}
