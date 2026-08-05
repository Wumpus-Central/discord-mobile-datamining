// discord_app/modules/media_channel/useIsFirstMessageInMediaPost.tsx
import ensureGuildLoaded from "ensureGuildLoaded";

const require = arg1;
const result = require("DISCORD_EPOCH").fileFinishedImporting("modules/media_channel/useIsFirstMessageInMediaPost.tsx");

export const useIsFirstMessageInMediaPost = function useIsFirstMessageInMediaPost(arg0) {
  const _require = arg0;
  const items = [arg0];
  return _require("../../../discord_common/js/packages/flux/useStateFromStores.tsx").useStateFromStores([], () => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      const channel_id = tmp.channel_id;
      let flag = false;
      if (tmp.id === obj.castChannelIdAsMessageId(channel_id)) {
        const channel = outer1_3.getChannel(channel_id);
        flag = false;
        if (null != channel) {
          flag = false;
          if (channel.isForumPost()) {
            const channel1 = obj2.getChannel(channel.parent_id);
            let isMediaChannelResult;
            if (channel1 != null) {
              isMediaChannelResult = channel1.isMediaChannel();
            }
            flag = true === isMediaChannelResult;
          }
        }
        obj2 = outer1_3;
      }
      tmp2 = flag;
      obj = outer1_1(outer1_2[2]);
    }
    return tmp2;
  }, items);
};
export const isFirstMessageInMediaPost = function isFirstMessageInMediaPost(channel_id) {
  let tmp = null != channel_id;
  if (tmp) {
    channel_id = channel_id.channel_id;
    let flag = false;
    if (channel_id.id === obj.castChannelIdAsMessageId(channel_id)) {
      const channel = store.getChannel(channel_id);
      flag = false;
      if (null != channel) {
        flag = false;
        if (channel.isForumPost()) {
          const channel1 = obj2.getChannel(channel.parent_id);
          let isMediaChannelResult;
          if (channel1 != null) {
            isMediaChannelResult = channel1.isMediaChannel();
          }
          flag = true === isMediaChannelResult;
        }
      }
      obj2 = store;
    }
    tmp = flag;
    obj = require("../../utils/SnowflakeUtils.tsx");
  }
  return tmp;
};
export const isFirstMessageIdInMediaPost = function isFirstMessageIdInMediaPost(id, channel_id) {
  if (id !== obj.castChannelIdAsMessageId(channel_id)) {
    return false;
  } else {
    const channel = store.getChannel(channel_id);
    if (null != channel) {
      if (channel.isForumPost()) {
        const channel1 = store.getChannel(channel.parent_id);
        let isMediaChannelResult;
        if (channel1 != null) {
          isMediaChannelResult = channel1.isMediaChannel();
        }
        return true === isMediaChannelResult;
      }
    }
    return false;
  }
  obj = require("../../utils/SnowflakeUtils.tsx");
};