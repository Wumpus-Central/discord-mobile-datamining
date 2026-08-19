// === Module 12116: getActivityPlatformDisplayName ===

// Module 12116 (getActivityPlatformDisplayName)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;

const PlatformTypes = ME.PlatformTypes;
const result = set.fileFinishedImporting("modules/user_profile/utils/getActivityPlatformDisplayName.tsx");

export default function getActivityPlatformDisplayName(type) {
  type = type.type;
  if (PlatformTypes.XBOX === type) {
    const intl3 = getSystemLocale.intl;
    return intl3.string(getSystemLocale.t.Nfvo72);
  } else if (tmp.PLAYSTATION === type) {
    const intl2 = getSystemLocale.intl;
    return intl2.string(getSystemLocale.t.fFl4jo);
  } else if (tmp.META_QUEST_OR_HORIZON === type) {
    const intl = getSystemLocale.intl;
    const string = intl.string;
    const t = getSystemLocale.t;
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