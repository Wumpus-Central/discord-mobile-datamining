// === Module 12492: getRemoteJoinFooterLabel ===

// Module 12492 (getRemoteJoinFooterLabel)
import { ActivityGamePlatforms } from "ME";

const result = require("set").fileFinishedImporting("modules/activities/utils/getRemoteJoinFooterLabel.tsx");

export const getRemoteJoinFooterLabel = function getRemoteJoinFooterLabel(remoteJoinPlatform) {
  if (ActivityGamePlatforms.DESKTOP === remoteJoinPlatform) {
    const intl5 = require(1236) /* getSystemLocale */.intl;
    return intl5.string(require(1236) /* getSystemLocale */.t.aqN8U9);
  } else if (tmp.IOS === remoteJoinPlatform) {
    const intl4 = require(1236) /* getSystemLocale */.intl;
    return intl4.string(require(1236) /* getSystemLocale */.t.CyQ5ia);
  } else if (tmp.ANDROID === remoteJoinPlatform) {
    const intl3 = require(1236) /* getSystemLocale */.intl;
    return intl3.string(require(1236) /* getSystemLocale */.t.fMs6uW);
  } else if (tmp.XBOX === remoteJoinPlatform) {
    const intl2 = require(1236) /* getSystemLocale */.intl;
    return intl2.string(require(1236) /* getSystemLocale */.t.o0hjdt);
  } else {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["R/1GpG"]);
  }
};