// === Module 9095: dispatcher ===

// Module 9095 (dispatcher)
import obj132 from "obj132" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;

let result = obj132.fileFinishedImporting("actions/DimensionActionCreators.tsx");

export default {
  updateChannelDimensions(id, eventTimestamp, scrollTop, scrollHeight, offsetHeight, fn) {
    const obj = { type: "UPDATE_CHANNEL_DIMENSIONS", channelId: id, timestamp: eventTimestamp, scrollTop, scrollHeight, offsetHeight };
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
  channelListScrollTo(closure_12, dMFromUserId) {
    const obj = { type: "UPDATE_CHANNEL_LIST_DIMENSIONS", guildId: closure_12, scrollTo: dMFromUserId, channelIds: [] };
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
  }
};