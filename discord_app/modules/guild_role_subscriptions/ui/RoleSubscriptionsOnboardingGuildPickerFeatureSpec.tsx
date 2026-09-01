// discord_app/modules/guild_role_subscriptions/ui/RoleSubscriptionsOnboardingGuildPickerFeatureSpec.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import closure_2 from "../../experiments/ExperimentStore.tsx";
import { isGuildOwner } from "../../../records/GuildRecord.tsx";

require = arg1;
let result = require("set").fileFinishedImporting(
  "modules/guild_role_subscriptions/ui/RoleSubscriptionsOnboardingGuildPickerFeatureSpec.tsx",
);

export default {
  title() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["KzCF/6"]);
  },
  description() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.xMW8FH);
  },
  canCreateGuild: false,
  useIsGuildSupported() {
    const items = [closure_2];
    return initialize.useStateFromStores(
      items,
      () => (id) => {
        let result = callback2(id, arg1);
        if (result) {
          let obj = callback(6107);
          obj = {
            guild: null,
            isOwner: true,
            canManageGuildRoleSubscriptions: true,
            isUserInCreatorMonetizationEligibleCountry: null,
            shouldRestrictUpdatingRoleSubscriptionSettings: null,
          };
          obj[0] = id;
          obj[3] = callback(6108).isUserInCreatorMonetizationEligibleCountry();
          const obj3 = callback(6108);
          obj[4] = callback(4114).shouldRestrictUpdatingCreatorMonetizationSettings(id.id);
          result = obj.canSeeGuildRoleSubscriptionSettings(obj);
          const obj4 = callback(4114);
        }
        return result;
      },
      [],
      initialize.statesWillNeverBeEqual,
    );
  },
};
