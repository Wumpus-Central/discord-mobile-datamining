import { defaultAreStatesEqual } from "../../../discord_common/js/packages/flux/useStateFromStores.tsx";
// discord_app/modules/media_channel/useShouldHideMediaOptions.tsx
import ensureGuildLoaded from "ensureGuildLoaded";
import { ChannelFlags } from "set";

const require = arg1;
const result = require("defaultAreStatesEqual").fileFinishedImporting("modules/media_channel/useShouldHideMediaOptions.tsx");

export default function useShouldHideMediaOptions(arg0) {
  const _require = arg0;
  const items = [ensureGuildLoaded];
  const stateFromStores = _defaultAreStatesEqual.useStateFromStores(items, () => {
    const channel = outer1_2.getChannel(closure_0);
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
        channel1 = outer1_2.getChannel(parent_id1);
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