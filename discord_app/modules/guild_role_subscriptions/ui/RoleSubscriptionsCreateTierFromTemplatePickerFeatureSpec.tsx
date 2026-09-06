// discord_app/modules/guild_role_subscriptions/ui/RoleSubscriptionsCreateTierFromTemplatePickerFeatureSpec.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import util from "../../../intl/index.native.tsx";
import ExperimentStore from "../../experiments/ExperimentStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";

require = fn;
const Constants = fn(1074);
({ GuildFeatures: closure_4, Permissions: hasOwnProperty } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/ui/RoleSubscriptionsCreateTierFromTemplatePickerFeatureSpec.tsx",
);

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
    return initialize.useStateFromStores(
      items,
      () => (features) => {
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
      },
      [],
    );
  },
};
