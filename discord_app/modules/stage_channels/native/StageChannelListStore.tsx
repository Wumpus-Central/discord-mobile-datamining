// === Module 9742: StageChannelListStore ===

// Module 9742 (StageChannelListStore)
import c from "c" /* 576 */;
import _mod4498 from "module_4498" /* 4498 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const identity = fn(1254);
let closure_4 = identity.createWithEqualityFn((arg0) => {
  closure_0 = arg0;
  return {
    showActiveSpeakerPill: false,
    setShowActiveSpeakerPill(showActiveSpeakerPill) {
      return showActiveSpeakerPill(1259).batchUpdates(() => showActiveSpeakerPill({ showActiveSpeakerPill }));
    },
    listRef: null,
    setListRef(listRef) {
      return listRef(1259).batchUpdates(() => listRef({ listRef }));
    }
  };
});
fn(558);
const ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(8);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l(arg0) {
      const items = [, ];
      ({ listRef: arr[0], setListRef: arr[1] } = arg0);
      return items;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  const tmp5 = _slicedToArray(closure_4(first, _mod4498.shallow), 2);
  const first1 = tmp5[0];
  closure_1 = tmp7;
  if (cResult[1] !== tmp5[1]) {
    const fn2 = function c(arg0) {
      closure_1(arg0);
    };
    cResult[1] = tmp7;
    cResult[2] = fn2;
    let tmp8 = fn2;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== first1) {
    class S {
      constructor() {
        obj = closure_0;
        if (closure_0 != null) {
          scrollToLocationResult = obj.scrollToLocation({ section: 0, item: 0, animated: true });
        }
        return;
      }
    }
    cResult[3] = first1;
    cResult[4] = S;
  } else {
    class S {
      constructor() {
        obj = closure_0;
        if (closure_0 != null) {
          scrollToLocationResult = obj.scrollToLocation({ section: 0, item: 0, animated: true });
        }
        return;
      }
    }
  }
  if (cResult[5] === S) {
    class S {
      constructor() {
        obj = closure_0;
        if (closure_0 != null) {
          scrollToLocationResult = obj.scrollToLocation({ section: 0, item: 0, animated: true });
        }
        return;
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
  }, _mod4498.shallow), 2);
  const first = tmp[0];
  closure_1 = tmp3;
  let items = [tmp[1]];
  const items1 = [
    noop.useCallback((arg0) => {
      closure_1(arg0);
    }, items),

  ];
  const items2 = [first];
  items1[1] = noop.useCallback(() => {
    if (first != null) {
      first.scrollToLocation({ section: 0, item: 0, animated: true });
    }
  }, items2);
  return items1;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/StageChannelListStore.tsx");

export const useActiveSpeakerPillScrollHandler = tmp2;
export const useActiveSpeakerPillState = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t(arg0) {
      const items = [, ];
      ({ showActiveSpeakerPill: arr[0], setShowActiveSpeakerPill: arr[1] } = arg0);
      return items;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  return closure_4(first, _mod4498.shallow);
}) : (() => closure_4((arg0) => {
  const items = [, ];
  ({ showActiveSpeakerPill: arr[0], setShowActiveSpeakerPill: arr[1] } = arg0);
  return items;
}, _mod4498.shallow));