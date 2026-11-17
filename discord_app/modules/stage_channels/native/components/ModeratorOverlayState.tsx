// === Module 11520: ModeratorOverlayState ===

// Module 11520 (ModeratorOverlayState)
import _mod5225 from "module_5225" /* 5225 */;
import identity from "module_1258" /* 1258 */;
import size from "module_2" /* 2 */;

let closure_2 = identity.createWithEqualityFn((arg0, arg1) => {
  closure_0 = arg0;
  dependencyMap = arg1;
  const obj = {
    overlayDismissedChannelIds: new Set(),
    dismissOverlay(arg0) {
      const overlayDismissedChannelIds = dependencyMap().overlayDismissedChannelIds;
      overlayDismissedChannelIds.add(arg0);
      overlayDismissedChannelIds(1263).batchUpdates(() => overlayDismissedChannelIds({ overlayDismissedChannelIds }));
    }
  };
  return obj;
});
const result = size.fileFinishedImporting("modules/stage_channels/native/components/ModeratorOverlayState.tsx");

export function useModeratorOverlayChannelState(id) {
  closure_0 = id;
  closure_1 = closure_2((dismissOverlay) => dismissOverlay.dismissOverlay, _mod5225.shallow);
  items = [!closure_2((overlayDismissedChannelIds) => overlayDismissedChannelIds.overlayDismissedChannelIds, _mod5225.shallow).has(id), () => closure_1(closure_0)];
  return items;
}