// === Module 7253: CreatorMonetizationRestrictionsHooks ===

// Module 7253 (CreatorMonetizationRestrictionsHooks)
import useUnmountAbortSignalDefault from "useUnmountAbortSignal" /* 7254 */;
import GuildRoleSubscriptionsActionCreatorsAll from "GuildRoleSubscriptionsActionCreators" /* 7255 */;
import noop from "module_19" /* 19 */;
import GuildRoleSubscriptionsStore from "GuildRoleSubscriptionsStore" /* 4193 */;
import GuildStore from "GuildStore" /* 1979 */;

const require = fn;
const FetchState = fn(4193).FetchState;
const Constants = fn(1074);
({ EMPTY_STRING_SNOWFLAKE_ID: closure_8, GuildFeatures: closure_9 } = Constants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/creator_monetization_review/CreatorMonetizationRestrictionsHooks.tsx");

export const useShouldHideGuildPurchaseEntryPoints = function useShouldHideGuildPurchaseEntryPoints(id2) {
  _require = id2;
  let obj = require("initialize");
  const items = [GuildStore];
  const items1 = [id2];
  let has = obj.useStateFromStores(items, () => GuildStore.getGuild(closure_0), items1);
  closure_129_0 = has;
  closure_129_2 = undefined;
  const tmp3 = useUnmountAbortSignalDefault();
  closure_129_1 = tmp3;
  const items2 = [has, tmp3];
  const effect = noop.useEffect(() => {
    let hasItem = null != closure_0;
    if (hasItem) {
      const features = tmp.features;
      hasItem = features.has(constants.CREATOR_MONETIZABLE_RESTRICTED);
    }
    if (hasItem) {
      hasItem = GuildRoleSubscriptionsStore.getMonetizationRestrictionsFetchState(tmp.id) === FetchState.NOT_FETCHED;
    }
    if (hasItem) {
      const obj = { signal };
      const monetizationRestrictions = obj.fetchMonetizationRestrictions(tmp.id, obj);
    }
  }, items2);
  let id;
  if (has != null) {
    id = has.id;
  }
  closure_129_2 = id;
  let tmpResult = tmp(504);
  const items3 = [GuildRoleSubscriptionsStore];
  const stateFromStoresArray = tmpResult.useStateFromStoresArray(items3, () => {
    let tmp2 = importAll;
    if (importAll == null) {
      tmp2 = React6;
    }
    let monetizationRestrictions = GuildRoleSubscriptionsStore.getMonetizationRestrictions(tmp2);
    if (monetizationRestrictions == null) {
      monetizationRestrictions = [];
    }
    return monetizationRestrictions;
  });
  tmpResult = tmp(504);
  const items4 = [GuildRoleSubscriptionsStore];
  const stateFromStores = tmpResult.useStateFromStores(items4, () => {
    let tmp2 = importAll;
    if (importAll == null) {
      tmp2 = React6;
    }
    return GuildRoleSubscriptionsStore.getMonetizationRestrictionsFetchState(tmp2) === FetchState.FETCHING;
  });
  let hasItem;
  if (has != null) {
    const features = has.features;
    hasItem = features.has(constants.CREATOR_MONETIZABLE);
  }
  if (!hasItem) {
    let hasItem1;
    if (has != null) {
      const features2 = has.features;
      hasItem1 = features2.has(constants.CREATOR_MONETIZABLE_PROVISIONAL);
    }
    hasItem = hasItem1;
  }
  if (!hasItem) {
    obj = { shouldHideGuildPurchaseEntryPoints: tmp12, restrictionsLoading: stateFromStores };
    return obj;
  } else if (stateFromStores) {
    let flag;
    if (has != null) {
      const features3 = has.features;
      has = features3.has;
      flag = has(constants.CREATOR_MONETIZABLE_RESTRICTED);
    }
    if (flag == null) {
      flag = true;
    }
    let result = flag;
  } else {
    result = tmp(4192).isRestrictedFromShowingGuildPurchaseEntryPoints(stateFromStoresArray);
    const tmpResult1 = tmp(4192);
  }
};
export const useShouldRestrictUpdatingCreatorMonetizationSettings = function useShouldRestrictUpdatingCreatorMonetizationSettings(guildId) {
  _require = guildId;
  let obj = require("initialize");
  const items = [GuildStore];
  const items1 = [guildId];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(closure_0), items1);
  closure_129_0 = stateFromStores;
  closure_129_2 = undefined;
  const tmp4 = useUnmountAbortSignalDefault();
  closure_129_1 = tmp4;
  const items2 = [stateFromStores, tmp4];
  const effect = noop.useEffect(() => {
    let hasItem = null != closure_0;
    if (hasItem) {
      const features = tmp.features;
      hasItem = features.has(constants.CREATOR_MONETIZABLE_RESTRICTED);
    }
    if (hasItem) {
      hasItem = GuildRoleSubscriptionsStore.getMonetizationRestrictionsFetchState(tmp.id) === FetchState.NOT_FETCHED;
    }
    if (hasItem) {
      const obj = { signal };
      const monetizationRestrictions = obj.fetchMonetizationRestrictions(tmp.id, obj);
    }
  }, items2);
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  closure_129_2 = id;
  let tmpResult = tmp(504);
  const items3 = [GuildRoleSubscriptionsStore];
  const stateFromStoresArray = tmpResult.useStateFromStoresArray(items3, () => {
    let tmp2 = importAll;
    if (importAll == null) {
      tmp2 = React6;
    }
    let monetizationRestrictions = GuildRoleSubscriptionsStore.getMonetizationRestrictions(tmp2);
    if (monetizationRestrictions == null) {
      monetizationRestrictions = [];
    }
    return monetizationRestrictions;
  });
  tmpResult = tmp(504);
  const items4 = [GuildRoleSubscriptionsStore];
  const stateFromStores1 = tmpResult.useStateFromStores(items4, () => {
    let tmp2 = importAll;
    if (importAll == null) {
      tmp2 = React6;
    }
    return GuildRoleSubscriptionsStore.getMonetizationRestrictionsFetchState(tmp2) === FetchState.FETCHING;
  });
  if (stateFromStores1) {
    let flag;
    if (stateFromStores != null) {
      const features = stateFromStores.features;
      flag = features.has(constants.CREATOR_MONETIZABLE_RESTRICTED);
    }
    if (flag == null) {
      flag = true;
    }
    let result = flag;
  } else {
    result = tmp(4192).isRestrictedFromUpdatingCreatorMonetizationSettings(stateFromStoresArray);
    const tmpResult1 = tmp(4192);
  }
  if (stateFromStores != null) {
    const features2 = stateFromStores.features;
    const hasItem = features2.has(constants.CREATOR_MONETIZABLE_PENDING_NEW_OWNER_ONBOARDING);
  }
  let tmp13 = result;
  if (!result) {
    tmp13 = hasItem;
  }
  obj = { shouldRestrictUpdatingCreatorMonetizationSettings: tmp13, allowSelfRemoveMonetization: !result, restrictionsLoading: stateFromStores1 };
  return obj;
};
export const useIsMonetizationReapplicationDisabled = function useIsMonetizationReapplicationDisabled(id2) {
  _require = id2;
  let obj = require("initialize");
  const items = [GuildStore];
  const items1 = [id2];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(closure_0), items1);
  closure_129_0 = stateFromStores;
  closure_129_2 = undefined;
  const tmp4 = useUnmountAbortSignalDefault();
  closure_129_1 = tmp4;
  const items2 = [stateFromStores, tmp4];
  const effect = noop.useEffect(() => {
    let hasItem = null != closure_0;
    if (hasItem) {
      const features = tmp.features;
      hasItem = features.has(constants.CREATOR_MONETIZABLE_RESTRICTED);
    }
    if (hasItem) {
      hasItem = GuildRoleSubscriptionsStore.getMonetizationRestrictionsFetchState(tmp.id) === FetchState.NOT_FETCHED;
    }
    if (hasItem) {
      const obj = { signal };
      const monetizationRestrictions = obj.fetchMonetizationRestrictions(tmp.id, obj);
    }
  }, items2);
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  closure_129_2 = id;
  let tmpResult = tmp(504);
  const items3 = [GuildRoleSubscriptionsStore];
  const stateFromStoresArray = tmpResult.useStateFromStoresArray(items3, () => {
    let tmp2 = importAll;
    if (importAll == null) {
      tmp2 = React6;
    }
    let monetizationRestrictions = GuildRoleSubscriptionsStore.getMonetizationRestrictions(tmp2);
    if (monetizationRestrictions == null) {
      monetizationRestrictions = [];
    }
    return monetizationRestrictions;
  });
  tmpResult = tmp(504);
  const items4 = [GuildRoleSubscriptionsStore];
  obj = { isMonetizationReapplicationDisabled: null, restrictionsLoading: null };
  const stateFromStores1 = tmpResult.useStateFromStores(items4, () => {
    let tmp2 = importAll;
    if (importAll == null) {
      tmp2 = React6;
    }
    return GuildRoleSubscriptionsStore.getMonetizationRestrictionsFetchState(tmp2) === FetchState.FETCHING;
  });
  obj.isMonetizationReapplicationDisabled = require("CreatorMonetizationRestrictionsUtils").isRestrictedFromMonetizationReapplication(stateFromStoresArray);
  obj.restrictionsLoading = stateFromStores1;
  return obj;
};