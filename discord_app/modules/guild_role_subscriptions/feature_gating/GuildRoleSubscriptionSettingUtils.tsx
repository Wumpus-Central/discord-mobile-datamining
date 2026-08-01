// === Module 12641: computeGuildRoleSubscriptionSettingsVisibility ===

// Module 12641 (computeGuildRoleSubscriptionSettingsVisibility)
import { isGuildOwner } from "GuildNSFWContentLevel";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";

let c5;
let closure_6;
function computeGuildRoleSubscriptionSettingsVisibility(guild) {
  let isOwner;
  let shouldRestrictUpdatingRoleSubscriptionSettings;
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
        let hasItem = features2.has(tmp.CREATOR_MONETIZABLE);
        let tmp6 = !hasItem;
        if (!hasItem) {
          const features3 = guild.features;
          tmp6 = !features3.has(tmp.CREATOR_MONETIZABLE_PROVISIONAL);
        }
        let tmp7 = !tmp6;
        if (tmp6) {
          const features4 = guild.features;
          hasItem = features4.has(tmp.COMMUNITY);
          if (hasItem) {
            if (isOwner) {
              isOwner = tmp2;
            }
            hasItem = isOwner;
          }
          tmp7 = hasItem;
        }
        tmp4 = tmp7;
      }
      prop = tmp4;
    }
    NONE = prop ? tmp9.VISIBLE : tmp9.NONE;
  }
  return NONE;
}
function useGuildRoleSubscriptionSettingsVisibility(stateFromStores) {
  const _require = stateFromStores;
  let obj = _require(589);
  const items = [getUncachedChannelPermissions];
  const items1 = [stateFromStores];
  stateFromStores = obj.useStateFromStores(items, () => {
    let canResult = null != closure_0;
    if (canResult) {
      canResult = outer1_3.can(outer1_6.ADMINISTRATOR, tmp);
    }
    return canResult;
  }, items1);
  const items2 = [mergeGuildAvatar];
  const stateFromStores1 = _require(589).useStateFromStores(items2, () => {
    let tmp3 = null != closure_0;
    if (tmp3) {
      tmp3 = outer1_2(tmp2, tmp);
    }
    return tmp3;
  });
  const obj2 = _require(589);
  const isUserInCreatorMonetizationEligibleCountry = _require(12642).useIsUserInCreatorMonetizationEligibleCountry();
  _require(12635);
  if (stateFromStores != null) {
    const id = stateFromStores.id;
  }
  if (null == stateFromStores) {
    let NONE = obj.NONE;
  } else {
    obj = { guild: null, isOwner: null, canManageGuildRoleSubscriptions: null, isUserInCreatorMonetizationEligibleCountry: null, shouldRestrictUpdatingRoleSubscriptionSettings: null };
    obj[0] = stateFromStores;
    obj[1] = stateFromStores1;
    obj[2] = stateFromStores;
    obj[3] = isUserInCreatorMonetizationEligibleCountry;
    obj[4] = tmp5;
    NONE = computeGuildRoleSubscriptionSettingsVisibility(obj);
  }
  return NONE;
}
({ GuildFeatures: c5, Permissions: closure_6 } = ME);
let obj = { NONE: 0, [0]: "NONE", VISIBLE: 1, [1]: "VISIBLE" };
const result = require("mergeGuildAvatar").fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/GuildRoleSubscriptionSettingUtils.tsx");

export const GuildRoleSubscriptionSettingsVisibility = obj;
export const canSeeGuildRoleSubscriptionSettingsContent = function canSeeGuildRoleSubscriptionSettingsContent(canManageGuildRoleSubscriptions) {
  let guild;
  let isOwner;
  let shouldRestrictUpdatingRoleSubscriptionSettings;
  ({ guild, isOwner, shouldRestrictUpdatingRoleSubscriptionSettings } = canManageGuildRoleSubscriptions);
  let prop = canManageGuildRoleSubscriptions.canManageGuildRoleSubscriptions;
  if (prop) {
    if (shouldRestrictUpdatingRoleSubscriptionSettings) {
      shouldRestrictUpdatingRoleSubscriptionSettings = !isOwner;
    }
    let tmp3 = !shouldRestrictUpdatingRoleSubscriptionSettings;
    if (!shouldRestrictUpdatingRoleSubscriptionSettings) {
      const features = guild.features;
      let hasItem = features.has(constants.CREATOR_MONETIZABLE);
      let tmp6 = !hasItem;
      if (!hasItem) {
        const features2 = guild.features;
        tmp6 = !features2.has(tmp4.CREATOR_MONETIZABLE_PROVISIONAL);
      }
      let tmp7 = !tmp6;
      if (tmp6) {
        const features3 = guild.features;
        hasItem = features3.has(tmp4.COMMUNITY);
        if (hasItem) {
          if (isOwner) {
            isOwner = tmp;
          }
          hasItem = isOwner;
        }
        tmp7 = hasItem;
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
    obj = { guild: null, isOwner: null, canManageGuildRoleSubscriptions: null, isUserInCreatorMonetizationEligibleCountry: null, shouldRestrictUpdatingRoleSubscriptionSettings: null };
    obj[0] = guild;
    obj[1] = isGuildOwner(guild, currentUser.getCurrentUser());
    let canResult = null != guild;
    if (canResult) {
      canResult = getUncachedChannelPermissions.can(constants2.ADMINISTRATOR, guild);
    }
    obj[2] = canResult;
    obj = require(12642) /* set */;
    obj[3] = obj.isUserInCreatorMonetizationEligibleCountry();
    const features = guild.features;
    obj[4] = features.has(constants.CREATOR_MONETIZABLE_RESTRICTED);
    return computeGuildRoleSubscriptionSettingsVisibility(obj);
  }
};
export const useCanSeeGuildRoleSubscriptionSettings = function useCanSeeGuildRoleSubscriptionSettings(guild) {
  return useGuildRoleSubscriptionSettingsVisibility(guild) !== obj.NONE;
};
export const useCanManageGuildRoleSubscriptions = function useCanManageGuildRoleSubscriptions(guild) {
  const _require = guild;
  const items = [getUncachedChannelPermissions];
  const items1 = [guild];
  return _require(589).useStateFromStores(items, () => {
    let canResult = null != closure_0;
    if (canResult) {
      canResult = outer1_3.can(outer1_6.ADMINISTRATOR, tmp);
    }
    return canResult;
  }, items1);
};
export const canManageGuildRoleSubscriptions = function canManageGuildRoleSubscriptions(stateFromStores) {
  let canResult = null != stateFromStores;
  if (canResult) {
    canResult = getUncachedChannelPermissions.can(constants2.ADMINISTRATOR, stateFromStores);
  }
  return canResult;
};