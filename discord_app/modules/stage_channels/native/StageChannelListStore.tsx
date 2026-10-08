// === Module 10943: StageChannelListStore ===

// Module 10943 (StageChannelListStore)
import c from "c" /* 576 */;
import _mod4690 from "module_4690" /* 4690 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const identity = fn(1266);
let closure_4 = identity.createWithEqualityFn((arg0) => {
  closure_0 = arg0;
  return {
    showActiveSpeakerPill: false,
    setShowActiveSpeakerPill(showActiveSpeakerPill) {
      return showActiveSpeakerPill(1271).batchUpdates(() => showActiveSpeakerPill({ showActiveSpeakerPill }));
    },
    listRef: null,
    setListRef(listRef) {
      return listRef(1271).batchUpdates(() => listRef({ listRef }));
    }
  };
});
fn(558);
const ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useActiveSpeakerPillScrollHandler() {
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
  const tmp5 = _slicedToArray(closure_4(first, _mod4690.shallow), 2);
  const first1 = tmp5[0];
  closure_1 = tmp7;
  if (cResult[1] !== tmp5[1]) {
    const fn2 = function o(arg0) {
      closure_1(arg0);
    };
    cResult[1] = tmp7;
    cResult[2] = fn2;
    let tmp8 = fn2;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== first1) {
    const fn3 = function h() {
      if (first1 != null) {
        first1.scrollToLocation({ section: 0, item: 0, animated: true });
      }
    };
    cResult[3] = first1;
    cResult[4] = fn3;
    let tmp9 = fn3;
  } else {
    tmp9 = cResult[4];
  }
  if (cResult[5] === tmp9) {
    if (cResult[6] === tmp8) {
      let tmp10 = cResult[7];
    }
    return tmp10;
  }
  let items = [tmp8, tmp9];
  cResult[5] = tmp9;
  cResult[6] = tmp8;
  cResult[7] = items;
  tmp10 = items;
}) : (function useActiveSpeakerPillScrollHandler() {
  const tmp = _slicedToArray(closure_4((arg0) => {
    const items = [, ];
    ({ listRef: arr[0], setListRef: arr[1] } = arg0);
    return items;
  }, _mod4690.shallow), 2);
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
export const useActiveSpeakerPillState = ReactCompilerGating.isReactCompilerEnabled() ? (function useActiveSpeakerPillState() {
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
  return closure_4(first, _mod4690.shallow);
}) : (function useActiveSpeakerPillState() {
  return closure_4((arg0) => {
    const items = [, ];
    ({ showActiveSpeakerPill: arr[0], setShowActiveSpeakerPill: arr[1] } = arg0);
    return items;
  }, _mod4690.shallow);
});