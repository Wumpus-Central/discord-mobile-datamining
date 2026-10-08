// === Module 5949: SpoilerChannelUtils ===

// Module 5949 (SpoilerChannelUtils)
import ChannelStore from "ChannelStore" /* 2063 */;
import ChannelSpoilerAgreeStore from "ChannelSpoilerAgreeStore" /* 5950 */;

const require = globalThis.__r;

const require = fn;
function isChannelSpoilerGated(channel) {
  let obj = ChannelSpoilerAgreeStore;
  if (ChannelSpoilerAgreeStore === undefined) {
    obj = ChannelSpoilerAgreeStore;
  }
  let obj2 = ChannelStore;
  if (ChannelStore === undefined) {
    obj2 = ChannelStore;
  }
  if (obj === undefined) {
    obj = ChannelSpoilerAgreeStore;
  }
  if (obj2 === undefined) {
    obj2 = ChannelStore;
  }
  let id1 = null;
  if (null != channel) {
    if (channel.isSpoilerChannel()) {
      let id = null;
      if (!obj.didAgree(channel.id)) {
        id = channel.id;
      }
      id1 = id;
    } else {
      id1 = null;
      if (null != channel.parent_id) {
        channel = obj2.getChannel(channel.parent_id);
        id1 = null;
        if (null != channel) {
          id1 = null;
          if (channel.isSpoilerChannel()) {
            id1 = null;
            if (!obj.didAgree(channel.id)) {
              id1 = channel.id;
            }
          }
        }
      }
    }
  }
  return null != id1;
}
fn(558);
let ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGetSpoilerGatingChannelId(arg0) {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelSpoilerAgreeStore, ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      if (ChannelSpoilerAgreeStore !== undefined) {
        if (ChannelStore !== undefined) {
          let id1 = null;
          if (null != spoilerChannel) {
            if (spoilerChannel.isSpoilerChannel()) {
              let id = null;
              if (!ChannelSpoilerAgreeStore.didAgree(spoilerChannel.id)) {
                id = spoilerChannel.id;
              }
              id1 = id;
            } else {
              id1 = null;
              if (null != spoilerChannel.parent_id) {
                const channel = ChannelStore.getChannel(spoilerChannel.parent_id);
                id1 = null;
                if (null != channel) {
                  id1 = null;
                  if (channel.isSpoilerChannel()) {
                    id1 = null;
                    if (!ChannelSpoilerAgreeStore.didAgree(channel.id)) {
                      id1 = channel.id;
                    }
                  }
                }
              }
            }
          }
          return id1;
        }
      }
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp8 = items1;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp7, tmp8);
}) : (function useGetSpoilerGatingChannelId(arg0) {
  _require = arg0;
  const items = [ChannelSpoilerAgreeStore, ChannelStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    if (ChannelSpoilerAgreeStore !== undefined) {
      if (ChannelStore !== undefined) {
        let id1 = null;
        if (null != spoilerChannel) {
          if (spoilerChannel.isSpoilerChannel()) {
            let id = null;
            if (!ChannelSpoilerAgreeStore.didAgree(spoilerChannel.id)) {
              id = spoilerChannel.id;
            }
            id1 = id;
          } else {
            id1 = null;
            if (null != spoilerChannel.parent_id) {
              const channel = ChannelStore.getChannel(spoilerChannel.parent_id);
              id1 = null;
              if (null != channel) {
                id1 = null;
                if (channel.isSpoilerChannel()) {
                  id1 = null;
                  if (!ChannelSpoilerAgreeStore.didAgree(channel.id)) {
                    id1 = channel.id;
                  }
                }
              }
            }
          }
        }
        return id1;
      }
    }
  }, items1);
});
ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsChannelSpoilerGated(arg0) {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelSpoilerAgreeStore, ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      return isChannelSpoilerGated(closure_0, ChannelSpoilerAgreeStore, ChannelStore);
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp8 = items1;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp7, tmp8);
}) : (function useIsChannelSpoilerGated(arg0) {
  _require = arg0;
  const items = [ChannelSpoilerAgreeStore, ChannelStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => isChannelSpoilerGated(closure_0, ChannelSpoilerAgreeStore, ChannelStore), items1);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/spoiler_channels/SpoilerChannelUtils.tsx");

export const useGetSpoilerGatingChannelId = tmp2;
export { isChannelSpoilerGated };
export const useIsChannelSpoilerGated = tmp3;
export const useShouldShowSpoilerGateForChannelId = ReactCompilerGating.isReactCompilerEnabled() ? (function useShouldShowSpoilerGateForChannelId(arg0) {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore, ChannelSpoilerAgreeStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      return isChannelSpoilerGated(ChannelStore.getChannel(closure_0), ChannelSpoilerAgreeStore, ChannelStore);
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp8 = items1;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp7, tmp8);
}) : (function useShouldShowSpoilerGateForChannelId(arg0) {
  _require = arg0;
  const items = [ChannelStore, ChannelSpoilerAgreeStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => isChannelSpoilerGated(ChannelStore.getChannel(closure_0), ChannelSpoilerAgreeStore, ChannelStore), items1);
});
export const shouldShowSpoilerGateForChannelId = function shouldShowSpoilerGateForChannelId(channelId) {
  let tmp = null != channelId;
  if (tmp) {
    tmp = isChannelSpoilerGated(ChannelStore.getChannel(channelId));
  }
  return tmp;
};