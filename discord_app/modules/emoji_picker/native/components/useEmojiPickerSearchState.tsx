// discord_app/modules/emoji_picker/native/components/useEmojiPickerSearchState.tsx
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import EmojiStore from "../../../emojis/EmojiStore.tsx";

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/emoji_picker/native/components/useEmojiPickerSearchState.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useEmojiPickerSearchState(channel, arg1, intention, bypassPremiumEmojiEntitlement) {
      _require = channel;
      dependencyMap = arg1;
      _slicedToArray = intention;
      noop = bypassPremiumEmojiEntitlement;
      const cResult = require("c").c(8);
      const ref = noop.useRef("");
      let obj = require("c");
      [tmp4, closure_5] = noop.useState(null);
      if (cResult[0] === bypassPremiumEmojiEntitlement) {
        if (cResult[1] === arg1) {
          if (cResult[2] === channel) {
            if (cResult[3] === intention) {
              let tmp5 = cResult[4];
            }
            if (cResult[5] === tmp5) {
              if (cResult[6] === tmp4) {
                let tmp6 = cResult[7];
              }
              return tmp6;
            }
            let obj2 = { handleTextChange: tmp5, searchQueryRef: ref, searchResults: tmp4 };
            cResult[5] = tmp5;
            cResult[6] = tmp4;
            cResult[7] = obj2;
            tmp6 = obj2;
          }
        }
      }
      const fn = function h(arr) {
        channel = arr;
        if ("" !== arr) {
          let substr = arr;
          if (":" === arr[0]) {
            substr = arr.slice(1);
          }
          const FrecencyUserSettingsActionCreators = channel(2046).FrecencyUserSettingsActionCreators;
          const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
          const obj2 = { channel, query: substr, count: 0, intention, bypassPremiumEmojiEntitlement };
          dependencyMap = ref.searchWithoutFetchingLatest(obj2);
          channel(1272).batchUpdates(() => {
            ref.current = current;
            closure_2_5(closure_1);
          });
          const obj3 = channel(1272);
        } else {
          channel(1272).batchUpdates(() => {
            ref.current = "";
            closure_1_5(null);
            const result = closure_1.set(0);
          });
          const obj = channel(1272);
        }
      };
      cResult[0] = bypassPremiumEmojiEntitlement;
      cResult[1] = arg1;
      cResult[2] = channel;
      cResult[3] = intention;
      cResult[4] = fn;
      tmp5 = fn;
    }
  : function useEmojiPickerSearchState(channel, arg1, intention, bypassPremiumEmojiEntitlement) {
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
          const FrecencyUserSettingsActionCreators = channel(2046).FrecencyUserSettingsActionCreators;
          const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
          const obj2 = { channel, query: substr, count: 0, intention, bypassPremiumEmojiEntitlement };
          dependencyMap = ref.searchWithoutFetchingLatest(obj2);
          channel(1272).batchUpdates(() => {
            ref.current = current;
            closure_5(closure_1);
          });
          const obj3 = channel(1272);
        } else {
          channel(1272).batchUpdates(() => {
            ref.current = "";
            closure_1_5(null);
            const result = closure_1.set(0);
          });
          const obj = channel(1272);
        }
      }, items);
      return obj;
    };
