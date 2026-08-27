// === Module 13545: ? ===

// Module 13545
import initialize from "initialize" /* 589 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import closure_2 from "getHash" /* 4358 */;
import closure_3 from "getUncachedChannelPermissions" /* 4089 */;
import ME from "ME" /* 676 */;

require = arg1;
({ GuildFeatures: c4, Permissions: c5 } = ME);
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/ui/RoleSubscriptionsCreateTierFromTemplatePickerFeatureSpec.tsx");

export default {
  title() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.aTFQKh);
  },
  description() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.oTbFQg);
  },
  canCreateGuild: false,
  useIsGuildSupported() {
    const items = [closure_2, closure_3];
    return initialize.useStateFromStores(items, () => (features) => {
      features = features.features;
      let hasItem = features.has(constants.ROLE_SUBSCRIPTIONS_ENABLED);
      if (hasItem) {
        const features2 = features.features;
        hasItem = !features2.has(constants.CREATOR_MONETIZABLE_RESTRICTED);
      }
      if (hasItem) {
        hasItem = closure_3.can(constants2.ADMINISTRATOR, features);
      }
      if (hasItem) {
        hasItem = callback(table[5]).isGuildEligibleForTierTemplates(features.id);
        const obj = callback(table[5]);
      }
      return hasItem;
    }, []);
  }
};