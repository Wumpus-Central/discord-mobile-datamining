// === Module 14559: useGroupListingsFetchContext ===

// Module 14559 (useGroupListingsFetchContext)
import _slicedToArray from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import _handleConnectionOpen from "_handleConnectionOpen" /* 4495 */;
import makeGroupListingIndexSubscriptionListingTag from "makeGroupListingIndexSubscriptionListingTag" /* 4015 */;
import { FetchState } from "makeGroupListingIndexSubscriptionListingTag" /* 4015 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
let c4 = importAllResult;
let context = importAllResult.createContext(undefined);
const result = require("obj132").fileFinishedImporting("modules/guild_role_subscriptions/GroupListingsFetchContext.tsx");

export const useGroupListingsFetchContext = function useGroupListingsFetchContext(useGroupListingsForGuild) {
  const context = importAllResult.useContext(closure_9);
  if (null == context) {
    let str = useGroupListingsForGuild;
    if (useGroupListingsForGuild == null) {
      str = "useGroupListingsFetchContext";
    }
    const _HermesInternal = HermesInternal;
    error = new Error("" + str + " must be used within a GroupListingsFetchContextProvider");
    throw error;
  } else {
    const fetchGroupListingsForGuild = context.fetchGroupListingsForGuild;
    const items = [fetchGroupListingsForGuild];
    const effect = importAllResult.useEffect(() => {
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
  const items = [first];
  const stateFromStores = guildId(countryCode[5]).useStateFromStores(items, () => first.isConnected());
  let obj = guildId(countryCode[5]);
  const items1 = [closure_6];
  const stateFromStores1 = guildId(countryCode[5]).useStateFromStores(items1, () => {
    if (null != guildId) {
      let FETCHED = subscriptionGroupListingsForGuildFetchState.getSubscriptionGroupListingsForGuildFetchState(tmp);
    } else {
      FETCHED = FetchState.FETCHED;
    }
    return FETCHED;
  });
  const tmp3 = dontFetchWhileTrue(stateFromStores.useState(true === refetchOnMount), 2);
  first = tmp3[0];
  closure_6 = tmp3[1];
  const items2 = [stateFromStores, guildId, includeSoftDeleted, countryCode, dontFetchWhileTrue, first];
  let listingsLoaded = stateFromStores1 === FetchState.FETCHED;
  const fetchGroupListingsForGuild = stateFromStores.useCallback(() => {
    if (null != guildId) {
      if (stateFromStores) {
        if (true !== dontFetchWhileTrue) {
          let tmp5 = first;
          if (!first) {
            tmp5 = tmp4 === FetchState.NOT_FETCHED;
          }
          if (tmp5) {
            subscriptionGroupListingsForGuildFetchState(false);
            includeSoftDeleted(countryCode[6]);
            const obj = { includeSoftDeleted: null, countryCode: null };
            obj[0] = includeSoftDeleted;
            obj[1] = countryCode;
            const allSubscriptionListingsDataForGuild = obj.fetchAllSubscriptionListingsDataForGuild(guildId, obj);
          }
        }
      }
    }
  }, items2);
  if (listingsLoaded) {
    listingsLoaded = !first;
  }
  return <redux.Provider value={{ listingsLoaded, fetchGroupListingsForGuild }}>{children}</redux.Provider>;
};