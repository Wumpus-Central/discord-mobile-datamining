// discord_app/modules/guild_role_subscriptions/feature_gating/GuildRoleSubscriptionSettingUtils.tsx
import GuildRecord from "../../../records/GuildRecord.tsx";
import CreatorMonetizationEligibilityExperimentUtils from "../../creator_monetization_eligibility/CreatorMonetizationEligibilityExperimentUtils.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import Constants from "../../../Constants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
  _require = stateFromStores;
  closure_129_0 = stateFromStores;
  let obj = require("initialize");
  const items = [PermissionStore];
  const items1 = [stateFromStores];
  stateFromStores = obj.useStateFromStores(
    items,
    () => {
      let canResult = null != closure_0;
      if (canResult) {
        canResult = PermissionStore.can(constants2.ADMINISTRATOR, tmp);
      }
      return canResult;
    },
    items1,
  );
  const items2 = [UserStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items2, () => {
    let tmp3 = null != closure_0;
    if (tmp3) {
      tmp3 = isGuildOwner(tmp2, tmp);
    }
    return tmp3;
  });
  const obj2 = require("initialize");
  const isUserInCreatorMonetizationEligibleCountry =
    require("CreatorMonetizationEligibilityExperimentUtils").useIsUserInCreatorMonetizationEligibleCountry();
  require("CreatorMonetizationRestrictionsHooks");
  if (stateFromStores != null) {
    const id = stateFromStores.id;
  }
  if (null == stateFromStores) {
    let NONE = obj.NONE;
  } else {
    obj = {
      guild: stateFromStores,
      isOwner: stateFromStores1,
      canManageGuildRoleSubscriptions: stateFromStores,
      isUserInCreatorMonetizationEligibleCountry,
      shouldRestrictUpdatingRoleSubscriptionSettings: tmp5,
    };
    NONE = computeGuildRoleSubscriptionSettingsVisibility(obj);
  }
  return NONE;
}
const isGuildOwner = GuildRecord.isGuildOwner;
({ GuildFeatures: hasOwnProperty, Permissions: metroRequire } = Constants);
const GuildRoleSubscriptionSettingsVisibility = { NONE: 0, [0]: "NONE", VISIBLE: 1, [1]: "VISIBLE" };
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/feature_gating/GuildRoleSubscriptionSettingUtils.tsx",
);

export { GuildRoleSubscriptionSettingsVisibility };
export const canSeeGuildRoleSubscriptionSettingsContent = function canSeeGuildRoleSubscriptionSettingsContent(
  canManageGuildRoleSubscriptions,
) {
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
    obj = {
      guild,
      isOwner: isGuildOwner(guild, UserStore.getCurrentUser()),
      canManageGuildRoleSubscriptions: null,
      isUserInCreatorMonetizationEligibleCountry: null,
      shouldRestrictUpdatingRoleSubscriptionSettings: null,
    };
    let canResult = null != guild;
    if (canResult) {
      canResult = PermissionStore.can(constants2.ADMINISTRATOR, guild);
    }
    obj.canManageGuildRoleSubscriptions = canResult;
    obj = CreatorMonetizationEligibilityExperimentUtils;
    obj.isUserInCreatorMonetizationEligibleCountry = obj.isUserInCreatorMonetizationEligibleCountry();
    const features = guild.features;
    obj.shouldRestrictUpdatingRoleSubscriptionSettings = features.has(constants.CREATOR_MONETIZABLE_RESTRICTED);
    return computeGuildRoleSubscriptionSettingsVisibility(obj);
  }
};
export const useCanSeeGuildRoleSubscriptionSettings = function useCanSeeGuildRoleSubscriptionSettings(guild) {
  return useGuildRoleSubscriptionSettingsVisibility(guild) !== obj.NONE;
};
export const useCanManageGuildRoleSubscriptions = function useCanManageGuildRoleSubscriptions(guild) {
  _require = guild;
  const items = [PermissionStore];
  const items1 = [guild];
  return require("initialize").useStateFromStores(
    items,
    () => {
      let canResult = null != closure_0;
      if (canResult) {
        canResult = PermissionStore.can(constants2.ADMINISTRATOR, tmp);
      }
      return canResult;
    },
    items1,
  );
};
export const canManageGuildRoleSubscriptions = function canManageGuildRoleSubscriptions(stateFromStores) {
  let canResult = null != stateFromStores;
  if (canResult) {
    canResult = PermissionStore.can(constants2.ADMINISTRATOR, stateFromStores);
  }
  return canResult;
};
