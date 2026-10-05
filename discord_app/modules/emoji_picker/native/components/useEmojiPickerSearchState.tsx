// === Module 9877: useEmojiPickerSearchState ===

// Module 9877 (useEmojiPickerSearchState)
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import EmojiStore from "EmojiStore" /* 5638 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, channel, dependencyMap;

let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel, arg1, intention, bypassPremiumEmojiEntitlement) => {
  let closure_5;
  let tmp4;
  _require = channel;
  dependencyMap = arg1;
  _slicedToArray = intention;
  react = bypassPremiumEmojiEntitlement;
  let obj = require("react");
  const cResult = obj.c(8);
  const ref = react.useRef("");
  [tmp4, closure_5] = react.useState(null);
  _slicedToArray(react.useState(null), 2);
  if (cResult[0] === bypassPremiumEmojiEntitlement) {
    if (cResult[1] === arg1) {
      if (cResult[2] === channel) {
        let tmp5;
        if (cResult[3] === intention) {
          tmp5 = cResult[4];
        }
        if (cResult[5] === tmp5) {
          let tmp6;
          if (cResult[6] === tmp4) {
            tmp6 = cResult[7];
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
    let current;
    channel = arr;
    if ("" !== arr) {
      let substr = arr;
      if (":" === arr[0]) {
        substr = arr.slice(1);
      }
      const FrecencyUserSettingsActionCreators = channel(closure_1[6]).FrecencyUserSettingsActionCreators;
      const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
      const obj2 = { channel, query: substr, count: 0, intention, bypassPremiumEmojiEntitlement };
      closure_1 = ref.searchWithoutFetchingLatest(obj2);
      const obj3 = channel(closure_1[5]);
      obj3.batchUpdates(() => {
        ref.current = current;
        closure_5(closure_1);
      });
    } else {
      const obj = channel(closure_1[5]);
      obj.batchUpdates(() => {
        ref.current = "";
        closure_1_5(null);
        const result = closure_1.set(0);
      });
    }
  };
  cResult[0] = bypassPremiumEmojiEntitlement;
  cResult[1] = arg1;
  cResult[2] = channel;
  cResult[3] = intention;
  cResult[4] = fn;
  tmp5 = fn;
}) : ((channel, arg1, intention, bypassPremiumEmojiEntitlement) => {
  let first;
  let items;
  let closure_1 = arg1;
  _slicedToArray = intention;
  react = bypassPremiumEmojiEntitlement;
  const ref = react.useRef("");
  const tmp2 = _slicedToArray(react.useState(null), 2);
  let closure_5 = tmp2[1];
  let obj = {
    handleTextChange: react.useCallback((arr) => {
      let current;
      channel = arr;
      if ("" !== arr) {
        let substr = arr;
        if (":" === arr[0]) {
          substr = arr.slice(1);
        }
        const FrecencyUserSettingsActionCreators = channel(closure_1[6]).FrecencyUserSettingsActionCreators;
        const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
        const obj2 = { channel, query: substr, count: 0, intention, bypassPremiumEmojiEntitlement };
        closure_1 = ref.searchWithoutFetchingLatest(obj2);
        const obj3 = channel(closure_1[5]);
        obj3.batchUpdates(() => {
          ref.current = current;
          closure_5(closure_1);
        });
      } else {
        const obj = channel(closure_1[5]);
        obj.batchUpdates(() => {
          ref.current = "";
          closure_1_5(null);
          const result = closure_1.set(0);
        });
      }
    }, items),
    searchQueryRef: ref,
    searchResults: first
  };
  items = [arg1, channel, intention, bypassPremiumEmojiEntitlement];
  first = tmp2[0];
  return obj;
});
let result = size.fileFinishedImporting("modules/emoji_picker/native/components/useEmojiPickerSearchState.tsx");

export default tmp2;