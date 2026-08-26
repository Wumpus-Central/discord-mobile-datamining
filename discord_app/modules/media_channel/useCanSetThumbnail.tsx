// === Module 10399: useCanSetThumbnail ===

// Module 10399 (useCanSetThumbnail)
import closure_2 from "ensureGuildLoaded" /* 1391 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/media_channel/useCanSetThumbnail.tsx");

export default function useCanSetThumbnail(arg0, isImage) {
  const _require = arg0;
  const items = [closure_2];
  const stateFromStores = _require(647).useStateFromStores(items, () => closure_1_2.getChannel(closure_0));
  let isMediaChannelResult;
  if (stateFromStores != null) {
    isMediaChannelResult = stateFromStores.isMediaChannel();
  }
  if (isMediaChannelResult) {
    isImage = undefined;
    if (isImage != null) {
      isImage = isImage.isImage;
    }
    isMediaChannelResult = true === isImage;
  }
  return isMediaChannelResult;
};