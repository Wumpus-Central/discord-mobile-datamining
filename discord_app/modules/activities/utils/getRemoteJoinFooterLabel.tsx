// discord_app/modules/activities/utils/getRemoteJoinFooterLabel.tsx
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;

const ActivityGamePlatforms = ME.ActivityGamePlatforms;
const result = set.fileFinishedImporting("modules/activities/utils/getRemoteJoinFooterLabel.tsx");

export const getRemoteJoinFooterLabel = function getRemoteJoinFooterLabel(remoteJoinPlatform) {
  if (ActivityGamePlatforms.DESKTOP === remoteJoinPlatform) {
    const intl5 = getSystemLocale.intl;
    return intl5.string(getSystemLocale.t.aqN8U9);
  } else if (tmp.IOS === remoteJoinPlatform) {
    const intl4 = getSystemLocale.intl;
    return intl4.string(getSystemLocale.t.CyQ5ia);
  } else if (tmp.ANDROID === remoteJoinPlatform) {
    const intl3 = getSystemLocale.intl;
    return intl3.string(getSystemLocale.t.fMs6uW);
  } else if (tmp.XBOX === remoteJoinPlatform) {
    const intl2 = getSystemLocale.intl;
    return intl2.string(getSystemLocale.t.o0hjdt);
  } else {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["R/1GpG"]);
  }
};