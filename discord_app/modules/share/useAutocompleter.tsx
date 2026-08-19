// discord_app/modules/share/useAutocompleter.tsx
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../_runtime/00019_noop.js";

const result = require("obj132").fileFinishedImporting("modules/share/useAutocompleter.tsx");

export default function useAutocompleter(searchOptions) {
  searchOptions = searchOptions.searchOptions;
  dependencyMap = undefined;
  let callback;
  [tmp2, c1] = callback(React.useState({ results: [], query: "" }), 2);
  const tmp3 = searchOptions(7127)(() => {
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
      tmp2 = searchOptions !== options.options;
    }
    if (tmp2) {
      options.setOptions(searchOptions);
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
        const resultTypes2 = options.resultTypes;
        tmp = resultTypes.length === resultTypes2.size && resultTypes.every((item, index) => resultTypes2.has(item));
        const tmp2 = resultTypes.length === resultTypes2.size && resultTypes.every((item, index) => resultTypes2.has(item));
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
    }, items2)
  };
};