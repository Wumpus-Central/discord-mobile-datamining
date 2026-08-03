import _slicedToArray from "_slicedToArray";
import noop from "noop";
import _handleConnectionOpen from "_handleConnectionOpen";
import fetchFingerprint from "fetchFingerprint";
import handleChannelSelect from "handleChannelSelect";
import { ALLOWED_TYPES } from "ALLOWED_TYPES";

const require = arg1;
const result = require("_handleConnectionOpen").fileFinishedImporting("modules/share/useShareSearchResults.tsx");

export const makeAutocompleterSearchParams = function makeAutocompleterSearchParams(arg0) {
  const query = require(9921) /* trackClose */.getQuickSwitcherOptions(arg0);
  let queryMode = query.queryMode;
  let resultTypes = ALLOWED_TYPES;
  let hasItem = null != queryMode;
  if (hasItem) {
    hasItem = resultTypes.includes(queryMode);
  }
  queryMode = null;
  if (hasItem) {
    const items = [queryMode];
    resultTypes = items;
  }
  return { query: query.query, queryMode, resultTypes };
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
  let stateFromStores;
  let search;
  let query;
  let results;
  let first;
  let c10;
  let queryMode2;
  let ref;
  let ref1;
  let current;
  let stateFromStores1;
  let stateFromStores2;
  let c17;
  let obj = targetDestination(originDestination[7]);
  let items = [search];
  stateFromStores = obj.useStateFromStores(items, () => search.getId());
  const items1 = [stateFromStores];
  const memo = flag.useMemo(() => {
    let obj = { searchOptions: null };
    obj = { blacklist: null, frecencyBoosters: true, userFilters: null };
    const items = ["user:" + stateFromStores];
    obj[0] = new Set(items);
    obj[0] = obj;
    return obj;
  }, items1);
  const tmp5 = selectedDestinations(originDestination[8])(memo);
  search = tmp5.search;
  query = tmp5.query;
  results = tmp5.results;
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
  c10 = tmp11;
  const items3 = [tmp9[1]];
  queryMode2 = first.queryMode;
  const callback = obj2.useCallback((arg0) => {
    const query = targetDestination(originDestination[6]).getQuickSwitcherOptions(arg0);
    let queryMode = query.queryMode;
    let resultTypes = results;
    let hasItem = null != queryMode;
    if (hasItem) {
      hasItem = resultTypes.includes(queryMode);
    }
    queryMode = null;
    if (hasItem) {
      const items = [queryMode];
      resultTypes = items;
    }
    return c10({ query: query.query, queryMode, resultTypes });
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
  let tmpResult = tmp(tmp2[9]);
  const frecencySettings = tmpResult.useFrecencySettings();
  tmpResult = tmp(tmp2[7]);
  const items6 = [query];
  stateFromStores1 = tmpResult.useStateFromStores(items6, () => query.getFrequentlyWithoutFetchingLatest());
  const obj3 = targetDestination(originDestination[6]);
  const items7 = [stateFromStores];
  stateFromStores2 = targetDestination(originDestination[7]).useStateFromStores(items7, () => stateFromStores.isConnected());
  c17 = tmp20;
  obj = { results: obj2.useMemo(() => selectedDestinations(originDestination[10])({ results, hasQuery: c17, queryMode: queryMode2, targetDestination, frequentChannels: stateFromStores1, selectedDestinations, pinnedDestinations: current, originDestination, channelFilter, includeMissingDMs: flag, isConnected: stateFromStores2 }), items8), updateSearchText: callback };
  items8 = [results, "" !== query, queryMode2, targetDestination, stateFromStores1, selectedDestinations, current, originDestination, channelFilter, flag, stateFromStores2];
  return obj;
};