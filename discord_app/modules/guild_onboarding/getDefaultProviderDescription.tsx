// === Module 7179: getDefaultProviderDescription ===

// Module 7179 (getDefaultProviderDescription)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import size from "module_2" /* 2 */;

const PlatformTypes = Constants.PlatformTypes;
const result = size.fileFinishedImporting("modules/guild_onboarding/getDefaultProviderDescription.tsx");

export default function getDefaultProviderDescription(arg0) {
  if (PlatformTypes.TWITCH === arg0) {
    const intl2 = util.intl;
    return intl2.string(util.t["D/wRWb"]);
  } else if (tmp.YOUTUBE === arg0) {
    const intl = util.intl;
    return intl.string(util.t.TC0upt);
  }
};