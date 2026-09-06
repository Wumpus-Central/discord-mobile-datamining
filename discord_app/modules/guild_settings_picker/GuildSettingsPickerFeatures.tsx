// === Module 13890: GuildSettingsPickerFeatures ===

// Module 13890 (GuildSettingsPickerFeatures)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import RoleSubscriptionsOnboardingGuildPickerFeatureSpecDefault from "RoleSubscriptionsOnboardingGuildPickerFeatureSpec" /* 13891 */;
import RoleSubscriptionsCreateTierFromTemplatePickerFeatureSpecDefault from "RoleSubscriptionsCreateTierFromTemplatePickerFeatureSpec" /* 13892 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import PermissionStore from "PermissionStore" /* 4199 */;

require = fn;
let obj = { "server-subscriptions-onboarding": RoleSubscriptionsOnboardingGuildPickerFeatureSpecDefault, "server-subscriptions-create-tier-from-template": RoleSubscriptionsCreateTierFromTemplatePickerFeatureSpecDefault };
let closure_6 = {
  title() {
    const intl = util.intl;
    return intl.string(util.t.V42OaH);
  },
  description() {
    const intl = util.intl;
    return intl.string(util.t["7dJ16X"]);
  },
  selectGuildCta() {
    const intl = util.intl;
    return intl.string(util.t.LhlgY9);
  },
  createGuildDescription() {
    const intl = util.intl;
    return intl.string(util.t.anOisx);
  },
  createGuildCta() {
    const intl = util.intl;
    return intl.string(util.t.B44MTm);
  },
  canCreateGuild: true,
  useIsGuildSupported() {
    const items = [PermissionStore];
    return initialize.useStateFromStores(items, () => (guild) => closure_1_4.canAccessGuildSettings(guild), [], initialize.statesWillNeverBeEqual);
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerFeatures.tsx");

export const useGuildSettingsPickerFeature = function useGuildSettingsPickerFeature(feature) {
  let tmp2;
  if (null != feature) {
    tmp2 = obj[feature];
  }
  let first = _slicedToArray(noop.useState(tmp2), 1)[0];
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
      let tmp = closure_0(arg0, arg1);
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