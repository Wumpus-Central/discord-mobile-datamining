// === Module 6955: CreatorMonetizationRestrictionsHooks ===

// Module 6955 (CreatorMonetizationRestrictionsHooks)
import useUnmountAbortSignalDefault from "useUnmountAbortSignal" /* 6956 */;
import GuildRoleSubscriptionsActionCreatorsAll from "GuildRoleSubscriptionsActionCreators" /* 6957 */;
import noop from "module_19" /* 19 */;
import GuildRoleSubscriptionsStore from "GuildRoleSubscriptionsStore" /* 4743 */;
import GuildStore from "GuildStore" /* 2087 */;

const require = globalThis.__r;

const require = fn;
const FetchState = fn(4743).FetchState;
const Constants = fn(1085);
({ EMPTY_STRING_SNOWFLAKE_ID: closure_8, GuildFeatures: closure_9 } = Constants);
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCreatorMonetizationRestrictions(id) {
  _require = id;
  const cResult = require("c").c(13);
  const tmp4 = useUnmountAbortSignalDefault();
  importDefault = tmp4;
  if (cResult[0] === tmp4) {
    if (cResult[1] === id) {
      let tmp5 = cResult[2];
      let tmp6 = cResult[3];
    }
    const effect = noop.useEffect(tmp5, tmp6);
    id = undefined;
    if (id != null) {
      id = id.id;
    }
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [GuildRoleSubscriptionsStore];
      cResult[4] = items;
      let tmp12 = items;
    } else {
      tmp12 = cResult[4];
    }
    if (cResult[5] !== id) {
      const fn2 = function f() {
        let tmp2 = id;
        if (id == null) {
          tmp2 = closure_2_8;
        }
        let monetizationRestrictions = GuildRoleSubscriptionsStore.getMonetizationRestrictions(tmp2);
        if (monetizationRestrictions == null) {
          monetizationRestrictions = [];
        }
        return monetizationRestrictions;
      };
      cResult[5] = id;
      cResult[6] = fn2;
      let tmp14 = fn2;
    } else {
      tmp14 = cResult[6];
    }
    const stateFromStoresArray = tmp(504).useStateFromStoresArray(tmp12, tmp14);
    const _Symbol2 = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [GuildRoleSubscriptionsStore];
      cResult[7] = items1;
      let tmp16 = items1;
    } else {
      tmp16 = cResult[7];
    }
    if (cResult[8] !== id) {
      class M {
        constructor() {
          tmp2 = id;
          tmp = closure_5;
          if (id == null) {
            tmp2 = EMPTY_STRING_SNOWFLAKE_ID;
          }
          return closure_5.getMonetizationRestrictionsFetchState(tmp2) === FetchState.FETCHING;
        }
      }
      cResult[8] = id;
      cResult[9] = M;
    } else {
      class M {
        constructor() {
          tmp2 = id;
          tmp = closure_5;
          if (id == null) {
            tmp2 = EMPTY_STRING_SNOWFLAKE_ID;
          }
          return closure_5.getMonetizationRestrictionsFetchState(tmp2) === FetchState.FETCHING;
        }
      }
    }
    const tmpResult = tmp(504);
    const stateFromStores = tmp(504).useStateFromStores(tmp16, M);
    if (cResult[10] === stateFromStoresArray) {
      class M {
        constructor() {
          tmp2 = id;
          tmp = closure_5;
          if (id == null) {
            tmp2 = EMPTY_STRING_SNOWFLAKE_ID;
          }
          return closure_5.getMonetizationRestrictionsFetchState(tmp2) === FetchState.FETCHING;
        }
      }
      return tmp20;
    }
    let obj2 = { restrictions: stateFromStoresArray, restrictionsLoading: stateFromStores };
    cResult[10] = stateFromStoresArray;
    cResult[11] = stateFromStores;
    cResult[12] = obj2;
    tmp20 = obj2;
    const tmpResult2 = tmp(504);
  }
  const fn = function c() {
    let hasItem = null != user;
    if (hasItem) {
      const features = user.features;
      hasItem = features.has(constants.CREATOR_MONETIZABLE_RESTRICTED);
    }
    if (hasItem) {
      hasItem = GuildRoleSubscriptionsStore.getMonetizationRestrictionsFetchState(user.id) === FetchState.NOT_FETCHED;
    }
    if (hasItem) {
      const obj2 = { signal };
      const monetizationRestrictions = GuildRoleSubscriptionsActionCreatorsAll.fetchMonetizationRestrictions(user.id, obj2);
    }
  };
  const items2 = [id, tmp4];
  cResult[0] = tmp4;
  cResult[1] = id;
  cResult[2] = fn;
  cResult[3] = items2;
  tmp6 = items2;
  tmp5 = fn;
  let obj = require("c");
}) : (function useCreatorMonetizationRestrictions(id) {
  _require = id;
  let tmp2 = useUnmountAbortSignalDefault();
  importDefault = tmp2;
  const items = [id, tmp2];
  const effect = noop.useEffect(() => {
    let hasItem = null != user;
    if (hasItem) {
      const features = user.features;
      hasItem = features.has(constants.CREATOR_MONETIZABLE_RESTRICTED);
    }
    if (hasItem) {
      hasItem = GuildRoleSubscriptionsStore.getMonetizationRestrictionsFetchState(user.id) === FetchState.NOT_FETCHED;
    }
    if (hasItem) {
      const obj2 = { signal };
      const monetizationRestrictions = GuildRoleSubscriptionsActionCreatorsAll.fetchMonetizationRestrictions(user.id, obj2);
    }
  }, items);
  id = undefined;
  if (id != null) {
    id = id.id;
  }
  let obj = { restrictions: null, restrictionsLoading: null };
  const items1 = [GuildRoleSubscriptionsStore];
  obj.restrictions = require("initialize").useStateFromStoresArray(items1, () => {
    let tmp2 = id;
    if (id == null) {
      tmp2 = closure_2_8;
    }
    let monetizationRestrictions = GuildRoleSubscriptionsStore.getMonetizationRestrictions(tmp2);
    if (monetizationRestrictions == null) {
      monetizationRestrictions = [];
    }
    return monetizationRestrictions;
  });
  let obj2 = require("initialize");
  const items2 = [GuildRoleSubscriptionsStore];
  obj.restrictionsLoading = require("initialize").useStateFromStores(items2, () => {
    let tmp2 = id;
    if (id == null) {
      tmp2 = closure_2_8;
    }
    return GuildRoleSubscriptionsStore.getMonetizationRestrictionsFetchState(tmp2) === FetchState.FETCHING;
  });
  return obj;
});
fn(558);
ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useShouldHideGuildPurchaseEntryPoints(arg0) {
  _require = arg0;
  const cResult = require("c").c(14);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
      return GuildStore.getGuild(closure_0);
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
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6, tmp7);
  const tmpResult = require("initialize");
  ({ restrictions, restrictionsLoading } = closure_10(stateFromStores));
  let features1;
  if (stateFromStores != null) {
    features1 = stateFromStores.features;
  }
  if (cResult[4] !== features1) {
    let hasItem;
    if (stateFromStores != null) {
      const features = stateFromStores.features;
      hasItem = features.has(constants.CREATOR_MONETIZABLE);
    }
    if (!hasItem) {
      let hasItem1;
      if (stateFromStores != null) {
        const features2 = stateFromStores.features;
        hasItem1 = features2.has(constants.CREATOR_MONETIZABLE_PROVISIONAL);
      }
      hasItem = hasItem1;
    }
    let features4;
    if (stateFromStores != null) {
      features4 = stateFromStores.features;
    }
    cResult[4] = features4;
    cResult[5] = hasItem;
    let tmp11 = hasItem;
  } else {
    tmp11 = cResult[5];
  }
  let features5;
  if (stateFromStores != null) {
    features5 = stateFromStores.features;
  }
  if (cResult[6] === features5) {
    if (cResult[7] === tmp11) {
      if (cResult[8] === restrictions) {
        if (cResult[9] === restrictionsLoading) {
          let tmp18 = cResult[10];
        }
        if (cResult[11] === restrictionsLoading) {
          if (cResult[12] === tmp18) {
            let tmp24 = cResult[13];
          }
          return tmp24;
        }
        const obj2 = { shouldHideGuildPurchaseEntryPoints: tmp18, restrictionsLoading };
        cResult[11] = restrictionsLoading;
        cResult[12] = tmp18;
        cResult[13] = obj2;
        tmp24 = obj2;
      }
    }
  }
  if (!tmp11) {
    let features6;
    if (stateFromStores != null) {
      features6 = stateFromStores.features;
    }
    cResult[6] = features6;
    cResult[7] = tmp11;
    cResult[8] = restrictions;
    cResult[9] = restrictionsLoading;
    cResult[10] = tmp19;
    tmp18 = tmp19;
  } else if (restrictionsLoading) {
    let flag;
    if (stateFromStores != null) {
      const features3 = stateFromStores.features;
      flag = features3.has(constants.CREATOR_MONETIZABLE_RESTRICTED);
    }
    if (flag == null) {
      flag = true;
    }
    let result = flag;
  } else {
    result = tmp(4742).isRestrictedFromShowingGuildPurchaseEntryPoints(restrictions);
    const tmpResult2 = tmp(4742);
  }
  const tmp9 = closure_10(stateFromStores);
}) : (function useShouldHideGuildPurchaseEntryPoints(arg0) {
  _require = arg0;
  const items = [GuildStore];
  const items1 = [arg0];
  let has = require("initialize").useStateFromStores(items, () => GuildStore.getGuild(closure_0), items1);
  const tmp3 = closure_10(has);
  const restrictionsLoading = tmp3.restrictionsLoading;
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
    const obj2 = { shouldHideGuildPurchaseEntryPoints: tmp8, restrictionsLoading };
    return obj2;
  } else if (restrictionsLoading) {
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
    result = tmp(4742).isRestrictedFromShowingGuildPurchaseEntryPoints(tmp3.restrictions);
    const tmpResult = tmp(4742);
  }
  const obj = require("initialize");
  tmp = _require;
});
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useShouldRestrictUpdatingCreatorMonetizationSettings(arg0) {
  _require = arg0;
  const cResult = require("c").c(14);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
      return GuildStore.getGuild(closure_0);
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
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6, tmp7);
  const tmpResult = require("initialize");
  ({ restrictions, restrictionsLoading } = closure_10(stateFromStores));
  let features1;
  if (stateFromStores != null) {
    features1 = stateFromStores.features;
  }
  if (cResult[4] === features1) {
    if (cResult[5] === restrictions) {
      if (cResult[6] === restrictionsLoading) {
        let tmp11 = cResult[7];
      }
      let features3;
      if (stateFromStores != null) {
        features3 = stateFromStores.features;
      }
      if (cResult[8] !== features3) {
        let hasItem;
        if (stateFromStores != null) {
          const features2 = stateFromStores.features;
          hasItem = features2.has(constants.CREATOR_MONETIZABLE_PENDING_NEW_OWNER_ONBOARDING);
        }
        let features4;
        if (stateFromStores != null) {
          features4 = stateFromStores.features;
        }
        cResult[8] = features4;
        cResult[9] = hasItem;
        let tmp16 = hasItem;
      } else {
        tmp16 = cResult[9];
      }
      let tmp20 = tmp11;
      if (!tmp11) {
        tmp20 = tmp16;
      }
      if (cResult[10] === restrictionsLoading) {
        if (cResult[11] === tmp20) {
          if (cResult[12] === tmp21) {
            let tmp22 = cResult[13];
          }
          return tmp22;
        }
      }
      const obj2 = { shouldRestrictUpdatingCreatorMonetizationSettings: tmp20, allowSelfRemoveMonetization: !tmp11, restrictionsLoading };
      cResult[10] = restrictionsLoading;
      cResult[11] = tmp20;
      cResult[12] = !tmp11;
      cResult[13] = obj2;
      tmp22 = obj2;
    }
  }
  if (restrictionsLoading) {
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
    result = tmp(4742).isRestrictedFromUpdatingCreatorMonetizationSettings(restrictions);
    const tmpResult2 = tmp(4742);
  }
  let features5;
  if (stateFromStores != null) {
    features5 = stateFromStores.features;
  }
  cResult[4] = features5;
  cResult[5] = restrictions;
  cResult[6] = restrictionsLoading;
  cResult[7] = result;
  tmp11 = result;
  const tmp9 = closure_10(stateFromStores);
}) : (function useShouldRestrictUpdatingCreatorMonetizationSettings(arg0) {
  _require = arg0;
  const items = [GuildStore];
  const items1 = [arg0];
  const stateFromStores = require("initialize").useStateFromStores(items, () => GuildStore.getGuild(closure_0), items1);
  const obj = require("initialize");
  const tmp = _require;
  const restrictionsLoading = closure_10(stateFromStores).restrictionsLoading;
  if (restrictionsLoading) {
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
    result = tmp(4742).isRestrictedFromUpdatingCreatorMonetizationSettings(tmp5);
    const tmpResult = tmp(4742);
  }
  if (stateFromStores != null) {
    const features2 = stateFromStores.features;
    const hasItem = features2.has(constants.CREATOR_MONETIZABLE_PENDING_NEW_OWNER_ONBOARDING);
  }
  let tmp11 = result;
  if (!result) {
    tmp11 = hasItem;
  }
  return { shouldRestrictUpdatingCreatorMonetizationSettings: tmp11, allowSelfRemoveMonetization: !result, restrictionsLoading };
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/creator_monetization_review/CreatorMonetizationRestrictionsHooks.tsx");

export const useShouldHideGuildPurchaseEntryPoints = tmp3;
export const useShouldRestrictUpdatingCreatorMonetizationSettings = tmp4;
export const useIsMonetizationReapplicationDisabled = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsMonetizationReapplicationDisabled(arg0) {
  _require = arg0;
  const cResult = require("c").c(9);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
      return GuildStore.getGuild(closure_0);
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
  const tmpResult = require("initialize");
  ({ restrictions, restrictionsLoading } = closure_10(require("initialize").useStateFromStores(first, tmp6, tmp7)));
  if (cResult[4] !== restrictions) {
    const result = tmp(4742).isRestrictedFromMonetizationReapplication(restrictions);
    cResult[4] = restrictions;
    cResult[5] = result;
    let tmp9 = result;
    const tmpResult2 = tmp(4742);
  } else {
    tmp9 = cResult[5];
  }
  if (cResult[6] === tmp9) {
    if (cResult[7] === restrictionsLoading) {
      let tmp11 = cResult[8];
    }
    return tmp11;
  }
  const obj2 = { isMonetizationReapplicationDisabled: tmp9, restrictionsLoading };
  cResult[6] = tmp9;
  cResult[7] = restrictionsLoading;
  cResult[8] = obj2;
  tmp11 = obj2;
  const tmp8 = closure_10(require("initialize").useStateFromStores(first, tmp6, tmp7));
}) : (function useIsMonetizationReapplicationDisabled(arg0) {
  _require = arg0;
  const items = [GuildStore];
  const items1 = [arg0];
  const obj = require("initialize");
  const obj2 = { isMonetizationReapplicationDisabled: null, restrictionsLoading: null };
  ({ restrictions, restrictionsLoading } = closure_10(require("initialize").useStateFromStores(items, () => GuildStore.getGuild(closure_0), items1)));
  const tmp = closure_10(require("initialize").useStateFromStores(items, () => GuildStore.getGuild(closure_0), items1));
  obj2.isMonetizationReapplicationDisabled = require("CreatorMonetizationRestrictionsUtils").isRestrictedFromMonetizationReapplication(restrictions);
  obj2.restrictionsLoading = restrictionsLoading;
  return obj2;
});