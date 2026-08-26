// === Module 11320: useAutocompleter ===

// Module 11320 (useAutocompleter)
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "noop" /* 19 */;

const result = require("set").fileFinishedImporting("modules/share/useAutocompleter.tsx");

export default function useAutocompleter(searchOptions) {
  searchOptions = searchOptions.searchOptions;
  dependencyMap = undefined;
  let callback;
  [tmp2, c1] = callback(React.useState({ results: [], query: "" }), 2);
  const tmp3 = searchOptions(5888)(() => {
    const obj = new searchOptions(_undefined[3])((results, query) => {
      callback({ results, query });
    });
    obj.setLimit(20);
    obj.search("");
    return obj;
  });
  callback = tmp3;
  const items = [tmp3];
  const effect = React.useEffect(() => () => closure_2.destroy(), items);
  const items1 = [tmp3, searchOptions];
  const effect1 = React.useEffect(() => {
    let tmp2 = null != searchOptions;
    if (tmp2) {
      tmp2 = tmp !== options.options;
    }
    if (tmp2) {
      options.setOptions(tmp);
    }
  }, items1);
  let tmp = callback(React.useState({ results: [], query: "" }), 2);
  const items2 = [tmp3];
  const merged = Object.assign(tmp2);
  return {
    search: React.useCallback((arg0) => {
      ({ query, resultTypes } = arg0);
      let tmp = null != options.resultTypes;
      if (tmp) {
        const resultTypes2 = obj.resultTypes;
        tmp = resultTypes.length === resultTypes2.size && resultTypes.every((arg0) => resultTypes2.has(arg0));
        const tmp2 = resultTypes.length === resultTypes2.size && resultTypes.every((arg0) => resultTypes2.has(arg0));
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
    }, items2)
  };
};