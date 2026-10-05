// discord_app/modules/collectibles/native/hooks/useScrollToInitialIndexOnce.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let initialScrollIndex;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (initialScrollIndex) => {
      let afterMs;
      let resetKey;
      let obj = react2;
      const cResult = obj.c(7);
      initialScrollIndex = initialScrollIndex.initialScrollIndex;
      const shouldScroll = initialScrollIndex.shouldScroll;
      const flashListRef = initialScrollIndex.flashListRef;
      ({ afterMs, resetKey } = initialScrollIndex);
      let num = 100;
      if (undefined !== afterMs) {
        num = afterMs;
      }
      let closure_5 = react.useRef(false);
      let closure_6 = react.useRef(resetKey);
      if (cResult[0] === num) {
        if (cResult[1] === flashListRef) {
          if (cResult[2] === initialScrollIndex) {
            if (cResult[3] === resetKey) {
              let tmp2;
              let tmp3;
              if (cResult[4] === shouldScroll) {
                tmp2 = cResult[5];
                tmp3 = cResult[6];
              }
              const effect = react.useEffect(tmp2, tmp3);
            }
          }
        }
      }
      const fn = function l() {
        let index;
        if (ref2.current !== resetKey) {
          ref2.current = resetKey;
          ref.current = false;
        }
        const tmp2 = null != initialScrollIndex && shouldScroll && !ref.current;
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
    }
  : (initialScrollIndex) => {
      initialScrollIndex = initialScrollIndex.initialScrollIndex;
      const shouldScroll = initialScrollIndex.shouldScroll;
      const flashListRef = initialScrollIndex.flashListRef;
      let num = initialScrollIndex.afterMs;
      if (num === undefined) {
        num = 100;
      }
      const resetKey = initialScrollIndex.resetKey;
      let closure_5 = react.useRef(false);
      let closure_6 = react.useRef(resetKey);
      const items = [shouldScroll, initialScrollIndex, num, flashListRef, resetKey];
      const effect = react.useEffect(() => {
        let index;
        if (ref2.current !== resetKey) {
          ref2.current = resetKey;
          ref.current = false;
        }
        const tmp2 = null != initialScrollIndex && shouldScroll && !ref.current;
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
const result = size.fileFinishedImporting("modules/collectibles/native/hooks/useScrollToInitialIndexOnce.tsx");

export const INITIAL_SCROLL_DELAY_MS = 100;
export const useScrollToInitialIndexOnce = tmp2;
