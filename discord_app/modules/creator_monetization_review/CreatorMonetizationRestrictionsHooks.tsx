// === Module 7253: useShouldHideGuildPurchaseEntryPoints ===

// Module 7253 (useShouldHideGuildPurchaseEntryPoints)
import useUnmountAbortSignalDefault from "useUnmountAbortSignal" /* 7254 */;
import closure_4 from "noop" /* 19 */;
import closure_5 from "makeGroupListingIndexSubscriptionListingTag" /* 4193 */;
import { FetchState } from "makeGroupListingIndexSubscriptionListingTag" /* 4193 */;
import closure_7 from "createGuildRecordFromRust" /* 1979 */;
import ME from "ME" /* 1074 */;

const require = arg1;
({ EMPTY_STRING_SNOWFLAKE_ID: closure_8, GuildFeatures: c9 } = ME);
let result = require("set").fileFinishedImporting("modules/creator_monetization_review/CreatorMonetizationRestrictionsHooks.tsx");

export const useShouldHideGuildPurchaseEntryPoints = function useShouldHideGuildPurchaseEntryPoints(id2) {
  let has = id2;
  let obj = has(504);
  const items = [closure_7];
  const items1 = [id2];
  has = obj.useStateFromStores(items, () => closure_1_7.getGuild(has), items1);
  importDefault = undefined;
  let id;
  const tmp3 = useUnmountAbortSignalDefault();
  importDefault = tmp3;
  const items2 = [has, tmp3];
  const effect = React.useEffect(() => {
    let hasItem = null != stateFromStores;
    if (hasItem) {
      const features = tmp.features;
      hasItem = features.has(closure_1_9.CREATOR_MONETIZABLE_RESTRICTED);
    }
    if (hasItem) {
      hasItem = closure_1_5.getMonetizationRestrictionsFetchState(tmp.id) === closure_1_6.NOT_FETCHED;
    }
    if (hasItem) {
      let obj = id(closure_1_3[5]);
      obj = { signal: null };
      obj[0] = closure_1;
      const monetizationRestrictions = obj.fetchMonetizationRestrictions(tmp.id, obj);
    }
  }, items2);
  id = undefined;
  if (has != null) {
    id = has.id;
  }
  let tmpResult = tmp(504);
  const items3 = [closure_5];
  const stateFromStoresArray = tmpResult.useStateFromStoresArray(items3, () => {
    let tmp2 = id;
    if (id == null) {
      tmp2 = closure_1_8;
    }
    let monetizationRestrictions = closure_1_5.getMonetizationRestrictions(tmp2);
    if (monetizationRestrictions == null) {
      monetizationRestrictions = [];
    }
    return monetizationRestrictions;
  });
  tmpResult = tmp(504);
  const items4 = [closure_5];
  const stateFromStores = tmpResult.useStateFromStores(items4, () => {
    let tmp2 = id;
    if (id == null) {
      tmp2 = closure_1_8;
    }
    return closure_1_5.getMonetizationRestrictionsFetchState(tmp2) === closure_1_6.FETCHING;
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
    obj = { shouldHideGuildPurchaseEntryPoints: null, restrictionsLoading: null };
    obj[0] = tmp12;
    obj[1] = stateFromStores;
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
  let stateFromStores = guildId;
  let obj = stateFromStores(504);
  const items = [closure_7];
  const items1 = [guildId];
  stateFromStores = obj.useStateFromStores(items, () => closure_1_7.getGuild(stateFromStores), items1);
  importDefault = undefined;
  let id;
  const tmp4 = useUnmountAbortSignalDefault();
  importDefault = tmp4;
  const items2 = [stateFromStores, tmp4];
  const effect = React.useEffect(() => {
    let hasItem = null != stateFromStores;
    if (hasItem) {
      const features = tmp.features;
      hasItem = features.has(closure_1_9.CREATOR_MONETIZABLE_RESTRICTED);
    }
    if (hasItem) {
      hasItem = closure_1_5.getMonetizationRestrictionsFetchState(tmp.id) === closure_1_6.NOT_FETCHED;
    }
    if (hasItem) {
      let obj = id(closure_1_3[5]);
      obj = { signal: null };
      obj[0] = closure_1;
      const monetizationRestrictions = obj.fetchMonetizationRestrictions(tmp.id, obj);
    }
  }, items2);
  id = undefined;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  let tmpResult = tmp(504);
  const items3 = [closure_5];
  const stateFromStoresArray = tmpResult.useStateFromStoresArray(items3, () => {
    let tmp2 = id;
    if (id == null) {
      tmp2 = closure_1_8;
    }
    let monetizationRestrictions = closure_1_5.getMonetizationRestrictions(tmp2);
    if (monetizationRestrictions == null) {
      monetizationRestrictions = [];
    }
    return monetizationRestrictions;
  });
  tmpResult = tmp(504);
  const items4 = [closure_5];
  const stateFromStores1 = tmpResult.useStateFromStores(items4, () => {
    let tmp2 = id;
    if (id == null) {
      tmp2 = closure_1_8;
    }
    return closure_1_5.getMonetizationRestrictionsFetchState(tmp2) === closure_1_6.FETCHING;
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
  let stateFromStores = id2;
  let obj = stateFromStores(504);
  const items = [closure_7];
  const items1 = [id2];
  stateFromStores = obj.useStateFromStores(items, () => closure_1_7.getGuild(stateFromStores), items1);
  importDefault = undefined;
  let id;
  const tmp4 = useUnmountAbortSignalDefault();
  importDefault = tmp4;
  const items2 = [stateFromStores, tmp4];
  const effect = React.useEffect(() => {
    let hasItem = null != stateFromStores;
    if (hasItem) {
      const features = tmp.features;
      hasItem = features.has(closure_1_9.CREATOR_MONETIZABLE_RESTRICTED);
    }
    if (hasItem) {
      hasItem = closure_1_5.getMonetizationRestrictionsFetchState(tmp.id) === closure_1_6.NOT_FETCHED;
    }
    if (hasItem) {
      let obj = id(closure_1_3[5]);
      obj = { signal: null };
      obj[0] = closure_1;
      const monetizationRestrictions = obj.fetchMonetizationRestrictions(tmp.id, obj);
    }
  }, items2);
  id = undefined;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  let tmpResult = tmp(504);
  const items3 = [closure_5];
  const stateFromStoresArray = tmpResult.useStateFromStoresArray(items3, () => {
    let tmp2 = id;
    if (id == null) {
      tmp2 = closure_1_8;
    }
    let monetizationRestrictions = closure_1_5.getMonetizationRestrictions(tmp2);
    if (monetizationRestrictions == null) {
      monetizationRestrictions = [];
    }
    return monetizationRestrictions;
  });
  tmpResult = tmp(504);
  const items4 = [closure_5];
  obj = { isMonetizationReapplicationDisabled: null, restrictionsLoading: null };
  const stateFromStores1 = tmpResult.useStateFromStores(items4, () => {
    let tmp2 = id;
    if (id == null) {
      tmp2 = closure_1_8;
    }
    return closure_1_5.getMonetizationRestrictionsFetchState(tmp2) === closure_1_6.FETCHING;
  });
  obj[0] = stateFromStores(4192).isRestrictedFromMonetizationReapplication(stateFromStoresArray);
  obj[1] = stateFromStores1;
  return obj;
};