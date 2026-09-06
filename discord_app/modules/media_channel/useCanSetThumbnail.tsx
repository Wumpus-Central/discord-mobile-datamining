// discord_app/modules/media_channel/useCanSetThumbnail.tsx
import ChannelStore from "../../stores/ChannelStore.tsx";

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_channel/useCanSetThumbnail.tsx");

export default function useCanSetThumbnail(arg0, isImage) {
  _require = arg0;
  const items = [ChannelStore];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () =>
    ChannelStore.getChannel(closure_0),
  );
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
}
