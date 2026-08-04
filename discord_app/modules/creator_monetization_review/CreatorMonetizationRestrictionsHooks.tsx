// discord_app/modules/creator_monetization_review/CreatorMonetizationRestrictionsHooks.tsx
import noop from "noop";
import makeGroupListingIndexSubscriptionListingTag from "makeGroupListingIndexSubscriptionListingTag";
import { FetchState } from "makeGroupListingIndexSubscriptionListingTag";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import ME from "ME";

let c9;
let metroImportAll;
const require = arg1;
({ EMPTY_STRING_SNOWFLAKE_ID: metroImportAll, GuildFeatures: c9 } = ME);
let result = require("createGuildRecordFromRust").fileFinishedImporting("modules/creator_monetization_review/CreatorMonetizationRestrictionsHooks.tsx");

export const useShouldHideGuildPurchaseEntryPoints = function useShouldHideGuildPurchaseEntryPoints(id2) {
  let has = id2;
  let obj = has(589);
  const items = [createGuildRecordFromRust];
  const items1 = [id2];
  has = obj.useStateFromStores(items, () => outer1_7.getGuild(has), items1);
  let importDefault;
  let id;
  const tmp3 = importDefault(12636)();
  importDefault = tmp3;
  const items2 = [has, tmp3];
  const effect = React.useEffect(() => {
    let hasItem = null != stateFromStores;
    if (hasItem) {
      const features = tmp.features;
      hasItem = features.has(outer1_9.CREATOR_MONETIZABLE_RESTRICTED);
    }
    if (hasItem) {
      hasItem = outer1_5.getMonetizationRestrictionsFetchState(tmp.id) === outer1_6.NOT_FETCHED;
    }
    if (hasItem) {
      let obj = id(outer1_3[5]);
      obj = { signal: null };
      obj[0] = c1;
      const monetizationRestrictions = obj.fetchMonetizationRestrictions(tmp.id, obj);
    }
  }, items2);
  id = undefined;
  if (has != null) {
    id = has.id;
  }
  let tmpResult = tmp(589);
  const items3 = [makeGroupListingIndexSubscriptionListingTag];
  const stateFromStoresArray = tmpResult.useStateFromStoresArray(items3, () => {
    let tmp2 = id;
    if (id == null) {
      tmp2 = outer1_8;
    }
    let monetizationRestrictions = outer1_5.getMonetizationRestrictions(tmp2);
    if (monetizationRestrictions == null) {
      monetizationRestrictions = [];
    }
    return monetizationRestrictions;
  });
  tmpResult = tmp(589);
  const items4 = [makeGroupListingIndexSubscriptionListingTag];
  const stateFromStores = tmpResult.useStateFromStores(items4, () => {
    let tmp2 = id;
    if (id == null) {
      tmp2 = outer1_8;
    }
    return outer1_5.getMonetizationRestrictionsFetchState(tmp2) === outer1_6.FETCHING;
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
    let hasItem2;
    if (has != null) {
      const features3 = has.features;
      hasItem2 = features3.has(constants.SOCIAL_LAYER_STOREFRONT);
    }
    hasItem = hasItem2;
  }
  if (!hasItem) {
    obj = { shouldHideGuildPurchaseEntryPoints: null, restrictionsLoading: null };
    obj[0] = tmp14;
    obj[1] = stateFromStores;
    return obj;
  } else if (stateFromStores) {
    let flag;
    if (has != null) {
      const features4 = has.features;
      has = features4.has;
      flag = has(constants.CREATOR_MONETIZABLE_RESTRICTED);
    }
    if (flag == null) {
      flag = true;
    }
    let result = flag;
  } else {
    result = tmp(3814).isRestrictedFromShowingGuildPurchaseEntryPoints(stateFromStoresArray);
    const tmpResult1 = tmp(3814);
  }
};
export const useShouldRestrictUpdatingCreatorMonetizationSettings = function useShouldRestrictUpdatingCreatorMonetizationSettings(guildId) {
  let stateFromStores = guildId;
  let obj = stateFromStores(589);
  const items = [createGuildRecordFromRust];
  const items1 = [guildId];
  stateFromStores = obj.useStateFromStores(items, () => outer1_7.getGuild(stateFromStores), items1);
  let importDefault;
  let id;
  const tmp4 = importDefault(12636)();
  importDefault = tmp4;
  const items2 = [stateFromStores, tmp4];
  const effect = React.useEffect(() => {
    let hasItem = null != stateFromStores;
    if (hasItem) {
      const features = tmp.features;
      hasItem = features.has(outer1_9.CREATOR_MONETIZABLE_RESTRICTED);
    }
    if (hasItem) {
      hasItem = outer1_5.getMonetizationRestrictionsFetchState(tmp.id) === outer1_6.NOT_FETCHED;
    }
    if (hasItem) {
      let obj = id(outer1_3[5]);
      obj = { signal: null };
      obj[0] = c1;
      const monetizationRestrictions = obj.fetchMonetizationRestrictions(tmp.id, obj);
    }
  }, items2);
  id = undefined;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  let tmpResult = tmp(589);
  const items3 = [makeGroupListingIndexSubscriptionListingTag];
  const stateFromStoresArray = tmpResult.useStateFromStoresArray(items3, () => {
    let tmp2 = id;
    if (id == null) {
      tmp2 = outer1_8;
    }
    let monetizationRestrictions = outer1_5.getMonetizationRestrictions(tmp2);
    if (monetizationRestrictions == null) {
      monetizationRestrictions = [];
    }
    return monetizationRestrictions;
  });
  tmpResult = tmp(589);
  const items4 = [makeGroupListingIndexSubscriptionListingTag];
  const stateFromStores1 = tmpResult.useStateFromStores(items4, () => {
    let tmp2 = id;
    if (id == null) {
      tmp2 = outer1_8;
    }
    return outer1_5.getMonetizationRestrictionsFetchState(tmp2) === outer1_6.FETCHING;
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
    result = tmp(3814).isRestrictedFromUpdatingCreatorMonetizationSettings(stateFromStoresArray);
    const tmpResult1 = tmp(3814);
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
  let obj = stateFromStores(589);
  const items = [createGuildRecordFromRust];
  const items1 = [id2];
  stateFromStores = obj.useStateFromStores(items, () => outer1_7.getGuild(stateFromStores), items1);
  let importDefault;
  let id;
  const tmp4 = importDefault(12636)();
  importDefault = tmp4;
  const items2 = [stateFromStores, tmp4];
  const effect = React.useEffect(() => {
    let hasItem = null != stateFromStores;
    if (hasItem) {
      const features = tmp.features;
      hasItem = features.has(outer1_9.CREATOR_MONETIZABLE_RESTRICTED);
    }
    if (hasItem) {
      hasItem = outer1_5.getMonetizationRestrictionsFetchState(tmp.id) === outer1_6.NOT_FETCHED;
    }
    if (hasItem) {
      let obj = id(outer1_3[5]);
      obj = { signal: null };
      obj[0] = c1;
      const monetizationRestrictions = obj.fetchMonetizationRestrictions(tmp.id, obj);
    }
  }, items2);
  id = undefined;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  let tmpResult = tmp(589);
  const items3 = [makeGroupListingIndexSubscriptionListingTag];
  const stateFromStoresArray = tmpResult.useStateFromStoresArray(items3, () => {
    let tmp2 = id;
    if (id == null) {
      tmp2 = outer1_8;
    }
    let monetizationRestrictions = outer1_5.getMonetizationRestrictions(tmp2);
    if (monetizationRestrictions == null) {
      monetizationRestrictions = [];
    }
    return monetizationRestrictions;
  });
  tmpResult = tmp(589);
  const items4 = [makeGroupListingIndexSubscriptionListingTag];
  obj = { isMonetizationReapplicationDisabled: null, restrictionsLoading: null };
  const stateFromStores1 = tmpResult.useStateFromStores(items4, () => {
    let tmp2 = id;
    if (id == null) {
      tmp2 = outer1_8;
    }
    return outer1_5.getMonetizationRestrictionsFetchState(tmp2) === outer1_6.FETCHING;
  });
  obj[0] = stateFromStores(3814).isRestrictedFromMonetizationReapplication(stateFromStoresArray);
  obj[1] = stateFromStores1;
  return obj;
};