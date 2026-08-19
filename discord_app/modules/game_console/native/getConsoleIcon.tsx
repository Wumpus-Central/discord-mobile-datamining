// discord_app/modules/game_console/native/getConsoleIcon.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import ME from "../../../Constants.tsx";
import ParticipantTypes from "../../calls/CallConstants.tsx";
import registerAssetDefault from "../../../../_runtime/09839_registerAsset.js";
import registerAssetDefault2 from "../../../../_runtime/09885_registerAsset.js";

const VoicePlatforms = ParticipantTypes.VoicePlatforms;
({ XBOX, PLAYSTATION, PLAYSTATION_STAGING } = ME.PlatformTypes);
const result = obj132.fileFinishedImporting("modules/game_console/native/getConsoleIcon.tsx");

export default function getConsoleIcon(arg0) {
  return obj[arg0];
};
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