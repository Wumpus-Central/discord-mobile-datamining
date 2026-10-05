// === Module 10722: useAutocompleter ===

// Module 10722 (useAutocompleter)
import useInitialValueDefault from "useInitialValue" /* 5984 */;
import _modDef9496 from "module_9496" /* 9496 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault, searchOptions;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((searchOptions) => {
  let first;
  let options;
  let tmp5;
  let tmp6;
  let tmp8;
  let tmp9;
  let tmp = dependencyMap;
  let obj = searchOptions(576);
  const cResult = obj.c(14);
  searchOptions = searchOptions.searchOptions;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { results: [], query: "" };
    let num = 0;
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  [tmp5, importDefault] = react.useState(first);
  _slicedToArray(react.useState(first), 2);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o() {
      let obj = new _modDef9496((results, query) => {
        const obj = { results, query };
        closure_1_1(obj);
      });
      obj.setLimit(20);
      obj.search("");
      return obj;
    };
    cResult[1] = fn;
    tmp6 = fn;
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
    tmp9 = items;
    tmp8 = fn2;
  } else {
    tmp8 = cResult[3];
    tmp9 = cResult[4];
  }
  const effect = react.useEffect(tmp8, tmp9);
  if (cResult[5] === tmp7) {
    let tmp11;
    let tmp12;
    let tmp14;
    if (cResult[6] === searchOptions) {
      tmp11 = cResult[7];
      tmp12 = cResult[8];
    }
    const effect1 = react.useEffect(tmp11, tmp12);
    if (cResult[9] !== tmp7) {
      const fn3 = function _(arg0) {
        let query;
        let resultTypes;
        ({ query, resultTypes } = arg0);
        let tmp = null != options.resultTypes;
        if (tmp) {
          const resultTypes2 = options.resultTypes;
          tmp = resultTypes.length === resultTypes2.size && resultTypes.every((item) => resultTypes2.has(item));
          resultTypes.length === resultTypes2.size && resultTypes.every((item) => resultTypes2.has(item));
        }
        if (!tmp) {
          options.setResultTypes(resultTypes);
          let num = 20;
          const setLimit = options.setLimit;
          if (1 === resultTypes.length) {
            num = 50;
          }
          setLimit(num);
        }
        const search = options.search;
        let str = "";
        if ("" !== query.trim()) {
          str = query;
        }
        search(str);
      };
      cResult[9] = tmp7;
      cResult[10] = fn3;
      tmp14 = fn3;
    } else {
      tmp14 = cResult[10];
    }
    if (cResult[11] === tmp14) {
      let tmp15;
      if (cResult[12] === tmp5) {
        tmp15 = cResult[13];
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
      const tmp2 = null != searchOptions && searchOptions !== options.options;
      if (tmp2) {
        options.setOptions(searchOptions);
      }
    }
  }
  const items1 = [tmp7, searchOptions];
  cResult[5] = tmp7;
  cResult[6] = searchOptions;
  cResult[7] = E;
  cResult[8] = items1;
  tmp12 = items1;
  tmp11 = E;
}) : ((searchOptions) => {
  let c1;
  let items2;
  let options;
  let tmp2;
  searchOptions = searchOptions.searchOptions;
  importDefault = undefined;
  let tmp = _slicedToArray(react.useState({ results: [], query: "" }), 2);
  [tmp2, c1] = tmp;
  const tmp3 = useInitialValueDefault(() => {
    let obj = new _modDef9496((results, query) => {
      const obj = { results, query };
      closure_1_1(obj);
    });
    obj.setLimit(20);
    obj.search("");
    return obj;
  });
  dependencyMap = tmp3;
  const items = [tmp3];
  const effect = react.useEffect(() => () => options.destroy(), items);
  const items1 = [tmp3, searchOptions];
  const effect1 = react.useEffect(() => {
    const tmp2 = null != searchOptions && searchOptions !== options.options;
    if (tmp2) {
      options.setOptions(searchOptions);
    }
  }, items1);
  let obj = {
    search: react.useCallback((arg0) => {
      let query;
      let resultTypes;
      ({ query, resultTypes } = arg0);
      let tmp = null != options.resultTypes;
      if (tmp) {
        const resultTypes2 = options.resultTypes;
        tmp = resultTypes.length === resultTypes2.size && resultTypes.every((item) => resultTypes2.has(item));
        resultTypes.length === resultTypes2.size && resultTypes.every((item) => resultTypes2.has(item));
      }
      if (!tmp) {
        options.setResultTypes(resultTypes);
        let num = 20;
        const setLimit = options.setLimit;
        if (1 === resultTypes.length) {
          num = 50;
        }
        setLimit(num);
      }
      const search = options.search;
      let str = "";
      if ("" !== query.trim()) {
        str = query;
      }
      search(str);
    }, items2)
  };
  items2 = [tmp3];
  const merged = Object.assign(tmp2);
  return obj;
});
const result = size.fileFinishedImporting("modules/share/useAutocompleter.tsx");

export default tmp2;