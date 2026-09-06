// discord_app/modules/media_channel/useIsFirstMessageInMediaPost.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_channel/useIsFirstMessageInMediaPost.tsx");

export const useIsFirstMessageInMediaPost = function useIsFirstMessageInMediaPost(arg0) {
  _require = arg0;
  const items = [arg0];
  return require("useStateFromStores").useStateFromStores(
    [],
    () => {
      let tmp2 = null != closure_0;
      if (tmp2) {
        const channel_id = tmp.channel_id;
        let flag = false;
        if (tmp.id === obj.castChannelIdAsMessageId(channel_id)) {
          const channel = ChannelStore.getChannel(channel_id);
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
          obj2 = ChannelStore;
        }
        tmp2 = flag;
        obj = SnowflakeUtilsDefault;
      }
      return tmp2;
    },
    items,
  );
};
export const isFirstMessageInMediaPost = function isFirstMessageInMediaPost(channel_id) {
  let tmp = null != channel_id;
  if (tmp) {
    channel_id = channel_id.channel_id;
    let flag = false;
    if (channel_id.id === obj.castChannelIdAsMessageId(channel_id)) {
      const channel = ChannelStore.getChannel(channel_id);
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
      obj2 = ChannelStore;
    }
    tmp = flag;
    obj = SnowflakeUtilsDefault;
  }
  return tmp;
};
export const isFirstMessageIdInMediaPost = function isFirstMessageIdInMediaPost(id, channel_id) {
  if (id !== obj.castChannelIdAsMessageId(channel_id)) {
    return false;
  } else {
    const channel = ChannelStore.getChannel(channel_id);
    if (null != channel) {
      if (channel.isForumPost()) {
        const channel1 = ChannelStore.getChannel(channel.parent_id);
        let isMediaChannelResult;
        if (channel1 != null) {
          isMediaChannelResult = channel1.isMediaChannel();
        }
        return true === isMediaChannelResult;
      }
    }
    return false;
  }
  obj = SnowflakeUtilsDefault;
};
