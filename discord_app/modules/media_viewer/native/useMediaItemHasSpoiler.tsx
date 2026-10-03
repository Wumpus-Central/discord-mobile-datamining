// === Module 7938: useMediaItemHasSpoiler ===

// Module 7938 (useMediaItemHasSpoiler)
import MediaSourceUtil from "MediaSourceUtil" /* 7939 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_viewer/native/useMediaItemHasSpoiler.tsx");

export const useMediaItemHasSpoiler = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(10);
  if (cResult[0] !== arg0) {
    const fn = function u(arg0) {
      return arg0.sources[closure_0];
    };
    cResult[0] = arg0;
    cResult[1] = fn;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  const MediaViewerSourcesStore = tmp(7934).MediaViewerSourcesStore;
  state = MediaViewerSourcesStore.useState(tmp4);
  if (cResult[2] !== arg0) {
    const fn2 = function o(userRevealedIndexes) {
      userRevealedIndexes = userRevealedIndexes.userRevealedIndexes;
      return userRevealedIndexes.has(closure_0);
    };
    cResult[2] = arg0;
    cResult[3] = fn2;
    let tmp6 = fn2;
  } else {
    tmp6 = cResult[3];
  }
  const MediaViewerSourcesStore2 = tmp(7934).MediaViewerSourcesStore;
  const state1 = MediaViewerSourcesStore2.useState(tmp6);
  if (cResult[4] !== state) {
    let flattenSourceResult;
    if (null != state) {
      flattenSourceResult = tmp(7939).flattenSource(state);
      const tmpResult = tmp(7939);
    }
    cResult[4] = state;
    cResult[5] = flattenSourceResult;
    let tmp8 = flattenSourceResult;
  } else {
    tmp8 = cResult[5];
  }
  dependencyMap = tmp8;
  let spoiler;
  if (tmp8 != null) {
    spoiler = tmp8.spoiler;
  }
  let tmp12 = true === spoiler;
  closure_2 = tmp12;
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[6] = items;
    let tmp13 = items;
  } else {
    tmp13 = cResult[6];
  }
  if (cResult[7] === tmp8) {
    if (cResult[8] === tmp12) {
      let tmp15 = cResult[9];
    }
    const stateFromStores = tmp(573).useStateFromStores(tmp13, tmp15);
    tmp(7945);
    let tmp19 = !state1;
    if (!state1) {
      let obscure;
      if (tmp8 != null) {
        obscure = tmp8.obscure;
      }
      let tmp21 = true === obscure;
      if (!tmp21) {
        if (tmp12) {
          tmp12 = tmp18;
        }
        tmp21 = tmp12;
      }
      tmp19 = tmp21;
    }
    return tmp19;
  }
  const fn3 = function h() {
    let channel = null;
    if (closure_2) {
      let channelId;
      if (closure_1 != null) {
        channelId = closure_1.channelId;
      }
      channel = null;
      if (null != channelId) {
        channel = ChannelStore.getChannel(closure_1.channelId);
      }
    }
    return channel;
  };
  cResult[7] = tmp8;
  cResult[8] = tmp12;
  cResult[9] = fn3;
  tmp15 = fn3;
  const obj = require("c");
}) : ((arg0) => {
  _require = arg0;
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
});