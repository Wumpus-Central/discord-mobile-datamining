// === Module 15708: useScrollToInitialIndexOnce ===

// Module 15708 (useScrollToInitialIndexOnce)
import c from "c" /* 576 */;
import noop from "module_19" /* 19 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/hooks/useScrollToInitialIndexOnce.tsx");

export const INITIAL_SCROLL_DELAY_MS = 100;
export const useScrollToInitialIndexOnce = ReactCompilerGating.isReactCompilerEnabled() ? ((initialScrollIndex) => {
  const cResult = c.c(7);
  initialScrollIndex = initialScrollIndex.initialScrollIndex;
  const shouldScroll = initialScrollIndex.shouldScroll;
  const flashListRef = initialScrollIndex.flashListRef;
  ({ afterMs, resetKey } = initialScrollIndex);
  let num = 100;
  if (undefined !== afterMs) {
    num = afterMs;
  }
  noop.useRef(false);
  noop.useRef(resetKey);
  if (cResult[0] === num) {
    if (cResult[1] === flashListRef) {
      if (cResult[2] === initialScrollIndex) {
        if (cResult[3] === resetKey) {
          if (cResult[4] === shouldScroll) {
            let tmp2 = cResult[5];
            let tmp3 = cResult[6];
          }
          const effect = noop.useEffect(tmp2, tmp3);
        }
      }
    }
  }
  const fn = function l() {
    if (ref2.current !== resetKey) {
      ref2.current = resetKey;
      ref.current = false;
    }
    let tmp2 = null != initialScrollIndex && shouldScroll;
    if (tmp2) {
      tmp2 = !ref.current;
    }
    if (tmp2) {
      ref.current = true;
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        const current = ref.current;
        if (current != null) {
          const obj = { animated: true, index };
          current.scrollToIndex(obj);
        }
      }, num);
    }
  };
  const items = [shouldScroll, initialScrollIndex, num, flashListRef, resetKey];
  cResult[0] = num;
  cResult[1] = flashListRef;
  cResult[2] = initialScrollIndex;
  cResult[3] = resetKey;
  cResult[4] = shouldScroll;
  cResult[5] = fn;
  cResult[6] = items;
  tmp3 = items;
  tmp2 = fn;
}) : ((initialScrollIndex) => {
  initialScrollIndex = initialScrollIndex.initialScrollIndex;
  const shouldScroll = initialScrollIndex.shouldScroll;
  const flashListRef = initialScrollIndex.flashListRef;
  let num = initialScrollIndex.afterMs;
  if (num === undefined) {
    num = 100;
  }
  const resetKey = initialScrollIndex.resetKey;
  noop.useRef(false);
  noop.useRef(resetKey);
  const items = [shouldScroll, initialScrollIndex, num, flashListRef, resetKey];
  const effect = noop.useEffect(() => {
    if (ref2.current !== resetKey) {
      ref2.current = resetKey;
      ref.current = false;
    }
    let tmp2 = null != initialScrollIndex && shouldScroll;
    if (tmp2) {
      tmp2 = !ref.current;
    }
    if (tmp2) {
      ref.current = true;
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        const current = ref.current;
        if (current != null) {
          const obj = { animated: true, index };
          current.scrollToIndex(obj);
        }
      }, num);
    }
  }, items);
});