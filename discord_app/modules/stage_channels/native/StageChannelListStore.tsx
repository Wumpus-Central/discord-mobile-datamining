// discord_app/modules/stage_channels/native/StageChannelListStore.tsx
import react2 from "../../../../_runtime/00576_react.js";
import _slicedToArray2 from "../../../../_runtime/metro/04498__slicedToArray.js";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import 01254__ from "../../../../_runtime/metro/01254__.js";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let closure_4 = module_1254.createWithEqualityFn((arg0) => {
  let closure_0 = arg0;
  let obj = {
    showActiveSpeakerPill: false,
    setShowActiveSpeakerPill(showActiveSpeakerPill) {
      let obj = showActiveSpeakerPill(dependencyMap[3]);
      return obj.batchUpdates(() => {
        const obj = { showActiveSpeakerPill };
        return showActiveSpeakerPill(obj);
      });
    },
    listRef: null,
    setListRef(listRef) {
      let obj = listRef(dependencyMap[3]);
      return obj.batchUpdates(() => {
        const obj = { listRef };
        return listRef(obj);
      });
    }
  };
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let items;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(8);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l(arg0) {
      const items = [, ];
      ({ listRef: arr[0], setListRef: arr[1] } = arg0);
      return items;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const tmp5 = _slicedToArray(closure_4(first, _slicedToArray2.shallow), 2);
  const first1 = tmp5[0];
  let closure_1 = tmp7;
  if (cResult[1] !== tmp5[1]) {
    const fn2 = function c(arg0) {
      closure_1(arg0);
    };
    cResult[1] = tmp5[1];
    cResult[2] = fn2;
    tmp8 = fn2;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== first1) {
    class S {
      constructor() {
        if (first1 != null) {
          first1.scrollToLocation({ section: 0, item: 0, animated: true });
        }
      }
    }
    cResult[3] = first1;
    cResult[4] = S;
  } else {
    class S {
      constructor() {
        if (first1 != null) {
          first1.scrollToLocation({ section: 0, item: 0, animated: true });
        }
      }
    }
  }
  if (cResult[5] === S) {
    class S {
      constructor() {
        if (first1 != null) {
          first1.scrollToLocation({ section: 0, item: 0, animated: true });
        }
      }
    }
    return items;
  }
  items = [tmp8, S];
  cResult[5] = S;
  cResult[6] = tmp8;
  cResult[7] = items;
}) : (() => {
  const tmp = _slicedToArray(closure_4((arg0) => {
    const items = [, ];
    ({ listRef: arr[0], setListRef: arr[1] } = arg0);
    return items;
  }, _slicedToArray2.shallow), 2);
  const first = tmp[0];
  let closure_1 = tmp3;
  let items = [tmp[1]];
  const items1 = [
    react.useCallback((arg0) => {
      closure_1(arg0);
    }, items),

  ];
  const items2 = [first];
  items1[1] = react.useCallback(() => {
    if (first != null) {
      first.scrollToLocation({ section: 0, item: 0, animated: true });
    }
  }, items2);
  return items1;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t(arg0) {
      const items = [, ];
      ({ showActiveSpeakerPill: arr[0], setShowActiveSpeakerPill: arr[1] } = arg0);
      return items;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  return closure_4(first, _slicedToArray2.shallow);
}) : (() => closure_4((arg0) => {
  const items = [, ];
  ({ showActiveSpeakerPill: arr[0], setShowActiveSpeakerPill: arr[1] } = arg0);
  return items;
}, _slicedToArray2.shallow));
const result = size.fileFinishedImporting("modules/stage_channels/native/StageChannelListStore.tsx");

export const useActiveSpeakerPillScrollHandler = tmp2;
export const useActiveSpeakerPillState = tmp3;