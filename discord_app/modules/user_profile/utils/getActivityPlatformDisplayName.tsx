import { PlatformTypes } from "ME";

const result = require("isOnMetaHorizon").fileFinishedImporting("modules/user_profile/utils/getActivityPlatformDisplayName.tsx");

export default function getActivityPlatformDisplayName(type) {
  type = type.type;
  if (PlatformTypes.XBOX === type) {
    const intl3 = require(1236) /* getSystemLocale */.intl;
    return intl3.string(require(1236) /* getSystemLocale */.t.Nfvo72);
  } else if (tmp.PLAYSTATION === type) {
    const intl2 = require(1236) /* getSystemLocale */.intl;
    return intl2.string(require(1236) /* getSystemLocale */.t.fFl4jo);
  } else if (tmp.META_QUEST_OR_HORIZON === type) {
    const intl = require(1236) /* getSystemLocale */.intl;
    const string = intl.string;
    const t = require(1236) /* getSystemLocale */.t;
    if (tmp5) {
      let stringResult = string(t.BrHQaq);
    } else {
      stringResult = string(t.p6vL0e);
    }
    return stringResult;
  } else {
    return type.name;
  }
};