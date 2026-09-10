// === Module 8329: useMediaItemHasSpoiler ===

// Module 8329 (useMediaItemHasSpoiler)
import MediaSourceUtil from "MediaSourceUtil" /* 8330 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;

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
  let tmpResult = tmp(tmp2[4]);
  const items1 = [closure_3];
  const stateFromStores = tmpResult.useStateFromStores(items1, () => {
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
  tmpResult = tmp(tmp2[5]);
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