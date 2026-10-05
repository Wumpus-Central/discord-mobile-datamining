// === Module 13702: GuildSettingsPickerFeatures ===

// Module 13702 (GuildSettingsPickerFeatures)
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1126 */;
import RoleSubscriptionsOnboardingGuildPickerFeatureSpecDefault from "RoleSubscriptionsOnboardingGuildPickerFeatureSpec" /* 13703 */;
import RoleSubscriptionsCreateTierFromTemplatePickerFeatureSpecDefault from "RoleSubscriptionsCreateTierFromTemplatePickerFeatureSpec" /* 13704 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import size from "module_2" /* 2 */;

let obj = { "server-subscriptions-onboarding": RoleSubscriptionsOnboardingGuildPickerFeatureSpecDefault, "server-subscriptions-create-tier-from-template": RoleSubscriptionsCreateTierFromTemplatePickerFeatureSpecDefault };
let closure_6 = {
  title() {
    const intl = intl2.intl;
    return intl.string(intl2.t.V42OaH);
  },
  description() {
    const intl = intl2.intl;
    return intl.string(intl2.t["7dJ16X"]);
  },
  selectGuildCta() {
    const intl = intl2.intl;
    return intl.string(intl2.t.LhlgY9);
  },
  createGuildDescription() {
    const intl = intl2.intl;
    return intl.string(intl2.t.anOisx);
  },
  createGuildCta() {
    const intl = intl2.intl;
    return intl.string(intl2.t.B44MTm);
  },
  canCreateGuild: true,
  useIsGuildSupported() {
    const items = [PermissionStore];
    obj = get_initialized;
    return obj.useStateFromStores(items, () => (guild) => closure_1_4.canAccessGuildSettings(guild), [], get_initialized.statesWillNeverBeEqual);
  }
};
const result = size.fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerFeatures.tsx");

export const useGuildSettingsPickerFeature = function useGuildSettingsPickerFeature(feature) {
  let tmp2;
  const useState = react.useState;
  if (null != feature) {
    let tmp3 = obj;
    tmp2 = obj[feature];
  }
  let first = _slicedToArray(useState(tmp2), 1)[0];
  let closure_0 = closure_6.useIsGuildSupported();
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
  const obj2 = {
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
  return obj2;
};