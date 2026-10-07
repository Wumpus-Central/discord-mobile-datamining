// discord_app/modules/stage_channels/native/components/ModeratorOverlayState.tsx
import c from "../../../../../_runtime/00576_c.js";
import _mod4498 from "../../../../../_runtime/metro/04498__.js";
import identity from "../../../../../_runtime/metro/01254__.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let closure_2 = identity.createWithEqualityFn((arg0, arg1) => {
  closure_0 = arg0;
  dependencyMap = arg1;
  const obj = {
    overlayDismissedChannelIds: new Set(),
    dismissOverlay(arg0) {
      const overlayDismissedChannelIds = dependencyMap().overlayDismissedChannelIds;
      overlayDismissedChannelIds.add(arg0);
      overlayDismissedChannelIds(1259).batchUpdates(() => overlayDismissedChannelIds({ overlayDismissedChannelIds }));
    },
  };
  return obj;
});
const result = size.fileFinishedImporting("modules/stage_channels/native/components/ModeratorOverlayState.tsx");

export const useModeratorOverlayChannelState = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      closure_0 = arg0;
      const cResult = c.c(11);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function n(overlayDismissedChannelIds) {
          return overlayDismissedChannelIds.overlayDismissedChannelIds;
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      const obj2 = closure_2(first, _mod4498.shallow);
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function o(dismissOverlay) {
          return dismissOverlay.dismissOverlay;
        };
        cResult[1] = fn2;
        let tmp6 = fn2;
      } else {
        tmp6 = cResult[1];
      }
      const tmp5Result = closure_2(tmp6, _mod4498.shallow);
      closure_1 = tmp5Result;
      if (cResult[2] === arg0) {
        if (cResult[5] === arg0) {
          if (cResult[6] === tmp5Result) {
            let tmp11 = cResult[7];
          }
          if (cResult[8] === tmp10) {
            if (cResult[9] === tmp11) {
              let tmp12 = cResult[10];
            }
            return tmp12;
          }
          const items = [tmp10, tmp11];
          cResult[8] = tmp10;
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
    }
  : (arg0) => {
      closure_0 = arg0;
      closure_1 = closure_2((dismissOverlay) => dismissOverlay.dismissOverlay, _mod4498.shallow);
      const items = [
        !closure_2(
          (overlayDismissedChannelIds) => overlayDismissedChannelIds.overlayDismissedChannelIds,
          _mod4498.shallow,
        ).has(arg0),
        () => closure_1(closure_0),
      ];
      return items;
    };
