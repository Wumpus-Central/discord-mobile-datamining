// discord_app/modules/user_settings/accessibility/getSettingsOverrideReason.tsx
import util from "../../../intl/index.native.tsx";
import UserSettingsOverridesStore from "../UserSettingsOverridesStore.tsx";

require = fn;
const constants = fn(1084).SettingsOverrideReasonKeys;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/accessibility/getSettingsOverrideReason.tsx");

export default function getSettingsOverrideReason(arg0) {
  if (constants.REDUCED_MOTION === arg0) {
    const intl2 = util.intl;
    return intl2.format(util.t["1dT9V4"], {});
  } else if (tmp.REDUCED_MOTION_STICKERS === arg0) {
    const intl = util.intl;
    return intl.string(util.t["2ExvRu"]);
  }
}
export const useSettingsOverrideReason = function useSettingsOverrideReason(arg0) {
  _require = arg0;
  const items = [UserSettingsOverridesStore];
  return require("initialize").useStateFromStores(items, () => {
    const appliedOverrideReasonKey = UserSettingsOverridesStore.getAppliedOverrideReasonKey(closure_0);
    if (constants.REDUCED_MOTION === appliedOverrideReasonKey) {
      const intl2 = util.intl;
      let formatResult = intl2.format(util.t["1dT9V4"], {});
    } else if (tmp2.REDUCED_MOTION_STICKERS === appliedOverrideReasonKey) {
      const intl = util.intl;
      formatResult = intl.string(util.t["2ExvRu"]);
    }
    return formatResult;
  });
};
