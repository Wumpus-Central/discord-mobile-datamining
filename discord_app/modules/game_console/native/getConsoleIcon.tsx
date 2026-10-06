// discord_app/modules/game_console/native/getConsoleIcon.tsx
import Constants from "../../../Constants.tsx";
import CallConstants from "../../calls/CallConstants.tsx";
import AssetRegistryDefault from "../../../../_runtime/08786_AssetRegistry.js";
import AssetRegistryDefault2 from "../../../../_runtime/09477_AssetRegistry.js";
import size from "../../../../_runtime/metro/00002__.js";

let PLAYSTATION;
let PLAYSTATION_STAGING;
let XBOX;
const PlatformTypes = Constants.PlatformTypes;
const VoicePlatforms = CallConstants.VoicePlatforms;
const obj = {
  [XBOX]: AssetRegistryDefault,
  [PLAYSTATION]: AssetRegistryDefault2,
  [PLAYSTATION_STAGING]: AssetRegistryDefault2,
};
({ XBOX, PLAYSTATION, PLAYSTATION_STAGING } = PlatformTypes);
const result = size.fileFinishedImporting("modules/game_console/native/getConsoleIcon.tsx");

export default function getConsoleIcon(arg0) {
  return obj[arg0];
}
export const getConsoleIconForVoicePlatform = function getConsoleIconForVoicePlatform(voicePlatform) {
  let tmp2;
  if (voicePlatform === VoicePlatforms.XBOX) {
    tmp2 = AssetRegistryDefault;
  } else {
    tmp2 = null;
    if (voicePlatform === tmp.PLAYSTATION) {
      tmp2 = AssetRegistryDefault2;
    }
  }
  return tmp2;
};
