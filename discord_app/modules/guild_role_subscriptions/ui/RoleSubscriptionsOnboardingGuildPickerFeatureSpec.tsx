// === Module 13984: RoleSubscriptionsOnboardingGuildPickerFeatureSpec ===

// Module 13984 (RoleSubscriptionsOnboardingGuildPickerFeatureSpec)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1115 */;
import ExperimentStore from "ExperimentStore" /* 4555 */;

require = fn;
const isGuildOwner = fn(1976).isGuildOwner;
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
        const obj2 = { guild, isOwner: true, canManageGuildRoleSubscriptions: true, isUserInCreatorMonetizationEligibleCountry: null, shouldRestrictUpdatingRoleSubscriptionSettings: null };
        const obj = closure_1_0(7367);
        obj2.isUserInCreatorMonetizationEligibleCountry = closure_1_0(7368).isUserInCreatorMonetizationEligibleCountry();
        const obj3 = closure_1_0(7368);
        obj2.shouldRestrictUpdatingRoleSubscriptionSettings = closure_1_0(4271).shouldRestrictUpdatingCreatorMonetizationSettings(guild.id);
        result = obj.canSeeGuildRoleSubscriptionSettings(obj2);
        const obj4 = closure_1_0(4271);
      }
      return result;
    }, [], initialize.statesWillNeverBeEqual);
  }
};