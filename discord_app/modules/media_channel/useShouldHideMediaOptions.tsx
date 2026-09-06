// === Module 11662: useShouldHideMediaOptions ===

// Module 11662 (useShouldHideMediaOptions)
import closure_2 from "ensureGuildLoaded" /* 1957 */;
import { ChannelFlags } from "set" /* 1964 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/media_channel/useShouldHideMediaOptions.tsx");

export default function useShouldHideMediaOptions(arg0) {
  const _require = arg0;
  const items = [closure_2];
  const stateFromStores = _require(563).useStateFromStores(items, () => {
    const channel = closure_1_2.getChannel(closure_0);
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
        channel1 = closure_1_2.getChannel(parent_id1);
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