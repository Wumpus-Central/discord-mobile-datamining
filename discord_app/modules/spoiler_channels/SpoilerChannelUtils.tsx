// discord_app/modules/spoiler_channels/SpoilerChannelUtils.tsx
import ChannelStore from "../../stores/ChannelStore.tsx";
import ChannelSpoilerAgreeStore from "ChannelSpoilerAgreeStore.tsx";

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
const size = fn(2);
const result = size.fileFinishedImporting("modules/spoiler_channels/SpoilerChannelUtils.tsx");

export const useGetSpoilerGatingChannelId = function useGetSpoilerGatingChannelId(stateFromStores) {
  _require = stateFromStores;
  const items = [ChannelSpoilerAgreeStore, ChannelStore];
  const items1 = [stateFromStores];
  return require("initialize").useStateFromStores(
    items,
    () => {
      if (ChannelSpoilerAgreeStore !== undefined) {
        if (ChannelStore !== undefined) {
          let id1 = null;
          if (null != stateFromStores) {
            if (stateFromStores.isSpoilerChannel()) {
              let id = null;
              if (!ChannelSpoilerAgreeStore.didAgree(stateFromStores.id)) {
                id = stateFromStores.id;
              }
              id1 = id;
            } else {
              id1 = null;
              if (null != stateFromStores.parent_id) {
                const channel = ChannelStore.getChannel(stateFromStores.parent_id);
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
    },
    items1,
  );
};
export { isChannelSpoilerGated };
export const useIsChannelSpoilerGated = function useIsChannelSpoilerGated(channel) {
  _require = channel;
  const items = [ChannelSpoilerAgreeStore, ChannelStore];
  const items1 = [channel];
  return require("initialize").useStateFromStores(
    items,
    () => isChannelSpoilerGated(closure_0, ChannelSpoilerAgreeStore, ChannelStore),
    items1,
  );
};
export const useShouldShowSpoilerGateForChannelId = function useShouldShowSpoilerGateForChannelId(arg0) {
  _require = arg0;
  const items = [ChannelStore, ChannelSpoilerAgreeStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(
    items,
    () => isChannelSpoilerGated(ChannelStore.getChannel(closure_0), ChannelSpoilerAgreeStore, ChannelStore),
    items1,
  );
};
export const shouldShowSpoilerGateForChannelId = function shouldShowSpoilerGateForChannelId(channelId) {
  let tmp = null != channelId;
  if (tmp) {
    tmp = isChannelSpoilerGated(ChannelStore.getChannel(channelId));
  }
  return tmp;
};
