// === Module 13853: ? ===

// Module 13853
import initialize from "initialize" /* 586 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import closure_2 from "getHash" /* 4391 */;
import { isGuildOwner } from "GuildNSFWContentLevel" /* 1429 */;

require = arg1;
let result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/ui/RoleSubscriptionsOnboardingGuildPickerFeatureSpec.tsx");

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
    return initialize.useStateFromStores(items, () => (id) => {
      let result = callback2(id, arg1);
      if (result) {
        let obj = callback(6115);
        obj = { guild: null, isOwner: true, canManageGuildRoleSubscriptions: true, isUserInCreatorMonetizationEligibleCountry: null, shouldRestrictUpdatingRoleSubscriptionSettings: null };
        obj[0] = id;
        obj[3] = callback(6116).isUserInCreatorMonetizationEligibleCountry();
        const obj3 = callback(6116);
        obj[4] = callback(4113).shouldRestrictUpdatingCreatorMonetizationSettings(id.id);
        result = obj.canSeeGuildRoleSubscriptionSettings(obj);
        const obj4 = callback(4113);
      }
      return result;
    }, [], initialize.statesWillNeverBeEqual);
  }
};