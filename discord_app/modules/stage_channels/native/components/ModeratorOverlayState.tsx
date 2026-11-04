// === Module 12047: ModeratorOverlayState ===

// Module 12047 (ModeratorOverlayState)
import _mod5056 from "module_5056" /* 5056 */;
import identity from "module_1254" /* 1254 */;
import size from "module_2" /* 2 */;

let closure_2 = identity.createWithEqualityFn((arg0, arg1) => {
  closure_0 = arg0;
  dependencyMap = arg1;
  const obj = {
    overlayDismissedChannelIds: new Set(),
    dismissOverlay(arg0) {
      const overlayDismissedChannelIds = dependencyMap().overlayDismissedChannelIds;
      overlayDismissedChannelIds.add(arg0);
      overlayDismissedChannelIds(1259).batchUpdates(() => overlayDismissedChannelIds({ overlayDismissedChannelIds }));
    }
  };
  return obj;
});
const result = size.fileFinishedImporting("modules/stage_channels/native/components/ModeratorOverlayState.tsx");

export function useModeratorOverlayChannelState(id) {
  closure_0 = id;
  closure_1 = closure_2((dismissOverlay) => dismissOverlay.dismissOverlay, _mod5056.shallow);
  items = [!closure_2((overlayDismissedChannelIds) => overlayDismissedChannelIds.overlayDismissedChannelIds, _mod5056.shallow).has(id), () => closure_1(closure_0)];
  return items;
}