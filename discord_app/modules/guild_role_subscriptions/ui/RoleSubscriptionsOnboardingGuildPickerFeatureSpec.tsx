// === Module 13351: ? ===

// Module 13351
import initialize from "initialize" /* 589 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import getHash from "getHash" /* 4288 */;
import { isGuildOwner } from "GuildNSFWContentLevel" /* 1434 */;

require = fn;
let result = require("obj132").fileFinishedImporting("modules/guild_role_subscriptions/ui/RoleSubscriptionsOnboardingGuildPickerFeatureSpec.tsx");

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
        callback(7226);
        const obj = { guild: null, isOwner: true, canManageGuildRoleSubscriptions: true, isUserInCreatorMonetizationEligibleCountry: null, shouldRestrictUpdatingRoleSubscriptionSettings: null };
        obj[0] = id;
        obj[3] = callback(7227).isUserInCreatorMonetizationEligibleCountry();
        const obj3 = callback(7227);
        obj[4] = callback(4014).shouldRestrictUpdatingCreatorMonetizationSettings(id.id);
        result = obj.canSeeGuildRoleSubscriptionSettings(obj);
        const obj4 = callback(4014);
      }
      return result;
    }, [], initialize.statesWillNeverBeEqual);
  }
};