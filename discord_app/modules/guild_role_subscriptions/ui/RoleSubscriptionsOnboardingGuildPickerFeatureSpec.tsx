// === Module 13544: ? ===

// Module 13544
import initialize from "initialize" /* 589 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import closure_2 from "getHash" /* 4358 */;
import { isGuildOwner } from "GuildNSFWContentLevel" /* 1434 */;

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
        let obj = callback(6059);
        obj = { guild: null, isOwner: true, canManageGuildRoleSubscriptions: true, isUserInCreatorMonetizationEligibleCountry: null, shouldRestrictUpdatingRoleSubscriptionSettings: null };
        obj[0] = id;
        obj[3] = callback(6060).isUserInCreatorMonetizationEligibleCountry();
        const obj3 = callback(6060);
        obj[4] = callback(4082).shouldRestrictUpdatingCreatorMonetizationSettings(id.id);
        result = obj.canSeeGuildRoleSubscriptionSettings(obj);
        const obj4 = callback(4082);
      }
      return result;
    }, [], initialize.statesWillNeverBeEqual);
  }
};