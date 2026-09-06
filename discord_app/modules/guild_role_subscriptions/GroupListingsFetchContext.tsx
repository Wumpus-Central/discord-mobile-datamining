// discord_app/modules/guild_role_subscriptions/GroupListingsFetchContext.tsx
import GuildRoleSubscriptionsActionCreatorsAll from "GuildRoleSubscriptionsActionCreators.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";
import GatewayConnectionStore from "../gateway/GatewayConnectionStore.tsx";
import GuildRoleSubscriptionsStore from "GuildRoleSubscriptionsStore.tsx";

const require = fn;
const FetchState = fn(4193).FetchState;
const jsx = fn(21).jsx;
const redux = noop.createContext(undefined);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/GroupListingsFetchContext.tsx");

export const useGroupListingsFetchContext = function useGroupListingsFetchContext(useGroupListingsForGuild) {
  const context = noop.useContext(closure_9);
  if (null == context) {
    let str = useGroupListingsForGuild;
    if (useGroupListingsForGuild == null) {
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
export const GroupListingsFetchContextProvider = function GroupListingsFetchContextProvider(guildId) {
  guildId = guildId.guildId;
  const includeSoftDeleted = guildId.includeSoftDeleted;
  const countryCode = guildId.countryCode;
  const dontFetchWhileTrue = guildId.dontFetchWhileTrue;
  let first;
  closure_6 = undefined;
  ({ children, refetchOnMount } = guildId);
  let obj = guildId(countryCode[5]);
  const items = [first];
  const stateFromStores = obj.useStateFromStores(items, () => first.isConnected());
  const items1 = [closure_6];
  const stateFromStores1 = guildId(countryCode[5]).useStateFromStores(items1, () => {
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
            const obj = { includeSoftDeleted, countryCode };
            const allSubscriptionListingsDataForGuild = obj.fetchAllSubscriptionListingsDataForGuild(guildId, obj);
          }
        }
      }
    }
  }, items2);
  if (tmp6) {
    tmp6 = !first;
  }
  obj = { value: { listingsLoaded: tmp6, fetchGroupListingsForGuild: callback }, children };
  return (
    <redux.Provider value={{ listingsLoaded: tmp6, fetchGroupListingsForGuild: callback }}>{children}</redux.Provider>
  );
};
