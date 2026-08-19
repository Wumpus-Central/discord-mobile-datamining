// === Module 12781: getRemoteJoinFooterLabel ===

// Module 12781 (getRemoteJoinFooterLabel)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;

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