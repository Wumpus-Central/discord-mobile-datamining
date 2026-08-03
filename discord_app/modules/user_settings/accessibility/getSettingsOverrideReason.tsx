// === Module 14432: getSettingsOverrideReason ===

// Module 14432 (getSettingsOverrideReason)
import updateExistingSettings from "updateExistingSettings";
import { SettingsOverrideReasonKeys as closure_3 } from "MAX_FAVORITES";

const require = arg1;
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/accessibility/getSettingsOverrideReason.tsx");

export default function getSettingsOverrideReason(arg0) {
  if (constants.REDUCED_MOTION === arg0) {
    const intl2 = require(1236) /* getSystemLocale */.intl;
    return intl2.format(require(1236) /* getSystemLocale */.t["1dT9V4"], {});
  } else if (tmp.REDUCED_MOTION_STICKERS === arg0) {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["2ExvRu"]);
  }
};
export const useSettingsOverrideReason = function useSettingsOverrideReason(arg0) {
  const _require = arg0;
  const items = [updateExistingSettings];
  return _require(589).useStateFromStores(items, () => {
    const appliedOverrideReasonKey = outer1_2.getAppliedOverrideReasonKey(callback);
    if (outer1_3.REDUCED_MOTION === appliedOverrideReasonKey) {
      const intl2 = callback(outer1_1[2]).intl;
      let formatResult = intl2.format(callback(outer1_1[2]).t["1dT9V4"], {});
    } else if (tmp2.REDUCED_MOTION_STICKERS === appliedOverrideReasonKey) {
      const intl = callback(outer1_1[2]).intl;
      formatResult = intl.string(callback(outer1_1[2]).t["2ExvRu"]);
    }
    return formatResult;
  });
};