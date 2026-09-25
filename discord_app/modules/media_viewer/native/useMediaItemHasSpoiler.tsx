// === Module 7704: useMediaItemHasSpoiler ===

// Module 7704 (useMediaItemHasSpoiler)
import MediaSourceUtil from "MediaSourceUtil" /* 7705 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2044 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_viewer/native/useMediaItemHasSpoiler.tsx");

export const useMediaItemHasSpoiler = function useMediaItemHasSpoiler(index) {
  _require = index;
  const MediaViewerSourcesStore = require("useMediaViewerSources").MediaViewerSourcesStore;
  state = MediaViewerSourcesStore.useState((arg0) => arg0.sources[closure_0]);
  const MediaViewerSourcesStore2 = require("useMediaViewerSources").MediaViewerSourcesStore;
  const state1 = MediaViewerSourcesStore2.useState((userRevealedIndexes) => {
    userRevealedIndexes = userRevealedIndexes.userRevealedIndexes;
    return userRevealedIndexes.has(closure_0);
  });
  const items = [state];
  memo = memo.useMemo(() => {
    let flattenSourceResult;
    if (null != state) {
      flattenSourceResult = MediaSourceUtil.flattenSource(tmp);
    }
    return flattenSourceResult;
  }, items);
  let spoiler;
  if (memo != null) {
    spoiler = memo.spoiler;
  }
  let tmp7 = true === spoiler;
  closure_3 = tmp7;
  const items1 = [closure_3];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items1, () => {
    let channel = null;
    if (closure_3) {
      let channelId;
      if (memo != null) {
        channelId = memo.channelId;
      }
      channel = null;
      if (null != channelId) {
        channel = ChannelStore.getChannel(memo.channelId);
      }
    }
    return channel;
  });
  require("computeGlobalSpoilerDisplay");
  let tmp11 = !state1;
  if (!state1) {
    let obscure;
    if (memo != null) {
      obscure = memo.obscure;
    }
    let tmp13 = true === obscure;
    if (!tmp13) {
      if (tmp7) {
        tmp7 = tmp10;
      }
      tmp13 = tmp7;
    }
    tmp11 = tmp13;
  }
  return tmp11;
};