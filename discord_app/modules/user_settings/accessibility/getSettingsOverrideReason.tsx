// === Module 14879: getSettingsOverrideReason ===

// Module 14879 (getSettingsOverrideReason)
import util from "util" /* 1115 */;
import _modDef3909 from "module_3909" /* 3909 */;
import UserSettingsOverridesStore from "UserSettingsOverridesStore" /* 2022 */;

const require = globalThis.__r;

require = fn;
const constants = fn(1084).SettingsOverrideReasonKeys;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/accessibility/getSettingsOverrideReason.tsx");

export default function getSettingsOverrideReason(arg0) {
  if (constants.REDUCED_MOTION === arg0) {
    const intl3 = util.intl;
    return intl3.format(util.t["1dT9V4"], {});
  } else if (constants.REDUCED_MOTION_STICKERS === arg0) {
    const intl2 = util.intl;
    return intl2.string(util.t["2ExvRu"]);
  } else if (constants.GAME_MODE === arg0) {
    const intl = util.intl;
    return intl.string(_modDef3909.VGcdxP);
  }
};
export const useSettingsOverrideReason = function useSettingsOverrideReason(arg0) {
  _require = arg0;
  const items = [UserSettingsOverridesStore];
  return require("initialize").useStateFromStores(items, () => {
    const appliedOverrideReasonKey = UserSettingsOverridesStore.getAppliedOverrideReasonKey(closure_0);
    if (constants.REDUCED_MOTION === appliedOverrideReasonKey) {
      const intl2 = util.intl;
      let formatResult = intl2.format(util.t["1dT9V4"], {});
    } else if (constants.REDUCED_MOTION_STICKERS === appliedOverrideReasonKey) {
      const intl = util.intl;
      formatResult = intl.string(util.t["2ExvRu"]);
    } else if (constants.GAME_MODE === appliedOverrideReasonKey) {
      const intl3 = util.intl;
      formatResult = intl3.string(_modDef3909.VGcdxP);
    }
    return formatResult;
  });
};
export const useIsSettingLockedByOverride = function useIsSettingLockedByOverride(arg0) {
  _require = arg0;
  const items = [UserSettingsOverridesStore];
  return require("initialize").useStateFromStores(items, () => UserSettingsOverridesStore.getAppliedOverrideReasonKey(closure_0) === constants.GAME_MODE);
};