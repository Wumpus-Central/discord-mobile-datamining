// === Module 5961: context ===

// Module 5961 (context)
import closure_2 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

let c3 = importAllResult;
let context = importAllResult.createContext([]);
const result = require("set").fileFinishedImporting("modules/app_analytics/useAnalyticsLocations.tsx");

export default function useAnalyticsLocations() {
  let items = [...arguments];
  let first;
  let callback;
  context = undefined;
  const tmp = callback(context.useState(items), 2);
  first = tmp[0];
  callback = tmp[1];
  context = context.useContext(context);
  const items1 = [first, context];
  const memo = context.useMemo(() => {
    let tmp3 = context;
    if (0 !== first.length) {
      const flattenResult = items(first[3]).flatten(tmp2);
      items = [];
      HermesBuiltin.arraySpread(flattenResult, HermesBuiltin.arraySpread(tmp, 0));
      tmp3 = items;
      const obj = items(first[3]);
    }
    return tmp3;
  }, items1);
  const items2 = [first, context];
  const memo1 = context.useMemo(() => {
    const substr = first.slice(0, first.length - 1);
    let tmp2 = context;
    if (0 !== substr.length) {
      const flattenResult = items(first[3]).flatten(substr);
      items = [];
      HermesBuiltin.arraySpread(flattenResult, HermesBuiltin.arraySpread(tmp, 0));
      tmp2 = items;
      const obj = items(first[3]);
    }
    return tmp2;
  }, items2);
  const items3 = [items, first];
  const effect = context.useEffect(() => {
    if (!items(first[4])(items, first)) {
      callback(items);
    }
  }, items3);
  return { analyticsLocations: memo, sourceAnalyticsLocations: memo1, parentAnalyticsLocation: memo1[memo1.length - 1], newestAnalyticsLocation: memo[memo.length - 1] };
};
export const LocationContext = context;
export const AnalyticsLocationProvider = function AnalyticsLocationProvider(value) {
  return <context.Provider value={arg0.value}>{arg0.children}</context.Provider>;
};
export const useLocationStackFromLocationContext = function useLocationStackFromLocationContext() {
  context = importAllResult.useContext(context);
  if (context == null) {
    context = [];
  }
  return context;
};