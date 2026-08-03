// === Module 5842: isChannelSpoilerGated ===

// Module 5842 (isChannelSpoilerGated)
import ensureGuildLoaded from "ensureGuildLoaded";
import initialize from "initialize";

const require = arg1;
function isChannelSpoilerGated(channel) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = initialize;
  }
  let obj2 = arg2;
  if (arg2 === undefined) {
    obj2 = ensureGuildLoaded;
  }
  if (obj === undefined) {
    obj = initialize;
  }
  if (obj2 === undefined) {
    obj2 = ensureGuildLoaded;
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
const result = require("initialize").fileFinishedImporting("modules/spoiler_channels/SpoilerChannelUtils.tsx");

export const useGetSpoilerGatingChannelId = function useGetSpoilerGatingChannelId(stateFromStores) {
  const _require = stateFromStores;
  const items = [initialize, ensureGuildLoaded];
  const items1 = [stateFromStores];
  return _require(589).useStateFromStores(items, () => {
    if (outer1_3 !== undefined) {
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
export const useIsChannelSpoilerGated = function useIsChannelSpoilerGated(stateFromStores) {
  const _require = stateFromStores;
  const items = [initialize, ensureGuildLoaded];
  const items1 = [stateFromStores];
  return _require(589).useStateFromStores(items, () => outer1_4(closure_0, outer1_3, outer1_2), items1);
};
export const useShouldShowSpoilerGateForChannelId = function useShouldShowSpoilerGateForChannelId(arg0) {
  const _require = arg0;
  const items = [ensureGuildLoaded, initialize];
  const items1 = [arg0];
  return _require(589).useStateFromStores(items, () => outer1_4(outer1_2.getChannel(closure_0), outer1_3, outer1_2), items1);
};
export const shouldShowSpoilerGateForChannelId = function shouldShowSpoilerGateForChannelId(channelId) {
  let tmp = null != channelId;
  if (tmp) {
    tmp = isChannelSpoilerGated(channel.getChannel(channelId));
  }
  return tmp;
};