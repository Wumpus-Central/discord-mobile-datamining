import getHash from "getHash";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import ME from "ME";

let c4;
let c5;
const require = arg1;
({ GuildFeatures: c4, Permissions: c5 } = ME);
const result = require("ME").fileFinishedImporting("modules/guild_role_subscriptions/ui/RoleSubscriptionsCreateTierFromTemplatePickerFeatureSpec.tsx");

export default {
  title() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.aTFQKh);
  },
  description() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.oTbFQg);
  },
  canCreateGuild: false,
  useIsGuildSupported() {
    const items = [getHash, getUncachedChannelPermissions];
    return require(589) /* initialize */.useStateFromStores(items, () => (features) => {
      features = features.features;
      let hasItem = features.has(constants.ROLE_SUBSCRIPTIONS_ENABLED);
      if (hasItem) {
        const features2 = features.features;
        hasItem = !features2.has(constants.CREATOR_MONETIZABLE_RESTRICTED);
      }
      if (hasItem) {
        hasItem = getUncachedChannelPermissions.can(constants2.ADMINISTRATOR, features);
      }
      if (hasItem) {
        hasItem = callback(table[5]).isGuildEligibleForTierTemplates(features.id);
        const obj = callback(table[5]);
      }
      return hasItem;
    }, []);
  }
};