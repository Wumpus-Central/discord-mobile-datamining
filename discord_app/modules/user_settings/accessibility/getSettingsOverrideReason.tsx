// === Module 14893: getSettingsOverrideReason ===

// Module 14893 (getSettingsOverrideReason)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import closure_2 from "updateExistingSettings" /* 4137 */;
import { SettingsOverrideReasonKeys as closure_3 } from "MAX_FAVORITES" /* 685 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/user_settings/accessibility/getSettingsOverrideReason.tsx");

export default function getSettingsOverrideReason(arg0) {
  if (constants.REDUCED_MOTION === arg0) {
    const intl2 = getSystemLocale.intl;
    return intl2.format(getSystemLocale.t["1dT9V4"], {});
  } else if (tmp.REDUCED_MOTION_STICKERS === arg0) {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["2ExvRu"]);
  }
};
export const useSettingsOverrideReason = function useSettingsOverrideReason(arg0) {
  const _require = arg0;
  const items = [closure_2];
  return _require(589).useStateFromStores(items, () => {
    const appliedOverrideReasonKey = closure_1_2.getAppliedOverrideReasonKey(callback);
    if (closure_1_3.REDUCED_MOTION === appliedOverrideReasonKey) {
      const intl2 = callback(closure_1_1[2]).intl;
      let formatResult = intl2.format(callback(closure_1_1[2]).t["1dT9V4"], {});
    } else if (tmp2.REDUCED_MOTION_STICKERS === appliedOverrideReasonKey) {
      const intl = callback(closure_1_1[2]).intl;
      formatResult = intl.string(callback(closure_1_1[2]).t["2ExvRu"]);
    }
    return formatResult;
  });
};