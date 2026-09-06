// discord_app/modules/stage_channels/native/components/ModeratorOverlayState.tsx
import _mod4184 from "../../../../../_runtime/metro/04184__.js";
import identity from "../../../../../_runtime/metro/01244__.js";
import size from "../../../../../_runtime/metro/00002__.js";

let closure_2 = identity.createWithEqualityFn((arg0, arg1) => {
  closure_0 = arg0;
  dependencyMap = arg1;
  const obj = {
    overlayDismissedChannelIds: new Set(),
    dismissOverlay(arg0) {
      const overlayDismissedChannelIds = dependencyMap().overlayDismissedChannelIds;
      overlayDismissedChannelIds.add(arg0);
      overlayDismissedChannelIds(1249).batchUpdates(() => overlayDismissedChannelIds({ overlayDismissedChannelIds }));
    },
  };
  return obj;
});
const result = size.fileFinishedImporting("modules/stage_channels/native/components/ModeratorOverlayState.tsx");

export const useModeratorOverlayChannelState = function useModeratorOverlayChannelState(id) {
  closure_0 = id;
  closure_1 = closure_2((dismissOverlay) => dismissOverlay.dismissOverlay, _mod4184.shallow);
  const items = [
    !closure_2(
      (overlayDismissedChannelIds) => overlayDismissedChannelIds.overlayDismissedChannelIds,
      _mod4184.shallow,
    ).has(id),
    () => closure_1(closure_0),
  ];
  return items;
};
