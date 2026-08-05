import { isIterable } from "../../../../../_runtime/03898_isIterable.js";
// discord_app/modules/stage_channels/native/components/ModeratorOverlayState.tsx
import identity from "identity";

let closure_2 = identity.createWithEqualityFn((arg0, arg1) => {
  let closure_0 = arg0;
  let closure_1 = arg1;
  const obj = { overlayDismissedChannelIds: null, dismissOverlay: null };
  obj[0] = new Set();
  obj[1] = function dismissOverlay(arg0) {
    const overlayDismissedChannelIds = dependencyMap().overlayDismissedChannelIds;
    overlayDismissedChannelIds.add(arg0);
    callback(705).batchUpdates(() => overlayDismissedChannelIds({ overlayDismissedChannelIds }));
  };
  return obj;
});
const result = require("isIterable").fileFinishedImporting("modules/stage_channels/native/components/ModeratorOverlayState.tsx");

export const useModeratorOverlayChannelState = function useModeratorOverlayChannelState(id) {
  const _require = id;
  const dependencyMap = callback((dismissOverlay) => dismissOverlay.dismissOverlay, _isIterable.shallow);
  const items = [!callback((overlayDismissedChannelIds) => overlayDismissedChannelIds.overlayDismissedChannelIds, _isIterable.shallow).has(id), () => callback(closure_0)];
  return items;
};