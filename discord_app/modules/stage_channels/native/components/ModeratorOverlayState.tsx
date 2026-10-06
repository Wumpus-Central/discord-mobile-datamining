// === Module 9193: ModeratorOverlayState ===

// Module 9193 (ModeratorOverlayState)
import react from "react" /* 576 */;
import _slicedToArray from "_slicedToArray" /* 4498 */;
import module_1254 from "module_1254" /* 1254 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_2 = module_1254.createWithEqualityFn((arg0, arg1) => {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let obj = {
    overlayDismissedChannelIds: new Set(),
    dismissOverlay(arg0) {
      const overlayDismissedChannelIds = closure_1().overlayDismissedChannelIds;
      overlayDismissedChannelIds.add(arg0);
      let obj = overlayDismissedChannelIds(closure_1[1]);
      obj.batchUpdates(() => {
        const obj = { overlayDismissedChannelIds };
        return overlayDismissedChannelIds(obj);
      });
    }
  };
  new Set();
  return obj;
});
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let first;
  let tmp6;
  let closure_0 = arg0;
  const obj = react;
  const cResult = obj.c(11);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n(overlayDismissedChannelIds) {
      return overlayDismissedChannelIds.overlayDismissedChannelIds;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const obj2 = closure_2(first, _slicedToArray.shallow);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function o(dismissOverlay) {
      return dismissOverlay.dismissOverlay;
    };
    cResult[1] = fn2;
    tmp6 = fn2;
  } else {
    tmp6 = cResult[1];
  }
  const tmp5Result = closure_2(tmp6, _slicedToArray.shallow);
  let closure_1 = tmp5Result;
  if (cResult[2] === arg0) {
    let tmp8;
    if (cResult[3] === obj2) {
      tmp8 = cResult[4];
    }
    if (cResult[5] === arg0) {
      let tmp11;
      if (cResult[6] === tmp5Result) {
        tmp11 = cResult[7];
      }
      if (cResult[8] === !tmp8) {
        let tmp12;
        if (cResult[9] === tmp11) {
          tmp12 = cResult[10];
        }
        return tmp12;
      }
      const items = [!tmp8, tmp11];
      cResult[8] = !tmp8;
      cResult[9] = tmp11;
      cResult[10] = items;
      tmp12 = items;
    }
    const fn3 = function y() {
      return closure_1(closure_0);
    };
    cResult[5] = arg0;
    cResult[6] = tmp5Result;
    cResult[7] = fn3;
    tmp11 = fn3;
  }
  const hasItem = obj2.has(arg0);
  cResult[2] = arg0;
  cResult[3] = obj2;
  cResult[4] = hasItem;
  tmp8 = hasItem;
}) : ((arg0) => {
  let closure_0 = arg0;
  const obj = closure_2((overlayDismissedChannelIds) => overlayDismissedChannelIds.overlayDismissedChannelIds, _slicedToArray.shallow);
  let closure_1 = closure_2((dismissOverlay) => dismissOverlay.dismissOverlay, _slicedToArray.shallow);
  const items = [!obj.has(arg0), () => closure_1(closure_0)];
  return items;
});
const result = size.fileFinishedImporting("modules/stage_channels/native/components/ModeratorOverlayState.tsx");

export const useModeratorOverlayChannelState = tmp2;