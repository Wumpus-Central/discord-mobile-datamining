// === Module 11074: dispatcher ===

// Module 11074 (dispatcher)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;

let result = set.fileFinishedImporting("actions/DimensionActionCreators.tsx");

export default {
  updateChannelDimensions(id, eventTimestamp, scrollTop, scrollHeight, offsetHeight, arg5) {
    let obj = dispatcherDefault;
    obj = { type: "UPDATE_CHANNEL_DIMENSIONS", channelId: id, timestamp: eventTimestamp, scrollTop, scrollHeight, offsetHeight };
    obj.dispatch(obj);
    if (arg5 != null) {
      arg5();
    }
  },
  updateChannelListScroll(guildId, scrollTop) {
    let items = arg2;
    if (arg2 === undefined) {
      items = [];
    }
    let obj = dispatcherDefault;
    obj = { type: "UPDATE_CHANNEL_LIST_DIMENSIONS", guildId, scrollTop, channelIds: items };
    obj.dispatch(obj);
  },
  channelListScrollTo(closure_12, dMFromUserId) {
    let obj = dispatcherDefault;
    obj = { type: "UPDATE_CHANNEL_LIST_DIMENSIONS", guildId: closure_12, scrollTo: dMFromUserId, channelIds: [] };
    obj.dispatch(obj);
  },
  clearChannelListScrollTo(guildId) {
    let obj = dispatcherDefault;
    obj = { type: "UPDATE_CHANNEL_LIST_DIMENSIONS", guildId, scrollTo: null, channelIds: [] };
    obj.dispatch(obj);
  },
  clearChannelDimensions(channelId) {
    const result = this.updateChannelDimensions(channelId, Date.now(), null, null, null, arg1);
  },
  updateGuildListScrollTo(scrollTop) {
    let obj = dispatcherDefault;
    obj = { type: "UPDATE_GUILD_LIST_DIMENSIONS", scrollTop };
    obj.dispatch(obj);
  }
};