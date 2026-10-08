// discord_app/modules/guild_role_subscriptions/GroupListingsFetchContext.tsx
import c from "../../../_runtime/00576_c.js";
import GuildRoleSubscriptionsActionCreatorsAll from "GuildRoleSubscriptionsActionCreators.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";
import GatewayConnectionStore from "../gateway/GatewayConnectionStore.tsx";
import GuildRoleSubscriptionsStore from "GuildRoleSubscriptionsStore.tsx";

require = fn;
const FetchState = fn(4700).FetchState;
const jsx = fn(21).jsx;
const redux = noop.createContext(undefined);
fn(558);
const ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useGroupListingsFetchContext(arg0) {
      const cResult = c.c(3);
      const context = noop.useContext(closure_9);
      if (null == context) {
        let str = arg0;
        if (arg0 == null) {
          str = "useGroupListingsFetchContext";
        }
        const _HermesInternal = HermesInternal;
        const error = new Error("" + str + " must be used within a GroupListingsFetchContextProvider");
        throw error;
      } else {
        const fetchGroupListingsForGuild = context.fetchGroupListingsForGuild;
        if (cResult[0] !== fetchGroupListingsForGuild) {
          const fn = function u() {
            fetchGroupListingsForGuild();
          };
          const items = [fetchGroupListingsForGuild];
          cResult[0] = fetchGroupListingsForGuild;
          cResult[1] = fn;
          cResult[2] = items;
          let tmp4 = items;
          let tmp3 = fn;
        } else {
          tmp3 = cResult[1];
          tmp4 = cResult[2];
        }
        const effect = noop.useEffect(tmp3, tmp4);
        return context.listingsLoaded;
      }
    }
  : function useGroupListingsFetchContext(arg0) {
      const context = noop.useContext(closure_9);
      if (null == context) {
        let str = arg0;
        if (arg0 == null) {
          str = "useGroupListingsFetchContext";
        }
        const _HermesInternal = HermesInternal;
        const error = new Error("" + str + " must be used within a GroupListingsFetchContextProvider");
        throw error;
      } else {
        const fetchGroupListingsForGuild = context.fetchGroupListingsForGuild;
        const items = [fetchGroupListingsForGuild];
        const effect = noop.useEffect(() => {
          fetchGroupListingsForGuild();
        }, items);
        return context.listingsLoaded;
      }
    };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/GroupListingsFetchContext.tsx");

export const useGroupListingsFetchContext = tmp2;
export const GroupListingsFetchContextProvider = ReactCompilerGating.isReactCompilerEnabled()
  ? function GroupListingsFetchContextProvider(guildId) {
      const cResult = guildId(countryCode[6]).c(18);
      guildId = guildId.guildId;
      ({ children, includeSoftDeleted } = guildId);
      countryCode = guildId.countryCode;
      const dontFetchWhileTrue = guildId.dontFetchWhileTrue;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [first];
        const fn = function p() {
          return first.isConnected();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      let obj = guildId(countryCode[6]);
      const stateFromStores = guildId(countryCode[7]).useStateFromStores(tmp4, tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [closure_6];
        cResult[2] = items1;
        let tmp8 = items1;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] !== guildId) {
        const fn2 = function b() {
          if (null != guildId) {
            let FETCHED = GuildRoleSubscriptionsStore.getSubscriptionGroupListingsForGuildFetchState(tmp);
          } else {
            FETCHED = FetchState.FETCHED;
          }
          return FETCHED;
        };
        cResult[3] = guildId;
        cResult[4] = fn2;
        let tmp10 = fn2;
      } else {
        tmp10 = cResult[4];
      }
      const tmpResult = guildId(countryCode[7]);
      const stateFromStores1 = guildId(countryCode[7]).useStateFromStores(tmp8, tmp10);
      const tmp12 = dontFetchWhileTrue(stateFromStores.useState(true === guildId.refetchOnMount), 2);
      first = tmp12[0];
      closure_6 = tmp12[1];
      if (cResult[5] === countryCode) {
        if (cResult[6] === dontFetchWhileTrue) {
          if (cResult[7] === guildId) {
            if (cResult[8] === includeSoftDeleted) {
              if (cResult[9] === stateFromStores) {
                if (cResult[10] === first) {
                  let tmp14 = cResult[11];
                }
                if (cResult[12] === tmp14) {
                  if (cResult[13] === tmp16) {
                    let tmp17 = cResult[14];
                  }
                  if (cResult[15] === children) {
                    if (cResult[16] === tmp17) {
                      let tmp18 = cResult[17];
                    }
                    return tmp18;
                  }
                  let obj2 = { value: tmp17, children };
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
              let tmp5 = first;
              if (!first) {
                tmp5 = tmp4 === FetchState.NOT_FETCHED;
              }
              if (tmp5) {
                closure_6(false);
                const obj2 = { includeSoftDeleted, countryCode };
                const allSubscriptionListingsDataForGuild =
                  GuildRoleSubscriptionsActionCreatorsAll.fetchAllSubscriptionListingsDataForGuild(guildId, obj2);
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
      const tmpResult2 = guildId(countryCode[7]);
    }
  : function GroupListingsFetchContextProvider(guildId) {
      guildId = guildId.guildId;
      const includeSoftDeleted = guildId.includeSoftDeleted;
      const countryCode = guildId.countryCode;
      const dontFetchWhileTrue = guildId.dontFetchWhileTrue;
      let first;
      closure_6 = undefined;
      ({ children, refetchOnMount } = guildId);
      const items = [first];
      const stateFromStores = guildId(countryCode[7]).useStateFromStores(items, () => first.isConnected());
      let obj = guildId(countryCode[7]);
      const items1 = [closure_6];
      const stateFromStores1 = guildId(countryCode[7]).useStateFromStores(items1, () => {
        if (null != guildId) {
          let FETCHED = GuildRoleSubscriptionsStore.getSubscriptionGroupListingsForGuildFetchState(tmp);
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
              let tmp5 = first;
              if (!first) {
                tmp5 = tmp4 === FetchState.NOT_FETCHED;
              }
              if (tmp5) {
                closure_6(false);
                const obj2 = { includeSoftDeleted, countryCode };
                const allSubscriptionListingsDataForGuild =
                  GuildRoleSubscriptionsActionCreatorsAll.fetchAllSubscriptionListingsDataForGuild(guildId, obj2);
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
