// discord_app/modules/emoji_picker/native/components/useEmojiPickerSearchState.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import getEmojiToGroupId from "getEmojiToGroupId";

const require = arg1;
let result = require("getEmojiToGroupId").fileFinishedImporting("modules/emoji_picker/native/components/useEmojiPickerSearchState.tsx");

export default function useEmojiPickerSearchState(arg0, arg1, arg2) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let callback = arg2;
  ref = ref.useRef("");
  const tmp2 = callback(ref.useState(null), 2);
  let getEmojiToGroupId = tmp2[1];
  const items = [arg1, arg0, arg2];
  return {
    handleTextChange: ref.useCallback((arr) => {
      const callback = arr;
      if ("" !== arr) {
        let substr = arr;
        if (":" === arr[0]) {
          substr = arr.slice(1);
        }
        const FrecencyUserSettingsActionCreators = callback(1355).FrecencyUserSettingsActionCreators;
        const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
        let obj = { channel: null, query: null, count: 0, intention: null };
        obj[0] = callback;
        obj[1] = substr;
        obj[3] = _slicedToArray;
        const dependencyMap = getEmojiToGroupId.searchWithoutFetchingLatest(obj);
        callback(705).batchUpdates(() => {
          outer1_3.current = closure_0;
          outer1_4(closure_1);
        });
        const obj3 = callback(705);
      } else {
        obj = callback(705);
        obj.batchUpdates(() => {
          noop.current = "";
          callback(null);
          const result = closure_1.set(0);
        });
      }
    }, items),
    searchQueryRef: ref,
    searchResults: tmp2[0]
  };
};