// discord_app/modules/share/useAutocompleter.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";

const result = require("useInitialValue").fileFinishedImporting("modules/share/useAutocompleter.tsx");

export default function useAutocompleter(searchOptions) {
  let c1;
  let tmp2;
  searchOptions = searchOptions.searchOptions;
  let dependencyMap;
  let callback;
  [tmp2, c1] = callback(React.useState({ results: [], query: "" }), 2);
  const tmp3 = searchOptions(5756)(() => {
    const obj = new searchOptions(_undefined[3])((results, query) => {
      callback({ results, query });
    });
    obj.setLimit(20);
    obj.search("");
    return obj;
  });
  callback = tmp3;
  const items = [tmp3];
  const effect = React.useEffect(() => () => _slicedToArray.destroy(), items);
  const items1 = [tmp3, searchOptions];
  const effect1 = React.useEffect(() => {
    let tmp2 = null != searchOptions;
    if (tmp2) {
      tmp2 = tmp !== _undefined2.options;
    }
    if (tmp2) {
      _undefined2.setOptions(tmp);
    }
  }, items1);
  let tmp = callback(React.useState({ results: [], query: "" }), 2);
  const items2 = [tmp3];
  const merged = Object.assign(tmp2);
  return {
    search: React.useCallback((arg0) => {
      let query;
      let resultTypes;
      ({ query, resultTypes } = arg0);
      let tmp = null != _undefined2.resultTypes;
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
      _undefined2.search(str);
    }, items2)
  };
};