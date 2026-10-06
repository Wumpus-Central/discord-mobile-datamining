// === Module 11298: useShouldHideMediaOptions ===

// Module 11298 (useShouldHideMediaOptions)
import ChannelConstants from "ChannelConstants" /* 2058 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const ChannelFlags = ChannelConstants.ChannelFlags;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp6;
  let tmp7;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(5);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
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
          const getChannel = ChannelStore.getChannel;
          if (channel != null) {
            parent_id1 = channel.parent_id;
          }
          channel1 = getChannel(parent_id1);
        }
      }
      return channel1;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(573);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (cResult[3] !== stateFromStores) {
    let hasFlagResult;
    if (stateFromStores != null) {
      hasFlagResult = stateFromStores.hasFlag(ChannelFlags.HIDE_MEDIA_DOWNLOAD_OPTIONS);
    }
    cResult[3] = stateFromStores;
    cResult[4] = hasFlagResult;
    tmp7 = hasFlagResult;
  } else {
    tmp7 = cResult[4];
  }
  return true === tmp7;
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  const items = [ChannelStore];
  const obj = require("useStateFromStores");
  const stateFromStores = obj.useStateFromStores(items, () => {
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
        const getChannel = ChannelStore.getChannel;
        if (channel != null) {
          parent_id1 = channel.parent_id;
        }
        channel1 = getChannel(parent_id1);
      }
    }
    return channel1;
  });
  let hasFlagResult;
  if (stateFromStores != null) {
    hasFlagResult = stateFromStores.hasFlag(ChannelFlags.HIDE_MEDIA_DOWNLOAD_OPTIONS);
  }
  return true === hasFlagResult;
});
const result = size.fileFinishedImporting("modules/media_channel/useShouldHideMediaOptions.tsx");

export default tmp2;