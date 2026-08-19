// discord_app/modules/activities/utils/getRemoteJoinFooterLabel.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import ME from "../../../Constants.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";

const ActivityGamePlatforms = ME.ActivityGamePlatforms;
const result = obj132.fileFinishedImporting("modules/activities/utils/getRemoteJoinFooterLabel.tsx");

export const getRemoteJoinFooterLabel = function getRemoteJoinFooterLabel(remoteJoinPlatform) {
  if (ActivityGamePlatforms.DESKTOP === remoteJoinPlatform) {
    const intl5 = getSystemLocale.intl;
    return intl5.string(getSystemLocale.t.aqN8U9);
  } else if (ActivityGamePlatforms.IOS === remoteJoinPlatform) {
    const intl4 = getSystemLocale.intl;
    return intl4.string(getSystemLocale.t.CyQ5ia);
  } else if (ActivityGamePlatforms.ANDROID === remoteJoinPlatform) {
    const intl3 = getSystemLocale.intl;
    return intl3.string(getSystemLocale.t.fMs6uW);
  } else if (ActivityGamePlatforms.XBOX === remoteJoinPlatform) {
    const intl2 = getSystemLocale.intl;
    return intl2.string(getSystemLocale.t.o0hjdt);
  } else {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["R/1GpG"]);
  }
};