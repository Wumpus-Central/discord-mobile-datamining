// === Module 11574: useAutocompleter ===

// Module 11574 (useAutocompleter)
import useInitialValueDefault from "useInitialValue" /* 6169 */;
import sortByMatchScoreDefault from "sortByMatchScore" /* 8699 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/share/useAutocompleter.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useAutocompleter(searchOptions) {
  const cResult = searchOptions(576).c(14);
  searchOptions = searchOptions.searchOptions;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { results: [], query: "" };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  let obj = searchOptions(576);
  [tmp5, importDefault] = noop.useState(first);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function c() {
      const obj = new sortByMatchScoreDefault((results, query) => {
        closure_1_1({ results, query });
      });
      obj.setLimit(20);
      obj.search("");
      return obj;
    };
    cResult[1] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  const tmp7 = useInitialValueDefault(tmp6);
  dependencyMap = tmp7;
  if (cResult[2] !== tmp7) {
    const fn2 = function v() {
      return () => options.destroy();
    };
    const items = [tmp7];
    cResult[2] = tmp7;
    cResult[3] = fn2;
    cResult[4] = items;
    let tmp9 = items;
    let tmp8 = fn2;
  } else {
    tmp8 = cResult[3];
    tmp9 = cResult[4];
  }
  const effect = noop.useEffect(tmp8, tmp9);
  if (cResult[5] === tmp7) {
    if (cResult[6] === searchOptions) {
      let tmp11 = cResult[7];
      let tmp12 = cResult[8];
    }
    const effect1 = noop.useEffect(tmp11, tmp12);
    if (cResult[9] !== tmp7) {
      const fn3 = function _(arg0) {
        ({ query, resultTypes } = arg0);
        let tmp = null != options.resultTypes;
        if (tmp) {
          const resultTypes2 = options.resultTypes;
          tmp = resultTypes.length === resultTypes2.size && resultTypes.every((item) => resultTypes2.has(item));
          const tmp2 = resultTypes.length === resultTypes2.size && resultTypes.every((item) => resultTypes2.has(item));
        }
        if (!tmp) {
          options.setResultTypes(resultTypes);
          let num = 20;
          if (1 === resultTypes.length) {
            num = 50;
          }
          options.setLimit(num);
        }
        let str = "";
        if ("" !== query.trim()) {
          str = query;
        }
        options.search(str);
      };
      cResult[9] = tmp7;
      cResult[10] = fn3;
      let tmp14 = fn3;
    } else {
      tmp14 = cResult[10];
    }
    if (cResult[11] === tmp14) {
      if (cResult[12] === tmp5) {
        let tmp15 = cResult[13];
      }
      return tmp15;
    }
    const obj4 = { search: tmp14 };
    const merged = Object.assign(tmp5);
    cResult[11] = tmp14;
    cResult[12] = tmp5;
    cResult[13] = obj4;
    tmp15 = obj4;
  }
  class E {
    constructor() {
      tmp = searchOptions;
      tmp2 = null != searchOptions;
      if (tmp2) {
        tmp3 = closure_2;
        tmp2 = tmp !== closure_2.options;
      }
      if (tmp2) {
        tmp4 = closure_2;
        setOptionsResult = closure_2.setOptions(tmp);
      }
      return;
    }
  }
  const items1 = [tmp7, searchOptions];
  cResult[5] = tmp7;
  cResult[6] = searchOptions;
  cResult[7] = E;
  cResult[8] = items1;
  tmp12 = items1;
  tmp11 = E;
  const tmp4 = _slicedToArray(noop.useState(first), 2);
}) : (function useAutocompleter(searchOptions) {
  searchOptions = searchOptions.searchOptions;
  importDefault = undefined;
  [tmp2, c1] = noop.useState({ results: [], query: "" });
  const tmp3 = useInitialValueDefault(() => {
    const obj = new sortByMatchScoreDefault((results, query) => {
      closure_1_1({ results, query });
    });
    obj.setLimit(20);
    obj.search("");
    return obj;
  });
  dependencyMap = tmp3;
  const items = [tmp3];
  const effect = noop.useEffect(() => () => options.destroy(), items);
  const items1 = [tmp3, searchOptions];
  const effect1 = noop.useEffect(() => {
    let tmp2 = null != searchOptions;
    if (tmp2) {
      tmp2 = searchOptions !== options.options;
    }
    if (tmp2) {
      options.setOptions(searchOptions);
    }
  }, items1);
  let obj = { search: null };
  const items2 = [tmp3];
  obj.search = noop.useCallback((arg0) => {
    ({ query, resultTypes } = arg0);
    let tmp = null != options.resultTypes;
    if (tmp) {
      const resultTypes2 = options.resultTypes;
      tmp = resultTypes.length === resultTypes2.size && resultTypes.every((item) => resultTypes2.has(item));
      const tmp2 = resultTypes.length === resultTypes2.size && resultTypes.every((item) => resultTypes2.has(item));
    }
    if (!tmp) {
      options.setResultTypes(resultTypes);
      let num = 20;
      if (1 === resultTypes.length) {
        num = 50;
      }
      options.setLimit(num);
    }
    let str = "";
    if ("" !== query.trim()) {
      str = query;
    }
    options.search(str);
  }, items2);
  const merged = Object.assign(tmp2);
  return obj;
});