// === Module 10636: useEmojiPickerSearchState ===

// Module 10636 (useEmojiPickerSearchState)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import EmojiStore from "EmojiStore" /* 5764 */;

const require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/emoji_picker/native/components/useEmojiPickerSearchState.tsx");

export default function useEmojiPickerSearchState(channel, arg1, intention, bypassPremiumEmojiEntitlement) {
  dependencyMap = arg1;
  _slicedToArray = intention;
  noop = bypassPremiumEmojiEntitlement;
  const ref = noop.useRef("");
  const tmp2 = _slicedToArray(noop.useState(null), 2);
  closure_5 = tmp2[1];
  let obj = { handleTextChange: null, searchQueryRef: ref, searchResults: tmp2[0] };
  const items = [arg1, channel, intention, bypassPremiumEmojiEntitlement];
  obj.handleTextChange = noop.useCallback((arr) => {
    channel = arr;
    if ("" !== arr) {
      let substr = arr;
      if (":" === arr[0]) {
        substr = arr.slice(1);
      }
      const FrecencyUserSettingsActionCreators = channel(2025).FrecencyUserSettingsActionCreators;
      const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
      const obj2 = { channel, query: substr, count: 0, intention, bypassPremiumEmojiEntitlement };
      dependencyMap = ref.searchWithoutFetchingLatest(obj2);
      channel(1248).batchUpdates(() => {
        ref.current = current;
        closure_5(closure_1);
      });
      const obj3 = channel(1248);
    } else {
      channel(1248).batchUpdates(() => {
        ref.current = "";
        closure_1_5(null);
        const result = closure_1.set(0);
      });
      const obj = channel(1248);
    }
  }, items);
  return obj;
};