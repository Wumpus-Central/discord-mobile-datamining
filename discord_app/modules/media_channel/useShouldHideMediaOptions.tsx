// === Module 11662: useShouldHideMediaOptions ===

// Module 11662 (useShouldHideMediaOptions)
import ChannelStore from "ChannelStore" /* 1957 */;

const require = fn;
const ChannelFlags = fn(1964).ChannelFlags;
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_channel/useShouldHideMediaOptions.tsx");

export default function useShouldHideMediaOptions(arg0) {
  _require = arg0;
  const items = [ChannelStore];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () => {
    const channel = ChannelStore.getChannel(closure_0);
    let parent_id;
    if (channel != null) {
      parent_id = channel.parent_id;
    }
    let channel1 = null;
    if (null != parent_id) {
      channel1 = null;
      if (channel.isForumPost()) {
        let parent_id1;
        if (channel != null) {
          parent_id1 = channel.parent_id;
        }
        channel1 = ChannelStore.getChannel(parent_id1);
      }
    }
    return channel1;
  });
  let hasFlagResult;
  if (stateFromStores != null) {
    hasFlagResult = stateFromStores.hasFlag(ChannelFlags.HIDE_MEDIA_DOWNLOAD_OPTIONS);
  }
  return true === hasFlagResult;
};