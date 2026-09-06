// === Module 15813: useScrollToInitialIndexOnce ===

// Module 15813 (useScrollToInitialIndexOnce)
import noop from "module_19" /* 19 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/hooks/useScrollToInitialIndexOnce.tsx");

export const INITIAL_SCROLL_DELAY_MS = 100;
export const useScrollToInitialIndexOnce = function useScrollToInitialIndexOnce(initialScrollIndex) {
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
};