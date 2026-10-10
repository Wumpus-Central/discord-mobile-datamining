// === Module 14095: RoleSubscriptionsOnboardingGuildPickerFeatureSpec ===

// Module 14095 (RoleSubscriptionsOnboardingGuildPickerFeatureSpec)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1126 */;
import ExperimentStore from "ExperimentStore" /* 5016 */;

require = fn;
const isGuildOwner = fn(2083).isGuildOwner;
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
        const obj = closure_1_0(6962);
        obj2.isUserInCreatorMonetizationEligibleCountry = closure_1_0(6963).isUserInCreatorMonetizationEligibleCountry();
        const obj3 = closure_1_0(6963);
        obj2.shouldRestrictUpdatingRoleSubscriptionSettings = closure_1_0(4742).shouldRestrictUpdatingCreatorMonetizationSettings(guild.id);
        result = obj.canSeeGuildRoleSubscriptionSettings(obj2);
        const obj4 = closure_1_0(4742);
      }
      return result;
    }, [], initialize.statesWillNeverBeEqual);
  }
};