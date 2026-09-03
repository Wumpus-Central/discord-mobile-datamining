// === Module 6183: isChannelSpoilerGated ===

// Module 6183 (isChannelSpoilerGated)
import closure_2 from "ensureGuildLoaded" /* 1386 */;
import closure_3 from "initialize" /* 6184 */;

const require = arg1;
function isChannelSpoilerGated(channel) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = closure_3;
  }
  let obj2 = arg2;
  if (arg2 === undefined) {
    obj2 = closure_2;
  }
  if (obj === undefined) {
    obj = closure_3;
  }
  if (obj2 === undefined) {
    obj2 = closure_2;
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
const result = require("set").fileFinishedImporting("modules/spoiler_channels/SpoilerChannelUtils.tsx");

export const useGetSpoilerGatingChannelId = function useGetSpoilerGatingChannelId(stateFromStores) {
  const _require = stateFromStores;
  const items = [closure_3, closure_2];
  const items1 = [stateFromStores];
  return _require(586).useStateFromStores(items, () => {
    if (closure_1_3 !== undefined) {
      if (obj3 !== undefined) {
        let id1 = null;
        if (null != obj) {
          if (obj.isSpoilerChannel()) {
            let id = null;
            if (!obj2.didAgree(obj.id)) {
              id = obj.id;
            }
            id1 = id;
          } else {
            id1 = null;
            if (null != obj.parent_id) {
              const channel = obj3.getChannel(obj.parent_id);
              id1 = null;
              if (null != channel) {
                id1 = null;
                if (channel.isSpoilerChannel()) {
                  id1 = null;
                  if (!obj2.didAgree(channel.id)) {
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
};
export { isChannelSpoilerGated };
export const useIsChannelSpoilerGated = function useIsChannelSpoilerGated(channel) {
  const _require = channel;
  const items = [closure_3, closure_2];
  const items1 = [channel];
  return _require(586).useStateFromStores(items, () => closure_1_4(closure_0, closure_1_3, closure_1_2), items1);
};
export const useShouldShowSpoilerGateForChannelId = function useShouldShowSpoilerGateForChannelId(arg0) {
  const _require = arg0;
  const items = [closure_2, closure_3];
  const items1 = [arg0];
  return _require(586).useStateFromStores(items, () => closure_1_4(closure_1_2.getChannel(closure_0), closure_1_3, closure_1_2), items1);
};
export const shouldShowSpoilerGateForChannelId = function shouldShowSpoilerGateForChannelId(channelId) {
  let tmp = null != channelId;
  if (tmp) {
    tmp = isChannelSpoilerGated(channel.getChannel(channelId));
  }
  return tmp;
};