// discord_app/modules/guild_role_subscriptions/ui/RoleSubscriptionsOnboardingGuildPickerFeatureSpec.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import util from "../../../intl/index.native.tsx";
import ExperimentStore from "../../experiments/ExperimentStore.tsx";

require = fn;
const isGuildOwner = fn(1976).isGuildOwner;
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/ui/RoleSubscriptionsOnboardingGuildPickerFeatureSpec.tsx",
);

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
    return initialize.useStateFromStores(
      items,
      () => (guild, arg1) => {
        let result = closure_1_3(guild, arg1);
        if (result) {
          const obj2 = {
            guild,
            isOwner: true,
            canManageGuildRoleSubscriptions: true,
            isUserInCreatorMonetizationEligibleCountry: null,
            shouldRestrictUpdatingRoleSubscriptionSettings: null,
          };
          const obj = closure_1_0(7370);
          obj2.isUserInCreatorMonetizationEligibleCountry =
            closure_1_0(7371).isUserInCreatorMonetizationEligibleCountry();
          const obj3 = closure_1_0(7371);
          obj2.shouldRestrictUpdatingRoleSubscriptionSettings = closure_1_0(
            4269,
          ).shouldRestrictUpdatingCreatorMonetizationSettings(guild.id);
          result = obj.canSeeGuildRoleSubscriptionSettings(obj2);
          const obj4 = closure_1_0(4269);
        }
        return result;
      },
      [],
      initialize.statesWillNeverBeEqual,
    );
  },
};
