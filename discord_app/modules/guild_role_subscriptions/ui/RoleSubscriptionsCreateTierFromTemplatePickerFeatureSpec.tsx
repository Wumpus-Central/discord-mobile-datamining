// discord_app/modules/guild_role_subscriptions/ui/RoleSubscriptionsCreateTierFromTemplatePickerFeatureSpec.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import getHash from "../../experiments/ExperimentStore.tsx";
import getUncachedChannelPermissions from "../../../stores/PermissionStore.tsx";
import ME from "../../../Constants.tsx";

require = fn;
({ GuildFeatures: c4, Permissions: c5 } = ME);
const result = require("obj132").fileFinishedImporting("modules/guild_role_subscriptions/ui/RoleSubscriptionsCreateTierFromTemplatePickerFeatureSpec.tsx");

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