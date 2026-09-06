// === Module 13892: RoleSubscriptionsCreateTierFromTemplatePickerFeatureSpec ===

// Module 13892 (RoleSubscriptionsCreateTierFromTemplatePickerFeatureSpec)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import ExperimentStore from "ExperimentStore" /* 4476 */;
import PermissionStore from "PermissionStore" /* 4199 */;

require = fn;
const Constants = fn(1074);
({ GuildFeatures: closure_4, Permissions: hasOwnProperty } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/ui/RoleSubscriptionsCreateTierFromTemplatePickerFeatureSpec.tsx");

export default {
  title() {
    const intl = util.intl;
    return intl.string(util.t.aTFQKh);
  },
  description() {
    const intl = util.intl;
    return intl.string(util.t.oTbFQg);
  },
  canCreateGuild: false,
  useIsGuildSupported() {
    const items = [ExperimentStore, PermissionStore];
    return initialize.useStateFromStores(items, () => (features) => {
      features = features.features;
      let hasItem = features.has(constants.ROLE_SUBSCRIPTIONS_ENABLED);
      if (hasItem) {
        const features2 = features.features;
        hasItem = !features2.has(constants.CREATOR_MONETIZABLE_RESTRICTED);
      }
      if (hasItem) {
        hasItem = closure_1_3.can(constants2.ADMINISTRATOR, features);
      }
      if (hasItem) {
        hasItem = closure_1_0(dependencyMap[5]).isGuildEligibleForTierTemplates(features.id);
        const obj = closure_1_0(dependencyMap[5]);
      }
      return hasItem;
    }, []);
  }
};