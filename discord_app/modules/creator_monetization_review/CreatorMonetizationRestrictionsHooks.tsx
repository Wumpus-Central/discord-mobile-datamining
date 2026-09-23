// === Module 7581: CreatorMonetizationRestrictionsHooks ===

// Module 7581 (CreatorMonetizationRestrictionsHooks)
import useUnmountAbortSignalDefault from "useUnmountAbortSignal" /* 7582 */;
import GuildRoleSubscriptionsActionCreatorsAll from "GuildRoleSubscriptionsActionCreators" /* 7583 */;
import noop from "module_19" /* 19 */;
import GuildRoleSubscriptionsStore from "GuildRoleSubscriptionsStore" /* 4455 */;
import GuildStore from "GuildStore" /* 2064 */;

const require = globalThis.__r;

const require = fn;
const FetchState = fn(4455).FetchState;
const Constants = fn(1074);
({ EMPTY_STRING_SNOWFLAKE_ID: closure_8, GuildFeatures: closure_9 } = Constants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/creator_monetization_review/CreatorMonetizationRestrictionsHooks.tsx");

export const useShouldHideGuildPurchaseEntryPoints = function useShouldHideGuildPurchaseEntryPoints(id2) {
  _require = id2;
  const items = [GuildStore];
  const items1 = [id2];
  let has = require("initialize").useStateFromStores(items, () => GuildStore.getGuild(closure_0), items1);
  closure_129_0 = has;
  closure_129_2 = undefined;
  const tmp3 = useUnmountAbortSignalDefault();
  closure_129_1 = tmp3;
  const items2 = [has, tmp3];
  const effect = noop.useEffect(() => {
    let hasItem = null != id2;
    if (hasItem) {
      const features = id2.features;
      hasItem = features.has(constants.CREATOR_MONETIZABLE_RESTRICTED);
    }
    if (hasItem) {
      hasItem = GuildRoleSubscriptionsStore.getMonetizationRestrictionsFetchState(id2.id) === FetchState.NOT_FETCHED;
    }
    if (hasItem) {
      const obj2 = { signal };
      const monetizationRestrictions = GuildRoleSubscriptionsActionCreatorsAll.fetchMonetizationRestrictions(id2.id, obj2);
    }
  }, items2);
  let id;
  if (has != null) {
    id = has.id;
  }
  closure_129_2 = id;
  const obj = require("initialize");
  const items3 = [GuildRoleSubscriptionsStore];
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(items3, () => {
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
  const tmpResult = require("initialize");
  const items4 = [GuildRoleSubscriptionsStore];
  const stateFromStores = require("initialize").useStateFromStores(items4, () => {
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
    const obj2 = { shouldHideGuildPurchaseEntryPoints: tmp12, restrictionsLoading: stateFromStores };
    return obj2;
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
    result = tmp(4454).isRestrictedFromShowingGuildPurchaseEntryPoints(stateFromStoresArray);
    const tmpResult4 = tmp(4454);
  }
  const tmpResult3 = require("initialize");
};
export const useShouldRestrictUpdatingCreatorMonetizationSettings = function useShouldRestrictUpdatingCreatorMonetizationSettings(guildId) {
  _require = guildId;
  const items = [GuildStore];
  const items1 = [guildId];
  const stateFromStores = require("initialize").useStateFromStores(items, () => GuildStore.getGuild(closure_0), items1);
  closure_129_0 = stateFromStores;
  closure_129_2 = undefined;
  const tmp4 = useUnmountAbortSignalDefault();
  closure_129_1 = tmp4;
  const items2 = [stateFromStores, tmp4];
  const effect = noop.useEffect(() => {
    let hasItem = null != id2;
    if (hasItem) {
      const features = id2.features;
      hasItem = features.has(constants.CREATOR_MONETIZABLE_RESTRICTED);
    }
    if (hasItem) {
      hasItem = GuildRoleSubscriptionsStore.getMonetizationRestrictionsFetchState(id2.id) === FetchState.NOT_FETCHED;
    }
    if (hasItem) {
      const obj2 = { signal };
      const monetizationRestrictions = GuildRoleSubscriptionsActionCreatorsAll.fetchMonetizationRestrictions(id2.id, obj2);
    }
  }, items2);
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  closure_129_2 = id;
  const obj = require("initialize");
  const items3 = [GuildRoleSubscriptionsStore];
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(items3, () => {
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
  const tmpResult = require("initialize");
  const items4 = [GuildRoleSubscriptionsStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items4, () => {
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
    result = tmp(4454).isRestrictedFromUpdatingCreatorMonetizationSettings(stateFromStoresArray);
    const tmpResult4 = tmp(4454);
  }
  if (stateFromStores != null) {
    const features2 = stateFromStores.features;
    const hasItem = features2.has(constants.CREATOR_MONETIZABLE_PENDING_NEW_OWNER_ONBOARDING);
  }
  let tmp13 = result;
  if (!result) {
    tmp13 = hasItem;
  }
  return { shouldRestrictUpdatingCreatorMonetizationSettings: tmp13, allowSelfRemoveMonetization: !result, restrictionsLoading: stateFromStores1 };
};
export const useIsMonetizationReapplicationDisabled = function useIsMonetizationReapplicationDisabled(id2) {
  _require = id2;
  const items = [GuildStore];
  const items1 = [id2];
  const stateFromStores = require("initialize").useStateFromStores(items, () => GuildStore.getGuild(closure_0), items1);
  closure_129_0 = stateFromStores;
  closure_129_2 = undefined;
  const tmp4 = useUnmountAbortSignalDefault();
  closure_129_1 = tmp4;
  const items2 = [stateFromStores, tmp4];
  const effect = noop.useEffect(() => {
    let hasItem = null != id2;
    if (hasItem) {
      const features = id2.features;
      hasItem = features.has(constants.CREATOR_MONETIZABLE_RESTRICTED);
    }
    if (hasItem) {
      hasItem = GuildRoleSubscriptionsStore.getMonetizationRestrictionsFetchState(id2.id) === FetchState.NOT_FETCHED;
    }
    if (hasItem) {
      const obj2 = { signal };
      const monetizationRestrictions = GuildRoleSubscriptionsActionCreatorsAll.fetchMonetizationRestrictions(id2.id, obj2);
    }
  }, items2);
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  closure_129_2 = id;
  let obj = require("initialize");
  const items3 = [GuildRoleSubscriptionsStore];
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(items3, () => {
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
  const tmpResult = require("initialize");
  const items4 = [GuildRoleSubscriptionsStore];
  let obj2 = { isMonetizationReapplicationDisabled: null, restrictionsLoading: null };
  const stateFromStores1 = require("initialize").useStateFromStores(items4, () => {
    let tmp2 = importAll;
    if (importAll == null) {
      tmp2 = React6;
    }
    return GuildRoleSubscriptionsStore.getMonetizationRestrictionsFetchState(tmp2) === FetchState.FETCHING;
  });
  const tmpResult3 = require("initialize");
  obj2.isMonetizationReapplicationDisabled = require("CreatorMonetizationRestrictionsUtils").isRestrictedFromMonetizationReapplication(stateFromStoresArray);
  obj2.restrictionsLoading = stateFromStores1;
  return obj2;
};