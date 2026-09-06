// === Module 13230: getRemoteJoinFooterLabel ===

// Module 13230 (getRemoteJoinFooterLabel)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import size from "module_2" /* 2 */;

const ActivityGamePlatforms = Constants.ActivityGamePlatforms;
const result = size.fileFinishedImporting("modules/activities/utils/getRemoteJoinFooterLabel.tsx");

export const getRemoteJoinFooterLabel = function getRemoteJoinFooterLabel(remoteJoinPlatform) {
  if (ActivityGamePlatforms.DESKTOP === remoteJoinPlatform) {
    const intl5 = util.intl;
    return intl5.string(util.t.aqN8U9);
  } else if (tmp.IOS === remoteJoinPlatform) {
    const intl4 = util.intl;
    return intl4.string(util.t.CyQ5ia);
  } else if (tmp.ANDROID === remoteJoinPlatform) {
    const intl3 = util.intl;
    return intl3.string(util.t.fMs6uW);
  } else if (tmp.XBOX === remoteJoinPlatform) {
    const intl2 = util.intl;
    return intl2.string(util.t.o0hjdt);
  } else {
    const intl = util.intl;
    return intl.string(util.t["R/1GpG"]);
  }
};