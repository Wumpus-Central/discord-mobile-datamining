// === Module 13917: RoleSubscriptionsOnboardingGuildPickerFeatureSpec ===

// Module 13917 (RoleSubscriptionsOnboardingGuildPickerFeatureSpec)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import ExperimentStore from "ExperimentStore" /* 4490 */;

require = fn;
const isGuildOwner = fn(1975).isGuildOwner;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/ui/RoleSubscriptionsOnboardingGuildPickerFeatureSpec.tsx");

export default {
  title() {
    const intl = util.intl;
    return intl.string(util.t["KzCF/6"]);
  },
  description() {
    const intl = util.intl;
    return intl.string(util.t.xMW8FH);
  },
  canCreateGuild: false,
  useIsGuildSupported() {
    const items = [ExperimentStore];
    return initialize.useStateFromStores(items, () => (guild, arg1) => {
      let result = closure_1_3(guild, arg1);
      if (result) {
        closure_1_0(7274);
        const obj = { guild, isOwner: true, canManageGuildRoleSubscriptions: true, isUserInCreatorMonetizationEligibleCountry: closure_1_0(7275).isUserInCreatorMonetizationEligibleCountry(), shouldRestrictUpdatingRoleSubscriptionSettings: null };
        const obj3 = closure_1_0(7275);
        obj.shouldRestrictUpdatingRoleSubscriptionSettings = closure_1_0(4205).shouldRestrictUpdatingCreatorMonetizationSettings(guild.id);
        result = obj.canSeeGuildRoleSubscriptionSettings(obj);
        const obj4 = closure_1_0(4205);
      }
      return result;
    }, [], initialize.statesWillNeverBeEqual);
  }
};