// === Module 13350: useGuildSettingsPickerFeature ===

// Module 13350 (useGuildSettingsPickerFeature)
import initialize from "initialize" /* 589 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import _modDef13351 from "module_13351" /* 13351 */;
import _modDef13352 from "module_13352" /* 13352 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import getUncachedChannelPermissions from "getUncachedChannelPermissions" /* 4021 */;

require = fn;
let closure_6 = {
  title() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.V42OaH);
  },
  description() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["7dJ16X"]);
  },
  selectGuildCta() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.LhlgY9);
  },
  createGuildDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.anOisx);
  },
  createGuildCta() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.B44MTm);
  },
  canCreateGuild: true,
  useIsGuildSupported() {
    const items = [closure_4];
    return initialize.useStateFromStores(items, () => (closure_0) => closure_4.canAccessGuildSettings(closure_0), [], initialize.statesWillNeverBeEqual);
  }
};
const result = require("obj132").fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerFeatures.tsx");

export const useGuildSettingsPickerFeature = function useGuildSettingsPickerFeature(feature) {
  let tmp2;
  if (null != feature) {
    tmp2 = obj[feature];
  }
  let first = callback(React.useState(tmp2), 1)[0];
  closure_0 = closure_6.useIsGuildSupported();
  let isGuildSupported;
  if (first != null) {
    const useIsGuildSupported = first.useIsGuildSupported;
    if (useIsGuildSupported != null) {
      isGuildSupported = useIsGuildSupported();
    }
  }
  obj = {};
  const merged = Object.assign(closure_6);
  if (first == null) {
    first = {};
  }
  const merged1 = Object.assign(first);
  obj = {
    title: obj.title(),
    description: obj.description(),
    selectGuildCta: obj.selectGuildCta(),
    createGuildDescription: obj.createGuildDescription(),
    createGuildCta: obj.createGuildCta(),
    canCreateGuild: obj.canCreateGuild,
    isGuildSupported(arg0, arg1) {
      let tmp = callback(arg0, arg1);
      if (tmp) {
        let tmp3;
        if (isGuildSupported != null) {
          tmp3 = isGuildSupported(arg0, arg1);
        }
        tmp = false !== tmp3;
      }
      return tmp;
    }
  };
  return obj;
};