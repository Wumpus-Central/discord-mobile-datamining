// === Module 6664: useAnalyticsLocations ===

// Module 6664 (useAnalyticsLocations)
import _modDef12 from "module_12" /* 12 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import _modDef1342 from "module_1342" /* 1342 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap;

const jsx = Fragment.jsx;
let context = react.createContext([]);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let children;
  let value;
  const obj = react2;
  const cResult = obj.c(3);
  ({ children, value } = arg0);
  if (cResult[0] === children) {
    let tmp2;
    if (cResult[1] === value) {
      tmp2 = cResult[2];
    }
    return tmp2;
  }
  const tmp3 = <context.Provider value={value}>{children}</context.Provider>;
  cResult[0] = children;
  cResult[1] = value;
  cResult[2] = tmp3;
  tmp2 = tmp3;
}) : ((value) => <context.Provider value={value.value}>{value.children}</context.Provider>);
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let closure_2;
  let first;
  let items = [...arguments];
  items = undefined;
  first = undefined;
  dependencyMap = undefined;
  const obj = items(576);
  const cResult = obj.c(15);
  [first, dependencyMap] = react.useState(items);
  context = react.useContext(context);
  if (cResult[0] === first) {
    let arr3;
    if (cResult[1] === context) {
      arr3 = cResult[2];
    }
    if (cResult[3] === first) {
      let arr5;
      if (cResult[4] === context) {
        arr5 = cResult[5];
      }
      if (cResult[6] === first) {
        let tmp22;
        let tmp23;
        if (cResult[7] === items) {
          tmp22 = cResult[8];
          tmp23 = cResult[9];
        }
        const effect = react.useEffect(tmp22, tmp23);
        if (cResult[10] === arr3) {
          if (cResult[11] === arr5) {
            if (cResult[12] === arr5[arr5.length - 1]) {
              let tmp27;
              if (cResult[13] === arr3[arr3.length - 1]) {
                tmp27 = cResult[14];
              }
              return tmp27;
            }
          }
        }
        const obj5 = { analyticsLocations: arr3, sourceAnalyticsLocations: arr5, parentAnalyticsLocation: arr5[arr5.length - 1], newestAnalyticsLocation: arr3[arr3.length - 1] };
        cResult[10] = arr3;
        cResult[11] = arr5;
        cResult[12] = arr5[arr5.length - 1];
        cResult[13] = arr3[arr3.length - 1];
        cResult[14] = obj5;
        tmp27 = obj5;
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
      tmp23 = items1;
      tmp22 = fn;
    }
    const substr = first.slice(0, first.length - 1);
    let tmp14 = context;
    if (0 !== substr.length) {
      const obj4 = first(12);
      const items2 = [];
      const flattenResult = obj4.flatten(substr);
      HermesBuiltin.arraySpread(items2, flattenResult, HermesBuiltin.arraySpread(items2, context, 0));
      tmp14 = items2;
    }
    cResult[3] = first;
    cResult[4] = context;
    cResult[5] = tmp14;
    arr5 = tmp14;
  }
  let tmp6 = context;
  if (0 !== first.length) {
    const obj3 = first(12);
    const items3 = [];
    const flattenResult1 = obj3.flatten(first);
    HermesBuiltin.arraySpread(items3, flattenResult1, HermesBuiltin.arraySpread(items3, context, 0));
    tmp6 = items3;
  }
  cResult[0] = first;
  cResult[1] = context;
  cResult[2] = tmp6;
  arr3 = tmp6;
}) : (() => {
  let items = [...arguments];
  context = undefined;
  const tmp = context(react.useState(items), 2);
  const first = tmp[0];
  let closure_2 = tmp[1];
  context = react.useContext(context);
  const items1 = [first, context];
  const memo = react.useMemo(() => {
    let tmp4 = context;
    if (0 !== first.length) {
      const obj = _modDef12;
      items = [];
      const flattenResult = obj.flatten(tmp3);
      HermesBuiltin.arraySpread(items, flattenResult, HermesBuiltin.arraySpread(items, context, 0));
      tmp4 = items;
    }
    return tmp4;
  }, items1);
  const items2 = [first, context];
  const memo1 = react.useMemo(() => {
    const substr = first.slice(0, first.length - 1);
    let tmp3 = context;
    if (0 !== substr.length) {
      const obj = _modDef12;
      items = [];
      const flattenResult = obj.flatten(substr);
      HermesBuiltin.arraySpread(items, flattenResult, HermesBuiltin.arraySpread(items, context, 0));
      tmp3 = items;
    }
    return tmp3;
  }, items2);
  const items3 = [items, first];
  const effect = react.useEffect(() => {
    if (!_modDef1342(items, first)) {
      closure_2(items);
    }
  }, items3);
  let obj = { analyticsLocations: memo, sourceAnalyticsLocations: memo1, parentAnalyticsLocation: memo1[memo1.length - 1], newestAnalyticsLocation: memo[memo.length - 1] };
  return obj;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp3;
  const obj = react2;
  const cResult = obj.c(2);
  context = react.useContext(context);
  if (cResult[0] !== context) {
    let items = context;
    if (context == null) {
      items = [];
    }
    cResult[0] = context;
    cResult[1] = items;
    tmp3 = items;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (() => {
  context = react.useContext(context);
  if (context == null) {
    context = [];
  }
  return context;
});
const result = size.fileFinishedImporting("modules/app_analytics/useAnalyticsLocations.tsx");

export default tmp4;
export const LocationContext = context;
export const AnalyticsLocationProvider = tmp3;
export const useLocationStackFromLocationContext = tmp5;