// discord_app/modules/collectibles/native/hooks/useScrollToInitialIndexOnce.tsx
import noop from "noop";

const result = require("set").fileFinishedImporting("modules/collectibles/native/hooks/useScrollToInitialIndexOnce.tsx");

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
  let closure_5;
  let closure_6;
  closure_5 = initialScrollIndex.useRef(false);
  closure_6 = initialScrollIndex.useRef(resetKey);
  const items = [shouldScroll, initialScrollIndex, num, flashListRef, resetKey];
  const effect = initialScrollIndex.useEffect(() => {
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
          const obj = { animated: true, index: null };
          obj[1] = noop;
          current.scrollToIndex(obj);
        }
      }, num);
    }
  }, items);
};