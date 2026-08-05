// discord_app/modules/activities/utils/getRemoteJoinFooterLabel.tsx
import { ActivityGamePlatforms } from "ME";

const result = require("set").fileFinishedImporting("modules/activities/utils/getRemoteJoinFooterLabel.tsx");

export const getRemoteJoinFooterLabel = function getRemoteJoinFooterLabel(remoteJoinPlatform) {
  if (ActivityGamePlatforms.DESKTOP === remoteJoinPlatform) {
    const intl5 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl5.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.aqN8U9);
  } else if (tmp.IOS === remoteJoinPlatform) {
    const intl4 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl4.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.CyQ5ia);
  } else if (tmp.ANDROID === remoteJoinPlatform) {
    const intl3 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl3.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.fMs6uW);
  } else if (tmp.XBOX === remoteJoinPlatform) {
    const intl2 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl2.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.o0hjdt);
  } else {
    const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t["R/1GpG"]);
  }
};