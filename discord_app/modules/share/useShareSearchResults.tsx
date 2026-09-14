// === Module 11118: useShareSearchResults ===

// Module 11118 (useShareSearchResults)
import formatResultsDefault from "formatResults" /* 11114 */;
import QuickSwitcherActionCreators from "QuickSwitcherActionCreators" /* 11119 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5358 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import FrecencyStore from "FrecencyStore" /* 5590 */;

require = fn;
const ALLOWED_TYPES = fn(11115).ALLOWED_TYPES;
const size = fn(2);
const result = size.fileFinishedImporting("modules/share/useShareSearchResults.tsx");

export const makeAutocompleterSearchParams = function makeAutocompleterSearchParams(arg0) {
  const query = QuickSwitcherActionCreators.getQuickSwitcherOptions(arg0);
  const queryMode = query.queryMode;
  let resultTypes = ALLOWED_TYPES;
  let hasItem = null != queryMode;
  if (hasItem) {
    hasItem = resultTypes.includes(queryMode);
  }
  let queryMode2 = null;
  if (hasItem) {
    const items = [queryMode];
    queryMode2 = queryMode;
    resultTypes = items;
  }
  return { query: query.query, queryMode: queryMode2, resultTypes };
};
export const useShareSearchResults = function useShareSearchResults(targetDestination) {
  targetDestination = targetDestination.targetDestination;
  const selectedDestinations = targetDestination.selectedDestinations;
  const originDestination = targetDestination.originDestination;
  const channelFilter = targetDestination.channelFilter;
  let flag = targetDestination.includeMissingDMs;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = targetDestination.includeFrecency;
  if (flag2 === undefined) {
    flag2 = true;
  }
  let search;
  let first;
  closure_10 = undefined;
  let queryMode2;
  let ref;
  let ref1;
  let current;
  let stateFromStores1;
  let stateFromStores2;
  let hasQuery;
  let items = [search];
  const stateFromStores = targetDestination(originDestination[7]).useStateFromStores(items, () => search.getId());
  const items1 = [stateFromStores];
  const memo = flag.useMemo(() => {
    const obj = { searchOptions: null };
    const obj2 = { blacklist: null, frecencyBoosters: true, userFilters: null };
    const items = ["user:" + stateFromStores];
    obj2.blacklist = new Set(items);
    obj.searchOptions = obj2;
    return obj;
  }, items1);
  const tmp5 = selectedDestinations(originDestination[8])(memo);
  search = tmp5.search;
  let query = tmp5.query;
  const results = tmp5.results;
  let obj = targetDestination(originDestination[7]);
  const quickSwitcherOptions = targetDestination(originDestination[6]).getQuickSwitcherOptions("");
  let queryMode = quickSwitcherOptions.queryMode;
  let obj4 = results;
  let hasItem = null != queryMode;
  if (hasItem) {
    hasItem = obj4.includes(queryMode);
  }
  let tmp8 = null;
  if (hasItem) {
    const items2 = [queryMode];
    tmp8 = queryMode;
    obj4 = items2;
  }
  const tmp9 = channelFilter(flag.useState({ query: quickSwitcherOptions.query, queryMode: tmp8, resultTypes: obj4 }), 2);
  first = tmp9[0];
  closure_10 = tmp11;
  const items3 = [tmp9[1]];
  queryMode2 = first.queryMode;
  const callback = obj2.useCallback((arg0) => {
    query = QuickSwitcherActionCreators.getQuickSwitcherOptions(arg0);
    const queryMode = query.queryMode;
    let resultTypes = ALLOWED_TYPES;
    let hasItem = null != queryMode;
    if (hasItem) {
      hasItem = resultTypes.includes(queryMode);
    }
    queryMode2 = null;
    if (hasItem) {
      const items = [queryMode];
      queryMode2 = queryMode;
      resultTypes = items;
    }
    return closure_10({ query: query.query, queryMode: queryMode2, resultTypes });
  }, items3);
  ref = obj2.useRef(null);
  ref1 = obj2.useRef(selectedDestinations);
  current = selectedDestinations;
  if (query === ref.current) {
    current = ref1.current;
  }
  const items4 = [query, selectedDestinations];
  const effect = obj2.useEffect(() => {
    if (query !== ref.current) {
      ref1.current = selectedDestinations;
    }
    ref.current = query;
  }, items4);
  const items5 = [search, first];
  const layoutEffect = obj2.useLayoutEffect(() => {
    search({ query: first.query, resultTypes: first.resultTypes });
  }, items5);
  const obj3 = targetDestination(originDestination[6]);
  const frecencySettings = targetDestination(originDestination[9]).useFrecencySettings(flag2);
  const tmpResult = targetDestination(originDestination[9]);
  const items6 = [query];
  stateFromStores1 = targetDestination(originDestination[7]).useStateFromStores(items6, () => query.getFrequentlyWithoutFetchingLatest());
  const tmpResult3 = targetDestination(originDestination[7]);
  const items7 = [stateFromStores];
  stateFromStores2 = targetDestination(originDestination[7]).useStateFromStores(items7, () => stateFromStores.isConnected());
  hasQuery = tmp20;
  const obj5 = { results: null, updateSearchText: callback };
  const items8 = [results, "" !== query, queryMode2, targetDestination, stateFromStores1, selectedDestinations, current, originDestination, channelFilter, flag, stateFromStores2];
  obj5.results = flag.useMemo(() => formatResultsDefault({ results, hasQuery, queryMode: queryMode2, targetDestination, frequentChannels: stateFromStores1, selectedDestinations, pinnedDestinations: current, originDestination, channelFilter, includeMissingDMs: flag, isConnected: stateFromStores2 }), items8);
  return obj5;
};