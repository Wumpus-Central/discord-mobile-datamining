// === Module 15095: getRemoteJoinFooterLabel ===

// Module 15095 (getRemoteJoinFooterLabel)
import util from "util" /* 1114 */;
import ActivityGamePlatforms from "ActivityGamePlatforms" /* 9718 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/getRemoteJoinFooterLabel.tsx");

export function getRemoteJoinFooterLabel(remoteJoinPlatform) {
  if (ActivityGamePlatforms.ActivityGamePlatforms.DESKTOP === remoteJoinPlatform) {
    const intl5 = util.intl;
    return intl5.string(util.t.aqN8U9);
  } else if (ActivityGamePlatforms.ActivityGamePlatforms.IOS === remoteJoinPlatform) {
    const intl4 = util.intl;
    return intl4.string(util.t.CyQ5ia);
  } else if (ActivityGamePlatforms.ActivityGamePlatforms.ANDROID === remoteJoinPlatform) {
    const intl3 = util.intl;
    return intl3.string(util.t.fMs6uW);
  } else if (ActivityGamePlatforms.ActivityGamePlatforms.XBOX === remoteJoinPlatform) {
    const intl2 = util.intl;
    return intl2.string(util.t.o0hjdt);
  } else {
    const intl = util.intl;
    return intl.string(util.t["R/1GpG"]);
  }
}