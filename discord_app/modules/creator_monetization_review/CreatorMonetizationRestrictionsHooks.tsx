// discord_app/modules/creator_monetization_review/CreatorMonetizationRestrictionsHooks.tsx
import GuildRoleSubscriptionsStore2 from "../guild_role_subscriptions/GuildRoleSubscriptionsStore.tsx";
import useUnmountAbortSignalDefault from "../../hooks/useUnmountAbortSignal.tsx";
import GuildRoleSubscriptionsActionCreatorsAll from "../guild_role_subscriptions/GuildRoleSubscriptionsActionCreators.tsx";
import react from "../../../_runtime/00019_react.js";
import GuildStore from "../../stores/GuildStore.tsx";
import Constants from "../../Constants.tsx";
import ReactCompilerGating_mod from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
const GuildRoleSubscriptionsStore = GuildRoleSubscriptionsStore2;
let _require, id, importDefault;

let c9;
let metroImportAll;
const FetchState = GuildRoleSubscriptionsStore2.FetchState;
({ EMPTY_STRING_SNOWFLAKE_ID: metroImportAll, GuildFeatures: c9 } = Constants);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (id) => {
      let signal;
      let tmp20;
      _require = id;
      let obj = require("react");
      const cResult = obj.c(13);
      const tmp4 = useUnmountAbortSignalDefault();
      importDefault = tmp4;
      if (cResult[0] === tmp4) {
        let tmp5;
        let tmp6;
        let tmp12;
        let tmp14;
        let tmp16;
        if (cResult[1] === id) {
          tmp5 = cResult[2];
          tmp6 = cResult[3];
        }
        const effect = react.useEffect(tmp5, tmp6);
        id = undefined;
        if (id != null) {
          id = id.id;
        }
        const _Symbol = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [GuildRoleSubscriptionsStore];
          cResult[4] = items;
          tmp12 = items;
        } else {
          tmp12 = cResult[4];
        }
        if (cResult[5] !== id) {
          const fn2 = function f() {
            let tmp2 = id;
            const getMonetizationRestrictions = GuildRoleSubscriptionsStore.getMonetizationRestrictions;
            if (id == null) {
              tmp2 = metroImportAll;
            }
            let monetizationRestrictions = getMonetizationRestrictions(tmp2);
            if (monetizationRestrictions == null) {
              monetizationRestrictions = [];
            }
            return monetizationRestrictions;
          };
          cResult[5] = id;
          cResult[6] = fn2;
          tmp14 = fn2;
        } else {
          tmp14 = cResult[6];
        }
        const tmpResult = require("get initialized");
        const stateFromStoresArray = tmpResult.useStateFromStoresArray(tmp12, tmp14);
        const _Symbol2 = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [GuildRoleSubscriptionsStore];
          cResult[7] = items1;
          tmp16 = items1;
        } else {
          tmp16 = cResult[7];
        }
        if (cResult[8] !== id) {
          class O {
            constructor() {
              let tmp2 = id;
              const getMonetizationRestrictionsFetchState =
                GuildRoleSubscriptionsStore.getMonetizationRestrictionsFetchState;
              if (id == null) {
                tmp2 = metroImportAll;
              }
              return getMonetizationRestrictionsFetchState(tmp2) === FetchState.FETCHING;
            }
          }
          cResult[8] = id;
          cResult[9] = O;
        } else {
          class O {
            constructor() {
              let tmp2 = id;
              const getMonetizationRestrictionsFetchState =
                GuildRoleSubscriptionsStore.getMonetizationRestrictionsFetchState;
              if (id == null) {
                tmp2 = metroImportAll;
              }
              return getMonetizationRestrictionsFetchState(tmp2) === FetchState.FETCHING;
            }
          }
        }
        const tmpResult2 = require("get initialized");
        const stateFromStores = tmpResult2.useStateFromStores(tmp16, O);
        if (cResult[10] === stateFromStoresArray) {
          class O {
            constructor() {
              let tmp2 = id;
              const getMonetizationRestrictionsFetchState =
                GuildRoleSubscriptionsStore.getMonetizationRestrictionsFetchState;
              if (id == null) {
                tmp2 = metroImportAll;
              }
              return getMonetizationRestrictionsFetchState(tmp2) === FetchState.FETCHING;
            }
          }
          return tmp20;
        }
        let obj2 = { restrictions: stateFromStoresArray, restrictionsLoading: stateFromStores };
        cResult[10] = stateFromStoresArray;
        cResult[11] = stateFromStores;
        cResult[12] = obj2;
        tmp20 = obj2;
      }
      const fn = function c() {
        let hasItem = null != id;
        if (hasItem) {
          const features = id.features;
          hasItem = features.has(constants.CREATOR_MONETIZABLE_RESTRICTED);
        }
        if (hasItem) {
          hasItem = GuildRoleSubscriptionsStore.getMonetizationRestrictionsFetchState(id.id) === FetchState.NOT_FETCHED;
        }
        if (hasItem) {
          const obj2 = { signal };
          const obj = GuildRoleSubscriptionsActionCreatorsAll;
          const monetizationRestrictions = obj.fetchMonetizationRestrictions(id.id, obj2);
        }
      };
      const items2 = [id, tmp4];
      cResult[0] = tmp4;
      cResult[1] = id;
      cResult[2] = fn;
      cResult[3] = items2;
      tmp6 = items2;
      tmp5 = fn;
    }
  : (id) => {
      let items1;
      let items2;
      let obj2;
      let obj3;
      let signal;
      _require = id;
      let tmp2 = useUnmountAbortSignalDefault();
      importDefault = tmp2;
      const items = [id, tmp2];
      const effect = react.useEffect(() => {
        let hasItem = null != id;
        if (hasItem) {
          const features = id.features;
          hasItem = features.has(constants.CREATOR_MONETIZABLE_RESTRICTED);
        }
        if (hasItem) {
          hasItem = GuildRoleSubscriptionsStore.getMonetizationRestrictionsFetchState(id.id) === FetchState.NOT_FETCHED;
        }
        if (hasItem) {
          const obj2 = { signal };
          const obj = GuildRoleSubscriptionsActionCreatorsAll;
          const monetizationRestrictions = obj.fetchMonetizationRestrictions(id.id, obj2);
        }
      }, items);
      id = undefined;
      if (id != null) {
        id = id.id;
      }
      let obj = {
        restrictions: obj2.useStateFromStoresArray(items1, () => {
          let tmp2 = id;
          const getMonetizationRestrictions = GuildRoleSubscriptionsStore.getMonetizationRestrictions;
          if (id == null) {
            tmp2 = metroImportAll;
          }
          let monetizationRestrictions = getMonetizationRestrictions(tmp2);
          if (monetizationRestrictions == null) {
            monetizationRestrictions = [];
          }
          return monetizationRestrictions;
        }),
        restrictionsLoading: obj3.useStateFromStores(items2, () => {
          let tmp2 = id;
          const getMonetizationRestrictionsFetchState =
            GuildRoleSubscriptionsStore.getMonetizationRestrictionsFetchState;
          if (id == null) {
            tmp2 = metroImportAll;
          }
          return getMonetizationRestrictionsFetchState(tmp2) === FetchState.FETCHING;
        }),
      };
      obj2 = require("get initialized");
      items1 = [GuildRoleSubscriptionsStore];
      items2 = [GuildRoleSubscriptionsStore];
      obj3 = require("get initialized");
      return obj;
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let restrictions;
      let restrictionsLoading;
      let tmp12;
      let tmp6;
      let tmp7;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(14);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[0] = items;
        first = items;
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
        tmp7 = items1;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      const tmpResult = require("get initialized");
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
      ({ restrictions, restrictionsLoading } = closure_10(stateFromStores));
      let features1;
      const tmp10 = cResult[4];
      closure_10(stateFromStores);
      if (stateFromStores != null) {
        features1 = stateFromStores.features;
      }
      if (tmp10 !== features1) {
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
        tmp12 = hasItem;
      } else {
        tmp12 = cResult[5];
      }
      let features5;
      const tmp18 = cResult[6];
      if (stateFromStores != null) {
        features5 = stateFromStores.features;
      }
      if (tmp18 === features5) {
        if (cResult[7] === tmp12) {
          if (cResult[8] === restrictions) {
            let tmp20;
            if (cResult[9] === restrictionsLoading) {
              tmp20 = cResult[10];
            }
            if (cResult[11] === restrictionsLoading) {
              let tmp25;
              if (cResult[12] === tmp20) {
                tmp25 = cResult[13];
              }
              return tmp25;
            }
            const obj2 = { shouldHideGuildPurchaseEntryPoints: tmp20, restrictionsLoading };
            cResult[11] = restrictionsLoading;
            cResult[12] = tmp20;
            cResult[13] = obj2;
            tmp25 = obj2;
          }
        }
      }
      let tmp21 = !tmp12;
      if (tmp12) {
        let result;
        if (restrictionsLoading) {
          let flag;
          if (stateFromStores != null) {
            const features3 = stateFromStores.features;
            flag = features3.has(constants.CREATOR_MONETIZABLE_RESTRICTED);
          }
          if (flag == null) {
            flag = true;
          }
          result = flag;
        } else {
          const tmpResult2 = require("CreatorMonetizationRestrictionsUtils");
          result = tmpResult2.isRestrictedFromShowingGuildPurchaseEntryPoints(restrictions);
        }
        tmp21 = result;
      }
      let features6;
      if (stateFromStores != null) {
        features6 = stateFromStores.features;
      }
      cResult[6] = features6;
      cResult[7] = tmp12;
      cResult[8] = restrictions;
      cResult[9] = restrictionsLoading;
      cResult[10] = tmp21;
      tmp20 = tmp21;
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      const items = [GuildStore];
      const items1 = [arg0];
      const obj = require("get initialized");
      const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(closure_0), items1);
      const tmp4 = closure_10(stateFromStores);
      const restrictionsLoading = tmp4.restrictionsLoading;
      let hasItem;
      const restrictions = tmp4.restrictions;
      const tmp = _require;
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
      let shouldHideGuildPurchaseEntryPoints = !hasItem;
      if (hasItem) {
        let result;
        if (restrictionsLoading) {
          let flag;
          if (stateFromStores != null) {
            const features3 = stateFromStores.features;
            flag = features3.has(constants.CREATOR_MONETIZABLE_RESTRICTED);
          }
          if (flag == null) {
            flag = true;
          }
          result = flag;
        } else {
          const tmpResult = tmp(4501);
          result = tmpResult.isRestrictedFromShowingGuildPurchaseEntryPoints(restrictions);
        }
        shouldHideGuildPurchaseEntryPoints = result;
      }
      return { shouldHideGuildPurchaseEntryPoints, restrictionsLoading };
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let restrictions;
      let restrictionsLoading;
      let result;
      let tmp6;
      let tmp7;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(14);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[0] = items;
        first = items;
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
        tmp7 = items1;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      const tmpResult = require("get initialized");
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
      ({ restrictions, restrictionsLoading } = closure_10(stateFromStores));
      let features1;
      const tmp10 = cResult[4];
      closure_10(stateFromStores);
      if (stateFromStores != null) {
        features1 = stateFromStores.features;
      }
      if (tmp10 === features1) {
        if (cResult[5] === restrictions) {
          let tmp12;
          let tmp18;
          if (cResult[6] === restrictionsLoading) {
            tmp12 = cResult[7];
          }
          let features3;
          const tmp16 = cResult[8];
          if (stateFromStores != null) {
            features3 = stateFromStores.features;
          }
          if (tmp16 !== features3) {
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
            tmp18 = hasItem;
          } else {
            tmp18 = cResult[9];
          }
          if (cResult[10] === restrictionsLoading) {
            if (cResult[11] === (tmp12 || tmp18)) {
              let tmp24;
              if (cResult[12] === !tmp12) {
                tmp24 = cResult[13];
              }
              return tmp24;
            }
          }
          const obj2 = {
            shouldRestrictUpdatingCreatorMonetizationSettings: tmp12 || tmp18,
            allowSelfRemoveMonetization: !tmp12,
            restrictionsLoading,
          };
          cResult[10] = restrictionsLoading;
          cResult[11] = tmp12 || tmp18;
          cResult[12] = !tmp12;
          cResult[13] = obj2;
          tmp24 = obj2;
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
        result = flag;
      } else {
        const tmpResult2 = require("CreatorMonetizationRestrictionsUtils");
        result = tmpResult2.isRestrictedFromUpdatingCreatorMonetizationSettings(restrictions);
      }
      let features5;
      if (stateFromStores != null) {
        features5 = stateFromStores.features;
      }
      cResult[4] = features5;
      cResult[5] = restrictions;
      cResult[6] = restrictionsLoading;
      cResult[7] = result;
      tmp12 = result;
    }
  : (arg0) => {
      let closure_0;
      let result;
      _require = arg0;
      const items = [GuildStore];
      const items1 = [arg0];
      const obj = require("get initialized");
      const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(closure_0), items1);
      const restrictionsLoading = closure_10(stateFromStores).restrictionsLoading;
      closure_10(stateFromStores);
      const tmp = _require;
      if (restrictionsLoading) {
        let flag;
        if (stateFromStores != null) {
          const features = stateFromStores.features;
          flag = features.has(constants.CREATOR_MONETIZABLE_RESTRICTED);
        }
        if (flag == null) {
          flag = true;
        }
        result = flag;
      } else {
        const tmpResult = tmp(4501);
        result = tmpResult.isRestrictedFromUpdatingCreatorMonetizationSettings(tmp5);
      }
      let hasItem;
      if (stateFromStores != null) {
        const features2 = stateFromStores.features;
        hasItem = features2.has(constants.CREATOR_MONETIZABLE_PENDING_NEW_OWNER_ONBOARDING);
      }
      return {
        shouldRestrictUpdatingCreatorMonetizationSettings: result || hasItem,
        allowSelfRemoveMonetization: !result,
        restrictionsLoading,
      };
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let restrictions;
      let restrictionsLoading;
      let tmp6;
      let tmp7;
      let tmp9;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(9);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[0] = items;
        first = items;
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
        tmp7 = items1;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      const tmpResult = require("get initialized");
      ({ restrictions, restrictionsLoading } = closure_10(tmpResult.useStateFromStores(first, tmp6, tmp7)));
      closure_10(tmpResult.useStateFromStores(first, tmp6, tmp7));
      if (cResult[4] !== restrictions) {
        const tmpResult2 = require("CreatorMonetizationRestrictionsUtils");
        const result = tmpResult2.isRestrictedFromMonetizationReapplication(restrictions);
        cResult[4] = restrictions;
        cResult[5] = result;
        tmp9 = result;
      } else {
        tmp9 = cResult[5];
      }
      if (cResult[6] === tmp9) {
        let tmp11;
        if (cResult[7] === restrictionsLoading) {
          tmp11 = cResult[8];
        }
        return tmp11;
      }
      const obj2 = { isMonetizationReapplicationDisabled: tmp9, restrictionsLoading };
      cResult[6] = tmp9;
      cResult[7] = restrictionsLoading;
      cResult[8] = obj2;
      tmp11 = obj2;
    }
  : (arg0) => {
      let closure_0;
      let obj3;
      let restrictions;
      let restrictionsLoading;
      const f93127 = () => GuildStore.getGuild(closure_0);
      _require = arg0;
      const items = [GuildStore];
      const items1 = [arg0];
      const obj = require("get initialized");
      const obj2 = {
        isMonetizationReapplicationDisabled: obj3.isRestrictedFromMonetizationReapplication(restrictions),
        restrictionsLoading,
      };
      ({ restrictions, restrictionsLoading } = closure_10(obj.useStateFromStores(items, f93127, items1)));
      closure_10(obj.useStateFromStores(items, f93127, items1));
      obj3 = require("CreatorMonetizationRestrictionsUtils");
      return obj2;
    };
let result = size.fileFinishedImporting("modules/creator_monetization_review/CreatorMonetizationRestrictionsHooks.tsx");

export const useShouldHideGuildPurchaseEntryPoints = tmp3;
export const useShouldRestrictUpdatingCreatorMonetizationSettings = tmp4;
export const useIsMonetizationReapplicationDisabled = tmp5;
