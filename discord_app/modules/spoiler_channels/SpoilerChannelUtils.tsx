// === Module 5267: isChannelSpoilerGated ===

// Module 5267 (isChannelSpoilerGated)
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import initialize from "initialize" /* 5268 */;

const require = fn;
function isChannelSpoilerGated(channel, closure_1_3, closure_1_2) {
  let obj = closure_1_3;
  if (closure_1_3 === undefined) {
    obj = closure_3;
  }
  let obj2 = closure_1_2;
  if (closure_1_2 === undefined) {
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
const result = require("obj132").fileFinishedImporting("modules/spoiler_channels/SpoilerChannelUtils.tsx");

export const useGetSpoilerGatingChannelId = function useGetSpoilerGatingChannelId(stateFromStores) {
  const _require = stateFromStores;
  const items = [closure_3, closure_2];
  const items1 = [stateFromStores];
  return _require(589).useStateFromStores(items, () => {
    if (closure_1_3 !== undefined) {
      if (closure_1_2 !== undefined) {
        let id1 = null;
        if (null != stateFromStores) {
          if (stateFromStores.isSpoilerChannel()) {
            let id = null;
            if (!closure_1_3.didAgree(stateFromStores.id)) {
              id = stateFromStores.id;
            }
            id1 = id;
          } else {
            id1 = null;
            if (null != stateFromStores.parent_id) {
              const channel = closure_1_2.getChannel(stateFromStores.parent_id);
              id1 = null;
              if (null != channel) {
                id1 = null;
                if (channel.isSpoilerChannel()) {
                  id1 = null;
                  if (!closure_1_3.didAgree(channel.id)) {
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
  return _require(589).useStateFromStores(items, () => isChannelSpoilerGated(closure_0, closure_1_3, closure_1_2), items1);
};
export const useShouldShowSpoilerGateForChannelId = function useShouldShowSpoilerGateForChannelId(arg0) {
  const _require = arg0;
  const items = [closure_2, closure_3];
  const items1 = [arg0];
  return _require(589).useStateFromStores(items, () => isChannelSpoilerGated(closure_1_2.getChannel(closure_0), closure_1_3, closure_1_2), items1);
};
export const shouldShowSpoilerGateForChannelId = function shouldShowSpoilerGateForChannelId(channelId) {
  let tmp = null != channelId;
  if (tmp) {
    tmp = isChannelSpoilerGated(channel.getChannel(channelId));
  }
  return tmp;
};