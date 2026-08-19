// discord_app/modules/stage_channels/native/components/ModeratorOverlayState.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import identity from "../../../../../_runtime/00700_identity.js";

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
const result = obj132.fileFinishedImporting("modules/stage_channels/native/components/ModeratorOverlayState.tsx");

export const useModeratorOverlayChannelState = function useModeratorOverlayChannelState(id) {
  const _require = id;
  dependencyMap = callback((dismissOverlay) => dismissOverlay.dismissOverlay, require("../../../../../_runtime/04006_isIterable.js").shallow);
  const items = [!callback((overlayDismissedChannelIds) => overlayDismissedChannelIds.overlayDismissedChannelIds, require("../../../../../_runtime/04006_isIterable.js").shallow).has(id), () => callback(closure_0)];
  return items;
};