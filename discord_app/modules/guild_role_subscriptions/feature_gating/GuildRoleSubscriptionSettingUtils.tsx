// === Module 6949: GuildRoleSubscriptionSettingUtils ===

// Module 6949 (GuildRoleSubscriptionSettingUtils)
import GuildRecord from "GuildRecord" /* 2082 */;
import CreatorMonetizationEligibilityExperimentUtils from "CreatorMonetizationEligibilityExperimentUtils" /* 6950 */;
import PermissionStore from "PermissionStore" /* 4707 */;
import UserStore from "UserStore" /* 1389 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
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
const isGuildOwner = GuildRecord.isGuildOwner;
({ GuildFeatures: hasOwnProperty, Permissions: metroRequire } = Constants);
const GuildRoleSubscriptionSettingsVisibility = { NONE: 0, [0]: "NONE", VISIBLE: 1, [1]: "VISIBLE" };
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGuildRoleSubscriptionSettingsVisibility(id) {
  _require = id;
  const obj = require("c");
  const cResult = obj.c(9);
  const tmp4 = closure_10(id);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== id) {
    const fn = function u() {
      let tmp3 = null != closure_0;
      if (tmp3) {
        tmp3 = isGuildOwner(tmp2, tmp);
      }
      return tmp3;
    };
    cResult[1] = id;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const stateFromStores = require("initialize").useStateFromStores(first, tmp7);
  const tmpResult = require("initialize");
  const isUserInCreatorMonetizationEligibleCountry = require("CreatorMonetizationEligibilityExperimentUtils").useIsUserInCreatorMonetizationEligibleCountry();
  const tmpResult3 = require("CreatorMonetizationEligibilityExperimentUtils");
  id = undefined;
  if (id != null) {
    id = id.id;
  }
  const shouldRestrictUpdatingCreatorMonetizationSettings = require("CreatorMonetizationRestrictionsHooks").useShouldRestrictUpdatingCreatorMonetizationSettings(id).shouldRestrictUpdatingCreatorMonetizationSettings;
  if (null == id) {
    let NONE = obj.NONE;
  } else {
    if (cResult[3] === tmp4) {
      if (cResult[4] === id) {
        if (cResult[5] === stateFromStores) {
          if (cResult[6] === isUserInCreatorMonetizationEligibleCountry) {
            if (cResult[7] === shouldRestrictUpdatingCreatorMonetizationSettings) {
              NONE = cResult[8];
            }
          }
        }
      }
    }
    const obj2 = { guild: id, isOwner: stateFromStores, canManageGuildRoleSubscriptions: tmp4, isUserInCreatorMonetizationEligibleCountry, shouldRestrictUpdatingRoleSubscriptionSettings: shouldRestrictUpdatingCreatorMonetizationSettings };
    const tmp12 = computeGuildRoleSubscriptionSettingsVisibility(obj2);
    cResult[3] = tmp4;
    cResult[4] = id;
    cResult[5] = stateFromStores;
    cResult[6] = isUserInCreatorMonetizationEligibleCountry;
    cResult[7] = shouldRestrictUpdatingCreatorMonetizationSettings;
    cResult[8] = tmp12;
    NONE = tmp12;
  }
  return NONE;
}) : (function useGuildRoleSubscriptionSettingsVisibility(id) {
  _require = id;
  const obj = require("initialize");
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let tmp3 = null != closure_0;
    if (tmp3) {
      tmp3 = isGuildOwner(tmp2, tmp);
    }
    return tmp3;
  });
  const tmp = closure_10(id);
  const isUserInCreatorMonetizationEligibleCountry = require("CreatorMonetizationEligibilityExperimentUtils").useIsUserInCreatorMonetizationEligibleCountry();
  require("CreatorMonetizationRestrictionsHooks");
  if (id != null) {
    id = id.id;
  }
  if (null == id) {
    let NONE = obj.NONE;
  } else {
    const obj3 = { guild: id, isOwner: stateFromStores, canManageGuildRoleSubscriptions: tmp, isUserInCreatorMonetizationEligibleCountry, shouldRestrictUpdatingRoleSubscriptionSettings: tmp5 };
    NONE = computeGuildRoleSubscriptionSettingsVisibility(obj3);
  }
  return NONE;
});
let closure_9 = tmp3;
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCanManageGuildRoleSubscriptions(arg0) {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      let canResult = null != closure_0;
      if (canResult) {
        canResult = PermissionStore.can(constants2.ADMINISTRATOR, tmp);
      }
      return canResult;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp6, tmp7);
}) : (function useCanManageGuildRoleSubscriptions(arg0) {
  _require = arg0;
  const items = [PermissionStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    let canResult = null != closure_0;
    if (canResult) {
      canResult = PermissionStore.can(constants2.ADMINISTRATOR, tmp);
    }
    return canResult;
  }, items1);
});
let closure_10 = tmp5;
function canSeeGuildRoleSubscriptionSettingsContent(canManageGuildRoleSubscriptions) {
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
}
function canManageGuildRoleSubscriptions(stateFromStores) {
  let canResult = null != stateFromStores;
  if (canResult) {
    canResult = PermissionStore.can(constants2.ADMINISTRATOR, stateFromStores);
  }
  return canResult;
}
function useCanSeeGuildRoleSubscriptionSettings(guild) {
  return closure_9(guild) !== obj.NONE;
}
const result1 = size.fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/GuildRoleSubscriptionSettingUtils.tsx");

export { GuildRoleSubscriptionSettingsVisibility };
export { canSeeGuildRoleSubscriptionSettingsContent };
export { computeGuildRoleSubscriptionSettingsVisibility };
export const canSeeGuildRoleSubscriptionSettings = function canSeeGuildRoleSubscriptionSettings(guild) {
  return computeGuildRoleSubscriptionSettingsVisibility(guild) !== obj.NONE;
};
export const useGuildRoleSubscriptionSettingsVisibility = tmp3;
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
export { useCanSeeGuildRoleSubscriptionSettings };
export const useCanManageGuildRoleSubscriptions = tmp5;
export { canManageGuildRoleSubscriptions };