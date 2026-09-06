// === Module 10992: useAutocompleter ===

// Module 10992 (useAutocompleter)
import sortByMatchScoreDefault from "sortByMatchScore" /* 9835 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/share/useAutocompleter.tsx");

export default function useAutocompleter(searchOptions) {
  searchOptions = searchOptions.searchOptions;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  [tmp2, c1] = _slicedToArray(noop.useState({ results: [], query: "" }), 2);
  const tmp3 = searchOptions(5598)(() => {
    const obj = new sortByMatchScoreDefault((results, query) => {
      closure_1_1({ results, query });
    });
    obj.setLimit(20);
    obj.search("");
    return obj;
  });
  _slicedToArray = tmp3;
  const items = [tmp3];
  const effect = noop.useEffect(() => () => options.destroy(), items);
  const items1 = [tmp3, searchOptions];
  const effect1 = noop.useEffect(() => {
    let tmp2 = null != searchOptions;
    if (tmp2) {
      tmp2 = tmp !== options.options;
    }
    if (tmp2) {
      options.setOptions(tmp);
    }
  }, items1);
  let obj = { search: null };
  const items2 = [tmp3];
  obj.search = noop.useCallback((arg0) => {
    ({ query, resultTypes } = arg0);
    let tmp = null != options.resultTypes;
    if (tmp) {
      const resultTypes2 = obj.resultTypes;
      tmp = resultTypes.length === resultTypes2.size && resultTypes.every((item) => resultTypes2.has(item));
      const tmp2 = resultTypes.length === resultTypes2.size && resultTypes.every((item) => resultTypes2.has(item));
    }
    if (!tmp) {
      obj.setResultTypes(resultTypes);
      let num = 20;
      if (1 === resultTypes.length) {
        num = 50;
      }
      obj.setLimit(num);
    }
    let str = "";
    if ("" !== query.trim()) {
      str = query;
    }
    options.search(str);
  }, items2);
  const merged = Object.assign(tmp2);
  return obj;
};