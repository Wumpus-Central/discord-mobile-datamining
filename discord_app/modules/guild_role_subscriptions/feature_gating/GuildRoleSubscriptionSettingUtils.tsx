// === Module 7588: GuildRoleSubscriptionSettingUtils ===

// Module 7588 (GuildRoleSubscriptionSettingUtils)
import GuildRecord from "GuildRecord" /* 2060 */;
import CreatorMonetizationEligibilityExperimentUtils from "CreatorMonetizationEligibilityExperimentUtils" /* 7589 */;
import PermissionStore from "PermissionStore" /* 4462 */;
import UserStore from "UserStore" /* 1372 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

function computeGuildRoleSubscriptionSettingsVisibility(guild) {
  const features = guild.guild.features;
  if (features.has(constants.CREATOR_MONETIZABLE_DISABLED)) {
    let NONE = obj.NONE;
  } else {
    ({ guild, isOwner, shouldRestrictUpdatingRoleSubscriptionSettings } = guild);
    let prop = guild.canManageGuildRoleSubscriptions;
    if (prop) {
      if (shouldRestrictUpdatingRoleSubscriptionSettings) {
        shouldRestrictUpdatingRoleSubscriptionSettings = !isOwner;
      }
      let tmp4 = !shouldRestrictUpdatingRoleSubscriptionSettings;
      if (!shouldRestrictUpdatingRoleSubscriptionSettings) {
        const features2 = guild.features;
        const hasItem = features2.has(constants.CREATOR_MONETIZABLE);
        let tmp6 = !hasItem;
        if (!hasItem) {
          const features3 = guild.features;
          tmp6 = !features3.has(constants.CREATOR_MONETIZABLE_PROVISIONAL);
        }
        let tmp7 = !tmp6;
        if (tmp6) {
          const features4 = guild.features;
          let hasItem1 = features4.has(constants.COMMUNITY);
          if (hasItem1) {
            if (isOwner) {
              isOwner = tmp2;
            }
            hasItem1 = isOwner;
          }
          tmp7 = hasItem1;
        }
        tmp4 = tmp7;
      }
      prop = tmp4;
    }
    NONE = prop ? obj.VISIBLE : obj.NONE;
  }
  return NONE;
}
function useGuildRoleSubscriptionSettingsVisibility(stateFromStores) {
  _require = stateFromStores;
  closure_129_0 = stateFromStores;
  const obj = require("initialize");
  const items = [PermissionStore];
  const items1 = [stateFromStores];
  stateFromStores = obj.useStateFromStores(items, () => {
    let canResult = null != closure_0;
    if (canResult) {
      canResult = PermissionStore.can(constants2.ADMINISTRATOR, tmp);
    }
    return canResult;
  }, items1);
  const items2 = [UserStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items2, () => {
    let tmp3 = null != closure_0;
    if (tmp3) {
      tmp3 = isGuildOwner(tmp2, tmp);
    }
    return tmp3;
  });
  const obj2 = require("initialize");
  const isUserInCreatorMonetizationEligibleCountry = require("CreatorMonetizationEligibilityExperimentUtils").useIsUserInCreatorMonetizationEligibleCountry();
  require("CreatorMonetizationRestrictionsHooks");
  if (stateFromStores != null) {
    const id = stateFromStores.id;
  }
  if (null == stateFromStores) {
    let NONE = obj.NONE;
  } else {
    const obj4 = { guild: stateFromStores, isOwner: stateFromStores1, canManageGuildRoleSubscriptions: stateFromStores, isUserInCreatorMonetizationEligibleCountry, shouldRestrictUpdatingRoleSubscriptionSettings: tmp5 };
    NONE = computeGuildRoleSubscriptionSettingsVisibility(obj4);
  }
  return NONE;
}
const isGuildOwner = GuildRecord.isGuildOwner;
({ GuildFeatures: hasOwnProperty, Permissions: metroRequire } = Constants);
const GuildRoleSubscriptionSettingsVisibility = { NONE: 0, [0]: "NONE", VISIBLE: 1, [1]: "VISIBLE" };
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/GuildRoleSubscriptionSettingUtils.tsx");

export { GuildRoleSubscriptionSettingsVisibility };
export const canSeeGuildRoleSubscriptionSettingsContent = function canSeeGuildRoleSubscriptionSettingsContent(canManageGuildRoleSubscriptions) {
  ({ guild, isOwner, shouldRestrictUpdatingRoleSubscriptionSettings } = canManageGuildRoleSubscriptions);
  let prop = canManageGuildRoleSubscriptions.canManageGuildRoleSubscriptions;
  if (prop) {
    if (shouldRestrictUpdatingRoleSubscriptionSettings) {
      shouldRestrictUpdatingRoleSubscriptionSettings = !isOwner;
    }
    let tmp3 = !shouldRestrictUpdatingRoleSubscriptionSettings;
    if (!shouldRestrictUpdatingRoleSubscriptionSettings) {
      const features = guild.features;
      const hasItem = features.has(constants.CREATOR_MONETIZABLE);
      let tmp6 = !hasItem;
      if (!hasItem) {
        const features2 = guild.features;
        tmp6 = !features2.has(constants.CREATOR_MONETIZABLE_PROVISIONAL);
      }
      let tmp7 = !tmp6;
      if (tmp6) {
        const features3 = guild.features;
        let hasItem1 = features3.has(constants.COMMUNITY);
        if (hasItem1) {
          if (isOwner) {
            isOwner = tmp;
          }
          hasItem1 = isOwner;
        }
        tmp7 = hasItem1;
      }
      tmp3 = tmp7;
    }
    prop = tmp3;
  }
  return prop;
};
export { computeGuildRoleSubscriptionSettingsVisibility };
export const canSeeGuildRoleSubscriptionSettings = function canSeeGuildRoleSubscriptionSettings(guild) {
  return computeGuildRoleSubscriptionSettingsVisibility(guild) !== obj.NONE;
};
export { useGuildRoleSubscriptionSettingsVisibility };
export const getGuildRoleSubscriptionSettingsVisibility = function getGuildRoleSubscriptionSettingsVisibility(guild) {
  if (null == guild) {
    return obj.NONE;
  } else {
    const obj2 = { guild, isOwner: isGuildOwner(guild, UserStore.getCurrentUser()), canManageGuildRoleSubscriptions: null, isUserInCreatorMonetizationEligibleCountry: null, shouldRestrictUpdatingRoleSubscriptionSettings: null };
    let canResult = null != guild;
    if (canResult) {
      canResult = PermissionStore.can(constants2.ADMINISTRATOR, guild);
    }
    obj2.canManageGuildRoleSubscriptions = canResult;
    obj = CreatorMonetizationEligibilityExperimentUtils;
    obj2.isUserInCreatorMonetizationEligibleCountry = obj.isUserInCreatorMonetizationEligibleCountry();
    const features = guild.features;
    obj2.shouldRestrictUpdatingRoleSubscriptionSettings = features.has(constants.CREATOR_MONETIZABLE_RESTRICTED);
    return computeGuildRoleSubscriptionSettingsVisibility(obj2);
  }
};
export const useCanSeeGuildRoleSubscriptionSettings = function useCanSeeGuildRoleSubscriptionSettings(guild) {
  return useGuildRoleSubscriptionSettingsVisibility(guild) !== obj.NONE;
};
export const useCanManageGuildRoleSubscriptions = function useCanManageGuildRoleSubscriptions(guild) {
  _require = guild;
  const items = [PermissionStore];
  const items1 = [guild];
  return require("initialize").useStateFromStores(items, () => {
    let canResult = null != closure_0;
    if (canResult) {
      canResult = PermissionStore.can(constants2.ADMINISTRATOR, tmp);
    }
    return canResult;
  }, items1);
};
export const canManageGuildRoleSubscriptions = function canManageGuildRoleSubscriptions(stateFromStores) {
  let canResult = null != stateFromStores;
  if (canResult) {
    canResult = PermissionStore.can(constants2.ADMINISTRATOR, stateFromStores);
  }
  return canResult;
};