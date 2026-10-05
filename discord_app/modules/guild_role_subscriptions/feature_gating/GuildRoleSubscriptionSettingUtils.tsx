// discord_app/modules/guild_role_subscriptions/feature_gating/GuildRoleSubscriptionSettingUtils.tsx
import GuildRecord from "../../../records/GuildRecord.tsx";
import CreatorMonetizationEligibilityExperimentUtils from "../../creator_monetization_eligibility/CreatorMonetizationEligibilityExperimentUtils.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import Constants from "../../../Constants.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, id;

let hasOwnProperty;
let metroRequire;
function computeGuildRoleSubscriptionSettingsVisibility(guild) {
  let NONE;
  let isOwner;
  let shouldRestrictUpdatingRoleSubscriptionSettings;
  const features = guild.guild.features;
  if (features.has(hasOwnProperty.CREATOR_MONETIZABLE_DISABLED)) {
    NONE = obj.NONE;
  } else {
    ({ guild, isOwner, shouldRestrictUpdatingRoleSubscriptionSettings } = guild);
    let prop = guild.canManageGuildRoleSubscriptions;
    if (prop) {
      if (shouldRestrictUpdatingRoleSubscriptionSettings) {
        shouldRestrictUpdatingRoleSubscriptionSettings = !isOwner;
      }
      let tmp4 = !shouldRestrictUpdatingRoleSubscriptionSettings;
      if (tmp4) {
        const features2 = guild.features;
        const hasItem = features2.has(hasOwnProperty.CREATOR_MONETIZABLE);
        let tmp6 = !hasItem;
        if (tmp6) {
          const features3 = guild.features;
          tmp6 = !features3.has(hasOwnProperty.CREATOR_MONETIZABLE_PROVISIONAL);
        }
        let tmp7 = !tmp6;
        if (tmp6) {
          const features4 = guild.features;
          let hasItem1 = features4.has(hasOwnProperty.COMMUNITY);
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
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (id) => {
      let NONE;
      let first;
      let tmp7;
      _require = id;
      const tmp = _require;
      const obj = require("react");
      const cResult = obj.c(9);
      const tmp4 = closure_10(id);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== id) {
        const fn = function u() {
          const tmp3 = null != id && isGuildOwner(tmp2, tmp);
          return tmp3;
        };
        cResult[1] = id;
        cResult[2] = fn;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
      const tmpResult3 = tmp(6764);
      const isUserInCreatorMonetizationEligibleCountry = tmpResult3.useIsUserInCreatorMonetizationEligibleCountry();
      id = undefined;
      const useShouldRestrictUpdatingCreatorMonetizationSettings =
        tmp(6756).useShouldRestrictUpdatingCreatorMonetizationSettings;
      tmp(6756);
      if (id != null) {
        id = id.id;
      }
      const shouldRestrictUpdatingCreatorMonetizationSettings =
        useShouldRestrictUpdatingCreatorMonetizationSettings(id).shouldRestrictUpdatingCreatorMonetizationSettings;
      if (null == id) {
        NONE = obj.NONE;
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
        const obj2 = {
          guild: id,
          isOwner: stateFromStores,
          canManageGuildRoleSubscriptions: tmp4,
          isUserInCreatorMonetizationEligibleCountry,
          shouldRestrictUpdatingRoleSubscriptionSettings: shouldRestrictUpdatingCreatorMonetizationSettings,
        };
        const tmp13 = computeGuildRoleSubscriptionSettingsVisibility(obj2);
        cResult[3] = tmp4;
        cResult[4] = id;
        cResult[5] = stateFromStores;
        cResult[6] = isUserInCreatorMonetizationEligibleCountry;
        cResult[7] = shouldRestrictUpdatingCreatorMonetizationSettings;
        cResult[8] = tmp13;
        NONE = tmp13;
      }
      return NONE;
    }
  : (id) => {
      let NONE;
      _require = id;
      const tmp = closure_10(id);
      const obj = require("get initialized");
      const items = [UserStore];
      const stateFromStores = obj.useStateFromStores(items, () => {
        const tmp3 = null != id && isGuildOwner(tmp2, tmp);
        return tmp3;
      });
      const obj2 = require("CreatorMonetizationEligibilityExperimentUtils");
      const isUserInCreatorMonetizationEligibleCountry = obj2.useIsUserInCreatorMonetizationEligibleCountry();
      require("CreatorMonetizationRestrictionsHooks");
      if (id != null) {
        id = id.id;
      }
      if (null == id) {
        NONE = obj.NONE;
      } else {
        const obj3 = {
          guild: id,
          isOwner: stateFromStores,
          canManageGuildRoleSubscriptions: tmp,
          isUserInCreatorMonetizationEligibleCountry,
          shouldRestrictUpdatingRoleSubscriptionSettings: tmp5,
        };
        NONE = computeGuildRoleSubscriptionSettingsVisibility(obj3);
      }
      return NONE;
    };
let closure_9 = tmp3;
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let tmp6;
      let tmp7;
      _require = arg0;
      const tmp = _require;
      const obj = require("react");
      const cResult = obj.c(4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [PermissionStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function s() {
          const canResult = null != closure_0 && PermissionStore.can(metroRequire.ADMINISTRATOR, tmp);
          return canResult;
        };
        const items1 = [arg0];
        cResult[1] = arg0;
        cResult[2] = fn;
        cResult[3] = items1;
        tmp7 = items1;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      const tmpResult = tmp(504);
      return tmpResult.useStateFromStores(first, tmp6, tmp7);
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      const items = [PermissionStore];
      const items1 = [arg0];
      const obj = require("get initialized");
      return obj.useStateFromStores(
        items,
        () => {
          const canResult = null != closure_0 && PermissionStore.can(metroRequire.ADMINISTRATOR, tmp);
          return canResult;
        },
        items1,
      );
    };
let closure_10 = tmp5;
function canSeeGuildRoleSubscriptionSettingsContent(canManageGuildRoleSubscriptions) {
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
    if (tmp3) {
      const features = guild.features;
      const hasItem = features.has(hasOwnProperty.CREATOR_MONETIZABLE);
      let tmp6 = !hasItem;
      if (tmp6) {
        const features2 = guild.features;
        tmp6 = !features2.has(hasOwnProperty.CREATOR_MONETIZABLE_PROVISIONAL);
      }
      let tmp7 = !tmp6;
      if (tmp6) {
        const features3 = guild.features;
        let hasItem1 = features3.has(hasOwnProperty.COMMUNITY);
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
  const canResult = null != stateFromStores && PermissionStore.can(metroRequire.ADMINISTRATOR, stateFromStores);
  return canResult;
}
let fn = (guild) => closure_9(guild) !== obj.NONE;
const result1 = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/feature_gating/GuildRoleSubscriptionSettingUtils.tsx",
);

export { GuildRoleSubscriptionSettingsVisibility };
export { canSeeGuildRoleSubscriptionSettingsContent };
export { computeGuildRoleSubscriptionSettingsVisibility };
export const canSeeGuildRoleSubscriptionSettings = function canSeeGuildRoleSubscriptionSettings(guild) {
  return computeGuildRoleSubscriptionSettingsVisibility(guild) !== obj.NONE;
};
export const useGuildRoleSubscriptionSettingsVisibility = tmp3;
export const getGuildRoleSubscriptionSettingsVisibility = function getGuildRoleSubscriptionSettingsVisibility(guild) {
  let canResult;
  let features;
  let obj;
  if (null == guild) {
    return obj.NONE;
  } else {
    const obj2 = {
      guild,
      isOwner: isGuildOwner(guild, UserStore.getCurrentUser()),
      canManageGuildRoleSubscriptions: canResult,
      isUserInCreatorMonetizationEligibleCountry: obj.isUserInCreatorMonetizationEligibleCountry(),
      shouldRestrictUpdatingRoleSubscriptionSettings: features.has(hasOwnProperty.CREATOR_MONETIZABLE_RESTRICTED),
    };
    canResult = null != guild && PermissionStore.can(metroRequire.ADMINISTRATOR, guild);
    obj = CreatorMonetizationEligibilityExperimentUtils;
    features = guild.features;
    return computeGuildRoleSubscriptionSettingsVisibility(obj2);
  }
};
export const useCanSeeGuildRoleSubscriptionSettings = fn;
export const useCanManageGuildRoleSubscriptions = tmp5;
export { canManageGuildRoleSubscriptions };
