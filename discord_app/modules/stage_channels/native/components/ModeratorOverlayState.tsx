// === Module 12487: useModeratorOverlayChannelState ===

// Module 12487 (useModeratorOverlayChannelState)
import set from "set" /* 2 */;
import identity from "identity" /* 700 */;

let closure_2 = identity.createWithEqualityFn((arg0, arg1) => {
  closure_0 = arg0;
  closure_1 = arg1;
  const obj = {
    overlayDismissedChannelIds: new Set(),
    dismissOverlay(arg0) {
      const overlayDismissedChannelIds = dependencyMap().overlayDismissedChannelIds;
      overlayDismissedChannelIds.add(arg0);
      callback(705).batchUpdates(() => overlayDismissedChannelIds({ overlayDismissedChannelIds }));
    }
  };
  return obj;
});
const result = set.fileFinishedImporting("modules/stage_channels/native/components/ModeratorOverlayState.tsx");

export const useModeratorOverlayChannelState = function useModeratorOverlayChannelState(id) {
  const _require = id;
  dependencyMap = callback((dismissOverlay) => dismissOverlay.dismissOverlay, _require(4006).shallow);
  const items = [!callback((overlayDismissedChannelIds) => overlayDismissedChannelIds.overlayDismissedChannelIds, _require(4006).shallow).has(id), () => callback(closure_0)];
  return items;
};