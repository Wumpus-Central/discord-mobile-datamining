// discord_app/modules/share/useShareSearchResults.tsx
import formatResultsDefault from "formatResults.tsx";
import ShareConstants from "ShareConstants.tsx";
import QuickSwitcherActionCreators from "../quickswitcher/QuickSwitcherActionCreators.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../_runtime/00019_react.js";
import GatewayConnectionStore from "../gateway/GatewayConnectionStore.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import FrecencyStore from "../../stores/FrecencyStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

const ALLOWED_TYPES = ShareConstants.ALLOWED_TYPES;
const result = size.fileFinishedImporting("modules/share/useShareSearchResults.tsx");

export const makeAutocompleterSearchParams = function makeAutocompleterSearchParams(arg0) {
  const obj = QuickSwitcherActionCreators;
  const quickSwitcherOptions = obj.getQuickSwitcherOptions(arg0);
  const queryMode = quickSwitcherOptions.queryMode;
  let resultTypes = ALLOWED_TYPES;
  let hasItem = null != queryMode;
  const query = quickSwitcherOptions.query;
  if (hasItem) {
    hasItem = resultTypes.includes(queryMode);
  }
  let queryMode2 = null;
  if (hasItem) {
    const items = [queryMode];
    queryMode2 = queryMode;
    resultTypes = items;
  }
  return { query, queryMode: queryMode2, resultTypes };
};
export const useShareSearchResults = function useShareSearchResults(targetDestination) {
  let items8;
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
  let closure_10;
  let queryMode2;
  let ref;
  let ref1;
  let current;
  let stateFromStores1;
  let stateFromStores2;
  let hasQuery;
  let obj = targetDestination(originDestination[7]);
  let items = [search];
  const stateFromStores = obj.useStateFromStores(items, () => search.getId());
  let obj2 = flag;
  const items1 = [stateFromStores];
  const memo = flag.useMemo(() => {
    let items;
    let obj2;
    const obj = { searchOptions: obj2 };
    obj2 = { blacklist: new Set(items), frecencyBoosters: true, userFilters: null };
    items = ["user:" + stateFromStores];
    new Set(items);
    return obj;
  }, items1);
  const tmp5 = selectedDestinations(originDestination[8])(memo);
  search = tmp5.search;
  let query = tmp5.query;
  const results = tmp5.results;
  const useState = flag.useState;
  const obj3 = targetDestination(originDestination[6]);
  let quickSwitcherOptions = obj3.getQuickSwitcherOptions("");
  let queryMode = quickSwitcherOptions.queryMode;
  let obj4 = results;
  let hasItem = null != queryMode;
  const query2 = quickSwitcherOptions.query;
  if (hasItem) {
    hasItem = obj4.includes(queryMode);
  }
  let tmp8 = null;
  if (hasItem) {
    const items2 = [queryMode];
    tmp8 = queryMode;
    obj4 = items2;
  }
  const tmp9 = channelFilter(useState({ query: query2, queryMode: tmp8, resultTypes: obj4 }), 2);
  first = tmp9[0];
  closure_10 = tmp11;
  const items3 = [tmp9[1]];
  queryMode2 = first.queryMode;
  const callback = obj2.useCallback((arg0) => {
    const obj = QuickSwitcherActionCreators;
    const quickSwitcherOptions = obj.getQuickSwitcherOptions(arg0);
    const queryMode = quickSwitcherOptions.queryMode;
    let resultTypes = ALLOWED_TYPES;
    let hasItem = null != queryMode;
    query = quickSwitcherOptions.query;
    if (hasItem) {
      hasItem = resultTypes.includes(queryMode);
    }
    queryMode2 = null;
    if (hasItem) {
      const items = [queryMode];
      queryMode2 = queryMode;
      resultTypes = items;
    }
    return closure_10({ query, queryMode: queryMode2, resultTypes });
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
    const obj = { query: first.query, resultTypes: first.resultTypes };
    search(obj);
  }, items5);
  const tmpResult = targetDestination(originDestination[9]);
  const frecencySettings = tmpResult.useFrecencySettings(flag2);
  const items6 = [query];
  const tmpResult3 = targetDestination(originDestination[7]);
  stateFromStores1 = tmpResult3.useStateFromStores(items6, () => query.getFrequentlyWithoutFetchingLatest());
  const items7 = [stateFromStores];
  const tmpResult4 = targetDestination(originDestination[7]);
  stateFromStores2 = tmpResult4.useStateFromStores(items7, () => stateFromStores.isConnected());
  hasQuery = tmp20;
  const obj5 = {
    results: obj2.useMemo(() => {
      const obj = {
        results,
        hasQuery,
        queryMode: queryMode2,
        targetDestination,
        frequentChannels: stateFromStores1,
        selectedDestinations,
        pinnedDestinations: current,
        originDestination,
        channelFilter,
        includeMissingDMs: flag,
        isConnected: stateFromStores2,
      };
      return formatResultsDefault(obj);
    }, items8),
    updateSearchText: callback,
  };
  items8 = [
    results,
    "" !== query,
    queryMode2,
    targetDestination,
    stateFromStores1,
    selectedDestinations,
    current,
    originDestination,
    channelFilter,
    flag,
    stateFromStores2,
  ];
  return obj5;
};
