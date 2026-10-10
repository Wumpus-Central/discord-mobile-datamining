// === Module 7885: useIsFirstMessageInMediaPost ===

// Module 7885 (useIsFirstMessageInMediaPost)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import ChannelStore from "ChannelStore" /* 2065 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
function isFirstMessageInMediaPost(channel_id) {
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
          const channel1 = ChannelStore.getChannel(channel.parent_id);
          let isMediaChannelResult;
          if (channel1 != null) {
            isMediaChannelResult = channel1.isMediaChannel();
          }
          flag = true === isMediaChannelResult;
        }
      }
    }
    tmp = flag;
    obj = SnowflakeUtilsDefault;
  }
  return tmp;
}
function isFirstMessageIdInMediaPost(id, channel_id) {
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
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_channel/useIsFirstMessageInMediaPost.tsx");

export const useIsFirstMessageInMediaPost = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsFirstMessageInMediaPost(arg0) {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function n() {
      let tmp2 = null != closure_0;
      if (tmp2) {
        const channel_id = closure_0.channel_id;
        let flag = false;
        if (closure_0.id === obj.castChannelIdAsMessageId(channel_id)) {
          const channel = ChannelStore.getChannel(channel_id);
          flag = false;
          if (null != channel) {
            flag = false;
            if (channel.isForumPost()) {
              const channel1 = ChannelStore.getChannel(channel.parent_id);
              let isMediaChannelResult;
              if (channel1 != null) {
                isMediaChannelResult = channel1.isMediaChannel();
              }
              flag = true === isMediaChannelResult;
            }
          }
        }
        tmp2 = flag;
        obj = SnowflakeUtilsDefault;
      }
      return tmp2;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp6 = items1;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[2];
    tmp6 = cResult[3];
  }
  let obj = require("c");
  return require("useStateFromStores").useStateFromStores(first, tmp5, tmp6);
}) : (function useIsFirstMessageInMediaPost(arg0) {
  _require = arg0;
  const items = [arg0];
  return require("useStateFromStores").useStateFromStores([], () => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      const channel_id = closure_0.channel_id;
      let flag = false;
      if (closure_0.id === obj.castChannelIdAsMessageId(channel_id)) {
        const channel = ChannelStore.getChannel(channel_id);
        flag = false;
        if (null != channel) {
          flag = false;
          if (channel.isForumPost()) {
            const channel1 = ChannelStore.getChannel(channel.parent_id);
            let isMediaChannelResult;
            if (channel1 != null) {
              isMediaChannelResult = channel1.isMediaChannel();
            }
            flag = true === isMediaChannelResult;
          }
        }
      }
      tmp2 = flag;
      obj = SnowflakeUtilsDefault;
    }
    return tmp2;
  }, items);
});
export { isFirstMessageInMediaPost };
export { isFirstMessageIdInMediaPost };