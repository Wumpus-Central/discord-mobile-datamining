// discord_app/modules/guild_role_subscriptions/ui/RoleSubscriptionsOnboardingGuildPickerFeatureSpec.tsx
import getHash from "getHash";
import { isGuildOwner } from "GuildNSFWContentLevel";

const require = arg1;
let result = require("getSystemLocale").fileFinishedImporting("modules/guild_role_subscriptions/ui/RoleSubscriptionsOnboardingGuildPickerFeatureSpec.tsx");

export default {
  title() {
    const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t["KzCF/6"]);
  },
  description() {
    const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.xMW8FH);
  },
  canCreateGuild: false,
  useIsGuildSupported() {
    const items = [getHash];
    return require("../../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items, () => (id) => {
      let result = callback2(id, arg1);
      if (result) {
        let obj = callback(5789);
        obj = { guild: null, isOwner: true, canManageGuildRoleSubscriptions: true, isUserInCreatorMonetizationEligibleCountry: null, shouldRestrictUpdatingRoleSubscriptionSettings: null };
        obj[0] = id;
        obj[3] = callback(5790).isUserInCreatorMonetizationEligibleCountry();
        const obj3 = callback(5790);
        obj[4] = callback(3906).shouldRestrictUpdatingCreatorMonetizationSettings(id.id);
        result = obj.canSeeGuildRoleSubscriptionSettings(obj);
        const obj4 = callback(3906);
      }
      return result;
    }, [], require("../../../../discord_common/js/packages/flux/index.tsx") /* initialize */.statesWillNeverBeEqual);
  }
};