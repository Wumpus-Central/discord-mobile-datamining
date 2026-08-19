// === Module 9309: useEmojiPickerSearchState ===

// Module 9309 (useEmojiPickerSearchState)
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import getEmojiToGroupId from "getEmojiToGroupId" /* 6727 */;

const require = fn;
let result = require("obj132").fileFinishedImporting("modules/emoji_picker/native/components/useEmojiPickerSearchState.tsx");

export default function useEmojiPickerSearchState(arg0, arg1, arg2) {
  closure_0 = arg0;
  closure_1 = arg1;
  let callback = arg2;
  ref = ref.useRef("");
  const tmp2 = callback(ref.useState(null), 2);
  closure_4 = tmp2[1];
  const items = [arg1, arg0, arg2];
  return {
    handleTextChange: ref.useCallback((arr) => {
      const callback = arr;
      if ("" !== arr) {
        let substr = arr;
        if (":" === arr[0]) {
          substr = arr.slice(1);
        }
        const FrecencyUserSettingsActionCreators = callback(1374).FrecencyUserSettingsActionCreators;
        const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
        let obj = { channel: null, query: null, count: 0, intention: null };
        obj[0] = callback;
        obj[1] = substr;
        obj[3] = closure_2;
        dependencyMap = closure_4.searchWithoutFetchingLatest(obj);
        callback(705).batchUpdates(() => {
          ref.current = closure_0;
          closure_1_4(closure_1);
        });
        const obj3 = callback(705);
      } else {
        obj = callback(705);
        obj.batchUpdates(() => {
          closure_3.current = "";
          callback(null);
          const result = closure_1.set(0);
        });
      }
    }, items),
    searchQueryRef: ref,
    searchResults: tmp2[0]
  };
};