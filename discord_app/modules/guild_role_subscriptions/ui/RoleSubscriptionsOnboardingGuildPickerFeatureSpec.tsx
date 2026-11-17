// === Module 16366: RoleSubscriptionsOnboardingGuildPickerFeatureSpec ===

// Module 16366 (RoleSubscriptionsOnboardingGuildPickerFeatureSpec)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1113 */;
import ExperimentStore from "ExperimentStore" /* 5526 */;

require = fn;
const isGuildOwner = fn(5177).isGuildOwner;
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
    items = [ExperimentStore];
    return initialize.useStateFromStores(items, () => (guild, arg1) => {
      let result = closure_1_3(guild, arg1);
      if (result) {
        const obj2 = { guild, isOwner: true, canManageGuildRoleSubscriptions: true, isUserInCreatorMonetizationEligibleCountry: null, shouldRestrictUpdatingRoleSubscriptionSettings: null };
        const obj = closure_1_0(7285);
        obj2.isUserInCreatorMonetizationEligibleCountry = closure_1_0(7286).isUserInCreatorMonetizationEligibleCountry();
        const obj3 = closure_1_0(7286);
        obj2.shouldRestrictUpdatingRoleSubscriptionSettings = closure_1_0(5234).shouldRestrictUpdatingCreatorMonetizationSettings(guild.id);
        result = obj.canSeeGuildRoleSubscriptionSettings(obj2);
        const obj4 = closure_1_0(5234);
      }
      return result;
    }, [], initialize.statesWillNeverBeEqual);
  }
};