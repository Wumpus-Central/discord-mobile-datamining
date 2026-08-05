// discord_app/modules/media_channel/useCanSetThumbnail.tsx
import ensureGuildLoaded from "ensureGuildLoaded";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/media_channel/useCanSetThumbnail.tsx");

export default function useCanSetThumbnail(arg0, isImage) {
  const _require = arg0;
  const items = [ensureGuildLoaded];
  const stateFromStores = _require("../../../discord_common/js/packages/flux/useStateFromStores.tsx").useStateFromStores(items, () => outer1_2.getChannel(closure_0));
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