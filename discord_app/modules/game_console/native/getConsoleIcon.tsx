// discord_app/modules/game_console/native/getConsoleIcon.tsx
import set from "../../../../_runtime/00002_set.js";
import ME from "../../../Constants.tsx";
import ParticipantTypes from "../../calls/CallConstants.tsx";
import registerAssetDefault from "../../../../_runtime/09335_registerAsset.js";
import registerAssetDefault2 from "../../../../_runtime/09919_registerAsset.js";

const VoicePlatforms = ParticipantTypes.VoicePlatforms;
const obj = {
  [XBOX]: registerAssetDefault,
  [PLAYSTATION]: registerAssetDefault2,
  [PLAYSTATION_STAGING]: registerAssetDefault2,
};
({ XBOX, PLAYSTATION, PLAYSTATION_STAGING } = ME.PlatformTypes);
const result = set.fileFinishedImporting("modules/game_console/native/getConsoleIcon.tsx");

export default function getConsoleIcon(arg0) {
  return obj[arg0];
}
export const getConsoleIconForVoicePlatform = function getConsoleIconForVoicePlatform(voicePlatform) {
  if (voicePlatform === VoicePlatforms.XBOX) {
    let tmp2 = registerAssetDefault;
  } else {
    tmp2 = null;
    if (voicePlatform === tmp.PLAYSTATION) {
      tmp2 = registerAssetDefault2;
    }
  }
  return tmp2;
};
