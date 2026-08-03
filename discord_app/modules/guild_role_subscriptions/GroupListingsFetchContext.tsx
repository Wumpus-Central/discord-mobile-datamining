// === Module 14316: useGroupListingsFetchContext ===

// Module 14316 (useGroupListingsFetchContext)
import _slicedToArray from "_slicedToArray";
import importAllResult from "noop";
import _handleConnectionOpen from "_handleConnectionOpen";
import makeGroupListingIndexSubscriptionListingTag from "makeGroupListingIndexSubscriptionListingTag";
import { FetchState } from "makeGroupListingIndexSubscriptionListingTag";
import { jsx } from "jsxProd";

const require = arg1;
let c4 = importAllResult;
let context = importAllResult.createContext(undefined);
const result = require("_handleConnectionOpen").fileFinishedImporting("modules/guild_role_subscriptions/GroupListingsFetchContext.tsx");

export const useGroupListingsFetchContext = function useGroupListingsFetchContext(useGroupListingsForGuild) {
  const context = importAllResult.useContext(closure_9);
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
    const effect = obj.useEffect(() => {
      fetchGroupListingsForGuild();
    }, items);
    return context.listingsLoaded;
  }
  obj = importAllResult;
};
export const GroupListingsFetchContextProvider = function GroupListingsFetchContextProvider(guildId) {
  let children;
  let refetchOnMount;
  guildId = guildId.guildId;
  const includeSoftDeleted = guildId.includeSoftDeleted;
  const countryCode = guildId.countryCode;
  const dontFetchWhileTrue = guildId.dontFetchWhileTrue;
  let stateFromStores;
  let first;
  let makeGroupListingIndexSubscriptionListingTag;
  ({ children, refetchOnMount } = guildId);
  const items = [first];
  stateFromStores = guildId(countryCode[5]).useStateFromStores(items, () => first.isConnected());
  let obj = guildId(countryCode[5]);
  const items1 = [makeGroupListingIndexSubscriptionListingTag];
  const stateFromStores1 = guildId(countryCode[5]).useStateFromStores(items1, () => {
    if (null != guildId) {
      let FETCHED = subscriptionGroupListingsForGuildFetchState.getSubscriptionGroupListingsForGuildFetchState(tmp);
    } else {
      FETCHED = outer1_7.FETCHED;
    }
    return FETCHED;
  });
  const tmp3 = dontFetchWhileTrue(stateFromStores.useState(true === refetchOnMount), 2);
  first = tmp3[0];
  makeGroupListingIndexSubscriptionListingTag = tmp3[1];
  const items2 = [stateFromStores, guildId, includeSoftDeleted, countryCode, dontFetchWhileTrue, first];
  let listingsLoaded = stateFromStores1 === FetchState.FETCHED;
  const fetchGroupListingsForGuild = stateFromStores.useCallback(() => {
    if (null != guildId) {
      if (stateFromStores) {
        if (true !== dontFetchWhileTrue) {
          let tmp5 = first;
          if (!first) {
            tmp5 = tmp4 === outer1_7.NOT_FETCHED;
          }
          if (tmp5) {
            subscriptionGroupListingsForGuildFetchState(false);
            let obj = includeSoftDeleted(countryCode[6]);
            obj = { includeSoftDeleted: null, countryCode: null };
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