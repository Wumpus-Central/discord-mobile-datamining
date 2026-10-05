// === Module 7602: useIsFirstMessageInMediaPost ===

// Module 7602 (useIsFirstMessageInMediaPost)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp5;
  let tmp6;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(4);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function n() {
      let tmp2 = null != closure_0;
      if (tmp2) {
        const channel_id = closure_0.channel_id;
        const id = closure_0.id;
        let flag = false;
        const obj = SnowflakeUtilsDefault;
        if (id === obj.castChannelIdAsMessageId(channel_id)) {
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
      }
      return tmp2;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp6 = items1;
    tmp5 = fn;
  } else {
    tmp5 = cResult[2];
    tmp6 = cResult[3];
  }
  const tmpResult = tmp(573);
  return tmpResult.useStateFromStores(first, tmp5, tmp6);
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  let obj = require("useStateFromStores");
  const items = [arg0];
  return obj.useStateFromStores([], () => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      const channel_id = closure_0.channel_id;
      const id = closure_0.id;
      let flag = false;
      const obj = SnowflakeUtilsDefault;
      if (id === obj.castChannelIdAsMessageId(channel_id)) {
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
    }
    return tmp2;
  }, items);
});
function isFirstMessageInMediaPost(channel_id) {
  let tmp = null != channel_id;
  if (tmp) {
    channel_id = channel_id.channel_id;
    const id = channel_id.id;
    let flag = false;
    const obj = SnowflakeUtilsDefault;
    if (id === obj.castChannelIdAsMessageId(channel_id)) {
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
  }
  return tmp;
}
function isFirstMessageIdInMediaPost(id, channel_id) {
  const obj = SnowflakeUtilsDefault;
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
}
const result = size.fileFinishedImporting("modules/media_channel/useIsFirstMessageInMediaPost.tsx");

export const useIsFirstMessageInMediaPost = tmp2;
export { isFirstMessageInMediaPost };
export { isFirstMessageIdInMediaPost };