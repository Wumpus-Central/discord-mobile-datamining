// discord_app/actions/DimensionActionCreators.tsx
import DispatcherDefault from "../Dispatcher.tsx";
import size from "../../_runtime/metro/00002__.js";

let result = size.fileFinishedImporting("actions/DimensionActionCreators.tsx");

export default {
  updateChannelDimensions(id, eventTimestamp, scrollTop, scrollHeight, offsetHeight, fn) {
    DispatcherDefault.dispatch({
      type: "UPDATE_CHANNEL_DIMENSIONS",
      channelId: id,
      timestamp: eventTimestamp,
      scrollTop,
      scrollHeight,
      offsetHeight,
    });
    if (fn != null) {
      fn();
    }
  },
  updateChannelListScroll(guildId, scrollTop) {
    let items = arg2;
    if (arg2 === undefined) {
      items = [];
    }
    DispatcherDefault.dispatch({ type: "UPDATE_CHANNEL_LIST_DIMENSIONS", guildId, scrollTop, channelIds: items });
  },
  channelListScrollTo(guildId, dMFromUserId) {
    DispatcherDefault.dispatch({
      type: "UPDATE_CHANNEL_LIST_DIMENSIONS",
      guildId,
      scrollTo: dMFromUserId,
      channelIds: [],
    });
  },
  clearChannelListScrollTo(guildId) {
    DispatcherDefault.dispatch({ type: "UPDATE_CHANNEL_LIST_DIMENSIONS", guildId, scrollTo: null, channelIds: [] });
  },
  clearChannelDimensions(channelId, fn) {
    const result = this.updateChannelDimensions(channelId, Date.now(), null, null, null, fn);
  },
  updateGuildListScrollTo(scrollTop) {
    DispatcherDefault.dispatch({ type: "UPDATE_GUILD_LIST_DIMENSIONS", scrollTop });
  },
};
