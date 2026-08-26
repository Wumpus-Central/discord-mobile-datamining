// === Module 8269: useIsFirstMessageInMediaPost ===

// Module 8269 (useIsFirstMessageInMediaPost)
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;
import closure_3 from "ensureGuildLoaded" /* 1391 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/media_channel/useIsFirstMessageInMediaPost.tsx");

export const useIsFirstMessageInMediaPost = function useIsFirstMessageInMediaPost(arg0) {
  const _require = arg0;
  const items = [arg0];
  return _require(647).useStateFromStores([], () => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      const channel_id = tmp.channel_id;
      let flag = false;
      if (tmp.id === obj.castChannelIdAsMessageId(channel_id)) {
        const channel = closure_1_3.getChannel(channel_id);
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
        obj2 = closure_1_3;
      }
      tmp2 = flag;
      obj = closure_1_1(closure_1_2[2]);
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
    obj = DISCORD_EPOCHDefault;
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
  obj = DISCORD_EPOCHDefault;
};