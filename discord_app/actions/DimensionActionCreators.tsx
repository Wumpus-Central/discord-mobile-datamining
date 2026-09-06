// discord_app/actions/DimensionActionCreators.tsx
import DispatcherDefault from "../Dispatcher.tsx";
import size from "../../_runtime/metro/00002__.js";

let result = size.fileFinishedImporting("actions/DimensionActionCreators.tsx");

export default {
  updateChannelDimensions(id, eventTimestamp, scrollTop, scrollHeight, offsetHeight, fn) {
    const obj = {
      type: "UPDATE_CHANNEL_DIMENSIONS",
      channelId: id,
      timestamp: eventTimestamp,
      scrollTop,
      scrollHeight,
      offsetHeight,
    };
    obj.dispatch(obj);
    if (fn != null) {
      fn();
    }
  },
  updateChannelListScroll(guildId, scrollTop) {
    let items = arg2;
    if (arg2 === undefined) {
      items = [];
    }
    const obj = { type: "UPDATE_CHANNEL_LIST_DIMENSIONS", guildId, scrollTop, channelIds: items };
    obj.dispatch(obj);
  },
  channelListScrollTo(guildId, dMFromUserId) {
    const obj = { type: "UPDATE_CHANNEL_LIST_DIMENSIONS", guildId, scrollTo: dMFromUserId, channelIds: [] };
    obj.dispatch(obj);
  },
  clearChannelListScrollTo(guildId) {
    const obj = { type: "UPDATE_CHANNEL_LIST_DIMENSIONS", guildId, scrollTo: null, channelIds: [] };
    obj.dispatch(obj);
  },
  clearChannelDimensions(channelId, fn) {
    const result = this.updateChannelDimensions(channelId, Date.now(), null, null, null, fn);
  },
  updateGuildListScrollTo(scrollTop) {
    const obj = { type: "UPDATE_GUILD_LIST_DIMENSIONS", scrollTop };
    obj.dispatch(obj);
  },
};
