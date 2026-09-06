// === Module 7162: useAnalyticsLocations ===

// Module 7162 (useAnalyticsLocations)
import _modDef12 from "module_12" /* 12 */;
import _modDef1332 from "module_1332" /* 1332 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const jsx = fn(21).jsx;
let context = noop.createContext([]);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_analytics/useAnalyticsLocations.tsx");

export default function useAnalyticsLocations() {
  let items = [...arguments];
  _slicedToArray = undefined;
  context = undefined;
  const tmp = _slicedToArray(context.useState(items), 2);
  const first = tmp[0];
  _slicedToArray = tmp[1];
  context = context.useContext(context);
  const items1 = [first, context];
  const memo = context.useMemo(() => {
    let tmp3 = context;
    if (0 !== first.length) {
      const flattenResult = _modDef12.flatten(tmp2);
      items = [];
      HermesBuiltin.arraySpread(flattenResult, HermesBuiltin.arraySpread(context, 0));
      tmp3 = items;
    }
    return tmp3;
  }, items1);
  const items2 = [first, context];
  const memo1 = context.useMemo(() => {
    const substr = first.slice(0, first.length - 1);
    let tmp2 = context;
    if (0 !== substr.length) {
      const flattenResult = _modDef12.flatten(substr);
      items = [];
      HermesBuiltin.arraySpread(flattenResult, HermesBuiltin.arraySpread(context, 0));
      tmp2 = items;
    }
    return tmp2;
  }, items2);
  const items3 = [items, first];
  const effect = context.useEffect(() => {
    if (!_modDef1332(items, first)) {
      closure_2(items);
    }
  }, items3);
  return { analyticsLocations: memo, sourceAnalyticsLocations: memo1, parentAnalyticsLocation: memo1[memo1.length - 1], newestAnalyticsLocation: memo[memo.length - 1] };
};
export const LocationContext = context;
export const AnalyticsLocationProvider = function AnalyticsLocationProvider(value) {
  return <context.Provider value={value.value}>{value.children}</context.Provider>;
};
export const useLocationStackFromLocationContext = function useLocationStackFromLocationContext() {
  context = noop.useContext(context);
  if (context == null) {
    context = [];
  }
  return context;
};