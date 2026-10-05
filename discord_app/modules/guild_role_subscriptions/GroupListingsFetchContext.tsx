// discord_app/modules/guild_role_subscriptions/GroupListingsFetchContext.tsx
import Fragment from "../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../_runtime/00576_react.js";
import GuildRoleSubscriptionsStore2 from "GuildRoleSubscriptionsStore.tsx";
import GuildRoleSubscriptionsActionCreatorsAll from "GuildRoleSubscriptionsActionCreators.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../_runtime/00019_react.js";
import GatewayConnectionStore from "../gateway/GatewayConnectionStore.tsx";
import ReactCompilerGating_mod from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const GuildRoleSubscriptionsStore = GuildRoleSubscriptionsStore2;
let guildId;

const FetchState = GuildRoleSubscriptionsStore2.FetchState;
const jsx = Fragment.jsx;
const redux = react.createContext(undefined);
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function (arg0) {
      const obj = react2;
      const cResult = obj.c(3);
      const context = react.useContext(redux);
      if (null == context) {
        let str = arg0;
        const _Error = Error;
        if (arg0 == null) {
          str = "useGroupListingsFetchContext";
        }
        const _HermesInternal = HermesInternal;
        const self = this;
        const self2 = this;
        const _Error1 = new _Error("" + str + " must be used within a GroupListingsFetchContextProvider");
        throw _Error1;
      } else {
        let tmp4;
        let tmp3;
        const fetchGroupListingsForGuild = context.fetchGroupListingsForGuild;
        const listingsLoaded = context.listingsLoaded;
        if (cResult[0] !== fetchGroupListingsForGuild) {
          const fn = function u() {
            fetchGroupListingsForGuild();
          };
          const items = [fetchGroupListingsForGuild];
          cResult[0] = fetchGroupListingsForGuild;
          cResult[1] = fn;
          cResult[2] = items;
          tmp4 = items;
          tmp3 = fn;
        } else {
          tmp3 = cResult[1];
          tmp4 = cResult[2];
        }
        const effect = react.useEffect(tmp3, tmp4);
        return listingsLoaded;
      }
    }
  : function (arg0) {
      const context = react.useContext(redux);
      if (null == context) {
        let str = arg0;
        const _Error = Error;
        if (arg0 == null) {
          str = "useGroupListingsFetchContext";
        }
        const _HermesInternal = HermesInternal;
        const self = this;
        const self2 = this;
        const _Error1 = new _Error("" + str + " must be used within a GroupListingsFetchContextProvider");
        throw _Error1;
      } else {
        const fetchGroupListingsForGuild = context.fetchGroupListingsForGuild;
        const items = [fetchGroupListingsForGuild];
        const listingsLoaded = context.listingsLoaded;
        const effect = react.useEffect(() => {
          fetchGroupListingsForGuild();
        }, items);
        return listingsLoaded;
      }
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      let children;
      let countryCode;
      let first;
      let includeSoftDeleted;
      let tmp10;
      let tmp4;
      let tmp5;
      let tmp8;
      const tmp = guildId;
      let obj = guildId(countryCode[6]);
      const cResult = obj.c(18);
      guildId = guildId.guildId;
      ({ children, includeSoftDeleted } = guildId);
      countryCode = guildId.countryCode;
      const dontFetchWhileTrue = guildId.dontFetchWhileTrue;
      const refetchOnMount = guildId.refetchOnMount;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [first];
        const fn = function f() {
          return first.isConnected();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = fn;
        tmp4 = items;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = tmp(countryCode[7]);
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [closure_6];
        cResult[2] = items1;
        tmp8 = items1;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] !== guildId) {
        const fn2 = function x() {
          let FETCHED;
          if (null != guildId) {
            FETCHED = GuildRoleSubscriptionsStore.getSubscriptionGroupListingsForGuildFetchState(tmp);
          } else {
            FETCHED = FetchState.FETCHED;
          }
          return FETCHED;
        };
        cResult[3] = guildId;
        cResult[4] = fn2;
        tmp10 = fn2;
      } else {
        tmp10 = cResult[4];
      }
      const tmpResult2 = tmp(countryCode[7]);
      const stateFromStores1 = tmpResult2.useStateFromStores(tmp8, tmp10);
      const tmp12 = dontFetchWhileTrue(stateFromStores.useState(true === refetchOnMount), 2);
      first = tmp12[0];
      closure_6 = tmp12[1];
      if (cResult[5] === countryCode) {
        if (cResult[6] === dontFetchWhileTrue) {
          if (cResult[7] === guildId) {
            if (cResult[8] === includeSoftDeleted) {
              if (cResult[9] === stateFromStores) {
                let tmp14;
                if (cResult[10] === first) {
                  tmp14 = cResult[11];
                }
                if (cResult[12] === tmp14) {
                  let tmp17;
                  if (cResult[13] === (stateFromStores1 === FetchState.FETCHED && !first)) {
                    tmp17 = cResult[14];
                  }
                  if (cResult[15] === children) {
                    let tmp18;
                    if (cResult[16] === tmp17) {
                      tmp18 = cResult[17];
                    }
                    return tmp18;
                  }
                  const tmp21 = <redux.Provider value={tmp17}>{children}</redux.Provider>;
                  cResult[15] = children;
                  cResult[16] = tmp17;
                  cResult[17] = tmp21;
                  tmp18 = tmp21;
                }
                const obj3 = {
                  listingsLoaded: stateFromStores1 === FetchState.FETCHED && !first,
                  fetchGroupListingsForGuild: tmp14,
                };
                cResult[12] = tmp14;
                cResult[13] = stateFromStores1 === FetchState.FETCHED && !first;
                cResult[14] = obj3;
                tmp17 = obj3;
              }
            }
          }
        }
      }
      const fn3 = function _() {
        if (null != guildId) {
          if (stateFromStores) {
            if (true !== dontFetchWhileTrue) {
              const tmp5 = first || tmp4 === FetchState.NOT_FETCHED;
              if (tmp5) {
                closure_6(false);
                const obj2 = { includeSoftDeleted, countryCode };
                const obj = GuildRoleSubscriptionsActionCreatorsAll;
                const allSubscriptionListingsDataForGuild = obj.fetchAllSubscriptionListingsDataForGuild(guildId, obj2);
              }
            }
          }
        }
      };
      cResult[5] = countryCode;
      cResult[6] = dontFetchWhileTrue;
      cResult[7] = guildId;
      cResult[8] = includeSoftDeleted;
      cResult[9] = stateFromStores;
      cResult[10] = first;
      cResult[11] = fn3;
      tmp14 = fn3;
    }
  : (guildId) => {
      let children;
      let refetchOnMount;
      guildId = guildId.guildId;
      const includeSoftDeleted = guildId.includeSoftDeleted;
      const countryCode = guildId.countryCode;
      const dontFetchWhileTrue = guildId.dontFetchWhileTrue;
      let first;
      let closure_6;
      ({ children, refetchOnMount } = guildId);
      let obj = guildId(countryCode[7]);
      const items = [first];
      const stateFromStores = obj.useStateFromStores(items, () => first.isConnected());
      let obj2 = guildId(countryCode[7]);
      const items1 = [closure_6];
      const stateFromStores1 = obj2.useStateFromStores(items1, () => {
        let FETCHED;
        if (null != guildId) {
          FETCHED = GuildRoleSubscriptionsStore.getSubscriptionGroupListingsForGuildFetchState(tmp);
        } else {
          FETCHED = FetchState.FETCHED;
        }
        return FETCHED;
      });
      const tmp3 = dontFetchWhileTrue(stateFromStores.useState(true === refetchOnMount), 2);
      first = tmp3[0];
      closure_6 = tmp3[1];
      const items2 = [stateFromStores, guildId, includeSoftDeleted, countryCode, dontFetchWhileTrue, first];
      let tmp6 = stateFromStores1 === FetchState.FETCHED;
      const callback = stateFromStores.useCallback(() => {
        if (null != guildId) {
          if (stateFromStores) {
            if (true !== dontFetchWhileTrue) {
              const tmp5 = first || tmp4 === FetchState.NOT_FETCHED;
              if (tmp5) {
                closure_6(false);
                const obj2 = { includeSoftDeleted, countryCode };
                const obj = GuildRoleSubscriptionsActionCreatorsAll;
                const allSubscriptionListingsDataForGuild = obj.fetchAllSubscriptionListingsDataForGuild(guildId, obj2);
              }
            }
          }
        }
      }, items2);
      if (tmp6) {
        tmp6 = !first;
      }
      return (
        <redux.Provider value={{ listingsLoaded: tmp6, fetchGroupListingsForGuild: callback }}>
          {children}
        </redux.Provider>
      );
    };
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/GroupListingsFetchContext.tsx");

export const useGroupListingsFetchContext = tmp2;
export const GroupListingsFetchContextProvider = tmp3;
