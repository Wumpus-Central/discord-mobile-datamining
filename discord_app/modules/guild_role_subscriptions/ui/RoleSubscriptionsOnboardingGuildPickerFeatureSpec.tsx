// discord_app/modules/guild_role_subscriptions/ui/RoleSubscriptionsOnboardingGuildPickerFeatureSpec.tsx
import getHash from "getHash";
import { isGuildOwner } from "GuildNSFWContentLevel";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";

const require = arg1;
let result = require("getSystemLocale").fileFinishedImporting("modules/guild_role_subscriptions/ui/RoleSubscriptionsOnboardingGuildPickerFeatureSpec.tsx");

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
    const items = [getHash];
    return initialize.useStateFromStores(items, () => (id) => {
      let result = callback2(id, arg1);
      if (result) {
        let obj = callback(5774);
        obj = { guild: null, isOwner: true, canManageGuildRoleSubscriptions: true, isUserInCreatorMonetizationEligibleCountry: null, shouldRestrictUpdatingRoleSubscriptionSettings: null };
        obj[0] = id;
        obj[3] = callback(5775).isUserInCreatorMonetizationEligibleCountry();
        const obj3 = callback(5775);
        obj[4] = callback(3876).shouldRestrictUpdatingCreatorMonetizationSettings(id.id);
        result = obj.canSeeGuildRoleSubscriptionSettings(obj);
        const obj4 = callback(3876);
      }
      return result;
    }, [], initialize.statesWillNeverBeEqual);
  }
};