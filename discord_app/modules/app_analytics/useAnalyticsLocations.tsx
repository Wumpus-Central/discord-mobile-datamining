// === Module 6664: useAnalyticsLocations ===

// Module 6664 (useAnalyticsLocations)
import _modDef12 from "module_12" /* 12 */;
import c from "c" /* 576 */;
import _modDef1342 from "module_1342" /* 1342 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let context = noop.createContext([]);
fn(558);
let ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(3);
  ({ children, value } = arg0);
  if (cResult[0] === children) {
    if (cResult[1] === value) {
      let tmp2 = cResult[2];
    }
    return tmp2;
  }
  const tmp3 = <context.Provider value={value}>{children}</context.Provider>;
  cResult[0] = children;
  cResult[1] = value;
  cResult[2] = tmp3;
  tmp2 = tmp3;
}) : ((value) => <context.Provider value={value.value}>{value.children}</context.Provider>);
ReactCompilerGating = fn(558);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let items = [...arguments];
  items = undefined;
  first = undefined;
  dependencyMap = undefined;
  const cResult = items(576).c(15);
  [first, dependencyMap] = noop.useState(items);
  context = noop.useContext(context);
  if (cResult[0] === first) {
    if (cResult[1] === context) {
      let arr3 = cResult[2];
    }
    if (cResult[3] === first) {
      if (cResult[4] === context) {
        let arr5 = cResult[5];
      }
      if (cResult[6] === first) {
        if (cResult[7] === items) {
          let tmp21 = cResult[8];
          let tmp22 = cResult[9];
        }
        const effect = noop.useEffect(tmp21, tmp22);
        if (cResult[10] === arr3) {
          if (cResult[11] === arr5) {
            if (cResult[12] === tmp24) {
              if (cResult[13] === tmp25) {
                let tmp26 = cResult[14];
              }
              return tmp26;
            }
          }
        }
        const obj5 = { analyticsLocations: arr3, sourceAnalyticsLocations: arr5, parentAnalyticsLocation: arr5[arr5.length - 1], newestAnalyticsLocation: arr3[arr3.length - 1] };
        cResult[10] = arr3;
        cResult[11] = arr5;
        cResult[12] = arr5[arr5.length - 1];
        cResult[13] = arr3[arr3.length - 1];
        cResult[14] = obj5;
        tmp26 = obj5;
      }
      const fn = function x() {
        if (!_modDef1342(items, first)) {
          closure_2(items);
        }
      };
      const items1 = [items, first];
      cResult[6] = first;
      cResult[7] = items;
      cResult[8] = fn;
      cResult[9] = items1;
      tmp22 = items1;
      tmp21 = fn;
    }
    const substr = first.slice(0, first.length - 1);
    let tmp13 = context;
    if (0 !== substr.length) {
      const flattenResult = first(12).flatten(substr);
      const items2 = [];
      HermesBuiltin.arraySpread(flattenResult, HermesBuiltin.arraySpread(context, 0));
      tmp13 = items2;
      const obj4 = first(12);
    }
    cResult[3] = first;
    cResult[4] = context;
    cResult[5] = tmp13;
    arr5 = tmp13;
  }
  let tmp5 = context;
  if (0 !== first.length) {
    const flattenResult1 = first(12).flatten(first);
    const items3 = [];
    HermesBuiltin.arraySpread(flattenResult1, HermesBuiltin.arraySpread(context, 0));
    tmp5 = items3;
    const obj3 = first(12);
  }
  cResult[0] = first;
  cResult[1] = context;
  cResult[2] = tmp5;
  arr3 = tmp5;
  const obj = items(576);
}) : (() => {
  let items = [...arguments];
  context = undefined;
  const tmp = context(noop.useState(items), 2);
  const first = tmp[0];
  closure_2 = tmp[1];
  context = noop.useContext(context);
  const items1 = [first, context];
  const memo = noop.useMemo(() => {
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
  const memo1 = noop.useMemo(() => {
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
  const effect = noop.useEffect(() => {
    if (!_modDef1342(items, first)) {
      closure_2(items);
    }
  }, items3);
  return { analyticsLocations: memo, sourceAnalyticsLocations: memo1, parentAnalyticsLocation: memo1[memo1.length - 1], newestAnalyticsLocation: memo[memo.length - 1] };
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_analytics/useAnalyticsLocations.tsx");

export default tmp4;
export const LocationContext = context;
export const AnalyticsLocationProvider = tmp3;
export const useLocationStackFromLocationContext = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  context = noop.useContext(context);
  if (cResult[0] !== context) {
    let items = context;
    if (context == null) {
      items = [];
    }
    cResult[0] = context;
    cResult[1] = items;
    let tmp3 = items;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (() => {
  context = noop.useContext(context);
  if (context == null) {
    context = [];
  }
  return context;
});