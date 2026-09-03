// === Module 9127: useEmojiPickerSearchState ===

// Module 9127 (useEmojiPickerSearchState)
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "noop" /* 19 */;
import closure_4 from "getEmojiToGroupId" /* 5410 */;

const require = arg1;
let result = require("set").fileFinishedImporting("modules/emoji_picker/native/components/useEmojiPickerSearchState.tsx");

export default function useEmojiPickerSearchState(arg0, arg1, arg2, arg3) {
  closure_0 = arg0;
  closure_1 = arg1;
  let callback = arg2;
  const React = arg3;
  const ref = React.useRef("");
  const tmp2 = callback(React.useState(null), 2);
  closure_5 = tmp2[1];
  const items = [arg1, arg0, arg2, arg3];
  return {
    handleTextChange: React.useCallback((arr) => {
      const callback = arr;
      if ("" !== arr) {
        let substr = arr;
        if (":" === arr[0]) {
          substr = arr.slice(1);
        }
        const FrecencyUserSettingsActionCreators = callback(1369).FrecencyUserSettingsActionCreators;
        const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
        let obj = { channel: null, query: null, count: 0, intention: null, bypassPremiumEmojiEntitlement: null };
        obj[0] = callback;
        obj[1] = substr;
        obj[3] = closure_2;
        obj[4] = closure_3;
        dependencyMap = ref.searchWithoutFetchingLatest(obj);
        callback(702).batchUpdates(() => {
          closure_1_4.current = closure_0;
          closure_1_5(closure_1);
        });
        const obj3 = callback(702);
      } else {
        obj = callback(702);
        obj.batchUpdates(() => {
          closure_4.current = "";
          callback(null);
          const result = closure_1.set(0);
        });
      }
    }, items),
    searchQueryRef: ref,
    searchResults: tmp2[0]
  };
};